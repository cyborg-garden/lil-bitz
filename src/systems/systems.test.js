import { describe, it, expect } from 'vitest';
import alea from 'alea';
import { baseWeights, applyDiscernment, normalizeWeights, rollTier } from './tiers.js';
import { makeDiscernment, isRefusal } from './discernment.js';
import { epicHitChance, shouldTriggerEpic, tickFor, windowStart, hardPity, countArmed, firstEpicOwed, epicObjectId } from './epic.js';
import { epicMode } from './epicSequence.js';
import TUNING from '../../data/tuning.json' with { type: 'json' };

/**
 * These encode the DESIGN, not the implementation. If one fails, the question
 * is whether the game still feels right, not whether the code still compiles.
 */

/** Simulate gaps between Epics at a fixed k, returning gap lengths in ticks. */
function epicGaps(k, runs = 4000, seed = 'gaps') {
  const rng = alea(seed);
  const gaps = [];
  let n = 0;
  for (let i = 0; i < runs * 40; i++) {
    n += 1;
    if (rng() < epicHitChance(n, k)) { gaps.push(n); n = 0; }
    if (gaps.length >= runs) break;
  }
  return gaps;
}

const mean = (a) => a.reduce((x, y) => x + y, 0) / a.length;
const stdDev = (a) => {
  const m = mean(a);
  return Math.sqrt(mean(a.map((v) => (v - m) ** 2)));
};

describe('LOAD-BEARING 1: variance is the enemy', () => {
  it('holds the Epic gap tightly around its mean at k=0', () => {
    const gaps = epicGaps(0);
    // A flat 3% roll has sigma of about 33 ticks. Soft pity must be far tighter
    // or 40% of five-minute sessions never see the feature at all.
    expect(stdDev(gaps)).toBeLessThan(2.5);
    expect(mean(gaps)).toBeGreaterThan(23);
    expect(mean(gaps)).toBeLessThan(27);
  });

  it('hard-bounds the gap, so there is no tail', () => {
    const gaps = epicGaps(0);
    expect(Math.min(...gaps)).toBeGreaterThanOrEqual(windowStart(0));
    expect(Math.max(...gaps)).toBeLessThanOrEqual(hardPity(0));
  });

  it('speeds up only modestly at full discernment', () => {
    // The cheat must make the world richer without making the spectacle cheap.
    const slow = mean(epicGaps(0));
    const fast = mean(epicGaps(1));
    expect(fast).toBeLessThan(slow);
    expect(fast / slow).toBeGreaterThan(0.7); // no more than ~30% faster
  });
});

describe('LOAD-BEARING 2: the cheat cannot be farmed by idling', () => {
  it('gives k = 0 to a player who picks up nothing, however refined', () => {
    const d = makeDiscernment();
    for (let i = 0; i < 200; i++) d.onRefusal(2); // maximum taste
    // Assert against the tuning, not a literal. This previously hardcoded 20,
    // which silently encoded the old ceiling of 24 and broke the moment the
    // ceiling was resized for a real reason.
    expect(d.taste).toBe(TUNING.discernment.tasteMax);
    // No pickups at all, so the activity gate is shut.
    expect(d.k(60_000)).toBe(0);
  });

  it('lets a real collector reach a high k', () => {
    const d = makeDiscernment();
    let now = 0;
    for (let i = 0; i < 40; i++) {
      d.onRefusal(2);
      now += 1000;
      if (i % 3 === 0) d.onGrab(3, now); // taking good things costs almost nothing
    }
    expect(d.k(now)).toBeGreaterThan(0.5);
  });

  it('punishes hoovering up junk', () => {
    const d = makeDiscernment();
    let now = 0;
    // Refusals alone leave k at zero because the activity gate is shut, so the
    // player has to actually be collecting for this comparison to mean
    // anything. An earlier version of this test compared 0 against 0 and
    // passed for the wrong reason.
    for (let i = 0; i < 30; i++) {
      d.onRefusal(2);
      now += 500;
      if (i % 4 === 0) d.onGrab(3, now);
    }
    const before = d.k(now);
    expect(before).toBeGreaterThan(0.2);

    for (let i = 0; i < 6; i++) { d.onGrab(1, now); now += 500; }
    expect(d.k(now)).toBeLessThan(before * 0.5);
  });
});

describe('LOAD-BEARING 3: Epic cadence has a hard floor', () => {
  const always = () => 0;

  it('refuses an Epic inside the wall-clock floor no matter the counter', () => {
    const s = { epicTicks: 999, lastEpicAtMs: 0, epicActive: false };
    expect(shouldTriggerEpic(s, 1.0, 149_000, always)).toBe(false);
    expect(shouldTriggerEpic(s, 1.0, 151_000, always)).toBe(true);
  });

  it('refuses a second concurrent Epic', () => {
    const s = { epicTicks: 999, lastEpicAtMs: 0, epicActive: true };
    expect(shouldTriggerEpic(s, 1.0, 10_000_000, always)).toBe(false);
  });
});

