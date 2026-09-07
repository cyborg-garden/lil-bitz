// Drive the doorway, elsewhere, the way back and Karu, and photograph each.
//
// Two rungs share one arch, and the difference between them is the whole
// point: unguided you hold the key, fade into a sunset, and are LOST until
// you find an unmarked door; with Karu you walk in, the door is lit, and the
// eye leads. Every frame below is a paused clock stepped to a chosen moment,
// and every claim about where something is comes from a projection or from
// the DOM, never from state alone.
//
//   node agent/shot-doorway.mjs

import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 900, height: 506 } });
const errors = [];
page.on('pageerror', (e) => errors.push(String(e)));
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });

mkdirSync('agent/shots', { recursive: true });
await page.goto(process.env.LB_URL ?? 'http://localhost:5173/', { waitUntil: 'load' });
await page.waitForFunction(() => window.__lb?.ready === true, { timeout: 20000 });
// Come through the title. The game does not accept input until a character is
// chosen, so every harness has to walk the same path a player does.
await page.evaluate(() => window.__lb.title.start());
// The title comes off on a CSS fade, which is wall time, not game time: the
// first frame of this capture wore its ghost. Let it finish.
await page.waitForTimeout(900);

const steps = (n) => page.evaluate((k) => { for (let i = 0; i < k; i++) window.__lb.step(1 / 60); }, n);
const logic = (n) => page.evaluate((k) => { for (let i = 0; i < k; i++) window.__lb.stepLogic(1 / 60); }, n);
const say = () => page.evaluate(() => window.__lb.say);
const world = () => page.evaluate(() => JSON.parse(JSON.stringify(window.__lb.world)));

/** Anything on the HUD that names the door or the way back. There must be nothing. */
const hudDoorWords = () => page.evaluate(() => Array.from(document.querySelectorAll('#hud *'))
  .filter((el) => /door|return/i.test(el.textContent ?? '') || /door|return/i.test(el.className ?? ''))
  .map((el) => `${el.tagName}#${el.id}.${el.className}: ${el.textContent.trim().slice(0, 40)}`));

/**
 * The rendered sky, read back from the drawing buffer along the top of the
 * frame. Nine samples, because at the chase pitch the top strip is sky broken
 * by trunks and crowns: one pixel says what a tree is, nine say what the sky is.
 */
const skyPixels = () => page.evaluate(() => Array.from({ length: 9 }, (_, i) => window.__lb.pixelAt(0.1 + i * 0.1, 0.02)));
// A sunset is red well over blue. The beach sky is warm too (216,205,180), so
// warmth alone does not separate them; the red-blue gap does.
const warm = ([r, g, b]) => r > g && g > b && r - b > 80;
const skyIsSunset = (px) => px.filter(warm).length >= 5;

// --- two Epics given: her line, and the arch --------------------------------
const gifts = await page.evaluate(() => {
  const L = window.__lb;
  L.setSeed('door-shot');
  L.pause();
  L.teleport(5, 24.6);
  L.setYaw(Math.PI);
  L.grant(5);
  L.grant(5);
  L.stepLogic(1 / 60);
  L.openGive();
  L.giveSelected();
  L.step(1 / 60);
  const afterFirst = { prog: L.progression, say: L.say };
  L.giveSelected();
  L.step(1 / 60);
  const afterSecond = { prog: L.progression, say: L.say };
  return { afterFirst, afterSecond, milestone: L.progression.queued };
});

// Her reaction has the screen to itself; the milestone line is QUEUED behind it.
let lineFrame = null;
for (let i = 0; i < 400 && !lineFrame; i++) {
  await steps(1);
  const s = await say();
  if (s && /way through/.test(s)) lineFrame = { i, say: s, prog: await page.evaluate(() => window.__lb.progression) };
}
await page.screenshot({ path: 'agent/shots/doorway-1-line.png' });
const lineShot = { say: await say(), world: await world(), saySaid: await page.evaluate(() => {
  const el = document.querySelector('#say');
  return el && !el.hidden && getComputedStyle(el).display !== 'none' ? el.textContent : null;
}) };

