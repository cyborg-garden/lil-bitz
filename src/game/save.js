/**
 * Save and load.
 *
 * One slot, in localStorage, written by the game and never by the player: the
 * game saves itself after every pickup and every gift, and again every thirty
 * seconds while walking. There is no save button because there is nothing to
 * decide — a beachcomber who has to remember to save is a beachcomber who
 * loses an afternoon's kete to a closed tab.
 *
 * What goes in is exactly the state that cannot be regenerated from the seed:
 * where you are, who you are, what you hold, what you gave, what she has told
 * you, and the hidden numbers. The world itself is never saved; it is a
 * function of the seed.
 *
 * The blob is plain JSON with a version. A save from an older version is
 * REFUSED rather than half-loaded, so a changed field can never resurrect an
 * item at tier undefined or drop the player in the sea.
 */

export const SAVE_KEY = 'lil-bitz:save';
/**
 * 2: the snapshot carries which world you are in, the return door, Karu and
 * which of her milestone lines have already been said. A v1 save has none of
 * those and would load into home with the doorway forgotten, so it is refused.
 */
export const SAVE_VERSION = 2;

/**
 * @param {Storage | null} storage
 */
export function makeSaveSlot(storage = safeStorage()) {
  return {
    /** Is there a save this build can load? */
    exists() {
      const raw = read(storage);
      return Boolean(raw && raw.v === SAVE_VERSION);
    },

    /** @returns {any | null} the blob, or null if absent or unloadable */
    load() {
      const raw = read(storage);
      if (!raw || raw.v !== SAVE_VERSION) return null;
      return raw;
    },

    /** @param {any} blob */
    save(blob) {
      if (!storage) return false;
      try {
        storage.setItem(SAVE_KEY, JSON.stringify({ ...blob, v: SAVE_VERSION }));
        return true;
      } catch {
        return false;
      }
    },

    clear() {
      try { storage?.removeItem(SAVE_KEY); } catch { /* fine */ }
    },
  };
}

function read(storage) {
  if (!storage) return null;
  try {
    const s = storage.getItem(SAVE_KEY);
    return s ? JSON.parse(s) : null;
  } catch {
    return null;
  }
}

/** localStorage throws in some sandboxes; treat that as "no saves here". */
function safeStorage() {
  try {
    const s = globalThis.localStorage;
    s.getItem(SAVE_KEY);
    return s;
  } catch {
    return null;
  }
}
