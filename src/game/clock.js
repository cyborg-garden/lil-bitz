/**
 * Fixed-timestep clock with explicit pause and step.
 *
 * The agent harness depends on this: `pause()` then `step(1/60)` advances the
 * simulation by exactly one frame and renders it, so screenshots are stable
 * enough to diff and an animation can be captured at a chosen moment.
 *
 * Input is sampled inside `advance`, never inside the rAF callback, which is
 * what lets a held key still move the player while the clock is paused.
 */
export function makeClock({ advance, draw, maxStep = 0.05 }) {
  let paused = false;
  let last = performance.now();
  let raf = 0;

  function frame(now) {
    raf = requestAnimationFrame(frame);
    const dt = Math.min((now - last) / 1000, maxStep);
    last = now;
    if (paused) return;
    advance(dt);
    draw();
  }

  raf = requestAnimationFrame(frame);

  return {
    pause() { paused = true; },
    resume() { paused = false; last = performance.now(); },
    get paused() { return paused; },
    /** Advance by exactly dt and render one frame, regardless of pause state. */
    step(dt) { advance(dt); draw(); },
    /**
     * Advance the simulation WITHOUT rendering.
     *
     * A five minute economy run is 18,000 frames, and rendering every one of
     * them through SwiftShader takes longer than playing the game. The loot
     * systems do not read a single pixel, so the harness can skip the draw and
     * check the economy in seconds. Anything visual must still use step().
     */
    stepLogic(dt) { advance(dt); },
    stop() { cancelAnimationFrame(raf); },
  };
}
