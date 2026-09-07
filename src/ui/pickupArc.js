/**
 * The pickup arc: the thing that happens two hundred times a session, so it has
 * to be right and it has to never get in the way.
 *
 * Screen space, not world space. The item is projected to a screen point and
 * then tweened to the kete in 2D, which is what makes it land correctly from
 * every camera angle. A world-space arc has to fight perspective and looks
 * wrong the moment the camera is not where you assumed.
 *
 * The governing rule for the whole game, from BUILD-PLAN section 6: animate the
 * 3D world at 60fps and animate the DRAWN things on twos and threes. Smooth
 * interpolation on an ink line reads as CG; stepped motion reads as drawn. The
 * rotation below is quantised to 30 degree steps at 12fps for exactly that
 * reason, and it costs nothing.
 */

const DURATION = 520;
const CRUSH = 60;
const STEP_HZ = 12;
const ROT_STEP = 30;

export function makePickupArc(root) {
  const layer = document.createElement('div');
  layer.id = 'arc-layer';
  root.appendChild(layer);

  /** @type {{el: HTMLElement, x0: number, y0: number, x1: number, y1: number, cx: number, cy: number, t0: number, colour: string}[]} */
  const live = [];

  /**
   * @param {number} sx screen x of the item
   * @param {number} sy screen y of the item
   * @param {string} colour
   * @param {number} nowMs
   */
  function launch(sx, sy, colour, nowMs) {
    // Never lock input, and never queue more than a handful. Clearing a beach
    // has to stay possible; past five concurrent arcs the counter just ticks.
    if (live.length >= 5) return false;

    const kete = document.querySelector('#kete-bag');
    const r = kete?.getBoundingClientRect();
    const x1 = r ? r.left + r.width / 2 : 40;
    const y1 = r ? r.top + r.height / 2 : window.innerHeight - 40;

    const el = document.createElement('div');
    el.className = 'arc-bit';
    el.style.background = colour;
    layer.appendChild(el);

    live.push({
      el,
      x0: sx, y0: sy, x1, y1,
      // Control point well ABOVE the midpoint: the item lofts before it drops
      // into the bag, which is what makes the arc read as a throw.
      cx: (sx + x1) / 2,
      cy: Math.min(sy, y1) - window.innerHeight * 0.28,
      t0: nowMs,
      colour,
    });
    return true;
  }

  /** @param {number} nowMs */
  function update(nowMs) {
    for (let i = live.length - 1; i >= 0; i--) {
      const a = live[i];
      const age = nowMs - a.t0;

      if (age >= DURATION) {
        a.el.remove();
        live.splice(i, 1);
        continue;
      }

      // Anticipation crush. These 60ms are what give the launch its force.
      if (age < CRUSH) {
        const c = age / CRUSH;
        a.el.style.transform =
          `translate(${a.x0}px, ${a.y0}px) translate(-50%, -50%) scale(${1 + c * 0.14}, ${1 - c * 0.18})`;
        continue;
      }

      const t = (age - CRUSH) / (DURATION - CRUSH);
      const inv = 1 - t;
      const x = inv * inv * a.x0 + 2 * inv * t * a.cx + t * t * a.x1;
      const y = inv * inv * a.y0 + 2 * inv * t * a.cy + t * t * a.y1;

      // Bigger BEFORE it disappears. A pickup that only shrinks reads as a
      // deletion; a pickup that swells first reads as a gain.
      const scale = t < 0.25 ? 1 + t * 1.0 : 1.25 - (t - 0.25) * 1.2;

      const stepped = Math.floor(age / (1000 / STEP_HZ));
      const rot = (stepped * ROT_STEP) % 360;

      a.el.style.transform =
        `translate(${x}px, ${y}px) translate(-50%, -50%) rotate(${rot}deg) scale(${Math.max(0.1, scale)})`;
      a.el.style.opacity = String(t > 0.86 ? (1 - t) / 0.14 : 1);
    }
  }

  return { launch, update, get count() { return live.length; } };
}