// The prompt waits for her warning to finish. Stand in the arch straight away
// and there must be no "go through" yet.
const early = await page.evaluate(() => {
  const L = window.__lb;
  const d = L.world.doorway;
  // From her side, the way a player arrives: the arch is beyond you, not
  // between you and the lens.
  L.teleport(d.x, d.z - 0.6);
  L.setYaw(Math.PI);
  L.step(1 / 60);
  return { promptReady: L.world.doorway.promptReady, prompt: document.querySelector('#prompt')?.textContent ?? '', hidden: document.querySelector('#prompt')?.hidden };
});
await steps(170); // past reactionMs
const arch = await page.evaluate(() => {
  const L = window.__lb;
  return {
    framing: L.doorFraming,
    prompt: document.querySelector('#prompt')?.textContent ?? '',
    promptShown: (() => { const el = document.querySelector('#prompt'); return el && getComputedStyle(el).display !== 'none'; })(),
    promptReady: L.world.doorway.promptReady,
    hudDoorWords: [],
  };
});
await page.screenshot({ path: 'agent/shots/doorway-2-arch.png' });

// --- the dwell --------------------------------------------------------------
// No key. Standing in the arch is the act: half way through the dwell the
// ring is filling and nothing has faded; at the full dwell the crossing
// begins. It was a held E first, and Juniper could not get through.
const holdFrames = 30; // holdMs 500 at 60fps
await steps(Math.floor(holdFrames / 2));
const halfHold = await world();
await page.screenshot({ path: 'agent/shots/doorway-3-hold.png' });
await steps(holdFrames - Math.floor(holdFrames / 2) + 1);
const fullHold = await world();

// Mid-fade: the sunset arriving, painted by the machine, not by CSS.
await steps(18);
const midFade = await page.evaluate(() => ({
  world: window.__lb.world,
  el: (() => { const el = document.querySelector('#world-fade'); return el ? { hidden: el.hidden, opacity: Number(el.style.opacity), bg: el.style.background } : null; })(),
}));
await page.screenshot({ path: 'agent/shots/doorway-4-fade.png' });

// --- elsewhere --------------------------------------------------------------
for (let i = 0; i < 200; i++) {
  await steps(1);
  if (!(await world()).crossing) break;
}
await steps(10);
const arrived = await page.evaluate(() => {
  const L = window.__lb;
  return {
    world: L.world,
    fog: L.fog,
    tag: document.querySelector('#world-tag')?.textContent ?? null,
    tagShown: (() => { const el = document.querySelector('#world-tag'); return el && !el.hidden && getComputedStyle(el).display !== 'none'; })(),
    npcsHidden: L.npcs.length,
    kete: L.kete.total,
    near: L.objectsNear(20).slice(0, 4),
    player: L.player,
    // You arrive on ground you can stand on, among objects that are this
    // world's: on the default seed the entry was a stream, and the chunk ids
    // here were the home chunk's ids.
    standing: L.waterAt(L.player.x, L.player.z),
    ids: L.objectsNear(40).map((o) => o.id),
  };
});
const sky = await skyPixels();
const doorWordsElsewhere = await hudDoorWords();
await page.screenshot({ path: 'agent/shots/doorway-5-elsewhere.png' });

// The first thing you meet here is a Wonder, authored once.
const firstOffer = await page.evaluate(() => {
  const L = window.__lb;
  const o = L.objectsNear(40).find((e) => !e.authored);
  if (!o) return null;
  L.teleport(o.x + 0.6, o.z);
  L.stepLogic(1 / 60);
  return { id: o.id, nearest: L.nearest, done: L.world.firstOfferDone };
});

// --- lost, and the floor -------------------------------------------------
// Face away from the door and wait. After three minutes the chip gains a
// word; after five, the door comes to you, once, ahead of where you look.
const lost = await page.evaluate(() => {
  const L = window.__lb;
  const e = L.world.entry;
  const d = L.world.returnDoor;
  L.teleport(e.x, e.z);
  // Yaw facing AWAY from the door: facing is (-sin yaw, -cos yaw).
  L.setYaw(Math.atan2(-(e.x - d.x), -(e.z - d.z)));
  const out = { before: L.world.label, seenBefore: L.world.doorSeen, relocBefore: L.world.returnDoor.relocations };
  for (let i = 0; i < 60 * 181; i++) L.stepLogic(1 / 60);
  out.at181 = L.world.label;
  for (let i = 0; i < 60 * 120; i++) L.stepLogic(1 / 60);
  const nd = L.world.returnDoor;
  out.after = {
    label: L.world.label,
    relocations: nd.relocations,
    dist: L.world.returnDoorDist,
    lostSec: L.world.lostSec,
    // Ahead of the player's bearing: the door's bearing vs facing.
    dot: (() => {
      const fx = -Math.sin(L.player.yaw); const fz = -Math.cos(L.player.yaw);
      const dx = nd.x - L.player.x; const dz = nd.z - L.player.z; const len = Math.hypot(dx, dz);
      return +((dx * fx + dz * fz) / len).toFixed(2);
    })(),
    doorSeen: L.world.doorSeen,
  };
  return out;
});
await steps(2);
await page.screenshot({ path: 'agent/shots/doorway-6-lost.png' });
const lostShot = { tag: await page.evaluate(() => document.querySelector('#world-tag')?.textContent), framing: await page.evaluate(() => window.__lb.doorFraming), words: await hudDoorWords() };

