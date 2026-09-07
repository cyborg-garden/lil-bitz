import { describe, it, expect } from 'vitest';
import { makeTerrain } from './terrain.js';
import { resolveItem } from './chunk.js';
import ITEMS from '../../data/items.json' with { type: 'json' };
import { makeScenery } from './scenery.js';
import { SPECIES, SPECIES_NAMES, buildSpeciesGeometries } from '../render/treeGeometry.js';
import CHARACTERS from '../../data/characters.json' with { type: 'json' };
import CHARS from '../../public/art/chars/manifest.json' with { type: 'json' };

/**
 * Fresh water, native bush, and the roster. As with the rest of the suite these
 * encode the DESIGN: if one fails, the question is whether the place still
 * feels like this place.
 */

const t = makeTerrain('features-test');

/** Sample a grid inland and report on the water found there. */
function sweep(fn, { x0 = -200, x1 = 200, z0 = 60, z1 = 260, step = 4 } = {}) {
  const out = [];
  for (let x = x0; x <= x1; x += step) {
    for (let z = z0; z <= z1; z += step) out.push(fn(x, z));
  }
  return out;
}

describe('LOAD-BEARING 11: fresh water is cut into the ground, not laid on it', () => {
  it('puts some water inland, but nowhere near all of it', () => {
    const wet = sweep((x, z) => t.waterDepthAt(x, z) > 0.05);
    const frac = wet.filter(Boolean).length / wet.length;
    // Streams, not a swamp, and not a dry map either.
    expect(frac).toBeGreaterThan(0.004);
    expect(frac).toBeLessThan(0.12);
  });

  it('never floods the beach or the dunes', () => {
    // By INLAND DISTANCE, not by z. The shoreline wanders by tens of metres,
    // so a point at z=25 can be well inland where the coast has receded — and
    // a creek there is correct, not a flood.
    for (let x = -300; x <= 300; x += 5) {
      for (let z = -20; z <= 60; z += 2.5) {
        const inland = t.inlandAt(x, z);
        if (inland >= 25) continue;
        const { mask } = t.channelAt(x, z, inland);
        expect(mask, `${x},${z} inland ${inland.toFixed(1)}`).toBe(0);
      }
    }
  });

  it('carves a bed under every bit of water it draws', () => {
    // The failure this exists to catch is a water plane sitting ON the forest
    // floor: water present, ground never cut, so it reads as a sheet.
    let checked = 0;
    for (let x = -200; x <= 200; x += 3) {
      for (let z = 60; z <= 260; z += 3) {
        if (t.waterDepthAt(x, z) < 0.15) continue;
        checked++;
        const bed = t.heightAt(x, z);
        const un = t.baseHeightAt(x, z);
        expect(bed, `${x},${z}`).toBeLessThan(un - 0.3);
      }
    }
    expect(checked).toBeGreaterThan(20);
  });

  it('keeps the water surface below the ground where there is no channel', () => {
    // This is the whole rendering trick: the surface exists everywhere and the
    // ground hides it. If it ever pokes up on dry land, water appears in the
    // middle of the bush with no bed under it.
    for (let x = -160; x <= 160; x += 7) {
      for (let z = 60; z <= 240; z += 7) {
        const { mask } = t.channelAt(x, z, t.inlandAt(x, z));
        if (mask > 0.02) continue;
        expect(t.freshSurfaceAt(x, z), `${x},${z}`).toBeLessThan(t.heightAt(x, z));
      }
    }
  });

  it('makes streams shallow enough to cross and ponds too deep to', () => {
    const depths = sweep((x, z) => t.waterDepthAt(x, z)).filter((d) => d > 0.05);
    expect(depths.length).toBeGreaterThan(30);
    // Most water is a creek you can step through.
    const crossable = depths.filter((d) => d < 0.5).length / depths.length;
    expect(crossable).toBeGreaterThan(0.4);
    // And some of it is not.
    expect(Math.max(...depths)).toBeGreaterThan(0.6);
  });

  it('treats fresh water as submerged, so nothing spawns in the creek', () => {
    let found = 0;
    for (let x = -200; x <= 200; x += 3) {
      for (let z = 60; z <= 260; z += 3) {
        if (t.waterDepthAt(x, z) > 0.1) {
          found++;
          expect(t.isSubmerged(x, z), `${x},${z}`).toBe(true);
        }
      }
    }
    expect(found).toBeGreaterThan(20);
  });

  it('is deterministic, like everything else in the world', () => {
    const a = makeTerrain('same');
    const b = makeTerrain('same');
    for (let i = 0; i < 200; i++) {
      const x = (i * 37) % 400 - 200;
      const z = 60 + (i * 53) % 200;
      expect(a.waterDepthAt(x, z)).toBe(b.waterDepthAt(x, z));
    }
  });
});

