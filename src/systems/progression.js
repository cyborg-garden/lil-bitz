import T from '../../data/tuning.json' with { type: 'json' };
import R from '../../data/recipients.json' with { type: 'json' };

/**
 * Progression. Rung 5's two thresholds, counted over the kete ledger.
 *
 *   progressionFrom(ledger)          -> {epicsGiven, epicEpicsGiven, doorway, karu}
 *   newlyReached(prev, next)         -> ['doorway' | 'karu'] that flipped false -> true
 *   pendingMilestones(prog, seen)    -> milestone ids reached but not yet shown
 *   milestoneLine(id)                -> her line for that milestone (recipients.json)
 *   pityScale(prog)                  -> 1, or afterDoorwayPityMult once the doorway is open
 *
 * Integration (main.js) recomputes `progressionFrom(kete.ledger)` after every
 * gift, stores `milestonesSeen: string[]` in the snapshot, and plays
 * `pendingMilestones` one at a time, each queued `T.progression.delayMs` behind
 * her reaction line. It multiplies the pity window by `pityScale` wherever it
 * calls `windowStart`/`hardPity`.
 *
 * Everything is pure over the ledger shape kete.js writes:
 *   {itemId, tier, to, at}
 *
 * Why the ledger and not the bag. Lyss's chain is "give her only Epics -> a
 * doorway opens; give her Epic epics -> she takes you to Karu". The mechanism
 * is giving the good stuff AWAY, so the count has to be what she has been
 * handed. Counting what the player holds would reward hoarding, which is the
 * exact opposite of the design.
 *
 * Why milestones are edges, not states. A restored save with two Epics already
 * in the ledger must open the doorway silently rather than replay her line.
 * `progressionFrom` says what is true; `pendingMilestones` against the saved
 * `milestonesSeen` says what still needs saying. The line fires once, ever.
 */

const P = T.progression;

/** @typedef {{itemId: string, tier: number, to: string, at: number}} LedgerEntry */

/**
 * @typedef {Object} Progression
 * @property {number} epicsGiven      tier-5 gifts to the maker
 * @property {number} epicEpicsGiven  tier-6 gifts to the maker
 * @property {boolean} doorway        the doorway is open by her
 * @property {boolean} karu           Karu is with you
 */

/** The milestone ids, in the order they can be reached. */
export const MILESTONES = /** @type {const} */ (['doorway', 'karu']);

/**
 * @param {LedgerEntry[]} ledger
 * @param {string} [to] recipient the counts are against; her, by default
 * @returns {Progression}
 */
export function progressionFrom(ledger, to = P.recipient) {
  let epicsGiven = 0;
  let epicEpicsGiven = 0;
  for (const e of ledger ?? []) {
    if (e.to !== to) continue;
    if (e.tier === 5) epicsGiven++;
    else if (e.tier >= 6) epicEpicsGiven++;
  }
  return {
    epicsGiven,
    epicEpicsGiven,
    doorway: epicsGiven >= P.doorwayAt,
    karu: epicEpicsGiven >= P.karuAt,
  };
}

/**
 * Which milestones flipped on between two readings.
 * @param {Progression | null | undefined} prev
 * @param {Progression} next
 * @returns {string[]}
 */
export function newlyReached(prev, next) {
  return MILESTONES.filter((id) => next[id] && !(prev && prev[id]));
}

/**
 * Milestones that are true and have not been shown. This, not `newlyReached`,
 * is what the game plays from: it survives a restore, and it survives two
 * thresholds crossing on one gift (a tier 6 that is also the second tier-5 is
 * impossible, but a save from a future version might not think so).
 * @param {Progression} prog
 * @param {Iterable<string>} seen
 * @returns {string[]}
 */
export function pendingMilestones(prog, seen) {
  const s = new Set(seen ?? []);
  return MILESTONES.filter((id) => prog[id] && !s.has(id));
}

/**
 * Her line for a milestone. Data, in her register: action and warning only.
 * @param {string} id
 * @returns {string}
 */
export function milestoneLine(id) {
  return R.recipients[P.recipient]?.milestones?.[id] ?? '';
}

/**
 * Pity multiplier for the Epic scheduler. Once the doorway is open the world
 * leans in and the next Epic comes sooner; before it, nothing changes.
 * @param {Progression} prog
 */
export function pityScale(prog) {
  return prog?.doorway ? P.afterDoorwayPityMult : 1;
}

export const PROGRESSION_TUNING = P;