// --- an Epic out, and the door found ------------------------------------------
// The organic strand: a natural Epic fires behind a walking player, who then
// finds the door. The door must not silently do nothing. It says why, once;
// the Epic follows them to the door; collected, the door works.
const refusedElsewhere = await page.evaluate(() => {
  const L = window.__lb;
  // Five minutes lost may already have armed one naturally; either way, one.
  if (!L.epic.active) L.forceEpic(5);
  for (let i = 0; i < 1500 && L.epic.objects === 0; i++) L.stepLogic(1 / 60);
  const landed = L.epic.objects;
  const d = L.world.returnDoor;
  L.teleport(d.x, d.z + 0.5);
  L.setYaw(Math.atan2(-(d.x - L.player.x), -(d.z - L.player.z)));
  L.stepLogic(1 / 60);
  L.stepLogic(1 / 60);
  const atDoor = { crossing: L.world.crossing, say: L.say, out: L.world.epicOutHere, line: L.world.refusedLine, mayArm: L.world.epicMayArm };
  // Standing there does not nag: the line plays once per approach.
  for (let i = 0; i < 60 * 4; i++) L.stepLogic(1 / 60);
  const later = { say: L.say, crossing: L.world.crossing };
  return { landed, atDoor, later };
});
await steps(1);
await page.screenshot({ path: 'agent/shots/doorway-6b-refused.png' });
const refusedShot = await page.evaluate(() => ({
  sayEl: (() => { const el = document.querySelector('#say'); return el && !el.hidden ? el.textContent : null; })(),
}));
const collectedElsewhere = await page.evaluate(() => {
  const L = window.__lb;
  // It followed you here: the find is within reach of the door now.
  const o = L.objectsNear(40).find((e) => e.id.startsWith('epic:'));
  if (!o) return { found: false };
  L.teleport(o.x + 0.4, o.z);
  L.stepLogic(1 / 60);
  L.collect();
  L.stepLogic(1 / 60);
  // Step out and let the refusal re-arm, then leave the door alone for walkHome.
  const d = L.world.returnDoor;
  L.teleport(d.x, d.z + 6);
  L.stepLogic(1 / 60);
  return { found: true, dist: Math.hypot(o.x - d.x, o.z - d.z), active: L.epic.active, out: L.world.epicOutHere, byTier: L.kete.byTier };
});

// --- the way home, unguided ---------------------------------------------------
// Walk the last stretch: inside the hearing radius the arch hums and the
// bush leans at it; at the arch itself you are simply through.
const walkHome = await page.evaluate(() => {
  const L = window.__lb;
  const d = L.world.returnDoor;
  const keteBefore = L.kete.total;
  L.teleport(d.x, d.z + 14);
  L.setYaw(Math.atan2(-(d.x - L.player.x), -(d.z - L.player.z)));
  L.stepLogic(1 / 60);
  const near = { framing: L.doorFraming, seen: L.world.doorSeen, dist: L.world.returnDoorDist };
  L.teleport(d.x, d.z + 0.5);
  L.stepLogic(1 / 60);
  return { near, crossing: L.world.crossing, keteBefore };
});
await steps(90);
const home = await page.evaluate(() => ({ world: window.__lb.world, kete: window.__lb.kete.total, player: window.__lb.player, npcs: window.__lb.npcs, tag: document.querySelector('#world-tag')?.hidden }));
const homeSky = await skyPixels();
await page.screenshot({ path: 'agent/shots/doorway-7-home.png' });

