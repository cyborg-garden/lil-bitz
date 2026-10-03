/**
 * Which hands are on the game, and the words for them.
 *
 * Every control hint the player reads comes from here: the help line, the key
 * chips on the pickup and give prompts, and the give card's foot. They used to
 * be written where they were shown, so the xbox50 told a pad player to press
 * Esc, and a phone showed key chips saying E and G.
 *
 *   desktop  keys and a mouse
 *   mobile   a thumb on the stick and the ◉ button
 *   console  the xbox50 pad: stick, one button, a tap or a hold
 *
 * The console is known by its path: the shell serves every cart under /cart/.
 * A real keyboard plugged into the console switches it to the desktop words,
 * and the pad switches it back. The shell's pad keys are synthetic events
 * (`isTrusted` false) and a USB keyboard's are not, so the two can be told
 * apart without asking.
 */

/** @typedef {'desktop' | 'mobile' | 'console'} Surface */

const key = (k) => `<span class="key">${k}</span>`;

export const HINTS = {
  desktop: {
    help: 'WASD to walk · drag to look · E to pick up · G to give',
    pickKey: 'E',
    giveKey: 'G',
    panelFoot: `${key('↑↓')} choose ${key('E')} give ${key('Esc')} done`,
  },
  mobile: {
    help: 'left thumb to walk · drag to look · tap ◉ to pick up · hold ◉ to give',
    pickKey: '◉',
    giveKey: 'hold ◉',
    panelFoot: `tap an item to give it · ${key('✕')} done`,
  },
  // Matches the cart's pad map: stick → arrows, a click → E, a hold past
  // 450ms → G. G closes the card, so the hold is the way out of it.
  console: {
    help: 'stick to walk · click to pick up · hold click to give',
    pickKey: 'click',
    giveKey: 'hold',
    panelFoot: `${key('stick')} choose ${key('click')} give ${key('hold')} done`,
  },
};

/**
 * @param {{pathname?: string, coarse?: boolean}} where
 * @returns {Surface}
 */
export function pickSurface({ pathname = '', coarse = false } = {}) {
  if (pathname.startsWith('/cart/')) return 'console';
  if (coarse) return 'mobile';
  return 'desktop';
}

/**
 * Track the surface for the session and tell `onChange` whenever it moves,
 * starting with the first. Also puts `surface-<name>` on the body for CSS.
 * @param {{coarse: boolean, onChange: (s: Surface, hints: typeof HINTS.desktop) => void}} opts
 */
export function makeSurface({ coarse, onChange }) {
  const onConsole = location.pathname.startsWith('/cart/');
  /** @type {Surface} */
  let current = pickSurface({ pathname: location.pathname, coarse });

  function set(s) {
    if (s === current && document.body.classList.contains(`surface-${s}`)) return;
    document.body.classList.remove(`surface-${current}`);
    current = s;
    document.body.classList.add(`surface-${s}`);
    onChange(s, HINTS[s]);
  }

  // A hybrid laptop's first touch: thumb words from then on. Not on the
  // console, which has no touch screen and keeps its pad words.
  window.addEventListener('lb-touch-on', () => { if (!onConsole) set('mobile'); });
  if (onConsole) {
    window.addEventListener('keydown', (e) => set(e.isTrusted ? 'desktop' : 'console'), true);
  }

  set(current);
  return {
    get current() { return current; },
    get hints() { return HINTS[current]; },
  };
}
