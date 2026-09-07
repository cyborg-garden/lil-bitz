import './worldFade.css';

/**
 * The full-screen fade for crossing worlds.
 *
 * PUBLIC INTERFACE
 *
 *   makeWorldFade(root) → {
 *     set(opacity, colour)   paint this frame. opacity 0..1; colour a hex
 *                            string (systems/worlds.js `machine.fadeColour`).
 *                            0 hides the element outright, so a finished fade
 *                            costs nothing and blocks nothing.
 *     el                     the div, for the harness
 *     get opacity
 *   }
 *
 * It paints a number; it never animates. The number comes from
 * `makeWorlds().update(nowMs)`, which the game clock drives, so the harness
 * can pause at 300 ms and photograph the sunset half-arrived. A CSS transition
 * would make that frame unreachable — the same argument as the Epic banner,
 * which was exactly that and was replaced for exactly this reason.
 */
export function makeWorldFade(root) {
  const el = document.createElement('div');
  el.id = 'world-fade';
  el.hidden = true;
  root.appendChild(el);

  let opacity = 0;

  /**
   * @param {number} o 0..1
   * @param {string} colour
   */
  function set(o, colour) {
    opacity = Math.min(1, Math.max(0, o));
    if (opacity <= 0.001) {
      if (!el.hidden) el.hidden = true;
      return;
    }
    if (el.hidden) el.hidden = false;
    el.style.background = colour;
    el.style.opacity = String(opacity);
  }

  return { set, el, get opacity() { return opacity; } };
}
