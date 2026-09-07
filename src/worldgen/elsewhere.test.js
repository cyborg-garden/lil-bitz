import { describe, it, expect } from 'vitest';
import { makeElsewhere, elsewhereSeed, elsewhereFinds, ELSEWHERE_TUNING as E } from './elsewhere.js';
import { makeWorld, resolveItem } from './chunk.js';
import { makeTerrain } from './terrain.js';
import ITEMS from '../../data/items.json' with { type: 'json' };
import T from '../../data/tuning.json' with { type: 'json' };

const SEED = 'test-seed';

describe('the elsewhere seed', () => {
  it('is the home seed suffixed, and a different world', () => {
    expect(elsewhereSeed(SEED)).toBe(`${SEED}:elsewhere`);
    const home = makeWorld(SEED).genChunk(0, 0);
    const there = makeElsewhere(SEED).world.genChunk(0, 0);
    expect(there).not.toEqual(home);
  });

  it('is deterministic', () => {
    expect(makeElsewhere(SEED).world.genChunk(2, 1)).toEqual(makeElsewhere(SEED).world.genChunk(2, 1));
  });
});

describe('no sea', () => {
  it('the whole play window is inland: nothing is sea, nothing reads as beach', () => {
    const { world } = makeElsewhere(SEED);
    for (let x = -300; x <= 300; x += 25) {
      for (let z = -120; z <= 300; z += 20) {
        // The sea rules all key off inland < 12; with the offset none of the
        // window is anywhere near it.
        expect(world.inlandAt(x, z)).toBeGreaterThan(12);
        expect(world.heightAt(x, z)).toBeGreaterThan(world.SEA_LEVEL);
      }
    }
  });

  it('the shore band stays outside the whole play window, and the world says it has no sea', () => {
    // At 200 the band was 209m from the entry: an invisible wall over a pit
    // for a lost wanderer. The window is the square a relocated, lost player
    // can plausibly reach; the shore band must be beyond all of it.
    const { world } = makeElsewhere('lil-bitz');
    const R = E.playWindowMetres;
    let minInland = Infinity;
    for (let x = -R; x <= R; x += 10) {
      for (let z = -R; z <= R; z += 10) minInland = Math.min(minInland, world.inlandAt(x, z));
    }
    expect(minInland).toBeGreaterThan(T.epicSiting.seaMargin + 12);
    expect(world.hasSea).toBe(false);
    expect(makeWorld('lil-bitz').hasSea).toBe(true);
    expect(makeTerrain('lil-bitz').hasSea).toBe(true);
  });

  it('raising the offset moved no height where the old one was already well inland: every inland term is saturated', () => {
    const a = makeTerrain(SEED, { inlandOffset: 200 });
    const b = makeTerrain(SEED, { inlandOffset: E.inlandOffset });
    let checked = 0;
    for (let x = -300; x <= 300; x += 15) {
      for (let z = -300; z <= 300; z += 15) {
        if (a.inlandAt(x, z) < 60) continue;
        expect(Math.abs(b.heightAt(x, z) - a.heightAt(x, z)), `${x},${z}`).toBeLessThan(0.01);
        checked++;
      }
    }
    expect(checked).toBeGreaterThan(500);
  });

  it('the offset is an option with default 0, so the home terrain is untouched', () => {
    const a = makeTerrain(SEED);
    const b = makeTerrain(SEED, {});
    const c = makeTerrain(SEED, { inlandOffset: 0 });
    for (const [x, z] of [[0, 0], [40, 60], [-90, 15], [200, 120]]) {
      expect(b.heightAt(x, z)).toBe(a.heightAt(x, z));
      expect(c.inlandAt(x, z)).toBe(a.inlandAt(x, z));
    }
    const d = makeTerrain(SEED, { inlandOffset: E.inlandOffset });
    expect(d.inlandAt(5, 5)).toBeCloseTo(a.inlandAt(5, 5) + E.inlandOffset, 9);
  });
});

describe('the home world does not move', () => {
  it('makeWorld with no opts is byte-identical to before the option existed', () => {
    const a = makeWorld(SEED);
    const b = makeWorld(SEED, {});
    for (let cx = -2; cx <= 2; cx++) {
      for (let cz = -2; cz <= 2; cz++) expect(b.genChunk(cx, cz)).toEqual(a.genChunk(cx, cz));
    }
    expect(a.biomeKey).toBe('home');
    // Home biomes are still beach|forest only.
    for (const o of a.genChunk(0, 1)) expect(['beach', 'forest']).toContain(o.biome);
    // And home ids carry no world prefix: the hash cannot move.
    for (const o of a.genChunk(0, 1)) expect(o.id).toMatch(/^-?\d+:-?\d+:\d+$/);
  });

  it('no object id is shared between home and elsewhere', () => {
    // kete.taken, offers.resolved and offers.refusedIds are all keyed by id,
    // and chunk (0,1) is where she stands at home AND where the elsewhere
    // entry lands. Bare `cx:cz:i` ids collided on eleven of twelve objects
    // there: a pebble taken at home hid its twin in elsewhere.
    const home = makeWorld(SEED);
    const there = makeElsewhere(SEED).world;
    for (let cx = -3; cx <= 3; cx++) {
      for (let cz = -3; cz <= 3; cz++) {
        const ids = new Set(home.genChunk(cx, cz).map((o) => o.id));
        for (const o of there.genChunk(cx, cz)) {
          expect(ids.has(o.id), `${o.id} exists in both worlds`).toBe(false);
          expect(o.id.startsWith('elsewhere:')).toBe(true);
        }
      }
    }
    // The hand-placed elsewhere Epics use the same namespace and still collide
    // with nothing the chunks emit.
    const chunkIds = new Set(there.genChunk(0, 1).map((o) => o.id));
    for (const f of elsewhereFinds(SEED, { x: 5, z: 34 }, there)) expect(chunkIds.has(f.id)).toBe(false);
  });

  it('elsewhere-only items never enter the beach or forest pools', () => {
    const only = ITEMS.items.filter((i) => i.biome === 'elsewhere');
    expect(only.length).toBeGreaterThan(0);
    for (const it of only) {
      for (let roll = 0; roll < 1; roll += 0.05) {
        expect(resolveItem(roll, it.tier, 'beach')?.id).not.toBe(it.id);
        expect(resolveItem(roll, it.tier, 'forest')?.id).not.toBe(it.id);
      }
    }
  });
});

