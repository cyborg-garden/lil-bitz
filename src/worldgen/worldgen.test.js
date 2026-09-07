import { describe, it, expect } from 'vitest';
import { makeWorld, CHUNK_SIZE } from './chunk.js';
import { scatterChunk, rawCandidates, _clearScatterCache } from './scatter.js';
import { makeTerrain } from './terrain.js';

const SEED = 'test-seed';
const MIN_DIST = 3.2;

/**
 * BUILD-PLAN risk 9: quantising coordinates for stable hashing perturbs
 * geometric invariants. Spacing assertions get 2e-3 of slack for that reason,
 * and tightening this tolerance is how you spend an hour "fixing" a generator
 * that was already correct.
 */
const SPACING_EPS = 2e-3;

function chunksAround(world, r) {
  const objs = [];
  for (let cx = -r; cx <= r; cx++) {
    for (let cz = -r; cz <= r; cz++) objs.push(...world.genChunk(cx, cz));
  }
  return objs;
}

describe('determinism', () => {
  it('the same seed and chunk gives an identical array', () => {
    const a = makeWorld(SEED).genChunk(3, -2);
    const b = makeWorld(SEED).genChunk(3, -2);
    expect(b).toEqual(a);
  });

  it('a different seed gives a different world', () => {
    const a = makeWorld('seed-a').genChunk(0, 0);
    const b = makeWorld('seed-b').genChunk(0, 0);
    expect(b).not.toEqual(a);
  });

  it('chunk output does not depend on generation order', () => {
    // Forward order.
    _clearScatterCache();
    const w1 = makeWorld(SEED);
    const forward = [w1.genChunk(0, 0), w1.genChunk(1, 0), w1.genChunk(0, 1)];

    // Reverse order, cache wiped so nothing is carried over.
    _clearScatterCache();
    const w2 = makeWorld(SEED);
    const c01 = w2.genChunk(0, 1);
    const c10 = w2.genChunk(1, 0);
    const c00 = w2.genChunk(0, 0);

    expect(c00).toEqual(forward[0]);
    expect(c10).toEqual(forward[1]);
    expect(c01).toEqual(forward[2]);
  });
});

describe('scatter spacing', () => {
  it('respects the minimum distance inside a chunk', () => {
    const pts = scatterChunk(SEED, 0, 0, MIN_DIST);
    let worst = Infinity;
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        worst = Math.min(worst, Math.hypot(pts[i].x - pts[j].x, pts[i].z - pts[j].z));
      }
    }
    expect(pts.length).toBeGreaterThan(5);
    expect(worst).toBeGreaterThanOrEqual(MIN_DIST - SPACING_EPS);
  });

  it('respects the minimum distance ACROSS chunk seams', () => {
    // The regression this whole design exists for. BUILD-PLAN risk 4 measured
    // 1.51 against a radius of 3.2 before the fix, with 7 violating pairs on a
    // single seam.
    const all = [];
    for (let cx = -2; cx <= 2; cx++) {
      for (let cz = -2; cz <= 2; cz++) {
        for (const p of scatterChunk(SEED, cx, cz, MIN_DIST)) {
          all.push({ ...p, cx, cz });
        }
      }
    }

    let worst = Infinity;
    let violations = 0;
    for (let i = 0; i < all.length; i++) {
      for (let j = i + 1; j < all.length; j++) {
        const a = all[i];
        const b = all[j];
        if (a.cx === b.cx && a.cz === b.cz) continue; // same chunk, covered above
        const d = Math.hypot(a.x - b.x, a.z - b.z);
        worst = Math.min(worst, d);
        if (d < MIN_DIST - SPACING_EPS) violations++;
      }
    }

    expect(all.length).toBeGreaterThan(100);
    expect(violations).toBe(0);
    expect(worst).toBeGreaterThanOrEqual(MIN_DIST - SPACING_EPS);
  });

  it('culls a bounded fraction of candidates at the seam', () => {
    // If this ever climbs sharply the fix has become too aggressive and the
    // world will thin out along every border.
    let raw = 0;
    let kept = 0;
    for (let cx = -2; cx <= 2; cx++) {
      for (let cz = -2; cz <= 2; cz++) {
        raw += rawCandidates(SEED, cx, cz, MIN_DIST).length;
        kept += scatterChunk(SEED, cx, cz, MIN_DIST).length;
      }
    }
    const culled = 1 - kept / raw;
    expect(culled).toBeGreaterThan(0);
    expect(culled).toBeLessThan(0.25);
  });
});

describe('terrain', () => {
  const t = makeTerrain(SEED);

  it('rises as you walk inland', () => {
    // Averaged across X so a wandering shoreline does not make this flaky.
    const avgAt = (z) => {
      let s = 0;
      for (let x = -400; x <= 400; x += 17) s += t.heightAt(x, z);
      return s / Math.floor(801 / 17);
    };
    expect(avgAt(60)).toBeGreaterThan(avgAt(0));
    expect(avgAt(0)).toBeGreaterThan(avgAt(-60));
  });

  it('is continuous, with no cliffs between adjacent samples', () => {
    let worst = 0;
    for (let x = -200; x < 200; x += 3.1) {
      for (let z = -80; z < 200; z += 3.1) {
        worst = Math.max(worst, Math.abs(t.heightAt(x, z) - t.heightAt(x + 0.25, z)));
      }
    }
    expect(worst).toBeLessThan(0.6);
  });

  it('blends biomes rather than cutting a line', () => {
    // Somewhere in the transition there must be intermediate values. A hard
    // boundary would only ever produce 0 and 1.
    let intermediate = 0;
    for (let z = -20; z < 90; z += 1.3) {
      const f = t.forestnessAt(12, z);
      if (f > 0.15 && f < 0.85) intermediate++;
    }
    expect(intermediate).toBeGreaterThan(5);
  });
});

describe('generated objects', () => {
  const world = makeWorld(SEED);
  const objs = chunksAround(world, 3);

  it('produces a usable density', () => {
    const area = 7 * 7 * CHUNK_SIZE * CHUNK_SIZE;
    const perSqM = objs.length / area;
    expect(objs.length).toBeGreaterThan(150);
    // Loose bounds: this is a smoke test for "the world is not empty or soup",
    // not the tuned offer rate, which lands with the loot system.
    expect(perSqM).toBeGreaterThan(1 / 400);
    expect(perSqM).toBeLessThan(1 / 20);
  });

  it('sits every object on the ground', () => {
    for (const o of objs) {
      expect(Math.abs(o.y - world.heightAt(o.x, o.z))).toBeLessThan(1e-9);
    }
  });

  it('never spawns underwater', () => {
    expect(objs.every((o) => !world.isSubmerged(o.x, o.z))).toBe(true);
  });

  it('gives unique ids', () => {
    expect(new Set(objs.map((o) => o.id)).size).toBe(objs.length);
  });

  it('yields every tier from 1 to 4, with tier 1 the most common', () => {
    const counts = {};
    for (const o of objs) counts[o.tier] = (counts[o.tier] ?? 0) + 1;
    for (const t of [1, 2, 3, 4]) expect(counts[t] ?? 0).toBeGreaterThan(0);
    expect(counts[1]).toBeGreaterThan(counts[4]);
  });

  it('puts beach items near the sea and forest items inland', () => {
    const mean = (b) => {
      const s = objs.filter((o) => o.biome === b);
      return s.reduce((a, o) => a + o.z, 0) / s.length;
    };
    expect(mean('forest')).toBeGreaterThan(mean('beach'));
  });
});
