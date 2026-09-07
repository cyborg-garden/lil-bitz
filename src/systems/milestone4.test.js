import { describe, it, expect } from 'vitest';
import alea from 'alea';

import { makeKete } from '../game/kete.js';
import { makeDiscernment } from './discernment.js';
import { offerTo, recipientInReach, recipientDef } from './giving.js';
import { findSite, siteOrDefer, fallbackSite, shouldRelocate, SITING_TUNING } from './siting.js';
import {
  makeEpicSequence, epicMode, pickVoLine, timeline, EPIC_SEQUENCE_TUNING as E,
} from './epicSequence.js';
import TUNING from '../../data/tuning.json' with { type: 'json' };
import ITEMS from '../../data/items.json' with { type: 'json' };

/**
 * Milestone 4: the giving verb, and the real Epic Find beat.
 *
 * These encode the DESIGN, not the implementation. If one fails, the question
 * is whether the game still feels right, not whether the code still compiles.
 */

// A flat world with a hill in one corner, so siting has something to reject.
function flatWorld(overrides = {}) {
  return {
    px: 0, pz: 0, fx: 0, fz: 1,
    heightAt: () => 1,
    slopeAt: () => 0,
    isSubmerged: () => false,
    seaLevel: 0,
    rng: alea('site'),
    ...overrides,
  };
}

describe('LOAD-BEARING 5: giving is a real sacrifice', () => {
  it('takes the object out of the bag and leaves the record behind', () => {
    const k = makeKete();
    k.collect({ id: 'a', itemId: 'green_stone', tier: 4 }, 0);
    expect(k.total).toBe(1);

    const given = k.give('a', 'trinket_maker', 1000);
    expect(given).toEqual({ itemId: 'green_stone', tier: 4 });

    // The thing is gone.
    expect(k.total).toBe(0);
    expect(k.byTier[4]).toBe(0);
    // The record is not.
    expect(k.ledger).toHaveLength(1);
    expect(k.lifetimeByTier[4]).toBe(1);
    expect(k.collectedTotal).toBe(1);
  });

  it('never lets a given item come back out of the sand', () => {
    const k = makeKete();
    k.collect({ id: 'a', itemId: 'green_stone', tier: 4 }, 0);
    k.give('a', 'trinket_maker', 1);
    // `has` is world dedupe and must still say yes, or the chunk respawns it.
    expect(k.has('a')).toBe(true);
    expect(k.collect({ id: 'a', itemId: 'green_stone', tier: 4 }, 2)).toBe(false);
  });

  it('cannot give what is not held', () => {
    const k = makeKete();
    expect(k.give('nope', 'trinket_maker', 0)).toBeNull();
  });

  it('offers the best thing first, because that is the decision', () => {
    const k = makeKete();
    k.collect({ id: 'a', itemId: 'twig', tier: 1 }, 0);
    k.collect({ id: 'b', itemId: 'green_stone', tier: 4 }, 1);
    k.collect({ id: 'c', itemId: 'sea_glass', tier: 2 }, 2);
    expect(k.items.map((i) => i.tier)).toEqual([4, 2, 1]);
  });
});

describe('LOAD-BEARING 6: junk is warmly accepted and worth nothing', () => {
  const rng = () => 0.5;

  it('accepts a tier 1 gift, says something, and moves the number not at all', () => {
    const r = offerTo({ recipientId: 'trinket_maker', tier: 1, rng });
    expect(r.accepted).toBe(true);
    expect(r.line.length).toBeGreaterThan(0);
    expect(r.kGain).toBe(0);
    expect(r.sighting).toBeNull();
  });

  it('scales steeply with tier, so generosity costs something', () => {
    const gains = [1, 2, 3, 4, 5].map((t) => offerTo({ recipientId: 'trinket_maker', tier: t, rng }).kGain);
    for (let i = 1; i < gains.length; i++) expect(gains[i]).toBeGreaterThanOrEqual(gains[i - 1]);
    expect(gains[3]).toBeGreaterThan(gains[1] * 5); // a Wonder dwarfs a Keeper
  });

  it('is the same hidden number the refusal channel feeds', () => {
    // One rule at two scales. Giving is not a second economy.
    const slow = makeDiscernment();
    slow.onRefusal(2);
    const fast = makeDiscernment();
    fast.onGive(4);
    expect(fast.taste).toBeGreaterThan(slow.taste * 8);
    expect(fast.taste).toBe(TUNING.discernment.givingGain['4']);
  });
});

