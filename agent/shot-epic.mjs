// Drive the Epic Find beat sheet to exact moments and photograph each one.
//
// This is the reason the sequence is a state machine over the game clock rather
// than a pile of CSS animations: an animation you cannot stop is an animation
// you cannot verify, and milestone 3's placeholder banner shipped exactly that
// way. Every frame below is a paused clock stepped to a chosen time.
//
//   node agent/shot-epic.mjs

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
await page.evaluate(() => { window.__lb.setSeed('epic-shot'); window.__lb.pause(); });

/** Step the paused clock until the sequence reaches `t` seconds. */
const stepTo = (t) => page.evaluate((target) => {
  for (let i = 0; i < 1200; i++) {
    if (window.__lb.epicSeq.t >= target) break;
    window.__lb.step(1 / 60);
  }
}, t);

const seqState = () => page.evaluate(() => JSON.parse(JSON.stringify({
  seq: window.__lb.epicSeq,
  epic: window.__lb.epic,
  kete: window.__lb.kete,
  framing: window.__lb.epicFraming,
  letteringShown: (() => {
    const el = document.querySelector('#epic');
    if (!el) return false;
    const cs = getComputedStyle(el);
    return cs.display !== 'none' && cs.visibility !== 'hidden';
  })(),
  letteringText: document.querySelector('#epic-text')?.textContent ?? null,
  subText: document.querySelector('#epic-sub')?.textContent ?? null,
})));

// --- the pickup arc, caught in flight --------------------------------------
await page.keyboard.down('KeyW');
await page.evaluate(() => {
  for (let i = 0; i < 1400; i++) {
    window.__lb.stepLogic(1 / 60);
    if (window.__lb.nearest) { window.__lb.collect(); break; }
  }
});
await page.keyboard.up('KeyW');
await page.evaluate(() => { for (let i = 0; i < 14; i++) window.__lb.step(1 / 60); });
await page.screenshot({ path: 'agent/shots/arc.png' });

const keteBefore = (await seqState()).kete.total;

// --- the full beat, four moments -------------------------------------------
await page.evaluate(() => window.__lb.forceEpic(5));

const frames = [];

// The tell. Foliage leans toward the site and there is NOTHING on screen. If
// the aperture is non-zero here the best second in the game has been spent.
await stepTo(0.35);
const tell = await seqState();
await page.screenshot({ path: 'agent/shots/epic-1-tell.png' });
frames.push(['tell', tell]);

// Iris open, at the overshoot.
await stepTo(0.95);
const open = await seqState();
await page.screenshot({ path: 'agent/shots/epic-2-open.png' });
frames.push(['open', open]);

// Mid-fall: the object is out, tumbling, trailing ink.
await stepTo(1.85);
const fall = await seqState();
await page.screenshot({ path: 'agent/shots/epic-3-fall.png' });
frames.push(['fall', fall]);

// The frame OF the impact: burst, dust ring, flecks, shake, lettering entering.
// Shot at +0.08s rather than +0.33s, because the burst is three frames long and
// the dust has faded to nothing by a third of a second.
await stepTo(2.05);
const impact = await seqState();
await page.screenshot({ path: 'agent/shots/epic-4-impact.png' });
frames.push(['impact', impact]);

// The lettering at full hold, with the second line typed on.
await stepTo(2.90);
const letters = await seqState();
await page.screenshot({ path: 'agent/shots/epic.png' });
frames.push(['lettering', letters]);

// --- the escalated reserve, two mouths at once -----------------------------
await page.evaluate(() => window.__lb.forceEpic(6));
await stepTo(2.20); // mid-fall, both mouths open, the tier-6 object out
const escalated = await seqState();
await page.screenshot({ path: 'agent/shots/epic-5-escalated.png' });

// --- was the whole open ON SCREEN? -----------------------------------------
// Sweep the aperture and project the mouth every frame. The first cut of this
// sequence passed every behavioural assertion while opening clipped against
// the top edge of the frame in every seed, because nothing asked where it was.
const framingSweep = await page.evaluate(() => {
  const out = [];
  for (const seed of ['fr-a', 'fr-b', 'fr-c', 'fr-d']) {
    window.__lb.setSeed(seed);
    window.__lb.teleport(0, 8);
    for (let i = 0; i < 240; i++) window.__lb.stepLogic(1 / 60);
    window.__lb.forceEpic(5);
    let open = 0;
    let clipped = 0;
    for (let i = 0; i < 500; i++) {
      window.__lb.stepLogic(1 / 60);
      const q = window.__lb.epicSeq;
      const f = window.__lb.epicFraming;
      if (f && q.aperture > 0.05) { open++; if (!f.inFrame) clipped++; }
      if (!q.active) break;
    }
    out.push({ seed, open, clipped });
  }
  return out;
});

