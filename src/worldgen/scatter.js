import { rngFor } from './rng.js';

export const CHUNK_SIZE = 32;

/**
 * Blue-noise scatter that survives chunk seams.
 *
 * The naive version generates points per chunk independently, which enforces a
 * minimum distance inside a chunk but not across the border. BUILD-PLAN risk 4
 * measured the damage: cross-chunk minimum distance of 1.51 against a radius of
 * 3.2, with visible clumping along every seam.
 *
 * The fix, and the reason it is order-independent:
 *
 *   1. Every chunk generates RAW candidates from its own seed alone, so a
 *      chunk's raw set never depends on which chunks were generated first.
 *   2. Chunks are given a deterministic total order. A chunk culls its own
 *      candidates against the RAW candidates of any neighbour that ranks lower.
 *
 * Because step 2 always compares against raw sets, never against culled sets,
 * two chunks generated in either order reach the same answer. Culling against
 * neighbours' kept points would be order-dependent and is the trap here.
 *
 * The cost is roughly 8% of candidates culled, which is the price of the seam
 * being invisible.
 */

/** Lower rank wins a conflict. Total order over the integer lattice. */
function ranksBelow(acx, acz, bcx, bcz) {
  if (acz !== bcz) return acz < bcz;
  return acx < bcx;
}

const rawCache = new Map();

/**
 * Candidate points for one chunk, before cross-chunk culling.
 * Depends only on (seed, cx, cz) so it is stable and cacheable.
 *
 * @param {string} seed
 * @param {number} cx @param {number} cz
 * @param {number} minDist
 * @param {number} attempts dart throws; higher packs tighter and costs more
 * @returns {{x: number, z: number, k: number}[]} k is a per-point random draw
 */
export function rawCandidates(seed, cx, cz, minDist, attempts = 120) {
  const key = `${seed}|${cx}|${cz}|${minDist}|${attempts}`;
  const hit = rawCache.get(key);
  if (hit) return hit;

  const rng = rngFor(seed, 'scatter', cx, cz);
  const x0 = cx * CHUNK_SIZE;
  const z0 = cz * CHUNK_SIZE;
  const pts = [];
  const r2 = minDist * minDist;

  for (let i = 0; i < attempts; i++) {
    const x = x0 + rng() * CHUNK_SIZE;
    const z = z0 + rng() * CHUNK_SIZE;
    const k = rng();
    let ok = true;
    for (const p of pts) {
      const dx = p.x - x;
      const dz = p.z - z;
      if (dx * dx + dz * dz < r2) { ok = false; break; }
    }
    if (ok) pts.push({ x, z, k });
  }

  if (rawCache.size > 4096) rawCache.clear();
  rawCache.set(key, pts);
  return pts;
}

/**
 * Final points for a chunk, with the seam handled.
 *
 * @param {string} seed
 * @param {number} cx @param {number} cz
 * @param {number} minDist
 * @param {number} [attempts]
 */
export function scatterChunk(seed, cx, cz, minDist, attempts = 120) {
  const mine = rawCandidates(seed, cx, cz, minDist, attempts);
  const r2 = minDist * minDist;

  /** @type {{x:number,z:number,k:number}[]} */
  const blockers = [];
  for (let dx = -1; dx <= 1; dx++) {
    for (let dz = -1; dz <= 1; dz++) {
      if (dx === 0 && dz === 0) continue;
      const nx = cx + dx;
      const nz = cz + dz;
      if (!ranksBelow(nx, nz, cx, cz)) continue;
      // Only candidates near the shared border can possibly conflict.
      for (const p of rawCandidates(seed, nx, nz, minDist, attempts)) {
        blockers.push(p);
      }
    }
  }

  if (blockers.length === 0) return mine;

  return mine.filter((p) => {
    for (const b of blockers) {
      const dx = b.x - p.x;
      const dz = b.z - p.z;
      if (dx * dx + dz * dz < r2) return false;
    }
    return true;
  });
}

/** Testing hook: clear the raw-candidate memo. */
export function _clearScatterCache() {
  rawCache.clear();
}
