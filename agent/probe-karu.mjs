// Reproduce: follow the eye by keys in elsewhere.
import { chromium } from 'playwright';

const seed = process.argv[2] ?? 'lil-bitz';
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 900, height: 506 } });
const errors = [];
page.on('pageerror', (e) => errors.push(String(e)));
await page.goto('http://localhost:5173/', { waitUntil: 'load' });
await page.waitForFunction(() => window.__lb?.ready === true, { timeout: 20000 });
await page.evaluate(() => window.__lb.title.start());
await page.waitForTimeout(900);

const arrived = await page.evaluate((s) => {
  const L = window.__lb;
  L.setSeed(s);
  L.pause();
  L.forceKaru();
  for (let i = 0; i < 60 * 8; i++) L.stepLogic(1 / 60);
  L.forceDoorway();
  const d = L.world.doorway;
  L.teleport(d.x, d.z - 0.6);
  L.setYaw(Math.PI);
  L.stepLogic(1 / 60);
  for (let i = 0; i < 400 && (L.world.crossing || L.world.which !== 'elsewhere'); i++) L.stepLogic(1 / 60);
  for (let i = 0; i < 60; i++) L.stepLogic(1 / 60);
  return { world: L.world.which, dist: L.world.returnDoorDist, player: L.player, karu: L.karu.pos, goal: L.karu.goal };
}, seed);
console.log('arrived', JSON.stringify(arrived));

let walking = false;
const samples = [];
for (let f = 0; f < 60 * 60; f += 5) {
  const kd = await page.evaluate(() => {
    const L = window.__lb;
    const k = L.karu.pos;
    const p = L.player;
    if (L.karu.dist > 1.0) L.setYaw(Math.atan2(-(k.x - p.x), -(k.z - p.z)));
    return L.karu.dist;
  });
  const want = kd > 1.0;
  if (want !== walking) { if (want) await page.keyboard.down('KeyW'); else await page.keyboard.up('KeyW'); walking = want; }
  await page.evaluate(() => { for (let i = 0; i < 5; i++) window.__lb.stepLogic(1 / 60); });
  if (f % 300 === 0) {
    const s = await page.evaluate(() => {
      const L = window.__lb;
      const p = L.player;
      return { t: +(L.world.lostSec).toFixed(1), dist: L.world.returnDoorDist, p: { x: +p.x.toFixed(1), z: +p.z.toFixed(1) }, depth: L.waterAt(p.x, p.z).depth, kd: L.karu.dist, esc: L.karu.escaping, goalDepth: L.waterAt(L.karu.goal.x, L.karu.goal.z).depth, which: L.world.which };
    });
    samples.push(s);
    console.log(JSON.stringify(s));
    if (s.which === 'home') break;
  }
}
if (walking) await page.keyboard.up('KeyW');
await page.evaluate(() => window.__lb.step(1 / 60));
await page.screenshot({ path: `agent/shots/probe/karu-follow-${seed}.png` });
console.log('errors', errors);
await browser.close();