describe('LOAD-BEARING 7: a Wonder buys a sighting', () => {
  const rng = alea('sighting');

  it('reveals nothing below the threshold', () => {
    for (const tier of [1, 2, 3]) {
      expect(offerTo({ recipientId: 'trinket_maker', tier, rng }).sighting).toBeNull();
    }
  });

  it('reveals a creature at tier 4 and up', () => {
    const r = offerTo({ recipientId: 'trinket_maker', tier: 4, rng });
    expect(r.sighting).not.toBeNull();
    expect(r.sighting.line.length).toBeGreaterThan(10);
  });

  it('prefers something you have not been told yet', () => {
    const def = recipientDef('trinket_maker');
    const all = def.sightings.map((s) => s.creature);
    const known = all.slice(0, all.length - 1);
    for (let i = 0; i < 20; i++) {
      const r = offerTo({ recipientId: 'trinket_maker', tier: 4, knownCreatures: known, rng });
      expect(r.sighting.creature).toBe(all[all.length - 1]);
    }
  });

  it('still gives you a moment once she has run out of new ones', () => {
    const def = recipientDef('trinket_maker');
    const all = def.sightings.map((s) => s.creature);
    const r = offerTo({ recipientId: 'trinket_maker', tier: 4, knownCreatures: all, rng });
    expect(r.sighting).not.toBeNull();
  });

  it('names her own three creatures and no others', () => {
    const def = recipientDef('trinket_maker');
    expect(def.sightings.map((s) => s.creature).sort())
      .toEqual(['grotto mermaids', 'moana kelpī', 'patupaiarehe']);
  });

  it('is a general verb, not a hardcoded NPC', () => {
    // The chain Lyss described has four rungs and more than one recipient. If
    // this ever needs a code change to add one, the verb was built wrong.
    const r = offerTo({ recipientId: 'wanderer_b', tier: 4, rng });
    expect(r.accepted).toBe(true);
    expect(r.sighting).toBeNull();
  });

  it('ignores an unknown recipient rather than throwing', () => {
    const r = offerTo({ recipientId: 'karu', tier: 5, rng });
    expect(r.accepted).toBe(false);
  });
});

describe('reach', () => {
  const npcs = [{ id: 'trinket_maker', x: 0, z: 0 }, { id: 'wanderer_a', x: 20, z: 0 }];

  it('finds the one you are standing next to', () => {
    expect(recipientInReach(npcs, 1, 1)?.id).toBe('trinket_maker');
  });

  it('finds nobody from across the beach', () => {
    expect(recipientInReach(npcs, 9, 9)).toBeNull();
  });
});

describe('LOAD-BEARING 8: a portal is deferred, never cancelled', () => {
  it('sites ahead of the player, in the band, on dry level ground', () => {
    const q = flatWorld();
    const s = findSite(q);
    expect(s).not.toBeNull();
    const d = Math.hypot(s.x - q.px, s.z - q.pz);
    expect(d).toBeGreaterThanOrEqual(SITING_TUNING.minDistance - 0.01);
    expect(d).toBeLessThanOrEqual(SITING_TUNING.maxDistance + 0.01);
    // Forward is +Z here, so the site must be in front.
    expect(s.z).toBeGreaterThan(0);
  });

  it('returns null rather than a bad site when the world says no', () => {
    const q = flatWorld({ isSubmerged: () => true });
    expect(siteOrDefer(q)).toBeNull();
  });

  it('rejects slopes an object would visibly roll down', () => {
    const q = flatWorld({ slopeAt: () => SITING_TUNING.maxSlope + 0.1 });
    expect(siteOrDefer(q)).toBeNull();
  });

  it('rejects sites with a tree standing in them', () => {
    const q = flatWorld({ isClear: () => false });
    expect(siteOrDefer(q)).toBeNull();
  });

  it('relaxes the bearing before giving up', () => {
    // Nothing in the tight cone, everything outside it. Forward is +Z, so a
    // world that only allows ground behind the player needs the wide pass.
    const behindOnly = flatWorld({
      isClear: (x, z) => z < 0,
    });
    expect(findSite(behindOnly, SITING_TUNING.bearingDegrees)).toBeNull();
    expect(findSite(behindOnly, SITING_TUNING.relaxedBearingDegrees)).not.toBeNull();
  });

  it('always has a fallback, so completion is 100%', () => {
    const q = flatWorld({ isSubmerged: () => true });
    const f = fallbackSite(q);
    expect(Math.hypot(f.x - q.px, f.z - q.pz)).toBeCloseTo(SITING_TUNING.fallbackDistance, 5);
  });

  it('follows a player who wanders off', () => {
    const site = { x: 0, z: 0 };
    expect(shouldRelocate(site, 10, 10)).toBe(false);
    expect(shouldRelocate(site, 0, SITING_TUNING.abandonDistance + 1)).toBe(true);
  });
});

