import * as THREE from 'three';
import './ui/hud.css';
import './ui/juice.css';
import './ui/title.css';

import { makeWorld, chunkIndex, CHUNK_SIZE } from './worldgen/chunk.js';
import { makeClock } from './game/clock.js';
import { makeInput } from './game/input.js';
import { makeTouchControls } from './game/touch.js';
import { makeKete } from './game/kete.js';
import { makeTerrainMesh, makeWater, makeFreshWater } from './render/terrainMesh.js';
import { makeProps, makeHighlight } from './render/props.js';
import { loadSpriteTexture, makeBillboard, makeBlobShadow, faceCamera } from './render/billboard.js';
import CHARS from '../public/art/chars/manifest.json' with { type: 'json' };
import { makeScenery } from './worldgen/scenery.js';
import { makeSceneryMesh } from './render/sceneryMesh.js';
import { makeHud } from './ui/hud.js';
import { makeGivePanel } from './ui/givePanel.js';
import { makeTitleScreen } from './ui/titleScreen.js';
import { makeSaveSlot } from './game/save.js';
import { rngFor } from './worldgen/rng.js';
import { makePickupArc } from './ui/pickupArc.js';
import { makeAudio } from './game/audio.js';
import { makeDiscernment } from './systems/discernment.js';
import { makeOfferBook } from './systems/offers.js';
import { shouldTriggerEpic, tickFor, countArmed, firstEpicOwed, epicObjectId } from './systems/epic.js';
import { makeEpicSequence, pickVoLine } from './systems/epicSequence.js';
import { makePortal } from './render/portal.js';
import { siteOrDefer, fallbackSite, shouldRelocate, SITING_TUNING } from './systems/siting.js';
import { offerTo, recipientInReach, recipientDef, GIVING_TUNING } from './systems/giving.js';
import { tierMeta, ITEM_DATA, resolveItem } from './worldgen/chunk.js';
import {
  findCryptidSites, cryptidFinds, cryptidRecipients, cryptidGrantFor,
  sitesByDistance, makeLeftGift, pickLanding, kelpiiStanding, CRYPTID_DATA,
} from './worldgen/cryptids.js';
import { makeCryptidRender } from './render/cryptids.js';
import { progressionFrom, pendingMilestones, milestoneLine, pityScale, PROGRESSION_TUNING } from './systems/progression.js';
import { makeKaru, KARU_DATA } from './systems/karu.js';
import { makeKaruMesh } from './render/karu.js';
import {
  makeWorlds, doorwayPosition, placeReturnDoor, relocateReturnDoor, placeEntry,
  doorReached, doorCue, worldLabel, applyPalette, WORLDS_TUNING,
} from './systems/worlds.js';
import { makeElsewhere, elsewhereFinds, PALETTES, ELSEWHERE_TUNING } from './worldgen/elsewhere.js';
import { makeDoorway } from './render/doorway.js';
import { makeWorldFade } from './ui/worldFade.js';
import TUNING from '../data/tuning.json' with { type: 'json' };

const WALK_SPEED = 2.2;   // BUILD-PLAN 5.1
const PICKUP_RADIUS = 1.8;
const CAMERA_PITCH = 25 * (Math.PI / 180); // fixed pitch; billboards need it
/**
 * The pitch the camera eases to while an Epic is open.
 *
 * Not a stylistic choice. At the resting 25 degrees the camera sits 5.5m up and
 * looks down, which puts the HORIZON itself at the very top edge of the frame —
 * measurably, NDC y of about 0.97. The portal mouth hangs 4.5m in the air (0.8s
 * of fall at 14 m/s², both of which BUILD-PLAN fixes), so it is at roughly eye
 * height and therefore always just off screen. Nothing at or above the camera's
 * own height can be seen from this angle.
 *
 * Lifting the look target instead was tried first and cannot work: to bring the
 * portal down far enough it pushes the player off the bottom of the screen, and
 * the player must stay on screen. Flattening the pitch rotates the whole frame
 * up and keeps them centred. Shallower is also safe for the billboards, whose
 * constraint is about STEEP angles collapsing them to a line.
 */
const CAMERA_PITCH_EPIC = 6 * (Math.PI / 180);
const CAMERA_DIST = 9.0;
const VIEW_CHUNKS = 3;    // chunk radius kept resident around the player
/** How deep you can wade. Streams are crossable; ponds are not. */
const WADE_DEPTH = 0.5;

/**
 * Can the player stand here?
 *
 * The sea is a hard edge; fresh water is only a wall once it is deep. Declared
 * at module scope because the movement step, the camera and the debug surface
 * all need the same answer.
 * @param {any} w the world @param {number} x @param {number} z
 */
function walkable(w, x, z) {
  // A world built without a sea (elsewhere) never gets the sea rule: its
  // water plane is hidden, so the rule was an invisible wall over a pit.
  if (w.hasSea && w.inlandAt(x, z) < 12) return w.heightAt(x, z) > w.SEA_LEVEL + 0.12;
  return w.waterDepthAt(x, z) < WADE_DEPTH;
}
/** The same answer for whichever world is current; handed to Karu each frame. */
const walkableHere = (x, z) => walkable(world, x, z);
/** No water at all here. Karu leads onto this first, and through wade-depth water only when it must. */
const dryHere = (x, z) => world.waterDepthAt(x, z) <= 0;

/** The arch's draw args, mutated in place: one object for the life of the scene, not one a frame. */
const archArg = { x: 0, y: 0, z: 0, hold: 0 };

const params = new URLSearchParams(location.search);
let seed = params.get('seed') ?? 'lil-bitz';

// --- scene -----------------------------------------------------------------
const scene = new THREE.Scene();
const SKY = new THREE.Color('#d8cdb4');
scene.background = SKY;
scene.fog = new THREE.Fog(SKY, 45, 130);

// Aspect from the real window, not an assumed 16:9: a portrait phone gets no
// resize event on load, so a hardcoded aspect ships stretched.
const camera = new THREE.PerspectiveCamera(58, window.innerWidth / window.innerHeight, 0.1, 400);

const renderer = new THREE.WebGLRenderer({
  antialias: true,
  preserveDrawingBuffer: true, // required for headless capture of a paused frame
});
// Capped, not native: phones report DPR 3 and pay 9x the pixels. Headless
// capture runs at DPR 1, so agent screenshots keep their stable size.
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;
document.body.appendChild(renderer.domElement);

scene.add(new THREE.HemisphereLight('#fff4dd', '#7d7355', 2.1));
const sun = new THREE.DirectionalLight('#fff0cc', 1.35);
sun.position.set(30, 60, 18);
scene.add(sun);

// --- world -----------------------------------------------------------------
/**
 * Both worlds are built up front and kept: the home beach and elsewhere.
 * Crossing swaps which pair `world`/`scenery` point at and rebuilds the two
 * follow-the-player meshes, exactly what `setSeed` already did for a seed
 * change. The cryptid sites, their finds and the doorway's spot are functions
 * of the HOME terrain and are computed once here, never per frame.
 *
 * @param {string} s the home seed
 */
function buildWorlds(s) {
  const homeWorld = makeWorld(s);
  // The bush before the cryptids: the kelpī's siting refuses a creek mouth
  // where a crown would sit between the lens and the driftwood at the give.
  const sitingScenery = makeScenery(homeWorld, s);
  const sites = findCryptidSites(homeWorld, s, sitingScenery.genScenery);
  // Then the bush AGAIN, with a clearing at each site. Siting only ever
  // refuses ground for crowns, and a clearing only ever removes crowns, so
  // the sites chosen against the full bush are still right in the cleared
  // one; the other order would be circular. An estuary is open ground, and
  // on seed beta the one the kelpī sat in was wall-to-wall pōhutukawa at the
  // exact height a granted portal's mouth hangs.
  const homeScenery = makeScenery(homeWorld, s, {
    clearings: sites.map((c) => ({ x: c.x, z: c.z, r: CRYPTID_DATA.landing.clearingMetres })),
  });
  const finds = cryptidFinds(sites, s, homeWorld);
  // Pin the authored finds so `reveal` never rolls them: same rule as a
  // delivered Epic. Tier 5 is not on any weight table.
  for (const o of finds) offers.force(o.id, { tier: o.tier, itemId: o.itemId });
  const other = makeElsewhere(s);
  return {
    home: { world: homeWorld, scenery: homeScenery, sites, finds, palette: PALETTES.home },
    elsewhere: { world: other.world, scenery: other.scenery, sites: [], finds: [], palette: PALETTES.elsewhere },
  };
}

const offers = makeOfferBook();
let worldsBuilt = buildWorlds(seed);
let world = worldsBuilt.home.world;
let terrain = makeTerrainMesh({
  heightAt: world.heightAt,
  forestnessAt: world.forestnessAt,
  freshSurfaceAt: world.freshSurfaceAt,
});
scene.add(terrain.mesh);

const water = makeWater(world.SEA_LEVEL);
scene.add(water);

// Streams and ponds. A second follow-the-player grid rather than part of the
// sea, because inland water is at whatever height the land is, not at zero.
let fresh = makeFreshWater({ freshSurfaceAt: world.freshSurfaceAt });
scene.add(fresh.mesh);

let scenery = worldsBuilt.home.scenery;
const sceneryMesh = makeSceneryMesh(scene);

const doorway = makeDoorway(scene);
const cryptidRender = makeCryptidRender(scene);
const karuMesh = makeKaruMesh(scene);

const props = makeProps(scene);
const highlight = makeHighlight();
scene.add(highlight);
const portal = makePortal(scene);

// The player, and the NPCs, are Lyss's drawings on camera-facing quads.
//
// The player's sprite is swappable at runtime, because character select happens
// after the world is already built and running behind the title.
let playerId = 'player';
const player = makeBillboard({
  texture: loadSpriteTexture(CHARS.player.png, renderer),
  worldHeight: CHARS.player.worldHeight,
  aspect: CHARS.player.w / CHARS.player.h,
});
scene.add(player);

/** @param {string} id a key in the character manifest */
function setPlayerCharacter(id) {
  const def = CHARS[id];
  if (!def) return false;
  playerId = id;
  player.geometry.dispose();
  const w = def.worldHeight * (def.w / def.h);
  const geo = new THREE.PlaneGeometry(w, def.worldHeight);
  // Pivot at the feet, same as makeBillboard, so the figure stands on the
  // ground rather than half in it.
  geo.translate(0, def.worldHeight / 2, 0);
  player.geometry = geo;
  player.material.map = loadSpriteTexture(def.png, renderer);
  player.material.needsUpdate = true;
  return true;
}

const playerShadow = makeBlobShadow(0.55);
scene.add(playerShadow);

/**
 * Wanderers, including the trinket maker. Still placed at fixed world spots —
 * her proper siting is a later job — but they are now RECIPIENTS, which is the
 * thing milestone 4 is actually for.
 */
const NPC_SPOTS = [
  // "found at the edge of the ngāhere, whispering into a puoro" — her own
  // caption. Moved out of the trees to z=27: at 34 she stood in thick bush and
  // a player walking up to her got a wall of trunk between them and her.
  { id: 'trinket_maker', x: 5, z: 27 },
  { id: 'wanderer_a', x: -26, z: 62 },
  { id: 'wanderer_b', x: 30, z: 96 },
];

const npcs = NPC_SPOTS.map((spot) => {
  const def = CHARS[spot.id];
  const mesh = makeBillboard({
    texture: loadSpriteTexture(def.png, renderer),
    worldHeight: def.worldHeight,
    aspect: def.w / def.h,
  });
  const shadow = makeBlobShadow(0.5);
  scene.add(mesh);
  scene.add(shadow);
  return { ...spot, mesh, shadow, def };
});

const kete = makeKete();
const input = makeInput(window);
const hud = makeHud(document.body);
const givePanel = makeGivePanel(document.body);
const touchControls = makeTouchControls(input, document.body);
const arc = makePickupArc(document.body);
const audio = makeAudio();
const discernment = makeDiscernment();
const epicSeq = makeEpicSequence();
const worldFade = makeWorldFade(document.body);
let worlds = makeWorlds({ seed });
const karu = makeKaru();
const leftGift = makeLeftGift();

