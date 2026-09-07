import { CHUNK_SIZE, scatterChunk } from './scatter.js';
import { makeTerrain } from './terrain.js';
import { rngFor } from './rng.js';
import ITEMS from '../../data/items.json' with { type: 'json' };

export { CHUNK_SIZE };

/**
 * Minimum spacing between collectibles, metres.
 *
 * Tuned to BUILD-PLAN 5.1: one item per 80 m² walkable, which with a 1.8m
 * pickup radius at 2.2 m/s gives the target of ~6 offers per minute. Blue-noise
 * density runs near 1/(0.7 R^2), so 80 m² wants R around 5.4. At the earlier
 * 3.2 the world produced 28.8 m² per object, or 16 offers a minute, which is
 * loot soup rather than beachcombing.
 *
 * This governs COLLECTIBLES only. Scenery is a separate, denser layer.
 */
const MIN_DIST = 5.4;
/** Objects on slopes steeper than this are dropped; they read as floating. */
const MAX_SLOPE = 0.62;

/**
 * Which chunk pools an item belongs in. `any` goes everywhere; forest items
 * also grow in elsewhere ("plus normal forest items"); `granted` and
 * `authored` match no pool at all, so a tier 6 or a hand-placed find can only
 * exist by being handed over or pinned. Beach and forest pools are unchanged by
 * the elsewhere entries, which is what keeps the home hash where it was.
 * @param {{biome: string}} it
 */
function poolsFor(it) {
  if (it.biome === 'any') return ['beach', 'forest', 'elsewhere'];
  if (it.biome === 'forest') return ['forest', 'elsewhere'];
  if (it.biome === 'granted' || it.biome === 'authored') return [];
  return [it.biome];
}

const BY_TIER_BIOME = new Map();
for (const it of ITEMS.items) {
  for (const b of poolsFor(it)) {
    const key = `${it.tier}:${b}`;
    if (!BY_TIER_BIOME.has(key)) BY_TIER_BIOME.set(key, []);
    BY_TIER_BIOME.get(key).push(it);
  }
}

/** Items that want water nearby, by tier. See the `near` field in items.json. */
const BY_NEAR_WATER = new Map();
for (const it of ITEMS.items) {
  if (it.near !== 'water') continue;
  if (!BY_NEAR_WATER.has(it.tier)) BY_NEAR_WATER.set(it.tier, []);
  BY_NEAR_WATER.get(it.tier).push(it);
}

const TIER_META = new Map(ITEMS.tiers.map((t) => [t.tier, t]));

/**
 * Inverse-CDF tier lookup: a stable roll in [0,1) against a weight table.
 *
 * Using inverse CDF rather than a fresh random draw is what makes discernment
 * coherent. The roll is fixed per object; raising k reshapes the table under
 * it, so an object that was going to be a Keeper becomes a Glimmer. It never
 * becomes an unrelated random thing.
 *
 * @param {number} roll 0..1
 * @param {Record<string, number>} weights
 * @returns {1|2|3|4}
 */
export function resolveTier(roll, weights) {
  const keys = Object.keys(weights);
  let total = 0;
  for (const k of keys) total += weights[k];
  let r = roll * total;
  for (const k of keys) {
    r -= weights[k];
    if (r <= 0) return Number(k);
  }
  return Number(keys[keys.length - 1]);
}

/**
 * Which concrete item a tier+biome slot holds, given the object's stable roll.
 *
 * `nearWater` widens the pool. Pounamu comes out of West Coast rivers and the
 * beaches below them, so a forest point standing in a creek bed can turn one
 * up even though the item's biome is beach. Anything without a `near` field is
 * unaffected.
 *
 * @param {number} itemRoll @param {number} tier @param {'beach'|'forest'|'elsewhere'} biome
 * @param {boolean} [nearWater]
 */
export function resolveItem(itemRoll, tier, biome, nearWater = false) {
  let pool = BY_TIER_BIOME.get(`${tier}:${biome}`) ?? [];
  if (nearWater) {
    const riverbed = BY_NEAR_WATER.get(tier) ?? [];
    if (riverbed.length) {
      pool = pool.concat(riverbed.filter((i) => !pool.includes(i)));
    }
  }
  if (pool.length === 0) return null;
  return pool[Math.min(pool.length - 1, Math.floor(itemRoll * pool.length))];
}

/**
 * A generated object. Plain JSON, structured-cloneable, no three types, so
 * chunk generation can move into a Web Worker later without touching this file.
 *
 * @typedef {Object} WorldObject
 * @property {string} id      stable across regeneration of the same chunk
 * @property {string} itemId  key into data/items.json
 * @property {1|2|3|4|5} tier
 * @property {number} x
 * @property {number} y       ground height at (x, z)
 * @property {number} z
 * @property {number} rot     yaw in radians
 * @property {'beach'|'forest'|'elsewhere'} biome
 */

