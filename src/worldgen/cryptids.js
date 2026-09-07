import { rngFor } from './rng.js';
import { SEA_LEVEL } from './terrain.js';
import { chunkIndex } from './chunk.js';
import C from '../../data/cryptids.json' with { type: 'json' };
import R from '../../data/recipients.json' with { type: 'json' };
import ITEMS from '../../data/items.json' with { type: 'json' };
import T from '../../data/tuning.json' with { type: 'json' };

/**
 * The cryptids: where they are, what lies near them, and what they do with
 * what they are handed. Pure maths over the terrain plus data; no three, no
 * DOM, no main.js, so every placement here is unit-testable and deterministic.
 *
 * PUBLIC INTERFACE (integration reads this, not the design doc)
 *
 *   findCryptidSites(terrain, seed, genScenery?) -> Site[]
 *       One Site per entry in data/cryptids.json `sites`, in data order.
 *       Site = { id, name, kind: 'cryptid'|'place', x, y, z, inland,
 *                landing: {x, y, z}, water: {x, z} | null, fellBack: boolean }
 *       `genScenery` (makeScenery(...).genScenery) lets the kelpī siting
 *       refuse a mouth of the creek where a tree crown would sit between
 *       the chase camera and the driftwood, or the player, from where the
 *       player gives (`C.sight`). Without it the check is skipped.
 *       `water` is where the grotto's pale shape lies: past the waterline,
 *       found by scanning seaward (`C.sites.grotto_mermaids.shape`).
 *       `landing` is a precomputed dry, walkable, slope-ok point at least
 *       landing.minFromSite metres from the site. A GRANTED delivery that fails
 *       siting falls back to `site.landing`, never to fallbackSite(q): at the
 *       grotto, straight ahead of the player is the sea.
 *       Never returns fewer than three; a criterion that cannot be met falls
 *       back to the fixed offset in data and flags `fellBack`.
 *
 *   cryptidFinds(sites, seed, terrain) -> WorldObject[]
 *       The authored tier-5 objects, findsPerSite per site, within
 *       cryptidArea.radius, on dry walkable ground. Shaped exactly like a
 *       delivered Epic object (`isCryptidFind: true`, `siteId`). Integration:
 *       (1) concatenate into activeObjects() the way state.epicObjects is, and
 *       (2) at world build pin each with offers.force(o.id, {tier, itemId}).
 *       Ids are stable, so kete.has(id) dedupes them for free across saves.
 *       They are NOT chunk output: the home-world hash does not move.
 *
 *   cryptidRecipients(sites) -> {id, x, z}[]
 *       What to hand to recipientInReach in place of (or concatenated with)
 *       the NPC list. Excludes kind 'place' (patupaiarehe): there is nobody
 *       there to give to.
 *
 *   cryptidGrantFor(recipientId, tier) -> {tier: 6} | null
 *       Data-driven (grantsAtTier / grantsTier on the recipient). Pure. Call it
 *       beside offerTo(): on a grant, hold the reaction line alone for
 *       C.grant.lineHoldMs, then armEpic(grant.tier, {granted: true}) — a
 *       granted Epic must skip discernment.onEpicDelivered() and leave
 *       lastEpicAtMs alone. If an Epic is already active or pending, queue it
 *       (deferred, never cancelled).
 *
 *   warmthAt(sites, px, pz) -> Record<siteId, number 0..1>
 *       0 outside cryptidArea.senseRadius, 1 at cryptidArea.radius. The
 *       approach cue per area: mermaids -> the water shimmer/chime cue at this
 *       strength; kelpī -> the driftwood is visible; patupaiarehe -> lerp the
 *       scene fog toward sites.patupaiarehe.fog by this. Feel warmer before
 *       you see anything.
 *
 *   nearestSite(sites, px, pz) -> {site, dist} | null
 *   sitesByDistance(sites, px, pz) -> Site[] nearest first. Use this in
 *       offerTo's caller to make the FIRST sighting she names the nearest
 *       site: sightings carry a `site` key matching Site.id.
 *
 *   mermaidShown({site, px, pz, stillSeconds}) -> boolean
 *       The pale shape is above the water only while the player has been
 *       still for sites.grotto_mermaids.stillSeconds within stillRadius.
 *       Integration tracks stillSeconds (seconds since the player last moved).
 *
 *   kelpiiStanding(site, px, pz) -> boolean  inside standRadius.
 *
 *   pickLanding(terrain, site, {px, pz, fx, fz, isInFrame?, isVisible?,
 *               frameOffset?, avoid?}) -> {x, y, z}
 *       A landing for the player who is actually giving: ahead of them, and
 *       in frame when `isInFrame` is given. The granted fallback path uses
 *       this, never `site.landing`, which is a fixed point and sits behind a
 *       player who approached from the landing's side. `avoid` is a list of
 *       {x, z} (the authored finds) no landing may sit within
 *       landing.findClearMetres of. Weights are `landing.score` in data.
 *
 *   crownOnLine(genScenery, from{x,y,z}, to{x,y,z}) -> boolean
 *       Would a tree crown sit on this sight line? The same rule as
 *       main.js canopyBetween, over the scenery generator, so siting can
 *       ask it before there is a scene.
 *
 *   makeLeftGift() -> { leave(siteId, nowMs, tier), update(sites, px, pz, fx, fz),
 *                       pending, serialize(), restore(s) }
 *       Patupaiarehe. The player leaves a gift inside the area (the existing
 *       drop verb, or a 'leave it' action integration adds — it removes the
 *       item from the kete with kete.give(id, 'patupaiarehe', now)). `update`
 *       returns {siteId, grant: {tier}} exactly once, after the player has
 *       been >= cryptidArea.radius from the site and is facing back toward it;
 *       otherwise null. A tier that earns nothing (cryptidGrantFor) clears the
 *       gift and returns null. No line. The only feedback is the fog.
 *
 *   CRYPTID_DATA  the parsed data/cryptids.json.
 */

