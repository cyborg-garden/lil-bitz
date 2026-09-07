import { describe, it, expect } from 'vitest';
import alea from 'alea';

import { makeKete } from '../game/kete.js';
import {
  progressionFrom, newlyReached, pendingMilestones, milestoneLine, pityScale,
  MILESTONES, PROGRESSION_TUNING as P,
} from './progression.js';
import { epicHitChance, windowStart, hardPity } from './epic.js';
import TUNING from '../../data/tuning.json' with { type: 'json' };
import R from '../../data/recipients.json' with { type: 'json' };

/**
 * Rung 5, section B. The two thresholds and the timing they promise.
 *
 * These encode the DESIGN: give her Epics and a door opens; give her an Epic
 * epic and Karu comes. If the timing test fails after a pity change, the
 * question is whether a first session still reaches Karu, not whether the
 * arithmetic is right.
 */

const gift = (tier, to = 'trinket_maker', at = 0) => ({ itemId: `t${tier}`, tier, to, at });

describe('LOAD-BEARING 11: the thresholds count what she was GIVEN', () => {
  it('starts at nothing', () => {
    const p = progressionFrom([]);
    expect(p).toEqual({ epicsGiven: 0, epicEpicsGiven: 0, doorway: false, karu: false });
  });

  it('opens the doorway at doorwayAt tier-5 gifts to her', () => {
    const ledger = Array.from({ length: P.doorwayAt }, () => gift(5));
    expect(progressionFrom(ledger.slice(0, -1)).doorway).toBe(false);
    expect(progressionFrom(ledger).doorway).toBe(true);
  });

  it('brings Karu at karuAt tier-6 gifts to her', () => {
    const ledger = Array.from({ length: P.karuAt }, () => gift(6));
    expect(progressionFrom(ledger).karu).toBe(true);
    expect(progressionFrom(ledger).doorway).toBe(false);
  });

  it('does not count gifts to anyone else', () => {
    // A wanderer told you to take it to her. Giving it to him instead is not
    // giving it to her.
    const ledger = [gift(5, 'wanderer_a'), gift(5, 'wanderer_b'), gift(6, 'grotto_mermaids')];
    expect(progressionFrom(ledger)).toEqual({ epicsGiven: 0, epicEpicsGiven: 0, doorway: false, karu: false });
  });

  it('does not count Wonders, however many', () => {
    const ledger = Array.from({ length: 40 }, () => gift(4));
    expect(progressionFrom(ledger).doorway).toBe(false);
  });

  it('reads the real kete ledger shape', () => {
    const k = makeKete();
    k.collect({ id: 'a', itemId: 'x', tier: 5 }, 0);
    k.collect({ id: 'b', itemId: 'y', tier: 5 }, 1);
    k.give('a', 'trinket_maker', 2);
    k.give('b', 'trinket_maker', 3);
    expect(progressionFrom(k.ledger).doorway).toBe(true);
    // And the bag being empty is the point: the count is what she has, not
    // what the player holds.
    expect(k.total).toBe(0);
  });
});

