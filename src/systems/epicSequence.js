import { createNoise2D } from 'simplex-noise';
import T from '../../data/tuning.json' with { type: 'json' };

/**
 * The Epic Find beat sheet, as a state machine.
 *
 * BUILD-PLAN section 6 specifies this to the tenth of a second, and the reason
 * it is a machine rather than a pile of CSS animations is the harness: the game
 * clock can be paused and stepped, so every one of these beats can be driven to
 * an exact moment and screenshot. An animation you cannot stop is an animation
 * you cannot verify, and the previous milestone's placeholder banner was exactly
 * that.
 *
 * Nothing here touches three or the DOM. It emits numbers and events; the
 * renderer and the HUD read them. That is also why the whole 4.2 seconds unit
 * tests headless.
 *
 * The load-bearing pieces, in order of how badly it breaks without them:
 *
 *  1. TIME DILATION APPLIES TO THE ENVIRONMENT ONLY. The character controller
 *     keeps running at full speed. Slowing input feels like lag, not drama.
 *  2. THE UN-SLOW FINISHES BEFORE IMPACT. Slow-mo through the landing kills it.
 *  3. THE FALL IS NOT SCALED BY THE SHORTENING LADDER (except in `quick`).
 *     Shorten the fall and the object stops landing with weight, and the weight
 *     is the entire point of the beat.
 *  4. NEVER AUTO-COLLECT. Delivery makes the object exist; the player closes
 *     the loop with the ordinary kete pickup.
 */

const E = T.epicSequence;

// --- easing ----------------------------------------------------------------
const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);

/** Overshoots past 1 and comes back. The overshoot is what makes it pop. */
export function easeOutBack(t, s = 1.7) {
  const u = t - 1;
  return 1 + (s + 1) * u * u * u + s * u * u;
}
export const easeOutQuad = (t) => 1 - (1 - t) * (1 - t);
export const easeOutQuint = (t) => 1 - Math.pow(1 - t, 5);
export function easeOutElastic(t) {
  if (t <= 0) return 0;
  if (t >= 1) return 1;
  return Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * ((2 * Math.PI) / 3)) + 1;
}

/**
 * Which version of the beat this playing gets.
 *
 * The ladder shortens and NEVER removes. Past the seventh Epic it is a 1.2s
 * pop rather than a cutscene, which is what stops it wearing out. Tier 6 skips
 * the ladder entirely: the reserve is what keeps the ceiling big, and a ceiling
 * that stays big is what stops the shortened common version reading as a
 * downgrade.
 *
 * @param {number} count how many Epics have already been delivered, including this one
 * @param {number} [tier]
 */
export function epicMode(count, tier = 5) {
  if (tier >= 6) return 'escalated';
  for (const rung of E.ladder) if (count <= rung.upTo) return rung.mode;
  return E.ladder[E.ladder.length - 1].mode;
}

/**
 * Pick the lettering. Excludes the last few used, so back-to-back repeats are
 * impossible, and rolls one rare long line. A single rare line does more for
 * perceived variety than three common ones.
 *
 * @param {string[]} recent most-recent-first
 * @param {() => number} rng
 * @param {boolean} [escalated]
 */
export function pickVoLine(recent, rng, escalated = false) {
  if (escalated) return E.voEscalatedLine;
  if (rng() < 1 / E.voRareOneIn) return E.voRareLine;
  const excluded = new Set(recent.slice(0, E.voExcludeLast));
  const pool = E.voLines.filter((l) => !excluded.has(l));
  const list = pool.length ? pool : E.voLines;
  return list[Math.min(list.length - 1, Math.floor(rng() * list.length))];
}

/**
 * Build the absolute timeline for a mode, in seconds from sequence start.
 * @param {string} mode
 */
export function timeline(mode) {
  const m = E.modes[mode] ?? E.modes.full;
  const tellEnd = m.tell;
  const pinholeEnd = tellEnd + m.pinhole;
  const irisEnd = pinholeEnd + m.iris;
  const burpEnd = irisEnd + m.burp;
  const impact = burpEnd + m.fall;
  const letterEnd = impact + m.letter;
  const exitEnd = letterEnd + m.exit;
  // The settle runs UNDER the lettering, from impact, not after it. Appending
  // it stretched the full beat from the specified 4.2s to 4.8s.
  const end = Math.max(exitEnd, impact + m.settle);

  return {
    mode, m,
    tellEnd, pinholeEnd, irisEnd, burpEnd,
    fallStart: burpEnd, impact, letterEnd, exitEnd, end,
    // Dilation: down just after the pinhole, back up finishing exactly ON
    // impact. Never through it.
    dilateDownFrom: pinholeEnd + 0.05,
    dilateDownTo: pinholeEnd + 0.05 + m.iris * 0.67,
    dilateUpFrom: impact - m.fall * 0.25,
    dilateUpTo: impact,
  };
}

