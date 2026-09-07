// The cheapest signal available: generate the world as pure logic, with no
// browser and no display, and print a hash of it. Any unintended change to
// generation shows up as a changed sha256 immediately.
//
//   node agent/dump-world.mjs [seed] [radius] [--world elsewhere]
//
// The hash covers chunk output only. Authored objects — the cryptid finds,
// elsewhere's hand-placed Epics — are not chunk output, so they cannot move
// it; the cryptid sites and the return door for the default seed are printed
// beside it so a change to THEM is visible too, and `--world elsewhere` hashes
// the other world's chunks under the same seed.

import { createHash } from 'node:crypto';
import { makeWorld, CHUNK_SIZE } from '../src/worldgen/chunk.js';
import { makeScenery } from '../src/worldgen/scenery.js';
import { findCryptidSites } from '../src/worldgen/cryptids.js';
import { makeElsewhere } from '../src/worldgen/elsewhere.js';
import { placeReturnDoor, doorwayPosition } from '../src/systems/worlds.js';

const args = process.argv.slice(2);
const worldFlag = args.indexOf('--world');
const which = worldFlag >= 0 ? args.splice(worldFlag, 2)[1] : 'home';
const seed = args[0] ?? 'agent-default';
const radius = Number(args[1] ?? 8);

const t0 = performance.now();
const world = which === 'elsewhere' ? makeElsewhere(seed).world : makeWorld(seed);

const objs = [];
for (let cx = -radius; cx <= radius; cx++) {
  for (let cz = -radius; cz <= radius; cz++) objs.push(...world.genChunk(cx, cz));
}
const ms = performance.now() - t0;

// Quantise before hashing so float noise does not churn the hash. BUILD-PLAN
// risk 9: this quantisation is exactly what perturbs geometric invariants, so
// it happens HERE, at the reporting boundary, and never inside the generator.
const canonical = objs.map((o) => [
  o.id, o.itemId, o.tier, o.x.toFixed(3), o.y.toFixed(3), o.z.toFixed(3), o.biome,
]);
const sha256 = createHash('sha256').update(JSON.stringify(canonical)).digest('hex');

const byTier = {};
const byBiome = {};
for (const o of objs) {
  byTier[o.tier] = (byTier[o.tier] ?? 0) + 1;
  byBiome[o.biome] = (byBiome[o.biome] ?? 0) + 1;
}

const chunks = (radius * 2 + 1) ** 2;
const area = chunks * CHUNK_SIZE * CHUNK_SIZE;

// The pinned places for this seed: where the cryptids are, where the arch
// stands, and where the return door would be hidden. Same quantisation.
const home = which === 'elsewhere' ? makeWorld(seed) : world;
const sites = findCryptidSites(home, seed).map((s) => ({
  id: s.id, name: s.name, x: +s.x.toFixed(1), z: +s.z.toFixed(1), fellBack: s.fellBack,
}));
const her = { x: 5, z: 27 };
const doorway = doorwayPosition(her, home);
const other = makeElsewhere(seed);
const door = placeReturnDoor({
  seed,
  entry: { x: doorway.x, z: doorway.z },
  terrain: other.world,
  genScenery: makeScenery(other.world, other.seed).genScenery,
});

console.log(JSON.stringify({
  seed,
  world: which,
  chunks,
  objects: objs.length,
  sha256,
  byTier,
  byBiome,
  areaSqM: area,
  sqMPerObject: Number((area / objs.length).toFixed(1)),
  genMs: Number(ms.toFixed(1)),
  cryptids: sites,
  doorway: { x: +doorway.x.toFixed(1), z: +doorway.z.toFixed(1) },
  returnDoor: { x: +door.x.toFixed(1), z: +door.z.toFixed(1), relaxed: door.relaxed },
}, null, 2));

if (objs.length === 0) {
  console.error('FAIL world generated nothing');
  process.exit(1);
}
