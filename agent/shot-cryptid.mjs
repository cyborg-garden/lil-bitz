// Stand at each cryptid's site, photograph what is there, and give.
//
// The cryptids are recipients, so the verb is the one the trinket maker
// already has; what is new is what they do with a tier 5, which is to hand
// back a tier 6 through the escalated Epic. What has to be true is not that a
// grant happened in state: it is that the shape is IN FRAME, that the
// reaction had the screen to itself before the tell, that the granted portal
// opened ON SCREEN and landed on DRY ground, and that the patupaiarehe never
// answered with a word.
//
//   node agent/shot-cryptid.mjs

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
await page.evaluate(() => { window.__lb.setSeed('lil-bitz'); window.__lb.pause(); });

const steps = (n) => page.evaluate((k) => { for (let i = 0; i < k; i++) window.__lb.step(1 / 60); }, n);
const logic = (n) => page.evaluate((k) => { for (let i = 0; i < k; i++) window.__lb.stepLogic(1 / 60); }, n);

/** Stand `d` metres from a site, on the landing's side, facing it. */
const standAt = (id, d) => page.evaluate(([sid, dist]) => {
  const L = window.__lb;
  const c = L.cryptids.find((e) => e.id === sid);
  const dx = c.landing.x - c.x;
  const dz = c.landing.z - c.z;
  const len = Math.hypot(dx, dz) || 1;
  L.teleport(c.x + (dx / len) * dist, c.z + (dz / len) * dist);
  L.setYaw(Math.atan2(-(c.x - L.player.x), -(c.z - L.player.z)));
  L.stepLogic(1 / 60);
  return { site: { id: c.id, name: c.name, kind: c.kind, x: +c.x.toFixed(1), z: +c.z.toFixed(1), inland: +c.inland.toFixed(1), fellBack: c.fellBack }, dist: c.dist };
}, [id, d]);

const shown = () => page.evaluate(() => ({ ...window.__lb.cryptidShown, warmth: window.__lb.cryptidRender?.warmth }));
const framing = (id) => page.evaluate((sid) => window.__lb.siteFraming(sid), id);

const sites = await page.evaluate(() => window.__lb.cryptids.map((c) => ({ id: c.id, name: c.name, kind: c.kind, x: +c.x.toFixed(1), z: +c.z.toFixed(1), landing: c.landing, fellBack: c.fellBack })));
const finds = await page.evaluate(() => window.__lb.cryptidFinds);

// --- grotto mermaids: only if you are already quiet -------------------------
// Walk up and the water is empty. Stand still for two seconds and the pale
// shape is under the surface. Move and it is gone.
const mermaidsWalk = await standAt('grotto_mermaids', 6);
await page.keyboard.down('KeyA');
await logic(20);
await page.keyboard.up('KeyA');
await steps(1);
const mermaidsMoving = await shown();
// Four seconds, not the 2.2 the shape needs to APPEAR: it fades in over the
// 1.2s after that, and sampled at exactly 2.2s it was at 8% opacity — the
// pixel test read the same water with and without it while `shown` said yes.
await logic(60 * 4.0);
await steps(1);
const mermaidsStill = await shown();
const mermaidsFrame = await framing('grotto_mermaids');
// The shape is drawn where state says it is, AND the frame shows it: the
// pixel at its projected centre changes when the same frame is drawn with
// the shape held off. On the default seed it lay 9cm under the sand and the
// projection was in frame while the frame showed beach.
const shapePixel = await page.evaluate(() => {
  const L = window.__lb;
  const f = L.cryptidFraming('shape');
  if (!f) return null;
  const at = () => L.pixelAt(f.x * 0.5 + 0.5, -f.y * 0.5 + 0.5);
  const withShape = at();
  L.holdShape(true);
  L.redraw();
  const without = at();
  L.holdShape(false);
  L.redraw();
  return { frame: f, withShape, without, water: L.waterAt(f.pos.x, f.pos.z) };
});
await page.screenshot({ path: 'agent/shots/cryptid-1-mermaids.png' });

// --- moana kelpī: driftwood until it isn't ------------------------------------
await standAt('moana_kelpii', 14);
await steps(1);
const kelpiiFar = await shown();
await standAt('moana_kelpii', 5);
await steps(1);
const kelpiiNear = await shown();
const kelpiiFrame = await framing('moana_kelpii');
const driftwoodPixel = await page.evaluate(() => {
  const L = window.__lb;
  const f = L.cryptidFraming('driftwood');
  return f && { frame: f, px: L.pixelAt(f.x * 0.5 + 0.5, -f.y * 0.5 + 0.5) };
});
await page.screenshot({ path: 'agent/shots/cryptid-2-kelpii.png' });