// --- state -----------------------------------------------------------------
const state = {
  x: 0,
  z: 8,               // on the beach, a few metres up from the waterline
  yaw: Math.PI,       // facing inland: sea at your back, forest ahead

  tMs: 0,
  /**
   * A SECOND clock, scaled by the Epic sequence's time dilation.
   *
   * Dilation applies to the environment and particles only. The character
   * controller reads `tMs` and keeps running at full speed, because slowing
   * input feels like lag rather than like drama. Two clocks is the cheapest
   * honest way to say that.
   */
  envMs: 0,
  nearest: /** @type {any} */ (null),
  collected: 0,
  // Loot economy
  epicTicks: 0,
  lastEpicAtMs: -1e9,
  epicActive: false,
  /**
   * Two counters, never one. `natural` is the player's Epics: the promised
   * first one is owed while it is 0 and the shortening ladder runs on it. A
   * cryptid's granted tier 6 counts on `granted` only and touches nothing
   * else — one shared count let a grant cancel the first-Epic promise.
   */
  epicCounts: { natural: 0, granted: 0 },
  wonderDry: 0,
  k: 0,
  trail: /** @type {{t: number, x: number, z: number}[]} */ ([]),

  // Epic Find delivery
  /** true between the trigger and the portal actually opening */
  epicPending: false,
  epicTier: 5,
  /** @type {any} the item this delivery will turn out to be */
  epicPendingItem: null,
  epicRetryAtMs: 0,
  epicSiteAttempts: 0,
  epicRelocations: 0,
  epicFellBack: false,
  /** @type {any[]} delivered Epic objects, in the world and not yet collected */
  epicObjects: [],
  /** @type {string[]} lettering used recently, most recent first */
  recentVo: [],

  // Giving
  /** @type {string[]} creatures she has already told you about */
  knownCreatures: [],
  giveLockUntilMs: -1,
  lastReaction: '',

  // Rung 5
  /** @type {string[]} her milestone lines already said, so a save never replays one */
  milestonesSeen: [],
  /**
   * Things to say, in order, each at a time. Her milestone lines and Karu's
   * narration are QUEUED behind whatever is on screen, never stacked on it.
   * @type {{text: string, at: number, ms: number, milestone?: string, then?: () => void}[]}
   */
  sayQueue: [],
  /**
   * Tier-6 grants owed by a cryptid. Deferred, never cancelled: one is armed
   * only when its hold has passed and no other Epic is open or owed. They
   * are in the save, so a tab closed between the gift and the grant loses
   * nothing. `siteId` names the cryptid, so a fallback landing can be chosen
   * for wherever the player is standing when it finally opens.
   * @type {{tier: number, at: number, siteId: string | null}[]}
   */
  owedGrants: [],
  /** the cryptid site a GRANTED delivery falls back beside when siting fails; null = ahead */
  epicGrantSite: /** @type {any} */ (null),
  /** the armed delivery is a cryptid's grant, and whose */
  epicGranted: false,
  epicGrantedBy: /** @type {string | null} */ (null),
  /** her milestones, recounted only when the ledger changes: on a gift, on a load */
  progression: progressionFrom([]),
  /** the refusal line has been said for this approach to a door */
  doorRefusedShown: false,
  /** the kelpī has taken a gift and is driftwood again until its grant is picked up */
  kelpiiDown: false,
  /** the doorway's prompt is held back until her line has finished */
  doorwayPromptAfterMs: 0,
  /** the first thing you meet in elsewhere is authored a Wonder, once */
  elsewhereFirstOfferDone: false,
  /** when the player last moved: the mermaids are only there if you are still */
  lastMovedMs: 0,
  /** epic ticks pass through the pity multiplier; this is the last one used */
  pityMult: 1,
  /** the last line put on screen, on the game clock */
  lastSay: /** @type {{text: string, atMs: number, ms: number} | null} */ (null),

  /** False until the player has come through the title and picked someone. */
  started: false,
};

/** Where the arch stands, by her, on her inland side. Recomputed per seed. */
let doorwayPos = doorwayPosition(NPC_SPOTS[0], worldsBuilt.home.world);

/** @type {any[]} */
let visible = [];
/** @type {any[]} */
let visibleScenery = [];
let loadedKey = '';

function refreshChunks(force = false) {
  const ccx = chunkIndex(state.x);
  const ccz = chunkIndex(state.z);
  const key = `${ccx}:${ccz}`;
  if (!force && key === loadedKey) return;
  loadedKey = key;

  visible = [];
  visibleScenery = [];
  for (let dx = -VIEW_CHUNKS; dx <= VIEW_CHUNKS; dx++) {
    for (let dz = -VIEW_CHUNKS; dz <= VIEW_CHUNKS; dz++) {
      visible.push(...world.genChunk(ccx + dx, ccz + dz));
      visibleScenery.push(...scenery.genScenery(ccx + dx, ccz + dz));
    }
  }
  objectsDirty = true;
}

/**
 * Everything pickable this frame. Delivered Epics live outside the chunk
 * streaming — they are authored, not generated — so they are concatenated here
 * rather than injected into `visible`, which a chunk reload would wipe.
 *
 * Merged once and kept. Home always has authored finds, so a per-frame concat
 * copied the whole resident set — 467 objects on the default seed — sixty
 * times a second for nothing. Anything that changes the set (a chunk load, a
 * delivery, an Epic collected, a world entered) sets `objectsDirty`.
 */
let objectsDirty = true;
/** @type {any[]} */
let mergedObjects = [];
function activeObjects() {
  if (!objectsDirty) return mergedObjects;
  objectsDirty = false;
  // Authored objects — the cryptid finds at home, the hand-placed Epics in
  // elsewhere — live beside the delivered Epics, outside the chunk stream.
  const authored = worldsBuilt[worlds.which].finds;
  mergedObjects = (!state.epicObjects.length && !authored.length)
    ? visible
    : visible.concat(state.epicObjects, authored);
  return mergedObjects;
}

/**
 * The pickable thing under the player. An Epic in reach wins over anything
 * else in reach: a granted tier 6 that lands beside the cryptid's own tier 5
 * must never lose the prompt to it (the landing keeps clear of the finds
 * too; this is the belt to that brace).
 */
function findNearest(objects) {
  let best = null;
  let bestD = PICKUP_RADIUS;
  let bestEpic = null;
  let bestEpicD = PICKUP_RADIUS;
  for (const o of objects) {
    if (kete.has(o.id)) continue;
    const d = Math.hypot(o.x - state.x, o.z - state.z);
    if (d < bestD) { bestD = d; best = o; }
    if (o.isEpic && d < bestEpicD) { bestEpicD = d; bestEpic = o; }
  }
  return bestEpic ?? best;
}

/** Is there room for a portal here — nothing standing inside `r` metres. */
function isClear(x, z, r) {
  const r2 = r * r;
  for (const s of visibleScenery) {
    if (s.kind !== 'tree' && s.kind !== 'scrub') continue;
    const dx = s.x - x;
    const dz = s.z - z;
    if (dx * dx + dz * dz < r2) return false;
  }
  return true;
}

/**
 * A throwaway camera posed exactly as the real one will be at the height of the
 * sequence, used to ask "would the mouth be on screen if we opened it here".
 *
 * Answering with the LIVE camera would be wrong: it is still at its resting
 * pitch when siting runs, and it flattens over the following 900ms. Siting has
 * to test the pose the player will actually be looking through.
 */
const probeCamera = new THREE.PerspectiveCamera(58, 16 / 9, 0.1, 400);
const probeVec = new THREE.Vector3();
const fogCold = new THREE.Color();

function poseProbeCamera() {
  const groundY = world.heightAt(state.x, state.z);
  const back = CAMERA_DIST * Math.cos(CAMERA_PITCH_EPIC);
  const up = CAMERA_DIST * Math.sin(CAMERA_PITCH_EPIC);
  probeCamera.fov = 58 * 0.92; // the 8% dolly-in, at full lean
  probeCamera.aspect = camera.aspect;
  probeCamera.position.set(
    state.x + Math.sin(state.yaw) * back,
    groundY + up + 1.7,
    state.z + Math.cos(state.yaw) * back,
  );
  probeCamera.lookAt(state.x, groundY + 1.35, state.z);
  probeCamera.updateMatrixWorld(true);
  probeCamera.updateProjectionMatrix();
}

/** Drop height of the mouth above the landing point, from the tuning. */
function mouthDrop() {
  const mode = TUNING.epicSequence.modes[
    (state.epicTier ?? 5) >= 6 ? 'escalated' : modeForCount(state.epicCounts.natural)
  ] ?? TUNING.epicSequence.modes.full;
  return 0.5 * TUNING.epicSequence.gravity * mode.fall * mode.fall;
}

function modeForCount(count) {
  for (const rung of TUNING.epicSequence.ladder) if (count <= rung.upTo) return rung.mode;
  return 'quick';
}

/** Would the whole mouth be comfortably inside the frame, opened above here? */
function isInFrame(x, y, z) {
  const cy = y + mouthDrop();
  const check = (h) => {
    probeVec.set(x, h, z).project(probeCamera);
    return probeVec;
  };
  // Headroom, not a bare fit. A mouth whose rim touches the edge of the screen
  // still reads as clipped, and the aperture overshoots to 1.08 on the way open.
  const half = (TUNING.epicSequence.mouthMetres / 2) * 1.12;
  const top = check(cy + half).y;
  const bottom = check(cy - half).y;
  const centreX = check(cy).x;
  if (!(top < 0.82 && bottom > -0.85 && Math.abs(centreX) < 0.5)) return false;
  return !canopyBetween(probeCamera.position, x, cy, z);
}

/**
 * The loose cousin of `isInFrame`: the mouth's centre anywhere on screen and
 * no crown on the line. What a granted landing settles for when nothing in
 * its ring passes the strict test, which at the estuary is usual.
 */
function isVisible(x, y, z) {
  const cy = y + mouthDrop();
  const m = TUNING.epicSiting.visibleMargin;
  probeVec.set(x, cy, z).project(probeCamera);
  if (!(Math.abs(probeVec.x) < m && Math.abs(probeVec.y) < m && probeVec.z < 1)) return false;
  return !canopyBetween(probeCamera.position, x, cy, z);
}

/**
 * The same question for a mouth already placed: is its centre on screen and
 * clear of crowns, through the sequence's own camera pose? Asked of the
 * second mouth, which is offset across the drift from the sited first one
 * and had never been tested: on the default seed it opened behind the
 * pōhutukawa crown beside the kelpī.
 * @param {{x: number, y: number, z: number}} p the mouth's centre
 */
function mouthVisible(p) {
  const m = TUNING.epicSiting.visibleMargin;
  probeVec.set(p.x, p.y, p.z).project(probeCamera);
  if (!(Math.abs(probeVec.x) < m && Math.abs(probeVec.y) < m && probeVec.z < 1)) return false;
  return !canopyBetween(probeCamera.position, p.x, p.y, p.z);
}

/**
 * How far off centre the mouth would sit, 0 at the middle of the frame. The
 * second mouth opens across the drift from the first, so among visible
 * landings the one nearest the middle leaves room for the pair; a hard box
 * instead of this grade left seed beta with no visible landing at all.
 */
function frameOffset(x, y, z) {
  probeVec.set(x, y + mouthDrop(), z).project(probeCamera);
  return Math.abs(probeVec.x);
}

/**
 * Would a tree crown sit between the lens and the mouth?
 *
 * Found in a rendered frame, not in a number: at the kelpī's estuary the
 * granted portal projected to the upper third of the screen — every
 * projection said "in frame" — and the screenshot showed a pōhutukawa canopy
 * where the two mouths were. Line of sight had only ever been tested against
 * the ground. The mouth hangs at exactly crown height, and the flattened Epic
 * camera looks straight through the canopy band to reach it.
 *
 * A tree blocks if its trunk passes within `canopyRadius` of the sight line
 * (horizontally) where that line is inside the crown's vertical band. Trunks
 * below the band are thin and are the clearance rule's job.
 *
 * @param {{x: number, y: number, z: number}} from the lens
 * @param {number} x @param {number} y @param {number} z the mouth
 */
function canopyBetween(from, x, y, z) {
  const C = TUNING.epicSiting;
  const dx = x - from.x;
  const dz = z - from.z;
  const len2 = dx * dx + dz * dz;
  if (len2 < 1e-6) return false;
  for (const s of visibleScenery) {
    if (s.kind !== 'tree') continue;
    // Parameter along the sight line of the tree's nearest point, in XZ.
    const t = ((s.x - from.x) * dx + (s.z - from.z) * dz) / len2;
    if (t <= 0.08 || t >= 1) continue;
    const px = from.x + dx * t;
    const pz = from.z + dz * t;
    const h = s.scale ?? 6;
    const radius = Math.max(C.canopyRadius, h * C.canopyRadiusOfHeight);
    if ((s.x - px) ** 2 + (s.z - pz) ** 2 > radius * radius) continue;
    const lineY = from.y + (y - from.y) * t;
    const base = s.y ?? world.heightAt(s.x, s.z);
    if (lineY > base + h * C.canopyBandFrom && lineY < base + h) return true;
  }
  return false;
}

