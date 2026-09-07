import { describe, it, expect } from 'vitest';
import {
  makeWorlds, placeReturnDoor, relocateReturnDoor, doorReached, doorCue, placeEntry,
  doorwayPosition, worldLabel, applyPalette, WORLDS_TUNING as W,
} from './worlds.js';
import { makeElsewhere } from '../worldgen/elsewhere.js';
import T from '../../data/tuning.json' with { type: 'json' };
import PALETTES from '../../data/worlds.json' with { type: 'json' };

const SEED = 'test-seed';
const ENTRY = { x: 12, z: 40 };

function elsewhereFor(seed = SEED) {
  const e = makeElsewhere(seed);
  return { terrain: e.world, genScenery: e.scenery.genScenery };
}

describe('return door placement', () => {
  it('is deterministic for a seed', () => {
    const a = placeReturnDoor({ seed: SEED, entry: ENTRY, ...elsewhereFor() });
    const b = placeReturnDoor({ seed: SEED, entry: ENTRY, ...elsewhereFor() });
    expect(b).toEqual(a);
  });

  it('lands inside the annulus, dry, flat and clear, across many seeds', () => {
    let relaxed = 0;
    for (let i = 0; i < 12; i++) {
      const seed = `door-seed-${i}`;
      const { terrain, genScenery } = elsewhereFor(seed);
      const door = placeReturnDoor({ seed, entry: ENTRY, terrain, genScenery });
      const d = Math.hypot(door.x - ENTRY.x, door.z - ENTRY.z);
      expect(d).toBeGreaterThanOrEqual(W.returnDoor.min - 1e-9);
      expect(d).toBeLessThanOrEqual(W.returnDoor.max + 1e-9);
      expect(door.y).toBe(terrain.heightAt(door.x, door.z));
      expect(door.relocations).toBe(0);
      if (door.relaxed) { relaxed++; continue; }
      expect(terrain.isSubmerged(door.x, door.z)).toBe(false);
      expect(terrain.waterDepthAt(door.x, door.z)).toBeLessThan(W.returnDoor.maxWaterDepth);
      expect(terrain.slopeAt(door.x, door.z)).toBeLessThanOrEqual(T.epicSiting.maxSlope);
      // Nothing standing inside the clearance, read from the real scenery.
      for (const s of genScenery(Math.floor(door.x / 32), Math.floor(door.z / 32))) {
        if (s.kind !== 'tree' && s.kind !== 'scrub') continue;
        expect(Math.hypot(s.x - door.x, s.z - door.z)).toBeGreaterThanOrEqual(W.returnDoor.clearance);
      }
    }
    // The fallback exists so it can never be null; it should almost never fire.
    expect(relaxed).toBeLessThanOrEqual(1);
  });

  it('never returns null, even when every rule fails', () => {
    const terrain = {
      heightAt: () => 0, slopeAt: () => 1, isSubmerged: () => true, waterDepthAt: () => 9,
    };
    const door = placeReturnDoor({ seed: SEED, entry: ENTRY, terrain, genScenery: () => [] });
    expect(door).not.toBeNull();
    expect(door.relaxed).toBe(true);
  });
});

describe('the elsewhere entry stands on dry ground', () => {
  /** main.js walkable, for the elsewhere world (no sea there). */
  const walkableIn = (terrain) => (x, z) => terrain.waterDepthAt(x, z) < 0.5;

  it('leaves a walkable entry exactly where it is', () => {
    expect(placeEntry({ entry: ENTRY, walkable: () => true })).toEqual(ENTRY);
  });

  it('moves a wet entry to the nearest walkable point, deterministically', () => {
    // A pond over the entry, dry from 5m east.
    const walkable = (x, z) => x >= ENTRY.x + 5;
    const a = placeEntry({ entry: ENTRY, walkable });
    expect(walkable(a.x, a.z)).toBe(true);
    expect(Math.hypot(a.x - ENTRY.x, a.z - ENTRY.z)).toBeLessThanOrEqual(5 + 1e-9);
    expect(placeEntry({ entry: ENTRY, walkable })).toEqual(a);
  });

  it('the default seed: the arch position is a stream in elsewhere, and the entry is not', () => {
    // The finding. (5, 34) is where the arch stands at home, and read against
    // elsewhere's terrain on the default seed it is 1.6m of fresh water.
    const { terrain } = elsewhereFor('lil-bitz');
    const walkable = walkableIn(terrain);
    const raw = { x: 5, z: 34 };
    const e = placeEntry({ entry: raw, walkable });
    expect(walkable(e.x, e.z)).toBe(true);
    if (!walkable(raw.x, raw.z)) expect(e).not.toEqual(raw);
  });

  it('gives the entry back unmoved when nothing in reach is dry', () => {
    expect(placeEntry({ entry: ENTRY, walkable: () => false })).toEqual(ENTRY);
  });

  it('different seeds hide it in different directions', () => {
    const bearings = new Set();
    for (let i = 0; i < 6; i++) {
      const seed = `door-seed-${i}`;
      const door = placeReturnDoor({ seed, entry: ENTRY, ...elsewhereFor(seed) });
      bearings.add(Math.round(Math.atan2(door.x - ENTRY.x, door.z - ENTRY.z) / (Math.PI / 4)));
    }
    expect(bearings.size).toBeGreaterThan(2);
  });
});