// --- patupaiarehe: the cold on the ridge, and no one -------------------------
const fogFar = await page.evaluate(() => { window.__lb.teleport(5, 27); window.__lb.stepLogic(1 / 60); return window.__lb.fog; });
await standAt('patupaiarehe', 8);
await steps(1);
const fogNear = await page.evaluate(() => window.__lb.fog);
const fogShown = await shown();
const fogFrame = await framing('patupaiarehe');
const givePromptAtFog = await page.evaluate(() => {
  const el = document.querySelector('#give-prompt');
  return el && !el.hidden ? el.textContent.trim() : null;
});
await page.screenshot({ path: 'agent/shots/cryptid-3-patupaiarehe.png' });

// --- a cryptid find, collected by hand ----------------------------------------
const findTaken = await page.evaluate(() => {
  const L = window.__lb;
  const f = L.cryptidFinds.find((o) => !o.taken);
  L.teleport(f.x + 0.5, f.z);
  L.stepLogic(1 / 60);
  const prompt = L.nearest;
  L.collect();
  L.stepLogic(1 / 60);
  return { id: f.id, prompt, taken: L.cryptidFinds.find((o) => o.id === f.id).taken, byTier: L.kete.byTier };
});

// --- give a kelpī a tier 5: the reaction, the hold, THEN the tell -------------
const before = await page.evaluate(() => ({ taste: window.__lb.epic.taste, ticks: window.__lb.epic.ticks, count: window.__lb.epic.count, granted: window.__lb.epic.granted }));
const gave = await page.evaluate(() => window.__lb.giveTo('moana_kelpii', 5));
await steps(1);
// The gift is in the ledger and the grant is owed: a save taken NOW has to
// carry both, or a closed tab between the gift and the tier 6 loses the tier 6.
// And the driftwood lying is in it too, or a load in the gap stands it up.
const justGiven = await page.evaluate(() => ({
  say: window.__lb.say, seq: window.__lb.epicSeq, epic: window.__lb.epic, owed: window.__lb.world.owedGrants, taste: window.__lb.epic.taste,
  saved: window.__lb.save.write(),
  snapOwed: window.__lb.save.snapshot().owedGrants,
  snapKelpiiDown: window.__lb.save.snapshot().kelpiiDown,
  // The give prompt must not sit under the reaction line.
  givePromptHidden: document.querySelector('#give-prompt')?.hidden ?? true,
  sayShown: !(document.querySelector('#say')?.hidden ?? true),
  // The driftwood, lying, is in the frame during the reaction — and the
  // pixel at its centre is the log, not a crown.
  driftwood: (() => {
    const L = window.__lb;
    const f = L.cryptidFraming('driftwood');
    return f && { frame: f, px: L.pixelAt(f.x * 0.5 + 0.5, -f.y * 0.5 + 0.5), lying: L.cryptidShown.lying };
  })(),
}));
await page.screenshot({ path: 'agent/shots/cryptid-4-reaction.png' });
// Inside the hold: still nothing. The reaction line is alone on screen.
await steps(60);
const midHold = await page.evaluate(() => ({ say: window.__lb.say, seq: window.__lb.epicSeq, owed: window.__lb.world.owedGrants }));
// Past the hold: the tell, then the two mouths.
let opened = null;
for (let i = 0; i < 600 && !opened; i++) {
  await steps(1);
  const q = await page.evaluate(() => ({ seq: window.__lb.epicSeq, framing: window.__lb.epicFraming, t: window.__lb.epicSeq.t }));
  if (q.seq.active && q.seq.aperture > 0.5) opened = { i, ...q, fellBack: await page.evaluate(() => window.__lb.epic.fellBack) };
}
// The mouth's interior is the sunset cutout, so the pixel at its centre is
// the honest test: a projection can say "in frame" from behind a canopy.
await steps(6);
const readMouths = () => page.evaluate(() => {
  const L = window.__lb;
  // A small cross around the centre, not the one pixel. A mouth is 3.2m
  // wide; a rimu trunk is 0.4m. The single centre pixel read a trunk as "the
  // mouth is hidden" when nine tenths of it was in open sky either side. The
  // cross is a fifth of the mouth's width; the most sunset-coloured sample
  // of the five stands for it, and a mouth actually behind a crown has none.
  const read = (f) => {
    if (!f) return f;
    const cx = f.centre.x * 0.5 + 0.5;
    const cy = -f.centre.y * 0.5 + 0.5;
    const samples = [[0, 0], [0.03, 0], [-0.03, 0], [0, 0.05], [0, -0.05]]
      .map(([dx, dy]) => L.pixelAt(cx + dx, cy + dy));
    const score = (q) => Math.max(q[0] - q[2], q[2] - q[1] + (q[0] - q[1]) * 0.5);
    const px = samples.reduce((a, b) => (score(b) > score(a) ? b : a));
    return { centre: f.centre, inFrame: f.inFrame, px, samples };
  };
  return { first: read(L.epicFraming), second: read(L.epicFraming2), aperture: L.epicSeq.aperture };
});
const mouths = await readMouths();
const mouthPixel = mouths.first && { ...mouths.first, aperture: mouths.aperture };
await page.screenshot({ path: 'agent/shots/cryptid-5-grant.png' });
const afterArm = await page.evaluate(() => ({ taste: window.__lb.epic.taste, ticks: window.__lb.epic.ticks, count: window.__lb.epic.count, granted: window.__lb.epic.granted, seq: window.__lb.epicSeq }));

