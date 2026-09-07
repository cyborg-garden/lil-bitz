import { describe, it, expect } from 'vitest';
import { makeTerrain, SEA_LEVEL } from './terrain.js';
import { makeWorld } from './chunk.js';
import {
  findCryptidSites, cryptidFinds, cryptidRecipients, cryptidGrantFor,
  warmthAt, sitesByDistance, mermaidShown, kelpiiStanding, makeLeftGift, pickLanding,
  mermaidShapeSpot, giveSightClear, crownOnLine,
  CRYPTID_DATA as C,
} from './cryptids.js';
import { makeScenery } from './scenery.js';
import { recipientInReach, recipientDef, RECIPIENT_DATA } from '../systems/giving.js';
import ITEMS from '../../data/items.json' with { type: 'json' };

const SEEDS = ['lil-bitz', 'agent-default', 'seed-a', 'seed-b', 'test-seed'];
const IDS = ['grotto_mermaids', 'moana_kelpii', 'patupaiarehe'];

/** Same rule as main.js `walkable`: the sea is a hard edge, fresh water a wall once deep. */
function walkable(t, x, z) {
  if (t.inlandAt(x, z) < 12) return t.heightAt(x, z) > SEA_LEVEL + 0.12;
  return t.waterDepthAt(x, z) < 0.5;
}

describe('cryptid sites are deterministic and never missing', () => {
  it('returns the three ids, in data order, for every seed', () => {
    for (const seed of SEEDS) {
      const sites = findCryptidSites(makeTerrain(seed), seed);
      expect(sites.map((s) => s.id)).toEqual(IDS);
    }
  });

  it('the same seed gives the same sites', () => {
    const a = findCryptidSites(makeTerrain('lil-bitz'), 'lil-bitz');
    const b = findCryptidSites(makeTerrain('lil-bitz'), 'lil-bitz');
    expect(b).toEqual(a);
  });

  it('pins the default seed so a placement change is a visible change', () => {
    const sites = findCryptidSites(makeTerrain('lil-bitz'), 'lil-bitz');
    expect(sites.map((s) => [s.id, s.x.toFixed(1), s.z.toFixed(1)])).toEqual([
      ['grotto_mermaids', '-54.0', '-16.4'],
      ['moana_kelpii', '146.0', '54.6'],
      ['patupaiarehe', '-48.0', '119.9'],
    ]);
  });

  it('carries the display name with the macron, never the id spelling', () => {
    const sites = findCryptidSites(makeTerrain('lil-bitz'), 'lil-bitz');
    expect(sites.find((s) => s.id === 'moana_kelpii').name).toBe('moana kelpī');
  });
});

