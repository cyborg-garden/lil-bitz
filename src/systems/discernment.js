import T from '../../data/tuning.json' with { type: 'json' };

/**
 * Discernment: the hidden number that shifts the world's spawn table upward.
 *
 * Two channels feed it, and they are the same rule at two scales:
 *
 *   Refuse the junk.        (slow, invisible, never explained)
 *   Give away the treasure. (fast, legible, the trinket maker reacts)
 *
 * Neither is a separate system. The "secret cheat" is the undiscovered half of
 * the giving loop, so a player who never meets the trinket maker still feels
 * the beach get better because they declined pebbles.
 *
 * Never rendered as a meter. Never confirmed. The cues in tuning.json are the
 * only way a player learns it exists.
 */

const D = T.discernment;

export function makeDiscernment() {
  const state = {
    taste: 0,
    /** timestamps (ms) of recent pickups, for the activity gate */
    pickups: /** @type {number[]} */ ([]),
    /** consecutive tier-1 grabs; three in a row means you have gone feral */
    t1Streak: 0,
  };

  return {
    get taste() { return state.taste; },
    get raw() { return { ...state, pickups: state.pickups.slice() }; },

    /** Time decay. Discernment is a discipline, not a state you park in. */
    tick(dtSec) {
      if (dtSec <= 0) return;
      state.taste *= Math.pow(0.5, dtSec / D.halfLifeSec);
    },

    /** @param {1|2|3|4|5} tier */
    onGrab(tier, nowMs) {
      state.pickups.push(nowMs);
      const loss = D.grabLoss[String(tier)] ?? 0;
      state.taste = clamp(state.taste + loss, 0, D.tasteMax);

      if (tier === 1) {
        state.t1Streak++;
        if (state.t1Streak >= D.feralGrabs) {
          state.taste *= D.feralMult;
          state.t1Streak = 0;
        }
      } else {
        state.t1Streak = 0;
      }
    },

    /** @param {1|2} tier only low tiers can be refused */
    onRefusal(tier) {
      const gain = D.refusalGain[String(tier)] ?? 0;
      state.taste = clamp(state.taste + gain, 0, D.tasteMax);
    },

    /**
     * Handing a find to the trinket maker. The fast channel.
     * Junk contributes nothing: generosity has to cost something.
     * @param {1|2|3|4|5} tier
     */
    onGive(tier) {
      const gain = D.givingGain[String(tier)] ?? 0;
      state.taste = clamp(state.taste + gain, 0, D.tasteMax);
    },

    /** An Epic delivery spends the charge, so the rhythm is climb, payoff, drop. */
    onEpicDelivered() {
      state.taste *= D.epicSpendMult;
    },

    /**
     * The payoff number, 0..1.
     *
     * Gate A, the activity requirement, is why "pick up nothing and farm the
     * cheat" does not work: with no pickups activity is 0, so k is 0 forever.
     * Note that the giving channel makes this doubly unreachable, since nothing
     * can be given that was not first collected.
     */
    k(nowMs) {
      const windowMs = D.activityWindowSec * 1000;
      while (state.pickups.length && nowMs - state.pickups[0] > windowMs) {
        state.pickups.shift();
      }
      const activity = clamp(state.pickups.length / D.activityTarget, 0, 1);
      const dNorm = clamp(state.taste / D.tasteMax, 0, 1);
      return Math.pow(dNorm * activity, D.exponent);
    },

    serialize() {
      return { v: 1, taste: state.taste, t1Streak: state.t1Streak };
    },

    /**
     * Restore. Pickup timestamps are deliberately NOT carried across: they are
     * the activity gate, and a loaded game should start with the gate shut and
     * earn it back, exactly like a player who put the game down for a while.
     */
    restore(s) {
      if (!s || s.v !== 1) return false;
      state.taste = clamp(Number(s.taste) || 0, 0, D.tasteMax);
      state.t1Streak = Number(s.t1Streak) || 0;
      state.pickups.length = 0;
      return true;
    },
  };
}

/** @param {number} v @param {number} lo @param {number} hi */
function clamp(v, lo, hi) {
  return v < lo ? lo : v > hi ? hi : v;
}

/**
 * Was this offer genuinely refused?
 *
 * All five clauses must hold. Clause 2 kills sprinting past with the camera at
 * the sky; clause 4 kills standing still while things despawn. Ignoring has to
 * mean seeing and declining, or the signal means nothing.
 *
 * @param {Object} o
 * @param {number} o.tier
 * @param {number} o.seenSeconds cumulative time in cone, unoccluded, in range
 * @param {number} o.distance current distance from the player
 * @param {number} o.travelledLast5s
 * @param {boolean} o.uiBlocked
 */
export function isRefusal(o) {
  const R = T.refusal;
  if (o.tier > R.maxTier) return false;
  if (o.seenSeconds < R.seenSeconds) return false;
  if (o.distance < R.abandonDistance) return false;
  if (o.travelledLast5s < R.afkMinTravel) return false;
  if (o.uiBlocked) return false;
  return true;
}

export const DISCERNMENT_TUNING = D;