describe('LOAD-BEARING 9: the beat sheet holds its shape', () => {
  // BUILD-PLAN quotes the beat FROM THE PORTAL OPENING. The tell sits at -0.6
  // to 0.0 by construction, so it is not part of the quoted length.
  const fromOpen = (mode) => { const tl = timeline(mode); return tl.end - tl.tellEnd; };

  it('runs about 4.2 seconds the first time', () => {
    expect(fromOpen('full')).toBeGreaterThan(4.0);
    expect(fromOpen('full')).toBeLessThan(4.4);
  });

  it('hits the plan\'s marks for each rung of the ladder', () => {
    expect(fromOpen('shorter')).toBeCloseTo(3.1, 1);
    expect(fromOpen('brief')).toBeCloseTo(2.0, 1);
    expect(fromOpen('quick')).toBeCloseTo(1.2, 1);
  });

  it('shortens and never removes', () => {
    const lengths = ['full', 'shorter', 'brief', 'quick'].map(fromOpen);
    for (let i = 1; i < lengths.length; i++) expect(lengths[i]).toBeLessThan(lengths[i - 1]);
    expect(lengths[lengths.length - 1]).toBeGreaterThan(0.9);
  });

  it('climbs the ladder with the count', () => {
    expect(epicMode(1)).toBe('full');
    expect(epicMode(2)).toBe('shorter');
    expect(epicMode(3)).toBe('shorter');
    expect(epicMode(5)).toBe('brief');
    expect(epicMode(9)).toBe('quick');
    expect(epicMode(400)).toBe('quick');
  });

  it('keeps the reserve above the ladder for tier 6', () => {
    // A ceiling that stays big is what stops the shortened common version
    // reading as a downgrade.
    expect(epicMode(400, 6)).toBe('escalated');
    expect(timeline('escalated').end).toBeGreaterThan(timeline('full').end);
    expect(E.modes.escalated.portals).toBe(2);
  });

  it('does not shorten the fall except in the quick version', () => {
    // Shorten the fall and the object stops landing with weight, and the
    // weight is what the whole beat exists for.
    for (const m of ['full', 'shorter', 'brief']) {
      expect(E.modes[m].fall).toBe(E.modes.full.fall);
    }
  });
});

describe('LOAD-BEARING 10: dilation never touches the landing', () => {
  const start = (mode, tier = 5) => {
    const seq = makeEpicSequence();
    const count = { full: 1, shorter: 2, brief: 5, quick: 9 }[mode] ?? 1;
    seq.start({ site: { x: 0, y: 1, z: 20 }, count, tier, line: 'x', subLine: 'y', rng: alea('seq') });
    return seq;
  };

  /** Step to an absolute time at a fixed dt. */
  const stepTo = (seq, t, dt = 1 / 120) => {
    while (seq.t < t - 1e-9) seq.update(Math.min(dt, t - seq.t));
  };

  it('is back to full speed by the moment of impact', () => {
    const seq = start('full');
    const tl = seq._timeline;
    stepTo(seq, tl.impact - 0.001);
    expect(seq.dilation()).toBeGreaterThan(0.98);
  });

  it('actually slows the world in between', () => {
    const seq = start('full');
    const tl = seq._timeline;
    stepTo(seq, tl.irisEnd);
    expect(seq.dilation()).toBeLessThan(0.5);
  });

  it('does not slow anything at all in the shortened versions past #4', () => {
    const seq = start('brief');
    const tl = seq._timeline;
    stepTo(seq, tl.irisEnd);
    expect(seq.dilation()).toBe(1);
  });

  it('lands the object exactly on the ground, exactly on impact', () => {
    const seq = start('full');
    const tl = seq._timeline;
    stepTo(seq, tl.impact - 1 / 120);
    const mid = seq.object();
    expect(mid.landed).toBe(false);
    expect(mid.y).toBeGreaterThan(1); // still above the ground
    stepTo(seq, tl.impact + 0.01);
    const landed = seq.object();
    expect(landed.landed).toBe(true);
    expect(landed.y).toBeCloseTo(1, 5);
  });

  it('drops from a height gravity actually explains', () => {
    const seq = start('full');
    const tl = seq._timeline;
    stepTo(seq, tl.fallStart + 0.001);
    const o = seq.object();
    const drop = 0.5 * E.gravity * E.modes.full.fall ** 2;
    expect(o.y).toBeCloseTo(1 + drop, 1);
  });

  it('fires tell, open, impact, deliver and end, in that order, once each', () => {
    const seq = start('full');
    const seen = [];
    for (let i = 0; i < 2000 && (seq.active || seen.length < 5); i++) {
      seq.update(1 / 120);
      seen.push(...seq.takeEvents());
    }
    expect(seen).toEqual(['tell', 'open', 'impact', 'deliver', 'end']);
  });

  it('goes inactive at the end so Gate C can be released', () => {
    const seq = start('quick');
    for (let i = 0; i < 2000; i++) seq.update(1 / 120);
    expect(seq.active).toBe(false);
  });

  it('shows nothing at all during the tell', () => {
    // The best second in the game: the world points and the screen does not.
    const seq = start('full');
    stepTo(seq, E.modes.full.tell * 0.5);
    expect(seq.aperture().scale).toBe(0);
    expect(seq.object()).toBeNull();
    expect(seq.tellStrength).toBeGreaterThan(0);
  });

  it('opens with an overshoot rather than easing flat to 1', () => {
    const seq = start('full');
    const tl = seq._timeline;
    let peak = 0;
    while (seq.t < tl.irisEnd) {
      seq.update(1 / 240);
      peak = Math.max(peak, seq.aperture().scale);
    }
    expect(peak).toBeGreaterThan(1.02);
  });
});