// Let it land, then pick it up: a tier 6 in the kete, by the player's hand.
let landed = null;
for (let i = 0; i < 900 && !landed; i++) {
  await logic(1);
  const e = await page.evaluate(() => window.__lb.epic);
  if (e.objects > 0) landed = e;
}
const collected = await page.evaluate(() => {
  const L = window.__lb;
  const site = L.epicSeq.site;
  const water = L.waterAt(site.x, site.z);
  L.teleport(site.x + 0.4, site.z);
  L.stepLogic(1 / 60);
  const nearest = L.nearest;
  L.collect();
  L.stepLogic(1 / 60);
  return { site, water, nearest, byTier: L.kete.byTier, active: L.epic.active };
});

// --- the grotto: the granted portal lands on DRY ground ----------------------
// Ahead of the player at the grotto is the sea. The delivery must fall back to
// the site's landing, never to the water behind the walkable wall.
let grottoDone = null;
await page.evaluate(() => { for (let i = 0; i < 60 * 3; i++) window.__lb.stepLogic(1 / 60); });
const grottoGave = await page.evaluate(() => window.__lb.giveTo('grotto_mermaids', 5));
for (let i = 0; i < 1500 && !grottoDone; i++) {
  await logic(1);
  const e = await page.evaluate(() => window.__lb.epic);
  if (e.objects > 0) grottoDone = await page.evaluate(() => {
    const L = window.__lb;
    const s = L.epicSeq.site;
    return { site: s, water: L.waterAt(s.x, s.z), mode: L.epicSeq.mode, tier: L.epicSeq.tier, say: L.say };
  });
}
await page.evaluate(() => {
  const L = window.__lb;
  const s = L.epicSeq.site;
  L.teleport(s.x + 0.4, s.z);
  L.stepLogic(1 / 60);
  L.collect();
  L.stepLogic(1 / 60);
});

// --- the driftwood stays down until ITS grant is collected --------------------
// A natural Epic collected while the kelpī's tier 6 is still owed used to
// stand the driftwood back up in front of its own mouths.
const stayDown = await page.evaluate(() => {
  const L = window.__lb;
  for (let i = 0; i < 60 * 3; i++) L.stepLogic(1 / 60);
  L.giveTo('moana_kelpii', 5);
  L.stepLogic(1 / 60);
  const afterGift = { down: L.save.snapshot().kelpiiDown, owed: L.world.owedGrants };
  // A natural Epic, armed before the owed grant's hold has passed.
  L.forceEpic(5);
  for (let i = 0; i < 1500 && L.epic.objects === 0; i++) L.stepLogic(1 / 60);
  const natural = L.objectsNear(80).find((o) => o.id.startsWith('epic:') && !o.id.startsWith('epic:g'));
  if (natural) {
    L.teleport(natural.x + 0.4, natural.z);
    L.stepLogic(1 / 60);
    L.collect();
    L.stepLogic(1 / 60);
  }
  // Back within sense range of the kelpī, so the render draws it: lying.
  const c = L.cryptids.find((e) => e.id === 'moana_kelpii');
  L.teleport(c.x, c.z + 5);
  L.setYaw(Math.PI);
  L.stepLogic(1 / 60);
  const afterNatural = { natural: natural?.id ?? null, down: L.save.snapshot().kelpiiDown, shown: L.cryptidShown, counts: { count: L.epic.count, granted: L.epic.granted } };
  // Now the grant: it opens, lands, and is collected. THEN the driftwood may stand.
  for (let i = 0; i < 1500 && L.epic.objects === 0; i++) L.stepLogic(1 / 60);
  const granted = L.objectsNear(80).find((o) => o.id.startsWith('epic:g'));
  if (granted) {
    L.teleport(granted.x + 0.4, granted.z);
    L.stepLogic(1 / 60);
    L.collect();
    L.stepLogic(1 / 60);
  }
  const afterGrant = { granted: granted?.id ?? null, down: L.save.snapshot().kelpiiDown, counts: { count: L.epic.count, granted: L.epic.granted } };
  return { afterGift, afterNatural, afterGrant };
});

