import { describe, it, expect } from 'vitest';
import { makeSaveSlot, SAVE_KEY, SAVE_VERSION } from './save.js';
import { makeKete } from './kete.js';
import { makeDiscernment } from '../systems/discernment.js';
import { makeOfferBook } from '../systems/offers.js';

/** A localStorage stand-in. */
function memStorage() {
  const m = new Map();
  return {
    getItem: (k) => (m.has(k) ? m.get(k) : null),
    setItem: (k, v) => m.set(k, String(v)),
    removeItem: (k) => m.delete(k),
  };
}

describe('LOAD-BEARING 13: a closed tab does not cost an afternoon', () => {
  it('round-trips a blob', () => {
    const slot = makeSaveSlot(memStorage());
    expect(slot.exists()).toBe(false);
    slot.save({ hello: 'kete' });
    expect(slot.exists()).toBe(true);
    expect(slot.load().hello).toBe('kete');
  });

  it('refuses a save from another version rather than half-loading it', () => {
    const st = memStorage();
    st.setItem(SAVE_KEY, JSON.stringify({ v: SAVE_VERSION + 1, hello: 'future' }));
    const slot = makeSaveSlot(st);
    expect(slot.exists()).toBe(false);
    expect(slot.load()).toBeNull();
  });

  it('treats corrupt or missing storage as no save', () => {
    const st = memStorage();
    st.setItem(SAVE_KEY, '{not json');
    expect(makeSaveSlot(st).load()).toBeNull();
    expect(makeSaveSlot(null).exists()).toBe(false);
    expect(makeSaveSlot(null).save({})).toBe(false);
  });
});

describe('restoring state', () => {
  it('brings the kete back with the bag, the record and the dedupe set intact', () => {
    const a = makeKete();
    a.collect({ id: 'w1', itemId: 'pounamu', tier: 4 }, 0);
    a.collect({ id: 'w2', itemId: 'twig', tier: 1 }, 1);
    a.give('w1', 'trinket_maker', 2);

    const b = makeKete();
    let events = 0;
    b.on(() => events++);
    expect(b.restore(a.serialize())).toBe(true);

    expect(b.total).toBe(1);
    expect(b.collectedTotal).toBe(2);
    expect(b.has('w1')).toBe(true); // given away, still never respawns
    expect(b.ledger).toHaveLength(1);
    expect(b.lifetimeByTier[4]).toBe(1);
    expect(b.byTier[4]).toBe(0);
    // A restore is not a hundred pickups: no listener fires.
    expect(events).toBe(0);
  });

  it('keeps taste but shuts the activity gate again', () => {
    const a = makeDiscernment();
    for (let i = 0; i < 10; i++) { a.onRefusal(2); a.onGrab(3, i * 1000); }
    expect(a.k(10_000)).toBeGreaterThan(0);

    const b = makeDiscernment();
    b.restore(a.serialize());
    expect(b.taste).toBeCloseTo(a.taste, 6);
    // Gate A is shut on load: earn it back, like a player who put it down.
    expect(b.k(10_000)).toBe(0);
  });

  it('keeps resolved identities, so a Wonder you walked back for is still a Wonder', () => {
    const a = makeOfferBook();
    const obj = { id: 'o1', biome: 'beach', tier: 1, tierRoll: 0.99, itemRoll: 0.5 };
    // Burn the scripted opening so the roll is real.
    for (let i = 0; i < 12; i++) a.reveal({ ...obj, id: `s${i}` }, 0, 0);
    const first = a.reveal(obj, 1, 0);

    const b = makeOfferBook();
    b.restore(a.serialize());
    expect(b.reveal(obj, 0, 0)).toEqual(first);
    expect(b.scriptIndex).toBe(a.scriptIndex);
    expect(b.openingComplete()).toBe(true);
  });
});
