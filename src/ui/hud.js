import { itemDef, tierMeta } from '../worldgen/chunk.js';

/**
 * The HUD is plain DOM over the canvas, not drawn in three.
 *
 * That is deliberate and it is most of the reason this project does not need a
 * 3D UI layer: the kete counter, the pickup toast and the Epic lettering are all
 * easier to animate, easier to make readable on a phone, and far easier for an
 * agent to inspect as text when they are DOM.
 *
 * The Epic lettering is driven per FRAME from the sequence rather than by a CSS
 * animation. A CSS animation cannot be stepped, so it cannot be screenshot at a
 * chosen moment, so it cannot be verified — which is exactly how milestone 3's
 * placeholder banner shipped without anyone being able to check its shape.
 */
export function makeHud(root) {
  root.insertAdjacentHTML('beforeend', `
    <div id="hud">
      <div id="vignette"></div>
      <div id="kete" data-testid="kete">
        <div id="kete-bag">◗</div>
        <div id="kete-count"><span id="kete-n">0</span> <small>in your kete</small></div>
      </div>
      <div id="world-tag" hidden></div>
      <div id="prompt" hidden></div>
      <div id="give-prompt" hidden></div>
      <div id="say" hidden></div>
      <div id="toasts"></div>
      <div id="epic" hidden>
        <span id="epic-text">Epiiiiic FIND!</span>
        <span id="epic-sub"></span>
      </div>
    </div>
  `);

  const nEl = root.querySelector('#kete-n');
  const bagEl = root.querySelector('#kete-bag');
  const promptEl = root.querySelector('#prompt');
  const giveEl = root.querySelector('#give-prompt');
  const sayEl = root.querySelector('#say');
  const toastsEl = root.querySelector('#toasts');
  const epicEl = root.querySelector('#epic');
  const epicTextEl = root.querySelector('#epic-text');
  const epicSubEl = root.querySelector('#epic-sub');
  const vignetteEl = root.querySelector('#vignette');
  const worldTagEl = root.querySelector('#world-tag');
  let sayTimer = 0;

  return {
    setCount(n) {
      if (nEl.textContent === String(n)) return;
      nEl.textContent = String(n);
      bagEl.classList.remove('pop');
      void bagEl.offsetWidth; // restart the animation
      bagEl.classList.add('pop');
    },

    /** @param {import('../worldgen/chunk.js').WorldObject | null} obj */
    setPrompt(obj) {
      if (!obj) {
        promptEl.hidden = true;
        return;
      }
      const def = itemDef(obj.itemId);
      const meta = tierMeta(obj.tier);
      promptEl.hidden = false;
      promptEl.innerHTML =
        `<b style="color:${meta.colour}">${def?.name ?? obj.itemId}</b>` +
        `<span class="key">E</span>`;
    },

    /**
     * An act on the collect key that is not a pickup: the doorway's
     * "go through". Same element and same shape as the item prompt, so the key
     * means "do the thing in front of you" everywhere, and one of the two is
     * shown at a time — the caller decides which.
     * @param {string | null} label
     */
    /**
     * A prompt that is not a pickup. `key` null shows no key chip: the arch
     * is a dwell now, and a chip saying E at a door you are meant to simply
     * stand in is the lie that kept Juniper outside it.
     */
    setAction(label, key = 'E') {
      if (!label) {
        promptEl.hidden = true;
        return;
      }
      promptEl.hidden = false;
      promptEl.innerHTML = `<b>${label}</b>${key ? `<span class="key">${key}</span>` : ''}`;
    },

    /**
     * The outbound verb, surfaced only when someone is in reach. The kete had
     * no way out until now, so this prompt is the whole discovery vector for
     * the giving half of the design.
     *
     * The words are the caller's, whole, from data: `giving.prompt` with the
     * recipient's name in it, a recipient's own `givePrompt` (the cryptids
     * get a quieter one than "give something to"), or a place's
     * `leavePrompt` — there is nobody at the ridge to give to, so the verb
     * is "leave" and no name is shown. Nothing player-facing is written here.
     * @param {string | null} text
     */
    setGivePrompt(text) {
      if (!text) {
        giveEl.hidden = true;
        return;
      }
      giveEl.hidden = false;
      giveEl.innerHTML = `<b>${text}</b><span class="key">G</span>`;
    },

    /**
     * Which world you are in. Empty at home — the beach needs no label — and a
     * small sunset-coloured chip elsewhere. It is a tag, not a marker: it never
     * points anywhere. The one word it gains after a long time lost comes from
     * the same data string, not from here.
     * @param {string} text
     */
    setWorldTag(text) {
      if (!text) {
        if (!worldTagEl.hidden) worldTagEl.hidden = true;
        return;
      }
      if (worldTagEl.textContent !== text) worldTagEl.textContent = text;
      if (worldTagEl.hidden) worldTagEl.hidden = false;
    },

    /** What a recipient says back. Their register, straight from data. */
    say(text, ms = 2600) {
      if (!text) return;
      sayEl.hidden = false;
      sayEl.textContent = text;
      sayEl.classList.remove('play');
      void sayEl.offsetWidth;
      sayEl.classList.add('play');
      clearTimeout(sayTimer);
      sayTimer = setTimeout(() => { sayEl.hidden = true; }, ms);
    },

    /** A revealed sighting. Looks unlike a pickup toast on purpose. */
    sighting(creature, line) {
      const el = document.createElement('div');
      el.className = 'toast sighting';
      el.innerHTML = `<b>${creature}</b><i>${line}</i>`;
      toastsEl.appendChild(el);
      setTimeout(() => el.remove(), 8000);
      while (toastsEl.children.length > 4) toastsEl.firstChild.remove();
    },

    /**
     * Open the Epic lettering. Hand-lettered PNG in the shipped game — Lyss
     * draws it in the game's own ink and it becomes an image here. Never a
     * font, ever. The -4 degree tilt is the anti-corporate signal and survives
     * the swap.
     */
    epicShow(line, subLine, mode) {
      epicEl.hidden = false;
      epicEl.dataset.mode = mode;
      epicTextEl.textContent = line;
      epicSubEl.textContent = '';
    },

    /**
     * One frame of the lettering, driven from the sequence.
     * @param {{shown: boolean, in: number, out: number, chars: number}} l
     * @param {string} subLine
     */
    epicFrame(l, subLine) {
      if (!l.shown) {
        epicEl.hidden = true;
        return;
      }
      epicEl.hidden = false;
      // Entry: scale 0.4 -> 1.18 -> 1.0, rotation -11 -> -4 degrees.
      const e = l.in;
      const scale = e < 0.6 ? 0.4 + (e / 0.6) * 0.78 : 1.18 - ((e - 0.6) / 0.4) * 0.18;
      const rot = -11 + e * 7;
      // Exit is physical, never a plain fade: 1.0 -> 1.06 -> 0.
      const ex = l.out;
      const exitScale = ex === 0 ? 1 : (ex < 0.3 ? 1 + ex * 0.2 : 1.06 * (1 - (ex - 0.3) / 0.7));
      // Drifts up 8px across the hold.
      const drift = -8 * Math.min(1, e);
      epicTextEl.style.transform =
        `translateY(${drift}px) rotate(${rot.toFixed(2)}deg) scale(${(scale * exitScale).toFixed(3)})`;
      epicTextEl.style.opacity = String(ex > 0.7 ? Math.max(0, 1 - (ex - 0.7) / 0.3) : 1);
      epicSubEl.textContent = subLine.slice(0, l.chars);
      epicSubEl.style.opacity = String(ex > 0.5 ? 0 : 1);
    },

    epicHide() {
      epicEl.hidden = true;
    },

    /**
     * The vignette warms toward the portal's sunset orange rather than toward
     * black. It costs nothing and it is the best-value effect in the sequence,
     * which matters because everything else here has to survive with zero
     * post-processing.
     * @param {number} strength 0..1
     */
    vignette(strength) {
      vignetteEl.style.opacity = String(Math.min(1, Math.max(0, strength)));
    },

    toast(obj) {
      const def = itemDef(obj.itemId);
      const meta = tierMeta(obj.tier);
      const el = document.createElement('div');
      el.className = 'toast';
      el.innerHTML =
        `<b><span class="tier-dot" style="background:${meta.colour}"></span>` +
        `${def?.name ?? obj.itemId}</b>` +
        `<i>${def?.flavour ?? ''}</i>`;
      toastsEl.appendChild(el);
      setTimeout(() => el.remove(), 3200);
      while (toastsEl.children.length > 4) toastsEl.firstChild.remove();
    },
  };
}
