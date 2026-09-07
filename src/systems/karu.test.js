import { describe, it, expect } from 'vitest';
import alea from 'alea';

import { makeKaru, karuGoal, lineWalkable, blinkFrameAt, blinkLengthMs, BLINK_SEQ, KARU_DATA as K } from './karu.js';

/**
 * Rung 5, section D. Karu is an eye that leads and never pulls.
 */

const flat = () => 1;
const M = K.motion;

/** Run the eye for `sec` with the player at a fixed pose. */
function run(karu, sec, player, { target = null, heightAt = flat, dt = 1 / 60, t0 = 0, ...rest } = {}) {
  let nowMs = t0;
  for (let t = 0; t < sec; t += dt) {
    nowMs += dt * 1000;
    karu.update({ dt, nowMs, player, target, heightAt, ...rest });
  }
  return nowMs;
}

describe('LOAD-BEARING 15: Karu leads, and is never teleported or pulled', () => {
  it('wants to be 3-4m ahead of where the player is facing', () => {
    const g = karuGoal({ px: 0, pz: 0, fx: 0, fz: 1 });
    expect(g.x).toBeCloseTo(0, 5);
    expect(g.z).toBeGreaterThanOrEqual(M.aheadMin);
    expect(g.z).toBeLessThanOrEqual(M.aheadMax);
  });

  it('leads toward the door when there is one, whatever the player faces', () => {
    const g = karuGoal({ px: 0, pz: 0, fx: 0, fz: 1, target: { x: 50, z: 0 } });
    expect(g.x).toBeGreaterThan(2.9);
    expect(Math.abs(g.z)).toBeLessThan(0.01);
  });

  it('hangs at the door itself once the player is there', () => {
    const g = karuGoal({ px: 49, pz: 0, fx: 0, fz: 1, target: { x: 50, z: 0 } });
    expect(g).toMatchObject({ x: 50, z: 0 });
  });

  it('will not lead across water the player cannot walk: the goal swings onto ground', () => {
    // A pond straight between the player and the door. Everything with x > 1
    // and |z| < 2.5 is deep water; the bank on either side is dry.
    const pond = (x, z) => !(x > 1 && Math.abs(z) < 2.5);
    const g = karuGoal({ px: 0, pz: 0, fx: 1, fz: 0, target: { x: 50, z: 0 }, walkable: pond });
    expect(pond(g.x, g.z)).toBe(true);
    // Still roughly the route: it went round, not back.
    expect(g.x).toBeGreaterThan(0);
    expect(Math.hypot(g.x, g.z)).toBeGreaterThanOrEqual(M.aheadMin - 0.05);
    // The same call with dry ground everywhere is the straight line.
    const s = karuGoal({ px: 0, pz: 0, fx: 1, fz: 0, target: { x: 50, z: 0 }, walkable: () => true });
    expect(Math.abs(s.z)).toBeLessThan(0.01);
  });

  it('with the whole compass under water it still leads straight rather than vanishing', () => {
    const g = karuGoal({ px: 0, pz: 0, fx: 1, fz: 0, walkable: () => false });
    expect(g.x).toBeGreaterThan(M.aheadMin - 0.05);
  });

  it('the eye itself settles on ground, not over the pond, when given walkable', () => {
    const pond = (x, z) => !(x > 1 && Math.abs(z) < 2.5);
    const karu = makeKaru(alea('k'));
    karu.setPresent(true, { x: 0, z: 0 });
    for (let i = 0; i < 60 * 4; i++) {
      karu.update({ dt: 1 / 60, nowMs: i * 16, player: { x: 0, z: 0, yaw: Math.PI / 2 }, target: { x: 50, z: 0 }, heightAt: flat, walkable: pond });
    }
    expect(pond(karu.pos.x, karu.pos.z)).toBe(true);
  });

  it('drifts, capped, rather than jumping to its goal', () => {
    const karu = makeKaru(alea('k'));
    karu.setPresent(true, { x: 0, z: 0 });
    // Player 30m away, facing away. One frame: it moved a frame's worth.
    karu.update({ dt: 1 / 60, nowMs: 16, player: { x: 30, z: 0, yaw: Math.PI / 2 }, heightAt: flat });
    const moved = Math.hypot(karu.pos.x, karu.pos.z);
    expect(moved).toBeGreaterThan(0);
    expect(moved).toBeLessThanOrEqual(M.catchUpSpeed / 60 + 1e-9);
  });

  it('catches up, and arrives ahead of the player', () => {
    const karu = makeKaru(alea('k'));
    karu.setPresent(true, { x: 0, z: 0 });
    run(karu, 20, { x: 30, z: 0, yaw: Math.PI / 2 }); // facing +x
    expect(karu.pos.x).toBeGreaterThan(30 + M.aheadMin - 0.05);
    expect(karu.pos.x).toBeLessThan(30 + M.aheadMax + 0.05);
  });

  it('never moves the player: the system has no output but its own position', () => {
    const karu = makeKaru(alea('k'));
    karu.setPresent(true, { x: 0, z: 0 });
    const player = { x: 5, z: 5, yaw: 0 };
    run(karu, 3, player, { target: { x: 80, z: 80 } });
    expect(player).toEqual({ x: 5, z: 5, yaw: 0 });
  });
});