function siteQuery() {
  poseProbeCamera();
  return {
    px: state.x,
    pz: state.z,
    fx: -Math.sin(state.yaw),
    fz: -Math.cos(state.yaw),
    heightAt: world.heightAt,
    slopeAt: world.slopeAt,
    isSubmerged: world.isSubmerged,
    seaLevel: world.SEA_LEVEL,
    isClear,
    isInFrame,
    // Seeded per delivery and attempt, like the drift: siting samples forty
    // bearings, and with Math.random the same give sited a different portal
    // every run, which is what made the harness flake and made a player's
    // bug report unrepeatable.
    rng: rngFor(
      seed, 'epic-site',
      state.epicCounts.natural + state.epicCounts.granted,
      state.epicSiteAttempts,
    ),
  };
}

/** Which concrete item an Epic delivery turns out to be. */
function pickEpicItem(tier) {
  const pool = ITEM_DATA.items.filter((i) => i.tier === tier);
  // The fallback is looked up by id, never restated: the name is hers.
  if (pool.length === 0) return ITEM_DATA.items.find((i) => i.id === 'portal_shard') ?? ITEM_DATA.items[0];
  return pool[Math.floor(Math.random() * pool.length)];
}

// --- the Epic Find ---------------------------------------------------------

/**
 * Arm an Epic. This does NOT open a portal: it only says one is owed.
 *
 * The gap matters. A portal that cannot be sited is deferred and retried, never
 * cancelled, so the counter is spent here and the spectacle arrives when the
 * ground allows it. Completion rate has to be 100% or the scheduler's promise —
 * every player gets the first one — is a lie.
 *
 * A GRANTED Epic is a cryptid's, not the world's. It does not spend the
 * player's discernment, does not reset the pity counter and does not push the
 * next natural Epic out by the wall-clock floor — otherwise a gift to a cryptid
 * would cost the player the Epic they were already owed.
 *
 * @param {number} [tier] 6 takes the escalated reserve
 * @param {{granted?: boolean, site?: any, by?: string | null}} [opts]
 */
function armEpic(tier = 5, { granted = false, site = null, by = null } = {}) {
  if (!granted) {
    state.epicTicks = 0;
    state.lastEpicAtMs = state.tMs;
  }
  state.epicCounts = countArmed(state.epicCounts, granted);
  state.epicGranted = granted;
  state.epicGrantedBy = granted ? by : null;
  state.epicActive = true;
  state.epicPending = true;
  state.epicTier = tier;
  state.epicRetryAtMs = state.tMs;
  state.epicSiteAttempts = 0;
  state.epicRelocations = 0;
  state.epicGrantSite = site;
  if (!granted) discernment.onEpicDelivered();
}

function tryOpenEpic() {
  if (!state.epicPending || state.tMs < state.epicRetryAtMs) return;

  const q = siteQuery();
  let site = siteOrDefer(q);
  state.epicSiteAttempts++;
  if (state.epicSiteAttempts === 1) state.epicFellBack = false;

  if (!site) {
    if (state.epicSiteAttempts < SITING_TUNING.maxRelocations) {
      // Deferred, never cancelled. Try again shortly.
      state.epicRetryAtMs = state.tMs + SITING_TUNING.retrySeconds * 1000;
      return;
    }
    // Out of patience: it simply appears ahead of you. Fiction, it followed
    // you here. Mechanic, you cannot be denied it.
    //
    // A granted one lands on dry ground beside its cryptid instead. At the
    // grotto, "ahead of you" is the sea, and a tier 6 in the water behind the
    // walkable wall is a promise broken. Chosen NOW, for where the player is
    // standing and looking: the site's fixed landing sat behind a player who
    // had walked in from its side, and the mouths opened at NDC x of 7.
    site = state.epicGrantSite
      ? pickLanding(world, state.epicGrantSite, {
        px: q.px, pz: q.pz, fx: q.fx, fz: q.fz, isInFrame, isVisible, frameOffset,
        // Never inside pickup reach of the cryptid's own tier 5.
        avoid: worldsBuilt.home.finds.filter((o) => !kete.has(o.id)),
      })
      : fallbackSite(q);
    state.epicFellBack = true;
  }

  const tier = state.epicTier ?? 5;
  const item = pickEpicItem(tier);
  const escalated = tier >= 6;
  const line = pickVoLine(state.recentVo, Math.random, escalated);
  state.recentVo.unshift(line);
  state.recentVo.length = Math.min(state.recentVo.length, 8);

  // Open, then LOOK: both mouths are checked where they actually are, not
  // where the landing's ground point suggested they would be. The drift is
  // rolled inside start, so the mouths sit up and back from the landing by a
  // direction nobody knew until now, and a landing that passed every test
  // can still hang its first mouth in a crown. A granted delivery gets to try
  // another landing, up to a few times; a natural one keeps what siting gave
  // it, which already tested the mouth.
  const rejected = [];
  for (let attempt = 0; attempt < 12; attempt++) {
    // Seeded, not Math.random: the drift decides where the mouths hang, and
    // with a fresh roll every opening the same landing passed one run and
    // put its second mouth in a crown the next. Seed, delivery number and
    // attempt make it the same portal every time — and give each retry a
    // different drift to try.
    const deliveries = state.epicCounts.natural + state.epicCounts.granted;
    epicSeq.start({
      site,
      count: state.epicCounts.natural,
      tier,
      line,
      subLine: item.name,
      rng: rngFor(seed, 'epic-drift', deliveries, attempt),
    });
    // The reserve's second mouth is placed across the drift from the first.
    // Its side is not a rule; its being seen is. Behind a crown or off the
    // frame, it goes to the other side.
    const p2 = epicSeq.portal2Planned;
    if (p2 && !mouthVisible(p2)) epicSeq.flipAcross();
    const firstOk = mouthVisible(epicSeq.portalPlanned ?? epicSeq.portal2Planned ?? { x: site.x, y: site.y + mouthDrop(), z: site.z });
    const secondOk = !epicSeq.portal2Planned || mouthVisible(epicSeq.portal2Planned);
    if ((firstOk && secondOk) || !state.epicGranted || !state.epicGrantSite) break;
    rejected.push({ x: site.x, z: site.z });
    const next = pickLanding(world, state.epicGrantSite, {
      px: q.px, pz: q.pz, fx: q.fx, fz: q.fz, isInFrame, isVisible, frameOffset,
      avoid: worldsBuilt.home.finds.filter((o) => !kete.has(o.id)),
      reject: rejected,
    });
    if (!next || (Math.abs(next.x - site.x) < 0.5 && Math.abs(next.z - site.z) < 0.5)) break;
    site = next;
    state.epicFellBack = true;
  }
  state.epicPendingItem = item;
  state.epicPending = false;
}

/** The object lands. It becomes collectable, and it is NEVER auto-collected. */
function deliverEpicObject() {
  const site = epicSeq.site;
  const tier = epicSeq.tier;
  const item = state.epicPendingItem ?? pickEpicItem(tier);
  const obj = {
    id: epicObjectId(state.epicCounts, state.epicGranted),
    itemId: item.id,
    tier,
    x: site.x,
    y: world.heightAt(site.x, site.z),
    z: site.z,
    rot: Math.random() * Math.PI * 2,
    biome: 'beach',
    tierRoll: 0,
    itemRoll: 0,
    isEpic: true,
    // A cryptid's, and whose: collecting the kelpī's grant is what stands
    // the driftwood back up, and only that.
    granted: state.epicGranted,
    grantedBy: state.epicGrantedBy,
  };
  // Pin its identity so `reveal` never rolls it against the weight table. Epic
  // is not on any weight table and must not touch the scripted opening either.
  offers.force(obj.id, { tier, itemId: item.id });
  state.epicObjects.push(obj);
  objectsDirty = true;
}

/** If the player wanders off, the find follows them. */
function relocateEpicObjects() {
  for (const o of state.epicObjects) {
    if (!shouldRelocate(o, state.x, state.z)) continue;
    const q = siteQuery();
    const site = state.epicRelocations < SITING_TUNING.maxRelocations
      ? (siteOrDefer(q) ?? fallbackSite(q))
      : fallbackSite(q);
    state.epicRelocations++;
    o.x = site.x;
    o.z = site.z;
    o.y = world.heightAt(site.x, site.z);
  }
}

// --- giving ----------------------------------------------------------------

/**
 * Who can be given to right now. At home: her wanderers and the two cryptids
 * that are somebody. In elsewhere: nobody — Karu is not a recipient, and there
 * is nobody else there.
 */
function activeRecipients() {
  return recipientsNow;
}

/** Computed on entering a world, not per frame: the list never changes inside one. */
let recipientsNow = /** @type {{id: string, x: number, z: number}[]} */ ([]);
function refreshRecipients() {
  recipientsNow = worlds.which === 'home'
    ? npcs.concat(cryptidRecipients(worldsBuilt.home.sites))
    : [];
}
refreshRecipients();

/**
 * The patupaiarehe area, if the player is standing in it. Not a recipient in
 * reach — there is nobody there — but a place a thing can be left. Only when
 * no one closer is in reach, so the area can never hijack a real gift.
 */
function placeInReach() {
  if (worlds.which !== 'home') return null;
  const site = worldsBuilt.home.sites.find((c) => c.kind === 'place');
  if (!site) return null;
  const d = Math.hypot(site.x - state.x, site.z - state.z);
  if (d > CRYPTID_DATA.cryptidArea.radius) return null;
  return { id: site.id, x: site.x, z: site.z, place: true, site };
}

function nearRecipientNow() {
  return recipientInReach(activeRecipients(), state.x, state.z) ?? placeInReach();
}

/**
 * Put a line on screen, and remember when on the GAME clock. The HUD hides it
 * on wall time, which is right for a player and wrong for the harness: under a
 * paused, stepped clock the element outlives its line by minutes, and a check
 * for "nothing was said" would read yesterday's sentence. `__lb.say` reports
 * only what would be on screen under a running clock.
 * @param {string} text @param {number} ms
 */
function sayNow(text, ms) {
  if (!text) return;
  hud.say(text, ms);
  state.lastSay = { text, atMs: state.tMs, ms };
}

function openGivePanel(recipient) {
  const def = recipientDef(recipient.id);
  if (!def) return;
  // A place has no name to put on the card: the panel is headed by what you
  // are doing, not who you are doing it to, in the words data gives it. A
  // recipient with its own verb (the cryptids) is headed by that.
  givePanel.show(def.name, kete.items, recipient.place ? { head: def.leaveHead } : { head: def.giveHead ?? null });
  // The kelpī's greeting says what the driftwood is doing. Lying — after a
  // gift, until its grant is collected — it gets the lying line, so the
  // words never assert a standing thing over a frame of it flat.
  const down = recipient.id === 'moana_kelpii' && (state.kelpiiDown || !kelpiiStanding(worldsBuilt.home.sites.find((c) => c.id === recipient.id), state.x, state.z));
  sayNow((down && def.greetingDown) || def.greeting, GIVING_TUNING.reactionMs);
  audio.unlock();
}

/**
 * Say something later, after whatever is on screen. Each entry waits for the
 * one before it, so a reaction, a sighting card and a milestone line arrive at
 * reading pace instead of on top of each other.
 * @param {string} text @param {number} delayMs
 * @param {{milestone?: string, then?: () => void}} [extra]
 */
function queueSay(text, delayMs, { milestone, then } = {}) {
  const last = state.sayQueue[state.sayQueue.length - 1];
  const at = Math.max(state.tMs + delayMs, last ? last.at + PROGRESSION_TUNING.delayMs : 0);
  state.sayQueue.push({ text, at, ms: GIVING_TUNING.reactionMs, milestone, then });
}

function drainSayQueue() {
  const next = state.sayQueue[0];
  if (!next || state.tMs < next.at) return;
  state.sayQueue.shift();
  sayNow(next.text, next.ms);
  // Nothing can be given over a queued line either: the same lock the reaction
  // uses, extended, so mashing the key cannot talk over her.
  state.giveLockUntilMs = Math.max(state.giveLockUntilMs, state.tMs + next.ms);
  next.then?.();
}

