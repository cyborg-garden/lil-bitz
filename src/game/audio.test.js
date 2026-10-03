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

function stubBrowser(fetchImpl, baseURI = 'https://cyborg.garden/games/lil-bitz/') {
  vi.stubGlobal('window', { AudioContext: FakeContext, addEventListener() {} });
  vi.stubGlobal('document', { addEventListener() {}, hidden: false, baseURI });
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

// Her clip is looked for beside the page on every surface, so one drop-in
// folder serves the web builds and the xbox50 alike. It used to resolve
// against the bundle in assets/, which pointed at a folder nobody deploys.
describe('where the voice clip is looked for', () => {
  afterEach(() => { vi.unstubAllGlobals(); });

  for (const [page, want] of [
    ['https://cyborg.garden/games/lil-bitz/', 'https://cyborg.garden/games/lil-bitz/audio/lyss-background.mp3'],
    ['https://cryptids.nz/lil-bitz/index.html', 'https://cryptids.nz/lil-bitz/audio/lyss-background.mp3'],
    ['http://127.0.0.1:8050/cart/games/lil-bitz/index.html', 'http://127.0.0.1:8050/cart/games/lil-bitz/audio/lyss-background.mp3'],
  ]) {
    it(`beside ${page}`, async () => {
      const seen = [];
      stubBrowser((url) => { seen.push(url); return Promise.reject(new Error('404')); }, page);
      makeAudio().ambientVoice(0, 0);
      await Promise.resolve(); await Promise.resolve();
      expect(seen).toEqual([want]);
    });
  }

  it('a page with no usable base is just a missing clip, not a crash', async () => {
    stubBrowser(() => Promise.reject(new Error('unreached')), 'not a url');
    const audio = makeAudio();
    expect(() => audio.ambientVoice(0, 0)).not.toThrow();
    await Promise.resolve(); await Promise.resolve();
    expect(audio.voiceReady).toBe(false);
  });
});