describe('it waits when you stop', () => {
  it('freezes its goal while the player is still, so it settles instead of orbiting', () => {
    const karu = makeKaru(alea('k'));
    karu.setPresent(true, { x: 0, z: 0 });
    run(karu, 4, { x: 0, z: 0, yaw: 0 });
    const settled = { ...karu.pos };
    // Turning on the spot without moving: the goal stays where it was.
    run(karu, 2, { x: 0, z: 0, yaw: Math.PI });
    expect(karu.pos.x).toBeCloseTo(settled.x, 5);
    expect(karu.pos.z).toBeCloseTo(settled.z, 5);
  });

  it('but still leads toward a lit door while you stand and look', () => {
    const karu = makeKaru(alea('k'));
    karu.setPresent(true, { x: 0, z: 0 });
    run(karu, 4, { x: 0, z: 0, yaw: 0 }, { target: { x: 40, z: 0 } });
    expect(karu.pos.x).toBeGreaterThan(2.9);
  });
});

describe('hover', () => {
  it('sits about hoverMetres over the ground, bobbing a little', () => {
    const karu = makeKaru(alea('k'));
    karu.setPresent(true, { x: 0, z: 0 });
    const ys = [];
    for (let i = 0; i < 240; i++) {
      karu.update({ dt: 1 / 60, nowMs: i * 16, player: { x: 0, z: 0, yaw: 0 }, heightAt: () => 5 });
      ys.push(karu.pos.y);
    }
    const lo = Math.min(...ys);
    const hi = Math.max(...ys);
    expect(lo).toBeGreaterThanOrEqual(5 + M.hoverMetres - M.bobMetres - 1e-6);
    expect(hi).toBeLessThanOrEqual(5 + M.hoverMetres + M.bobMetres + 1e-6);
    expect(hi - lo).toBeGreaterThan(M.bobMetres); // it actually bobs
  });

  it('never goes under the clearance on a slope', () => {
    const karu = makeKaru(alea('k'));
    karu.setPresent(true, { x: 0, z: 0 });
    karu.update({ dt: 1 / 60, nowMs: 16, player: { x: 0, z: 0, yaw: 0 }, heightAt: () => 9 });
    expect(karu.pos.y).toBeGreaterThanOrEqual(9 + M.groundClearance);
  });
});

describe('the blink is stepped, and the first one is held back', () => {
  it('runs open, half, closed, half, open at fps', () => {
    const fps = K.blink.fps;
    const seen = [];
    for (let ms = 0; ms < blinkLengthMs() + 200; ms += 1000 / fps) seen.push(blinkFrameAt(ms, 0));
    expect(seen.slice(0, 5)).toEqual([0, 1, 2, 1, 0]);
  });

  it('is open when not blinking', () => {
    expect(blinkFrameAt(5000, -1)).toBe(0);
    expect(blinkFrameAt(100, 500)).toBe(0);
  });

  it('does not blink in its first seconds, and then does, on a roll', () => {
    // "the eye turns to you. it does not blink." has to be true when it plays.
    const karu = makeKaru(alea('blink'));
    karu.setPresent(true, { x: 0, z: 0 });
    let closedBefore = 0;
    let closedAfter = 0;
    const cutoff = K.blink.firstBlinkDelaySec * 1000;
    for (let ms = 0; ms < 60000; ms += 1000 / 60) {
      karu.update({ dt: 1 / 60, nowMs: ms, player: { x: 0, z: 0, yaw: 0 }, heightAt: flat });
      if (karu.blinkFrame === 2) { if (ms < cutoff) closedBefore++; else closedAfter++; }
    }
    expect(closedBefore).toBe(0);
    expect(closedAfter).toBeGreaterThan(0);
  });

  it('spaces blinks between minSec and maxSec', () => {
    const karu = makeKaru(alea('blink2'));
    karu.setPresent(true, { x: 0, z: 0 });
    const starts = [];
    let wasClosed = false;
    for (let ms = 0; ms < 120000; ms += 1000 / 60) {
      karu.update({ dt: 1 / 60, nowMs: ms, player: { x: 0, z: 0, yaw: 0 }, heightAt: flat });
      const closed = karu.blinkFrame > 0;
      if (closed && !wasClosed) starts.push(ms);
      wasClosed = closed;
    }
    expect(starts.length).toBeGreaterThan(5);
    for (let i = 2; i < starts.length; i++) {
      const gap = (starts[i] - starts[i - 1]) / 1000;
      expect(gap).toBeGreaterThanOrEqual(K.blink.minSec - 0.05);
      expect(gap).toBeLessThanOrEqual(K.blink.maxSec + blinkLengthMs() / 1000 + 0.05);
    }
  });
});

