// Contact sheet: capture the same seed from several places, so a look at the
// game is one command rather than four. Writes agent/shots/tour-*.png.
//
//   node agent/tour.mjs

import { chromium } from 'playwright';
import { statSync, mkdirSync } from 'node:fs';

const STOPS = [
  { name: 'opening', x: 0, z: 8, yaw: Math.PI, note: 'what the player sees first' },
  { name: 'shoreline', x: 0, z: 8, yaw: 0, note: 'facing the sea' },
  { name: 'dune', x: 12, z: 19, yaw: Math.PI, note: 'the blend band' },
  { name: 'forest', x: -20, z: 78, yaw: Math.PI, note: 'closed forest' },
  { name: 'trinket-maker', x: 6, z: 27, yaw: Math.PI, note: "Lys's NPC, up close" },
];

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 800, height: 450 } });
const errors = [];
page.on('pageerror', (e) => errors.push(String(e)));

const url = process.env.LB_URL ?? 'http://localhost:5173/';
mkdirSync('agent/shots', { recursive: true });

await page.goto(url, { waitUntil: 'load' });
await page.waitForFunction(() => window.__lb?.ready === true, { timeout: 20000 });
// Come through the title. The game does not accept input until a character is
// chosen, so every harness has to walk the same path a player does.
await page.evaluate(() => window.__lb.title.start());
await page.evaluate(() => { window.__lb.setSeed('agent-default'); window.__lb.pause(); });

const rows = [];
for (const s of STOPS) {
  await page.evaluate(({ x, z, yaw }) => {
    window.__lb.teleport(x, z);
    window.__lb.setYaw(yaw);
    for (let i = 0; i < 4; i++) window.__lb.step(1 / 60);
  }, s);

  const out = `agent/shots/tour-${s.name}.png`;
  await page.screenshot({ path: out });

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
    return Math.sqrt(sumSq / n - mean * mean);
  });

  rows.push({
    stop: s.name,
    note: s.note,
    out,
    bytes: statSync(out).size,
    variance: Number(probe.toFixed(1)),
    ...(await page.evaluate(() => ({
      items: window.__lb.visibleCount,
      scenery: window.__lb.sceneryCount,
      calls: window.__lb.render.calls,
    }))),
  });
}

console.table(rows);
await browser.close();

const bad = rows.filter((r) => r.variance < 4 || r.bytes < 12000);
if (errors.length) { console.error('page errors:', errors.slice(0, 3)); process.exit(1); }
if (bad.length) { console.error('flat frames:', bad.map((b) => b.stop)); process.exit(1); }