/**
 * Her milestones: what the ledger now says she has been given, minus what she
 * has already said. Queued behind the reaction line, and remembered only when
 * the line actually plays, so a save in the gap replays nothing and loses
 * nothing.
 * @param {number} delayMs how long after now the first one may play
 */
function queueMilestones(delayMs) {
  const prog = state.progression;
  const queued = new Set(state.sayQueue.map((q) => q.milestone).filter(Boolean));
  for (const id of pendingMilestones(prog, state.milestonesSeen)) {
    if (queued.has(id)) continue;
    queueSay(milestoneLine(id), delayMs, { milestone: id, then: () => onMilestone(id) });
  }
}

/** The moment her line plays: the world changes to match it. */
function onMilestone(id) {
  if (!state.milestonesSeen.includes(id)) state.milestonesSeen.push(id);
  if (id === 'doorway') {
    // "behind her, where there was bush, there is a way through." The prompt
    // waits until she has finished saying so: the first time, the warning is
    // the whole point.
    state.doorwayPromptAfterMs = state.tMs + GIVING_TUNING.reactionMs;
  }
  if (id === 'karu') bringKaru();
}

/** Karu arrives, in the trees past her where she walked. Placed once; after this it only drifts. */
function bringKaru() {
  const her = NPC_SPOTS[0];
  const at = KARU_DATA.motion.spawnAtHer;
  worlds.karu = true;
  karu.setPresent(true, { x: her.x + at.x, z: her.z + at.z });
  queueSay(karu.line('greet'), PROGRESSION_TUNING.delayMs);
}

function doorwayOpen() {
  return state.milestonesSeen.includes('doorway');
}

/**
 * Hand the selected item over.
 *
 * Everything the world does about it happens through `discernment.onGive`,
 * which is the same hidden number that refusing junk feeds slowly. That is the
 * point of the design and it is why there is no second economy here: refuse the
 * junk, give away the treasure, one rule at two scales.
 */
function doGive(recipient) {
  if (!recipient || state.tMs < state.giveLockUntilMs) return;
  const sel = givePanel.selected;
  if (!sel) return;

  const res = offerTo({
    recipientId: recipient.id,
    tier: sel.tier,
    knownCreatures: state.knownCreatures,
    rng: Math.random,
  });
  if (!res.accepted) return;

  const sacrifice = GIVING_TUNING.sacrificeIsReal;
  const given = kete.give(sel.id, recipient.id, state.tMs, sacrifice);
  if (!given) return;

  discernment.onGive(sel.tier);
  audio.give(sel.tier);
  sayNow(res.line, GIVING_TUNING.reactionMs);
  state.lastReaction = res.line;
  state.giveLockUntilMs = state.tMs + GIVING_TUNING.reactionMs;

  let sighting = res.sighting;
  if (sighting && state.knownCreatures.length === 0) {
    // The first cryptid she names is the one nearest her, so the first
    // sighting is always within reach of the session it was bought in. After
    // that `offerTo` picks, and its choice stands.
    const def = recipientDef(recipient.id);
    const nearest = sitesByDistance(worldsBuilt.home.sites, recipient.x, recipient.z)[0];
    const sg = def?.sightings?.find((e) => e.site === nearest?.id);
    if (sg) sighting = { creature: sg.creature, line: sg.lines[Math.floor(Math.random() * sg.lines.length)] };
  }
  if (sighting) {
    if (!state.knownCreatures.includes(sighting.creature)) {
      state.knownCreatures.push(sighting.creature);
    }
    hud.sighting(sighting.creature, sighting.line);
  }

  // A cryptid answers a tier 5 with a tier 6. Sequenced, not stacked: the
  // reaction has the screen to itself for the hold, THEN the tell starts, so
  // the foliage lean is the answer to the gift. Owed, never cancelled — if a
  // portal is already open it waits for that one to close.
  const grant = cryptidGrantFor(recipient.id, sel.tier);
  if (grant && !recipient.place) {
    // The card comes down: the two mouths open where it was, and the
    // reaction line is meant to have the screen to itself.
    givePanel.hide();
    state.owedGrants.push({
      tier: grant.tier,
      at: state.tMs + CRYPTID_DATA.grant.lineHoldMs,
      siteId: recipient.id,
    });
    // "it takes the thing and is driftwood again." Standing, the kelpī is
    // between the giver and any mouth ahead of them.
    if (recipient.id === 'moana_kelpii') state.kelpiiDown = true;
  }
  // A place is not given to. The thing is put down; what happens next happens
  // after you have walked out of the fog and looked back, and it says nothing.
  // Only a thing that would have earned a grant is remembered as left: for
  // anything else the fog is simply where it now is, and nothing follows.
  if (recipient.place) {
    if (grant) leftGift.leave(recipient.id, state.tMs, sel.tier);
    givePanel.hide();
  }

  state.progression = progressionFrom(kete.ledger);
  queueMilestones(PROGRESSION_TUNING.delayMs);

  if (sacrifice) givePanel.remove(sel.id);
  state.collected = kete.total;
  if (kete.items.length === 0) givePanel.hide();

  // The save is here, at the END, not on the kete's give event: that event
  // fires before the grant is owed or the gift is left, and a save taken in
  // that gap had the ledger and not the tier 6 it had bought.
  autosave(true);
}

/** Arm an owed grant once its hold has passed and the world is clear. */
function armOwedGrants() {
  const g = state.owedGrants[0];
  if (!g || state.tMs < g.at) return;
  if (state.epicActive || state.epicPending) return;
  state.owedGrants.shift();
  // The cryptid's site is a home place. Owed and then carried through the
  // doorway, the grant opens ahead of the player like any other.
  const site = worlds.which === 'home'
    ? worldsBuilt.home.sites.find((c) => c.id === g.siteId) ?? null
    : null;
  armEpic(g.tier, { granted: true, site, by: g.siteId ?? null });
}

// --- crossing worlds -------------------------------------------------------

/**
 * Put the player in a world. Everything `setSeed` does for a seed change, plus
 * the things that only make sense in one of the two: her wanderers and their
 * shadows, her song, the cryptids, the sea. Called on the frame the fade is
 * fully in, so none of the swap is ever seen.
 *
 * @param {'home' | 'elsewhere'} which
 */
function enterWorld(which) {
  const w = worldsBuilt[which];
  world = w.world;
  scenery = w.scenery;

  scene.remove(terrain.mesh);
  terrain = makeTerrainMesh({
    heightAt: world.heightAt,
    forestnessAt: world.forestnessAt,
    freshSurfaceAt: world.freshSurfaceAt,
  });
  scene.add(terrain.mesh);
  scene.remove(fresh.mesh);
  fresh = makeFreshWater({ freshSurfaceAt: world.freshSurfaceAt });
  scene.add(fresh.mesh);

  applyPalette({
    scene,
    terrainMesh: terrain.mesh,
    treeMeshes: sceneryMesh.trees.values(),
    scrubMesh: sceneryMesh.groups.get('scrub'),
    rockMesh: sceneryMesh.groups.get('rock'),
    freshMesh: fresh.mesh,
    water,
  }, w.palette);

  const home = which === 'home';
  for (const npc of npcs) {
    npc.mesh.visible = home;
    npc.shadow.visible = home;
  }
  if (!home) {
    cryptidRender.hide();
    // Her song does not carry across. Infinity is past `far`, which zeroes it.
    audio.ambientVoice(Infinity, state.tMs);
    // Elsewhere's Epics are hand-placed around wherever you came in, and
    // pinned like every other authored object.
    const entry = worlds.entry ?? { x: state.x, z: state.z };
    w.finds = elsewhereFinds(seed, entry, world);
    for (const o of w.finds) offers.force(o.id, { tier: o.tier, itemId: o.itemId });
  } else {
    doorway.hide();
  }
  audio.doorHum(0);

  state.epicObjects = [];
  state.nearest = null;
  // An Epic armed but not yet opened crosses with the player and is sited
  // again here, from scratch: its retry clock, its attempt count and the
  // cryptid it was going to land beside all belonged to the other world.
  if (state.epicPending) {
    state.epicRetryAtMs = state.tMs;
    state.epicSiteAttempts = 0;
    state.epicGrantSite = null;
  }
  refreshRecipients();
  visible = [];
  visibleScenery = [];
  loadedKey = '';
  refreshChunks(true);
  terrain.update(state.x, state.z, true);
  fresh.update(state.x, state.z, true);
}

/**
 * Is a find out in THIS world — a portal open, an object on the ground? That
 * is what a crossing and a save both have to wait for: the sequence and the
 * object live in this world's scene and are not in the snapshot. An Epic
 * merely armed, or a grant merely owed, is a promise with no position yet and
 * crosses with the player.
 */
function epicOutHere() {
  return epicSeq.active || state.epicObjects.length > 0;
}

/**
 * Begin the crossing. Refused while a find is out in this world: leave and
 * it is lost with the world. The caller gives the refusal a face — an arch
 * that silently does nothing reads as broken, and in elsewhere it strands the
 * player at the one door they found.
 * @param {'home' | 'elsewhere'} to
 */
function startCrossing(to) {
  if (epicOutHere()) return false;
  if (to === 'elsewhere') {
    const other = worldsBuilt.elsewhere;
    // The arch's spot, read against elsewhere's terrain, can be a stream. You
    // arrive on the nearest dry ground to it, not in the water.
    const entry = placeEntry({
      entry: { x: doorwayPos.x, z: doorwayPos.z },
      walkable: (x, z) => walkable(other.world, x, z),
    });
    const returnDoor = placeReturnDoor({
      seed, entry, terrain: other.world, genScenery: other.scenery.genScenery,
    });
    if (!worlds.cross('elsewhere', state.tMs, { entry, returnDoor })) return false;
    if (karu.present) sayNow(karu.line('enterWorld'), GIVING_TUNING.reactionMs);
    return true;
  }
  return worlds.cross('home', state.tMs);
}

/** The frame the fade is fully in: swap, and stand the player somewhere. */
function onWorldSwitch() {
  if (worlds.which === 'elsewhere') {
    const e = worlds.entry ?? { x: 0, z: 8 };
    state.x = e.x;
    state.z = e.z;
    state.elsewhereFirstOfferDone = false;
  } else {
    // Home: just outside the arch, facing her.
    state.x = doorwayPos.x;
    state.z = doorwayPos.z + WORLDS_TUNING.doorway.arriveOffsetMetres;
    state.yaw = 0;
  }
  state.trail = [];
  enterWorld(worlds.which);
  // Karu comes through too. "it goes through first": it is already ahead.
  const at = KARU_DATA.motion.spawnAfterCrossing;
  if (karu.present) karu.setPresent(true, { x: state.x + at.x, z: state.z + at.z });
}

function onWorldArrived() {
  if (!karu.present) return;
  if (worlds.which === 'elsewhere') {
    queueSay(karu.line('elsewhere'), KARU_DATA.lineDelayMs);
    queueSay(karu.line('thisWay'), PROGRESSION_TUNING.delayMs);
  } else {
    queueSay(karu.line('home'), KARU_DATA.lineDelayMs);
  }
}

/**
 * The crossing was refused: say so, once per approach. The line is data
 * (`doorway.refusedLine`); the flag clears when the player steps out of the
 * door, so walking off and back asks again and standing there does not nag.
 */
function refuseCrossing() {
  if (state.doorRefusedShown) return;
  state.doorRefusedShown = true;
  sayNow(WORLDS_TUNING.doorway.refusedLine, GIVING_TUNING.reactionMs);
}

const seenVec = new THREE.Vector3();
/** Is the return door on screen: inside the frustum AND within the bush sightline. */
function returnDoorSeen() {
  const d = worlds.returnDoor;
  if (!d) return false;
  if (Math.hypot(d.x - state.x, d.z - state.z) > WORLDS_TUNING.returnDoor.seenMetres) return false;
  // The matrices are otherwise only refreshed by a draw; a logic-only step
  // (the harness, a background tab) would project through last frame's lens.
  camera.updateMatrixWorld(true);
  const v = seenVec.set(d.x, d.y + WORLDS_TUNING.doorway.archMetres * 0.5, d.z).project(camera);
  return Math.abs(v.x) < 1 && Math.abs(v.y) < 1 && v.z < 1;
}