describe('the lettering', () => {
  it('excludes the last few lines used, so it cannot repeat back to back', () => {
    const recent = E.voLines.slice(0, E.voExcludeLast);
    // rng that never rolls the rare line and always takes the first of the pool
    const rng = () => 0.999;
    for (let i = 0; i < 30; i++) {
      const line = pickVoLine(recent, rng);
      expect(recent.includes(line)).toBe(false);
    }
  });

  it('keeps exactly one rare long line', () => {
    const rng = () => 0.001; // below 1/25
    expect(pickVoLine([], rng)).toBe(E.voRareLine);
  });

  it('gives the escalated find its own line', () => {
    expect(pickVoLine([], () => 0.5, true)).toBe(E.voEscalatedLine);
  });
});

describe('the ladder Lyss described exists in the data', () => {
  it('has a sixth tier above Epic Find', () => {
    const t6 = ITEMS.tiers.find((t) => t.tier === 6);
    expect(t6).toBeDefined();
    expect(t6.name).toMatch(/epic/i);
  });

  it('never scatters tier 6 into the world', () => {
    // Epic epic finds are GRANTED by a cryptid, not rolled. The biome key is
    // the guard: 'granted' matches no chunk biome, so no scatter can produce
    // one however the weights are tuned.
    const t6 = ITEMS.items.filter((i) => i.tier === 6);
    expect(t6.length).toBeGreaterThan(0);
    for (const i of t6) expect(i.biome).toBe('granted');
    for (const b of ['beach', 'forest']) {
      expect(ITEMS.weights[b]['6']).toBeUndefined();
      expect(ITEMS.weights[b]['5']).toBeUndefined();
    }
  });
});

describe('the reserve\'s second mouth can change sides', () => {
  it('flipAcross mirrors portal2 through portal1 and keeps the pair\'s spacing', () => {
    const seq = makeEpicSequence();
    seq.start({ site: { x: 0, y: 0, z: 0 }, count: 1, tier: 6, line: 'x', subLine: 'y', rng: () => 0.3 });
    const p1 = seq.portalPlanned;
    const a = seq.portal2Planned;
    expect(a).not.toBeNull();
    const before = Math.hypot(a.x - p1.x, a.z - p1.z);
    expect(seq.flipAcross()).toBe(true);
    const b = seq.portal2Planned;
    expect(b.x).toBeCloseTo(2 * p1.x - a.x, 9);
    expect(b.z).toBeCloseTo(2 * p1.z - a.z, 9);
    expect(b.y).toBe(a.y);
    expect(Math.hypot(b.x - p1.x, b.z - p1.z)).toBeCloseTo(before, 9);
    // A single-mouth mode has nothing to flip.
    const one = makeEpicSequence();
    one.start({ site: { x: 0, y: 0, z: 0 }, count: 1, tier: 5, line: 'x', subLine: 'y', rng: () => 0.3 });
    expect(one.flipAcross()).toBe(false);
  });
});
