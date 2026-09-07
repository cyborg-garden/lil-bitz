// The way in: title, character select, and the first frame of actually playing.
//
// The thing worth checking here is not that a menu appears. It is that the
// world is ALREADY RUNNING behind the title — the beach is the best thing the
// game has to show and hiding it behind a splash would be throwing that away —
// and that nothing the player does at the title leaks into the game.
//
//   node agent/shot-title.mjs

import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1000, height: 562 } });
const errors = [];
page.on('pageerror', (e) => errors.push(String(e)));
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });

mkdirSync('agent/shots', { recursive: true });
await page.goto(process.env.LB_URL ?? 'http://localhost:5173/', { waitUntil: 'load' });
await page.waitForFunction(() => window.__lb?.ready === true, { timeout: 20000 });

// Give the sprites in the picker a moment to decode.
await page.waitForFunction(
  () => Array.from(document.querySelectorAll('.pick-art img')).every((i) => i.complete),
  { timeout: 10000 },
).catch(() => {});

const atTitle = await page.evaluate(() => ({
  open: window.__lb.title.open,
  panel: window.__lb.title.panel,
  started: window.__lb.started(),
  roster: window.__lb.title.roster,
  // The world behind the overlay has to be drawn, not black.
  render: window.__lb.render,
}));
await page.screenshot({ path: 'agent/shots/title-1.png' });

// Nothing pressed at the title may reach the game.
const leak = await page.evaluate(() => {
  const before = window.__lb.player;
  window.__lb.pause();
  return { before };
});
await page.keyboard.down('KeyW');
await page.evaluate(() => { for (let i = 0; i < 90; i++) window.__lb.step(1 / 60); });
await page.keyboard.up('KeyW');
await page.keyboard.press('KeyE');
await page.evaluate(() => { for (let i = 0; i < 5; i++) window.__lb.step(1 / 60); });
const afterTitleKeys = await page.evaluate(() => ({
  player: window.__lb.player,
  kete: window.__lb.kete.total,
  epicCount: window.__lb.epic.count,
  taste: window.__lb.epic.taste,
}));

// Character select.
await page.evaluate(() => { window.__lb.title.toPick(); });
await page.evaluate(() => { window.__lb.title.select(2); });
await page.evaluate(() => { for (let i = 0; i < 20; i++) window.__lb.step(1 / 60); });
// The card styles transition over 160ms of REAL time, and stepping the game
// clock does not advance that. Without this wait the shot catches the previous
// selection halfway through releasing and two cards look chosen.
await page.waitForTimeout(300);
await page.screenshot({ path: 'agent/shots/title-2-pick.png' });
// Headless Chromium has no audio device but does run WebAudio, so the song's
// decode-and-start path can be checked even though nothing is heard.
await page.waitForFunction(() => window.__lb.audio.titleSongPlayed, { timeout: 8000 })
  .catch(() => {});
const atPick = await page.evaluate(() => ({
  panel: window.__lb.title.panel,
  heading: document.querySelector('#pick-head')?.textContent ?? null,
  songPlayed: window.__lb.audio.titleSongPlayed,
  selected: window.__lb.title.selected,
  cards: Array.from(document.querySelectorAll('.pick')).map((c) => ({
    id: c.dataset.id,
    sel: c.classList.contains('sel'),
    name: c.querySelector('b')?.textContent ?? null,
    imgLoaded: c.querySelector('img')?.naturalWidth > 0,
  })),
}));

// Start, with the third character.
await page.evaluate(() => { window.__lb.title.start(); });
await page.evaluate(() => { for (let i = 0; i < 40; i++) window.__lb.step(1 / 60); });

// Mid-fade the overlay is still in the DOM, and for that half second it must
// already be click-through or it eats the player's first press.
const fading = await page.evaluate(() => {
  const el = document.querySelector('#title');
  return el ? getComputedStyle(el).pointerEvents : 'gone';
});

// It has to actually leave, though. The fade is on a real-time timer, not the
// game clock, so this waits rather than stepping.
await page.waitForFunction(() => !document.querySelector('#title'), { timeout: 4000 })
  .catch(() => {});

const started = await page.evaluate(() => ({
  started: window.__lb.started(),
  character: window.__lb.character(),
  overlayPresent: Boolean(document.querySelector('#title')),
}));
started.fading = fading;

// Walk a little so the chosen figure is on screen and moving.
await page.keyboard.down('KeyW');
await page.evaluate(() => { for (let i = 0; i < 150; i++) window.__lb.step(1 / 60); });
await page.keyboard.up('KeyW');
await page.evaluate(() => { for (let i = 0; i < 4; i++) window.__lb.step(1 / 60); });
await page.screenshot({ path: 'agent/shots/title-3-playing.png' });
const playing = await page.evaluate(() => window.__lb.player);

// --- save, reload, carry on --------------------------------------------------
// Collect something, force a save, reload the page cold, and the title must
// offer to carry on — into the same seed, the same character, the same spot,
// with the same thing in the bag.
const beforeReload = await page.evaluate(() => {
  window.__lb.grant(4);
  window.__lb.save.write();
  return {
    exists: window.__lb.save.exists,
    character: window.__lb.character(),
    kete: window.__lb.kete.total,
    player: window.__lb.player,
    seed: window.__lb.seed,
  };
});

