import { describe, it, expect } from 'vitest';
import { readFileSync, existsSync } from 'node:fs';
import CHARS from '../../public/art/chars/manifest.json' with { type: 'json' };
import ROSTER from '../../data/characters.json' with { type: 'json' };

/**
 * The art pipeline's contract. These are cheap and they catch the failures that
 * are otherwise invisible until someone looks at a frame: a texture that 404s,
 * a hardcoded aspect ratio that silently stretches a figure, a sprite so heavy
 * it doubles the download.
 */

describe('character manifest', () => {
  it('names the roles the game actually asks for', () => {
    expect(CHARS.player).toBeDefined();
    expect(CHARS.trinket_maker).toBeDefined();
  });

  it('points at files that exist', () => {
    for (const [id, def] of Object.entries(CHARS)) {
      const path = `public/${def.png}`;
      expect(existsSync(path), `${id} -> ${path}`).toBe(true);
    }
  });

  it('records the real pixel dimensions of each PNG', () => {
    // Aspect must come from the file, never from a guess. Post 3 is 1349 tall
    // and post 4 is 1433, so a single assumed aspect would visibly stretch one
    // of them.
    for (const [id, def] of Object.entries(CHARS)) {
      const buf = readFileSync(`public/${def.png}`);
      // PNG IHDR: width and height are big-endian uint32 at bytes 16 and 20.
      expect(buf.subarray(1, 4).toString('ascii'), `${id} is a PNG`).toBe('PNG');
      expect(buf.readUInt32BE(16), `${id} width`).toBe(def.w);
      expect(buf.readUInt32BE(20), `${id} height`).toBe(def.h);
    }
  });

  it('keeps every figure a plausible human height', () => {
    for (const [id, def] of Object.entries(CHARS)) {
      // An unwired entry is not a person and is not drawn: whatever height
      // the cutout has is nobody's business yet.
      if (def.unwired) continue;
      expect(def.worldHeight, id).toBeGreaterThan(1.4);
      expect(def.worldHeight, id).toBeLessThan(2.3);
    }
  });

  it('an unwired entry is on no roster and claims nothing about who it is', () => {
    // The Karu cutout: a figure with a face, in the tree, not approved. The
    // manifest may register the file; it may not put it on screen or say what
    // Karu is — that is hers to say.
    const roster = new Set(ROSTER.roster.map((r) => r.id));
    for (const [id, def] of Object.entries(CHARS)) {
      if (!def.unwired) continue;
      expect(roster.has(id), `${id} is on the roster`).toBe(false);
      expect(def.note).not.toMatch(/guide between|is the guide|spirit|god/i);
    }
    // And the wiring the game actually reads never reaches an unwired entry.
    for (const id of ['player', 'trinket_maker', 'wanderer_a', 'wanderer_b', ...roster]) {
      expect(CHARS[id]?.unwired, id).toBeFalsy();
    }
  });

  it('stays inside the texture budget', () => {
    // Everything is inlined as base64 in the single-file build, which inflates
    // by about a third, so this is the real download cost.
    //
    // Raised from 600 KB when character select arrived: the roster went from
    // one player figure to four, plus two re-cast wanderers, and the right
    // answer to seven characters is a bigger budget rather than quantising
    // Lyss's linework further. Per-figure is the number that actually matters.
    let total = 0;
    for (const def of Object.values(CHARS)) {
      const bytes = readFileSync(`public/${def.png}`).length;
      expect(bytes, def.png).toBeLessThan(110 * 1024);
      total += bytes;
    }
    expect(total).toBeLessThan(820 * 1024);
  });

  it('offers a real choice of characters', () => {
    const players = Object.entries(CHARS).filter(([, d]) => d.role === 'player');
    expect(players.length).toBeGreaterThanOrEqual(3);
    // Every playable figure must come from a DIFFERENT source drawing, or the
    // picker is showing the same person in four poses.
    const sources = new Set(players.map(([, d]) => d.source));
    expect(sources.size).toBe(players.length);
  });

  it('never casts the trinket maker as a wanderer', () => {
    // wanderer_a used to be a trinket-maker variant, so two people standing on
    // the same beach were visibly the same drawing.
    const maker = CHARS.trinket_maker.source;
    for (const [id, def] of Object.entries(CHARS)) {
      if (id === 'trinket_maker') continue;
      expect(def.source, id).not.toBe(maker);
    }
  });

  it('billboards about the Y axis, with the pivot at the feet', () => {
    // Both are load-bearing: a free-tilting billboard lies back toward the lens
    // as the camera pitches, and a centre pivot buries every figure to the knee.
    for (const [id, def] of Object.entries(CHARS)) {
      expect(def.billboard, id).toBe('y-axis');
      expect(def.pivot, id).toBe('bottom');
    }
  });
});
