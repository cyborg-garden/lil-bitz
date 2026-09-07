import { createNoise2D } from 'simplex-noise';
import alea from 'alea';

/**
 * The terrain field. Pure maths over world coordinates: no chunks, no meshes,
 * no three. `heightAt` is the single source of truth for ground elevation and
 * is used by the renderer, the player controller and the tests alike.
 *
 * Shape of the world: the sea lies at negative Z. Walking in +Z takes you up
 * the beach, over the dunes and into the forest. The shoreline itself wanders,
 * so the biome boundary is never a straight line.
 */

export const SEA_LEVEL = 0;

/**
 * The biome blend is driven by distance inland, not by elevation.
 *
 * Elevation was the obvious choice and it was wrong: the dune ridge spikes
 * height over a few metres, so a height-driven blend collapsed the whole
 * beach-to-forest transition into about 5m and read as a hard line. Distance
 * inland is monotonic and controllable, so the band below is genuinely ~32m of
 * dune scrub where both vocabularies mix.
 */
const FOREST_START = 6;
const FOREST_FULL = 38;

/** @param {number} e0 @param {number} e1 @param {number} x */
function smoothstep(e0, e1, x) {
  const t = Math.min(1, Math.max(0, (x - e0) / (e1 - e0)));
  return t * t * (3 - 2 * t);
}

/**
 * @param {string} seed
 */
/**
 * Fresh water.
 *
 * One field does both jobs: it carves the streambed out of the ground AND
 * places the water surface, so the two can never disagree. A water plane that
 * is authored separately from the terrain it sits in is the classic way to get
 * rivers running along hillsides.
 *
 * Outside a channel the water surface sits a little UNDER the ground and is
 * therefore hidden by it — no alpha masking, no per-vertex visibility, just
 * depth testing. Water appears exactly where, and only where, the ground was
 * cut below it.
 */
const CHANNEL = {
  /** Where fresh water can exist at all. Nothing on the beach or in the dunes. */
  inlandStart: 30,
  inlandFull: 60,
  /** How deep the bed is cut below the surrounding ground, metres. */
  carve: 0.95,
  pondCarve: 2.30,
  /** How far the surface sits below the un-carved ground when there is no channel. */
  hide: 0.30,
  /** Water depth in a full channel: carve - hide - this = surface above the bed. */
  depth: 0.34,
  /** Channel half-width as a fraction of the ridged-noise band. */
  band: 0.055,
  pondBand: 0.30,
};

/**
 * @param {string} seed
 * @param {{inlandOffset?: number}} [opts]
 *   `inlandOffset` slides the whole shoreline seaward. Elsewhere has no sea,
 *   and the sea is not just the water plane: `inlandAt < 12` is baked into the
 *   water surface, submersion, the seaward drop and the dryness floor. Moving
 *   the one number every one of those reads is the only way to remove the sea
 *   that cannot leave a five-metre pit behind. Home passes nothing, so the home
 *   hash cannot move.
 */
