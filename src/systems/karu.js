import K from '../../data/karu.json' with { type: 'json' };

/**
 * Karu. Where the eye is, and what it is doing. No three, no DOM.
 *
 *   makeKaru(rng)                              -> the stateful eye
 *     .present                                 boolean, set by integration on the milestone
 *     .setPresent(bool, {x, z})                 appear here (never teleports afterwards)
 *     .update({dt, nowMs, player, target, heightAt, walkable?, dryAt?})
 *     .pos                                     {x, y, z} where to draw it
 *     .blinkFrame                              0 open, 1 half, 2 closed line
 *     .line(beat)                              narration for 'greet' | 'enterWorld' | 'elsewhere' | 'thisWay' | 'home'
 *     .serialize() / .restore(s)               {present, x, z}
 *
 *   karuGoal({px, pz, fx, fz, target, walkable?, dryAt?, wide?})
 *                                            -> {x, z} pure: the point 3-4m
 *                                              ahead, steered onto a walkable
 *                                              LINE, dry ground first
 *   blinkFrameAt(nowMs, blinkStartMs)          -> 0..2 pure: the stepped frame
 *
 * Integration calls `update` every frame once `present`, passing the return
 * door as `target` while in elsewhere (null at home), and draws `pos` with
 * `render/karu.js`. It plays `line(beat)` through `hud.say` with no speaker.
 *
 * Karu has no body and no face beyond the eye, and it never speaks: `line`
 * returns third-person narration of what it does. What Karu IS is Lyss's to say.
 *
 * Two rules the motion keeps, both from the design:
 *
 *  1. NEVER TELEPORTED OR PULLED. Karu has a goal point ahead of the player on
 *     the route and drifts toward it at a capped speed. It can fall behind and
 *     catch up. The player is never moved by it either: with Karu the return
 *     door is lit and pointed at, and the player still walks every metre.
 *  2. IT WAITS WHEN YOU STOP. Below `stillSpeed` the goal freezes, so a player
 *     standing still sees the eye settle and hang, not orbit.
 */

const M = K.motion;
const B = K.blink;

/**
 * The point Karu wants to be at: ahead of the player along the route. With a
 * target the route is toward the target; without one it is where the player
 * is facing. The distance is the midpoint of the ahead band; the band is what
 * the renderer bobs inside, not a random.
 *
 * The guide's whole job is the route, so the route has to be one the player
 * can walk. On the default seed the elsewhere entry stands beside a glowing
 * stream and the straight line to the return door crossed it at 1.6m deep:
 * Karu hung over the pond and the player, holding W toward it, went nowhere.
 *
 * Testing the goal POINT was not enough. The same stream is wadeable along
 * most of its length, so every goal down the channel passed the point test
 * and the eye led the player down the creek to a spot where the next goal
 * was walkable by a centimetre and the ground between was not. Forty-six
 * seconds of a player holding W at an eye parked on their head. So a bearing
 * is tried as a LINE — every `steerLineStepMetres` from the player to the
 * goal has to be standable — and among the bearings that pass, dry ground
 * (`dryAt`) beats wade-depth water whenever a dry bearing exists within
 * `preferDryWithinDeg` of the route. Bearings swing off in steps of
 * `steerStepDeg`, alternating sides, out to `steerMaxDeg`; `wide` (the stuck
 * escape, see `update`) opens that to `stuckSteerMaxDeg` and prefers dry
 * ground anywhere, because a dry route out of the channel exists on every
 * seed tested and the eye's job is to find it. Beyond all that the straight
 * goal stands — Karu would rather be wrong ahead than absent.
 *
 * @param {Object} a
 * @param {number} a.px @param {number} a.pz
 * @param {number} a.fx @param {number} a.fz unit facing
 * @param {{x: number, z: number} | null} [a.target]
 * @param {(x: number, z: number) => boolean} [a.walkable]
 * @param {(x: number, z: number) => boolean} [a.dryAt] no water at all here
 * @param {boolean} [a.wide] the stuck escape: full circle, dry first
 * @param {number} [a.prevOff] the signed bearing offset (radians) chosen last
 *        frame, kept while it still passes (see hysteresis below)
 * @returns {{x: number, z: number, off: number, dry: boolean}}
 */
