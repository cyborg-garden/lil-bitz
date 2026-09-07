// Drive the giving loop end to end and photograph it.
//
// Giving is the outbound verb the kete never had, and it is the fast channel
// into the same hidden number that refusing junk feeds slowly. What has to be
// true here is not "a menu opened": it is that handing over a good find COSTS
// you the object, MOVES the world's spawn table, and buys you something she
// only says out loud.
//
//   node agent/shot-give.mjs

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

// Stand next to the trinket maker with a bag worth agonising over.
const setup = await page.evaluate(() => {
  window.__lb.setSeed('give-shot');
  window.__lb.pause();
  window.__lb.teleport(5, 24.6);
  window.__lb.setYaw(Math.PI);
  for (const tier of [1, 1, 2, 3, 4, 5]) window.__lb.grant(tier);
  window.__lb.stepLogic(1 / 60);
  return { near: window.__lb.giving.near, kete: window.__lb.kete, npcs: window.__lb.npcs };
});

// The prompt, before anything is open. This is the whole discovery vector for
// the giving half of the design: without it the kete has no way out.
await page.evaluate(() => window.__lb.step(1 / 60));
await page.screenshot({ path: 'agent/shots/give-1-prompt.png' });
const promptText = await page.evaluate(() => {
  const el = document.querySelector('#give-prompt');
  if (!el) return null;
  const cs = getComputedStyle(el);
  return cs.display !== 'none' ? el.textContent.trim() : null;
});

// The panel, sorted best first.
await page.evaluate(() => { window.__lb.openGive(); window.__lb.step(1 / 60); });
await page.screenshot({ path: 'agent/shots/give-2-panel.png' });
const panel = await page.evaluate(() => ({
  open: window.__lb.giving.panelOpen,
  selected: window.__lb.giving.selected,
  rows: Array.from(document.querySelectorAll('#give-list li')).map((li) => li.textContent.trim()),
  head: document.querySelector('#give-head')?.textContent ?? null,
}));

// --- junk is warmly accepted and worth nothing -----------------------------
const junk = await page.evaluate(() => {
  const before = { taste: window.__lb.epic.taste, total: window.__lb.kete.total };
  // Walk the cursor down to a tier 1. The list WRAPS, so counting steps is not
  // the same as landing somewhere: read the selection and stop when it matches.
  for (let i = 0; i < 12 && window.__lb.giving.selected?.tier !== 1; i++) window.__lb.navGive(1);
  const sel = window.__lb.giving.selected;
  window.__lb.giveSelected();
  window.__lb.step(1 / 60);
  return {
    tier: sel?.tier,
    before,
    after: { taste: window.__lb.epic.taste, total: window.__lb.kete.total },
    said: window.__lb.giving.lastReaction,
  };
});

// --- a Wonder moves the number, and buys a sighting ------------------------
const wonder = await page.evaluate(() => {
  // Back up to the best thing in the bag.
  for (let i = 0; i < 12 && window.__lb.giving.selected?.tier !== 5; i++) window.__lb.navGive(-1);
  const before = {
    taste: window.__lb.epic.taste,
    total: window.__lb.kete.total,
    collected: window.__lb.kete.collectedTotal,
    known: window.__lb.giving.known.length,
  };
  const sel = window.__lb.giving.selected;
  window.__lb.giveSelected();
  window.__lb.step(1 / 60);
  return {
    tier: sel?.tier,
    before,
    after: {
      taste: window.__lb.epic.taste,
      total: window.__lb.kete.total,
      collected: window.__lb.kete.collectedTotal,
      known: window.__lb.giving.known.length,
    },
    said: window.__lb.giving.lastReaction,
    ledger: window.__lb.kete.ledger,
  };
});

await page.screenshot({ path: 'agent/shots/give-3-reaction.png' });
const sightingShown = await page.evaluate(() => {
  const el = document.querySelector('.toast.sighting');
  if (!el) return null;
  const cs = getComputedStyle(el);
  return cs.display !== 'none' ? el.textContent.trim() : null;
});

// --- walking away closes the conversation ----------------------------------
const walkAway = await page.evaluate(() => {
  window.__lb.teleport(6, 60);
  window.__lb.stepLogic(1 / 60);
  return { panelOpen: window.__lb.giving.panelOpen, near: window.__lb.giving.near };
});

const summary = {
  setup: { near: setup.near, held: setup.kete.total },
  promptText,
  panel: { open: panel.open, head: panel.head, top: panel.selected, rows: panel.rows },
  junk,
  wonder,
  sightingShown,
  walkAway,
};
console.log(JSON.stringify(summary, null, 2));

await browser.close();

// --- what has to be true ---------------------------------------------------
const fails = [];
if (errors.length) fails.push(`console errors: ${errors.slice(0, 3).join(' | ')}`);

if (setup.near !== 'trinket_maker') fails.push(`not in reach of her: near=${setup.near}`);
if (!promptText || !/give/i.test(promptText)) {
  fails.push('no give prompt rendered while standing next to a recipient');
}

if (!panel.open) fails.push('the give panel did not open');
if (panel.selected?.tier !== 5) {
  fails.push(`panel did not put the best find under the cursor: tier ${panel.selected?.tier}`);
}
if (panel.rows.length !== 6) fails.push(`panel listed ${panel.rows.length} items, expected 6`);

if (junk.tier !== 1) fails.push(`expected junk at the bottom of the list, got tier ${junk.tier}`);
if (junk.after.total !== junk.before.total - 1) {
  fails.push('giving junk did not remove it from the kete');
}
if (junk.after.taste !== junk.before.taste) {
  fails.push(`junk moved the hidden number: ${junk.before.taste} -> ${junk.after.taste}`);
}
if (!junk.said) fails.push('she said nothing at all about the junk');

if (!(wonder.tier >= 4)) fails.push(`expected a high-tier gift, got tier ${wonder.tier}`);
if (!(wonder.after.taste > wonder.before.taste)) {
  fails.push('giving a high-tier find did not move the hidden number');
}
if (wonder.after.total !== wonder.before.total - 1) {
  fails.push('the sacrifice was not real — the object stayed in the kete');
}
if (wonder.after.collected !== wonder.before.collected) {
  fails.push('giving erased the collection record; only the object should go');
}
if (wonder.ledger.length !== 2) {
  fails.push(`ledger has ${wonder.ledger.length} entries, expected 2`);
}
if (wonder.after.known <= wonder.before.known) {
  fails.push('a high-tier gift bought no sighting');
}
if (!sightingShown) fails.push('the sighting never rendered');

if (walkAway.panelOpen) fails.push('the panel followed the player down the beach');

if (fails.length) { for (const f of fails) console.error('FAIL', f); process.exit(1); }
console.log('\nOK — agent/shots/give-1-prompt.png, give-2-panel.png, give-3-reaction.png');