const AREA = C.cryptidArea;
const LAND = C.landing;

function clamp01(x) {
  return Math.min(1, Math.max(0, x));
}

/**
 * The z at which `inland` metres inland sits, for this x.
 *
 * `inlandAt(x, z)` is `z - shore(x)`, so the shoreline offset at this x is
 * simply `-inlandAt(x, 0)` and the answer is exact — no bisection, no scan.
 * @param {any} terrain @param {number} x @param {number} inland
 */
function zForInland(terrain, x, inland) {
  return inland - terrain.inlandAt(x, 0);
}

/**
 * Can a player stand here? Mirrors main.js `walkable` on purpose: the sea is a
 * hard edge; fresh water only once it is deep. Kept private so the two cannot
 * drift into different answers for the same ground without a test noticing.
 * @param {any} terrain
 */
function standable(terrain, x, z) {
  if (terrain.isSubmerged(x, z)) return false;
  if (terrain.inlandAt(x, z) < LAND.shoreBandMetres) return dryAt(terrain, x, z);
  return terrain.waterDepthAt(x, z) < LAND.maxWaterDepth;
}

/** Above the sea by the dry margin: the shore rule, written once. */
function dryAt(terrain, x, z) {
  return terrain.heightAt(x, z) > SEA_LEVEL + LAND.dryMarginMetres;
}

/**
 * A landing chosen at give time, for the player who is actually standing there.
 *
 * `site.landing` is a fixed point per site, and from the landing's side of the
 * site — where a player who walked in from the beach stands — it is behind
 * them. On four seeds in six the granted mouths opened at NDC x of -3 or 7:
 * the tell leaned at nothing and the sunset never showed. So the same ring is
 * searched again here, scored by how far AHEAD of the player the point is,
 * and a candidate whose mouth would be behind a crown or off the frame
 * (`isInFrame`, the check siting itself uses) loses to one whose mouth would
 * not. Never null: with nothing ahead and nothing in frame the best bearing
 * wins, and failing even that the fixed landing stands.
 *
 * Two sight tests, ranked: `isInFrame` is siting's own (comfortably inside
 * the frame, no crown on the line); `isVisible` is the loose one (anywhere on
 * screen, no crown). At the estuary nothing may pass the strict test — the
 * canopy is dense on purpose — and without the loose tier the choice fell
 * to "best bearing", which on seed beta was straight behind a pōhutukawa.
 *
 * @param {any} terrain
 * @param {Site} site
 * @param {{px: number, pz: number, fx: number, fz: number,
 *   isInFrame?: (x: number, y: number, z: number) => boolean,
 *   isVisible?: (x: number, y: number, z: number) => boolean,
 *   frameOffset?: (x: number, y: number, z: number) => number}} p the player, unit facing;
 *   `frameOffset` is 0 at the middle of the frame and grades the visible ones
 * @returns {{x: number, y: number, z: number}}
 */