// --- patupaiarehe: leave it, walk out of the fog, look back -------------------
const left = await page.evaluate(() => {
  const L = window.__lb;
  for (let i = 0; i < 60 * 3; i++) L.stepLogic(1 / 60);
  const r = L.giveTo('patupaiarehe', 5);
  L.stepLogic(1 / 60);
  return { r, say: L.say, pending: L.world.leftGift, owed: L.world.owedGrants, active: L.epic.active, head: document.querySelector('#give-head')?.textContent ?? null };
});
// Wait at the site: nothing. Walk out, still facing away: nothing.
const waited = await page.evaluate(() => {
  const L = window.__lb;
  for (let i = 0; i < 60 * 5; i++) L.stepLogic(1 / 60);
  const atSite = { owed: L.world.owedGrants, active: L.epic.active, say: L.say };
  const c = L.cryptids.find((e) => e.id === 'patupaiarehe');
  L.teleport(c.x, c.z - 30);
  L.setYaw(0); // facing -z: away from the site
  for (let i = 0; i < 60; i++) L.stepLogic(1 / 60);
  const away = { owed: L.world.owedGrants, active: L.epic.active, pending: L.world.leftGift };
  // Turn back.
  L.setYaw(Math.PI);
  L.stepLogic(1 / 60);
  const turned = { owed: L.world.owedGrants, active: L.epic.active, pending: L.world.leftGift, say: L.say, tier: L.epic.pending ? null : L.epicSeq.tier };
  return { atSite, away, turned };
});
let fogGrant = null;
for (let i = 0; i < 1500 && !fogGrant; i++) {
  await logic(1);
  const e = await page.evaluate(() => window.__lb.epic);
  if (e.objects > 0) fogGrant = await page.evaluate(() => ({ mode: window.__lb.epicSeq.mode, tier: window.__lb.epicSeq.tier, say: window.__lb.say, line: window.__lb.epicSeq.line }));
}

// --- what earns nothing, earns nothing -----------------------------------------
// A tier 6 handed to the kelpī, and a tier 1 left in the fog. Both used to
// mint a tier 6: the first through `>=`, the second through a hardcoded 5.
const nothing = await page.evaluate(() => {
  const L = window.__lb;
  // Clear the patupaiarehe grant off the ground first.
  const s = L.epicSeq.site;
  L.teleport(s.x + 0.4, s.z);
  L.stepLogic(1 / 60);
  L.collect();
  for (let i = 0; i < 60 * 3; i++) L.stepLogic(1 / 60);
  const owedBefore = L.world.owedGrants;
  const six = L.giveTo('moana_kelpii', 6);
  for (let i = 0; i < 60 * 4; i++) L.stepLogic(1 / 60);
  const afterSix = { owed: L.world.owedGrants, active: L.epic.active, pending: L.epic.pending, byTier6: L.kete.byTier[6] };
  const one = L.giveTo('patupaiarehe', 1);
  L.stepLogic(1 / 60);
  const afterOne = { pending: L.world.leftGift, owed: L.world.owedGrants, head: document.querySelector('#give-head')?.textContent ?? null };
  return { owedBefore, six, afterSix, one, afterOne };
});

