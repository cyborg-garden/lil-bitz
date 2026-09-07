// Simulate a real session in the real game and report the economy.
//
// Distinct from sim-loot.mjs, which exercises the maths in isolation. This
// drives the actual browser build, so it catches wiring faults the pure
// simulation cannot see: a refusal that never fires, a script that never
// advances, an Epic that never triggers.
//
//   node agent/playthrough.mjs [minutes] [strategy]
//     strategy: greedy  take everything     (should keep k low)
//               picky   take tier 3+ only   (should drive k up)

import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';

const minutes = Number(process.argv[2] ?? 5);
const strategy = process.argv[3] ?? 'greedy';
const STEPS = Math.round(minutes * 60 * 60);

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 960, height: 540 } });
const errors = [];
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
page.on('pageerror', (e) => errors.push(String(e)));

mkdirSync('agent/shots', { recursive: true });
await page.goto(process.env.LB_URL ?? 'http://localhost:5173/', { waitUntil: 'load' });
await page.waitForFunction(() => window.__lb?.ready === true, { timeout: 20000 });
// Come through the title. The game does not accept input until a character is
// chosen, so every harness has to walk the same path a player does.
await page.evaluate(() => window.__lb.title.start());
await page.evaluate(() => { window.__lb.setSeed('playthrough'); window.__lb.pause(); });

// Held forward, with a slow turn, so the player sweeps new ground instead of
// walking one straight line off to infinity.
await page.keyboard.down('KeyW');

const result = await page.evaluate(async ({ STEPS, strategy }) => {
  const takenTiers = [];
  const timeline = [];
  let lastEpicCount = 0;

  for (let i = 0; i < STEPS; i++) {
    // Slow heading drift around "inland". An earlier version swung the yaw by
    // two radians every two seconds, so the player oscillated on the spot and
    // covered 26 metres in five minutes instead of six hundred.
    if (i % 30 === 0) {
      window.__lb.setYaw(Math.PI + Math.sin(i / 2400) * 0.9 + Math.sin(i / 731) * 0.25);
    }

    window.__lb.stepLogic(1 / 60);

    const n = window.__lb.nearest;
    if (n) {
      const want = strategy === 'greedy' ? true : n.tier >= 3;
      if (want) {
        window.__lb.collect();
        window.__lb.stepLogic(1 / 60);
        takenTiers.push(n.tier);
      }
    }

    const e = window.__lb.epic;
    if (e.count > lastEpicCount) {
      lastEpicCount = e.count;
      timeline.push({ atSec: Math.round(i / 60), event: `EPIC #${e.count}`, k: e.k });
    }
    if (i % (60 * 30) === 0) {
      timeline.push({ atSec: Math.round(i / 60), event: 'mark', k: e.k, taste: e.taste, refused: e.refused });
    }
  }

  const byTier = {};
  for (const t of takenTiers) byTier[t] = (byTier[t] ?? 0) + 1;

  return {
    epic: window.__lb.epic,
    kete: window.__lb.kete,
    player: window.__lb.player,
    takenCount: takenTiers.length,
    byTier,
    timeline,
  };
}, { STEPS, strategy });

await page.keyboard.up('KeyW');
await page.screenshot({ path: `agent/shots/play-${strategy}.png` });
await browser.close();

const mins = minutes;
console.log(`\n=== ${strategy.toUpperCase()} — ${mins} minutes ===`);
console.log(`picked up      ${result.takenCount}  (${(result.takenCount / mins).toFixed(1)}/min)`);
console.log(`by tier        ${JSON.stringify(result.byTier)}`);
console.log(`refused        ${result.epic.refused}`);
console.log(`taste          ${result.epic.taste}   k = ${result.epic.k}`);
console.log(`epic finds     ${result.epic.count}  (one per ${result.epic.count ? (mins / result.epic.count).toFixed(1) : '-'} min)`);
console.log(`walked to      x=${result.player.x.toFixed(0)} z=${result.player.z.toFixed(0)}`);
console.table(result.timeline.filter((t) => t.event !== 'mark' || t.k > 0).slice(0, 14));

if (errors.length) {
  console.error('\nCONSOLE ERRORS:', errors.slice(0, 5));
  process.exit(1);
}