/** Is a natural Epic allowed to arm here? Not on the doorstep of the way home. */
function epicMayArmHere() {
  if (worlds.which === 'home' || !ELSEWHERE_TUNING.noEpicNearDoor) return true;
  const d = worlds.returnDoor;
  if (!d) return true;
  return Math.hypot(d.x - state.x, d.z - state.z) > WORLDS_TUNING.returnDoor.hearRadius;
}

// --- simulation ------------------------------------------------------------
function advance(dt) {
  state.tMs += dt * 1000;

  // The sequence runs on real time; the world it dims runs on the dilated one.
  epicSeq.update(dt);
  const dilation = epicSeq.dilation();
  state.envMs += dt * 1000 * dilation;

  for (const ev of epicSeq.takeEvents()) {
    if (ev === 'tell') audio.epicTell(TUNING.epicSequence.modes[epicSeq.mode]?.tell ?? 0);
    if (ev === 'open') {
      // Load the chosen line into the lettering. Without this the element keeps
      // the markup's default text forever and the VO variation — the rare line
      // included — is picked, recorded, and never seen.
      hud.epicShow(epicSeq.line, epicSeq.subLine, epicSeq.mode);
    }
    if (ev === 'impact') audio.epicImpact();
    if (ev === 'deliver') deliverEpicObject();
  }

  // The crossing. The fade is a number the machine computes from this clock,
  // painted here, so the harness can stop at 300ms and photograph it. The
  // world is swapped on the frame the fade is fully in and never before.
  for (const ev of worlds.update(state.tMs)) {
    if (ev === 'switch') onWorldSwitch();
    if (ev === 'arrived') onWorldArrived();
  }
  worldFade.set(worlds.fade, worlds.fadeColour);

  // --- input dispatch ------------------------------------------------------
  // Every edge-triggered key is drained exactly once per frame, then routed.
  // Draining twice loses presses; not draining at all makes a queued press fire
  // the moment a menu closes.
  // Everything is drained every frame even before the game starts, so a key
  // pressed at the title cannot fire the instant it goes away.
  const live = state.started;
  const pressCollect = input.takeCollect() && live;
  const pressGive = input.takeGive() && live;
  const pressCancel = input.takeCancel() && live;
  const nav = live ? input.takeNav() : (input.takeNav(), 0);
  const panelPick = givePanel.takePick() && live; // drained every frame, like the keys

  const nearRecipient = nearRecipientNow();
  const panelOpen = givePanel.open;
  const atHome = worlds.which === 'home';

  // Her singing carries before she does. Distance-attenuated, so walking
  // toward the trinket maker means hearing her before you can see who it is.
  // Not across worlds: elsewhere is silent of her.
  const maker = npcs.find((n) => n.id === 'trinket_maker');
  if (maker && state.started && atHome) {
    audio.ambientVoice(Math.hypot(maker.x - state.x, maker.z - state.z), state.tMs);
  }

  if (live) drainSayQueue();

  if (panelOpen) {
    if (nav) givePanel.move(nav);
    if (pressCancel || pressGive) givePanel.hide();
    else if (pressCollect || panelPick) doGive(nearRecipient);
    // Walking away closes it, so the panel can never follow you down the beach.
    if (!nearRecipient) givePanel.hide();
  } else if (pressGive && nearRecipient) {
    openGivePanel(nearRecipient);
  }

  // A crossing holds the player still: walking through a fade would put them
  // somewhere the swap did not expect.
  const uiBlocked = givePanel.open || !live || worlds.crossing;

  // --- movement ------------------------------------------------------------
  if (!uiBlocked) {
    state.yaw -= input.takeYaw();
    state.yaw += input.turn * 1.8 * dt;

    const { x: ax, z: az } = input.axes;
    const len = Math.hypot(ax, az);
    if (len > 0) {
      // Movement is relative to where the camera is looking. yaw 0 faces -Z.
      const sin = Math.sin(state.yaw);
      const cos = Math.cos(state.yaw);
      const fx = (ax * cos + az * sin) / len;
      const fz = (az * cos - ax * sin) / len;
      const nx = state.x + fx * WALK_SPEED * dt;
      const nz = state.z + fz * WALK_SPEED * dt;

      // Do not let the player wade out to sea. Without this they walk straight
      // off the beach and stand among the sandbars, which reads as the sea being
      // broken puddles rather than as the player being in the wrong place.
      // Axis-separated so walking into the surf at an angle slides along the
      // shoreline instead of sticking.
      //
      // Shallow fresh water is NOT a wall. A stream network you cannot cross
      // partitions the forest into pens, and the first thing a player does with
      // a creek is step in it. Anything up to WADE_DEPTH is walkable; a pond is
      // deeper than that, so ponds you go around and streams you go through.
      const wasX = state.x;
      const wasZ = state.z;
      if (walkable(world, nx, nz)) {
        state.x = nx;
        state.z = nz;
      } else if (walkable(world, nx, state.z)) {
        state.x = nx;
      } else if (walkable(world, state.x, nz)) {
        state.z = nz;
      }
      if (state.x !== wasX || state.z !== wasZ) state.lastMovedMs = state.tMs;
    }
  } else {
    input.takeYaw(); // drained so the camera does not lurch when the panel shuts
  }

  refreshChunks();

  // --- the doorway, and the way back ---------------------------------------
  // Entry is a HELD act: stand in the arch and hold the collect key. The first
  // time, the prompt waits for her warning to finish. With Karu the hold is
  // zero and standing there is the act — the legible difference between the
  // two rungs. The return door is a walk-in: finding it is the whole cost.
  const holdKey = input.isDown('KeyE') || input.isDown('Space') || input.isDown('Enter');
  let atDoor = false;
  let inDoor = false;
  if (live && atHome && doorwayOpen() && !panelOpen) {
    inDoor = Math.hypot(doorwayPos.x - state.x, doorwayPos.z - state.z) <= WORLDS_TUNING.doorway.triggerRadius;
    atDoor = inDoor && state.tMs >= state.doorwayPromptAfterMs;
    if (worlds.hold(atDoor, holdKey, state.tMs) && !startCrossing('elsewhere')) refuseCrossing();
  } else {
    worlds.hold(false, false, state.tMs);
  }
  if (live && !atHome && !worlds.crossing) {
    inDoor = doorReached({ x: state.x, z: state.z }, worlds.returnDoor);
    if (inDoor && !startCrossing('home')) refuseCrossing();
    if (returnDoorSeen()) worlds.noteDoorOnScreen(state.tMs);
    if (worlds.lostFloorDue(state.tMs)) {
      // The soft floor: the door comes to you, once. It is following you.
      const other = worldsBuilt.elsewhere;
      worlds.setReturnDoor(relocateReturnDoor({
        seed,
        terrain: other.world,
        genScenery: other.scenery.genScenery,
        player: { x: state.x, z: state.z, fx: -Math.sin(state.yaw), fz: -Math.cos(state.yaw) },
        door: worlds.returnDoor,
      }));
    }
  }
  if (!inDoor) state.doorRefusedShown = false;
  const cue = !atHome && !worlds.crossing
    ? doorCue({ x: state.x, z: state.z }, worlds.returnDoor)
    : { hear: 0, bend: null };
  if (live) audio.doorHum(cue.hear * WORLDS_TUNING.returnDoor.humGain);

  const groundY = world.heightAt(state.x, state.z);
  // Pivot is at the feet, so this is ground height exactly.
  player.position.set(state.x, groundY, state.z);
  playerShadow.position.set(state.x, groundY + 0.02, state.z);

  // Fixed pitch, free yaw. Billboards collapse to a line under a steep angle,
  // so the pitch is locked here and must stay locked once art lands.
  //
  // The camera sits OPPOSITE the facing direction. Forward at yaw 0 is -Z, so
  // the camera belongs at +Z. Negating these put the camera in front and the
  // player walked toward the lens instead of away from it.
  // Flattens toward CAMERA_PITCH_EPIC while a portal is open, so the sky the
  // portal hangs in is actually in shot. Eased, never cut.
  const framing = epicSeq.framing;
  const pitch = CAMERA_PITCH + (CAMERA_PITCH_EPIC - CAMERA_PITCH) * framing;
  const back = CAMERA_DIST * Math.cos(pitch);
  const up = CAMERA_DIST * Math.sin(pitch);
  camera.position.set(
    state.x + Math.sin(state.yaw) * back,
    groundY + up + 1.7,
    state.z + Math.cos(state.yaw) * back,
  );
  // The player stays centred through all of it. Never yank the camera away.
  camera.lookAt(state.x, groundY + 1.0 + framing * 0.35, state.z);

  const wantFov = 58 * (1 - 0.08 * framing);
  if (camera.fov !== wantFov) {
    camera.fov = wantFov;
    camera.updateProjectionMatrix();
  }

  // Impact shake. Driven by 2D simplex rather than per-frame random, because
  // random reads as a glitch and noise reads as a knock. Applied after lookAt
  // so it is a jolt of the lens, not a change of subject.
  const shake = epicSeq.shake();
  if (shake.rot !== 0 || shake.x !== 0) {
    camera.position.x += shake.x;
    camera.position.y += shake.y;
    camera.rotateZ(shake.rot);
  }

  faceCamera(player, camera);
  for (const npc of npcs) {
    const y = world.heightAt(npc.x, npc.z);
    npc.mesh.position.set(npc.x, y, npc.z);
    npc.shadow.position.set(npc.x, y + 0.02, npc.z);
    faceCamera(npc.mesh, camera);
  }

  water.position.x = state.x;
  water.position.z = state.z;
  terrain.update(state.x, state.z);
  fresh.update(state.x, state.z);

  // --- the loot economy ----------------------------------------------------
  // Frozen behind the title. Otherwise the discernment clock, the offer book
  // and the Epic scheduler all run while nobody is playing, and the promised
  // first Epic could be spent before the player has taken a step.
  if (!live) {
    props.rebuild(visible, (id) => kete.has(id), state.envMs);
    sceneryMesh.rebuild(
      visibleScenery,
      { x: camera.position.x, z: camera.position.z },
      { x: state.x, z: state.z },
      null,
    );
    return;
  }

  discernment.tick(dt);
  state.k = discernment.k(state.tMs);

  // Movement trail, for the AFK clause: standing still while items despawn
  // must not count as declining them.
  state.trail.push({ t: state.tMs, x: state.x, z: state.z });
  while (state.trail.length && state.tMs - state.trail[0].t > TUNING.refusal.afkWindowSec * 1000) {
    state.trail.shift();
  }
  const oldest = state.trail[0];
  const travelled5s = oldest ? Math.hypot(state.x - oldest.x, state.z - oldest.z) : 0;

  const objects = activeObjects();
  const facing = { x: -Math.sin(state.yaw), z: -Math.cos(state.yaw) };
  const refusedNow = offers.update({
    nearby: objects,
    px: state.x, pz: state.z,
    fx: facing.x, fz: facing.z,
    dt,
    travelledLast5s: travelled5s,
    uiBlocked,
    isTaken: (id) => kete.has(id),
  });

  for (const r of refusedNow) {
    discernment.onRefusal(Math.min(2, r.tier));
    state.epicTicks += tickFor('refusal');
    state.wonderDry += 1;
  }

  state.nearest = findNearest(objects);

  // The first thing you meet in elsewhere is a Wonder. Authored, once per
  // visit, so the place pays within half a minute of arriving in it: lost and
  // finding is the feeling, lost and empty is a chore.
  if (!atHome && !state.elsewhereFirstOfferDone && state.nearest && !state.nearest.isAuthored) {
    const tier = ELSEWHERE_TUNING.firstOfferTier;
    const item = resolveItem(state.nearest.itemRoll, tier, 'elsewhere', state.nearest.nearWater);
    if (item) offers.force(state.nearest.id, { tier, itemId: item.id });
    state.elsewhereFirstOfferDone = true;
  }

  // Collecting is an explicit press. Walking over an item must NOT take it:
  // declining is the input to the discernment system, so it has to be possible.
  // Not at the doorway: there the key means "go through", and one press must
  // never do both.
  if (pressCollect && !panelOpen && state.nearest && !atDoor) {
    audio.unlock();
    const o = state.nearest;
    const rv = offers.reveal(o, state.k, state.wonderDry);
    const taken = { ...o, tier: rv.tier, itemId: rv.itemId };

    if (kete.collect(taken, state.tMs)) {
      offers.noteResolvedPickup();
      discernment.onGrab(Math.min(5, taken.tier), state.tMs);
      state.epicTicks += tickFor('grab');
      state.wonderDry = taken.tier >= 4 ? 0 : state.wonderDry + 1;

      // Closing the loop on an Epic releases Gate C. Until the player picks it
      // up themselves, there is still one in the world.
      if (o.isEpic) {
        state.epicObjects = state.epicObjects.filter((e) => e.id !== o.id);
        state.epicActive = false;
        // The driftwood stands again when ITS grant is collected, not when
        // any Epic is: a natural one taken while the kelpī's tier 6 was
        // still owed stood it back up in front of its own mouths.
        if (o.granted && (o.grantedBy === 'moana_kelpii' || o.grantedBy == null)) state.kelpiiDown = false;
        objectsDirty = true;
      }

      hud.toast(taken);
      audio.pickup(taken.itemId, taken.tier, state.tMs);

      // Project the item to screen space and throw it at the kete.
      const p = new THREE.Vector3(taken.x, taken.y + 0.4, taken.z).project(camera);
      arc.launch(
        (p.x * 0.5 + 0.5) * window.innerWidth,
        (-p.y * 0.5 + 0.5) * window.innerHeight,
        tierMeta(taken.tier).colour,
        state.tMs,
      );

      state.collected = kete.total;
      state.nearest = null;
    }
  }

  // Epic Finds run their own scheduler, deliberately off the tier weight table,
  // so tuning drop rates can never make the big moment common or absent.
  // The promise: every player, all of them, gets the first Epic once they have
  // met the opening sequence and two and a half minutes have passed. That is
  // authored, not rolled. Randomness starts only after it is kept.
  const promisedFirst =
    firstEpicOwed(state.epicCounts)
    && offers.openingComplete()
    && state.tMs >= TUNING.scriptedOpening.epicMinSeconds * 1000;

  // The world leans in twice: once the doorway is open, and again in
  // elsewhere. Both are multipliers on the pity window, never on the ramp.
  state.pityMult = pityScale(state.progression) * (atHome ? 1 : ELSEWHERE_TUNING.pityMult);
  // Never on the doorstep of the way home: an Epic out in this world refuses
  // the crossing, and one landing behind a player already standing in the
  // door strands them at it. The scheduler waits until they walk off.
  if ((promisedFirst || shouldTriggerEpic(state, state.k, state.tMs, Math.random, state.pityMult)) && epicMayArmHere()) {
    armEpic(5);
  }
  // A gift left for the patupaiarehe is answered only once you have walked
  // out of the fog and turned back. No line: the fog is the whole reply.
  if (atHome) {
    const left = leftGift.update(worldsBuilt.home.sites, state.x, state.z, facing.x, facing.z);
    if (left) state.owedGrants.push({ tier: left.grant.tier, at: state.tMs, siteId: left.siteId });
  }
  armOwedGrants();
  tryOpenEpic();
  relocateEpicObjects();
  autosave();

  arc.update(state.tMs);

  // Props bob on the DILATED clock, so the world slows and the player does not.
  props.rebuild(objects, (id) => kete.has(id), state.envMs);

  // The tell: foliage leans toward the site before anything is on screen.
  // The return door borrows the same lean, quieter, inside its hearing radius:
  // the last twenty metres is a find. An Epic's tell always outranks it.
  const tell = epicSeq.tellStrength;
  const bend = tell > 0
    ? {
      x: epicSeq.site.x,
      z: epicSeq.site.z,
      radius: SITING_TUNING.bendRadius,
      radians: SITING_TUNING.bendDegrees * (Math.PI / 180) * tell,
    }
    : (cue.bend ? { ...cue.bend, radians: cue.bend.radians * cue.hear } : null);

  // Rebuilt every frame, not per chunk load: the near-camera cull depends on
  // where the camera is, so it has to follow it.
  sceneryMesh.rebuild(
    visibleScenery,
    { x: camera.position.x, z: camera.position.z },
    { x: state.x, z: state.z },
    bend,
  );

  portal.update(epicSeq, camera, state.tMs);

  // The cryptids, and the cold on the ridge. The fog is lerped here, not in
  // the render module: worlds.js owns scene.fog for the palette, and the patch
  // is a lean on top of whichever palette is in force.
  if (atHome) {
    const stillSeconds = (state.tMs - state.lastMovedMs) / 1000;
    // Kept so `__lb.redraw()` can re-run this exact call: a redraw that only
    // re-rendered the scene left the cryptid sprites in whatever state the
    // last advance() put them, so holding the pale shape off and redrawing
    // produced the same pixel with and without it.
    state.lastStillSeconds = stillSeconds;
    const warmth = cryptidRender.update(
      worldsBuilt.home.sites,
      { x: state.x, y: groundY, z: state.z },
      camera,
      { nowMs: state.envMs, stillSeconds, kelpiiDown: state.kelpiiDown },
    );
    const w = warmth.patupaiarehe ?? 0;
    const base = worldsBuilt.home.palette;
    const cold = CRYPTID_DATA.sites.patupaiarehe.fog;
    scene.fog.color.set(base.fog).lerp(fogCold.set(cold.colour), w);
    scene.fog.near = base.fogNear + (cold.near - base.fogNear) * w;
    scene.fog.far = base.fogFar + (cold.far - base.fogFar) * w;
  }

  // One arch, two jobs: the doorway by her at home, the return door elsewhere.
  const arch = atHome ? (doorwayOpen() ? doorwayPos : null) : worlds.returnDoor;
  if (arch) {
    archArg.x = arch.x;
    archArg.y = arch.y;
    archArg.z = arch.z;
    archArg.hold = atHome ? worlds.holdProgress : 0;
  }
  doorway.update(arch ? archArg : null, camera, state.tMs);

  // Karu. The facing convention differs: main.js walks toward -sin/-cos of
  // yaw, karu.js reads +sin/+cos, so it is handed the yaw turned about.
  // The return door is its target only in elsewhere; at home it just leads.
  // It leads on ground the player can stand on: the guide's route is the
  // player's route, and on the default seed the straight line was a stream.
  karu.update({
    dt,
    nowMs: state.tMs,
    player: { x: state.x, z: state.z, yaw: state.yaw + Math.PI },
    target: !atHome && karu.present ? worlds.returnDoor : null,
    heightAt: world.heightAt,
    walkable: walkableHere,
    dryAt: dryHere,
  });
  karuMesh.update(karu, camera, state.tMs, { door: !atHome && karu.present ? worlds.returnDoor : null });

  if (state.nearest) {
    highlight.visible = true;
    highlight.position.set(
      state.nearest.x,
      world.heightAt(state.nearest.x, state.nearest.z) + 0.03,
      state.nearest.z,
    );
  } else {
    highlight.visible = false;
  }

  // --- HUD -----------------------------------------------------------------
  hud.setCount(kete.total);
  hud.setWorldTag(worldLabel(worlds, state.tMs));
  if (atDoor && !uiBlocked) {
    hud.setAction(karu.present ? null : WORLDS_TUNING.doorway.prompt, null);
  } else if (state.nearest && !uiBlocked) {
    const rv = offers.reveal(state.nearest, state.k, state.wonderDry);
    hud.setPrompt({ ...state.nearest, tier: rv.tier, itemId: rv.itemId });
  } else {
    hud.setPrompt(null);
  }

  // A place's prompt is its own words from data, whole; a recipient's is
  // `giving.prompt` with their name, or their own `givePrompt`. Not while a
  // line is on screen or a gift is still being answered: the prompt sat
  // under the say bubble with its text cut through the middle, inviting
  // another give during the give-lock.
  const talking = state.tMs < state.giveLockUntilMs
    || (state.lastSay !== null && state.tMs - state.lastSay.atMs < state.lastSay.ms);
  const nearDef = nearRecipient && !givePanel.open && !talking && kete.items.length > 0 ? recipientDef(nearRecipient.id) : null;
  hud.setGivePrompt(
    nearDef
      ? (nearRecipient.place
        ? nearDef.leavePrompt
        : (nearDef.givePrompt ?? GIVING_TUNING.prompt).replace('{name}', nearDef.name)) ?? null
      : null,
  );

  if (epicSeq.active) {
    hud.epicFrame(epicSeq.lettering, epicSeq.subLine);
    const ap = epicSeq.aperture();
    // The gradient carries the strength; this is a 0..1 mix, so the corners
    // actually reach the 0.38 the plan asks for instead of a tenth of it.
    hud.vignette(Math.min(1, 0.5 * tell + ap.scale));
  } else {
    hud.epicHide();
    hud.vignette(0);
  }
}