// --- deferred, never cancelled ---------------------------------------------
// Face the sea, where nothing can be sited, and check it still arrives.
const completion = await page.evaluate(() => {
  window.__lb.setSeed('defer');
  window.__lb.teleport(0, 4);
  window.__lb.setYaw(0); // out to sea: no dry, level, in-frame ground ahead
  for (let i = 0; i < 60; i++) window.__lb.stepLogic(1 / 60);
  const before = window.__lb.epic.objects;
  window.__lb.forceEpic(5);
  let steps = 0;
  for (let i = 0; i < 3000; i++) {
    window.__lb.stepLogic(1 / 60);
    steps++;
    if (window.__lb.epic.objects > before) break;
  }
  return { delivered: window.__lb.epic.objects > before, seconds: +(steps / 60).toFixed(1) };
});

const summary = {
  tell: { t: tell.seq.t, aperture: tell.seq.aperture, tell: tell.seq.tell, mode: tell.seq.mode },
  open: { aperture: open.seq.aperture, dilation: open.seq.dilation },
  fall: { object: fall.seq.object, dilation: fall.seq.dilation },
  impact: { sinceImpact: impact.seq.sinceImpact, objects: impact.epic.objects, shown: impact.letteringShown },
  lettering: { text: letters.letteringText, sub: letters.subText, shown: letters.letteringShown },
  escalated: { mode: escalated.seq.mode, tier: escalated.seq.tier },
  framingSweep,
  completion,
  keteBefore,
  keteAfter: letters.kete.total,
};
console.log(JSON.stringify(summary, null, 2));

await browser.close();

// --- what has to be true ---------------------------------------------------
const fails = [];
if (errors.length) fails.push(`console errors: ${errors.slice(0, 3).join(' | ')}`);

if (tell.seq.aperture !== 0) {
  fails.push(`the tell showed something: aperture ${tell.seq.aperture}, must be 0`);
}
if (!(tell.seq.tell > 0)) fails.push('the tell is not pulling the foliage');
if (tell.letteringShown) fails.push('lettering is on screen before the portal opened');

if (!(open.seq.aperture > 0.5)) fails.push(`portal did not open: aperture ${open.seq.aperture}`);
if (!(open.seq.dilation < 1)) fails.push(`no time dilation during the open: ${open.seq.dilation}`);

if (!fall.seq.object) fails.push('nothing came out of the portal');
else if (fall.seq.object.landed) fails.push('the object had already landed mid-fall');

if (!(impact.seq.sinceImpact >= 0)) fails.push('impact never fired');
if (impact.epic.objects !== 1) {
  fails.push(`expected exactly 1 delivered object, got ${impact.epic.objects}`);
}

if (!letters.letteringShown) fails.push('the lettering never rendered');
if (!letters.subText) fails.push('the second line never typed on');
// The line is chosen per playing, excluding recent ones and rolling one rare
// long one. If the DOM keeps the markup's default instead, all of that variety
// is picked and then thrown away, invisibly.
if (letters.letteringText !== letters.seq.line) {
  fails.push(`lettering shows "${letters.letteringText}" but the sequence chose "${letters.seq.line}"`);
}
if (!letters.subText.startsWith(letters.seq.subLine.slice(0, 4))) {
  fails.push(`the second line does not name the item: "${letters.subText}" vs "${letters.seq.subLine}"`);
}

// The rule that outranks all of the spectacle: the player closes the loop.
if (letters.kete.total !== keteBefore) {
  fails.push('the Epic auto-collected — it must be picked up by the player');
}

if (escalated.seq.mode !== 'escalated') {
  fails.push(`tier 6 did not take the reserve: mode ${escalated.seq.mode}`);
}

for (const f of framingSweep) {
  if (f.open === 0) fails.push(`${f.seed}: the portal never opened`);
  else if (f.clipped > 0) {
    fails.push(`${f.seed}: portal off screen for ${f.clipped}/${f.open} frames of the open`);
  }
}

if (!completion.delivered) {
  fails.push('an Epic armed facing the sea never arrived — deferral must never cancel');
}

if (fails.length) { for (const f of fails) console.error('FAIL', f); process.exit(1); }
console.log('\nOK — agent/shots/arc.png, epic-1-tell … epic-5-escalated.png, epic.png');
