import { describe, it, expect } from 'vitest';
import { giveHead } from './givePanel.js';
import R from '../../data/recipients.json' with { type: 'json' };
import T from '../../data/tuning.json' with { type: 'json' };

/**
 * The one rule about the card's heading that a rendered frame caught: at the
 * ridge it read "give to leave it here", because the place's verb had been
 * passed as a name. The heading is pure, so the rule is pinned here without
 * a DOM, and the strings it uses are checked to be in data.
 */
describe('the give card heading', () => {
  it('names a recipient with the give verb, from data', () => {
    expect(giveHead('the trinket maker', 3)).toBe(T.giving.head.replace('{name}', 'the trinket maker'));
    expect(giveHead('the trinket maker', 0)).toBe(T.giving.headEmpty.replace('{name}', 'the trinket maker'));
    expect(T.giving.head).toMatch(/\{name\}/);
    expect(T.giving.prompt).toMatch(/\{name\}/);
  });

  it('the cryptids carry a quieter verb of their own, with no "give" in it', () => {
    for (const id of ['grotto_mermaids', 'moana_kelpii']) {
      const r = R.recipients[id];
      expect(typeof r.givePrompt, id).toBe('string');
      expect(typeof r.giveHead, id).toBe('string');
      expect(r.givePrompt, id).not.toMatch(/give/i);
      expect(r.giveHead, id).not.toMatch(/give/i);
      expect(giveHead(r.name, 2, r.giveHead)).toBe(r.giveHead);
    }
    // A verb with the name in it fills the name in.
    expect(giveHead('x', 1, 'offer it to {name}')).toBe('offer it to x');
  });

  it('the kelpī has a greeting for lying down as well as standing', () => {
    const k = R.recipients.moana_kelpii;
    expect(k.greeting).toMatch(/standing/);
    expect(k.greetingDown).toMatch(/lying/);
    expect(k.greetingDown).not.toMatch(/standing/);
  });

  it('a place gets its heading verbatim: no "give", no name, empty kete or not', () => {
    const p = R.recipients.patupaiarehe;
    expect(p.kind).toBe('place');
    expect(typeof p.leaveHead).toBe('string');
    expect(typeof p.leavePrompt).toBe('string');
    for (const count of [0, 1, 5]) {
      const head = giveHead(p.name, count, p.leaveHead);
      expect(head).toBe(p.leaveHead);
      expect(head).not.toMatch(/give/i);
      expect(head).not.toMatch(/patupaiarehe/i);
    }
    expect(p.leavePrompt).not.toMatch(/give/i);
    expect(p.leaveHead).not.toMatch(/give/i);
  });
});