// --- Karu ---------------------------------------------------------------------
// A tier 6 given to her brings Karu. Then the doorway is a walk-in, the return
// door is lit from a distance, and the eye is between you and it.
const karuArrives = await page.evaluate(() => {
  const L = window.__lb;
  L.teleport(5, 24.6);
  L.setYaw(Math.PI);
  L.grant(6);
  L.stepLogic(1 / 60);
  L.openGive();
  L.giveSelected();
  L.step(1 / 60);
  return { say: L.say, prog: L.progression };
});
let karuLine = null;
for (let i = 0; i < 400 && !karuLine; i++) {
  await steps(1);
  const s = await say();
  if (s && /walks past you/.test(s)) karuLine = { i, say: s };
}
await steps(60);
const karuHome = await page.evaluate(() => ({ karu: window.__lb.karu, world: window.__lb.world, say: window.__lb.say }));
await page.screenshot({ path: 'agent/shots/doorway-8-karu.png' });

// With Karu the hold is zero, so an Epic out at home makes the arch a
// place you stand in and nothing happens. It has to say why, once.
const refusedHome = await page.evaluate(() => {
  const L = window.__lb;
  const d = L.world.doorway;
  // Let the greet line clear first.
  for (let i = 0; i < 60 * 6; i++) L.stepLogic(1 / 60);
  L.forceEpic(5);
  for (let i = 0; i < 1500 && L.epic.objects === 0; i++) L.stepLogic(1 / 60);
  L.teleport(d.x, d.z - 0.6);
  L.setYaw(Math.PI);
  L.stepLogic(1 / 60);
  L.stepLogic(1 / 60);
  const atArch = { hold: L.world.holdProgress, crossing: L.world.crossing, say: L.say, line: L.world.refusedLine };
  const o = L.objectsNear(60).find((e) => e.id.startsWith('epic:'));
  if (o) {
    L.teleport(o.x + 0.4, o.z);
    L.stepLogic(1 / 60);
    L.collect();
    L.stepLogic(1 / 60);
  }
  // Wait out the refusal line, so the walk-in is not talking over it.
  for (let i = 0; i < 60 * 3; i++) L.stepLogic(1 / 60);
  return { landed: Boolean(o), atArch, active: L.epic.active };
});

// Walk in. No key, no hold.
const walkIn = await page.evaluate(() => {
  const L = window.__lb;
  const d = L.world.doorway;
  L.teleport(d.x, d.z - 0.6);
  L.setYaw(Math.PI);
  L.stepLogic(1 / 60);
  const prompt = document.querySelector('#prompt');
  return { crossing: L.world.crossing, promptShown: prompt && !prompt.hidden, holdKeyDown: L.holdKeyDown };
});
for (let i = 0; i < 200; i++) {
  await steps(1);
  if (!(await world()).crossing) break;
}
await steps(30);
// At the entry, the eye leads — on ground the player can stand on. On the
// default seed the straight line to the door was a stream 1.6 m deep and the
// eye hung over it while the player, holding W, went nowhere.
const karuAtEntry = await page.evaluate(() => {
  const L = window.__lb;
  for (let i = 0; i < 60 * 3; i++) L.stepLogic(1 / 60);
  const k = L.karu;
  return { pos: k.pos, goal: k.goal, standing: L.waterAt(k.pos.x, k.pos.z), goalStanding: L.waterAt(k.goal.x, k.goal.z), playerStanding: L.waterAt(L.player.x, L.player.z) };
});
const withKaru = await page.evaluate(() => {
  const L = window.__lb;
  const d = L.world.returnDoor;
  // Stand 22 m from the door, facing it, and let the eye lead for a moment.
  // From a spot where the straight route IS walkable: the eye steers off
  // water, and a detour is not what this frame is about. Sixteen bearings,
  // first one that works, so the frame is the same every run.
  let ang = 0;
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * Math.PI * 2;
    const sx = d.x + Math.sin(a) * 22;
    const sz = d.z + Math.cos(a) * 22;
    const gx = d.x + Math.sin(a) * 18.5;
    const gz = d.z + Math.cos(a) * 18.5;
    if (L.waterAt(sx, sz).walkable && L.waterAt(gx, gz).walkable) { ang = a; break; }
  }
  L.teleport(d.x + Math.sin(ang) * 22, d.z + Math.cos(ang) * 22);
  L.setYaw(Math.atan2(-(d.x - L.player.x), -(d.z - L.player.z)));
  // A teleport leaves the eye behind; it is never teleported itself, so it
  // is given the seconds it needs to come. The player walks every metre in
  // play and it never falls this far back.
  for (let i = 0; i < 60 * 10; i++) L.stepLogic(1 / 60);
  L.step(1 / 60);
  return { world: L.world, karu: L.karu, door: L.doorFraming, label: L.world.label, karuStanding: L.waterAt(L.karu.pos.x, L.karu.pos.z) };
});
await page.screenshot({ path: 'agent/shots/doorway-9-karu-door.png' });
const doorWordsKaru = await hudDoorWords();

