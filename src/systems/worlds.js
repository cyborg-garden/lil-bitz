import T from '../../data/tuning.json' with { type: 'json' };
import { rngFor } from '../worldgen/rng.js';
import { chunkIndex } from '../worldgen/chunk.js';

/**
 * Which world you are in, and how you cross between them.
 *
 * PUBLIC INTERFACE (integration reads this, not the design doc)
 *
 *   WORLDS_TUNING                          tuning.json `worlds`, verbatim.
 *
 *   doorwayPosition(her, terrain)          {x, y, z} for the arch by her:
 *                                          `doorway.offsetMetres` on her inland
 *                                          side (higher z), on the ground.
 *
 *   placeReturnDoor({seed, entry, terrain, genScenery})
 *                                          Door: {x, y, z, relaxed, relocations}
 *                                          45–85 m from `entry`, seed-random
 *                                          bearing, dry, flat, nothing standing
 *                                          within `returnDoor.clearance`. Never
 *                                          null: if no candidate passes, the
 *                                          least-bad one is returned with
 *                                          `relaxed: true` (deferred, never
 *                                          cancelled — same rule as portals).
 *
 *   placeEntry({entry, walkable})          {x, z}: the entry itself if the
 *                                          player can stand there, else the
 *                                          nearest walkable grid point within
 *                                          `elsewhere.entrySearchMetres`.
 *
 *   relocateReturnDoor({seed, terrain, genScenery, player: {x, z, fx, fz}, door})
 *                                          The soft floor. A fresh Door 25–35 m
 *                                          ahead of the player's bearing, with
 *                                          `relocations` incremented. Call only
 *                                          when `machine.lostFloorDue()` is true.
 *
 *   doorReached(pos, door, r?)             true inside `returnDoor.reachRadius`.
 *   doorCue(pos, door)                     {hear: 0..1, bend: {x, z, radius,
 *                                          radians} | null} for the hum gain and
 *                                          the foliage lean; both zero outside
 *                                          `hearRadius`.
 *   worldLabel(machine, nowMs)             '' at home, 'elsewhere', or
 *                                          'elsewhere · listen' after
 *                                          `elsewhere.hintAfterSec` lost.
 *
 *   makeWorlds({seed})                     the state machine. Fields:
 *     .which                'home' | 'elsewhere'
 *     .entry                {x, z} where you arrived in elsewhere, or null
 *     .returnDoor           Door | null
 *     .karu                 boolean — Karu is with you (permanent once true)
 *     .crossing             boolean — a fade is in progress
 *     .fade                 0..1 opacity of the full-screen fade this frame
 *     .fadeColour           hex string to paint the fade with
 *     .holdProgress         0..1 of the doorway hold this frame
 *     .hold(inside, held, nowMs)
 *                           Feed once per frame while at home near the arch.
 *                           Returns true on the frame the hold completes
 *                           (`doorway.holdMs`, or `holdWithKaruMs` with Karu).
 *                           Releasing the key or stepping out resets it.
 *     .cross(to, nowMs, opts?)
 *                           Begin the fade to `to`. opts.entry / opts.returnDoor
 *                           are stored on arrival in elsewhere. Ignored while
 *                           already crossing.
 *     .update(nowMs)        Advance the fade. Returns events in order:
 *                           'switch' (fully black: swap the world NOW) and
 *                           'arrived' (fade finished). Steppable: pass any
 *                           nowMs, nothing is tied to wall time.
 *     .noteDoorOnScreen(nowMs)
 *                           Integration calls this on any frame the return
 *                           door projects inside the frustum. It disarms the
 *                           lost floor.
 *     .lostFloorDue(nowMs)  true once, when the player has been in elsewhere
 *                           `returnDoor.lostFloorSec` with the door never seen
 *                           and `maxRelocations` not spent.
 *     .setReturnDoor(door)  after a relocation.
 *     .arriveHome()         convenience: what 'switch' toward home does.
 *     .snapshot()           {which, entry, returnDoor, karu} — plain JSON.
 *     .restore(snap, nowMs) the inverse; a restore into elsewhere restarts the
 *                           lost clock from nowMs (loading is never a way out).
 *
 * WHY A MACHINE. The crossing is a fade the harness has to be able to stop in
 * the middle of and photograph, the same argument as the Epic beat: a CSS
 * transition cannot be stepped and cannot be verified. So the fade is a number
 * this module computes from the clock, and `ui/worldFade.js` only paints it.
 *
 * Nothing here touches three, the DOM or main.js state. Terrain and scenery
 * come in as functions, so door placement unit-tests without a renderer.
 */