export function karuGoal({ px, pz, fx, fz, target = null, walkable = null, dryAt = null, wide = false, prevOff = 0 }) {
  const ahead = (M.aheadMin + M.aheadMax) / 2;
  let dx = fx;
  let dz = fz;
  if (target) {
    const tx = target.x - px;
    const tz = target.z - pz;
    const d = Math.hypot(tx, tz);
    // Right on top of the door: stop leading, hang at the door itself.
    if (d < ahead) return { x: target.x, z: target.z, off: 0, dry: true };
    dx = tx / d;
    dz = tz / d;
  }
  const straight = { x: px + dx * ahead, z: pz + dz * ahead, off: 0, dry: true };
  if (!walkable) return straight;

  const base = Math.atan2(dx, dz);
  const step = M.steerStepDeg * (Math.PI / 180);
  const max = (wide ? M.stuckSteerMaxDeg : M.steerMaxDeg) * (Math.PI / 180);
  const dryWithin = (wide ? M.stuckSteerMaxDeg : M.preferDryWithinDeg) * (Math.PI / 180);

  /** A bearing as a candidate, or null if the player could not walk it. */
  const tryOff = (off) => {
    const a = base + off;
    const x = px + Math.sin(a) * ahead;
    const z = pz + Math.cos(a) * ahead;
    if (!lineWalkable(walkable, px, pz, x, z)) return null;
    return { x, z, off, dry: dryAt ? dryAt(x, z) : true };
  };

  let best = null;
  search: for (let off = 0; off <= max + 1e-9; off += step) {
    // Past the dry cone there is nothing better to find than the first
    // walkable bearing already in hand.
    if (best && off > dryWithin + 1e-9) break;
    for (const sign of off === 0 ? [1] : [1, -1]) {
      const c = tryOff(sign * off);
      if (!c) continue;
      if (c.dry && off <= dryWithin + 1e-9) { best = c; break search; }
      if (!best) best = c;
      if (!dryAt) break search;
    }
  }
  if (!best) return straight;
  if (best.off === 0) return best;

  // Hysteresis. Two bearings either side of a blocked route can both pass,
  // and which one wins flips with every centimetre the player moves; the
  // eye zigzagged between goals three metres apart, made no headway, and
  // ended up on the player's head. The bearing chosen last frame is kept
  // while it still passes and is as good (dry against dry) as the fresh
  // pick; the straight route wins the moment it clears.
  if (prevOff !== 0 && Math.abs(prevOff) <= max + 1e-9) {
    const prev = tryOff(prevOff);
    if (prev && (prev.dry || !best.dry)) return prev;
  }
  return best;
}

/**
 * Can the player walk from (px, pz) to (x, z)? Sampled every
 * `steerLineStepMetres`, the endpoint included; the start is the player's
 * own square and is not asked.
 * @param {(x: number, z: number) => boolean} walkable
 */
export function lineWalkable(walkable, px, pz, x, z) {
  const len = Math.hypot(x - px, z - pz);
  const n = Math.max(1, Math.ceil(len / M.steerLineStepMetres));
  for (let i = 1; i <= n; i++) {
    const t = i / n;
    if (!walkable(px + (x - px) * t, pz + (z - pz) * t)) return false;
  }
  return true;
}

/**
 * The blink, stepped. Three frames at `fps`: open -> half -> closed -> half ->
 * open. Returns 0 outside a blink so the renderer's default frame is the open
 * ring.
 * @param {number} nowMs
 * @param {number} blinkStartMs when the current blink began, or -1
 */
