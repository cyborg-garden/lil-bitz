import T from '../../data/tuning.json' with { type: 'json' };

/**
 * Where the portal opens.
 *
 * BUILD-PLAN section 6: sample ahead of the player, need slope, clearance, dry
 * ground and line of sight. Relax the bearing on failure. And, the rule that
 * matters most: a portal that cannot be sited is DEFERRED, never cancelled. A
 * suppressed Epic is late; it is never lost. Completion rate has to be 100% or
 * the whole promise of the scheduler is a lie.
 *
 * Pure functions over callbacks, so this tests without a world, a renderer or a
 * clock.
 */

const S = T.epicSiting;
const DEG = Math.PI / 180;

/** Signed shortest angle from b to a, in radians. */
function angleDelta(a, b) {
  let d = (a - b) % (Math.PI * 2);
  if (d > Math.PI) d -= Math.PI * 2;
  if (d < -Math.PI) d += Math.PI * 2;
  return d;
}

/**
 * @typedef {Object} SiteQuery
 * @property {number} px @property {number} pz
 * @property {number} fx @property {number} fz  unit facing
 * @property {(x: number, z: number) => number} heightAt
 * @property {(x: number, z: number) => number} slopeAt
 * @property {(x: number, z: number) => boolean} isSubmerged
 * @property {number} seaLevel
 * @property {(x: number, z: number, r: number) => boolean} [isClear] false if
 *           foliage or scenery is inside `r` metres
 * @property {(x: number, y: number, z: number) => boolean} [isInFrame] false if
 *           the portal mouth above this landing point would not be on screen
 * @property {() => number} rng
 */

/**
 * Try to find a site. Returns null if nothing passed, which the caller must
 * treat as "try again in a moment", never as "cancel".
 *
 * @param {SiteQuery} q
 * @param {number} [bearingDeg] override, used internally for the relaxed pass
 * @returns {{x: number, y: number, z: number, score: number} | null}
 */
export function findSite(q, bearingDeg = S.bearingDegrees) {
  const half = bearingDeg * DEG;
  const baseAngle = Math.atan2(q.fx, q.fz);
  let best = null;

  for (let i = 0; i < S.samples; i++) {
    const a = baseAngle + (q.rng() * 2 - 1) * half;
    const d = S.minDistance + q.rng() * (S.maxDistance - S.minDistance);
    const x = q.px + Math.sin(a) * d;
    const z = q.pz + Math.cos(a) * d;

    if (q.isSubmerged(x, z)) continue;
    const y = q.heightAt(x, z);
    if (y < q.seaLevel + S.seaMargin) continue;
    if (q.slopeAt(x, z) > S.maxSlope) continue;
    if (q.isClear && !q.isClear(x, z, S.clearance)) continue;
    if (!hasLineOfSight(q, x, z, y)) continue;
    // Line of sight is not the same as being in shot. The mouth hangs several
    // metres above the landing point, so a site on rising ground can be
    // perfectly visible to a ray and still put the portal off the top of the
    // screen. Ground height at the site turned out to dominate everything else,
    // which is why this is a siting criterion and not a camera trick.
    if (q.isInFrame && !q.isInFrame(x, y, z)) continue;

    // Scored for FRAMING, not just for legality.
    //
    // The first version scored distance only, and the winner was routinely 45
    // degrees off-axis: the portal opened clipped against the top corner of the
    // frame and the object landed as a speck in the margin. Every assertion
    // passed, because every assertion was about the sequence and not about
    // whether you could see it. Bearing therefore dominates the score, and
    // distance only breaks ties.
    const mid = (S.minDistance + S.maxDistance) / 2;
    const off = Math.abs(angleDelta(a, baseAngle));
    const score = -off * 14 - Math.abs(d - mid) * 0.5;
    if (!best || score > best.score) best = { x, y, z, score };
  }

  return best;
}

/**
 * Two passes: the tight cone first, then the relaxed one. Returns null only if
 * both fail, and null means DEFER.
 * @param {SiteQuery} q
 */
export function siteOrDefer(q) {
  return findSite(q, S.bearingDegrees) ?? findSite(q, S.relaxedBearingDegrees);
}

/**
 * Cheap terrain line of sight: walk the ray and check nothing stands above the
 * straight line from eye height to the site plus 1.5m.
 * @param {SiteQuery} q
 */
export function hasLineOfSight(q, x, z, y) {
  const eyeY = q.heightAt(q.px, q.pz) + 1.6;
  const targetY = y + 1.5;
  const steps = 12;
  for (let i = 1; i < steps; i++) {
    const t = i / steps;
    const sx = q.px + (x - q.px) * t;
    const sz = q.pz + (z - q.pz) * t;
    const lineY = eyeY + (targetY - eyeY) * t;
    if (q.heightAt(sx, sz) > lineY) return false;
  }
  return true;
}

/**
 * Has the player wandered far enough that the object should follow them?
 * @param {{x: number, z: number}} site @param {number} px @param {number} pz
 */
export function shouldRelocate(site, px, pz) {
  return Math.hypot(site.x - px, site.z - pz) > S.abandonDistance;
}

/**
 * Where to put it when siting has failed too many times. Straight ahead, on the
 * ground, no ceremony. The fiction is that it is following you; the mechanic is
 * that you cannot lose it.
 * @param {SiteQuery} q
 */
export function fallbackSite(q) {
  const x = q.px + q.fx * S.fallbackDistance;
  const z = q.pz + q.fz * S.fallbackDistance;
  return { x, y: q.heightAt(x, z), z, score: -Infinity };
}

export const SITING_TUNING = S;
