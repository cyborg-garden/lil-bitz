# The agent harness

`npm run gate` boots a headless Chromium against the dev server, drives the game,
captures a frame, and asserts on both the numbers and the picture.

Run it after any visual change, then **open `agent/shots/gate.png` and look at it.**
The numbers passing is not the same as the frame being right — that is the entire
reason this file exists.

## Gate results, 2026-08-27

First run, all six checks passed on the spike scene. This closes four of the five
day-one unknowns in `../../plan/BUILD-PLAN.md` §2.8.

| Check | Result |
|---|---|
| WebGL2 context | ANGLE / Vulkan 1.3.0 / **SwiftShader** |
| Held key under a paused clock | moved 4.400m, expected 4.40 |
| `page.screenshot()` on a paused `preserveDrawingBuffer` canvas | 42,871 bytes |
| `drawImage` variance probe on a WebGL canvas | stddev 23.06, mean luma 179.8 |
| Geometry drew | 3 draw calls, 16,336 triangles |
| Console | clean |

Screenshot inspected by eye: ground plane with height variation, 400 instanced
objects, player capsule, fog. Correct.

**Still unverified:** `wrangler pages deploy`, and audio, which is human-only
forever because headless Chromium has no audio device.

## The rules this bought

**Launch Chromium with default args.** No `--use-gl`, no `--use-angle`, no
`--enable-unsafe-swiftshader`. BUILD-PLAN records those flags producing a blank
PNG while every telemetry field still read healthy. The default path already
routes to SwiftShader, as the vendor string above shows.

**Sample input inside `step()`, never inside `requestAnimationFrame`.** Held keys
go into a `Set` on keydown/keyup; movement reads that Set when the clock is
stepped. This is what makes a held key work while the clock is paused. Driving
input from rAF breaks the moment anything pauses.

**Use the Playwright node script, not the Playwright MCP, for movement.**
MCP `browser_press_key` sends down+up instantly, so the player never moves. MCP
is fine for a quick look at a live dev server.

**Keep the blank-frame guard.** Byte-size floor and luminance-variance floor,
both, on every capture. A blank frame beside healthy telemetry is the worst
failure mode available and it has already happened once in this project's
research.

## Files

- `gate.mjs` — the day-one gate. Proves the harness itself works.
- `shots/` — gitignored output.
