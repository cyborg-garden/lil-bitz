import { describe, it, expect } from 'vitest';
import { pickSurface, HINTS } from './surface.js';

/**
 * The control words, per surface. The bug these pin: the xbox50 told a pad
 * player to press Esc (there is none, and on the console's keyboard Esc quits
 * the game), and a phone showed key chips saying E and G.
 */
describe('which surface', () => {
  it('the xbox50 is known by its /cart/ path, whatever the pointer', () => {
    expect(pickSurface({ pathname: '/cart/games/lil-bitz/index.html' })).toBe('console');
    expect(pickSurface({ pathname: '/cart/games/lil-bitz/', coarse: true })).toBe('console');
  });
  it('a coarse pointer off the console is a phone; anything else a desktop', () => {
    expect(pickSurface({ pathname: '/games/lil-bitz/', coarse: true })).toBe('mobile');
    expect(pickSurface({ pathname: '/games/lil-bitz/' })).toBe('desktop');
    expect(pickSurface()).toBe('desktop');
  });
});

describe('the words for each surface', () => {
  it('every surface says how to walk, pick up, give, and get out of the card', () => {
    for (const [s, h] of Object.entries(HINTS)) {
      expect(h.help, s).toMatch(/walk/);
      expect(h.help, s).toMatch(/pick up/);
      expect(h.help, s).toMatch(/give/);
      expect(h.pickKey, s).toBeTruthy();
      expect(h.giveKey, s).toBeTruthy();
      expect(h.panelFoot, s).toMatch(/done/);
    }
  });
  it('only the keyboard is told about keys', () => {
    for (const s of ['mobile', 'console']) {
      const all = Object.values(HINTS[s]).join(' ');
      expect(all, s).not.toMatch(/\bEsc\b|WASD|>E<|>G</);
    }
    expect(HINTS.desktop.panelFoot).toMatch(/Esc/);
  });
  it('the pad words match the cart pad map: a click picks up and gives, a hold closes', () => {
    expect(HINTS.console.pickKey).toBe('click');
    expect(HINTS.console.panelFoot).toMatch(/click<\/span> give/);
    expect(HINTS.console.panelFoot).toMatch(/hold<\/span> done/);
  });
});