export function pickLanding(terrain, site, {
  px, pz, fx, fz, isInFrame, isVisible, frameOffset, avoid = [],
  // Landings already tried and found wanting by the caller — the first mouth
  // opened clear but the second, across the drift, was in a crown on both
  // sides. Skipped, so the next pick is a different point and not the same
  // one again.
  reject = [],
}) {
  const W = LAND.score;
  const N = LAND.directions;
  const clear2 = LAND.findClearMetres * LAND.findClearMetres;

  // Every candidate, scored. Scoring alone was the bug: the sight-line
  // penalty is larger than the whole "ahead" range, so on the default capture
  // seed every landing in front of the giver lost ten points for passing near
  // the kelpī and a point BEHIND the player won at minus one. The mouth then
  // opened at NDC y of -3.4 — behind the camera — with every state assertion
  // green. So the ranking is now in tiers, and a candidate behind the player
  // can only win when nothing ahead is standable at all.
  const cands = [];
  for (let d = LAND.minFromSite; d <= LAND.maxFromSite; d += LAND.searchStep) {
    for (let i = 0; i < N; i++) {
      const a = (i / N) * Math.PI * 2;
      const x = site.x + Math.sin(a) * d;
      const z = site.z + Math.cos(a) * d;
      if (!standable(terrain, x, z)) continue;
      if (terrain.slopeAt(x, z) > LAND.maxSlope) continue;
      // Never inside pickup reach of an authored find: the prompt names
      // whichever is nearest, and on seed beta E took the cryptid's own
      // tier 5 while the tier 6 stayed on the ground beside it.
      if (avoid.some((f) => (f.x - x) ** 2 + (f.z - z) ** 2 < clear2)) continue;
      if (reject.some((r) => Math.abs(r.x - x) < 0.5 && Math.abs(r.z - z) < 0.5)) continue;
      const y = terrain.heightAt(x, z);
      const dx = x - px;
      const dz = z - pz;
      const len = Math.hypot(dx, dz) || 1;
      const ahead = (dx * fx + dz * fz) / len;
      // `inFrame` is siting's strict frame test and knows nothing about
      // crowns; `clear` is the looser frame with the canopy test. A landing
      // needs both to be seen: on seed beta the strictly-framed pick opened
      // behind a pōhutukawa and the mouth's centre pixel was leaf.
      const clear = isVisible ? Boolean(isVisible(x, y, z)) : true;
      const inFrame = clear && Boolean(isInFrame && isInFrame(x, y, z));
      const visible = Boolean(isVisible) && clear;
      const behindSite = sightLinePassesSite(px, pz, x, z, site);
      // Within a tier: in frame outranks ahead; among the merely visible,
      // nearer the middle wins, because the second mouth opens across the
      // drift from the first and needs the room; the site's own distance
      // band breaks ties, so it sits where a sited mouth would.
      let score = ahead;
      if (inFrame) score += W.inFrame;
      else if (visible) score += W.visible - (frameOffset ? W.offsetPenalty * frameOffset(x, y, z) : 0);
      score -= Math.abs(d - LAND.minFromSite) * W.distanceTie;
      if (behindSite) score -= W.sightLine;
      cands.push({ x, y, z, ahead, inFrame, visible, behindSite, score });
    }
  }
  if (cands.length === 0) return site.landing;

  // The tiers. Each is "the best of these, if there are any":
  //   1. in frame, ahead, not behind the cryptid  — what the player will see
  //   2. visible, ahead, not behind the cryptid
  //   3. ahead at all, not behind the cryptid
  //   4. ahead at all
  //   5. anything
  const tiers = [
    (c) => c.inFrame && c.ahead > 0.15 && !c.behindSite,
    (c) => c.visible && c.ahead > 0.15 && !c.behindSite,
    (c) => c.ahead > 0.15 && !c.behindSite,
    (c) => c.ahead > 0.15,
    () => true,
  ];
  for (const pass of tiers) {
    let best = null;
    for (const c of cands) {
      if (!pass(c)) continue;
      if (!best || c.score > best.score) best = c;
    }
    if (best) return { x: best.x, y: best.y, z: best.z };
  }
  return site.landing;
}