// Follow the eye, by keys, from the entry. The player faces wherever the eye
// is and holds W, and stops when it is on top of them, which is all a
// player can do with a guide. On the default seed the eye once led down a
// wadeable stream to a bar the player could not step over and parked on
// their head for forty-six seconds. The door must get nearer, and the
// player must arrive: every sample is nearer than the one thirty seconds
// before it, until they are within a few metres of the door.
const followed = { samples: [], reached: false };
await page.evaluate(() => {
  const L = window.__lb;
  const e = L.world.entry;
  L.teleport(e.x, e.z);
  L.setYaw(Math.PI);
  for (let i = 0; i < 60 * 8; i++) L.stepLogic(1 / 60);
});
let walking = false;
for (let f = 0; f < 60 * 120; f += 5) {
  const now = await page.evaluate(() => {
    const L = window.__lb;
    const k = L.karu.pos;
    const p = L.player;
    if (L.karu.dist > 1.0) L.setYaw(Math.atan2(-(k.x - p.x), -(k.z - p.z)));
    return { kd: L.karu.dist, dist: L.world.returnDoorDist, which: L.world.which, sec: L.world.lostSec };
  });
  if (now.which !== 'elsewhere' || now.dist < 4) { followed.reached = true; followed.samples.push(now); break; }
  const want = now.kd > 1.0;
  if (want !== walking) { if (want) await page.keyboard.down('KeyW'); else await page.keyboard.up('KeyW'); walking = want; }
  if (f % 300 === 0) followed.samples.push(now);
  await logic(5);
}
if (walking) await page.keyboard.up('KeyW');
await steps(1);
await page.screenshot({ path: 'agent/shots/doorway-10-karu-followed.png' });

// --- save in elsewhere, reload, carry on: still elsewhere -------------------
const saved = await page.evaluate(() => {
  const L = window.__lb;
  const ok = L.save.write();
  return { ok, world: L.world, karu: L.karu.present, kete: L.kete.total };
});
await page.reload({ waitUntil: 'load' });
await page.waitForFunction(() => window.__lb?.ready === true, { timeout: 20000 });
await page.evaluate(() => { window.__lb.pause(); window.__lb.title.load(); });
await steps(5);
const reloaded = await page.evaluate(() => ({ started: window.__lb.started(), world: window.__lb.world, karu: window.__lb.karu, kete: window.__lb.kete.total, seed: window.__lb.seed, fog: window.__lb.fog }));
const reloadSky = await skyPixels();

// Home with everything.
const homeWithKaru = await page.evaluate(() => {
  const L = window.__lb;
  const d = L.world.returnDoor;
  L.teleport(d.x, d.z + 0.5);
  L.stepLogic(1 / 60);
  for (let i = 0; i < 200 && L.world.crossing; i++) L.stepLogic(1 / 60);
  for (let i = 0; i < 30; i++) L.stepLogic(1 / 60);
  L.step(1 / 60);
  return { world: L.world, karu: L.karu, kete: L.kete.total, say: L.say };
});

await page.evaluate(() => window.__lb.save.clear());