export function makeTerrain(seed, opts = {}) {
  const inlandOffset = opts.inlandOffset ?? 0;
  const nShore = createNoise2D(alea(`${seed}:shore`));
  const nDune = createNoise2D(alea(`${seed}:dune`));
  const nDetail = createNoise2D(alea(`${seed}:detail`));
  const nRock = createNoise2D(alea(`${seed}:rock`));
  const nStream = createNoise2D(alea(`${seed}:stream`));
  const nStreamWarp = createNoise2D(alea(`${seed}:streamwarp`));
  const nPond = createNoise2D(alea(`${seed}:pond`));

  /**
   * Distance inland of the wandering shoreline, in metres. Negative is sea.
   * @param {number} x @param {number} z
   */
  function inlandAt(x, z) {
    const shore = nShore(x * 0.004, 0) * 26 + nShore(x * 0.013, 11.5) * 7;
    return z - shore + inlandOffset;
  }

  /**
   * How much of a channel is here: 0 dry ground, 1 the middle of the water.
   *
   * The stream network is RIDGED noise — the ridges of `1 - |n|` form long
   * connected lines rather than blobs, which is what makes this read as a
   * catchment and not as scattered puddles. A second noise warps the sample
   * position first, so the lines meander instead of running straight.
   *
   * Ponds are a separate, rounder field, and where one overlaps a stream the
   * stream simply widens into it. That is why there is one function and not
   * two: a pond on a creek is a pond on a creek, and it needs no special case.
   *
   * @param {number} x @param {number} z @param {number} inland
   * @returns {{mask: number, pond: number}}
   */
  function channelAt(x, z, inland) {
    const reach = smoothstep(CHANNEL.inlandStart, CHANNEL.inlandFull, inland);
    if (reach <= 0.001) return { mask: 0, pond: 0 };

    // Domain warp: without it the ridges are smooth arcs and read as contour
    // lines on a map rather than as water finding its way down.
    const wx = x + nStreamWarp(x * 0.010, z * 0.010) * 22;
    const wz = z + nStreamWarp(x * 0.010 + 5.3, z * 0.010 + 5.3) * 22;

    const ridge = 1 - Math.abs(nStream(wx * 0.0042, wz * 0.0042));
    const stream = smoothstep(1 - CHANNEL.band, 1, ridge);

    const p = nPond(x * 0.0075 + 11.1, z * 0.0075 + 11.1);
    // Ponds only where a stream already runs, so they sit ON the network.
    const pondField = smoothstep(0.58, 0.82, p) * smoothstep(1 - CHANNEL.pondBand, 1, ridge);

    return {
      mask: Math.min(1, Math.max(stream, pondField)) * reach,
      pond: pondField * reach,
    };
  }

  /**
   * Ground elevation ignoring fresh water. The channel carve is subtracted from
   * this, and the water surface is placed relative to it, so both agree.
   * @param {number} x @param {number} z
   */
  function baseHeightAt(x, z) {
    return profile(x, z, inlandAt(x, z));
  }

  /**
   * The fresh-water surface. Defined EVERYWHERE inland, sitting under the
   * ground where there is no channel so the ground hides it.
   * @param {number} x @param {number} z
   */
  function freshSurfaceAt(x, z) {
    const inland = inlandAt(x, z);
    const { mask } = channelAt(x, z, inland);
    const base = profile(x, z, inland);
    // The STREAM carve only, never the pond's. Following the pond carve down
    // as well made the surface drop exactly as fast as the bed, so a pond was
    // a deeper trench holding the same 34cm of water as the creek — deeper to
    // dig and no deeper to stand in. Holding the surface at the creek's level
    // is what makes a pond a pond.
    return base - CHANNEL.hide - (CHANNEL.carve - CHANNEL.hide - CHANNEL.depth) * mask;
  }

  /**
   * The surface of whatever water is at this position — the sea near the
   * shore, a stream or pond inland — or -Infinity where there is none.
   * @param {number} x @param {number} z
   */
  function waterSurfaceAt(x, z) {
    const inland = inlandAt(x, z);
    if (inland < 12) return SEA_LEVEL;
    const { mask } = channelAt(x, z, inland);
    if (mask < 0.02) return -Infinity;
    return freshSurfaceAt(x, z);
  }

  /**
   * Is there running or standing water within `r` metres?
   *
   * Sampled on a cross rather than a disc — five points is enough to catch a
   * channel a few metres wide, and this is called once per generated object.
   * @param {number} x @param {number} z @param {number} [r]
   */
  function nearWaterAt(x, z, r = 4) {
    const pts = [[0, 0], [r, 0], [-r, 0], [0, r], [0, -r], [r * 0.7, r * 0.7], [-r * 0.7, -r * 0.7]];
    for (const [dx, dz] of pts) {
      const px = x + dx;
      const pz = z + dz;
      const inland = inlandAt(px, pz);
      if (inland < 12) return true; // the beach itself counts
      if (channelAt(px, pz, inland).mask > 0.15) return true;
    }
    return false;
  }

  /** How deep the water is here, 0 on dry land. */
  function waterDepthAt(x, z) {
    const s = waterSurfaceAt(x, z);
    if (s === -Infinity) return 0;
    return Math.max(0, s - heightAt(x, z));
  }

  /**
   * The land, before fresh water is cut into it. Split out of `heightAt` so the
   * water surface can be positioned against the un-carved ground.
   * @param {number} x @param {number} z @param {number} inland
   */
  function profile(x, z, inland) {

    // The main profile: flat wet sand, a dune ridge, then rising forest floor.
    let h = 0;
    h += smoothstep(-14, 46, inland) * 5.2; // the long climb inland
    h += Math.exp(-Math.pow((inland - 21) / 13, 2)) * 2.1; // the dune ridge

    // Rolling relief, stronger inland so the beach stays walkable and readable.
    const relief = smoothstep(0, 40, inland);
    h += nDune(x * 0.017, z * 0.017) * 2.3 * relief;
    h += nDetail(x * 0.061, z * 0.061) * 0.55 * relief;

    // A little texture everywhere so the beach is not a dead plane.
    h += nDetail(x * 0.09, z * 0.09) * 0.13;

    // The seabed drops away past the waterline.
    //
    // Without this the ground seaward sits at roughly zero plus a little noise,
    // so it straddles sea level and the water plane shows through it in strips.
    // The result was a horizon full of tidal puddles that read as a rendering
    // fault rather than as an ocean. The drop is gentle for the first few
    // metres, which is what leaves a strip of wet sand at the edge.
    const submersion = smoothstep(0, -22, inland);
    h -= submersion * 5.0;
    // Damp the surface texture underwater so nothing pokes back through.
    h -= Math.abs(nDetail(x * 0.09, z * 0.09)) * 0.13 * submersion;

    // Occasional rocky outcrops, well inland only.
    const rock = nRock(x * 0.021, z * 0.021);
    if (rock > 0.62) h += (rock - 0.62) * 9 * smoothstep(10, 34, inland);

    // Keep dry land dry.
    //
    // The relief noise dipped below sea level in patches well up the beach, and
    // because the sea is drawn as one big plane those dips punched through it as
    // teal puddles scattered across the sand. It read as a rendering fault
    // rather than as terrain. Above the waterline the ground is floored just
    // clear of the sea, easing in over the first few metres inland so the actual
    // shoreline still meets the water properly.
    const dryness = smoothstep(1.5, 9, inland);
    if (dryness > 0) {
      const floor = 0.22 * dryness;
      if (h < floor) h = floor + (h - floor) * (1 - dryness);
    }

    return h;
  }

  /**
   * Ground elevation in metres at a world position. The single source of truth,
   * used by the renderer, the player controller and the tests alike.
   * @param {number} x @param {number} z
   */
  function heightAt(x, z) {
    const inland = inlandAt(x, z);
    const h = profile(x, z, inland);
    const { mask, pond } = channelAt(x, z, inland);
    if (mask <= 0) return h;
    // Cut the bed. Deeper where a pond has widened the channel, so still water
    // reads as still water and not as a wide part of the creek.
    const carve = CHANNEL.carve + (CHANNEL.pondCarve - CHANNEL.carve) * pond;
    return h - carve * mask;
  }

  /**
   * 0 is open beach, 1 is closed forest, and the space between is the dune
   * scrub where both sets of objects can appear. Continuous by construction so
   * there is never a hard biome line.
   * @param {number} x @param {number} z
   */
  function forestnessAt(x, z) {
    // A noise wobble on the inland distance so the treeline wanders instead of
    // following the shoreline at a constant offset.
    const wobble = nDune(x * 0.011, z * 0.011) * 7;
    return smoothstep(FOREST_START, FOREST_FULL, inlandAt(x, z) + wobble);
  }

  /**
   * Approximate surface steepness, 0 flat to 1 cliff. Used to keep objects off
   * faces they would visibly float on, and later to keep portals off slopes.
   * @param {number} x @param {number} z
   */
  function slopeAt(x, z) {
    const d = 0.9;
    const dx = (heightAt(x + d, z) - heightAt(x - d, z)) / (2 * d);
    const dz = (heightAt(x, z + d) - heightAt(x, z - d)) / (2 * d);
    return Math.min(1, Math.hypot(dx, dz));
  }

  /**
   * Underwater, so nothing should spawn here.
   *
   * Fresh water counts. Before it did, collectibles and whole trees generated
   * happily in the middle of a stream, because "submerged" only ever meant
   * "below sea level" and a creek sits four metres above it.
   */
  function isSubmerged(x, z) {
    const inland = inlandAt(x, z);
    if (inland < 12) return heightAt(x, z) < SEA_LEVEL - 0.05;
    return waterDepthAt(x, z) > 0.05;
  }

  /**
   * The raw outcrop field, before the inland gate.
   *
   * `profile` multiplies the rock term by smoothstep(10, 34, inland), so at the
   * waterline the field contributes exactly nothing to height — there is no
   * rock to read at the shore. Cryptid siting wants the field itself: the
   * grotto goes where the rock WOULD be if the sea were not on top of it, and
   * the visible rocks there are dressing, not terrain. Reading the noise
   * changes no height, so the world hash cannot move.
   * @param {number} x @param {number} z
   */
  function rockAt(x, z) {
    return nRock(x * 0.021, z * 0.021);
  }

  return {
    /**
     * Whether this world has a sea at all. Elsewhere is built with the
     * shoreline slid `inlandOffset` seaward, and the sea rule (`inlandAt <
     * 12` is a hard wall above sea level) must never apply there: the
     * dressing hides the plane, so the rule was an invisible wall over a pit
     * for a lost wanderer who walked far enough.
     */
    hasSea: inlandOffset <= 0,
    heightAt,
    baseHeightAt,
    rockAt,
    forestnessAt,
    slopeAt,
    isSubmerged,
    inlandAt,
    channelAt,
    freshSurfaceAt,
    waterSurfaceAt,
    waterDepthAt,
    nearWaterAt,
    SEA_LEVEL,
    CHANNEL,
  };
}
