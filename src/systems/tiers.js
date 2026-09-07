import ITEMS from '../../data/items.json' with { type: 'json' };
import T from '../../data/tuning.json' with { type: 'json' };

/**
 * Tier weighting. Pure functions over plain numbers: no three, no DOM, no
 * clock. Everything here is unit tested.
 */

/** @param {Record<string, number>} w */
export function normalizeWeights(w) {
  let total = 0;
  for (const k of Object.keys(w)) total += w[k];
  if (total <= 0) return { ...w };
  /** @type {Record<string, number>} */
  const out = {};
  for (const k of Object.keys(w)) out[k] = w[k] / total;
  return out;
}

/** @param {'beach'|'forest'} biome */
export function baseWeights(biome) {
  return { ...ITEMS.weights[biome] };
}

/**
 * Shift the table toward the good stuff by k, the hidden discernment number.
 *
 * At k=1 Wonders go from 5% to about 25%, a five-fold multiplier, while the
 * Epic cadence only moves about 20%. That asymmetry is the design: the cheat
 * makes the world richer, it does not make the spectacle cheap.
 *
 * @param {Record<string, number>} w
 * @param {number} k 0..1
 */
export function applyDiscernment(w, k) {
  const p = T.discernment.payoff;
  /** @type {Record<string, number>} */
  const out = {};
  for (const tier of Object.keys(w)) {
    const mult = p[tier] ?? 0;
    out[tier] = Math.max(0, w[tier] * (1 + mult * k));
  }
  return normalizeWeights(out);
}

/**
 * @param {() => number} rng
 * @param {Record<string, number>} weights normalised or not
 * @returns {1|2|3|4}
 */
export function rollTier(rng, weights) {
  const keys = Object.keys(weights);
  let total = 0;
  for (const k of keys) total += weights[k];
  let r = rng() * total;
  for (const k of keys) {
    r -= weights[k];
    if (r <= 0) return /** @type {any} */ (Number(k));
  }
  return /** @type {any} */ (Number(keys[keys.length - 1]));
}

export const TUNING = T;