/**
 * A dry, walkable, not-too-steep point near the site.
 *
 * Angles are tried inland-first (+z), because at the grotto every seaward
 * bearing is the sea and at the ridge every downhill bearing is a slope.
 * Never null: if nothing passes, the point straight inland is returned anyway,
 * because a granted find that has nowhere to land is a promise broken.
 * @param {any} terrain @param {number} sx @param {number} sz
 */
function findLanding(terrain, sx, sz) {
  const angles = [];
  const N = LAND.directions;
  for (let i = 0; i < N; i++) {
    const a = (i / N) * Math.PI * 2;
    // Sort by how far off straight-inland the bearing is.
    angles.push({ a, off: Math.abs(Math.atan2(Math.sin(a), Math.cos(a))) });
  }
  angles.sort((p, q) => p.off - q.off);

  for (let d = LAND.minFromSite; d <= LAND.maxFromSite; d += LAND.searchStep) {
    for (const { a } of angles) {
      const x = sx + Math.sin(a) * d;
      const z = sz + Math.cos(a) * d;
      if (!standable(terrain, x, z)) continue;
      if (terrain.slopeAt(x, z) > LAND.maxSlope) continue;
      return { x, y: terrain.heightAt(x, z), z };
    }
  }
  const x = sx;
  const z = sz + LAND.minFromSite;
  return { x, y: terrain.heightAt(x, z), z };
}

/**
 * Does the line from the player to (x, z) pass within `sightClearMetres` of
 * the site, with the site nearer than the point? The billboard at the site is
 * what would be in the way.
 */
function sightLinePassesSite(px, pz, x, z, site) {
  const dx = x - px;
  const dz = z - pz;
  const len2 = dx * dx + dz * dz;
  if (len2 < 1e-6) return false;
  const t = ((site.x - px) * dx + (site.z - pz) * dz) / len2;
  if (t <= 0 || t >= 1) return false;
  const cx = px + dx * t;
  const cz = pz + dz * t;
  return Math.hypot(site.x - cx, site.z - cz) < LAND.sightClearMetres;
}

/**
 * Scan a search window on a grid, in (inland ascending, x ascending) order, and
 * hand each point to `score`. The best-scoring point wins; ties go to the first
 * seen, which is what makes the result deterministic for a seed.
 *
 * @param {any} terrain
 * @param {{xMin: number, xMax: number, inlandMin: number, inlandMax: number}} w
 * @param {number} step
 * @param {(x: number, z: number, inland: number) => number} score -Infinity to reject
 */
function scanWindow(terrain, w, step, score) {
  let best = null;
  for (let inland = w.inlandMin; inland <= w.inlandMax + 1e-9; inland += step) {
    for (let x = w.xMin; x <= w.xMax + 1e-9; x += step) {
      const z = zForInland(terrain, x, inland);
      const s = score(x, z, inland);
      if (s === -Infinity) continue;
      if (!best || s > best.s) best = { x, z, inland, s };
    }
  }
  return best;
}

/**
 * Would a tree crown sit between `from` and `to`? The same rule main.js
 * `canopyBetween` uses on the live scenery, over the generator instead, so a
 * site can be refused before there is a scene: a tree blocks if its trunk
 * passes within max(canopyRadius, height * canopyRadiusOfHeight) of the sight
 * line where that line is inside the crown's vertical band.
 * @param {(cx: number, cz: number) => {kind: string, x: number, y?: number, z: number, scale?: number}[]} genScenery
 * @param {{x: number, y: number, z: number}} from
 * @param {{x: number, y: number, z: number}} to
 */
export function crownOnLine(genScenery, from, to) {
  const K = T.epicSiting;
  const dx = to.x - from.x;
  const dz = to.z - from.z;
  const len2 = dx * dx + dz * dz;
  if (len2 < 1e-6) return false;
  const cx = chunkIndex((from.x + to.x) / 2);
  const cz = chunkIndex((from.z + to.z) / 2);
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      for (const s of genScenery(cx + i, cz + j)) {
        if (s.kind !== 'tree') continue;
        const t = ((s.x - from.x) * dx + (s.z - from.z) * dz) / len2;
        if (t <= 0.08 || t >= 1) continue;
        const px = from.x + dx * t;
        const pz = from.z + dz * t;
        const h = s.scale ?? 6;
        const radius = Math.max(K.canopyRadius, h * K.canopyRadiusOfHeight);
        if ((s.x - px) ** 2 + (s.z - pz) ** 2 > radius * radius) continue;
        const lineY = from.y + (to.y - from.y) * t;
        const base = s.y ?? 0;
        if (lineY > base + h * K.canopyBandFrom && lineY < base + h) return true;
      }
    }
  }
  return false;
}