export function blinkFrameAt(nowMs, blinkStartMs) {
  if (blinkStartMs < 0 || nowMs < blinkStartMs) return 0;
  const step = Math.floor(((nowMs - blinkStartMs) / 1000) * B.fps);
  return step < BLINK_SEQ.length ? BLINK_SEQ[step] : 0;
}

/**
 * The stepped frames of one blink, from `blink.frames` in data: up through the
 * frames and back down, so 3 frames is 0 1 2 1 (then open). The renderer draws
 * exactly this many frames, so the count in data is the count on screen.
 */
export const BLINK_SEQ = (() => {
  const n = Math.max(2, B.frames);
  const up = Array.from({ length: n }, (_, i) => i);
  const down = up.slice(1, -1).reverse();
  return up.concat(down);
})();

/** Length of one blink in ms, for scheduling the next one. */
export function blinkLengthMs() {
  return (BLINK_SEQ.length / B.fps) * 1000;
}

/**
 * @param {() => number} rng for the blink interval only
 */
export function makeKaru(rng = Math.random) {
  const s = {
    present: false,
    x: 0,
    y: 0,
    z: 0,
    /** where the eye is drifting toward */
    goal: { x: 0, z: 0 },
    /** the steer offset that goal was chosen with, for hysteresis */
    goalOff: 0,
    /** last player position, for the still check */
    last: /** @type {{x: number, z: number} | null} */ (null),
    blinkStartMs: -1,
    nextBlinkMs: -1,
    /** phase for the bob, so pausing the clock pauses the bob */
    bobT: 0,
    /** progress toward the target, for the stuck escape */
    targetKey: '',
    bestTargetD: Infinity,
    noProgressSec: 0,
    /** the stuck escape is on: full-circle steer, dry ground first */
    escaping: false,
  };

  const rollNextBlink = (nowMs) => nowMs + (B.minSec + rng() * (B.maxSec - B.minSec)) * 1000;

  /**
   * Put Karu in the world, here. The only time its position is set directly:
   * the milestone brings it, and after that it only ever drifts.
   * @param {boolean} present
   * @param {{x: number, z: number}} [at]
   */
  function setPresent(present, at) {
    s.present = present;
    if (present && at) {
      s.x = at.x;
      s.z = at.z;
      s.goal = { x: at.x, z: at.z };
      s.goalOff = 0;
      s.last = null;
      s.targetKey = '';
      s.bestTargetD = Infinity;
      s.noProgressSec = 0;
      s.escaping = false;
      s.blinkStartMs = -1;
      s.nextBlinkMs = -1;
    }
  }

  /**
   * @param {Object} a
   * @param {number} a.dt seconds
   * @param {number} a.nowMs
   * @param {{x: number, z: number, yaw: number}} a.player yaw as main.js keeps
   *        it: facing = (sin yaw, cos yaw)
   * @param {{x: number, z: number} | null} [a.target] the return door, when lit
   * @param {(x: number, z: number) => number} a.heightAt
   * @param {(x: number, z: number) => boolean} [a.walkable] can the player stand here
   * @param {(x: number, z: number) => boolean} [a.dryAt] no water here at all
   */
  function update({ dt, nowMs, player, target = null, heightAt, walkable = null, dryAt = null }) {
    if (!s.present) return;

    // Waits when you stop. The goal only moves while the player does, so a
    // still player gets a still eye and never one circling for a better spot.
    const moved = s.last ? Math.hypot(player.x - s.last.x, player.z - s.last.z) : 0;
    const speed = dt > 0 ? moved / dt : 0;

    // The stuck escape. A player who has made no headway toward the door for
    // `stuckSec` — closer to it by less than `stuckProgressMetres` than they
    // have ever been — is not waiting: they are in a channel the eye led them
    // down, holding a key at it, or walking its length back and forth behind
    // an eye that keeps finding another wadeable bearing. Stillness alone
    // missed the second case. The steer opens to the full circle and takes
    // dry ground wherever it is, and stays open until the player is standing
    // on dry ground, so the eye leads OUT of the water before it leads on.
    // Without the hold-until-dry it flipped every few seconds between the
    // bank and the channel and the player got nowhere either way.
    if (target) {
      const key = `${target.x}:${target.z}`;
      if (key !== s.targetKey) { s.targetKey = key; s.bestTargetD = Infinity; s.noProgressSec = 0; }
      const d = Math.hypot(target.x - player.x, target.z - player.z);
      if (d < s.bestTargetD - M.stuckProgressMetres || s.bestTargetD === Infinity) {
        s.bestTargetD = d;
        s.noProgressSec = 0;
      } else {
        s.noProgressSec += dt;
      }
      if (s.noProgressSec >= M.stuckSec) s.escaping = true;
    }
    if (!target || (dryAt && dryAt(player.x, player.z))) {
      s.escaping = false;
      s.noProgressSec = 0;
    }

    if (!s.last || speed >= M.stillSpeed || target) {
      const g = karuGoal({
        px: player.x, pz: player.z,
        fx: Math.sin(player.yaw), fz: Math.cos(player.yaw),
        target,
        walkable,
        dryAt,
        wide: s.escaping,
        prevOff: s.goalOff,
      });
      s.goal = { x: g.x, z: g.z };
      s.goalOff = g.off;
    }
    s.last = { x: player.x, z: player.z };

    // Drift, capped. Farther than catchUpDistance it hurries; it still never
    // jumps, so a sprinting player can look back and see it coming.
    const gx = s.goal.x - s.x;
    const gz = s.goal.z - s.z;
    const gd = Math.hypot(gx, gz);
    const far = Math.hypot(player.x - s.x, player.z - s.z) > M.catchUpDistance;
    const maxStep = (far ? M.catchUpSpeed : M.driftSpeed) * dt;
    if (gd > 1e-4) {
      const step = Math.min(gd, maxStep);
      s.x += (gx / gd) * step;
      s.z += (gz / gd) * step;
    }

    // Hover: the ground under it plus the hover, bobbing, never below the
    // clearance so a slope cannot bury the glyph.
    s.bobT += dt;
    const bob = Math.sin(s.bobT * Math.PI * 2 * M.bobHz) * M.bobMetres;
    const ground = heightAt(s.x, s.z);
    s.y = Math.max(ground + M.groundClearance, ground + M.hoverMetres + bob);

    // Blink schedule. The first beat says it does not blink, so the first one
    // is held back; after that it is a roll, never a metronome.
    if (s.nextBlinkMs < 0) s.nextBlinkMs = nowMs + B.firstBlinkDelaySec * 1000;
    if (s.blinkStartMs >= 0 && nowMs - s.blinkStartMs >= blinkLengthMs()) {
      s.blinkStartMs = -1;
      s.nextBlinkMs = rollNextBlink(nowMs);
    }
    if (s.blinkStartMs < 0 && nowMs >= s.nextBlinkMs) s.blinkStartMs = nowMs;
    s.lastNowMs = nowMs;
  }

  return {
    setPresent,
    update,
    get present() { return s.present; },
    get pos() { return { x: s.x, y: s.y, z: s.z }; },
    get goal() { return { ...s.goal }; },
    get escaping() { return s.escaping; },
    get blinkFrame() { return blinkFrameAt(s.lastNowMs ?? 0, s.blinkStartMs); },

    /**
     * Narration for a beat. Never speech.
     * @param {'greet' | 'enterWorld' | 'elsewhere' | 'thisWay' | 'home'} beat
     */
    line(beat) { return K.lines[beat] ?? ''; },

    serialize() {
      return { present: s.present, x: s.x, z: s.z };
    },
    /** @param {{present: boolean, x: number, z: number} | undefined} v */
    restore(v) {
      if (!v) { setPresent(false); return; }
      setPresent(Boolean(v.present), { x: v.x ?? 0, z: v.z ?? 0 });
    },
  };
}

export const KARU_DATA = K;
