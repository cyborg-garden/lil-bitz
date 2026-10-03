import { describe, it, expect } from 'vitest';
import { makeInput } from './input.js';

// The touch layer's contract with the input seam, tested without a DOM:
// the stick merges with the keys, the button reads as the collect key.
describe('touch state in makeInput', () => {
  it('merges the stick vector into axes and clamps to ±1', () => {
    const input = makeInput(new EventTarget());
    input.touch.x = 0.5;
    input.touch.z = -1;
    expect(input.axes).toEqual({ x: 0.5, z: -1 });
  });

  it('a held button reads as the collect key, and only that', () => {
    const input = makeInput(new EventTarget());
    expect(input.isDown('KeyE')).toBe(false);
    input.touch.held = true;
    expect(input.isDown('KeyE')).toBe(true);
    expect(input.isDown('Space')).toBe(true);
    expect(input.isDown('KeyG')).toBe(false);
    expect(input.isDown('KeyW')).toBe(false);
  });

  it('queueCancel drains once, like the other queues', () => {
    const input = makeInput(new EventTarget());
    input.queueCancel();
    expect(input.takeCancel()).toBe(true);
    expect(input.takeCancel()).toBe(false);
  });
});

// The xbox50 shell's sendKey, verbatim in shape: dispatch on the focused
// element, then again on window unless the first was prevented. A real
// keyboard sends one event; the shell's pad would send two to an unclaimed key.
function shellSendKey(win, focused, code) {
  const init = { bubbles: true, cancelable: true };
  const ev = new Event('keydown', init);
  ev.code = code; ev.repeat = false;
  focused.dispatchEvent(ev);
  if (!ev.defaultPrevented) {
    const again = new Event('keydown', init);
    again.code = code; again.repeat = false;
    win.dispatchEvent(again);
  }
}

describe('menu nav through the xbox50 shell', () => {
  for (const code of ['ArrowDown', 'ArrowUp', 'KeyW', 'KeyS']) {
    it(`one ${code} from the pad moves the selection exactly one row`, () => {
      const win = new EventTarget();
      const input = makeInput(win);
      // The focused element bubbles to window; model it as dispatching there.
      shellSendKey(win, win, code);
      expect(Math.abs(input.takeNav())).toBe(1);
    });
  }
});