/**
 * From where the player gives to a cryptid at (sx, sz), would the chase
 * camera see the cryptid and the player, or a crown? The player stands
 * `giveStandMetres` off the site on the landing's side; the camera sits
 * behind them as main.js poses it (`C.sight`). Two lines: lens to the
 * driftwood's centre, lens to the player's head. Either behind a crown is a
 * give the frame cannot show.
 */
export function giveSightClear(terrain, genScenery, sx, sz) {
  const S = C.sight;
  const landing = findLanding(terrain, sx, sz);
  const dx = landing.x - sx;
  const dz = landing.z - sz;
  const len = Math.hypot(dx, dz) || 1;
  const ux = dx / len;
  const uz = dz / len;
  const px = sx + ux * S.giveStandMetres;
  const pz = sz + uz * S.giveStandMetres;
  const pitch = S.cameraPitchDeg * (Math.PI / 180);
  const back = S.cameraDistance * Math.cos(pitch);
  const up = S.cameraDistance * Math.sin(pitch);
  const camX = px + ux * back;
  const camZ = pz + uz * back;
  const cam = { x: camX, y: terrain.heightAt(px, pz) + up + S.cameraEyeMetres, z: camZ };
  if (crownOnLine(genScenery, cam, { x: sx, y: terrain.heightAt(sx, sz) + S.kelpiiCentreMetres, z: sz })) return false;
  if (crownOnLine(genScenery, cam, { x: px, y: terrain.heightAt(px, pz) + S.playerHeadMetres, z: pz })) return false;
  return true;
}

/**
 * Where the grotto's pale shape lies: across from the site, then seaward
 * until the ground is under the sea by the shape's depth, then a little
 * further. Null only if the scan finds no water, which a shoreline site
 * cannot do; the render hides the shape then rather than bury it.
 * @param {any} terrain @param {{x: number, z: number}} site
 * @returns {{x: number, z: number} | null}
 */
export function mermaidShapeSpot(terrain, site) {
  const S = C.sites.grotto_mermaids.shape;
  const x = site.x + S.sideMetres;
  for (let d = 0; d <= S.maxScanMetres; d += S.scanStep) {
    const z = site.z - d;
    if (terrain.heightAt(x, z) < SEA_LEVEL - S.depthMetres) return { x, z: z - S.pastMetres };
  }
  return null;
}

/** The grotto: the shoreline at negative x where the outcrop field peaks. */
function siteMermaids(terrain, def) {
  return scanWindow(terrain, def.search, def.scanStep, (x, z) => {
    // The give reach is 3.2m; the player has to be able to stand near it.
    if (!dryAt(terrain, x, z)) return -Infinity;
    return terrain.rockAt(x, z);
  });
}

/**
 * The estuary mouth: the LOWEST-inland point where the creek first becomes
 * water. Lower inland scores higher; x breaks ties toward the beach end.
 */
function siteKelpii(terrain, def, genScenery) {
  const pass = (window, maskMin) => scanWindow(terrain, window, def.scanStep, (x, z, inland) => {
    const { mask } = terrain.channelAt(x, z, terrain.inlandAt(x, z));
    if (mask < maskMin) return -Infinity;
    if (terrain.isSubmerged(x, z)) return -Infinity;
    if (!terrain.nearWaterAt(x, z)) return -Infinity;
    // Last, because it is the dear one: a crown between the lens and the
    // driftwood from where the player gives is a give the frame never shows.
    if (genScenery && !giveSightClear(terrain, genScenery, x, z)) return -Infinity;
    return -inland - Math.abs(x - window.xMin) * 1e-4;
  });
  // Tight window first; then relaxed, never cancelled. See _relaxNote in data.
  return pass(def.search, def.maskMin)
    ?? pass({ ...def.search, ...def.relax }, def.relax.maskMin);
}

/** The ridge: a local high point in deep bush, dry, standable. */
function sitePatupaiarehe(terrain, def) {
  const r = def.localMaxRadius;
  return scanWindow(terrain, def.search, def.scanStep, (x, z) => {
    if (!standable(terrain, x, z)) return -Infinity;
    if (terrain.slopeAt(x, z) > LAND.maxSlope) return -Infinity;
    const h = terrain.heightAt(x, z);
    if (h <= terrain.heightAt(x + r, z) || h <= terrain.heightAt(x - r, z)) return -Infinity;
    if (h <= terrain.heightAt(x, z + r) || h <= terrain.heightAt(x, z - r)) return -Infinity;
    return h;
  });
}