describe('the soft floor', () => {
  it('relocates 25-35m ahead of the player, once, and counts it', () => {
    const { terrain, genScenery } = elsewhereFor();
    const door = placeReturnDoor({ seed: SEED, entry: ENTRY, terrain, genScenery });
    const player = { x: 30, z: 90, fx: 0, fz: 1 };
    const moved = relocateReturnDoor({ seed: SEED, terrain, genScenery, player, door });
    const d = Math.hypot(moved.x - player.x, moved.z - player.z);
    expect(d).toBeGreaterThanOrEqual(W.returnDoor.relocateMin - 1e-9);
    expect(d).toBeLessThanOrEqual(W.returnDoor.relocateMax + 1e-9);
    // Ahead: the bearing is within the cone of the facing.
    const ang = Math.atan2(moved.x - player.x, moved.z - player.z);
    expect(typeof W.returnDoor.relocateSpreadDeg).toBe('number');
    expect(Math.abs(ang)).toBeLessThanOrEqual(W.returnDoor.relocateSpreadDeg * Math.PI / 180 + 1e-9);
    expect(moved.relocations).toBe(1);
  });

  it('is due after lostFloorSec with the door never seen, and only once', () => {
    const m = makeWorlds({ seed: SEED });
    const door = { x: 0, y: 0, z: 60, relaxed: false, relocations: 0 };
    m.cross('elsewhere', 0, { entry: ENTRY, returnDoor: door });
    m.update(W.doorway.fadeOutMs);
    expect(m.which).toBe('elsewhere');
    m.update(W.doorway.fadeOutMs + W.doorway.fadeInMs);

    const floorMs = W.doorway.fadeOutMs + W.returnDoor.lostFloorSec * 1000;
    expect(m.lostFloorDue(floorMs - 1)).toBe(false);
    expect(m.lostFloorDue(floorMs)).toBe(true);
    expect(m.lostFloorDue(floorMs + 60_000)).toBe(false);
  });

  it('never fires once the door has been on screen', () => {
    const m = makeWorlds({ seed: SEED });
    m.cross('elsewhere', 0, { entry: ENTRY, returnDoor: { x: 0, y: 0, z: 60, relaxed: false, relocations: 0 } });
    m.update(W.doorway.fadeOutMs + W.doorway.fadeInMs);
    m.noteDoorOnScreen(5000);
    expect(m.lostFloorDue(W.returnDoor.lostFloorSec * 1000 + 10_000)).toBe(false);
  });
});

describe('cues at the door', () => {
  it('reach radius and the close-range hum', () => {
    const door = { x: 10, y: 0, z: 10, relaxed: false, relocations: 0 };
    expect(doorReached({ x: 10.5, z: 10 }, door)).toBe(true);
    expect(doorReached({ x: 12, z: 10 }, door)).toBe(false);
    expect(doorReached({ x: 10, z: 10 }, null)).toBe(false);

    expect(doorCue({ x: 10 + W.returnDoor.hearRadius + 1, z: 10 }, door)).toEqual({ hear: 0, bend: null });
    const near = doorCue({ x: 10 + W.returnDoor.hearRadius / 2, z: 10 }, door);
    expect(near.hear).toBeCloseTo(0.5, 5);
    expect(near.bend).toEqual({
      x: 10, z: 10, radius: W.returnDoor.bendRadius, radians: W.returnDoor.bendDegrees * Math.PI / 180,
    });
  });

  it('the doorway stands on her inland side', () => {
    const terrain = { heightAt: (x, z) => x + z };
    const p = doorwayPosition({ x: 5, z: 27 }, terrain);
    expect(p).toEqual({ x: 5, y: 5 + 27 + W.doorway.offsetMetres, z: 27 + W.doorway.offsetMetres });
  });
});