await page.reload({ waitUntil: 'load' });
await page.waitForFunction(() => window.__lb?.ready === true, { timeout: 20000 });
const reloaded = await page.evaluate(() => ({
  canLoad: window.__lb.title.canLoad,
  loadButton: document.querySelector('#title-load')?.textContent ?? null,
  startButton: document.querySelector('#title-start')?.textContent ?? null,
}));
await page.screenshot({ path: 'agent/shots/title-4-carry-on.png' });

await page.evaluate(() => window.__lb.title.load());
await page.evaluate(() => { for (let i = 0; i < 5; i++) window.__lb.step(1 / 60); });
const carried = await page.evaluate(() => ({
  started: window.__lb.started(),
  character: window.__lb.character(),
  kete: window.__lb.kete.total,
  player: window.__lb.player,
  seed: window.__lb.seed,
}));

// And a fresh start must wipe it, or "start again" is a lie.
await page.reload({ waitUntil: 'load' });
await page.waitForFunction(() => window.__lb?.ready === true, { timeout: 20000 });
await page.evaluate(() => { window.__lb.title.toPick(); window.__lb.title.start(); });
const afterFresh = await page.evaluate(() => ({
  kete: window.__lb.kete.total,
  saveExists: window.__lb.save.exists,
}));

console.log(JSON.stringify({
  atTitle, afterTitleKeys, atPick, started, playing, beforeReload, reloaded, carried, afterFresh,
}, null, 2));
await browser.close();

const fails = [];
if (errors.length) fails.push(`console errors: ${errors.slice(0, 3).join(' | ')}`);

if (!atTitle.open) fails.push('no title screen');
if (atTitle.panel !== 'title') fails.push(`title opened on the wrong panel: ${atTitle.panel}`);
if (atTitle.started) fails.push('the game was already running before Start');
if (atTitle.roster.length < 2) fails.push(`character select has ${atTitle.roster.length} options`);
if (!(atTitle.render.triangles > 1000)) {
  fails.push('the world is not being drawn behind the title — it should already be there');
}

const moved = Math.hypot(
  afterTitleKeys.player.x - leak.before.x,
  afterTitleKeys.player.z - leak.before.z,
);
if (moved > 0.01) fails.push(`held W at the title moved the player ${moved.toFixed(2)}m`);
if (afterTitleKeys.kete !== 0) fails.push('an item was collected from the title screen');
if (afterTitleKeys.taste !== 0) fails.push('the discernment clock ran behind the title');

if (atPick.panel !== 'pick') fails.push('Start did not reach character select');
if (atPick.heading !== 'Ko wai koe?') fails.push(`character select asks "${atPick.heading}", not "Ko wai koe?"`);
if (!atPick.songPlayed) fails.push('her song did not start on the Start press');
if (atPick.cards.length !== atTitle.roster.length) fails.push('card count does not match the roster');
for (const c of atPick.cards) {
  if (!c.imgLoaded) fails.push(`${c.id}: the character art did not load`);
  if (!c.name) fails.push(`${c.id}: no name rendered`);
}
if (atPick.cards.filter((c) => c.sel).length !== 1) fails.push('not exactly one card selected');
if (atPick.selected !== atPick.cards.find((c) => c.sel)?.id) {
  fails.push('the highlighted card is not the one that would be chosen');
}

if (!started.started) fails.push('the game did not start');
if (started.character !== atPick.selected) {
  fails.push(`chose ${atPick.selected} but playing as ${started.character}`);
}
if (fading !== 'none' && fading !== 'gone') {
  fails.push(`the fading title still takes pointer events (${fading}) — it will eat the first click`);
}
if (started.overlayPresent) {
  fails.push('the title overlay never left the DOM');
}
if (Math.hypot(playing.x, playing.z - 8) < 1) fails.push('the player cannot move after starting');

if (!beforeReload.exists) fails.push('the game did not save');
if (!reloaded.canLoad) fails.push('after a reload the title does not offer to carry on');
if (reloaded.loadButton !== 'carry on') fails.push(`load button reads "${reloaded.loadButton}"`);
if (reloaded.startButton !== 'start again') fails.push(`start button reads "${reloaded.startButton}"`);
if (!carried.started) fails.push('carry on did not start the game');
if (carried.character !== beforeReload.character) {
  fails.push(`carried on as ${carried.character}, was ${beforeReload.character}`);
}
if (carried.kete !== beforeReload.kete) {
  fails.push(`kete came back with ${carried.kete} items, had ${beforeReload.kete}`);
}
if (carried.seed !== beforeReload.seed) fails.push('carried on into a different world');
if (Math.hypot(carried.player.x - beforeReload.player.x, carried.player.z - beforeReload.player.z) > 0.5) {
  fails.push('carried on somewhere else');
}
if (afterFresh.kete !== 0 || afterFresh.saveExists) {
  fails.push('"start again" did not wipe the save');
}

if (fails.length) { for (const f of fails) console.error('FAIL', f); process.exit(1); }
console.log('\nOK — agent/shots/title-1.png, title-2-pick.png, title-3-playing.png');