const W = T.worlds;
const DEG = Math.PI / 180;

/**
 * @typedef {'home'|'elsewhere'} WorldId
 * @typedef {{x: number, z: number}} Pt
 * @typedef {{x: number, y: number, z: number, relaxed: boolean, relocations: number}} Door
 * @typedef {{
 *   heightAt: (x: number, z: number) => number,
 *   slopeAt: (x: number, z: number) => number,
 *   isSubmerged: (x: number, z: number) => boolean,
 *   waterDepthAt: (x: number, z: number) => number,
 * }} DoorTerrain
 * @typedef {(cx: number, cz: number) => {kind: string, x: number, z: number}[]} GenScenery
 */

/**
 * The arch stands on her inland side. The beach is the approach, so putting it
 * behind her (higher z) means you cannot walk into it on the way to give her
 * something — the whole reason it moved from 4 m in front to 7 m behind.
 * @param {Pt} her @param {{heightAt: (x: number, z: number) => number}} terrain
 */
export function doorwayPosition(her, terrain) {
  const x = her.x;
  const z = her.z + W.doorway.offsetMetres;
  return { x, y: terrain.heightAt(x, z), z };
}

/**
 * Is anything standing within `r` of (x, z)? Reads the scenery generator
 * directly rather than main.js's `visibleScenery`, because the door is placed
 * deliberately outside the loaded 7×7 chunk window.
 * @param {GenScenery} genScenery
 */
function standingNear(genScenery, x, z, r) {
  const cx = chunkIndex(x);
  const cz = chunkIndex(z);
  const r2 = r * r;
  for (let dx = -1; dx <= 1; dx++) {
    for (let dz = -1; dz <= 1; dz++) {
      for (const s of genScenery(cx + dx, cz + dz)) {
        if (s.kind !== 'tree' && s.kind !== 'scrub') continue;
        const ex = s.x - x;
        const ez = s.z - z;
        if (ex * ex + ez * ez < r2) return true;
      }
    }
  }
  return false;
}

/**
 * Shared candidate loop for first placement and for the floor. The first
 * candidate that passes every rule wins — the rng is seeded, so "first" is
 * deterministic and the same seed always hides the door in the same place.
 *
 * @param {Object} a
 * @param {() => number} a.rng
 * @param {number} a.ox @param {number} a.oz origin
 * @param {number} a.baseAngle @param {number} a.spread radians, half-width
 * @param {number} a.min @param {number} a.max
 * @param {DoorTerrain} a.terrain
 * @param {GenScenery} a.genScenery
 * @param {number} a.relocations
 * @returns {Door}
 */
function siteDoor({ rng, ox, oz, baseAngle, spread, min, max, terrain, genScenery, relocations }) {
  const R = W.returnDoor;
  let leastBad = null;
  let leastBadScore = -Infinity;

  for (let i = 0; i < R.samples; i++) {
    const a = baseAngle + (rng() * 2 - 1) * spread;
    const d = min + rng() * (max - min);
    const x = ox + Math.sin(a) * d;
    const z = oz + Math.cos(a) * d;

    // Score every candidate so the fallback is the least wet, least steep one
    // rather than an arbitrary last sample.
    let score = 0;
    const wet = terrain.isSubmerged(x, z) || terrain.waterDepthAt(x, z) >= R.maxWaterDepth;
    const steep = terrain.slopeAt(x, z) > T.epicSiting.maxSlope;
    const crowded = standingNear(genScenery, x, z, R.clearance);
    if (wet) score -= 100;
    if (steep) score -= 10;
    if (crowded) score -= 1;
    if (score > leastBadScore) {
      leastBadScore = score;
      leastBad = { x, y: terrain.heightAt(x, z), z, relaxed: true, relocations };
    }
    if (!wet && !steep && !crowded) {
      return { x, y: terrain.heightAt(x, z), z, relaxed: false, relocations };
    }
  }
  return /** @type {Door} */ (leastBad);
}

/**
 * @param {Object} a
 * @param {string} a.seed
 * @param {Pt} a.entry
 * @param {DoorTerrain} a.terrain
 * @param {GenScenery} a.genScenery
 * @returns {Door}
 */
export function placeReturnDoor({ seed, entry, terrain, genScenery }) {
  const rng = rngFor(seed, 'return-door');
  return siteDoor({
    rng,
    ox: entry.x,
    oz: entry.z,
    baseAngle: rng() * Math.PI * 2,
    spread: Math.PI,
    min: W.returnDoor.min,
    max: W.returnDoor.max,
    terrain,
    genScenery,
    relocations: 0,
  });
}

