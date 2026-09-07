import alea from 'alea';

/**
 * Deterministic RNG derived from a string key.
 *
 * Every random decision in worldgen must come from one of these, keyed by
 * something stable like `${seed}:chunk:${cx}:${cz}`. Never from Math.random,
 * and never from a generator threaded through call order, because chunks are
 * generated in whatever order the player walks and must not depend on it.
 *
 * @param {...(string|number)} parts
 * @returns {() => number} uniform in [0, 1)
 */
export function rngFor(...parts) {
  return alea(parts.join(':'));
}

/** @param {() => number} rng @param {number} lo @param {number} hi */
export function range(rng, lo, hi) {
  return lo + rng() * (hi - lo);
}

/**
 * Pick an index from a weight array. Weights need not be normalised.
 * @param {() => number} rng
 * @param {number[]} weights
 */
export function weightedIndex(rng, weights) {
  let total = 0;
  for (const w of weights) total += w;
  let r = rng() * total;
  for (let i = 0; i < weights.length; i++) {
    r -= weights[i];
    if (r <= 0) return i;
  }
  return weights.length - 1;
}
