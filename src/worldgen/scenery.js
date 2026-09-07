import { createNoise2D } from 'simplex-noise';
import alea from 'alea';
import { scatterChunk } from './scatter.js';
import { rngFor } from './rng.js';
import { SPECIES } from '../render/treeGeometry.js';

/**
 * Scenery: trees, scrub, rocks and driftwood. Non-interactive, denser than
 * collectibles, and generated on its own scatter key so changing scenery
 * density never moves a single collectible.
 *
 * Species, not "tree". The forest used to be one cone shape repeated, which
 * read as pine — a wilding conifer, and a pest here. What grows now is a set of
 * forms abstracted from native trees, and which one grows where is decided by
 * two fields rather than by a per-tree dice roll:
 *
 *   ZONE     how far inland you are. Pōhutukawa are a coastal tree and belong
 *            in the dune band; the tall canopy species belong in deep bush.
 *   GROVE    a low-frequency noise field that biases the pick. Trees of a kind
 *            grow together in real bush, and a uniform random pick per tree
 *            gives an evenly-mixed forest that reads as noise rather than as a
 *            place. The grove field is what makes a stand of nīkau.
 *
 * @typedef {Object} SceneryItem
 * @property {'tree'|'scrub'|'rock'|'driftwood'} kind
 * @property {string} [species] which tree, when kind is 'tree'
 * @property {number} x @property {number} y @property {number} z
 * @property {number} rot @property {number} scale
 */

const SCENERY_MIN_DIST = 3.6;

/** Weight of each species by zone. Rows are how-far-inland, 0 open to 1 bush. */
const ZONE_WEIGHTS = {
  //             coastal/dune  mid          deep bush
  // Pōhutukawa was 1.45 here and took 83% of the dune band, which is one tree
  // repeated rather than a coast. It still leads; it no longer crowds out
  // everything that grows beside it.
  pohutukawa: [1.10, 0.62, 0.08],
  manuka: [1.00, 0.66, 0.20],
  ti_kouka: [0.86, 0.82, 0.30],
  ponga: [0.05, 0.60, 1.00],
  nikau: [0.02, 0.45, 1.05],
  rimu: [0.00, 0.18, 0.80],
};

const SPECIES_LIST = Object.keys(ZONE_WEIGHTS);

/** @param {number} e0 @param {number} e1 @param {number} x */
function smoothstep(e0, e1, x) {
  const t = Math.min(1, Math.max(0, (x - e0) / (e1 - e0)));
  return t * t * (3 - 2 * t);
}

/**
 * @param {{heightAt: Function, forestnessAt: Function, slopeAt: Function, isSubmerged: Function, waterSurfaceAt?: Function}} terrain
 * @param {string} seed
 */