describe('presence and save', () => {
  it('is nowhere until the milestone brings it', () => {
    const karu = makeKaru(alea('k'));
    expect(karu.present).toBe(false);
    karu.update({ dt: 1 / 60, nowMs: 16, player: { x: 0, z: 0, yaw: 0 }, heightAt: flat });
    expect(karu.pos).toEqual({ x: 0, y: 0, z: 0 });
  });

  it('round-trips through the snapshot', () => {
    const a = makeKaru(alea('k'));
    a.setPresent(true, { x: 3, z: 4 });
    run(a, 2, { x: 10, z: 10, yaw: 0 });
    const b = makeKaru(alea('k'));
    b.restore(a.serialize());
    expect(b.present).toBe(true);
    expect(b.pos.x).toBeCloseTo(a.pos.x, 5);
    expect(b.pos.z).toBeCloseTo(a.pos.z, 5);
    b.restore(undefined);
    expect(b.present).toBe(false);
  });
});

describe('LOAD-BEARING 16: Karu has no dialogue until Lyss writes it', () => {
  it('never speaks', () => {
    expect(K.speaks).toBe(false);
    for (const [beat, line] of Object.entries(K.lines)) {
      // No quotes, no first person: third-person narration of what it does.
      expect(line, beat).not.toMatch(/["“”]/);
      expect(line, beat).not.toMatch(/\b(i|i'm|me|my|we|you're welcome)\b/);
      expect(line, beat).toMatch(/^(it|the eye) /);
      expect(line, beat).toBe(line.toLowerCase());
    }
  });

  it('has the four beats plus the greeting, and returns them by name', () => {
    const karu = makeKaru(alea('k'));
    for (const beat of ['greet', 'enterWorld', 'elsewhere', 'thisWay', 'home']) {
      expect(karu.line(beat).length, beat).toBeGreaterThan(8);
    }
    expect(karu.line('nope')).toBe('');
  });

  it('is drawn as a sign, in ink, with no iris colour', () => {
    // A ring and a stroke. The only colour is the portal's ink; there is no
    // field for an iris because there is no iris.
    expect(K.glyph.ink).toBe('#2b2118');
    expect(K.glyph.iris).toBeUndefined();
    // 1.0m, from 0.6: at the chase camera's distance the smaller glyph was a
    // ten-pixel ring in the rendered frame. Still a sign, not a figure.
    expect(K.glyph.sizeMetres).toBeCloseTo(1.0, 5);
  });
});

describe('the route is a line the player can walk, and dry before wet', () => {
  // A channel: wadeable (walkable) everywhere along x in |z| < 2, but with a
  // deep bar at x in [1.2, 1.8] the player cannot step through. The goal
  // point past the bar is walkable; the way to it is not.
  const deepBar = (x, z) => !(Math.abs(z) < 2 && x > 1.2 && x < 1.8);

  it('rejects a goal the player cannot reach even when the goal point itself is walkable', () => {
    // Straight ahead at 3.5m is (3.5, 0): walkable by the point test.
    expect(deepBar(3.5, 0)).toBe(true);
    const g = karuGoal({ px: 0, pz: 0, fx: 1, fz: 0, target: { x: 50, z: 0 }, walkable: deepBar });
    expect(lineWalkable(deepBar, 0, 0, g.x, g.z)).toBe(true);
    expect(Math.abs(g.z)).toBeGreaterThan(1.9); // swung out of the channel
  });

  it('prefers dry ground over wade-depth water when a dry bearing is near the route', () => {
    // Everything walkable; the channel |z| < 1.5 is wet, the banks are dry.
    const dry = (x, z) => Math.abs(z) >= 1.5;
    const g = karuGoal({ px: 0, pz: 0, fx: 1, fz: 0, target: { x: 50, z: 0 }, walkable: () => true, dryAt: dry });
    expect(dry(g.x, g.z)).toBe(true);
    // Still forward: it went along the bank, not back.
    expect(g.x).toBeGreaterThan(0.5);
  });

  it('but crosses wadeable water rather than leading away when the only dry ground is behind', () => {
    // Dry only behind the player (x < -1); the whole way forward is wet but walkable.
    const dry = (x) => x < -1;
    const g = karuGoal({ px: 0, pz: 0, fx: 1, fz: 0, target: { x: 50, z: 0 }, walkable: () => true, dryAt: dry });
    expect(g.x).toBeGreaterThan(2.9);
  });

  it('the stuck escape: no headway toward the door for stuckSec, it opens the full circle and takes dry ground behind', () => {
    const dry = (x) => x < -1;
    const karu = makeKaru(alea('k'));
    karu.setPresent(true, { x: 0, z: 0 });
    const player = { x: 0, z: 0, yaw: Math.PI / 2 };
    const opts = { target: { x: 50, z: 0 }, walkable: () => true, dryAt: dry, heightAt: flat };
    for (let i = 0; i < 60; i++) karu.update({ dt: 1 / 60, nowMs: i * 16, player, ...opts });
    expect(karu.escaping).toBe(false);
    expect(karu.goal.x).toBeGreaterThan(2.9);
    run(karu, M.stuckSec + 0.2, player, opts);
    expect(karu.escaping).toBe(true);
    expect(dry(karu.goal.x, karu.goal.z)).toBe(true);
    // Stays open until the player stands on dry ground, then leads on again.
    run(karu, 1, { x: 0.5, z: 0, yaw: Math.PI / 2 }, opts);
    expect(karu.escaping).toBe(true);
    run(karu, 1, { x: -2, z: 0, yaw: Math.PI / 2 }, opts);
    expect(karu.escaping).toBe(false);
    expect(karu.goal.x).toBeGreaterThan(-2 + 2.9);
  });

  it('a player walking back and forth in the channel is stuck too, not just a still one', () => {
    const dry = (x) => x < -1;
    const karu = makeKaru(alea('k'));
    karu.setPresent(true, { x: 0, z: 0 });
    const opts = { target: { x: 50, z: 0 }, walkable: () => true, dryAt: dry, heightAt: flat };
    // Eight metres up and down the channel, never nearer the door than z=0 was.
    let nowMs = 0;
    for (let t = 0; t < M.stuckSec + 1; t += 1 / 60) {
      nowMs += 1000 / 60;
      const z = Math.sin(t * 1.5) * 4;
      karu.update({ dt: 1 / 60, nowMs, player: { x: 0, z, yaw: Math.PI / 2 }, ...opts });
    }
    expect(karu.escaping).toBe(true);
  });

  it('but steady progress toward the door, however slow, is never stuck', () => {
    const dry = (x) => x < -1;
    const karu = makeKaru(alea('k'));
    karu.setPresent(true, { x: 0, z: 0 });
    const opts = { target: { x: 50, z: 0 }, walkable: () => true, dryAt: dry, heightAt: flat };
    let nowMs = 0;
    for (let t = 0; t < M.stuckSec * 3; t += 1 / 60) {
      nowMs += 1000 / 60;
      karu.update({ dt: 1 / 60, nowMs, player: { x: t * 0.4, z: 0, yaw: Math.PI / 2 }, ...opts });
    }
    expect(karu.escaping).toBe(false);
  });

  it('keeps the bearing it chose while it still passes, so a blocked route does not make it zigzag', () => {
    // A wall straight ahead; both +30 and -30 pass equally. Whichever was
    // chosen last frame is the one chosen this frame.
    const wall = (x, z) => !(x > 1 && Math.abs(z) < 1.2);
    const a = karuGoal({ px: 0, pz: 0, fx: 1, fz: 0, target: { x: 50, z: 0 }, walkable: wall });
    expect(a.off).not.toBe(0);
    const b = karuGoal({ px: 0.02, pz: 0, fx: 1, fz: 0, target: { x: 50, z: 0 }, walkable: wall, prevOff: -a.off });
    expect(Math.sign(b.off)).toBe(-Math.sign(a.off));
    // And the straight route wins the moment it clears.
    const c = karuGoal({ px: 0, pz: 0, fx: 1, fz: 0, target: { x: 50, z: 0 }, walkable: () => true, prevOff: -a.off });
    expect(c.off).toBe(0);
  });

  it('every number the steer reads is in data', () => {
    for (const k of ['steerLineStepMetres', 'preferDryWithinDeg', 'stuckSec', 'stuckProgressMetres', 'stuckSteerMaxDeg']) {
      expect(typeof M[k], k).toBe('number');
    }
    expect(M.stuckSteerMaxDeg).toBeGreaterThanOrEqual(M.steerMaxDeg);
  });
});

describe('the blink frame count is the data', () => {
  it('derives the sequence and its length from blink.frames', () => {
    const n = K.blink.frames;
    expect(BLINK_SEQ.length).toBe(2 * n - 2);
    expect(BLINK_SEQ[0]).toBe(0);
    expect(Math.max(...BLINK_SEQ)).toBe(n - 1);
    expect(blinkLengthMs()).toBeCloseTo((BLINK_SEQ.length / K.blink.fps) * 1000, 6);
  });
});