describe('LOAD-BEARING 12: milestones fire once, on the edge', () => {
  it('reports the flip and nothing else', () => {
    const before = progressionFrom([gift(5)]);
    const after = progressionFrom([gift(5), gift(5)]);
    expect(newlyReached(before, after)).toEqual(['doorway']);
    expect(newlyReached(after, after)).toEqual([]);
    expect(newlyReached(null, after)).toEqual(['doorway']);
  });

  it('stays silent on a restored save that already crossed the line', () => {
    // Loading a game with two Epics in the ledger opens the door and says
    // nothing: the line was heard the day it happened.
    const prog = progressionFrom([gift(5), gift(5), gift(6)]);
    expect(pendingMilestones(prog, ['doorway', 'karu'])).toEqual([]);
    expect(pendingMilestones(prog, ['doorway'])).toEqual(['karu']);
    expect(pendingMilestones(prog, [])).toEqual(['doorway', 'karu']);
  });

  it('has a line for every milestone, in her register', () => {
    for (const id of MILESTONES) {
      const line = milestoneLine(id);
      expect(line.length, id).toBeGreaterThan(20);
      // Lowercase voice. Only her name for Karu is capitalised, and she does
      // not even say it here.
      expect(line).toBe(line.toLowerCase());
    }
  });

  it('never has her explain what Karu or the door is', () => {
    // Action and warning only. What either IS is Lyss's to write.
    const m = R.recipients.trinket_maker.milestones;
    for (const line of Object.values(m)) {
      expect(line).not.toMatch(/karu is|the door is|made (it|this)|means/i);
    }
    // The doorway line carries the promise that a way back exists, so a lost
    // player knows the game is not broken.
    expect(m.doorway).toMatch(/way back/);
  });

  it('has her accept a tier 6 rather than refuse it', () => {
    // karuAt requires her to take the gift. The old line had her not touch it
    // while the kete removed it anyway.
    const six = R.recipients.trinket_maker.reactions['6'];
    expect(six.length).toBeGreaterThan(0);
    for (const line of six) expect(line).not.toMatch(/will not touch|won't touch|does not take/);
  });

  it('queues milestone lines behind the reaction, never on top', () => {
    expect(P.delayMs).toBeGreaterThanOrEqual(TUNING.giving.reactionMs);
  });
});

describe('LOAD-BEARING 13: the world leans in once the door is open', () => {
  it('leaves the pity table alone before the doorway', () => {
    expect(pityScale(progressionFrom([]))).toBe(1);
    expect(pityScale(progressionFrom([gift(5)]))).toBe(1);
  });

  it('shortens it after', () => {
    const s = pityScale(progressionFrom([gift(5), gift(5)]));
    expect(s).toBe(P.afterDoorwayPityMult);
    expect(s).toBeLessThan(1);
    expect(s).toBeGreaterThan(0.4); // still a wait, not a vending machine
  });
});

/**
 * The timing promise, simulated on the real tick economy.
 *
 * A player who grabs everything at the target offer rate, at ZERO discernment
 * (the slowest pity curve), walking back to her after each find. The cryptid
 * round trip is the amended design's budget: the first sighting names the
 * nearest site, all sites are inside ~3 min there and back.
 */
function simulate(seedStr) {
  const rng = alea(seedStr);
  const O = TUNING.offer;
  const tickSec = 60 / O.targetOffersPerMin;
  const floorSec = TUNING.epicGates.minSecondsBetween;
  const walkBackSec = 45;        // portal site to her and back into the loop
  const cryptidRoundTripSec = 180; // her -> nearest site -> her
  const k = 0;

  // Epic #1 is scripted: the first natural roll is held to the floor.
  let t = Math.max((TUNING.scriptedOpening.epicAtIndex * tickSec), TUNING.scriptedOpening.epicMinSeconds);
  let lastEpic = t;
  const ledger = [];
  let prog = progressionFrom(ledger);
  let doorwayAt = null;

  ledger.push(gift(5, 'trinket_maker', t + walkBackSec));
  t += walkBackSec;
  prog = progressionFrom(ledger);

  // Roll for the next Epic tick by tick.
  const nextEpic = () => {
    let n = 0;
    for (let guard = 0; guard < 10000; guard++) {
      t += tickSec;
      n += TUNING.pity.tickGrab;
      if (t - lastEpic < floorSec) continue;
      const scale = pityScale(prog);
      // Integration multiplies windowStart/hardPity by the scale; the ramp
      // is unchanged. Reproduced here in terms of the real curve.
      const start = Math.round(windowStart(k) * scale);
      const hard = Math.round(hardPity(k) * scale);
      const p = n < start ? 0 : n >= hard ? 1 : epicHitChance(n - start + windowStart(k), k);
      if (rng() < p) { lastEpic = t; return t; }
    }
    throw new Error('pity never fired');
  };

  while (!prog.doorway) {
    nextEpic();
    t += walkBackSec;
    ledger.push(gift(5, 'trinket_maker', t));
    prog = progressionFrom(ledger);
  }
  doorwayAt = t;

  // Karu: the cryptid route. The first sighting (bought by Epic #1) names the
  // nearest site; walk there, take the find, give it, the tier 6 lands, walk
  // back, give it to her.
  t += cryptidRoundTripSec;
  ledger.push(gift(6, 'trinket_maker', t));
  prog = progressionFrom(ledger);
  const karuAt = t;

  return { doorwayMin: doorwayAt / 60, karuMin: karuAt / 60 };
}

describe('LOAD-BEARING 14: both beats land inside a first session', () => {
  const runs = Array.from({ length: 200 }, (_, i) => simulate(`prog-${i}`));
  const sorted = (key) => runs.map((r) => r[key]).sort((a, b) => a - b);

  it(`opens the doorway by ${P.targetDoorwayMin} min for nine players in ten`, () => {
    const d = sorted('doorwayMin');
    expect(d[Math.floor(d.length * 0.9)]).toBeLessThanOrEqual(P.targetDoorwayMin);
  });

  it('and the hard-pity ceiling sits within seconds of it', () => {
    // Hard pity bounds the wait, so the worst case is a real number: 34 ticks
    // at zero discernment plus two walks back is about 9.2 min. That is the
    // ceiling, not the typical session, and it must not creep.
    const d = sorted('doorwayMin');
    expect(d[d.length - 1]).toBeLessThanOrEqual(P.targetDoorwayMin + P.ceilingSlackMin);
  });

  it(`brings Karu by ${P.targetKaruMin} min, every time`, () => {
    const kk = sorted('karuMin');
    expect(kk[kk.length - 1]).toBeLessThanOrEqual(P.targetKaruMin);
  });

  it('is not instant either', () => {
    // A doorway before the third minute would mean the pity table broke.
    const d = sorted('doorwayMin');
    expect(d[0]).toBeGreaterThan(3);
  });
});