// --- the kelpī's grant, on the seeds where it fell back --------------------------
// The estuary is dense pōhutukawa; siting runs out of clear sky on most seeds
// and the delivery falls back to a landing. That landing used to be a fixed
// point behind the player. On every seed here the mouth has to open IN FRAME
// and the pixel at its centre has to be the sunset.
const seeds = [];
for (const seed of ['door-shot', 'alpha', 'beta', 'delta']) {
  await page.evaluate((s) => {
    const L = window.__lb;
    // The last sequence has to be OVER, not just collected: a mouth still
    // closing has an aperture over 0.5, and the loop below would read it as
    // this seed's opening and photograph a slit from the previous world.
    for (let i = 0; i < 900 && L.epicSeq.active; i++) L.stepLogic(1 / 60);
    L.setSeed(s);
    for (let i = 0; i < 60; i++) L.stepLogic(1 / 60);
    L.giveTo('moana_kelpii', 5);
  }, seed);
  // The give itself is in frame: the driftwood's centre pixel is the log
  // (pale, not a crown's green) from where the player gives. On seed beta a
  // pōhutukawa crown filled the upper frame and hid the driftwood and the
  // player's head while its line played.
  await steps(1);
  const giveFrame = await page.evaluate(() => {
    const L = window.__lb;
    const f = L.cryptidFraming('driftwood');
    // Sampled a little to one side of the centre, not at it. The harness's
    // giveTo stands the player on the landing axis, dead in front of the log,
    // and its centre pixel is then the player's own shirt (seed alpha read
    // 103,70,72 with the log plainly on screen either side of them). The log
    // is 2.4m long; a third of the way along it is still the log, and past the player's hair (0.06 read the hair on three seeds).
    // Several points along the log rather than one: how much of it shows
    // either side of the player depends on the seed's slope and the give
    // distance, and one fixed offset read hair on three seeds and grass on
    // three others. The log is there if ANY of these is log-coloured.
    const pxs = [-0.2, -0.13, -0.07, 0.07, 0.13, 0.2].map((o) => L.pixelAt(f.x * 0.5 + 0.5 + o, -f.y * 0.5 + 0.5));
    return f && { frame: f, pxs, say: L.say };
  });
  await page.screenshot({ path: `agent/shots/cryptid-6-kelpii-${seed}-give.png` });
  let op = null;
  for (let i = 0; i < 900 && !op; i++) {
    await steps(1);
    const q = await page.evaluate(() => ({ seq: window.__lb.epicSeq, framing: window.__lb.epicFraming, fellBack: window.__lb.epic.fellBack }));
    if (q.seq.active && q.seq.aperture > 0.5) op = q;
  }
  await steps(6);
  const both = await readMouths();
  const px = both.first && { ...both.first, second: both.second, fellBack: await page.evaluate(() => window.__lb.epic.fellBack) };
  await page.screenshot({ path: `agent/shots/cryptid-6-kelpii-${seed}.png` });
  seeds.push({ seed, opened: Boolean(op), giveFrame, ...px });
  // Let it land and take it, so the next seed starts clean.
  for (let i = 0; i < 900; i++) {
    await logic(1);
    if ((await page.evaluate(() => window.__lb.epic.objects)) > 0) break;
  }
  await page.evaluate(() => {
    const L = window.__lb;
    const s = L.epicSeq.site;
    L.teleport(s.x + 0.4, s.z);
    L.stepLogic(1 / 60);
    L.collect();
    L.stepLogic(1 / 60);
  });
}

const summary = {
  sites,
  finds: finds.length,
  nothing,
  seeds,
  mermaids: { walk: mermaidsWalk, moving: { shape: mermaidsMoving.shape, rock: mermaidsMoving.rock }, still: { shape: mermaidsStill.shape, rock: mermaidsStill.rock }, frame: mermaidsFrame, shapePixel },
  kelpii: { far: { lying: kelpiiFar.lying, standing: kelpiiFar.standing }, near: { lying: kelpiiNear.lying, standing: kelpiiNear.standing }, frame: kelpiiFrame, driftwoodPixel },
  stayDown,
  patupaiarehe: { fogFar, fogNear, shown: { fog: fogShown.fog, cold: fogShown.cold }, frame: fogFrame, givePrompt: givePromptAtFog },
  findTaken,
  grant: {
    gave, before,
    justGiven: { say: justGiven.say, active: justGiven.seq.active, owed: justGiven.owed, taste: justGiven.taste, kelpiiDown: justGiven.snapKelpiiDown, givePromptHidden: justGiven.givePromptHidden, sayShown: justGiven.sayShown, driftwood: justGiven.driftwood },
    midHold: { say: midHold.say, active: midHold.seq.active, owed: midHold.owed },
    opened: opened && { frame: opened.i, mode: opened.seq.mode, tier: opened.seq.tier, framing: opened.framing, fellBack: opened.fellBack },
    mouthPixel,
    secondMouth: mouths.second,
    afterArm,
    landed: Boolean(landed),
    collected,
  },
  grotto: { gave: grottoGave, done: grottoDone },
  left: { r: left.r, say: left.say, pending: left.pending, head: left.head, waited, fogGrant },
};
console.log(JSON.stringify(summary, null, 2));

