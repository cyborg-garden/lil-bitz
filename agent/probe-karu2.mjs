import { chromium } from 'playwright';
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 900, height: 506 } });
await page.goto('http://localhost:5173/', { waitUntil: 'load' });
await page.waitForFunction(() => window.__lb?.ready === true, { timeout: 20000 });
await page.evaluate(() => window.__lb.title.start());
await page.waitForTimeout(900);
await page.evaluate(() => {
  const L = window.__lb;
  L.setSeed('lil-bitz'); L.pause(); L.forceKaru();
  for (let i = 0; i < 480; i++) L.stepLogic(1 / 60);
  L.forceDoorway();
  const d = L.world.doorway;
  L.teleport(d.x, d.z - 0.6); L.setYaw(Math.PI); L.stepLogic(1 / 60);
  for (let i = 0; i < 400 && (L.world.crossing || L.world.which !== 'elsewhere'); i++) L.stepLogic(1 / 60);
  for (let i = 0; i < 60; i++) L.stepLogic(1 / 60);
});
await page.keyboard.down('KeyW');
for (let f = 0; f < 60 * 22; f += 5) {
  await page.evaluate(() => {
    const L = window.__lb; const k = L.karu.pos; const p = L.player;
    L.setYaw(Math.atan2(-(k.x - p.x), -(k.z - p.z)));
    for (let i = 0; i < 5; i++) L.stepLogic(1 / 60);
  });
}
for (let n = 0; n < 12; n++) {
  const s = await page.evaluate(() => {
    const L = window.__lb; const p = L.player; const k = L.karu;
    L.stepLogic(1 / 60);
    return { p: [+p.x.toFixed(2), +p.z.toFixed(2)], depth: L.waterAt(p.x, p.z).depth, karu: [+k.pos.x.toFixed(2), +k.pos.z.toFixed(2)], goal: [+k.goal.x.toFixed(2), +k.goal.z.toFixed(2)], esc: k.escaping, yaw: +p.yaw.toFixed(2) };
  });
  console.log(JSON.stringify(s));
}
const grid = await page.evaluate(() => {
  const L = window.__lb; const p = L.player; const rows = [];
  for (let dz = -3; dz <= 3; dz += 0.5) { let row = ''; for (let dx = -3; dx <= 3; dx += 0.5) { const w = L.waterAt(p.x + dx, p.z + dz); row += (w.walkable ? (w.depth === 0 ? ' . ' : w.depth.toFixed(1).slice(1)) : ' # ') + ' '; } rows.push(`z${(p.z + dz).toFixed(1)} ${row}`); }
  return rows.join('\n');
});
console.log(grid);
await page.keyboard.up('KeyW');
await browser.close();