describe('LOAD-BEARING 12: the bush is native, and it is mixed', () => {
  const scenery = makeScenery(t, 'features-test');

  /** Species counts over a band of inland distance. */
  function bandMix(zLo, zHi) {
    /** @type {Record<string, number>} */
    const counts = {};
    let n = 0;
    for (let cx = -6; cx <= 6; cx++) {
      for (let cz = Math.floor(zLo / 32); cz <= Math.ceil(zHi / 32); cz++) {
        for (const it of scenery.genScenery(cx, cz)) {
          if (it.kind !== 'tree') continue;
          if (it.z < zLo || it.z > zHi) continue;
          counts[it.species] = (counts[it.species] ?? 0) + 1;
          n++;
        }
      }
    }
    return { counts, n };
  }

  it('has no pines, because pines are a pest here', () => {
    expect(SPECIES_NAMES).not.toContain('pine');
    expect(SPECIES_NAMES.length).toBeGreaterThanOrEqual(5);
  });

  it('grows a coastal tree at the coast and a canopy tree under canopy', () => {
    const dune = bandMix(12, 40);
    const bush = bandMix(90, 160);
    expect(dune.n).toBeGreaterThan(30);
    expect(bush.n).toBeGreaterThan(30);

    const f = (b, k) => (b.counts[k] ?? 0) / b.n;
    expect(f(dune, 'pohutukawa')).toBeGreaterThan(f(bush, 'pohutukawa'));
    expect(f(bush, 'rimu')).toBeGreaterThan(f(dune, 'rimu'));
    expect(f(bush, 'nikau')).toBeGreaterThan(f(dune, 'nikau'));
  });

  it('never lets one species take the whole forest', () => {
    const bush = bandMix(90, 160);
    const top = Math.max(...Object.values(bush.counts));
    expect(top / bush.n).toBeLessThan(0.8);
    expect(Object.keys(bush.counts).length).toBeGreaterThanOrEqual(3);
  });

  it('grows trees in stands rather than evenly shuffled', () => {
    // Groves are the point of the grove field. If species were picked
    // independently per tree, neighbouring trees would match no more often
    // than chance.
    const trees = [];
    for (let cx = -4; cx <= 4; cx++) {
      for (let cz = 3; cz <= 6; cz++) {
        for (const it of scenery.genScenery(cx, cz)) {
          if (it.kind === 'tree') trees.push(it);
        }
      }
    }
    expect(trees.length).toBeGreaterThan(120);

    let pairs = 0;
    let same = 0;
    for (let i = 0; i < trees.length; i++) {
      for (let j = i + 1; j < trees.length; j++) {
        if (Math.hypot(trees[i].x - trees[j].x, trees[i].z - trees[j].z) > 9) continue;
        pairs++;
        if (trees[i].species === trees[j].species) same++;
      }
    }
    const counts = {};
    for (const it of trees) counts[it.species] = (counts[it.species] ?? 0) + 1;
    const chance = Object.values(counts)
      .reduce((a, c) => a + (c / trees.length) ** 2, 0);

    expect(pairs).toBeGreaterThan(80);
    expect(same / pairs).toBeGreaterThan(chance * 1.15);
  });

  it('scales every species geometry to one metre tall, standing on the ground', () => {
    // Scenery stores a height in metres and the renderer applies it as a plain
    // scalar, so a species that happens to build 0.79 tall is 21% short
    // forever and nothing says so. tī kōuka was exactly that.
    const geos = buildSpeciesGeometries();
    for (const name of SPECIES_NAMES) {
      const geo = geos[name];
      geo.computeBoundingBox();
      const bb = geo.boundingBox;
      expect(bb.min.y, name).toBeCloseTo(0, 3);
      expect(bb.max.y, name).toBeCloseTo(1, 3);
      // Vertex colours are how one material draws a pale trunk and dark
      // fronds; without them every tree is a single flat colour.
      const col = geo.getAttribute('color');
      expect(col, name).toBeTruthy();
      // And they have to actually differ, or the attribute is decoration.
      const first = [col.getX(0), col.getY(0), col.getZ(0)];
      let varied = false;
      for (let i = 1; i < col.count; i++) {
        if (Math.abs(col.getX(i) - first[0]) > 0.02
          || Math.abs(col.getY(i) - first[1]) > 0.02
          || Math.abs(col.getZ(i) - first[2]) > 0.02) { varied = true; break; }
      }
      expect(varied, `${name} is one flat colour`).toBe(true);
    }
  });

  it('gives every species a sensible height range', () => {
    for (const name of SPECIES_NAMES) {
      const s = SPECIES[name];
      expect(s.min, name).toBeGreaterThan(1);
      expect(s.max, name).toBeGreaterThan(s.min);
      expect(s.max, name).toBeLessThan(14);
    }
  });
});

