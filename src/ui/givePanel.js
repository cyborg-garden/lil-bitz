import { itemDef, tierMeta } from '../worldgen/chunk.js';
import T from '../../data/tuning.json' with { type: 'json' };

/**
 * The card's heading. Pure, so the one rule about it can be tested without a
 * DOM: a place's heading is the override and nothing else — no "give to", no
 * name, not even when the kete is empty. You do not give to the patupaiarehe.
 * The words come from `giving.head` / `giving.headEmpty` in tuning.json, or
 * from a recipient's own `giveHead` when it carries one.
 * @param {string} name @param {number} count @param {string | null} [override]
 *        a heading used verbatim (a place's), or with {name} filled in (a
 *        recipient's own verb)
 */
export function giveHead(name, count, override = null) {
  if (override) return override.replace('{name}', name);
  const tpl = count ? T.giving.head : T.giving.headEmpty;
  return tpl.replace('{name}', name);
}

/**
 * The give panel. Where the game's one real decision gets made.
 *
 * Every good find now has two futures: keep it, and it fills your collection —
 * or give it, and the world starts showing you better ones. The panel exists so
 * that choice is made deliberately, item by item, rather than by a hotkey that
 * dumps the bag. It sorts best-first for exactly that reason: the thing you
 * would agonise over is the thing under the cursor when it opens.
 *
 * While it is open the offer book is told the UI is blocking, so items the
 * player walks away from during a conversation are not counted as refusals.
 * Reading a menu is not discernment.
 */
export function makeGivePanel(root) {
  root.insertAdjacentHTML('beforeend', `
    <div id="give-panel" hidden>
      <div id="give-head"></div>
      <ul id="give-list"></ul>
      <div id="give-foot"><span class="key">↑↓</span> choose <span class="key">E</span> give <span class="key">Esc</span> keep them</div>
    </div>
  `);

  const panel = root.querySelector('#give-panel');
  const head = root.querySelector('#give-head');
  const list = root.querySelector('#give-list');

  let open = false;
  /** @type {{id: string, itemId: string, tier: number}[]} */
  let items = [];
  let cursor = 0;
  let recipientName = '';
  /** @type {string | null} a heading given verbatim, in place of "give to …" */
  let headOverride = null;

  function render() {
    head.textContent = giveHead(recipientName, items.length, headOverride);

    list.innerHTML = items.map((it, i) => {
      const def = itemDef(it.itemId);
      const meta = tierMeta(it.tier);
      return `<li class="${i === cursor ? 'sel' : ''}">` +
        `<span class="tier-dot" style="background:${meta.colour}"></span>` +
        `<span class="give-name">${def?.name ?? it.itemId}</span>` +
        `<span class="give-tier">${meta.name}</span></li>`;
    }).join('');

    const sel = list.querySelector('.sel');
    if (sel) sel.scrollIntoView({ block: 'nearest' });
  }

  return {
    get open() { return open; },
    get selected() { return items[cursor] ?? null; },

    /**
     * @param {string} name
     * @param {{id: string, itemId: string, tier: number}[]} held best first
     * @param {{head?: string}} [opts] a place gets its heading verbatim: the
     *        card at the ridge read "give to leave it here" when the place's
     *        verb was passed as a name.
     */
    show(name, held, { head: override = null } = {}) {
      recipientName = name;
      headOverride = override;
      items = held;
      cursor = 0;
      open = true;
      panel.hidden = false;
      render();
    },

    hide() {
      open = false;
      panel.hidden = true;
    },

    move(delta) {
      if (!open || items.length === 0) return;
      cursor = (cursor + delta + items.length) % items.length;
      render();
    },

    /** Drop one item out of the list after it has been given. */
    remove(id) {
      const i = items.findIndex((it) => it.id === id);
      if (i < 0) return;
      items.splice(i, 1);
      if (cursor >= items.length) cursor = Math.max(0, items.length - 1);
      render();
    },
  };
}