export function makeScenery(terrain, seed, { clearings = [] } = {}) {
  /**
   * Is this point inside a clearing? Clearings are the cryptids' own ground.
   * The kelpī sits at an estuary, and an estuary is open — mudflat, not
   * bush — and on seed beta the bush there was wall-to-wall pōhutukawa at
   * exactly the height a granted portal's mouth hangs, so no landing could
   * be seen from anywhere. Trees and scrub stay out; rocks and driftwood do
   * not, because a clearing is not a lawn.
   * @param {number} x @param {number} z
   */
  const inClearing = (x, z) => {
    for (const c of clearings) {
      if ((x - c.x) ** 2 + (z - c.z) ** 2 < c.r * c.r) return true;
    }
    return false;
  };
  // One grove field per species, all sampled at the same coarse scale, so the
  // winner changes slowly across the ground and stands form naturally.
  const groveNoise = SPECIES_LIST.map((_, i) => createNoise2D(alea(`${seed}:grove:${i}`)));

  /**
   * Which tree grows here. Zone sets what is possible; the grove field decides
   * between the possibilities.
   *
   * The zone is keyed to DISTANCE INLAND, not to forestness, and that is not a
   * detail. Tree density is `forestness * 0.72`, so trees only exist where
   * forestness is already high — which meant a species picker keyed to
   * forestness only ever saw the deep-bush end of its own table, and a
   * pōhutukawa weighted 1.45 at the coast came out at 3% of the dune band.
   * Distance inland is unbiased by where trees happen to spawn, and it is also
   * the honest variable: pōhutukawa is a coastal tree because it grows near the
   * sea, not because the canopy there is thin.
   *
   * @param {number} x @param {number} z @param {number} inland metres inland
   * @param {() => number} rng
   */
  function pickSpecies(x, z, inland, rng) {
    // Three zone stops: coast (0), mid (0.5), deep bush (1).
    const t = smoothstep(8, 90, inland) * 2;
    const lo = Math.min(1, Math.floor(t));
    const frac = t - lo;

    let best = null;
    let bestScore = -Infinity;
    for (let i = 0; i < SPECIES_LIST.length; i++) {
      const name = SPECIES_LIST[i];
      const w = ZONE_WEIGHTS[name];
      const zoneWeight = w[lo] + (w[Math.min(2, lo + 1)] - w[lo]) * frac;
      if (zoneWeight <= 0.001) continue;
      // Grove field, remapped to 0..1, times the zone suitability, plus a small
      // random jitter so a grove has stragglers of other species in it.
      const grove = (groveNoise[i](x * 0.0085, z * 0.0085) + 1) * 0.5;
      const score = zoneWeight * (0.35 + grove) + rng() * 0.22;
      if (score > bestScore) { bestScore = score; best = name; }
    }
    return best ?? 'manuka';
  }

  /**
   * @param {number} cx @param {number} cz
   * @returns {SceneryItem[]}
   */
  function genScenery(cx, cz) {
    const pts = scatterChunk(`${seed}:scenery`, cx, cz, SCENERY_MIN_DIST, 200);
    /** @type {SceneryItem[]} */
    const out = [];

    for (let i = 0; i < pts.length; i++) {
      const p = pts[i];
      if (terrain.isSubmerged(p.x, p.z)) continue;
      if (terrain.slopeAt(p.x, p.z) > 0.75) continue;

      const f = terrain.forestnessAt(p.x, p.z);
      const rng = rngFor(seed, 'scen', cx, cz, i);
      const roll = rng();

      // Tree cover tracks forestness, so the treeline emerges from the same
      // field that drives the biome blend rather than from a second boundary.
      let kind;
      if (roll < f * 0.72) kind = 'tree';
      else if (roll < f * 0.72 + 0.18) kind = f > 0.35 ? 'scrub' : 'rock';
      else if (f < 0.25 && roll > 0.93) kind = 'driftwood';
      else continue;

      // Decided AFTER the roll, so a clearing removes what would have grown
      // and moves nothing: every point outside it is exactly what it was.
      if ((kind === 'tree' || kind === 'scrub') && inClearing(p.x, p.z)) continue;

      if (kind === 'tree') {
        const species = pickSpecies(p.x, p.z, terrain.inlandAt(p.x, p.z), rng);
        const s = SPECIES[species];
        // Bigger trees stand back from open ground, so the treeline is not a
        // wall of full-height canopy starting at the dune.
        const room = smoothstep(0.15, 0.9, f);
        const height = s.min + rng() * (s.max - s.min) * (0.45 + 0.55 * room);
        out.push({
          kind,
          species,
          x: p.x,
          y: terrain.heightAt(p.x, p.z),
          z: p.z,
          rot: rng() * Math.PI * 2,
          scale: height,
        });
        continue;
      }

      const scale =
        kind === 'scrub' ? 0.7 + rng() * 0.7
          : kind === 'driftwood' ? 0.8 + rng() * 0.9
            : 0.45 + rng() * 0.75;

      out.push({
        kind,
        x: p.x,
        y: terrain.heightAt(p.x, p.z),
        z: p.z,
        rot: rng() * Math.PI * 2,
        scale,
      });
    }

    return out;
  }

  return { genScenery, pickSpecies };
}

export { SPECIES_LIST };