describe('LOAD-BEARING 4: refusal means seeing and declining', () => {
  const base = {
    tier: 1, seenSeconds: 1.0, distance: 7, travelledLast5s: 4, uiBlocked: false,
  };

  it('accepts a genuine walk-past', () => {
    expect(isRefusal(base)).toBe(true);
  });

  it('rejects sprinting past without looking', () => {
    expect(isRefusal({ ...base, seenSeconds: 0.2 })).toBe(false);
  });

  it('rejects standing still while things despawn', () => {
    expect(isRefusal({ ...base, travelledLast5s: 0.5 })).toBe(false);
  });

  it('rejects refusing something good', () => {
    // Only junk can be refused. Declining a Wonder is not discernment.
    expect(isRefusal({ ...base, tier: 4 })).toBe(false);
  });

  it('rejects an item still within reach', () => {
    expect(isRefusal({ ...base, distance: 2 })).toBe(false);
  });
});

describe('the payoff table', () => {
  it('lifts Wonders about fivefold from k=0 to k=1', () => {
    const w0 = normalizeWeights(baseWeights('beach'));
    const w1 = applyDiscernment(baseWeights('beach'), 1);
    expect(w0['4']).toBeCloseTo(0.05, 2);
    expect(w1['4']).toBeGreaterThan(0.22);
    expect(w1['4'] / w0['4']).toBeGreaterThan(4);
  });

  it('always sums to one', () => {
    for (const k of [0, 0.25, 0.5, 0.75, 1]) {
      const w = applyDiscernment(baseWeights('forest'), k);
      const total = Object.values(w).reduce((a, b) => a + b, 0);
      expect(total).toBeCloseTo(1, 10);
    }
  });

  it('moves junk down and treasure up, monotonically', () => {
    const ks = [0, 0.3, 0.6, 1];
    const bitz = ks.map((k) => applyDiscernment(baseWeights('beach'), k)['1']);
    const wonders = ks.map((k) => applyDiscernment(baseWeights('beach'), k)['4']);
    for (let i = 1; i < ks.length; i++) {
      expect(bitz[i]).toBeLessThan(bitz[i - 1]);
      expect(wonders[i]).toBeGreaterThan(wonders[i - 1]);
    }
  });

  it('rolls tiers in proportion to the weights', () => {
    const rng = alea('roll');
    const w = normalizeWeights(baseWeights('beach'));
    const counts = { 1: 0, 2: 0, 3: 0, 4: 0 };
    for (let i = 0; i < 20000; i++) counts[rollTier(rng, w)]++;
    expect(counts[1] / 20000).toBeCloseTo(w['1'], 1);
    expect(counts[4] / 20000).toBeCloseTo(w['4'], 1);
  });
});

describe('giving is the fast channel', () => {
  it('moves taste much faster than refusing does', () => {
    const a = makeDiscernment();
    a.onRefusal(2);
    const b = makeDiscernment();
    b.onGive(4);
    expect(b.taste).toBeGreaterThan(a.taste * 8);
  });

  it('gives nothing for handing over junk', () => {
    const d = makeDiscernment();
    d.onGive(1);
    expect(d.taste).toBe(0);
  });
});

describe('decay', () => {
  it('halves taste over the half-life', () => {
    const d = makeDiscernment();
    for (let i = 0; i < 10; i++) d.onRefusal(2);
    const before = d.taste;
    d.tick(120);
    expect(d.taste).toBeCloseTo(before / 2, 5);
  });

  it('crashes taste after three junk grabs in a row', () => {
    const d = makeDiscernment();
    for (let i = 0; i < 10; i++) d.onRefusal(2);
    const before = d.taste;
    d.onGrab(1, 0); d.onGrab(1, 0); d.onGrab(1, 0);
    expect(d.taste).toBeLessThan(before * 0.3);
  });
});

describe('ticks', () => {
  it('counts a refusal for much less than a grab', () => {
    expect(tickFor('refusal')).toBeLessThan(tickFor('grab') * 0.5);
    expect(tickFor('refusal')).toBeGreaterThan(0);
  });
});

describe('a granted Epic is the cryptid\'s, not the world\'s: it never counts', () => {
  it('a grant before the first natural Epic leaves the promise owed and the first one full', () => {
    let c = { natural: 0, granted: 0 };
    expect(firstEpicOwed(c)).toBe(true);
    c = countArmed(c, true);
    expect(c).toEqual({ natural: 0, granted: 1 });
    expect(firstEpicOwed(c)).toBe(true);
    // Three grants: still owed, still full.
    c = countArmed(countArmed(c, true), true);
    expect(firstEpicOwed(c)).toBe(true);
    c = countArmed(c, false);
    expect(c.natural).toBe(1);
    expect(firstEpicOwed(c)).toBe(false);
    expect(epicMode(c.natural, 5)).toBe('full');
  });

  it('the ladder runs on the natural count alone', () => {
    let c = { natural: 0, granted: 0 };
    for (let i = 0; i < 5; i++) c = countArmed(c, true);
    c = countArmed(c, false);
    expect(epicMode(c.natural, 5)).toBe('full');
    c = countArmed(c, false);
    expect(epicMode(c.natural, 5)).toBe('shorter');
  });

  it('a grant and a natural Epic never share an object id', () => {
    const ids = new Set();
    let c = { natural: 0, granted: 0 };
    for (const g of [true, false, true, false, false, true]) {
      c = countArmed(c, g);
      const id = epicObjectId(c, g);
      expect(ids.has(id), id).toBe(false);
      ids.add(id);
    }
  });
});
