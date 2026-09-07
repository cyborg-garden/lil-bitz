import '../ui/touch.css';

/**
 * Touch controls: a floating left-thumb stick and one action button.
 *
 * The button speaks the same one-button grammar as the xbox50 pad map:
 * a tap picks up, a press held past HOLD_MS gives (both decided on release).
 * One verb surface everywhere — thumb, stick, or E/G — so the game's help
 * only ever has to teach it once.
 *
 * The stick writes into `input.touch` (merged with the keyboard in
 * `input.axes`), and holding the button reads as the collect key being down,
 * so held acts — the pickup arc, the doorway's dwell-era plumbing — need no
 * separate touch path. Menu flicks: a fresh vertical deflection queues one
 * nav step, then waits for the stick to come home; drained-every-frame
 * semantics upstream mean stray steps while walking cost nothing.
 *
 * Camera look stays what it already was: a drag anywhere that is not these
 * two controls. Both controls stop propagation so the window-level yaw drag
 * never sees them.
 *
 * The overlay only appears for touch: immediately under a coarse pointer,
 * or on the first real touch on hybrids. A mouse never sees it.
 */
const HOLD_MS = 450; // one grammar: matches the cartridge pad map
const STICK_R = 56; // px of thumb travel that counts as full deflection
const DEAD = 0.22;
const NAV_ON = 0.65; // fresh |z| deflection that flicks a menu step
const NAV_OFF = 0.3; // stick must come home this far before the next flick

export function makeTouchControls(input, root = document.body) {
  const ui = document.createElement('div');
  ui.id = 'touch-ui';
  ui.hidden = true;
  ui.innerHTML = `
    <div id="touch-stick-zone">
      <div id="touch-stick" hidden><div id="touch-nub"></div></div>
    </div>
    <button id="touch-act" type="button" aria-label="pick up (hold to give)">
      <span class="act-tap">◉</span><span class="act-hold">give</span>
    </button>
  `;
  root.appendChild(ui);

  const zone = ui.querySelector('#touch-stick-zone');
  const stick = ui.querySelector('#touch-stick');
  const nub = ui.querySelector('#touch-nub');
  const act = ui.querySelector('#touch-act');

  let shown = false;
  function show() {
    if (shown) return;
    shown = true;
    ui.hidden = false;
    document.body.classList.add('touch-ui-on');
    // A hybrid that reveals itself mid-session (first touch on a laptop
    // screen): anyone showing keyboard words can swap to thumb words.
    window.dispatchEvent(new Event('lb-touch-on'));
  }
  if (window.matchMedia?.('(pointer: coarse)').matches) show();
  else window.addEventListener('touchstart', show, { once: true, passive: true });

  // ---- the stick (floating origin: it appears where the thumb lands) ----
  let stickId = null;
  let ox = 0;
  let oy = 0;
  let navArmed = true;

  function setVector(e) {
    let x = (e.clientX - ox) / STICK_R;
    let z = (e.clientY - oy) / STICK_R;
    const len = Math.hypot(x, z);
    if (len > 1) { x /= len; z /= len; }
    input.touch.x = Math.abs(x) < DEAD ? 0 : x;
    input.touch.z = Math.abs(z) < DEAD ? 0 : z;
    nub.style.transform = `translate(${x * STICK_R * 0.6}px, ${z * STICK_R * 0.6}px)`;
    // Menu flick: one step per fresh deflection, re-armed near centre.
    if (navArmed && Math.abs(z) > NAV_ON) {
      navArmed = false;
      input.queueNav(z > 0 ? 1 : -1);
    } else if (!navArmed && Math.abs(z) < NAV_OFF) {
      navArmed = true;
    }
  }

  function stickEnd() {
    stickId = null;
    input.touch.x = 0;
    input.touch.z = 0;
    navArmed = true;
    stick.hidden = true;
  }

  zone.addEventListener('pointerdown', (e) => {
    e.stopPropagation();
    if (stickId !== null) return;
    stickId = e.pointerId;
    ox = e.clientX;
    oy = e.clientY;
    try { zone.setPointerCapture(e.pointerId); } catch { /* capture is a nicety */ }
    stick.hidden = false;
    stick.style.left = `${ox}px`;
    stick.style.top = `${oy}px`;
    setVector(e);
  });
  zone.addEventListener('pointermove', (e) => {
    if (e.pointerId !== stickId) return;
    e.stopPropagation();
    setVector(e);
  });
  for (const ev of ['pointerup', 'pointercancel']) {
    zone.addEventListener(ev, (e) => {
      if (e.pointerId !== stickId) return;
      e.stopPropagation();
      stickEnd();
    });
  }

  // ---- the act button: tap = pick up, hold = give (decided on release) ----
  let actId = null;
  let downAt = 0;
  let holdTimer = 0;

  function actEnd(e, fire) {
    if (e.pointerId !== actId) return;
    e.stopPropagation();
    actId = null;
    clearTimeout(holdTimer);
    act.classList.remove('holding', 'give-armed');
    input.touch.held = false;
    if (!fire) return;
    if (performance.now() - downAt >= HOLD_MS) input.queueGive();
    else input.queueCollect();
  }

  act.addEventListener('pointerdown', (e) => {
    e.stopPropagation();
    if (actId !== null) return;
    actId = e.pointerId;
    downAt = performance.now();
    input.touch.held = true;
    act.classList.add('holding');
    try { act.setPointerCapture(e.pointerId); } catch { /* capture is a nicety */ }
    holdTimer = setTimeout(() => act.classList.add('give-armed'), HOLD_MS);
  });
  act.addEventListener('pointerup', (e) => actEnd(e, true));
  act.addEventListener('pointercancel', (e) => actEnd(e, false));
  // The browser must not claim these gestures for scrolling or zoom.
  for (const el of [zone, act]) {
    el.addEventListener('touchstart', (e) => e.preventDefault(), { passive: false });
  }

  return {
    get active() {
      return shown;
    },
  };
}