describe('the hold', () => {
  it('is a dwell: standing inside for holdMs takes you, key or no key', () => {
    // It was a held key first, and Juniper could not get through the door:
    // nobody holds a key at a doorway. Now the arch fills while you stand in
    // it, and letting go of a key you were never told to hold changes nothing.
    const m = makeWorlds({ seed: SEED });
    expect(m.hold(true, false, 0)).toBe(false);
    expect(m.hold(true, false, W.doorway.holdMs / 2)).toBe(false);
    expect(m.holdProgress).toBeCloseTo(0.5, 5);
    expect(m.hold(true, true, W.doorway.holdMs / 2 + 10)).toBe(false);
    expect(m.holdProgress).toBeGreaterThan(0.5);
    expect(m.hold(true, false, W.doorway.holdMs)).toBe(true);
  });

  it('stepping out resets it; a tap is never enough', () => {
    const m = makeWorlds({ seed: SEED });
    m.hold(true, true, 0);
    m.hold(false, true, 400);
    expect(m.holdProgress).toBe(0);
    expect(m.hold(true, true, 401)).toBe(false);
    expect(m.hold(true, true, 402)).toBe(false);
  });

  it('with Karu it is a walk-in', () => {
    const m = makeWorlds({ seed: SEED });
    m.karu = true;
    expect(m.holdNeededMs()).toBe(W.doorway.holdWithKaruMs);
    expect(m.hold(true, false, 0)).toBe(true);
  });
});

describe('the crossing', () => {
  it('fades out, switches at fadeOutMs, fades in, arrives — steppable', () => {
    const m = makeWorlds({ seed: SEED });
    const door = { x: 1, y: 0, z: 2, relaxed: false, relocations: 0 };
    expect(m.cross('elsewhere', 1000, { entry: ENTRY, returnDoor: door })).toBe(true);
    expect(m.crossing).toBe(true);
    // Re-entrancy: a second cross during the fade is ignored.
    expect(m.cross('home', 1100)).toBe(false);

    expect(m.update(1300)).toEqual([]);
    expect(m.fade).toBeCloseTo(300 / W.doorway.fadeOutMs, 5);
    expect(m.which).toBe('home');

    expect(m.update(1000 + W.doorway.fadeOutMs)).toEqual(['switch']);
    expect(m.fade).toBe(1);
    expect(m.which).toBe('elsewhere');
    expect(m.entry).toEqual(ENTRY);
    expect(m.returnDoor).toEqual(door);
    expect(m.enteredAtMs).toBe(1000 + W.doorway.fadeOutMs);

    const mid = 1000 + W.doorway.fadeOutMs + W.doorway.fadeInMs / 2;
    expect(m.update(mid)).toEqual([]);
    expect(m.fade).toBeCloseTo(0.5, 5);

    expect(m.update(1000 + W.doorway.fadeOutMs + W.doorway.fadeInMs)).toEqual(['arrived']);
    expect(m.fade).toBe(0);
    expect(m.crossing).toBe(false);
  });

  it('a big step still fires switch before arrived, never skipping the swap', () => {
    const m = makeWorlds({ seed: SEED });
    m.cross('elsewhere', 0, { entry: ENTRY, returnDoor: { x: 0, y: 0, z: 0, relaxed: false, relocations: 0 } });
    expect(m.update(10_000)).toEqual(['switch']);
    expect(m.update(20_000)).toEqual(['arrived']);
  });

  it('going home clears the entry and the door', () => {
    const m = makeWorlds({ seed: SEED });
    m.cross('elsewhere', 0, { entry: ENTRY, returnDoor: { x: 0, y: 0, z: 0, relaxed: false, relocations: 0 } });
    m.update(5000);
    m.update(9000);
    m.cross('home', 10_000);
    m.update(10_000 + W.doorway.fadeOutMs);
    expect(m.which).toBe('home');
    expect(m.entry).toBeNull();
    expect(m.returnDoor).toBeNull();
    expect(worldLabel(m, 99_999)).toBe('');
  });
});

