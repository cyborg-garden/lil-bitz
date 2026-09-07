// Day-one gate. Runs the five checks from BUILD-PLAN 2.8 and reports pass/fail
// per mechanism, so a failure names which assumption broke rather than just
// producing a bad picture.
//
//   usage: node agent/gate.mjs            (against the dev server)
//          LB_URL=... node agent/gate.mjs (against a preview build)

import { chromium } from 'playwright';
import { statSync, mkdirSync } from 'node:fs';

// LAUNCH WITH DEFAULT ARGS. BUILD-PLAN reports that --use-gl / --use-angle /
// --enable-unsafe-swiftshader produced a BLANK png while every telemetry field
// still read healthy. Modern headless Chromium already falls back to SwiftShader.
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 960, height: 540 } });

const errors = [];
page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()); });
page.on('pageerror', (err) => errors.push(String(err)));

const url = process.env.LB_URL ?? 'http://localhost:5173/';
mkdirSync('agent/shots', { recursive: true });

const results = [];
const check = (name, pass, detail) => {
  results.push({ name, pass, detail });
  console.log(`${pass ? '  PASS' : '  FAIL'}  ${name}\n        ${detail}`);
};

await page.goto(url, { waitUntil: 'load' });
await page.waitForFunction(() => window.__lb?.ready === true, { timeout: 20000 });
// Come through the title. The game does not accept input until a character is
// chosen, so every harness has to walk the same path a player does.
await page.evaluate(() => window.__lb.title.start());

const renderer = await page.evaluate(() => {
  const gl = document.querySelector('canvas').getContext('webgl2');
  const dbg = gl.getExtension('WEBGL_debug_renderer_info');
  return {
    webgl2: !!gl,
    vendor: dbg ? gl.getParameter(dbg.UNMASKED_VENDOR_WEBGL) : 'n/a',
    renderer: dbg ? gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL) : 'n/a',
  };
});
check('0. WebGL2 context exists', renderer.webgl2, `${renderer.vendor} / ${renderer.renderer}`);

// --- mechanism 3: held key under a paused clock ----------------------------
await page.evaluate(() => window.__lb.pause());
const before = await page.evaluate(() => window.__lb.player);

await page.keyboard.down('KeyW');
const heldSeen = await page.evaluate(() => window.__lb.held);
for (let i = 0; i < 120; i++) {
  await page.evaluate(() => window.__lb.step(1 / 60));
}
await page.keyboard.up('KeyW');

const after = await page.evaluate(() => window.__lb.player);
const moved = Math.hypot(after.x - before.x, after.z - before.z);
// 120 steps at 1/60s and 2.2 m/s is 4.4m of travel.
check(
  '3. held key moves the player while the clock is paused',
  moved > 4.0 && moved < 4.8,
  `moved ${moved.toFixed(3)}m (expected ~4.40), keydown saw ${JSON.stringify(heldSeen)}`,
);

// --- mechanism 1: screenshot of a paused canvas ----------------------------
const out = 'agent/shots/gate.png';
await page.screenshot({ path: out });
const bytes = statSync(out).size;
check(
  '1. page.screenshot() captures a paused preserveDrawingBuffer canvas',
  bytes > 20000,
  `${bytes} bytes on disk (blank reference from BUILD-PLAN was 4673)`,
);

// --- mechanism 2: drawImage variance probe on a WebGL canvas ---------------
const probe = await page.evaluate(() => {
  const src = document.querySelector('canvas');
  const c = document.createElement('canvas');
  c.width = 160; c.height = 90;
  const ctx = c.getContext('2d');
  ctx.drawImage(src, 0, 0, 160, 90);
  const d = ctx.getImageData(0, 0, 160, 90).data;
  let n = 0, sum = 0, sumSq = 0;
  for (let i = 0; i < d.length; i += 4) {
    const v = (d[i] + d[i + 1] + d[i + 2]) / 3;
    sum += v; sumSq += v * v; n++;
  }
  const mean = sum / n;
  return { variance: Math.sqrt(sumSq / n - mean * mean), mean };
});
check(
  '2. drawImage variance probe reads the WebGL canvas',
  probe.variance > 4,
  `stddev ${probe.variance.toFixed(2)}, mean luma ${probe.mean.toFixed(1)} (flat frame would be ~0)`,
);

const info = await page.evaluate(() => window.__lb.render);
check('4. geometry actually drew', info.calls > 0 && info.triangles > 100,
  `${info.calls} draw calls, ${info.triangles} triangles`);

check('5. no console errors', errors.length === 0,
  errors.length ? errors.slice(0, 3).join(' | ') : 'clean');

await browser.close();

const failed = results.filter((r) => !r.pass);
console.log(`\n${results.length - failed.length}/${results.length} passed`);
process.exit(failed.length ? 1 : 0);