function draw() {
  renderer.render(scene, camera);
}

// --- boot ------------------------------------------------------------------
refreshChunks(true);
terrain.update(state.x, state.z, true);

const clock = makeClock({ advance, draw });

addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

// --- the agent's debug surface ---------------------------------------------
// Everything the harness needs to drive and inspect the game lives on one
// global. Kept in the bundle for now; it gets a DEV guard before ship.
window.__lb = {
  ready: false,
  get seed() { return seed; },
  get player() { return { x: state.x, y: player.position.y, z: state.z, yaw: state.yaw }; },
  get kete() {
    return {
      total: kete.total,
      collectedTotal: kete.collectedTotal,
      byTier: kete.byTier,
      ledger: kete.ledger,
    };
  },
  get epic() {
    return {
      ticks: Number(state.epicTicks.toFixed(2)),
      taste: Number(discernment.taste.toFixed(2)),
      k: Number(state.k.toFixed(3)),
      /** the player's own Epics; a cryptid's grants count separately */
      count: state.epicCounts.natural,
      granted: state.epicCounts.granted,
      wonderDry: state.wonderDry,
      refused: offers.refusedCount,
      pending: state.epicPending,
      active: state.epicActive,
      objects: state.epicObjects.length,
      /** the last delivery gave up on siting and took the fallback */
      fellBack: Boolean(state.epicFellBack),
    };
  },
  /** The live beat sheet, so a screenshot can be pinned to an exact moment. */
  get epicSeq() {
    if (!epicSeq.active && !epicSeq.mode) return { active: false };
    const ap = epicSeq.aperture();
    const o = epicSeq.object();
    return {
      active: epicSeq.active,
      mode: epicSeq.mode,
      t: Number(epicSeq.t.toFixed(3)),
      tier: epicSeq.tier,
      aperture: Number(ap.scale.toFixed(3)),
      dilation: Number(epicSeq.dilation().toFixed(3)),
      tell: Number(epicSeq.tellStrength.toFixed(3)),
      sinceImpact: Number(epicSeq.sinceImpact().toFixed(3)),
      object: o ? { y: Number(o.y.toFixed(2)), landed: o.landed } : null,
      line: epicSeq.line,
      subLine: epicSeq.subLine,
      site: epicSeq.site,
    };
  },
  /**
   * Is the portal actually on screen?
   *
   * This exists because the first cut of the sequence passed every single
   * assertion while the portal opened clipped off the top edge of the frame.
   * The numbers were all about whether the beat RAN. None of them was about
   * whether you could see it. Projecting the mouth to NDC is the check that
   * would have caught it, so it is now part of the harness.
   */
  get epicFraming() {
    return this.mouthFraming(epicSeq.portal);
  },
  /** The second mouth of the reserve, or null. Its side is chosen for being seen; this reads whether it is. */
  get epicFraming2() {
    return this.mouthFraming(epicSeq.portal2);
  },
  /** @param {{x: number, y: number, z: number} | null} p */
  mouthFraming(p) {
    if (!p) return null;
    const ap = epicSeq.aperture();
    const half = (TUNING.epicSequence.mouthMetres / 2) * Math.max(0.05, ap.scale);
    const to = (x, y, z) => {
      const v = new THREE.Vector3(x, y, z).project(camera);
      return { x: Number(v.x.toFixed(3)), y: Number(v.y.toFixed(3)) };
    };
    const c = to(p.x, p.y, p.z);
    const top = to(p.x, p.y + half, p.z);
    const bottom = to(p.x, p.y - half, p.z);
    return {
      centre: c,
      top: top.y,
      bottom: bottom.y,
      // A margin, not a bare inequality: a mouth touching the edge still reads
      // as clipped.
      inFrame: Math.abs(c.x) < 0.9 && top.y < 0.94 && bottom.y > -0.94,
    };
  },

  get giving() {
    return {
      panelOpen: givePanel.open,
      selected: givePanel.selected,
      near: nearRecipientNow()?.id ?? null,
      known: state.knownCreatures.slice(),
      lastReaction: state.lastReaction,
      ledger: kete.ledger,
    };
  },
  /** @param {number} [tier] 6 takes the escalated reserve */
  forceEpic(tier = 5) {
    armEpic(tier);
    tryOpenEpic();
  },
  /**
   * Put an item of a chosen tier straight into the kete.
   *
   * Debug only, and it exists because the giving loop's interesting branches
   * are tier-gated: a Wonder buys a sighting and junk buys nothing, and waiting
   * for a 5% drop to roll is not a test. Bypasses the world entirely, so it can
   * also produce a tier 6, which nothing else can.
   */
  grant(tier = 4) {
    const pool = ITEM_DATA.items.filter((i) => i.tier === tier);
    const item = pool[0];
    if (!item) return null;
    const id = `granted:${tier}:${kete.collectedTotal}`;
    kete.collect({ id, itemId: item.id, tier }, state.tMs);
    state.collected = kete.total;
    return { id, itemId: item.id, tier };
  },
  openGive() {
    const r = nearRecipientNow();
    if (r) openGivePanel(r);
    return givePanel.open;
  },
  giveSelected() {
    const r = nearRecipientNow();
    state.giveLockUntilMs = -1;
    doGive(r);
  },

  // --- rung 5 ------------------------------------------------------------
  /** The three sites, with how far away each is. Harness asserts on `name`, never `id`. */
  get cryptids() {
    return worldsBuilt.home.sites.map((c) => ({
      ...c,
      dist: Number(Math.hypot(c.x - state.x, c.z - state.z).toFixed(1)),
    }));
  },
  /** The authored finds near the sites, and whether each is still out there. */
  get cryptidFinds() {
    return worldsBuilt.home.finds.map((o) => ({ id: o.id, siteId: o.siteId, itemId: o.itemId, tier: o.tier, x: o.x, z: o.z, taken: kete.has(o.id) }));
  },
  get progression() {
    return { ...state.progression, seen: state.milestonesSeen.slice(), queued: state.sayQueue.map((q) => q.milestone ?? q.text) };
  },
  get world() {
    const d = worlds.returnDoor;
    return {
      which: worlds.which,
      entry: worlds.entry,
      returnDoor: d ? { x: d.x, y: d.y, z: d.z, relaxed: d.relaxed, relocations: d.relocations } : null,
      returnDoorDist: d ? Number(Math.hypot(d.x - state.x, d.z - state.z).toFixed(1)) : null,
      karu: worlds.karu,
      crossing: worlds.crossing,
      fade: Number(worlds.fade.toFixed(3)),
      fadeColour: worlds.fadeColour,
      holdProgress: Number(worlds.holdProgress.toFixed(3)),
      doorway: { ...doorwayPos, open: doorwayOpen(), promptReady: state.tMs >= state.doorwayPromptAfterMs },
      label: worldLabel(worlds, state.tMs),
      doorSeen: worlds.doorSeen,
      lostSec: worlds.which === 'elsewhere' ? Number(((state.tMs - worlds.enteredAtMs) / 1000).toFixed(1)) : 0,
      owedGrants: state.owedGrants.length,
      leftGift: leftGift.pending,
      firstOfferDone: state.elsewhereFirstOfferDone,
      finds: worldsBuilt[worlds.which].finds.map((o) => ({ id: o.id, tier: o.tier, x: o.x, z: o.z, taken: kete.has(o.id) })),
      pityMult: state.pityMult,
      /** the crossing would be refused right now, and what the refusal says */
      epicOutHere: epicOutHere(),
      refusedLine: WORLDS_TUNING.doorway.refusedLine,
      /** a natural Epic may arm where the player stands */
      epicMayArm: epicMayArmHere(),
    };
  },
  /**
   * Where the arch is on screen. Projected, because a door that exists in the
   * state and draws off the edge of the frame is the exact defect this
   * harness has caught three times before.
   */
  get doorFraming() {
    const d = worlds.which === 'home' ? (doorwayOpen() ? doorwayPos : null) : worlds.returnDoor;
    if (!d) return null;
    camera.updateMatrixWorld(true);
    const to = (x, y, z) => {
      const v = new THREE.Vector3(x, y, z).project(camera);
      return { x: Number(v.x.toFixed(3)), y: Number(v.y.toFixed(3)), z: Number(v.z.toFixed(3)) };
    };
    const foot = to(d.x, d.y, d.z);
    const top = to(d.x, d.y + WORLDS_TUNING.doorway.archMetres, d.z);
    return {
      foot,
      top,
      inFrame: Math.abs(foot.x) < 1 && foot.y > -1 && top.y < 1 && foot.z < 1,
      dist: Number(Math.hypot(d.x - state.x, d.z - state.z).toFixed(1)),
    };
  },
  get karu() {
    const p = karu.pos;
    camera.updateMatrixWorld(true);
    const v = new THREE.Vector3(p.x, p.y, p.z).project(camera);
    return {
      present: karu.present,
      pos: { x: Number(p.x.toFixed(2)), y: Number(p.y.toFixed(2)), z: Number(p.z.toFixed(2)) },
      goal: karu.goal,
      escaping: karu.escaping,
      blinkFrame: karu.blinkFrame,
      ndc: { x: Number(v.x.toFixed(3)), y: Number(v.y.toFixed(3)) },
      inFrame: Math.abs(v.x) < 1 && Math.abs(v.y) < 1 && v.z < 1,
      dist: Number(Math.hypot(p.x - state.x, p.z - state.z).toFixed(1)),
    };
  },
  /** The doorway opens by her now, as if her second Epic had just been given. Her line still plays. */
  forceDoorway() {
    if (doorwayOpen()) return true;
    if (!state.milestonesSeen.includes('doorway')) onMilestone('doorway');
    state.doorwayPromptAfterMs = state.tMs;
    return doorwayOpen();
  },
  forceKaru() {
    if (!state.milestonesSeen.includes('karu')) state.milestonesSeen.push('karu');
    if (!karu.present) bringKaru();
    return karu.present;
  },
  /** Cross now, without the hold. Same guard as the real thing. */
  enterDoorway() {
    return startCrossing(worlds.which === 'home' ? 'elsewhere' : 'home');
  },
  /**
   * Give a cryptid a thing of a given tier through the REAL path: a granted
   * item in the kete, stand within reach of the site, open the panel, pick
   * it, give. For the patupaiarehe it is "leave it": stand in the fog and
   * put it down.
   * @param {string} recipientId a key in recipients.json
   * @param {number} [tier]
   */
  giveTo(recipientId, tier = 5) {
    const site = worldsBuilt.home.sites.find((c) => c.id === recipientId);
    if (!site) return null;
    const g = this.grant(tier);
    // Between the site and its landing, inside give reach; a place is anywhere
    // inside its radius.
    const dx = site.landing.x - site.x;
    const dz = site.landing.z - site.z;
    const d = Math.hypot(dx, dz) || 1;
    const reach = site.kind === 'place'
      ? CRYPTID_DATA.debug.placeReachMetres
      : GIVING_TUNING.reachMetres * CRYPTID_DATA.debug.reachFraction;
    this.teleport(site.x + (dx / d) * reach, site.z + (dz / d) * reach);
    // Face the site, so the shot frames it.
    state.yaw = Math.atan2(-(site.x - state.x), -(site.z - state.z));
    this.stepLogic(1 / 60);
    if (!this.openGive()) return null;
    for (let i = 0; i < 40 && givePanel.selected?.id !== g.id; i++) givePanel.move(1);
    this.giveSelected();
    return { gave: g, near: nearRecipientNow()?.id ?? null, lastReaction: state.lastReaction };
  },
  /** What the cryptid render is actually drawing this frame. */
  get cryptidShown() { return cryptidRender.shown; },
  /**
   * Where a drawn cryptid thing is on screen — the pale shape, the
   * driftwood — so a capture can read the pixel at its centre. A projection
   * said the shape was there while it lay under the sand.
   * @param {'shape' | 'driftwood' | 'rock'} what
   */
  cryptidFraming(what) {
    const p = cryptidRender.positions[what];
    if (!p) return null;
    camera.updateMatrixWorld(true);
    const v = new THREE.Vector3(p.x, p.y, p.z).project(camera);
    return {
      x: Number(v.x.toFixed(3)), y: Number(v.y.toFixed(3)),
      inFrame: Math.abs(v.x) < 1 && Math.abs(v.y) < 1 && v.z < 1,
      ground: Number(world.heightAt(p.x, p.z).toFixed(3)),
      pos: { x: Number(p.x.toFixed(2)), y: Number(p.y.toFixed(2)), z: Number(p.z.toFixed(2)) },
    };
  },
  /** Draw one frame with the pale shape held off, for a pixel diff. */
  holdShape(v) { cryptidRender.holdShape = v; },
  /** Render the current state again without advancing time. */
  /**
   * Debug: every tree near the sight line from a camera to point p, with the
   * numbers canopyBetween uses, so a "predicted clear, rendered leaf" mouth
   * can be explained instead of guessed at.
   * @param {{x:number,y:number,z:number}} p @param {'real'|'probe'} which
   */
  /** Where the mouths are, in world space, or null before the open. */
  get mouths() {
    return { first: epicSeq.portal, second: epicSeq.portal2 };
  },
  occlusionReport(p, which = 'real') {
    const cam = which === 'probe' ? probeCamera : camera;
    const from = cam.position;
    const C = TUNING.epicSiting;
    const dx = p.x - from.x;
    const dz = p.z - from.z;
    const len2 = dx * dx + dz * dz;
    const out = [];
    for (const s of visibleScenery) {
      if (s.kind !== 'tree') continue;
      const t = ((s.x - from.x) * dx + (s.z - from.z) * dz) / len2;
      if (t <= 0 || t >= 1) continue;
      const px = from.x + dx * t;
      const pz = from.z + dz * t;
      const perp = Math.hypot(s.x - px, s.z - pz);
      const h = s.scale ?? 6;
      const radius = Math.max(C.canopyRadius, h * C.canopyRadiusOfHeight);
      if (perp > radius + 3) continue;
      const lineY = from.y + (p.y - from.y) * t;
      const base = s.y ?? world.heightAt(s.x, s.z);
      out.push({
        species: s.species, t: +t.toFixed(2), perp: +perp.toFixed(2), radius: +radius.toFixed(2),
        h: +h.toFixed(1), base: +base.toFixed(2), lineY: +lineY.toFixed(2),
        bandFrom: +(base + h * C.canopyBandFrom).toFixed(2), top: +(base + h).toFixed(2),
        blocks: perp <= radius && t > 0.08 && lineY > base + h * C.canopyBandFrom && lineY < base + h,
      });
    }
    return { from: { x: +from.x.toFixed(1), y: +from.y.toFixed(2), z: +from.z.toFixed(1) }, p, trees: out };
  },

  /** Re-run the sprite updates for the current state, then render. */
  redraw() {
    if (worldsBuilt?.home?.sites) {
      cryptidRender.update(
        worldsBuilt.home.sites,
        { x: state.x, y: world.heightAt(state.x, state.z), z: state.z },
        camera,
        { nowMs: state.envMs, stillSeconds: state.lastStillSeconds ?? 0, kelpiiDown: state.kelpiiDown },
      );
    }
    draw();
  },
  /** Where a site is on screen. */
  siteFraming(id) {
    const c = worldsBuilt.home.sites.find((e) => e.id === id);
    if (!c) return null;
    camera.updateMatrixWorld(true);
    const v = new THREE.Vector3(c.x, c.y + 0.8, c.z).project(camera);
    return {
      x: Number(v.x.toFixed(3)), y: Number(v.y.toFixed(3)),
      inFrame: Math.abs(v.x) < 1 && Math.abs(v.y) < 1 && v.z < 1,
    };
  },
  /** The scene fog as it stands this frame: the cold on the ridge is a lean on it. */
  get fog() {
    return {
      colour: `#${scene.fog.color.getHexString()}`,
      near: Number(scene.fog.near.toFixed(1)),
      far: Number(scene.fog.far.toFixed(1)),
      sky: `#${scene.background.getHexString()}`,
    };
  },
  /**
   * A rendered pixel, read straight back from the drawing buffer. The only
   * honest way to assert on a palette: state can say the sky is a sunset while
   * the frame says otherwise.
   * @param {number} fx 0..1 across @param {number} fy 0..1 down
   */
  pixelAt(fx, fy) {
    const gl = renderer.getContext();
    const w = gl.drawingBufferWidth;
    const h = gl.drawingBufferHeight;
    const px = new Uint8Array(4);
    gl.readPixels(Math.floor(fx * (w - 1)), Math.floor((1 - fy) * (h - 1)), 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, px);
    return [px[0], px[1], px[2]];
  },
  /** Pickable objects within `r` of the player, nearest first. */
  objectsNear(r = 12) {
    return activeObjects()
      .filter((o) => !kete.has(o.id))
      .map((o) => ({ id: o.id, tier: o.tier, itemId: o.itemId, x: o.x, z: o.z, authored: Boolean(o.isAuthored || o.isCryptidFind || o.isEpic), dist: Math.hypot(o.x - state.x, o.z - state.z) }))
      .filter((o) => o.dist <= r)
      .sort((a, b) => a.dist - b.dist);
  },
  /** The chase camera this frame, for a projection sanity check. */
  get camera() {
    const p = camera.position;
    return { x: +p.x.toFixed(2), y: +p.y.toFixed(2), z: +p.z.toFixed(2), fov: camera.fov, framing: epicSeq.framing };
  },
  /** Which key is held for the doorway, for a paused-clock test. */
  get holdKeyDown() { return input.isDown('KeyE') || input.isDown('Space') || input.isDown('Enter'); },
  /** What is on screen NOW on the game clock, not what the wall-clock timer has yet to clear. */
  get say() {
    const s = state.lastSay;
    if (!s || state.tMs - s.atMs >= s.ms) return null;
    return s.text;
  },
  navGive(n) { givePanel.move(n); },
  get nearest() {
    if (!state.nearest) return null;
    // Report the RESOLVED identity, the one the HUD shows and the one the
    // player would actually receive. Reporting the raw chunk-generation tier
    // here meant the playthrough harness was measuring a number no player ever
    // sees, and the tier mix it printed was not the game's tier mix.
    const rv = offers.reveal(state.nearest, state.k, state.wonderDry);
    return { id: state.nearest.id, itemId: rv.itemId, tier: rv.tier };
  },
  get visibleCount() { return visible.length; },
  get sceneryCount() { return visibleScenery.length; },

  /**
   * What is growing near the player, by species.
   *
   * The radius matters. Reading the whole resident set instead covers seven
   * chunks in every direction, so a sample taken on the dune and a sample taken
   * deep in the bush returned identical counts, and a zone check against them
   * was measuring nothing.
   * @param {number} [radius] metres
   */
  flora(radius = 45) {
    /** @type {Record<string, number>} */
    const species = {};
    let trees = 0;
    for (const s of visibleScenery) {
      if (s.kind !== 'tree') continue;
      if (Math.hypot(s.x - state.x, s.z - state.z) > radius) continue;
      trees++;
      species[s.species] = (species[s.species] ?? 0) + 1;
    }
    return { trees, species };
  },

  /** Ground height, ignoring nothing. */
  groundAt(x, z) { return world.heightAt(x, z); },

  /** Water at a point: its surface and how deep it is. */
  waterAt(x, z) {
    const surface = world.waterSurfaceAt(x, z);
    return {
      surface: surface === -Infinity ? null : Number(surface.toFixed(2)),
      depth: Number(world.waterDepthAt(x, z).toFixed(3)),
      walkable: walkable(world, x, z),
    };
  },
  get npcs() {
    return npcs.map((n) => ({
      id: n.id, x: n.x, z: n.z,
      dist: Number(Math.hypot(n.x - state.x, n.z - state.z).toFixed(1)),
      textureLoaded: !!n.mesh.material.map?.image,
    }));
  },
  get render() {
    return { calls: renderer.info.render.calls, triangles: renderer.info.render.triangles };
  },
  get held() { return input.held; },

  setSeed(s) {
    seed = s;
    worldsBuilt = buildWorlds(seed);
    doorwayPos = doorwayPosition(NPC_SPOTS[0], worldsBuilt.home.world);
    // A new seed is a new pair of worlds and a fresh crossing machine; a
    // restore puts the saved one back over it. Karu and the milestones are
    // the player's, not the seed's, so they stay.
    worlds = makeWorlds({ seed });
    // The fresh-water grid closes over the OLD world's field, so it has to be
    // rebuilt too — enterWorld does that, along with the terrain mesh.
    enterWorld('home');
  },
  setYaw(y) { state.yaw = y; },
  teleport(x, z) {
    state.x = x;
    state.z = z;
    loadedKey = '';
    refreshChunks(true);
    terrain.update(x, z, true);
    fresh.update(x, z, true);
  },
  /** Queue a collect press, so a test does not need a real keyboard. */
  collect() { input.queueCollect(); },
  pause() { clock.pause(); },
  resume() { clock.resume(); },
  step(dt) { clock.step(dt); },
  stepLogic(dt) { clock.stepLogic(dt); },
  CHUNK_SIZE,
};

