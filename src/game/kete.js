/**
 * The kete. Pure state plus a subscribe hook; no DOM, no three, so it unit
 * tests headless.
 *
 * Two sets, not one, and the distinction is load-bearing now that giving exists.
 *
 *   taken   every world id ever picked up. Permanent. This is what stops a
 *           collected item respawning when its chunk unloads and regenerates.
 *   held    what is actually IN the bag right now. Giving removes from this
 *           and never from `taken`, so a gift cannot come back out of the sand.
 *
 * Giving is a real sacrifice (tuning.giving.sacrificeIsReal): the object leaves
 * the bag. The `ledger` keeps the record — she writes it down — so completionism
 * survives while the thing itself does not. That is the whole point of the
 * decision: handing over a good find has to cost something.
 */
export function makeKete() {
  /** @type {Set<string>} every id ever collected, for world dedupe */
  const taken = new Set();
  /** @type {Map<string, {id: string, itemId: string, tier: number, at: number}>} */
  const held = new Map();
  /** @type {Record<number, number>} tiers currently in the bag */
  const byTier = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
  /** @type {Record<number, number>} tiers ever collected, never decremented */
  const lifetimeByTier = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
  /** @type {{itemId: string, tier: number, at: number}[]} */
  const log = [];
  /** @type {{itemId: string, tier: number, to: string, at: number}[]} */
  const ledger = [];
  /** @type {((e: any) => void)[]} */
  const listeners = [];

  const emit = (e) => { for (const fn of listeners) fn(e); };

  return {
    has: (id) => taken.has(id),
    /** What is in the bag. The HUD counter reads this, so a gift makes it drop. */
    get total() { return held.size; },
    /** Everything ever picked up. Never goes down. */
    get collectedTotal() { return taken.size; },
    get byTier() { return { ...byTier }; },
    get lifetimeByTier() { return { ...lifetimeByTier }; },
    get log() { return log.slice(); },
    get ledger() { return ledger.slice(); },

    /**
     * Held items, best first. The give panel shows exactly this order, so the
     * item the player is most likely to agonise over is the one under the
     * cursor when the panel opens.
     */
    get items() {
      return Array.from(held.values()).sort((a, b) => b.tier - a.tier || b.at - a.at);
    },

    /**
     * @param {{id: string, itemId: string, tier: number}} obj
     * @param {number} nowMs
     * @returns {boolean} false if it was already collected
     */
    collect(obj, nowMs) {
      if (taken.has(obj.id)) return false;
      taken.add(obj.id);
      held.set(obj.id, { id: obj.id, itemId: obj.itemId, tier: obj.tier, at: nowMs });
      byTier[obj.tier] = (byTier[obj.tier] ?? 0) + 1;
      lifetimeByTier[obj.tier] = (lifetimeByTier[obj.tier] ?? 0) + 1;
      log.push({ itemId: obj.itemId, tier: obj.tier, at: nowMs });
      emit({ type: 'collect', obj, nowMs });
      return true;
    },

    /**
     * Hand something over. Removes it from the bag and writes it into the
     * ledger, which is the record she keeps.
     *
     * @param {string} id world id of a held item
     * @param {string} to recipient id
     * @param {number} nowMs
     * @param {boolean} sacrifice false keeps the object in the bag, for trying
     *                            the other half of the open decision
     * @returns {{itemId: string, tier: number} | null} null if not held
     */
    give(id, to, nowMs, sacrifice = true) {
      const it = held.get(id);
      if (!it) return null;
      if (sacrifice) {
        held.delete(id);
        byTier[it.tier] = Math.max(0, (byTier[it.tier] ?? 0) - 1);
      }
      ledger.push({ itemId: it.itemId, tier: it.tier, to, at: nowMs });
      emit({ type: 'give', obj: it, to, nowMs });
      return { itemId: it.itemId, tier: it.tier };
    },

    on(fn) { listeners.push(fn); },

    serialize() {
      return {
        v: 2,
        taken: Array.from(taken),
        held: Array.from(held.values()),
        ledger: ledger.slice(),
        lifetimeByTier: { ...lifetimeByTier },
      };
    },

    /**
     * Rebuild from a serialized blob. Silent, no listeners: a restore is not a
     * hundred pickups happening at once, so the help text must not hide and
     * the arc must not fire.
     * @param {ReturnType<typeof this.serialize>} s
     */
    restore(s) {
      if (!s || s.v !== 2) return false;
      taken.clear();
      held.clear();
      log.length = 0;
      ledger.length = 0;
      for (const k of Object.keys(byTier)) { byTier[k] = 0; lifetimeByTier[k] = 0; }
      for (const id of s.taken) taken.add(id);
      for (const it of s.held) {
        held.set(it.id, { ...it });
        byTier[it.tier] = (byTier[it.tier] ?? 0) + 1;
      }
      for (const e of s.ledger) ledger.push({ ...e });
      for (const [k, n] of Object.entries(s.lifetimeByTier ?? {})) lifetimeByTier[k] = n;
      return true;
    },
  };
}