/**
 * Where you stand on arriving in elsewhere.
 *
 * The entry is the arch's home position read against a different terrain,
 * and on the default seed that is a glowing stream: the player arrived in
 * 1.6m of water and Karu led straight across it. If the entry is not walkable,
 * the nearest walkable point on a grid around it stands in. Deterministic —
 * the grid is scanned nearest-first with a fixed tie order — and never null:
 * with nothing dry inside the search the entry stands as it was, wet.
 *
 * @param {Object} a
 * @param {Pt} a.entry
 * @param {(x: number, z: number) => boolean} a.walkable
 * @returns {Pt}
 */
export function placeEntry({ entry, walkable }) {
  if (walkable(entry.x, entry.z)) return { x: entry.x, z: entry.z };
  const E = W.elsewhere;
  const n = Math.ceil(E.entrySearchMetres / E.entrySearchStep);
  let best = null;
  let bestD = Infinity;
  for (let i = -n; i <= n; i++) {
    for (let j = -n; j <= n; j++) {
      const x = entry.x + i * E.entrySearchStep;
      const z = entry.z + j * E.entrySearchStep;
      const d = Math.hypot(i, j) * E.entrySearchStep;
      if (d > E.entrySearchMetres || d >= bestD) continue;
      if (!walkable(x, z)) continue;
      best = { x, z };
      bestD = d;
    }
  }
  return best ?? { x: entry.x, z: entry.z };
}

/**
 * The floor. Ahead of the player, close, once. The fiction is the same as the
 * Epic's: it is following you. The mechanic is that five minutes is the most
 * being lost can cost.
 *
 * @param {Object} a
 * @param {string} a.seed
 * @param {DoorTerrain} a.terrain
 * @param {GenScenery} a.genScenery
 * @param {{x: number, z: number, fx: number, fz: number}} a.player unit facing
 * @param {Door} a.door
 * @returns {Door}
 */
export function relocateReturnDoor({ seed, terrain, genScenery, player, door }) {
  const n = door.relocations + 1;
  const rng = rngFor(seed, 'return-door', 'relocate', n);
  return siteDoor({
    rng,
    ox: player.x,
    oz: player.z,
    baseAngle: Math.atan2(player.fx, player.fz),
    spread: W.returnDoor.relocateSpreadDeg * DEG,
    min: W.returnDoor.relocateMin,
    max: W.returnDoor.relocateMax,
    terrain,
    genScenery,
    relocations: n,
  });
}

/**
 * @param {Pt} pos @param {Door | null} door @param {number} [r]
 */
export function doorReached(pos, door, r = W.returnDoor.reachRadius) {
  if (!door) return false;
  return Math.hypot(door.x - pos.x, door.z - pos.z) <= r;
}

/**
 * The only cue there is, and only close. Hum gain rises linearly from the edge
 * of `hearRadius` to 1 at the arch; the lean is the Epic tell's shape pointed at
 * the door, so the last twenty metres is a find.
 * @param {Pt} pos @param {Door | null} door
 * @returns {{hear: number, bend: {x: number, z: number, radius: number, radians: number} | null}}
 */
export function doorCue(pos, door) {
  if (!door) return { hear: 0, bend: null };
  const R = W.returnDoor;
  const d = Math.hypot(door.x - pos.x, door.z - pos.z);
  if (d > R.hearRadius) return { hear: 0, bend: null };
  return {
    hear: Math.min(1, Math.max(0, 1 - d / R.hearRadius)),
    bend: { x: door.x, z: door.z, radius: R.bendRadius, radians: R.bendDegrees * DEG },
  };
}

/**
 * @param {ReturnType<typeof makeWorlds>} m
 * @param {number} nowMs
 */
export function worldLabel(m, nowMs) {
  if (m.which !== 'elsewhere') return W.worldLabel.home;
  const lostSec = (nowMs - m.enteredAtMs) / 1000;
  if (!m.karu && lostSec >= W.elsewhere.hintAfterSec) return W.worldLabel.elsewhereListen;
  return W.worldLabel.elsewhere;
}

/**
 * @param {{seed: string}} a
 */
