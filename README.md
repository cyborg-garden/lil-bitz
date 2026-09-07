# Lil Bitz

A cosy beachcombing game. Wander a small shore, pick things up, and decide
what is worth giving away. A trinket maker takes what you offer and the island
answers in kind — rarer finds, stranger friends, a doorway for the truly
generous.

Art by Lyss (rights conversation in progress).

## Where this is consumed

- **cyborg.garden** — enrolled in `games.sources.json`, which points at this
  repo's `built` branch (a build artifact branch: `index.html`, `assets/`,
  `meta.json` at its root, published by CI on every push to `main`).
- **xbox50 console** — the cart sync pulls the same `built` branch and serves
  the game under `/cart/`. The in-game help text switches to gamepad wording
  when served from that path.

## History and design docs

This repo holds the game app only. Development history and the design docs
(`plan/`, `reference/`) live in the private `nimbleco-egregore` repo, branch
`dev/juniperbevensee/launch-ux-and-lil-bitz`.

## Development

```sh
npm ci            # install
npm run dev       # dev server on http://localhost:5173
npm test          # unit tests (vitest)
npx vite build --base ./   # build for pages (relative asset paths)
```

## The voice track

`src/game/audio.js` looks for `audio/lyss-background.mp3` — a short cut of
Lyss's voice memo. That recording is not in this repository: the rights
conversation about Lyss's recorded material hasn't happened yet, and until it
does her voice stays out of public git. The game detects the missing file and
plays without it. Deployments that are cleared to carry it add the file as an
overlay at build time.
