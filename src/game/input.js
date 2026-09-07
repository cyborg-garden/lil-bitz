/**
 * Input as sampled state, never as events driving simulation.
 *
 * Keys go into a Set on keydown/keyup and are READ by the simulation step. That
 * indirection is what makes a held key work while the clock is paused, which
 * the day-one gate verifies. Driving movement from the event handler, or from
 * requestAnimationFrame, breaks the moment anything pauses.
 *
 * `takeCollect()` is edge-triggered and drains, because collecting is a
 * deliberate act: holding the key must not hoover up a whole beach. Refusal has
 * to be possible for the discernment system to have an input at all.
 */
export function makeInput(target = window) {
  const held = new Set();
  let collectQueued = false;
  let giveQueued = false;
  let cancelQueued = false;
  let navQueued = 0;

  const COLLECT_KEYS = new Set(['KeyE', 'Space', 'Enter']);

  target.addEventListener('keydown', (e) => {
    if (e.repeat) return;
    held.add(e.code);
    if (COLLECT_KEYS.has(e.code)) {
      collectQueued = true;
      e.preventDefault();
    }
    if (e.code === 'KeyG') { giveQueued = true; e.preventDefault(); }
    if (e.code === 'Escape') cancelQueued = true;
    // Menu navigation is edge-triggered even though the same keys are held for
    // movement: a menu that scrolls at the key-repeat rate is unusable, and a
    // menu that scrolls at 60fps is worse.
    if (e.code === 'ArrowUp' || e.code === 'KeyW') navQueued -= 1;
    if (e.code === 'ArrowDown' || e.code === 'KeyS') navQueued += 1;
  });
  target.addEventListener('keyup', (e) => held.delete(e.code));
  target.addEventListener('blur', () => held.clear());

  // Pointer drag rotates the camera yaw.
  let yawDelta = 0;
  let dragging = false;
  let lastX = 0;

  const canvasDown = (e) => { dragging = true; lastX = e.clientX; };
  const canvasMove = (e) => {
    if (!dragging) return;
    yawDelta += (e.clientX - lastX) * 0.005;
    lastX = e.clientX;
  };
  const canvasUp = () => { dragging = false; };

  target.addEventListener('pointerdown', canvasDown);
  target.addEventListener('pointermove', canvasMove);
  target.addEventListener('pointerup', canvasUp);
  target.addEventListener('pointercancel', canvasUp);

  return {
    /** @param {string} code */
    isDown: (code) => held.has(code),
    get axes() {
      let x = 0;
      let z = 0;
      if (held.has('KeyW') || held.has('ArrowUp')) z -= 1;
      if (held.has('KeyS') || held.has('ArrowDown')) z += 1;
      if (held.has('KeyA') || held.has('ArrowLeft')) x -= 1;
      if (held.has('KeyD') || held.has('ArrowRight')) x += 1;
      return { x, z };
    },
    get turn() {
      let t = 0;
      if (held.has('KeyQ')) t -= 1;
      if (held.has('KeyE') && held.has('ShiftLeft')) t += 1;
      return t;
    },
    /** Consume a queued collect press. Edge-triggered: returns true once. */
    takeCollect() {
      if (!collectQueued) return false;
      collectQueued = false;
      return true;
    },
    /** Consume accumulated yaw drag, in radians. */
    takeYaw() {
      const d = yawDelta;
      yawDelta = 0;
      return d;
    },
    /** Consume a queued give press. Edge-triggered, like collect. */
    takeGive() {
      if (!giveQueued) return false;
      giveQueued = false;
      return true;
    },

    takeCancel() {
      if (!cancelQueued) return false;
      cancelQueued = false;
      return true;
    },

    /** Consume accumulated menu steps. Always drained, discarded when closed. */
    takeNav() {
      const n = navQueued;
      navQueued = 0;
      return n;
    },

    /** Testing/debug hooks so the harness can press keys without a keyboard. */
    queueCollect() { collectQueued = true; },
    queueGive() { giveQueued = true; },
    queueNav(n) { navQueued += n; },
    get held() { return Array.from(held); },
  };
}