export function makeWorlds({ seed }) {
  const D = W.doorway;
  const R = W.returnDoor;

  const m = {
    seed,
    /** @type {WorldId} */
    which: 'home',
    /** @type {Pt | null} */
    entry: null,
    /** @type {Door | null} */
    returnDoor: null,
    karu: false,

    // --- crossing -------------------------------------------------------
    crossing: false,
    fade: 0,
    fadeColour: '#e8763a',
    /** @type {{to: WorldId, t0: number, switched: boolean, entry?: Pt, returnDoor?: Door} | null} */
    _cross: null,

    // --- the hold ----------------------------------------------------------
    holdProgress: 0,
    /** @type {number | null} */
    _holdSince: null,

    // --- the lost clock ----------------------------------------------------
    enteredAtMs: 0,
    doorSeen: false,
    _floorSpent: 0,
  };

  /** How long the key has to be held right now. Karu makes it a walk-in. */
  function holdNeededMs() {
    return m.karu ? D.holdWithKaruMs : D.holdMs;
  }

  /**
   * @param {boolean} inside within `doorway.triggerRadius` of the arch
   * @param {boolean} held the collect key is down
   * @param {number} nowMs
   */
  function hold(inside, held, nowMs) {
    // Not before her warning has finished, either: with a dwell instead of a
    // key, a player standing by the arch while she talks would be taken
    // through mid-sentence.
    if (m.crossing || m.which !== 'home' || !inside || (m.doorway && !m.doorway.promptReady)) {
      m._holdSince = null;
      m.holdProgress = 0;
      return false;
    }
    const need = holdNeededMs();
    // With Karu, standing in the arch is the act. No key, no hold.
    if (need <= 0) { m.holdProgress = 1; return true; }
    // Without Karu it is still walking in, just not instantly: you stand in
    // the arch for `holdMs` and it takes you. The first cut wanted the
    // collect key HELD as well, as a deliberate act before a one-way door —
    // and Juniper, playing it, could not get through: a held key at a
    // doorway is not a thing anyone tries. The dwell keeps the beat (the
    // arch fills, you can step back out) without the key. `held` is kept in
    // the signature for the harness and for Karu's no-key check.
    void held;
    if (m._holdSince === null) m._holdSince = nowMs;
    m.holdProgress = Math.min(1, (nowMs - m._holdSince) / need);
    if (m.holdProgress >= 1) {
      m._holdSince = null;
      return true;
    }
    return false;
  }

  /**
   * @param {WorldId} to
   * @param {number} nowMs
   * @param {{entry?: Pt, returnDoor?: Door}} [opts]
   */
  function cross(to, nowMs, opts = {}) {
    if (m.crossing || to === m.which) return false;
    m.crossing = true;
    m.fade = 0;
    m.holdProgress = 0;
    m._holdSince = null;
    // Fade INTO the sunset on the way out, and back through it on the way home:
    // the colour you pass through is the colour of the place you are leaving
    // or entering, and both of those are elsewhere's.
    m.fadeColour = W_FADE_COLOUR;
    m._cross = { to, t0: nowMs, switched: false, entry: opts.entry, returnDoor: opts.returnDoor };
    return true;
  }

  function arriveHome() {
    m.which = 'home';
    m.entry = null;
    m.returnDoor = null;
    m.doorSeen = false;
    m._floorSpent = 0;
  }

  /**
   * @param {number} nowMs
   * @returns {string[]}
   */
  function update(nowMs) {
    /** @type {string[]} */
    const events = [];
    const c = m._cross;
    if (!c) { m.fade = 0; return events; }
    const t = nowMs - c.t0;

    if (!c.switched) {
      m.fade = Math.min(1, t / D.fadeOutMs);
      if (t >= D.fadeOutMs) {
        c.switched = true;
        if (c.to === 'elsewhere') {
          m.which = 'elsewhere';
          m.entry = c.entry ?? m.entry;
          m.returnDoor = c.returnDoor ?? m.returnDoor;
          m.enteredAtMs = nowMs;
          m.doorSeen = false;
        } else {
          arriveHome();
        }
        events.push('switch');
      }
      return events;
    }

    const tin = t - D.fadeOutMs;
    m.fade = Math.max(0, 1 - tin / D.fadeInMs);
    if (tin >= D.fadeInMs) {
      m.fade = 0;
      m.crossing = false;
      m._cross = null;
      events.push('arrived');
    }
    return events;
  }

  /** @param {number} nowMs */
  function noteDoorOnScreen(nowMs) {
    void nowMs;
    m.doorSeen = true;
  }

  /** @param {number} nowMs */
  function lostFloorDue(nowMs) {
    if (m.which !== 'elsewhere' || m.crossing || !m.returnDoor) return false;
    if (m.doorSeen) return false;
    if (m._floorSpent >= R.maxRelocations) return false;
    if ((nowMs - m.enteredAtMs) / 1000 < R.lostFloorSec) return false;
    // Spent on the frame it fires, so a caller that ignores the answer still
    // only gets it once. The relocation itself is the caller's, via
    // relocateReturnDoor, because it needs the player's facing.
    m._floorSpent++;
    return true;
  }

  /** @param {Door} door */
  function setReturnDoor(door) {
    m.returnDoor = door;
  }

  function snapshot() {
    return {
      which: m.which,
      entry: m.entry ? { x: m.entry.x, z: m.entry.z } : null,
      returnDoor: m.returnDoor ? { ...m.returnDoor } : null,
      karu: m.karu,
    };
  }

  /**
   * @param {{which?: WorldId, entry?: Pt | null, returnDoor?: Door | null, karu?: boolean} | null | undefined} s
   * @param {number} nowMs
   */
  function restore(s, nowMs) {
    m.crossing = false;
    m._cross = null;
    m.fade = 0;
    m.holdProgress = 0;
    m._holdSince = null;
    m.which = s?.which === 'elsewhere' ? 'elsewhere' : 'home';
    m.entry = s?.entry ? { x: s.entry.x, z: s.entry.z } : null;
    m.returnDoor = s?.returnDoor ? { relaxed: false, relocations: 0, ...s.returnDoor } : null;
    m.karu = Boolean(s?.karu);
    m.enteredAtMs = nowMs;
    m.doorSeen = false;
    m._floorSpent = m.returnDoor ? m.returnDoor.relocations : 0;
  }

  return Object.assign(m, {
    hold, cross, update, noteDoorOnScreen, lostFloorDue, setReturnDoor, arriveHome,
    snapshot, restore, holdNeededMs,
  });
}