describe('elsewhere items', () => {
  it('every object carries biome elsewhere and a tier the weight table can reach', () => {
    const { world } = makeElsewhere(SEED);
    const w = ITEMS.weights.elsewhere;
    expect(w).toBeDefined();
    expect(w[5]).toBeUndefined();
    let n = 0;
    for (let cx = -2; cx <= 2; cx++) {
      for (let cz = -2; cz <= 2; cz++) {
        for (const o of world.genChunk(cx, cz)) {
          n++;
          expect(o.biome).toBe('elsewhere');
          expect(o.tier).toBeLessThanOrEqual(4);
          expect(w[String(o.tier)]).toBeGreaterThan(0);
          // The offer book will call baseWeights('elsewhere') and the payoff
          // table must cover the tier, or reveal produces NaN.
          expect(T.discernment.payoff[String(o.tier)]).toBeDefined();
        }
      }
    }
    expect(n).toBeGreaterThan(50);
  });

  it('the pool has forest and any items as well as its own, so it is a place and not a shop', () => {
    const ids = new Set();
    for (let tier = 1; tier <= 4; tier++) {
      for (let roll = 0; roll < 1; roll += 0.02) ids.add(resolveItem(roll, tier, 'elsewhere')?.id);
    }
    expect(ids.has('violet_grit')).toBe(true);
    expect(ids.has('twig')).toBe(true);
    expect(ids.has('humming_geode')).toBe(true);
    expect(ids.has('shell_chip')).toBe(false);
  });

  it('Wonders are weighted up against home', () => {
    const f = ITEMS.weights.forest;
    const e = ITEMS.weights.elsewhere;
    const share = (w) => w[4] / Object.values(w).reduce((a, b) => a + b, 0);
    expect(share(e)).toBeGreaterThan(share(f) * 2);
  });
});

describe('the hand-placed Epics', () => {
  const entry = { x: 12, z: 40 };

  it('3-5 tier-5 objects with stable ids, on dry flat ground, in a ring', () => {
    const { world } = makeElsewhere(SEED);
    const a = elsewhereFinds(SEED, entry, world);
    const b = elsewhereFinds(SEED, entry, world);
    expect(b).toEqual(a);
    expect(a.length).toBeGreaterThanOrEqual(E.findsMin);
    expect(a.length).toBeLessThanOrEqual(E.findsMax);
    const tier5 = new Set(ITEMS.items.filter((i) => i.tier === 5).map((i) => i.id));
    for (const o of a) {
      expect(o.id).toMatch(/^elsewhere:\d+$/);
      expect(o.tier).toBe(5);
      expect(tier5.has(o.itemId)).toBe(true);
      expect(o.biome).toBe('elsewhere');
      expect(o.isAuthored).toBe(true);
      expect(o.y).toBe(world.heightAt(o.x, o.z));
      const d = Math.hypot(o.x - entry.x, o.z - entry.z);
      expect(d).toBeGreaterThanOrEqual(E.findsRadiusMin - 1e-9);
      expect(d).toBeLessThanOrEqual(E.findsRadiusMax + 1e-9);
      expect(world.isSubmerged(o.x, o.z)).toBe(false);
      expect(world.waterDepthAt(o.x, o.z)).toBeLessThan(E.findsMaxWaterDepth);
      expect(world.slopeAt(o.x, o.z)).toBeLessThanOrEqual(T.epicSiting.maxSlope);
    }
    // Spread: not all on one side of the entry.
    const bearings = a.map((o) => Math.atan2(o.x - entry.x, o.z - entry.z));
    expect(Math.max(...bearings) - Math.min(...bearings)).toBeGreaterThan(Math.PI / 2);
  });

  it('a different entry moves them; a different seed changes them', () => {
    const { world } = makeElsewhere(SEED);
    const a = elsewhereFinds(SEED, entry, world);
    const b = elsewhereFinds(SEED, { x: 80, z: 90 }, world);
    expect(b[0].x).not.toBe(a[0].x);
    const other = makeElsewhere('another');
    const c = elsewhereFinds('another', entry, other.world);
    expect(c).not.toEqual(a);
  });
});