advance(0);
draw();
window.__lb.ready = true;

// --- the title -------------------------------------------------------------
// The world is already built and rendering behind this. Starting the game is
// not a load: it is the overlay coming off something that was always running.
const help = document.createElement('div');
help.id = 'help';
// The xbox50 console serves carts under /cart/ — gamepad hands, gamepad words.
help.textContent = location.pathname.startsWith('/cart/')
  ? 'stick to walk · click to pick up · hold click to give'
  : touchControls.active
    ? 'left thumb to walk · drag to look · tap ◉ to pick up · hold ◉ to give'
    : 'WASD to walk · drag to look · E to pick up · G to give';
help.style.opacity = '0';
document.body.appendChild(help);
window.addEventListener('lb-touch-on', () => {
  if (!location.pathname.startsWith('/cart/')) {
    help.textContent = 'left thumb to walk · drag to look · tap ◉ to pick up · hold ◉ to give';
  }
});

function beginGame(characterId) {
  setPlayerCharacter(characterId);
  state.started = true;
  // A gesture happened — the button — so this is the moment the browser will
  // let audio start. The title loop ends here; from now on she is heard only
  // in the world, on herself.
  audio.unlock();
  audio.titleSongStop();
  help.style.opacity = '';
  const hideHelp = () => { help.style.opacity = '0'; };
  kete.on(hideHelp);
  setTimeout(hideHelp, 12000);
}