const SITERS = {
  grotto_mermaids: siteMermaids,
  moana_kelpii: siteKelpii,
  patupaiarehe: sitePatupaiarehe,
};

/**
 * @typedef {Object} Site
 * @property {string} id
 * @property {string} name  display spelling, as she wrote it
 * @property {'cryptid'|'place'} kind
 * @property {number} x @property {number} y @property {number} z
 * @property {number} inland
 * @property {{x: number, y: number, z: number}} landing
 * @property {{x: number, z: number} | null} water where the pale shape lies (grotto only)
 * @property {boolean} fellBack
 */

/**
 * Where the three cryptids are, for this seed. Deterministic: the scan is a
 * fixed grid over the terrain, and the terrain is a function of the seed.
 * @param {any} terrain from makeTerrain
 * @param {string} seed
 * @returns {Site[]}
 */
export function findCryptidSites(terrain, seed, genScenery = null) {
  void seed; // placement is a function of the terrain, which is the seed's.
  /** @type {Site[]} */
  const out = [];
  for (const [id, def] of Object.entries(C.sites)) {
    const hit = SITERS[id]?.(terrain, def, genScenery) ?? null;
    let x;
    let z;
    let fellBack = false;
    if (hit) {
      x = hit.x;
      z = hit.z;
    } else {
      // Relaxed, never cancelled: the same rule as portal siting.
      x = def.fallback.x;
      z = zForInland(terrain, x, def.fallback.inland);
      fellBack = true;
    }
    const kind = R.recipients[id]?.kind === 'place' ? 'place' : 'cryptid';
    out.push({
      id,
      name: def.name,
      kind,
      x,
      y: terrain.heightAt(x, z),
      z,
      inland: terrain.inlandAt(x, z),
      landing: findLanding(terrain, x, z),
      water: id === 'grotto_mermaids' ? mermaidShapeSpot(terrain, { x, z }) : null,
      fellBack,
    });
  }
  return out;
}

const AUTHORED_FINDS = ITEMS.items.filter((i) => i.biome === 'authored' && i.tier === 5);

/**
 * The cryptid finds. Authored objects on the Epic path, never chunk output.
 * @param {Site[]} sites @param {string} seed @param {any} terrain
 */
export function cryptidFinds(sites, seed, terrain) {
  const out = [];
  for (const site of sites) {
    for (let n = 0; n < AREA.findsPerSite; n++) {
      const rng = rngFor(seed, 'cryptid', site.id, n);
      let x = site.landing.x;
      let z = site.landing.z;
      for (let tries = 0; tries < 40; tries++) {
        const a = rng() * Math.PI * 2;
        const d = AREA.findMinFromSite + rng() * (AREA.radius - AREA.findMinFromSite);
        const cx = site.x + Math.sin(a) * d;
        const cz = site.z + Math.cos(a) * d;
        if (!standable(terrain, cx, cz)) continue;
        if (terrain.slopeAt(cx, cz) > AREA.findMaxSlope) continue;
        x = cx;
        z = cz;
        break;
      }
      const item = AUTHORED_FINDS[Math.min(AUTHORED_FINDS.length - 1, Math.floor(rng() * AUTHORED_FINDS.length))];
      out.push({
        id: `cryptid:${site.id}:${n}`,
        itemId: item.id,
        tier: 5,
        x,
        y: terrain.heightAt(x, z),
        z,
        rot: rng() * Math.PI * 2,
        // 'beach', not 'authored': anything reaching offers.reveal with an
        // unknown biome gets an empty weight table and a NaN tier. force()
        // pins these first, but the object still has to be well-formed.
        biome: 'beach',
        nearWater: false,
        tierRoll: 0,
        itemRoll: 0,
        isCryptidFind: true,
        siteId: site.id,
      });
    }
  }
  return out;
}

/**
 * The cryptids you can actually hand something to. A place is not a recipient.
 * @param {Site[]} sites
 */
export function cryptidRecipients(sites) {
  return sites
    .filter((s) => s.kind !== 'place')
    .map((s) => ({ id: s.id, x: s.x, z: s.z }));
}

/**
 * Does handing `recipientId` a tier-`tier` item earn a grant?
 * @param {string} recipientId @param {number} tier
 * @returns {{tier: number} | null}
 */