/**
 * @param {string} seed
 * @param {{inlandOffset?: number, biomeKey?: 'home'|'elsewhere'}} [opts]
 *   `inlandOffset` is forwarded to the terrain (see makeTerrain). `biomeKey`
 *   'elsewhere' makes every emitted object roll on `weights.elsewhere` and
 *   carry `biome: 'elsewhere'`, so the offer book reads the right table when
 *   it reveals one. Home passes nothing; its output is byte-identical to before.
 */
export function makeWorld(seed, opts = {}) {
  const terrain = makeTerrain(seed, opts);
  const biomeKey = opts.biomeKey ?? 'home';
  // Ids are world-scoped. The kete's taken set, the offer book's resolved map
  // and its refusals are all keyed by id, and chunk (0,1) is where she stands
  // at home AND where the elsewhere entry lands: with bare `cx:cz:i` ids the
  // two worlds shared eleven of twelve, so a pebble picked up on the beach made
  // its twin in elsewhere invisible, and the authored first Wonder there
  // rewrote a home object's identity. Home's prefix is empty on purpose, so
  // every home id and the home hash stay byte-identical.
  const idPrefix = biomeKey === 'elsewhere' ? 'elsewhere:' : '';

  /**
   * Generate one chunk. Pure: same (seed, cx, cz) always gives the same array,
   * in the same order, regardless of what else has been generated.
   *
   * @param {number} cx @param {number} cz
   * @returns {WorldObject[]}
   */
  function genChunk(cx, cz) {
    const pts = scatterChunk(seed, cx, cz, MIN_DIST);
    /** @type {WorldObject[]} */
    const out = [];

    for (let i = 0; i < pts.length; i++) {
      const p = pts[i];

      if (terrain.isSubmerged(p.x, p.z)) continue;
      if (terrain.slopeAt(p.x, p.z) > MAX_SLOPE) continue;

      const forestness = terrain.forestnessAt(p.x, p.z);
      const rng = rngFor(seed, 'obj', cx, cz, i);

      // The blend band is genuinely mixed: near forestness 0.5 either biome's
      // objects can appear, which is what stops the boundary reading as a line.
      // Elsewhere still spends the roll, so the rolls that follow it keep
      // their positions and a chunk there is as stable as a chunk at home.
      const homeBiome = rng() < forestness ? 'forest' : 'beach';
      const biome = biomeKey === 'elsewhere' ? 'elsewhere' : homeBiome;

      // WHERE an object is, is fixed by the seed. WHAT it is, is not.
      //
      // Discernment has to change what the world offers, but chunk generation
      // has to stay deterministic or the tests and the world hash mean nothing.
      // So generation emits a stable roll in [0,1) and the offer system turns
      // that roll into a tier against the CURRENT weights, the first time the
      // player comes near. Same roll plus a higher k lands on a better tier,
      // and re-walking old ground cannot re-roll what is already resolved.
      const tierRoll = rng();
      const itemRoll = rng();

      const baseTier = resolveTier(tierRoll, ITEMS.weights[biome]);
      const pool = BY_TIER_BIOME.get(`${baseTier}:${biome}`) ?? [];
      if (pool.length === 0) continue;

      // Whether this spot is a riverbed or a beach, decided once at generation
      // and carried on the object, so the offer book does not have to sample
      // the terrain again when it resolves what the thing turns out to be.
      const nearWater = terrain.nearWaterAt(p.x, p.z);

      out.push({
        id: `${idPrefix}${cx}:${cz}:${i}`,
        nearWater,
        // baseTier / itemId are the k=0 resolution. They keep the world dump
        // hashable and give the renderer something to draw before an object has
        // ever been offered. The offer book overrides both on reveal.
        itemId: pool[Math.floor(itemRoll * pool.length)].id,
        tier: baseTier,
        tierRoll,
        itemRoll,
        x: p.x,
        y: terrain.heightAt(p.x, p.z),
        z: p.z,
        rot: rng() * Math.PI * 2,
        biome,
      });
    }

    return out;
  }

  return { seed, biomeKey, genChunk, ...terrain, CHUNK_SIZE };
}

/** @param {number} n */
export function chunkIndex(n) {
  return Math.floor(n / CHUNK_SIZE);
}

export function tierMeta(tier) {
  return TIER_META.get(tier);
}

export function itemDef(itemId) {
  return ITEMS.items.find((i) => i.id === itemId);
}

export const ITEM_DATA = ITEMS;