// --- save and load ---------------------------------------------------------
// The game saves itself: after every pickup, every gift, and every thirty
// seconds on foot. There is no save button because there is nothing to decide.
const slot = makeSaveSlot();
let lastAutosaveMs = 0;

function snapshot() {
  return {
    seed,
    character: playerId,
    player: { x: state.x, z: state.z, yaw: state.yaw },
    tMs: state.tMs,
    kete: kete.serialize(),
    discernment: discernment.serialize(),
    offers: offers.serialize(),
    knownCreatures: state.knownCreatures.slice(),
    epic: {
      count: state.epicCounts.natural,
      granted: state.epicCounts.granted,
      ticks: state.epicTicks,
      lastEpicAtMs: state.lastEpicAtMs,
      wonderDry: state.wonderDry,
      recentVo: state.recentVo.slice(),
    },
    // v2: which world, the way back, Karu, and which of her lines are said.
    // `seed` above stays the HOME seed; elsewhere's is derived from it.
    world: worlds.snapshot(),
    karu: karu.serialize(),
    milestonesSeen: state.milestonesSeen.slice(),
    leftGift: leftGift.serialize(),
    // A grant owed and not yet opened. The hold is dropped: on a load it is
    // due at once, which is the promise kept at the earliest moment.
    owedGrants: state.owedGrants.map((g) => ({ tier: g.tier, siteId: g.siteId })),
    elsewhereFirstOfferDone: state.elsewhereFirstOfferDone,
    // The driftwood lying: a save is legal in the gift-to-grant gap, and a
    // load there must not stand the kelpī up in front of its own mouths.
    kelpiiDown: state.kelpiiDown,
  };
}

function autosave(force = false) {
  if (!state.started) return false;
  // Never save mid-Epic: the portal, the falling object and the pending
  // delivery are not in the snapshot, so a save here would load into a world
  // that owes the player a find and has forgotten it. A grant merely OWED is
  // in the snapshot and does not stop a save: the gap between a cryptid gift
  // and its tier 6 is exactly where a closed tab used to lose the tier 6.
  if (state.epicActive || state.epicPending) return false;
  // Nor mid-fade: the swap has not happened yet, so the snapshot would say one
  // world and stand the player in the other.
  if (worlds.crossing) return false;
  if (!force && state.tMs - lastAutosaveMs < 30_000) return false;
  lastAutosaveMs = state.tMs;
  return slot.save(snapshot());
}

/** @param {any} s a blob from `snapshot()` */
function restoreFrom(s) {
  if (s.seed !== seed) window.__lb.setSeed(s.seed);
  kete.restore(s.kete);
  discernment.restore(s.discernment);
  offers.restore(s.offers);
  state.knownCreatures = (s.knownCreatures ?? []).slice();
  state.epicCounts = { natural: s.epic?.count ?? 0, granted: s.epic?.granted ?? 0 };
  state.epicTicks = s.epic?.ticks ?? 0;
  state.wonderDry = s.epic?.wonderDry ?? 0;
  state.recentVo = (s.epic?.recentVo ?? []).slice();
  // Time picks up where it left off, so the Epic wall-clock floor still holds
  // across a reload instead of resetting to "just had one".
  state.tMs = s.tMs ?? 0;
  state.envMs = state.tMs;
  state.lastEpicAtMs = s.epic?.lastEpicAtMs ?? -1e9;
  state.milestonesSeen = (s.milestonesSeen ?? []).slice();
  state.sayQueue = [];
  state.owedGrants = (s.owedGrants ?? []).map((g) => ({ tier: g.tier, at: state.tMs, siteId: g.siteId ?? null }));
  state.progression = progressionFrom(kete.ledger);
  state.elsewhereFirstOfferDone = Boolean(s.elsewhereFirstOfferDone);
  state.kelpiiDown = Boolean(s.kelpiiDown);
  // Per-approach and per-delivery scratch, never in the save; a load is a
  // fresh approach with nothing armed.
  state.doorRefusedShown = false;
  state.epicGrantSite = null;
  state.epicGranted = false;
  state.epicGrantedBy = null;
  leftGift.restore(s.leftGift);
  // Loading is never a way out: a save in elsewhere loads into elsewhere, with
  // the lost clock restarted from now.
  worlds.restore(s.world, state.tMs);
  karu.restore(s.karu);
  state.yaw = s.player.yaw;
  state.x = s.player.x;
  state.z = s.player.z;
  enterWorld(worlds.which);
  // Her milestone lines already said stay said; one crossed in the gap
  // between the gift and the line plays now, once.
  queueMilestones(PROGRESSION_TUNING.delayMs);
  state.collected = kete.total;
  lastAutosaveMs = state.tMs;
  beginGame(s.character);
}

function loadGame() {
  const s = slot.load();
  if (!s) { title._toPick(); return; }
  restoreFrom(s);
}

const title = makeTitleScreen(document.body, {
  onStart: (id) => { slot.clear(); beginGame(id); },
  onLoad: loadGame,
  canLoad: slot.exists(),
  // Her song, under the character select. A getter for the clock rather than
  // a value, because the clip may still be decoding when Start is pressed.
  onFirstGesture: () => audio.titleSong(() => state.tMs),
});

// A pickup saves at once. A gift does NOT save here: the event fires inside
// kete.give, before doGive has owed the grant or left the gift, and a save in
// that gap had the ledger and not the tier 6 it bought. doGive saves last.
kete.on((e) => { if (e.type === 'collect') autosave(true); });
addEventListener('pagehide', () => autosave(true));

window.__lb.save = {
  get exists() { return slot.exists(); },
  snapshot,
  restore: restoreFrom,
  write: () => autosave(true),
  clear: () => slot.clear(),
  load: loadGame,
};

window.__lb.audio = {
  get voiceReady() { return audio.voiceReady; },
  get titleSongPlayed() { return audio.titleSongPlayed; },
};

window.__lb.title = {
  get open() { return title.open; },
  get panel() { return title.panel; },
  get roster() { return title.roster; },
  get selected() { return title.selectedId; },
  get canLoad() { return title.canLoad; },
  toPick() { title._toPick(); },
  select(i) { title._select(i); },
  start() { title._start(); },
  load() { title._load(); },
};
window.__lb.started = () => state.started;
window.__lb.character = () => playerId;