const summary = {
  gifts: { first: gifts.afterFirst.prog, second: gifts.afterSecond.prog, queued: gifts.milestone },
  line: lineFrame && { frame: lineFrame.i, seen: lineFrame.prog.seen },
  lineShot: { said: lineShot.saySaid?.slice(0, 40), open: lineShot.world.doorway.open },
  early,
  arch: { framing: arch.framing, prompt: arch.prompt, shown: arch.promptShown },
  hold: { half: halfHold.holdProgress, halfCrossing: halfHold.crossing, full: fullHold.crossing },
  midFade: { fade: midFade.world.fade, el: midFade.el },
  arrived: { which: arrived.world.which, entry: arrived.world.entry, door: arrived.world.returnDoor, dist: arrived.world.returnDoorDist, tag: arrived.tag, tagShown: arrived.tagShown, finds: arrived.world.finds.length, fog: arrived.fog, kete: arrived.kete, sky },
  doorWordsElsewhere,
  firstOffer,
  lost,
  lostShot: { tag: lostShot.tag, inFrame: lostShot.framing?.inFrame, dist: lostShot.framing?.dist, words: lostShot.words },
  walkHome: { near: walkHome.near, crossing: walkHome.crossing },
  home: { which: home.world.which, kete: home.kete, keteBefore: walkHome.keteBefore, player: home.player, sky: homeSky, tagHidden: home.tag },
  karuArrives: { prog: karuArrives.prog, line: karuLine?.say?.slice(0, 40) },
  karuHome: { present: karuHome.karu.present, inFrame: karuHome.karu.inFrame, ndc: karuHome.karu.ndc, dist: karuHome.karu.dist, worldKaru: karuHome.world.karu },
  refusedElsewhere, refusedShot, collectedElsewhere, refusedHome,
  arrivedStanding: arrived.standing, arrivedIds: arrived.ids.slice(0, 4),
  karuAtEntry,
  walkIn,
  withKaru: { which: withKaru.world.which, karu: withKaru.karu, door: withKaru.door, label: withKaru.label, hold: withKaru.world.holdProgress, karuStanding: withKaru.karuStanding },
  doorWordsKaru,
  saved: { ok: saved.ok, which: saved.world.which, door: saved.world.returnDoor },
  reloaded: { started: reloaded.started, which: reloaded.world.which, door: reloaded.world.returnDoor, karu: reloaded.karu.present, kete: reloaded.kete, sky: reloadSky },
  homeWithKaru: { which: homeWithKaru.world.which, karu: homeWithKaru.karu.present, kete: homeWithKaru.kete, say: homeWithKaru.say },
};
console.log(JSON.stringify(summary, null, 2));

await browser.close();

// --- what has to be true ---------------------------------------------------
const fails = [];
if (errors.length) fails.push(`console errors: ${errors.slice(0, 3).join(' | ')}`);

const near = (a, b, eps) => Math.abs(a - b) <= eps;

// Progression: the doorway is the SECOND Epic, and her line is queued.
if (gifts.afterFirst.prog.doorway) fails.push('the doorway opened on one Epic; it takes two');
if (!gifts.afterSecond.prog.doorway) fails.push('two Epics given and no doorway');
if (gifts.afterSecond.prog.seen.length) fails.push('her milestone line was marked said before it played');
if (!/where were you standing|not from here/.test(gifts.afterSecond.say ?? '')) {
  fails.push(`her reaction did not show first: "${gifts.afterSecond.say}"`);
}
if (!lineFrame) fails.push('her doorway line never reached the screen');
else if (lineFrame.i < 100) fails.push(`her doorway line stacked on the reaction: frame ${lineFrame.i}`);
if (!lineShot.saySaid || !/way back/.test(lineShot.saySaid)) fails.push('the doorway line on screen does not carry the promise of a way back');
if (!lineShot.world.doorway.open) fails.push('the doorway is not open after her line');

// The arch is by her and on screen; the prompt waited for her line.
if (early.promptReady) fails.push('the doorway prompt was ready before her line had finished');
if (!early.hidden && /go through/.test(early.prompt)) fails.push('"go through" showed while she was still talking');
if (!arch.framing?.inFrame) fails.push(`the arch is not on screen: ${JSON.stringify(arch.framing)}`);
if (!arch.promptShown || !/go through/.test(arch.prompt)) fails.push(`no "go through" prompt at the arch: "${arch.prompt}"`);

// The hold: half is not enough; the full hold crosses; the fade is stepped.
if (!(halfHold.holdProgress > 0.3 && halfHold.holdProgress < 0.8)) fails.push(`hold at 0.5s should be mid-way, got ${halfHold.holdProgress}`);
if (halfHold.crossing) fails.push('a half-second hold started the crossing — it must be a held act');
if (!fullHold.crossing) fails.push('the full hold did not start the crossing');
if (!(midFade.world.fade > 0.3 && midFade.world.fade < 0.9)) fails.push(`mid-fade not mid: ${midFade.world.fade}`);
if (!midFade.el || midFade.el.hidden || !near(midFade.el.opacity, midFade.world.fade, 0.02)) {
  fails.push(`the fade div does not show the machine's fade: ${JSON.stringify(midFade.el)} vs ${midFade.world.fade}`);
}