export function makeEpicSequence() {
  const noise2D = createNoise2D();

  const s = {
    active: false,
    t: 0,
    tl: /** @type {ReturnType<typeof timeline> | null} */ (null),
    tier: 5,
    /** landing point */
    site: { x: 0, y: 0, z: 0 },
    /** portal mouth, above and behind the landing point */
    portal: { x: 0, y: 0, z: 0 },
    /** second mouth, escalated mode only */
    portal2: /** @type {{x: number, y: number, z: number} | null} */ (null),
    drift: { x: 0, z: 0 },
    spinAxis: 0,
    line: '',
    subLine: '',
    /** @type {string[]} */
    events: [],
    fired: { tell: false, open: false, impact: false, end: false },
  };

  /**
   * @param {Object} a
   * @param {{x: number, y: number, z: number}} a.site landing point
   * @param {number} a.count Epics delivered including this one
   * @param {number} [a.tier]
   * @param {string} a.line lettering
   * @param {string} a.subLine the second, smaller line naming the item
   * @param {() => number} a.rng
   */
  function start({ site, count, tier = 5, line, subLine, rng }) {
    const mode = epicMode(count, tier);
    const tl = timeline(mode);
    const g = E.gravity;
    const fall = tl.m.fall;
    const drop = 0.5 * g * fall * fall;

    // Not a straight drop. The object is thrown out sideways, so the portal
    // mouth sits UP and BACK along the drift from where it lands.
    const a = rng() * Math.PI * 2;
    const drift = { x: Math.sin(a) * E.driftSpeed, z: Math.cos(a) * E.driftSpeed };

    s.active = true;
    s.t = 0;
    s.tl = tl;
    s.tier = tier;
    s.site = { ...site };
    s.portal = {
      x: site.x - drift.x * fall,
      y: site.y + drop,
      z: site.z - drift.z * fall,
    };
    // The reserve: two mouths open at once. Offset ACROSS the drift, and far
    // enough apart to read as a pair — at 1.6x the drift they sat inside each
    // other and looked like one torn portal rather than two.
    const across = 3.6 / E.driftSpeed;
    s.portal2 = tl.m.portals > 1
      ? {
        x: s.portal.x + drift.z * across,
        y: s.portal.y + 0.9,
        z: s.portal.z - drift.x * across,
      }
      : null;
    s.drift = drift;
    s.spinAxis = rng() * Math.PI * 2;
    s.line = line;
    s.subLine = subLine;
    s.events = [];
    s.fired = { tell: false, open: false, impact: false, end: false };
  }

  /**
   * Mirror the second mouth to the other side of the drift. Integration asks
   * for this when the first placement of portal2 sits behind a crown or off
   * the frame: only the pair's spacing is a rule, which side is not, and the
   * object falls from the first mouth either way.
   */
  function flipAcross() {
    if (!s.portal2) return false;
    s.portal2 = {
      x: 2 * s.portal.x - s.portal2.x,
      y: s.portal2.y,
      z: 2 * s.portal.z - s.portal2.z,
    };
    return true;
  }

  /** Advance. Real seconds: the sequence itself is never dilated. */
  function update(dt) {
    if (!s.active || !s.tl) return;
    s.t += dt;
    const tl = s.tl;

    if (!s.fired.tell && s.t >= 0) { s.fired.tell = true; s.events.push('tell'); }
    if (!s.fired.open && s.t >= tl.tellEnd) { s.fired.open = true; s.events.push('open'); }
    if (!s.fired.impact && s.t >= tl.impact) {
      s.fired.impact = true;
      // Delivery and impact are the same instant. The object becomes real here
      // and is NEVER auto-collected.
      s.events.push('impact');
      s.events.push('deliver');
    }
    if (!s.fired.end && s.t >= tl.end) {
      s.fired.end = true;
      s.active = false;
      s.events.push('end');
    }
  }

  /**
   * Portal aperture, 0..~1.08.
   *
   * Pinhole is a dot. Iris opens with an overshoot. The burp is a squash that
   * pushes the object out. After impact it closes over 500ms and ends on a
   * pinch-and-pop rather than a fade, because a fade is not a physical exit.
   */
  function aperture() {
    const tl = s.tl;
    if (!tl) return { scale: 0, sx: 1, sy: 1 };
    const t = s.t;

    if (t < tl.tellEnd) return { scale: 0, sx: 1, sy: 1 };

    if (t < tl.pinholeEnd) {
      const u = clamp01((t - tl.tellEnd) / Math.max(1e-6, tl.m.pinhole));
      // One white dot, 0 to 14px. Expressed as a fraction of the full mouth.
      return { scale: u * 0.06, sx: 1, sy: 1 };
    }

    if (t < tl.irisEnd) {
      const u = clamp01((t - tl.pinholeEnd) / Math.max(1e-6, tl.m.iris));
      return { scale: 0.05 + easeOutBack(u) * 0.95, sx: 1, sy: 1 };
    }

    if (t < tl.burpEnd) {
      // The burp. Squash and rebound over the phase, pushing the object out.
      const u = clamp01((t - tl.irisEnd) / Math.max(1e-6, tl.m.burp));
      const punch = Math.sin(u * Math.PI);
      return { scale: 1, sx: 1 + 0.12 * punch, sy: 1 - 0.14 * punch };
    }

    if (t < tl.impact) return { scale: 1, sx: 1, sy: 1 };

    // Closing. 500ms, ending on a two-frame pinch.
    const u = clamp01((t - tl.impact) / 0.5);
    if (u >= 1) return { scale: 0, sx: 1, sy: 1 };
    const pinch = u > 0.86 ? (u - 0.86) / 0.14 : 0;
    return { scale: (1 - easeOutQuad(u)), sx: 1 - pinch * 0.9, sy: 1 + pinch * 0.5 };
  }

  /**
   * Environment time scale. ENVIRONMENT ONLY — never the character controller.
   */
  function dilation() {
    const tl = s.tl;
    if (!tl || !s.active) return 1;
    const floor = tl.m.dilation;
    if (floor >= 1) return 1;
    const t = s.t;
    if (t < tl.dilateDownFrom) return 1;
    if (t < tl.dilateDownTo) {
      const u = clamp01((t - tl.dilateDownFrom) / (tl.dilateDownTo - tl.dilateDownFrom));
      return 1 + (floor - 1) * easeOutQuad(u);
    }
    if (t < tl.dilateUpFrom) return floor;
    if (t < tl.dilateUpTo) {
      const u = clamp01((t - tl.dilateUpFrom) / (tl.dilateUpTo - tl.dilateUpFrom));
      return floor + (1 - floor) * easeOutQuad(u);
    }
    return 1;
  }

  /**
   * Where the object is, and how it is drawn. Null before it leaves the portal.
   */
  function object() {
    const tl = s.tl;
    if (!tl || s.t < tl.fallStart) return null;

    const g = E.gravity;
    const u = Math.min(s.t - tl.fallStart, tl.m.fall);
    const landed = s.t >= tl.impact;

    const x = s.portal.x + s.drift.x * u;
    const z = s.portal.z + s.drift.z * u;
    const y = landed ? s.site.y : s.portal.y - 0.5 * g * u * u;

    // Stepped, not smooth. Smooth interpolation on a drawn thing reads as CG;
    // stepped motion reads as drawn. That contrast is the whole aesthetic and
    // it is free.
    const frame = Math.floor(s.t * E.stepHz);
    const spin = landed
      ? s.spinAxis + E.tumbleTurns * Math.PI * 2
      : s.spinAxis + (frame / (E.stepHz * tl.m.fall)) * E.tumbleTurns * Math.PI * 2;

    let scale;
    if (!landed) {
      // Drawn larger during the fall so it reads at distance, settling to 1.
      scale = E.fallScale + (1 - E.fallScale) * (u / tl.m.fall);
    } else {
      const sq = clamp01((s.t - tl.impact) / 0.35);
      scale = 0.7 + easeOutElastic(sq) * 0.3;
    }

    return { x, y, z, spin, scale, landed, fallU: u / tl.m.fall };
  }

  /** Seconds since impact, or -1. */
  function sinceImpact() {
    const tl = s.tl;
    if (!tl || s.t < tl.impact) return -1;
    return s.t - tl.impact;
  }

  /**
   * Camera shake, driven by 2D simplex rather than per-frame random. Random
   * reads as a glitch; noise reads as a knock.
   */
  function shake() {
    const si = sinceImpact();
    if (si < 0) return { rot: 0, x: 0, y: 0 };
    const u = clamp01(si / (E.shakeMs / 1000));
    if (u >= 1) return { rot: 0, x: 0, y: 0 };
    const amp = 1 - easeOutQuint(u);
    const f = si * 42;
    return {
      rot: noise2D(f, 0.5) * E.shakeDegrees * (Math.PI / 180) * amp,
      x: noise2D(f, 11.5) * E.shakeMetres * amp,
      y: noise2D(f, 23.5) * E.shakeMetres * amp,
    };
  }

  return {
    start,
    flipAcross,
    update,
    aperture,
    dilation,
    object,
    shake,
    sinceImpact,

    get active() { return s.active; },
    get t() { return s.t; },
    get tier() { return s.tier; },
    get mode() { return s.tl?.mode ?? null; },
    get portal() { return s.tl && s.t >= s.tl.tellEnd ? s.portal : null; },
    get portal2() { return s.tl && s.t >= s.tl.tellEnd ? s.portal2 : null; },
    /** The second mouth's placement from the start, before the tell ends, so siting can test it. */
    get portal2Planned() { return s.portal2; },
    get portalPlanned() { return s.tl ? s.portal : null; },
    get site() { return { ...s.site }; },
    get line() { return s.line; },
    get subLine() { return s.subLine; },

    /**
     * The tell. Between sequence start and the pinhole there is NOTHING on
     * screen — the foliage leans and the sound ducks, and the player turns to
     * look because the world pointed. 0 when there is no tell.
     */
    get tellStrength() {
      const tl = s.tl;
      if (!tl || !s.active || tl.m.tell <= 0) return 0;
      if (s.t >= tl.tellEnd) return 0;
      return easeOutQuad(clamp01(s.t / tl.m.tell));
    },

    /**
     * How far the camera has leaned into the moment, 0..1.
     *
     * BUILD-PLAN asks for the FOV to dolly in 8% and the pitch to raise 6
     * degrees. The pitch raise turned out to be load-bearing rather than
     * decorative: the mouth sits 4.5m up (0.8s of fall at 14 m/s², which the
     * plan fixes), the camera looks 29 degrees DOWN, and at that angle the top
     * of the portal lands a degree outside the frustum. Without the lean the
     * best moment in the game is clipped against the top edge of the screen.
     *
     * Implemented as a lift of the look TARGET, not of the camera. Raising the
     * camera's pitch would move the camera higher and point it further down,
     * which is the opposite of what is wanted, and yanking the camera off the
     * player is forbidden outright.
     */
    get framing() {
      const tl = s.tl;
      if (!tl || !s.active) return 0;
      // Starts with the tell and is COMPLETE by the time the iris finishes
      // opening. Ramping it over a fixed 900ms from the portal instead meant
      // the camera was only 60% leaned at peak aperture, which is precisely
      // when the mouth is biggest and most likely to clip. The siting check
      // tests the fully-leaned pose, so the camera has to actually be there.
      const rise = easeOutQuad(clamp01(s.t / Math.max(0.3, tl.irisEnd)));
      const fallOff = 0.6;
      const outStart = tl.end - fallOff;
      if (s.t > outStart) return rise * easeOutQuad(clamp01((tl.end - s.t) / fallOff));
      return rise;
    },

    /** Lettering progress: 0 before impact, 1 while held, back to 0 on exit. */
    get lettering() {
      const tl = s.tl;
      if (!tl || s.t < tl.impact) return { shown: false, in: 0, out: 0, chars: 0 };
      if (s.t >= tl.exitEnd) return { shown: false, in: 1, out: 1, chars: s.subLine.length };
      const entry = clamp01((s.t - tl.impact) / 0.26);
      const out = s.t > tl.letterEnd
        ? clamp01((s.t - tl.letterEnd) / Math.max(1e-6, tl.m.exit))
        : 0;
      // The second line types on at 22 chars/s, starting 250ms after impact.
      const chars = Math.max(0, Math.floor((s.t - tl.impact - 0.25) * 22));
      return { shown: true, in: entry, out, chars: Math.min(chars, s.subLine.length) };
    },

    /** Consume the event queue. */
    takeEvents() {
      const out = s.events;
      s.events = [];
      return out;
    },

    /** Testing hook. */
    get _timeline() { return s.tl; },
  };
}

export const EPIC_SEQUENCE_TUNING = E;
