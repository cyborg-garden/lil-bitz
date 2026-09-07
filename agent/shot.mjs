// The inner loop: boot the game headless, walk, collect, capture, assert.
//
//   node agent/shot.mjs                       walk and shoot
//   LB_OUT=agent/shots/x.png node agent/shot.mjs
//   LB_URL=http://localhost:4173/ node agent/shot.mjs   against a preview build
//
// Exits non-zero on a console error, a flat frame, a tiny PNG, or a player that
// did not move. A blank capture beside healthy telemetry is the failure mode
// this file exists to make impossible to miss.

import { chromium } from 'playwright';
import { statSync, mkdirSync } from 'node:fs';

// DEFAULT LAUNCH ARGS ONLY. --use-gl / --use-angle / --enable-unsafe-swiftshader
// were verified to produce a blank PNG while every telemetry field read healthy.
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 960, height: 540 } });

const errors = [];
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
page.on('pageerror', (e) => errors.push(String(e)));

const url = process.env.LB_URL ?? 'http://localhost:5173/';
const out = process.env.LB_OUT ?? 'agent/shots/latest.png';
const seed = process.env.LB_SEED ?? 'agent-default';
mkdirSync('agent/shots', { recursive: true });

await page.goto(url, { waitUntil: 'load' });
await page.waitForFunction(() => window.__lb?.ready === true, { timeout: 20000 });
// Come through the title. The game does not accept input until a character is
// chosen, so every harness has to walk the same path a player does.
await page.evaluate(() => window.__lb.title.start());

await page.evaluate((s) => { window.__lb.setSeed(s); window.__lb.pause(); }, seed);

const start = await page.evaluate(() => window.__lb.player);

// Walk with a HELD key, stepping the clock by hand. Playwright's
// keyboard.down/up is required here; the MCP browser_press_key helper sends
// down and up instantly and the player never moves.
// KeyW stays HELD for the whole run. The collect sweep below has to keep
// walking: standing still next to nothing finds nothing, and an earlier version
// of this script reported "collected 0" purely because it stopped moving first.
await page.keyboard.down('KeyW');
for (let i = 0; i < 180; i++) await page.evaluate(() => window.__lb.step(1 / 60));

// Walk on and collect the first few things we pass, so the kete path and the
// HUD are exercised on every run rather than only when someone remembers to.
const collected = await page.evaluate(() => {
  let took = 0;
  for (let i = 0; i < 1800 && took < 3; i++) {
    window.__lb.step(1 / 60);
    if (window.__lb.nearest) {
      window.__lb.collect();
      window.__lb.step(1 / 60);
      took++;
    }
  }
  return took;
});

await page.keyboard.up('KeyW');
await page.evaluate(() => window.__lb.step(1 / 60));

const state = await page.evaluate(() => JSON.parse(JSON.stringify({
  player: window.__lb.player,
  kete: window.__lb.kete,
  nearest: window.__lb.nearest,
  visibleCount: window.__lb.visibleCount,
  render: window.__lb.render,
  // Read the HUD as the player sees it, not as the game believes it to be.
  // COMPUTED style, not el.hidden. The property said hidden while the element
  // was painted on screen, because an author `display: flex` outranked the UA
  // stylesheet's [hidden] rule. Ask what is rendered, never what was set.
  promptText: (() => {
    const el = document.querySelector('#prompt');
    if (!el) return null;
    const cs = getComputedStyle(el);
    const shown = cs.display !== 'none' && cs.visibility !== 'hidden' && cs.opacity !== '0';
    return shown ? el.textContent.trim() : null;
  })(),
  keteText: document.querySelector('#kete-n')?.textContent ?? null,
})));

await page.screenshot({ path: out });

// --- blank-frame guard -----------------------------------------------------
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

const bytes = statSync(out).size;
const moved = Math.hypot(state.player.x - start.x, state.player.z - start.z);

console.log(JSON.stringify({
  ...state, collected, moved: Number(moved.toFixed(2)),
  variance: Number(probe.variance.toFixed(2)), bytes, errors: errors.length, out,
}, null, 2));

const fails = [];
if (errors.length) fails.push(`console errors: ${errors.slice(0, 3).join(' | ')}`);
if (probe.variance < 4) fails.push(`frame is flat (stddev ${probe.variance.toFixed(2)})`);
if (bytes < 20000) fails.push(`png suspiciously small (${bytes}b)`);
if (moved < 1) fails.push(`player did not move (${moved.toFixed(2)}m)`);
if (state.visibleCount < 20) fails.push(`world is empty (${state.visibleCount} objects)`);
if (state.render.calls === 0) fails.push('nothing was drawn');
if (collected === 0) fails.push('walked the whole route and collected nothing');
// The HUD prompt and the reported nearest must agree. They disagreed once, and
// a HUD that describes a state the game is not in is worse than no HUD.
if (state.promptText && !state.nearest) {
  fails.push(`HUD shows "${state.promptText}" but nearest is null`);
}
if (!state.promptText && state.nearest) {
  fails.push(`nearest is ${state.nearest.itemId} but the HUD shows nothing`);
}

await browser.close();

if (fails.length) {
  for (const f of fails) console.error(`FAIL ${f}`);
  process.exit(1);
}
console.log(`\nOK — ${out} (${bytes} bytes). Now LOOK at it.`);