describe('each site meets its criterion', () => {
  for (const seed of SEEDS) {
    const t = makeTerrain(seed);
    const sites = findCryptidSites(t, seed);
    const by = Object.fromEntries(sites.map((s) => [s.id, s]));

    it(`${seed}: the grotto is at the shoreline, south (x < 0), on standable ground`, () => {
      const s = by.grotto_mermaids;
      const w = C.sites.grotto_mermaids.search;
      expect(s.x).toBeLessThan(0);
      expect(s.x).toBeGreaterThanOrEqual(w.xMin);
      expect(s.x).toBeLessThanOrEqual(w.xMax);
      expect(s.inland).toBeGreaterThanOrEqual(w.inlandMin - 1e-6);
      expect(s.inland).toBeLessThanOrEqual(w.inlandMax + 1e-6);
      expect(t.heightAt(s.x, s.z)).toBeGreaterThan(SEA_LEVEL + 0.12);
    });

    it(`${seed}: the kelpī site is at a creek mouth, near water, not submerged`, () => {
      const s = by.moana_kelpii;
      expect(s.x).toBeGreaterThan(0);
      expect(s.fellBack).toBe(false);
      expect(t.nearWaterAt(s.x, s.z)).toBe(true);
      expect(t.isSubmerged(s.x, s.z)).toBe(false);
      const { mask } = t.channelAt(s.x, s.z, t.inlandAt(s.x, s.z));
      expect(mask).toBeGreaterThanOrEqual(C.sites.moana_kelpii.relax.maskMin);
    });

    it(`${seed}: the patupaiarehe site is deep bush on a local high point`, () => {
      const s = by.patupaiarehe;
      const w = C.sites.patupaiarehe.search;
      expect(s.inland).toBeGreaterThanOrEqual(w.inlandMin - 1e-6);
      expect(Math.abs(s.x)).toBeLessThanOrEqual(w.xMax);
      if (!s.fellBack) {
        const r = C.sites.patupaiarehe.localMaxRadius;
        const h = t.heightAt(s.x, s.z);
        for (const [dx, dz] of [[r, 0], [-r, 0], [0, r], [0, -r]]) {
          expect(h).toBeGreaterThan(t.heightAt(s.x + dx, s.z + dz));
        }
      }
    });

    it(`${seed}: every landing is dry, walkable, not steep, and clear of the site`, () => {
      for (const s of sites) {
        const l = s.landing;
        expect(walkable(t, l.x, l.z)).toBe(true);
        expect(t.isSubmerged(l.x, l.z)).toBe(false);
        expect(t.slopeAt(l.x, l.z)).toBeLessThanOrEqual(C.landing.maxSlope);
        expect(Math.hypot(l.x - s.x, l.z - s.z)).toBeGreaterThanOrEqual(C.landing.minFromSite - 1e-6);
      }
    });
  }

  it('all three are within a short walk of the trinket maker', () => {
    // Amendment: every window sits inside roughly a three-minute round trip at
    // 2.2 m/s from (5, 27). The relaxed kelpī pass can stretch that a little.
    for (const seed of SEEDS) {
      for (const s of findCryptidSites(makeTerrain(seed), seed)) {
        const d = Math.hypot(s.x - 5, s.z - 27);
        expect(d / 2.2).toBeLessThan(120);
      }
    }
  });
});

describe('cryptid finds are authored, not scattered', () => {
  const seed = 'lil-bitz';
  const t = makeTerrain(seed);
  const sites = findCryptidSites(t, seed);
  const finds = cryptidFinds(sites, seed, t);

  it('places findsPerSite tier-5 finds inside the area radius of each site', () => {
    expect(finds).toHaveLength(sites.length * C.cryptidArea.findsPerSite);
    for (const f of finds) {
      const s = sites.find((q) => q.id === f.siteId);
      const d = Math.hypot(f.x - s.x, f.z - s.z);
      expect(d).toBeLessThanOrEqual(C.cryptidArea.radius + 1e-6);
      expect(f.tier).toBe(5);
      expect(f.isCryptidFind).toBe(true);
      expect(walkable(t, f.x, f.z)).toBe(true);
    }
  });

  it('is shaped like a delivered Epic object, so activeObjects can concatenate it', () => {
    for (const f of finds) {
      for (const k of ['id', 'itemId', 'tier', 'x', 'y', 'z', 'rot', 'biome', 'tierRoll', 'itemRoll']) {
        expect(f).toHaveProperty(k);
      }
      // A biome the weight tables know, so nothing can NaN a tier downstream.
      expect(ITEMS.weights[f.biome]).toBeDefined();
    }
  });

  it('uses only the authored tier-5 items', () => {
    const authored = new Set(ITEMS.items.filter((i) => i.biome === 'authored').map((i) => i.id));
    for (const f of finds) expect(authored.has(f.itemId)).toBe(true);
  });

  it('has stable ids, so the permanent taken set dedupes them across saves', () => {
    const again = cryptidFinds(findCryptidSites(makeTerrain(seed), seed), seed, makeTerrain(seed));
    expect(again.map((f) => f.id)).toEqual(finds.map((f) => f.id));
    expect(new Set(finds.map((f) => f.id)).size).toBe(finds.length);
  });

  it('never appears in chunk output: the home world hash cannot move', () => {
    const w = makeWorld(seed);
    for (let cx = -8; cx <= 8; cx++) {
      for (let cz = -8; cz <= 8; cz++) {
        for (const o of w.genChunk(cx, cz)) {
          expect(o.biome === 'authored').toBe(false);
          expect(o.tier).toBeLessThanOrEqual(4);
        }
      }
    }
  });
});