await browser.close();

// --- what has to be true ---------------------------------------------------
const fails = [];
if (errors.length) fails.push(`console errors: ${errors.slice(0, 3).join(' | ')}`);

// The three are there, by name as she wrote them, and none fell back.
const names = sites.map((s) => s.name);
for (const n of ['grotto mermaids', 'moana kelpī', 'patupaiarehe']) if (!names.includes(n)) fails.push(`missing cryptid: ${n}`);
for (const s of sites) if (s.fellBack) fails.push(`${s.name} fell back to a fixed offset`);
if (finds.length !== 6) fails.push(`expected 6 cryptid finds, got ${finds.length}`);

// Mermaids: a shape only for the still.
if (mermaidsMoving.shape) fails.push('the pale shape showed while the player was moving');
if (!mermaidsStill.shape) fails.push('the pale shape did not show after standing still');
if (!mermaidsStill.rock) fails.push('the rock at the grotto is not drawn');
if (!mermaidsFrame?.inFrame) fails.push(`the grotto is not in frame: ${JSON.stringify(mermaidsFrame)}`);
// The shape is IN the water and ON the screen: its centre projects in frame,
// the ground under it is below the sea, and the pixel there changes when the
// shape is held off.
const pxDiff = (a, b) => Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]) + Math.abs(a[2] - b[2]);
if (!shapePixel) fails.push('the pale shape has no drawn position');
else {
  if (!shapePixel.frame.inFrame) fails.push(`the pale shape projects off screen: ${JSON.stringify(shapePixel.frame)}`);
  if (!(shapePixel.frame.ground < -0.1)) fails.push(`the pale shape is not over water: ground ${shapePixel.frame.ground} at ${JSON.stringify(shapePixel.frame.pos)}`);
  if (!(pxDiff(shapePixel.withShape, shapePixel.without) > 18)) fails.push(`the pale shape does not show at its own centre pixel: with ${shapePixel.withShape} without ${shapePixel.without}`);
}

// Kelpī: lying at 14 m, standing at 5.
if (!kelpiiFar.lying || kelpiiFar.standing) fails.push('the driftwood is not lying at 14 m');
if (!kelpiiNear.standing || kelpiiNear.lying) fails.push('the driftwood is not standing at 5 m');
if (!kelpiiFrame?.inFrame) fails.push(`the kelpī is not in frame: ${JSON.stringify(kelpiiFrame)}`);
// The driftwood's own centre pixel is the log: pale, warmer than green.
const isLog = (px) => px && px[0] > px[1] && px[0] > 110;
// The mouth is a sunset cutout: orange at the foot, starry purple at the top.
// Either is the mouth; sky is neither (pale, r~b), leaf is neither (g highest).
const isMouth = (px) => px && ((px[0] > px[2] + 40) || (px[2] > px[1] + 25 && px[0] > px[1] + 15));
if (!driftwoodPixel?.frame.inFrame || !isLog(driftwoodPixel.px)) fails.push(`the standing driftwood is not visible at its centre pixel: ${JSON.stringify(driftwoodPixel)}`);

// Patupaiarehe: the fog closes in, nothing is drawn as anyone, nothing to give to.
if (!(fogNear.near < fogFar.near - 10)) fails.push(`the fog did not close in on the ridge: near ${fogFar.near} -> ${fogNear.near}`);
if (fogNear.colour === fogFar.colour) fails.push('the fog did not go cold on the ridge');
if (!(fogShown.fog > 0) || !fogShown.cold) fails.push('the fog patch and the cold light are not drawn');
if (!fogFrame?.inFrame) fails.push(`the ridge is not in frame: ${JSON.stringify(fogFrame)}`);
if (givePromptAtFog && !/leave/.test(givePromptAtFog)) fails.push(`the ridge prompt offers to GIVE, not to leave: "${givePromptAtFog}"`);
if (!givePromptAtFog && findTaken.byTier[5] === 0) { /* no items yet — the prompt needs a bag; checked after the find */ }