/** The portal cutout's sunset orange (render/portal.js). */
const W_FADE_COLOUR = '#e8763a';

/**
 * Dress the scene for a world. Data in `data/worlds.json`; the renderers know
 * nothing about worlds. Every mesh here is a MeshLambertMaterial whose `color`
 * multiplies the vertex colour, so home is `#ffffff` and nothing has to be
 * rebuilt to cross.
 *
 * Duck-typed on purpose: no three import, so this file stays a pure module the
 * unit tests can load without a renderer.
 *
 * @param {Object} s
 * @param {{material: any}} [s.terrainMesh]
 * @param {Iterable<{material: any}>} [s.treeMeshes]   sceneryMesh.trees.values()
 * @param {{material: any}} [s.scrubMesh]
 * @param {{material: any}} [s.rockMesh]
 * @param {{material: any}} [s.freshMesh]
 * @param {{visible: boolean}} [s.water]
 * @param {{background: any, fog: any}} [s.scene]
 * @param {{sky: string, fog: string, fogNear: number, fogFar: number, terrainTint: string,
 *   foliageTint: string, scrubTint: string, rockTint: string, freshTint: string,
 *   freshGlow: string, hideSea: boolean}} palette
 */
export function applyPalette(s, palette) {
  if (s.scene) {
    if (s.scene.background?.set) s.scene.background.set(palette.sky);
    if (s.scene.fog) {
      s.scene.fog.color.set(palette.fog);
      s.scene.fog.near = palette.fogNear;
      s.scene.fog.far = palette.fogFar;
    }
  }
  // A tint MULTIPLIES, so on green ground it can only darken toward brown.
  // The shift to violet is the emissive term — a small additive lift in the
  // hue the multiply cannot reach. Home's is black, so home is untouched.
  if (s.terrainMesh) {
    s.terrainMesh.material.color.set(palette.terrainTint);
    if (s.terrainMesh.material.emissive?.set) s.terrainMesh.material.emissive.set(palette.terrainGlow ?? '#000000');
  }
  if (s.treeMeshes) {
    for (const t of s.treeMeshes) {
      t.material.color.set(palette.foliageTint);
      if (t.material.emissive?.set) t.material.emissive.set(palette.foliageGlow ?? '#000000');
    }
  }
  if (s.scrubMesh) s.scrubMesh.material.color.set(palette.scrubTint);
  if (s.rockMesh) s.rockMesh.material.color.set(palette.rockTint);
  if (s.freshMesh) {
    s.freshMesh.material.color.set(palette.freshTint);
    // Lambert has an emissive term; "the water in the streams glows" is just
    // that term being non-black. Home sets it back to black.
    if (s.freshMesh.material.emissive?.set) s.freshMesh.material.emissive.set(palette.freshGlow);
  }
  if (s.water) s.water.visible = !palette.hideSea;
}

export const WORLDS_TUNING = W;