describe('the cryptids as recipients', () => {
  const sites = findCryptidSites(makeTerrain('lil-bitz'), 'lil-bitz');

  it('the two you can give to are recipients; the place is not', () => {
    const rs = cryptidRecipients(sites);
    expect(rs.map((r) => r.id)).toEqual(['grotto_mermaids', 'moana_kelpii']);
    const p = sites.find((s) => s.id === 'patupaiarehe');
    expect(recipientInReach(rs, p.x, p.z)).toBeNull();
    const m = sites.find((s) => s.id === 'grotto_mermaids');
    expect(recipientInReach(rs, m.x + 1, m.z + 1)?.id).toBe('grotto_mermaids');
  });

  it('a tier 5 earns a tier 6; anything else earns nothing', () => {
    for (const id of IDS) {
      expect(cryptidGrantFor(id, 5)).toEqual({ tier: 6 });
      // Exact: a tier 6 handed back must not mint another, or Karu is free.
      expect(cryptidGrantFor(id, 6)).toBeNull();
      for (const t of [1, 2, 3, 4]) expect(cryptidGrantFor(id, t)).toBeNull();
    }
    expect(cryptidGrantFor('trinket_maker', 5)).toBeNull();
    expect(cryptidGrantFor('nobody', 5)).toBeNull();
  });

  it('nothing here speaks: no quotes, no first person, and the place has no lines at all', () => {
    for (const id of IDS) {
      const def = recipientDef(id);
      expect(def.speaks).toBe(false);
      const lines = [def.greeting, ...Object.values(def.reactions).flat()];
      for (const l of lines) {
        expect(l).not.toMatch(/"/);
        expect(l).not.toMatch(/\b(i|i'm|me|my|we|us)\b/i);
      }
    }
    expect(recipientDef('patupaiarehe').kind).toBe('place');
    expect(recipientDef('patupaiarehe').reactions).toEqual({});
  });

  it('her sightings name the sites, with the spelling she used', () => {
    const sightings = RECIPIENT_DATA.recipients.trinket_maker.sightings;
    expect(sightings.map((s) => s.site)).toEqual(IDS);
    expect(sightings.find((s) => s.site === 'moana_kelpii').creature).toBe('moana kelpī');
    for (const s of sightings) expect(recipientDef(s.site)?.name).toBe(s.creature);
  });

  it('no cryptid find or grant is a body part of anything', () => {
    // Non-negotiable 2: no hair, no scale-of-a-body, no bone, no tooth. And the
    // tier-6 flavour describes what it does for you, never who made it.
    const ours = ITEMS.items.filter((i) => i.biome === 'authored' || i.biome === 'granted');
    expect(ours.length).toBeGreaterThanOrEqual(5);
    for (const it of ours) {
      expect(`${it.name} ${it.flavour}`).not.toMatch(/\b(hair|bone|tooth|teeth|arm|hand|hands|finger|eye|mist|ridge)\b/i);
    }
  });
});

describe('approach cues', () => {
  const sites = findCryptidSites(makeTerrain('lil-bitz'), 'lil-bitz');
  const m = sites.find((s) => s.id === 'grotto_mermaids');
  const k = sites.find((s) => s.id === 'moana_kelpii');

  it('warmth is 0 outside senseRadius and 1 inside the area', () => {
    const far = warmthAt(sites, m.x + C.cryptidArea.senseRadius + 5, m.z);
    expect(far.grotto_mermaids).toBe(0);
    const mid = warmthAt(sites, m.x + (C.cryptidArea.senseRadius + C.cryptidArea.radius) / 2, m.z);
    expect(mid.grotto_mermaids).toBeCloseTo(0.5, 5);
    const near = warmthAt(sites, m.x + 3, m.z);
    expect(near.grotto_mermaids).toBe(1);
  });

  it('nearest first, so the first sighting she names is the closest', () => {
    const order = sitesByDistance(sites, k.x + 1, k.z + 1).map((s) => s.id);
    expect(order[0]).toBe('moana_kelpii');
  });

  it('the pale shape only shows when you are near AND have been still', () => {
    expect(mermaidShown({ site: m, px: m.x + 5, pz: m.z, stillSeconds: 0.2 })).toBe(false);
    expect(mermaidShown({ site: m, px: m.x + 5, pz: m.z, stillSeconds: 2 })).toBe(true);
    expect(mermaidShown({ site: m, px: m.x + 30, pz: m.z, stillSeconds: 9 })).toBe(false);
  });

  it('the driftwood stands only inside standRadius', () => {
    expect(kelpiiStanding(k, k.x + 5, k.z)).toBe(true);
    expect(kelpiiStanding(k, k.x + 15, k.z)).toBe(false);
  });
});

describe('a gift left for the patupaiarehe', () => {
  const sites = findCryptidSites(makeTerrain('lil-bitz'), 'lil-bitz');
  const p = sites.find((s) => s.id === 'patupaiarehe');
  const R = C.cryptidArea.radius;

  it('nothing happens while you stand there, however long', () => {
    const g = makeLeftGift();
    g.leave('patupaiarehe', 0, 5);
    for (let i = 0; i < 100; i++) expect(g.update(sites, p.x + 2, p.z, 0, 1)).toBeNull();
    expect(g.pending).not.toBeNull();
  });

  it('nothing happens on the way out, even facing back', () => {
    const g = makeLeftGift();
    g.leave('patupaiarehe', 0, 5);
    expect(g.update(sites, p.x, p.z - R * 0.5, 0, 1)).toBeNull();
  });

  it('grants once you are out of the fog and turn back, and only once', () => {
    const g = makeLeftGift();
    g.leave('patupaiarehe', 0, 5);
    // Walked out, facing away.
    expect(g.update(sites, p.x, p.z - R - 1, 0, -1)).toBeNull();
    // Turned back.
    expect(g.update(sites, p.x, p.z - R - 1, 0, 1)).toEqual({ siteId: 'patupaiarehe', grant: { tier: 6 } });
    expect(g.update(sites, p.x, p.z - R - 1, 0, 1)).toBeNull();
    expect(g.pending).toBeNull();
  });

  it('a tier that earns nothing from a cryptid earns nothing from the fog either', () => {
    // 'Give anything else → a line, nothing happens.' The first cut hardcoded
    // tier 5 in the answer, so a shell chip left on the ridge was an Epic epic.
    for (const tier of [1, 2, 3, 4, 6]) {
      const g = makeLeftGift();
      g.leave('patupaiarehe', 0, tier);
      expect(g.update(sites, p.x, p.z - R - 1, 0, -1)).toBeNull();
      expect(g.update(sites, p.x, p.z - R - 1, 0, 1)).toBeNull();
      expect(g.pending).toBeNull();
    }
  });

  it('survives a save round-trip, tier included', () => {
    const g = makeLeftGift();
    g.leave('patupaiarehe', 10, 5);
    g.update(sites, p.x, p.z - R - 1, 0, -1);
    const h = makeLeftGift();
    h.restore(g.serialize());
    expect(h.pending?.tier).toBe(5);
    expect(h.update(sites, p.x, p.z - R - 1, 0, 1)?.grant).toEqual({ tier: 6 });
  });
});

describe('a landing picked for the player who is giving', () => {
  it('is dry, walkable, in the ring, and ahead of the player, on every seed', () => {
    for (const seed of SEEDS) {
      const t = makeTerrain(seed);
      for (const site of findCryptidSites(t, seed)) {
        // Stand on the landing's side of the site, facing the site — the way
        // giveTo and a player who followed the fixed landing both stand.
        const dx = site.landing.x - site.x;
        const dz = site.landing.z - site.z;
        const len = Math.hypot(dx, dz) || 1;
        const px = site.x + (dx / len) * 2.4;
        const pz = site.z + (dz / len) * 2.4;
        const fx = -dx / len;
        const fz = -dz / len;
        const l = pickLanding(t, site, { px, pz, fx, fz });
        const d = Math.hypot(l.x - site.x, l.z - site.z);
        expect(d, `${seed} ${site.id} distance`).toBeGreaterThanOrEqual(C.landing.minFromSite - 0.01);
        expect(d, `${seed} ${site.id} distance`).toBeLessThanOrEqual(C.landing.maxFromSite + 0.01);
        expect(walkable(t, l.x, l.z), `${seed} ${site.id} walkable`).toBe(true);
        // Ahead: the fixed landing is behind this player, and that was the bug.
        // At the grotto ahead is the sea and the cryptid is on the line, so
        // beside is the honest answer there; never behind.
        const ax = l.x - px;
        const az = l.z - pz;
        const dot = (ax * fx + az * fz) / (Math.hypot(ax, az) || 1);
        expect(dot, `${seed} ${site.id} ahead`).toBeGreaterThan(site.id === 'grotto_mermaids' ? -0.35 : 0.3);
      }
    }
  });

  it('keeps the cryptid itself off the line from the player to the mouth', () => {
    // Seed delta: the player gives from 2.4 m south of the kelpī, facing it,
    // and the fixed landing is straight past it. The standing driftwood is
    // 4.4 m tall; a mouth straight behind it is a mouth you cannot see.
    const t = makeTerrain('delta');
    const site = findCryptidSites(t, 'delta').find((s) => s.id === 'moana_kelpii');
    const px = site.x;
    const pz = site.z + 2.4;
    const l = pickLanding(t, site, { px, pz, fx: 0, fz: -1 });
    // Perpendicular distance from the site to the player→landing line.
    const dx = l.x - px;
    const dz = l.z - pz;
    const len2 = dx * dx + dz * dz;
    const u = ((site.x - px) * dx + (site.z - pz) * dz) / len2;
    const cx = px + dx * u;
    const cz = pz + dz * u;
    const off = Math.hypot(site.x - cx, site.z - cz);
    expect(u > 0 && u < 1 && off < C.landing.sightClearMetres, `site on the sight line (off ${off.toFixed(2)})`).toBe(false);
  });

  it('prefers a point the frame can see over one straight ahead', () => {
    const t = makeTerrain('lil-bitz');
    const site = findCryptidSites(t, 'lil-bitz')[1];
    // Only points off to the +x side are "in frame".
    const isInFrame = (x) => x > site.x + 8;
    const l = pickLanding(t, site, { px: site.x, pz: site.z - 3, fx: 0, fz: 1, isInFrame });
    expect(isInFrame(l.x, l.y, l.z)).toBe(true);
  });
});

describe('the pale shape lies in the water, found per site', () => {
  for (const seed of SEEDS) {
    it(`${seed}: site.water is past the waterline, under the sea by the shape's depth`, () => {
      const t = makeTerrain(seed);
      const s = findCryptidSites(t, seed).find((c) => c.id === 'grotto_mermaids');
      expect(s.water).not.toBeNull();
      expect(t.inlandAt(s.water.x, s.water.z)).toBeLessThan(12);
      expect(t.heightAt(s.water.x, s.water.z)).toBeLessThan(SEA_LEVEL - C.sites.grotto_mermaids.shape.depthMetres);
      // And the fixed offset it replaced would have been under the sand on the default seed.
      if (seed === 'lil-bitz') expect(t.heightAt(s.x - 3, s.z - (s.inland + 4))).toBeGreaterThan(-0.02);
      expect(mermaidShapeSpot(t, s)).toEqual(s.water);
    });
  }
  it('the other sites carry no water spot', () => {
    const sites = findCryptidSites(makeTerrain('lil-bitz'), 'lil-bitz');
    for (const s of sites) if (s.id !== 'grotto_mermaids') expect(s.water).toBeNull();
  });
});

describe('the kelpī is sited where the give can be seen', () => {
  const CROWN_SEEDS = ['lil-bitz', 'beta', 'alpha', 'delta', 'door-shot', 'seed-a'];
  for (const seed of CROWN_SEEDS) {
    it(`${seed}: no crown between the chase camera and the driftwood, or the player, at the give`, () => {
      const t = makeTerrain(seed);
      const { genScenery } = makeScenery(t, seed);
      const s = findCryptidSites(t, seed, genScenery).find((c) => c.id === 'moana_kelpii');
      expect(s.fellBack).toBe(false);
      expect(giveSightClear(t, genScenery, s.x, s.z)).toBe(true);
    });
  }

  it('the rule bites: on seed beta the unchecked site is behind a crown and the checked one moves', () => {
    const t = makeTerrain('beta');
    const { genScenery } = makeScenery(t, 'beta');
    const blind = findCryptidSites(t, 'beta').find((c) => c.id === 'moana_kelpii');
    const seen = findCryptidSites(t, 'beta', genScenery).find((c) => c.id === 'moana_kelpii');
    expect(giveSightClear(t, genScenery, blind.x, blind.z)).toBe(false);
    expect([seen.x, seen.z]).not.toEqual([blind.x, blind.z]);
  });

  it('crownOnLine is the canopy rule: a crown on the line blocks, a trunk below it does not', () => {
    const tree = { kind: 'tree', x: 5, y: 0, z: 0, scale: 6 };
    const gen = () => [tree];
    // Through the crown band (0.2..1 of height): blocked.
    expect(crownOnLine(gen, { x: 0, y: 4, z: 0 }, { x: 10, y: 4, z: 0 })).toBe(true);
    // Under the band, at trunk height: clear.
    expect(crownOnLine(gen, { x: 0, y: 0.5, z: 0 }, { x: 10, y: 0.5, z: 0 })).toBe(false);
    // Wide of the crown radius: clear.
    expect(crownOnLine(gen, { x: 0, y: 4, z: 8 }, { x: 10, y: 4, z: 8 })).toBe(false);
  });

  it('every camera number the sight rule reads is in data', () => {
    for (const k of ['cameraDistance', 'cameraPitchDeg', 'cameraEyeMetres', 'giveStandMetres', 'kelpiiCentreMetres', 'playerHeadMetres']) {
      expect(typeof C.sight[k], k).toBe('number');
    }
  });
});

describe('a granted landing keeps clear of the authored finds', () => {
  it('never lands within findClearMetres of a find, on every seed and site', () => {
    for (const seed of SEEDS) {
      const t = makeTerrain(seed);
      const sites = findCryptidSites(t, seed);
      const finds = cryptidFinds(sites, seed, t);
      for (const site of sites) {
        const px = site.x;
        const pz = site.z + 2.4;
        const l = pickLanding(t, site, { px, pz, fx: 0, fz: -1, avoid: finds });
        for (const f of finds) {
          expect(Math.hypot(f.x - l.x, f.z - l.z), `${seed} ${site.id}`).toBeGreaterThanOrEqual(C.landing.findClearMetres - 1e-9);
        }
      }
    }
  });

  it('the rule bites: a find planted on the unavoided landing moves the landing', () => {
    const t = makeTerrain('beta');
    const site = findCryptidSites(t, 'beta').find((c) => c.id === 'grotto_mermaids');
    const px = site.x;
    const pz = site.z + 2.4;
    const free = pickLanding(t, site, { px, pz, fx: 0, fz: -1 });
    const moved = pickLanding(t, site, { px, pz, fx: 0, fz: -1, avoid: [{ x: free.x + 1.2, z: free.z }] });
    expect(Math.hypot(moved.x - free.x, moved.z - free.z)).toBeGreaterThan(1);
    expect(C.landing.findClearMetres).toBeGreaterThan(1.8); // pickup radius plus a margin
  });

  it('the ranking weights and the ring are data', () => {
    for (const k of ['inFrame', 'visible', 'offsetPenalty', 'distanceTie', 'sightLine']) {
      expect(typeof C.landing.score[k], k).toBe('number');
    }
    expect(C.landing.directions).toBeGreaterThanOrEqual(8);
  });
});