// A cryptid find is a tier 5, taken by hand, and stays taken.
if (findTaken.prompt?.tier !== 5) fails.push(`the cryptid find is not a tier 5 at the prompt: ${JSON.stringify(findTaken.prompt)}`);
if (!findTaken.taken) fails.push('collecting the cryptid find did not mark it taken');

// The grant: reaction alone, then the tell, then two mouths, on screen, without spending the player.
if (!gave || gave.near !== 'moana_kelpii') fails.push(`giveTo did not reach the kelpī: ${JSON.stringify(gave)}`);
if (!justGiven.say || !/driftwood/.test(justGiven.say)) fails.push(`no narrated reaction from the kelpī: "${justGiven.say}"`);
if (/"/.test(justGiven.say ?? '')) fails.push('the kelpī SPOKE (a quote mark in its line)');
if (justGiven.seq.active) fails.push('the tell started on the same frame as the reaction; it must wait for the hold');
if (justGiven.snapKelpiiDown !== true) fails.push('the snapshot in the gift-to-grant gap does not carry the driftwood lying');
if (justGiven.sayShown && !justGiven.givePromptHidden) fails.push('the give prompt is drawn under the reaction line');
if (!justGiven.driftwood?.lying || !justGiven.driftwood.frame.inFrame || !isLog(justGiven.driftwood.px)) fails.push(`the lying driftwood is not visible during the reaction: ${JSON.stringify(justGiven.driftwood)}`);
if (justGiven.owed !== 1) fails.push(`expected 1 owed grant after the gift, got ${justGiven.owed}`);
if (midHold.seq.active) fails.push('the Epic armed inside the hold');
if (!opened) fails.push('the granted portal never opened');
else {
  if (opened.seq.mode !== 'escalated') fails.push(`the grant did not take the reserve: ${opened.seq.mode}`);
  if (opened.seq.tier !== 6) fails.push(`the grant is tier ${opened.seq.tier}, not 6`);
  // In frame with margin, sited OR fallen back. The fallback used to be a
  // fixed landing behind the player, which is how the mouths opened at NDC
  // x of 7 on four seeds in six with every state assertion green.
  if (!opened.framing?.inFrame) fails.push(`the granted portal opened off screen: ${JSON.stringify(opened.framing)} fellBack=${opened.fellBack}`);
}
if (!justGiven.saved) fails.push('the save was refused between the gift and the grant');
if (!Array.isArray(justGiven.snapOwed) || justGiven.snapOwed.length !== 1 || justGiven.snapOwed[0].tier !== 6) {
  fails.push(`the snapshot does not carry the owed tier 6: ${JSON.stringify(justGiven.snapOwed)}`);
}
// The GIFT moves the hidden number (that is giving); the GRANT must not halve it.
if (!(afterArm.taste > justGiven.taste * 0.8)) fails.push(`the grant spent the player's discernment: ${justGiven.taste} -> ${afterArm.taste}`);
if (!mouthPixel || !isMouth(mouthPixel.px)) {
  fails.push(`the granted mouth is not visible at its own centre pixel: ${JSON.stringify(mouthPixel)}`);
}
if (afterArm.ticks !== before.ticks) fails.push(`the grant reset the pity counter: ${before.ticks} -> ${afterArm.ticks}`);
// The grant is the cryptid's: the player's Epic count does not move.
if (afterArm.count !== before.count) fails.push(`the grant counted as the world's Epic: count ${before.count} -> ${afterArm.count}`);
if (afterArm.granted !== before.granted + 1) fails.push(`the grant did not count as a grant: ${before.granted} -> ${afterArm.granted}`);
// The second mouth: if its centre is on screen, the sunset is at it.
const onScreen = (c) => c && Math.abs(c.x) < 0.9 && Math.abs(c.y) < 0.9;
if (mouths.second && onScreen(mouths.second.centre) && !isMouth(mouths.second.px)) {
  fails.push(`the second mouth is on screen but not visible at its centre pixel: ${JSON.stringify(mouths.second)}`);
}
if (!mouths.second) fails.push('the reserve opened one mouth, not two');
if (!landed) fails.push('the tier 6 never landed');
if (collected.nearest?.tier !== 6) fails.push(`the landed object is not a tier 6 at the prompt: ${JSON.stringify(collected.nearest)}`);
if (collected.byTier[6] !== 1) fails.push(`the tier 6 is not in the kete: ${JSON.stringify(collected.byTier)}`);
if (!collected.water.walkable) fails.push(`the tier 6 landed where the player cannot stand: ${JSON.stringify(collected.water)}`);

// The grotto: dry ground, every time.
if (!grottoDone) fails.push('the grotto grant never landed');
else {
  if (!grottoDone.water.walkable || grottoDone.water.depth >= 0.5) fails.push(`the grotto grant landed in the water: ${JSON.stringify(grottoDone.water)}`);
  if (grottoDone.tier !== 6) fails.push(`the grotto grant is tier ${grottoDone.tier}`);
}

// The driftwood stays down through a natural Epic and stands only for its own grant.
if (stayDown.afterGift.down !== true) fails.push('the kelpī did not lie down on the gift');
if (!stayDown.afterNatural.natural) fails.push('the natural Epic never landed while the grant was owed');
if (stayDown.afterNatural.down !== true) fails.push('collecting a natural Epic stood the kelpī back up while its grant was still owed');
if (!stayDown.afterNatural.shown.lying) fails.push(`the render stood the driftwood up while its grant was owed: ${JSON.stringify(stayDown.afterNatural.shown)}`);
if (!stayDown.afterGrant.granted) fails.push('the owed grant never landed after the natural Epic');
if (stayDown.afterGrant.down !== false) fails.push('collecting the kelpī\'s own grant did not stand it back up');
if (stayDown.afterGrant.counts.count !== stayDown.afterNatural.counts.count) fails.push('the grant moved the natural Epic count');

// Patupaiarehe: leave it, no line, nothing until you have left and looked back.
if (left.say) fails.push(`the fog said something: "${left.say}"`);
if (!left.pending) fails.push('leaving a gift at the ridge did not register');
if (left.head && /patupaiarehe/i.test(left.head)) fails.push(`the panel named the patupaiarehe as a recipient: "${left.head}"`);
if (!left.head || /give/i.test(left.head)) fails.push(`the ridge card is headed with the give verb: "${left.head}"`);
if (waited.atSite.owed !== 0 || waited.atSite.active) fails.push('the grant fired while the player waited at the site');
if (waited.away.owed !== 0 || waited.away.active) fails.push('the grant fired before the player looked back');
if (!(waited.turned.owed === 1 || waited.turned.active)) fails.push('looking back from outside the fog did not answer the gift');
if (waited.turned.say) fails.push(`the fog answered with words: "${waited.turned.say}"`);
if (!fogGrant) fails.push('the patupaiarehe grant never landed');
else {
  if (fogGrant.tier !== 6) fails.push(`the patupaiarehe grant is tier ${fogGrant.tier}`);
  if (fogGrant.say) fails.push(`a line showed during the patupaiarehe grant: "${fogGrant.say}"`);
}

// What earns nothing, earns nothing.
if (nothing.afterSix.owed !== nothing.owedBefore || nothing.afterSix.active || nothing.afterSix.pending) {
  fails.push(`a tier 6 given to the kelpī earned a grant: ${JSON.stringify(nothing.afterSix)}`);
}
if (nothing.afterOne.pending) fails.push(`a tier 1 left in the fog registered as a gift: ${JSON.stringify(nothing.afterOne)}`);
if (nothing.afterOne.owed !== nothing.owedBefore) fails.push('a tier 1 left in the fog owed a grant');

// The kelpī's grant, seed by seed: on screen, and the sunset at its centre.
for (const s of seeds) {
  if (!s.opened) { fails.push(`${s.seed}: the granted portal never opened`); continue; }
  if (!s.inFrame) fails.push(`${s.seed}: the granted mouth opened off screen: ${JSON.stringify(s.centre)} fellBack=${s.fellBack}`);
  if (!s.px || !isMouth(s.px)) fails.push(`${s.seed}: no sunset at the mouth's centre pixel: ${JSON.stringify(s.px)} fellBack=${s.fellBack}`);
  if (s.second && onScreen(s.second.centre) && !isMouth(s.second.px)) fails.push(`${s.seed}: the second mouth is on screen but hidden at its centre: ${JSON.stringify(s.second)}`);
  if (!s.giveFrame?.frame.inFrame || !s.giveFrame.pxs.some(isLog)) fails.push(`${s.seed}: the driftwood is not visible at the give: ${JSON.stringify(s.giveFrame)}`);
}

if (fails.length) { for (const f of fails) console.error('FAIL', f); process.exit(1); }
console.log('\nOK — agent/shots/cryptid-1-mermaids … cryptid-6-kelpii-*-give.png');
