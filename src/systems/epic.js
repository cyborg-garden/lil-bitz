import T from '../../data/tuning.json' with { type: 'json' };

/**
 * Epic Find scheduling.
 *
 * Epic is deliberately NOT on the tier weight table. It runs its own event
 * scheduler, which decouples spectacle pacing from loot noise. That single
 * decision is the most structural one in the loot design: it means tuning drop
 * rates can never accidentally make the big moment common or absent.
 *
 * The curve is soft pity on ticks since the last Epic. A flat 3% roll has a
 * fine mean and a fatal shape: 40% of five-minute sessions would see no Epic at
 * all. This has the same mean and roughly a sixteenth of the variance, and the
 * support is hard-bounded, so there is no tail. There cannot be a tail.
 */

const P = T.pity;

/** @param {number[]} pair @param {number} k */
const lerp = (pair, k) => pair[0] + (pair[1] - pair[0]) * k;

export const windowStart = (k) => Math.round(lerp(P.windowStart, k));
export const rampRate = (k) => lerp(P.ramp, k);
export const hardPity = (k) => Math.round(lerp(P.hardPity, k));

/**
 * Probability that this tick delivers an Epic.
 * @param {number} n ticks since the last Epic
 * @param {number} k discernment, 0..1
 */
export function epicHitChance(n, k, pityMult = 1) {
  // The multiplier is how the world leans in: once the doorway is open, and
  // again in elsewhere, the window and the hard ceiling both come sooner. The
  // ramp is untouched, so a scaled window is still a window and not a cliff.
  const start = Math.round(windowStart(k) * pityMult);
  const hard = Math.round(hardPity(k) * pityMult);
  if (n < start) return 0;
  if (n >= hard) return 1;
  return Math.min(1, rampRate(k) * (n - start + 1));
}

/**
 * Ticks accrue on offer RESOLUTION, not on time. Counting in offers rather than
 * seconds is what makes the pacing survive a change to walk speed.
 *
 * Refusals counting at all is what lets the cheat work. Counting at only 0.35
 * is what stops "refuse everything" being a farm.
 *
 * @param {'grab'|'refusal'} how
 */
export function tickFor(how) {
  return how === 'grab' ? P.tickGrab : P.tickRefusal;
}

/**
 * The three gates. All must pass, and when one blocks, the counter FREEZES
 * rather than resetting, so a suppressed Epic is deferred and never cancelled.
 *
 * @param {Object} s
 * @param {number} s.epicTicks
 * @param {number} s.lastEpicAtMs
 * @param {boolean} s.epicActive
 * @param {number} k
 * @param {number} nowMs
 * @param {() => number} rng
 * @param {number} [pityMult] scales windowStart and hardPity; 1 is the table
 */
export function shouldTriggerEpic(s, k, nowMs, rng, pityMult = 1) {
  // Gate C: exactly one Epic in the world at a time.
  if (s.epicActive) return false;
  // Gate B: hard wall-clock floor. Epic farming is arithmetically impossible.
  if (nowMs - s.lastEpicAtMs < T.epicGates.minSecondsBetween * 1000) return false;
  return rng() < epicHitChance(s.epicTicks, k, pityMult);
}

/**
 * Wonders get their own smaller pity, so a dry run of tier 4 self-corrects
 * without touching the Epic scheduler.
 * @param {Record<string, number>} weights
 * @param {number} dry offers since the last Wonder
 */
export function applyWonderPity(weights, dry) {
  if (dry < P.wonderSoftDry) return weights;
  const out = { ...weights };
  out['4'] = (out['4'] ?? 0) * P.wonderSoftMult;
  return out;
}

export function wonderForced(dry) {
  return dry >= P.wonderHardDry;
}

/**
 * Which counter an armed Epic spends.
 *
 * A GRANTED Epic — a cryptid's tier 6 — is the cryptid's, not the world's.
 * It never counts as one of the player's Epics: the promised first Epic is
 * owed while `natural` is 0, and the shortening ladder runs on `natural`.
 * Before this the grant bumped one shared count, so a player who found a
 * cryptid before their first natural Epic lost the 2.5-minute promise and
 * their first real Epic played 'shorter'.
 *
 * @param {{natural: number, granted: number}} counts
 * @param {boolean} granted
 * @returns {{natural: number, granted: number}}
 */
export function countArmed(counts, granted) {
  return granted
    ? { natural: counts.natural, granted: counts.granted + 1 }
    : { natural: counts.natural + 1, granted: counts.granted };
}

/** The promised first Epic is still owed while no NATURAL one has been armed. */
export function firstEpicOwed(counts) {
  return counts.natural === 0;
}

/**
 * A stable id for a delivered object. Granted ones have their own serial so
 * a grant and a natural Epic can never share an id — the kete's taken set
 * is keyed by id, and a shared one made the second uncollectable.
 * @param {{natural: number, granted: number}} counts after countArmed
 * @param {boolean} granted
 */
export function epicObjectId(counts, granted) {
  return granted ? `epic:g${counts.granted}` : `epic:${counts.natural}`;
}

export const EPIC_TUNING = P;