export function cryptidGrantFor(recipientId, tier) {
  const def = R.recipients[recipientId];
  if (!def || def.grantsAtTier == null || def.grantsTier == null) return null;
  // Exact, not at-or-above. A tier 6 handed back earned another tier 6, which
  // made Karu's currency free: every Epic epic returned yielded a fresh one,
  // forever. The tier-6 reaction lines already describe nothing happening.
  return tier === def.grantsAtTier ? { tier: def.grantsTier } : null;
}

/**
 * How near each area the player is, 0 (outside senseRadius) to 1 (inside the
 * find radius). Linear in distance; the cues it drives have their own curves.
 * @param {Site[]} sites @param {number} px @param {number} pz
 * @returns {Record<string, number>}
 */
export function warmthAt(sites, px, pz) {
  /** @type {Record<string, number>} */
  const out = {};
  for (const s of sites) {
    const d = Math.hypot(s.x - px, s.z - pz);
    out[s.id] = clamp01(1 - (d - AREA.radius) / (AREA.senseRadius - AREA.radius));
  }
  return out;
}

/** @param {Site[]} sites @param {number} px @param {number} pz */
export function nearestSite(sites, px, pz) {
  let best = null;
  for (const s of sites) {
    const dist = Math.hypot(s.x - px, s.z - pz);
    if (!best || dist < best.dist) best = { site: s, dist };
  }
  return best;
}

/** @param {Site[]} sites @param {number} px @param {number} pz */
export function sitesByDistance(sites, px, pz) {
  return sites
    .map((s) => ({ s, d: Math.hypot(s.x - px, s.z - pz) }))
    .sort((a, b) => a.d - b.d)
    .map((e) => e.s);
}

/**
 * 'only if you're already quiet.'
 * @param {{site: Site, px: number, pz: number, stillSeconds: number}} a
 */
export function mermaidShown({ site, px, pz, stillSeconds }) {
  const def = C.sites.grotto_mermaids;
  if (Math.hypot(site.x - px, site.z - pz) > def.stillRadius) return false;
  return stillSeconds >= def.stillSeconds;
}

/** 'they look like driftwood until they don't.' */
export function kelpiiStanding(site, px, pz) {
  return Math.hypot(site.x - px, site.z - pz) <= C.sites.moana_kelpii.standRadius;
}

/**
 * A gift left for the patupaiarehe. See the interface block at the top.
 *
 * Two states, and the order is the point: you have to LEAVE before anything
 * happens, and it happens when you look back. A player standing over the gift
 * waiting gets nothing, however long they wait.
 */
export function makeLeftGift() {
  /** @type {{siteId: string, at: number, away: boolean, tier: number} | null} */
  let pending = null;

  return {
    get pending() { return pending ? { ...pending } : null; },

    /**
     * The tier goes down with the gift, because the answer depends on it: a
     * shell chip left in the fog earns exactly what a shell chip handed to
     * the kelpī earns, which is nothing. The first cut answered every tier
     * with a tier 6.
     * @param {string} siteId @param {number} nowMs @param {number} tier
     */
    leave(siteId, nowMs, tier) {
      // One at a time. Leaving a second gift restarts the walk-away.
      pending = { siteId, at: nowMs, away: false, tier };
    },

    /**
     * @param {Site[]} sites @param {number} px @param {number} pz
     * @param {number} fx @param {number} fz unit facing
     * @returns {{siteId: string, grant: {tier: number}} | null}
     */
    update(sites, px, pz, fx, fz) {
      if (!pending) return null;
      const site = sites.find((s) => s.id === pending.siteId);
      if (!site) return null;
      const dx = site.x - px;
      const dz = site.z - pz;
      const d = Math.hypot(dx, dz);
      if (!pending.away) {
        if (d >= AREA.radius) pending.away = true;
        return null;
      }
      // Turned back: facing the site, from outside the fog.
      const dot = (dx * fx + dz * fz) / (d || 1);
      if (dot < C.leftGift.turnBackDot) return null;
      const grant = cryptidGrantFor(pending.siteId, pending.tier);
      const siteId = pending.siteId;
      pending = null;
      return grant ? { siteId, grant } : null;
    },

    serialize() { return pending ? { ...pending } : null; },
    restore(s) { pending = s ? { ...s } : null; },
  };
}

export const CRYPTID_DATA = C;
