import CHARACTERS from '../../data/characters.json' with { type: 'json' };
import CHARS from '../../public/art/chars/manifest.json' with { type: 'json' };

/**
 * The title, and then choosing who you are.
 *
 * Two panels in one overlay rather than two screens, so there is no load, no
 * fade to black, and no moment where the game is not there. The world is
 * already running and rendering behind both — it is simply not accepting input
 * yet, which is why the beach is visible through the title and why pressing
 * Start feels like stepping into something that was already happening.
 *
 * Load Game is deliberately absent rather than present and disabled. Nothing
 * persists yet, and a greyed-out button that never lights up is a promise the
 * build does not keep.
 */
export function makeTitleScreen(root, {
  onStart, onLoad = null, canLoad = false, onFirstGesture = () => {},
}) {
  const roster = CHARACTERS.roster.filter((r) => CHARS[r.id]);

  root.insertAdjacentHTML('beforeend', `
    <div id="title" data-panel="title">
      <div id="title-wash"></div>

      <section id="title-main">
        <h1 id="title-name">lil bitz</h1>
        <p id="title-sub">a beachcombing game in Project R&#363;MOKO</p>
        <div id="title-actions">
          ${canLoad ? '<button id="title-load" type="button">carry on</button>' : ''}
          <button id="title-start" type="button" class="${canLoad ? 'secondary' : ''}">${canLoad ? 'start again' : 'start game'}</button>
        </div>
        <p id="title-credit">art by Lyss &middot; <span>@gods_eyeball</span></p>
      </section>

      <section id="title-pick" hidden>
        <h2 id="pick-head">Ko wai koe?</h2>
        <ul id="pick-list">
          ${roster.map((r, i) => `
            <li class="pick${i === 0 ? ' sel' : ''}" data-id="${r.id}" data-i="${i}">
              <div class="pick-art">
                <img src="${CHARS[r.id].png}" alt="${r.name}" draggable="false">
              </div>
              <b>${r.name}</b>
              <i>${r.blurb}</i>
            </li>`).join('')}
        </ul>
        <div id="pick-actions">
          <button id="pick-back" type="button">back</button>
          <button id="pick-go" type="button">this one</button>
        </div>
        <p id="pick-note">names are placeholders. they&rsquo;re Lyss&rsquo;s people to name.</p>
      </section>
    </div>
  `);

  const el = root.querySelector('#title');
  const main = root.querySelector('#title-main');
  const pick = root.querySelector('#title-pick');
  const list = root.querySelector('#pick-list');
  /** @type {HTMLElement[]} */
  const cards = Array.from(list.querySelectorAll('.pick'));

  let panel = 'title';
  let cursor = 0;
  let done = false;

  function select(i) {
    cursor = (i + cards.length) % cards.length;
    for (const [n, card] of cards.entries()) card.classList.toggle('sel', n === cursor);
    cards[cursor].scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }

  let gestured = false;
  function toPick() {
    // The Start press is the first gesture the browser will let audio through
    // on, so the title song starts here, under the character select.
    if (!gestured) { gestured = true; onFirstGesture(); }
    panel = 'pick';
    el.dataset.panel = 'pick';
    main.hidden = true;
    pick.hidden = false;
    select(cursor);
  }

  function toTitle() {
    panel = 'title';
    el.dataset.panel = 'title';
    pick.hidden = true;
    main.hidden = false;
  }

  function start() {
    if (done) return;
    done = true;
    el.classList.add('gone');
    // Removed rather than hidden, so nothing on this overlay can ever swallow a
    // click meant for the game.
    setTimeout(() => el.remove(), 520);
    onStart(roster[cursor].id);
  }

  /**
   * Carry on from the save. Skips character select entirely: who you are is in
   * the save, and asking again would be asking the player to remember.
   */
  function loadGame() {
    if (done || !onLoad) return;
    if (!gestured) { gestured = true; onFirstGesture(); }
    done = true;
    el.classList.add('gone');
    setTimeout(() => el.remove(), 520);
    onLoad();
  }

  root.querySelector('#title-start').addEventListener('click', toPick);
  root.querySelector('#title-load')?.addEventListener('click', loadGame);
  root.querySelector('#pick-back').addEventListener('click', toTitle);
  root.querySelector('#pick-go').addEventListener('click', start);
  for (const card of cards) {
    card.addEventListener('click', () => {
      select(Number(card.dataset.i));
      start();
    });
    card.addEventListener('mouseenter', () => select(Number(card.dataset.i)));
  }

  // Keyboard, on the same keys the game uses, so nothing has to be learned
  // twice. This listens at capture on the document rather than going through
  // the game's input module: the game is not running yet, and routing menu keys
  // through the walk controller would mean the player is already walking behind
  // the title.
  const onKey = (e) => {
    if (done) return;
    if (panel === 'title') {
      if (e.code === 'Enter' || e.code === 'Space' || e.code === 'KeyE') {
        e.preventDefault();
        e.stopPropagation();
        // Enter takes the primary action: carry on if there is something to
        // carry on from, otherwise start.
        if (canLoad && onLoad) loadGame(); else toPick();
      }
      return;
    }
    if (e.code === 'ArrowLeft' || e.code === 'KeyA') { e.preventDefault(); select(cursor - 1); }
    else if (e.code === 'ArrowRight' || e.code === 'KeyD') { e.preventDefault(); select(cursor + 1); }
    else if (e.code === 'Enter' || e.code === 'Space' || e.code === 'KeyE') {
      e.preventDefault();
      e.stopPropagation();
      start();
    } else if (e.code === 'Escape') { e.preventDefault(); toTitle(); }
  };
  window.addEventListener('keydown', onKey, true);

  return {
    get open() { return !done; },
    get panel() { return panel; },
    get selectedId() { return roster[cursor].id; },
    get roster() { return roster.map((r) => r.id); },
    get canLoad() { return Boolean(canLoad && onLoad); },
    /** Harness hooks, so the whole flow can be driven without a mouse. */
    _toPick: toPick,
    _select: select,
    _start: start,
    _load: loadGame,
  };
}