describe('the playable roster', () => {
  it('lists only characters that actually have art', () => {
    for (const r of CHARACTERS.roster) {
      expect(CHARS[r.id], r.id).toBeTruthy();
      expect(CHARS[r.id].role, r.id).toBe('player');
    }
  });

  it('offers at least three, all distinct', () => {
    expect(CHARACTERS.roster.length).toBeGreaterThanOrEqual(3);
    const ids = new Set(CHARACTERS.roster.map((r) => r.id));
    expect(ids.size).toBe(CHARACTERS.roster.length);
  });

  it('defaults to someone on the roster', () => {
    expect(CHARACTERS.roster.some((r) => r.id === CHARACTERS.default)).toBe(true);
  });

  it('gives everyone a name and a line', () => {
    for (const r of CHARACTERS.roster) {
      expect(r.name.length, r.id).toBeGreaterThan(3);
      expect(r.blurb.length, r.id).toBeGreaterThan(8);
    }
  });

  it('names them descriptively rather than inventing te reo for them', () => {
    // Naming Lyss's people is hers to do. A placeholder that reads as a real
    // name is far harder to take back than one that plainly is not.
    for (const r of CHARACTERS.roster) {
      expect(r.name, r.id).toMatch(/^the one /);
    }
  });
});

describe('a clearing at a cryptid site', () => {
  it('removes trees and scrub inside it and nothing outside it', () => {
    const clearing = { x: 20, z: 110, r: 18 };
    const full = makeScenery(t, 'features-test');
    const cleared = makeScenery(t, 'features-test', { clearings: [clearing] });
    const dist = (it) => Math.hypot(it.x - clearing.x, it.z - clearing.z);
    let inside = 0;
    let outsideSame = true;
    for (let cx = -1; cx <= 2; cx++) {
      for (let cz = 2; cz <= 5; cz++) {
        const a = full.genScenery(cx, cz);
        const b = cleared.genScenery(cx, cz);
        for (const it of b) {
          if ((it.kind === 'tree' || it.kind === 'scrub') && dist(it) < clearing.r) inside++;
        }
        const aOut = a.filter((it) => dist(it) >= clearing.r);
        const bOut = b.filter((it) => dist(it) >= clearing.r);
        if (JSON.stringify(aOut) !== JSON.stringify(bOut)) outsideSame = false;
      }
    }
    expect(inside).toBe(0);
    expect(outsideSame).toBe(true);
  });
});

describe('pounamu comes out of rivers and beaches', () => {
  it('is marked as wanting water, and is the only thing that is', () => {
    const near = ITEMS.items.filter((i) => i.near === 'water');
    expect(near.map((i) => i.id)).toEqual(['pounamu']);
  });

  it('never turns up on dry forest floor', () => {
    for (let roll = 0; roll < 1; roll += 0.05) {
      expect(resolveItem(roll, 4, 'forest', false).id).not.toBe('pounamu');
    }
  });

  it('turns up in a forest creek bed', () => {
    const ids = new Set();
    for (let roll = 0; roll < 1; roll += 0.02) {
      ids.add(resolveItem(roll, 4, 'forest', true).id);
    }
    expect(ids.has('pounamu')).toBe(true);
    // And it must not crowd out what already grew there.
    expect(ids.has('humming_geode') || ids.has('heavy_feather')).toBe(true);
  });

  it('leaves items without a `near` field alone', () => {
    const dry = new Set();
    const wet = new Set();
    for (let roll = 0; roll < 1; roll += 0.02) {
      dry.add(resolveItem(roll, 1, 'forest', false).id);
      wet.add(resolveItem(roll, 1, 'forest', true).id);
    }
    expect([...wet].sort()).toEqual([...dry].sort());
  });

  it('marks creek-side ground as near water and deep bush as not', () => {
    let wet = 0;
    let dry = 0;
    for (let x = -200; x <= 200; x += 5) {
      for (let z = 70; z <= 240; z += 5) {
        const near = t.nearWaterAt(x, z);
        if (near) wet++; else dry++;
        if (t.waterDepthAt(x, z) > 0.15) expect(near, `${x},${z}`).toBe(true);
      }
    }
    // Most of the bush is nowhere near a creek.
    expect(dry).toBeGreaterThan(wet * 3);
    expect(wet).toBeGreaterThan(20);
  });
});