// Elsewhere: sunset, the tag, the hidden door, the finds, the bag intact.
if (arrived.world.which !== 'elsewhere') fails.push(`did not arrive elsewhere: ${arrived.world.which}`);
if (!skyIsSunset(sky)) fails.push(`the rendered sky is not a sunset: ${JSON.stringify(sky)}`);
if (arrived.tag !== 'elsewhere' || !arrived.tagShown) fails.push(`world tag wrong: "${arrived.tag}" shown=${arrived.tagShown}`);
if (!arrived.world.returnDoor) fails.push('no return door was placed');
else if (!(arrived.world.returnDoorDist >= 45 && arrived.world.returnDoorDist <= 85)) {
  fails.push(`return door at ${arrived.world.returnDoorDist} m; must be 45–85`);
}
if (doorWordsElsewhere.length) fails.push(`the HUD names the door: ${doorWordsElsewhere.join(' | ')}`);
if (!(arrived.world.finds.length >= 3 && arrived.world.finds.length <= 5)) fails.push(`elsewhere finds: ${arrived.world.finds.length}, want 3–5`);
if (arrived.kete !== 0) fails.push(`kete changed on crossing: ${arrived.kete}`);
if (!firstOffer || firstOffer.nearest?.tier !== 4) fails.push(`the first offer elsewhere is not a Wonder: ${JSON.stringify(firstOffer)}`);

// Lost: the chip gains its word at 180 s, the floor fires once at 300 s.
if (lost.before !== 'elsewhere') fails.push(`label on arrival: "${lost.before}"`);
if (lost.at181 !== 'elsewhere · listen') fails.push(`label after 181 s: "${lost.at181}"`);
if (lost.after.relocations !== 1) fails.push(`the floor did not fire once: relocations ${lost.after.relocations}`);
if (!(lost.after.dist >= 24 && lost.after.dist <= 36)) fails.push(`relocated door at ${lost.after.dist} m; want 25–35`);
if (!(lost.after.dot > 0.7)) fails.push(`relocated door is not ahead of the player: dot ${lost.after.dot}`);
if (lostShot.words.length) fails.push(`HUD names the door while lost: ${lostShot.words.join(' | ')}`);

// Home: with everything, standing by her again, the beach sky back.
if (!walkHome.near.seen) fails.push('standing 14 m from the door facing it did not count as seeing it');
if (!walkHome.crossing) fails.push('standing in the return door did not start the crossing home');
if (home.world.which !== 'home') fails.push(`did not get home: ${home.world.which}`);
if (home.kete !== walkHome.keteBefore) fails.push(`the kete changed on the way home: ${walkHome.keteBefore} -> ${home.kete}`);
if (home.world.returnDoor) fails.push('the return door survived the trip home');
if (skyIsSunset(homeSky)) fails.push(`home sky still looks like a sunset: ${JSON.stringify(homeSky)}`);
if (home.tag !== true) fails.push('the world tag is still showing at home');

// Karu.
if (!karuArrives.prog.karu) fails.push('a tier 6 given to her did not reach the Karu threshold');
if (!karuLine) fails.push('her Karu line never reached the screen');
if (!karuHome.karu.present) fails.push('Karu is not present after the milestone');
if (!karuHome.karu.inFrame) fails.push(`Karu is not on screen at her: ${JSON.stringify(karuHome.karu.ndc)}`);
if (!karuHome.world.karu) fails.push('the world machine does not know Karu is with you');
if (!walkIn.crossing) fails.push('with Karu, standing in the arch did not cross (it must be a walk-in)');
if (walkIn.promptShown) fails.push('a "go through" prompt showed with Karu; there is no hold to prompt for');
if (withKaru.world.which !== 'elsewhere') fails.push('did not arrive elsewhere with Karu');
if (!withKaru.door?.inFrame) fails.push(`the lit door is not in frame with Karu: ${JSON.stringify(withKaru.door)}`);
if (!withKaru.karu.inFrame) fails.push('Karu is not in frame on the way to the door');
if (!(withKaru.karu.dist < withKaru.door.dist)) fails.push(`Karu is not between the player and the door: ${withKaru.karu.dist} vs ${withKaru.door.dist}`);
if (withKaru.label !== 'elsewhere') fails.push(`label with Karu: "${withKaru.label}"`);
if (doorWordsKaru.length) fails.push(`the HUD names the door with Karu: ${doorWordsKaru.join(' | ')}`);

