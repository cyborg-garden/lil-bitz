import { makeWorld } from './chunk.js';
import { makeScenery } from './scenery.js';
import { rngFor } from './rng.js';
import ITEMS from '../../data/items.json' with { type: 'json' };
import WORLDS from '../../data/worlds.json' with { type: 'json' };
import T from '../../data/tuning.json' with { type: 'json' };

/**
 * The other world. Same engine, different seed, different dressing.
 *
 * PUBLIC INTERFACE
 *
 *   elsewhereSeed(seed)              `${seed}:elsewhere`
 *
 *   makeElsewhere(seed)              {
 *     seed,                          the suffixed seed
 *     world,                         makeWorld(...) with the sea removed and
 *                                    every object rolling on weights.elsewhere
 *     scenery,                       makeScenery(world, seed) for the trees
 *     dressing,                      data/worlds.json `elsewhere`: sky, fog,
 *                                    tints, hideSea. Feed it to
 *                                    systems/worlds.js applyPalette().
 *   }
 *   PALETTES                         data/worlds.json, both worlds.
 *
 *   elsewhereFinds(seed, entry, terrain)
 *                                    3–5 tier-5 objects around `entry`, the
 *                                    same plain shape as a delivered Epic.
 *                                    Integration concatenates them into
 *                                    activeObjects() and pins each with
 *                                    offers.force(id, {tier, itemId}).
 *                                    Ids are stable ('elsewhere:<n>'), so
 *                                    kete's `taken` set dedupes them for free.
 *
 * WHY THE SEA IS AN OFFSET. `inlandAt < 12` is baked into six terrain rules,
 * not one. Hiding the water plane would leave a five-metre pit the player
 * cannot enter. Sliding the shoreline `inlandOffset` seaward puts the entire
 * play window (`playWindowMetres` square) inland, so the sea never exists
 * there. And past the window the world says so: `hasSea` is false on this
 * terrain, so main.js `walkable` never applies the sea rule to it, however
 * far a lost player walks.
 *
 * WHY TIER 5 IS AUTHORED. DECISIONS: Epic is not on any weight table, and the
 * discernment payoff has no entry for 5. Elsewhere's Epics are placed here and
 * pinned, on the same path as cryptid finds. The weight table only reaches 4.
 */

const E = T.worlds.elsewhere;

/** @param {string} seed */
export function elsewhereSeed(seed) {
  return `${seed}:elsewhere`;
}

/** @param {string} seed the HOME seed */
export function makeElsewhere(seed) {
  const s = elsewhereSeed(seed);
  const world = makeWorld(s, { inlandOffset: E.inlandOffset, biomeKey: 'elsewhere' });
  const scenery = makeScenery(world, s);
  return { seed: s, world, scenery, dressing: WORLDS.elsewhere };
}

const TIER5 = ITEMS.items.filter((i) => i.tier === 5 && i.biome === 'any');

/**
 * @param {string} seed the HOME seed
 * @param {{x: number, z: number}} entry
 * @param {{heightAt: Function, slopeAt: Function, isSubmerged: Function, waterDepthAt: Function}} terrain
 *   the ELSEWHERE terrain (makeElsewhere(seed).world)
 */
export function elsewhereFinds(seed, entry, terrain) {
  const rng = rngFor(seed, 'elsewhere', 'finds');
  const count = E.findsMin + Math.floor(rng() * (E.findsMax - E.findsMin + 1));
  const out = [];
  // Spread around the compass rather than rolled independently, so three finds
  // cannot all land behind you: whichever way you walk from the entry, one is
  // out there.
  const slice = (Math.PI * 2) / count;
  for (let n = 0; n < count; n++) {
    let placed = null;
    for (let attempt = 0; attempt < E.findsAttempts && !placed; attempt++) {
      const a = slice * n + rng() * slice;
      const d = E.findsRadiusMin + rng() * (E.findsRadiusMax - E.findsRadiusMin);
      const x = entry.x + Math.sin(a) * d;
      const z = entry.z + Math.cos(a) * d;
      if (terrain.isSubmerged(x, z)) continue;
      if (terrain.waterDepthAt(x, z) >= E.findsMaxWaterDepth) continue;
      if (terrain.slopeAt(x, z) > T.epicSiting.maxSlope) continue;
      placed = { x, z };
    }
    // Never fewer than promised: a find that could not be sited sits close and
    // straight out, dry or not — the same "deferred, never cancelled" rule.
    if (!placed) placed = { x: entry.x + Math.sin(slice * n) * E.findsRadiusMin, z: entry.z + Math.cos(slice * n) * E.findsRadiusMin };
    const item = TIER5[Math.floor(rng() * TIER5.length)];
    out.push({
      id: `elsewhere:${n}`,
      itemId: item.id,
      tier: 5,
      x: placed.x,
      y: terrain.heightAt(placed.x, placed.z),
      z: placed.z,
      rot: rng() * Math.PI * 2,
      biome: 'elsewhere',
      nearWater: false,
      tierRoll: 0,
      itemRoll: 0,
      isAuthored: true,
    });
  }
  return out;
}

export const PALETTES = WORLDS;
export const ELSEWHERE_TUNING = E;
