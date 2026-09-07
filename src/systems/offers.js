import { resolveTier, resolveItem } from '../worldgen/chunk.js';
import { baseWeights, applyDiscernment } from './tiers.js';
import { applyWonderPity } from './epic.js';
import { isRefusal } from './discernment.js';
import T from '../../data/tuning.json' with { type: 'json' };

/**
 * The offer book. Turns "an object exists at (x,z)" into the game's economy:
 * what it turns out to be, whether the player saw it, and whether walking away
 * counted as declining it.
 *
 * Pure except for the clock value passed in. No three, no DOM, unit testable.
 */

const R = T.refusal;
const COS_CONE = Math.cos((R.seenConeDegrees * Math.PI) / 180 / 2);

export function makeOfferBook() {
  /** Resolved identity per object id. Once resolved, never re-rolled. */
  const resolved = new Map();
  /** Live tracking for objects currently in play. */
  const tracked = new Map();
  /** Ids already counted as refused, so one walk-past counts once. */
  const refusedIds = new Set();

  let scriptIndex = 0;

  /**
   * What is this object, given the player's current discernment?
   * Resolved lazily on first reveal and then frozen.
   *
   * @param {any} obj
   * @param {number} k
   * @param {number} wonderDry offers since the last Wonder
   */
  function reveal(obj, k, wonderDry) {
    const hit = resolved.get(obj.id);
    if (hit) return hit;

    // The scripted opening runs on ENCOUNTERS, not on pickups.
    //
    // Advancing it on pickup was wrong twice over. An object's identity is
    // frozen the first time the player comes near it, so with the counter tied
    // to pickups every object merely glanced at got stamped with an early
    // scripted tier, and the tier mix came out 31/29/29/11 against an intended
    // 45/33/17/5. And a player who declined a scripted item would have stalled
    // the sequence forever.
    //
    // Encounters also keep the HUD honest: what the prompt names is what the
    // player gets, because both read this same frozen resolution.
    const script = T.scriptedOpening.tiers;
    let tier;
    if (scriptIndex < script.length && script[scriptIndex] > 0) {
      tier = script[scriptIndex];
    } else {
      let w = applyDiscernment(baseWeights(obj.biome), k);
      w = applyWonderPity(w, wonderDry);
      tier = resolveTier(obj.tierRoll, w);
    }
    if (scriptIndex < script.length) scriptIndex++;

    const item = resolveItem(obj.itemRoll, tier, obj.biome, obj.nearWater)
      ?? resolveItem(obj.itemRoll, obj.tier, obj.biome, obj.nearWater);
    const out = { tier: item ? tier : obj.tier, itemId: item?.id ?? obj.itemId };
    resolved.set(obj.id, out);
    return out;
  }

  /** Kept as a no-op hook: the script advances on encounter, not on pickup. */
  function noteResolvedPickup() {}

  /**
   * Pin an object's identity without rolling for it.
   *
   * The Epic Find is delivered by its own scheduler and is not on any weight
   * table, so it must never pass through `reveal`'s script index or its
   * discernment roll. Forcing the resolution up front is what keeps the HUD
   * prompt, the pickup and the lettering all naming the same thing.
   *
   * @param {string} id @param {{tier: number, itemId: string}} what
   */
  function force(id, what) {
    resolved.set(id, { tier: what.tier, itemId: what.itemId });
  }

  /** Has the player encountered enough for the promised first Epic? */
  function openingComplete() {
    return scriptIndex >= T.scriptedOpening.epicAtIndex;
  }

  /**
   * Update per-object seen/abandon tracking for one frame.
   *
   * @param {Object} a
   * @param {any[]} a.nearby objects within a generous radius
   * @param {number} a.px @param {number} a.pz
   * @param {number} a.fx @param {number} a.fz unit facing
   * @param {number} a.dt seconds
   * @param {number} a.travelledLast5s
   * @param {boolean} a.uiBlocked
   * @param {(id: string) => boolean} a.isTaken
   * @returns {{id: string, tier: number}[]} objects refused THIS frame
   */
  function update({ nearby, px, pz, fx, fz, dt, travelledLast5s, uiBlocked, isTaken }) {
    const refusedNow = [];
    const seenThisFrame = new Set();

    for (const o of nearby) {
      if (isTaken(o.id) || refusedIds.has(o.id)) continue;
      const dx = o.x - px;
      const dz = o.z - pz;
      const dist = Math.hypot(dx, dz);

      let rec = tracked.get(o.id);
      if (!rec) {
        rec = { seenSeconds: 0, wasClose: false };
        tracked.set(o.id, rec);
      }
      seenThisFrame.add(o.id);

      // Clause 2: it counts as SEEN only inside the pickup radius, inside a
      // forward cone. Sprinting past with the camera at the sky sees nothing.
      if (dist <= R.abandonDistance) {
        const inCone = dist < 0.001 || (dx / dist) * fx + (dz / dist) * fz >= COS_CONE;
        if (inCone && dist <= R.seenRadius) rec.seenSeconds += dt;
        if (dist <= T.offer.pickupRadius) rec.wasClose = true;
      } else if (rec.wasClose || rec.seenSeconds > 0) {
        // Clause 3: abandoned. It was in play and the player has left it behind.
        const resolvedItem = resolved.get(o.id);
        const tier = resolvedItem?.tier ?? o.tier;
        if (isRefusal({
          tier,
          seenSeconds: rec.seenSeconds,
          distance: dist,
          travelledLast5s,
          uiBlocked,
        })) {
          refusedIds.add(o.id);
          refusedNow.push({ id: o.id, tier });
        }
        tracked.delete(o.id);
      }
    }

    // Objects that dropped out of the nearby set entirely stop being tracked,
    // so the map cannot grow without bound as the player walks.
    if (tracked.size > 400) {
      for (const id of tracked.keys()) {
        if (!seenThisFrame.has(id)) tracked.delete(id);
      }
    }

    return refusedNow;
  }

  return {
    reveal,
    update,
    force,
    noteResolvedPickup,
    openingComplete,
    isRefused: (id) => refusedIds.has(id),
    get scriptIndex() { return scriptIndex; },
    get resolvedCount() { return resolved.size; },
    get refusedCount() { return refusedIds.size; },

    /**
     * What has to survive a reload: which objects have already been resolved
     * to what, which have been declined, and how far through the scripted
     * opening the player is. Without the resolved map, an item the player saw
     * as a Wonder and walked back for is re-rolled as a pebble.
     */
    serialize() {
      return {
        v: 1,
        scriptIndex,
        resolved: Array.from(resolved.entries()),
        refused: Array.from(refusedIds),
      };
    },

    restore(s) {
      if (!s || s.v !== 1) return false;
      resolved.clear();
      refusedIds.clear();
      tracked.clear();
      for (const [id, r] of s.resolved) resolved.set(id, { tier: r.tier, itemId: r.itemId });
      for (const id of s.refused) refusedIds.add(id);
      scriptIndex = Number(s.scriptIndex) || 0;
      return true;
    },
    /** Testing hook. */
    _tracked: tracked,
  };
}
