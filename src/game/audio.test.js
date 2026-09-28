import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { makeAudio } from './audio.js';

// Public builds ship without her clip, so the fetch fails (or the host answers
// with an HTML page that will not decode). titleSong() waits for the buffer by
// polling; it must stop polling once the clip is known to be missing, and give
// up on its own if the load never settles at all.

class FakeContext {
  constructor() { this.state = 'running'; this.currentTime = 0; this.destination = {}; }
  createGain() { return { gain: { value: 1 }, connect() {} }; }
  createBufferSource() { return { connect() {}, start() {}, stop() {} }; }
  decodeAudioData() { return Promise.reject(new Error('not audio')); }
  resume() { return Promise.resolve(); }
}

function stubBrowser(fetchImpl) {
  vi.stubGlobal('window', { AudioContext: FakeContext, addEventListener() {} });
  vi.stubGlobal('document', { addEventListener() {}, hidden: false });
  vi.stubGlobal('navigator', {});
  vi.stubGlobal('fetch', fetchImpl);
}

describe('titleSong without the voice clip', () => {
  beforeEach(() => { vi.useFakeTimers(); });
  afterEach(() => { vi.useRealTimers(); vi.unstubAllGlobals(); });

  it('stops retrying once the clip fails to load', async () => {
    stubBrowser(() => Promise.reject(new Error('404')));
    const audio = makeAudio();
    audio.titleSong(0);
    await vi.advanceTimersByTimeAsync(1000);
    expect(vi.getTimerCount()).toBe(0);
    expect(audio.titleSongPlayed ?? false).toBe(false);
  });

  it('stops retrying when the host answers with something that will not decode', async () => {
    stubBrowser(() => Promise.resolve({ ok: true, arrayBuffer: () => Promise.resolve(new ArrayBuffer(8)) }));
    const audio = makeAudio();
    audio.titleSong(0);
    await vi.advanceTimersByTimeAsync(1000);
    expect(vi.getTimerCount()).toBe(0);
  });

  it('gives up on its own if the load never settles', async () => {
    stubBrowser(() => new Promise(() => {}));
    const audio = makeAudio();
    audio.titleSong(0);
    await vi.advanceTimersByTimeAsync(60_000);
    expect(vi.getTimerCount()).toBe(0);
  });
});
