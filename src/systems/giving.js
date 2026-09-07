import T from '../../data/tuning.json' with { type: 'json' };
import R from '../../data/recipients.json' with { type: 'json' };

/**
 * Giving. The outbound verb the kete never had.
 *
 * Built against a RECIPIENT, not against the trinket maker. Lyss's memos put her
 * at the hub of a four-stage chain — you give her Epics, she tells you where the
 * cryptids are, you give the cryptid something, it grants an Epic epic, you give
 * her those and she takes you to Karu — so the verb has to be general from the
 * start or every later rung is a rewrite. Her wanderers are recipients today
 * purely to prove the generality; the cryptids drop in as data when they exist.
 *
 * The economics are NOT here. Giving feeds `discernment.onGive(tier)`, the same
 * hidden k that refusing junk feeds slowly. That is the design: one rule at two
 * scales. Refuse the junk, give away the treasure. This module only decides what
 * a recipient DOES with what it is handed.
 */

const G = T.giving;

/** @param {string} id */
export function recipientDef(id) {
  return R.recipients[id] ?? null;
}

export function isRecipient(id) {
  return Boolean(R.recipients[id]);
}

/**
 * Deterministic pick from a list. Takes an rng so a test can pin the line and
 * so two players at the same seed do not hear identical dialogue forever.
 * @template T @param {T[]} list @param {() => number} rng @returns {T | null}
 */
function pick(list, rng) {
  if (!list || list.length === 0) return null;
  return list[Math.min(list.length - 1, Math.floor(rng() * list.length))];
}

/**
 * What happens when `recipientId` is handed a tier-`tier` item.
 *
 * Pure. No kete mutation, no discernment mutation, no DOM: the caller applies
 * the result. That is what makes the whole loop unit testable without a browser.
 *
 * @param {Object} a
 * @param {string} a.recipientId
 * @param {number} a.tier
 * @param {string[]} [a.knownCreatures] creatures already revealed, so she does
 *        not tell you the same thing twice while there is anything new to say
 * @param {() => number} a.rng
 * @returns {{
 *   accepted: boolean,
 *   kGain: number,
 *   line: string,
 *   sighting: {creature: string, line: string} | null,
 * }}
 */
export function offerTo({ recipientId, tier, knownCreatures = [], rng }) {
  const def = recipientDef(recipientId);
  if (!def) return { accepted: false, kGain: 0, line: '', sighting: null };

  const key = String(tier);
  const line = pick(def.reactions?.[key], rng) ?? '';

  // The gain table lives with discernment, because it IS discernment. Junk is
  // warmly accepted and worth exactly nothing.
  const kGain = T.discernment.givingGain[key] ?? 0;

  let sighting = null;
  if (tier >= (def.revealsAtTier ?? 99) && def.sightings?.length) {
    // Prefer something she has not told you yet. Once the set is exhausted she
    // repeats, because a fourth Wonder should still buy a moment.
    const fresh = def.sightings.filter((s) => !knownCreatures.includes(s.creature));
    const pool = fresh.length ? fresh : def.sightings;
    const s = pick(pool, rng);
    if (s) sighting = { creature: s.creature, line: pick(s.lines, rng) ?? '' };
  }

  return { accepted: true, kGain, line, sighting };
}

/**
 * Nearest recipient within reach, or null.
 * @param {{id: string, x: number, z: number}[]} npcs
 * @param {number} px @param {number} pz
 */
export function recipientInReach(npcs, px, pz) {
  let best = null;
  let bestD = G.reachMetres;
  for (const n of npcs) {
    if (!isRecipient(n.id)) continue;
    const d = Math.hypot(n.x - px, n.z - pz);
    if (d < bestD) { bestD = d; best = n; }
  }
  return best;
}

export const GIVING_TUNING = G;
export const RECIPIENT_DATA = R;
