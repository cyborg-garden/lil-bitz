// The bush and the fresh water: what actually grows here, and where it runs.
//
// Two things this checks that a screenshot alone cannot. First, that the forest
// is a MIX — a single species everywhere is the same failure as the old
// all-pines forest wearing a different shape. Second, that a stream is water
// sitting in ground that was cut for it, rather than a sheet laid over the
// bush: the bed under the surface must actually be lower than the banks.
//
//   node agent/shot-world.mjs

import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1000, height: 562 } });
const errors = [];
page.on('pageerror', (e) => errors.push(String(e)));
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });

mkdirSync('agent/shots', { recursive: true });
await page.goto(process.env.LB_URL ?? 'http://localhost:5173/', { waitUntil: 'load' });
await page.waitForFunction(() => window.__lb?.ready === true, { timeout: 20000 });
await page.evaluate(() => window.__lb.title.start());
await page.evaluate(() => { window.__lb.setSeed('world-shot'); window.__lb.pause(); });

// --- what grows where ------------------------------------------------------
const flora = await page.evaluate(() => {
  // Radius 20, not 45. The dune band is only about 32m wide, so a 45m sample
  // taken on the dune reaches deep into the bush on one side and out to sea on
  // the other, and every band comes back with the same mix.
  //
  // Aggregated across five positions per band, because species cluster into
  // groves ON PURPOSE. A single 20m sample lands inside one stand and reports
  // that the forest is entirely rimu, which is a true statement about that
  // clearing and a false one about the band.
  const bands = [];
  for (const z of [22, 40, 75, 115]) {
    const species = {};
    let trees = 0;
    for (const x of [-240, -120, 0, 120, 240]) {
      window.__lb.teleport(x, z);
      window.__lb.stepLogic(1 / 60);
      const f = window.__lb.flora(20);
      trees += f.trees;
      for (const [k, n] of Object.entries(f.species)) species[k] = (species[k] ?? 0) + n;
    }
    bands.push({ z, trees, species });
  }
  return bands;
});

// --- fresh water -----------------------------------------------------------
// Sweep for the nearest bit of water deep enough to be a stream, then stand on
// the bank and look at it.
const found = await page.evaluate(() => {
  const hits = [];
  for (let z = 60; z <= 240 && hits.length < 400; z += 2) {
    for (let x = -120; x <= 120; x += 2) {
      const d = window.__lb.waterAt(x, z);
      if (d.depth > 0.12) hits.push({ x, z, ...d });
    }
  }
  if (!hits.length) return { hits: 0, best: null };
  // Prefer a deep one near the middle of the swept area.
  hits.sort((a, b) => b.depth - a.depth);
  return { hits: hits.length, best: hits[0], sample: hits.slice(0, 5) };
});

let bankProfile = null;
if (found.best) {
  bankProfile = await page.evaluate((b) => {
    // Walk a line across the channel and record ground vs water surface. If the
    // ground in the middle is not below the banks, nothing was carved and the
    // water is just a sheet lying on the forest floor.
    const row = [];
    for (let d = -9; d <= 9; d += 1) {
      const x = b.x + d;
      row.push({
        d,
        ground: +window.__lb.groundAt(x, b.z).toFixed(2),
        depth: +window.__lb.waterAt(x, b.z).depth.toFixed(2),
      });
    }
    return row;
  }, found.best);

  await page.evaluate((b) => {
    window.__lb.teleport(b.x, b.z - 11);
    window.__lb.setYaw(Math.PI); // face +Z, along the sweep direction
    window.__lb.stepLogic(1 / 60);
    window.__lb.step(1 / 60);
  }, found.best);
  await page.screenshot({ path: 'agent/shots/world-2-water.png' });
}

// --- a look at the bush ----------------------------------------------------
await page.evaluate(() => {
  window.__lb.teleport(0, 70);
  window.__lb.setYaw(Math.PI * 0.35);
  window.__lb.stepLogic(1 / 60);
  window.__lb.step(1 / 60);
});
await page.screenshot({ path: 'agent/shots/world-1-bush.png' });

// The dune band, where pōhutukawa should be and rimu should not.
await page.evaluate(() => {
  window.__lb.teleport(0, 26);
  window.__lb.setYaw(Math.PI);
  window.__lb.stepLogic(1 / 60);
  window.__lb.step(1 / 60);
});
await page.screenshot({ path: 'agent/shots/world-3-dune.png' });

const perf = await page.evaluate(() => window.__lb.render);

console.log(JSON.stringify({ flora, water: found, bankProfile, perf }, null, 2));
await browser.close();

// --- what has to be true ---------------------------------------------------
const fails = [];
if (errors.length) fails.push(`console errors: ${errors.slice(0, 3).join(' | ')}`);

const dune = flora[0];
const deep = flora[flora.length - 1];
const frac = (b, k) => (b.species[k] ?? 0) / Math.max(1, b.trees);

if (deep.trees < 40) fails.push(`only ${deep.trees} trees sampled in the deep bush`);
if (Object.keys(deep.species).length < 3) {
  fails.push(`deep bush is only ${Object.keys(deep.species).join('/')} — it should be mixed`);
}
{
  const top = Math.max(...Object.values(deep.species));
  if (top / deep.trees > 0.75) {
    fails.push(`one species is ${Math.round((top / deep.trees) * 100)}% of the deep bush`);
  }
}

// The zones, stated as the claim they actually make: a coastal tree is more
// common at the coast, and a canopy tree is more common under canopy.
if (!(frac(dune, 'pohutukawa') > frac(deep, 'pohutukawa'))) {
  fails.push('pōhutukawa is not more common near the coast — the coastal zone does nothing');
}
if (!(frac(dune, 'pohutukawa') > 0.05)) {
  fails.push(`pōhutukawa is only ${(frac(dune, 'pohutukawa') * 100).toFixed(1)}% of the dune band`);
}
if (!(frac(deep, 'rimu') > frac(dune, 'rimu'))) {
  fails.push('rimu is not more common in the deep bush');
}
if (!(frac(deep, 'nikau') + frac(deep, 'ponga') > 0.4)) {
  fails.push('the bush understorey species are missing from the bush');
}

if (!found.hits) fails.push('no fresh water anywhere in a 240x240m sweep');
if (bankProfile) {
  const mid = bankProfile.find((r) => r.d === 0);
  const banks = bankProfile.filter((r) => Math.abs(r.d) >= 6);
  const bankHeight = banks.reduce((a, r) => a + r.ground, 0) / banks.length;
  if (!(mid.ground < bankHeight - 0.35)) {
    fails.push(
      `the streambed is not cut into the ground: mid ${mid.ground} vs banks ${bankHeight.toFixed(2)}`,
    );
  }
  if (!(mid.depth > 0.12)) fails.push(`no water depth at the channel centre: ${mid.depth}`);
  // The banks must be dry, or the whole forest is flooded.
  if (banks.some((r) => r.depth > 0.02)) fails.push('the banks are underwater too — this is a flood');
}

if (perf.calls > 60) fails.push(`${perf.calls} draw calls — the species split has got out of hand`);

if (fails.length) { for (const f of fails) console.error('FAIL', f); process.exit(1); }
console.log('\nOK — agent/shots/world-1-bush.png, world-2-water.png, world-3-dune.png');