describe('the chip', () => {
  it('says elsewhere, then elsewhere · listen after hintAfterSec, never with Karu', () => {
    const m = makeWorlds({ seed: SEED });
    expect(worldLabel(m, 0)).toBe('');
    m.cross('elsewhere', 0, { entry: ENTRY, returnDoor: { x: 0, y: 0, z: 0, relaxed: false, relocations: 0 } });
    m.update(W.doorway.fadeOutMs);
    const t0 = m.enteredAtMs;
    expect(worldLabel(m, t0 + 1000)).toBe(W.worldLabel.elsewhere);
    expect(worldLabel(m, t0 + W.elsewhere.hintAfterSec * 1000)).toBe(W.worldLabel.elsewhereListen);
    m.karu = true;
    expect(worldLabel(m, t0 + W.elsewhere.hintAfterSec * 1000)).toBe(W.worldLabel.elsewhere);
  });

  it('the other world has no name: every label is elsewhere in english', () => {
    for (const v of Object.values(W.worldLabel)) {
      expect(v === '' || v.startsWith('elsewhere')).toBe(true);
      expect(/te rea|rūmoko|rumoko/i.test(v)).toBe(false);
    }
  });
});

describe('save round-trip', () => {
  it('snapshot and restore carry which, entry, door and karu; loading is never a way out', () => {
    const m = makeWorlds({ seed: SEED });
    const door = { x: 3, y: 1, z: 4, relaxed: false, relocations: 1 };
    m.karu = true;
    m.cross('elsewhere', 0, { entry: ENTRY, returnDoor: door });
    m.update(W.doorway.fadeOutMs + W.doorway.fadeInMs);
    const snap = JSON.parse(JSON.stringify(m.snapshot()));
    expect(snap).toEqual({ which: 'elsewhere', entry: ENTRY, returnDoor: door, karu: true });

    const m2 = makeWorlds({ seed: SEED });
    m2.restore(snap, 50_000);
    expect(m2.which).toBe('elsewhere');
    expect(m2.entry).toEqual(ENTRY);
    expect(m2.returnDoor).toEqual(door);
    expect(m2.karu).toBe(true);
    expect(m2.crossing).toBe(false);
    // The lost clock restarts from the load, and a spent relocation stays spent.
    expect(m2.enteredAtMs).toBe(50_000);
    expect(m2.lostFloorDue(50_000 + W.returnDoor.lostFloorSec * 1000)).toBe(false);
  });

  it('restoring a save with no world lands at home', () => {
    const m = makeWorlds({ seed: SEED });
    m.restore(undefined, 0);
    expect(m.snapshot()).toEqual({ which: 'home', entry: null, returnDoor: null, karu: false });
  });
});

describe('palette', () => {
  function fakeColour(v = '#ffffff') {
    return { v, set(x) { this.v = x; } };
  }
  function fakeScene() {
    return {
      scene: { background: fakeColour(), fog: { color: fakeColour(), near: 0, far: 0 } },
      terrainMesh: { material: { color: fakeColour() } },
      treeMeshes: [{ material: { color: fakeColour() } }],
      scrubMesh: { material: { color: fakeColour() } },
      rockMesh: { material: { color: fakeColour() } },
      freshMesh: { material: { color: fakeColour(), emissive: fakeColour('#000000') } },
      water: { visible: true },
    };
  }

  it('elsewhere is the sunset, hides the sea and lights the streams; home is the identity', () => {
    const s = fakeScene();
    applyPalette(s, PALETTES.elsewhere);
    expect(s.scene.background.v).toBe(PALETTES.elsewhere.sky);
    expect(s.scene.fog.color.v).toBe(PALETTES.elsewhere.fog);
    expect(s.scene.fog.far).toBe(PALETTES.elsewhere.fogFar);
    expect(s.water.visible).toBe(false);
    expect(s.freshMesh.material.emissive.v).not.toBe('#000000');
    expect(s.treeMeshes[0].material.color.v).toBe(PALETTES.elsewhere.foliageTint);

    applyPalette(s, PALETTES.home);
    expect(s.water.visible).toBe(true);
    expect(s.terrainMesh.material.color.v).toBe('#ffffff');
    expect(s.treeMeshes[0].material.color.v).toBe('#ffffff');
    expect(s.freshMesh.material.emissive.v).toBe('#000000');
    expect(s.scene.background.v).toBe('#d8cdb4');
  });

  it('home multiplies by white everywhere, so it cannot change the drawing', () => {
    for (const k of ['terrainTint', 'foliageTint', 'scrubTint', 'rockTint', 'freshTint']) {
      expect(PALETTES.home[k]).toBe('#ffffff');
    }
    expect(PALETTES.home.hideSea).toBe(false);
  });
});
