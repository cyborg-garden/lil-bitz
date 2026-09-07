// Simulate the loot economy with no browser, so tuning changes can be judged
// in numbers before anyone plays them.
//
//   node agent/sim-loot.mjs

import alea from 'alea';
import { baseWeights, applyDiscernment, normalizeWeights, rollTier } from '../src/systems/tiers.js';
import { epicHitChance, windowStart, hardPity } from '../src/systems/epic.js';
import T from '../data/tuning.json' with { type: 'json' };

const OFFERS_PER_MIN = T.offer.targetOffersPerMin;

function gapStats(k, runs = 20000, seed = 'sim') {
  const rng = alea(`${seed}:${k}`);
  const gaps = [];
  let n = 0;
  while (gaps.length < runs) {
    n++;
    if (rng() < epicHitChance(n, k)) { gaps.push(n); n = 0; }
  }
  const mean = gaps.reduce((a, b) => a + b, 0) / gaps.length;
  const sd = Math.sqrt(gaps.reduce((a, g) => a + (g - mean) ** 2, 0) / gaps.length);
  return { mean, sd, min: Math.min(...gaps), max: Math.max(...gaps) };
}

const toMin = (ticks) => ticks / OFFERS_PER_MIN;

console.log('EPIC CADENCE (ticks, and minutes at %s offers/min)\n', OFFERS_PER_MIN);
const rows = [];
for (const k of [0, 0.25, 0.5, 0.75, 1]) {
  const g = gapStats(k);
  rows.push({
    k,
    'window..hard': `${windowStart(k)}..${hardPity(k)}`,
    'mean ticks': g.mean.toFixed(1),
    'sigma ticks': g.sd.toFixed(2),
    'mean min': toMin(g.mean).toFixed(2),
    'sigma sec': (toMin(g.sd) * 60).toFixed(0),
    'worst min': toMin(g.max).toFixed(2),
  });
}
console.table(rows);

const g0 = gapStats(0);
const g1 = gapStats(1);
console.log(`speedup at full discernment: ${((1 - g1.mean / g0.mean) * 100).toFixed(0)}%`);
console.log(`P(no Epic in a 5 minute session) at k=0: ${toMin(g0.max) > 5 ? 'possible' : '0% — bounded'}`);

console.log('\nTIER MIX by discernment\n');
const mix = [];
for (const k of [0, 0.25, 0.5, 0.75, 1]) {
  const w = applyDiscernment(baseWeights('beach'), k);
  mix.push({
    k,
    Bitz: `${(w['1'] * 100).toFixed(1)}%`,
    Keepers: `${(w['2'] * 100).toFixed(1)}%`,
    Glimmers: `${(w['3'] * 100).toFixed(1)}%`,
    Wonders: `${(w['4'] * 100).toFixed(1)}%`,
  });
}
console.table(mix);

console.log('\nA FIVE MINUTE SESSION at k=0 (30 offers, after the scripted opening)\n');
const rng = alea('session');
const w = normalizeWeights(baseWeights('beach'));
const counts = { 1: 0, 2: 0, 3: 0, 4: 0 };
const N = 30;
for (let i = 0; i < N * 400; i++) counts[rollTier(rng, w)]++;
const per = Object.fromEntries(
  Object.entries(counts).map(([t, c]) => [t, ((c / (N * 400)) * N).toFixed(1)]),
);
console.log(`  Bitz ${per[1]}   Keepers ${per[2]}   Glimmers ${per[3]}   Wonders ${per[4]}   Epic 1`);

const script = T.scriptedOpening;
console.log(`\nSCRIPTED OPENING: ${script.tiers.filter(Boolean).length} authored of ${script.tiers.length}`);
console.log(`  first Epic guaranteed at pickup ${script.epicAtIndex}, gated to t >= ${script.epicMinSeconds}s`);
console.log(`  that is about ${(script.epicAtIndex / OFFERS_PER_MIN).toFixed(1)} min of walking, floored at ${(script.epicMinSeconds / 60).toFixed(1)} min`);