// The entry is dry, and elsewhere's objects are elsewhere's.
if (!arrived.standing?.walkable) fails.push(`arrived standing in water: ${JSON.stringify(arrived.standing)}`);
for (const id of arrived.ids) if (!/^elsewhere:/.test(id)) fails.push(`an elsewhere object carries a home id: ${id}`);

// A door with an Epic out says why, once, and works once the Epic is taken.
const R = refusedElsewhere;
if (!R.landed) fails.push('the Epic never landed in elsewhere for the refusal test');
if (R.atDoor.crossing) fails.push('the return door crossed with an Epic out in elsewhere');
if (!R.atDoor.out) fails.push('the machine did not consider an Epic out with an object on the ground');
if (R.atDoor.say !== R.atDoor.line) fails.push(`the refused door said nothing, or the wrong thing: "${R.atDoor.say}" vs "${R.atDoor.line}"`);
if (!refusedShot.sayEl || refusedShot.sayEl !== R.atDoor.line) fails.push(`the refusal is not on the rendered HUD: "${refusedShot.sayEl}"`);
if (R.atDoor.mayArm) fails.push('a natural Epic may still arm while standing in the return door');
if (R.later.say) fails.push(`the refusal nagged: still saying "${R.later.say}" four seconds on`);
if (!collectedElsewhere.found) fails.push('the Epic did not follow the player to the door');
else {
  if (!(collectedElsewhere.dist < 40)) fails.push(`the Epic stayed ${collectedElsewhere.dist} m from the door`);
  if (collectedElsewhere.active || collectedElsewhere.out) fails.push('collecting the Epic did not clear the way home');
}
const H = refusedHome;
if (!H.landed) fails.push('the Epic never landed at home for the refusal test');
if (!(H.atArch.hold >= 1)) fails.push(`with Karu the arch hold is not instant: ${H.atArch.hold}`);
if (H.atArch.crossing) fails.push('the arch crossed with an Epic out at home');
if (H.atArch.say !== H.atArch.line) fails.push(`the refused arch said nothing, or the wrong thing: "${H.atArch.say}"`);
if (H.active) fails.push('the home Epic was not collected before the walk-in');

// Karu leads on ground, from the first metre.
if (!karuAtEntry.playerStanding.walkable) fails.push(`arrived with Karu standing in water: ${JSON.stringify(karuAtEntry.playerStanding)}`);
if (!karuAtEntry.goalStanding.walkable) fails.push(`Karu's goal at the entry is over water: ${JSON.stringify(karuAtEntry.goalStanding)}`);
if (!karuAtEntry.standing.walkable) fails.push(`Karu hangs over water at the entry: ${JSON.stringify(karuAtEntry.standing)}`);
if (!withKaru.karuStanding.walkable) fails.push(`Karu hangs over water on the way to the door: ${JSON.stringify(withKaru.karuStanding)}`);

// Save: loading is never a way out.
if (!saved.ok) fails.push('the save in elsewhere was refused');
if (!reloaded.started || reloaded.world.which !== 'elsewhere') fails.push(`reload did not land in elsewhere: ${JSON.stringify(reloaded.world.which)}`);
if (!reloaded.world.returnDoor || !near(reloaded.world.returnDoor.x, saved.world.returnDoor.x, 0.01)) fails.push('the return door moved across a reload');
if (!reloaded.karu.present) fails.push('Karu did not survive the reload');
// Reloaded into bush: the top strip is canopy, so the frame is evidence and the
// dressing is the assertion — sky and fog are elsewhere's, or the palette did
// not come back with the world.
if (reloaded.fog.sky !== arrived.fog.sky || reloaded.fog.colour !== arrived.fog.colour) fails.push(`reloaded into elsewhere without its dressing: ${JSON.stringify(reloaded.fog)}`);
if (!reloadSky.some(warm)) fails.push(`no sunset anywhere along the top of the reloaded frame: ${JSON.stringify(reloadSky)}`);
if (homeWithKaru.world.which !== 'home') fails.push('did not get home with Karu');
if (!homeWithKaru.karu.present) fails.push('Karu did not stay after coming home; the unlock is permanent');
if (homeWithKaru.kete !== reloaded.kete) fails.push('the kete changed on the way home with Karu');

if (fails.length) { for (const f of fails) console.error('FAIL', f); process.exit(1); }
console.log('\nOK — agent/shots/doorway-1-line … doorway-9-karu-door.png');
