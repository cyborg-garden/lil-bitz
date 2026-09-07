/**
 * Audio, synthesised in the Web Audio API rather than loaded as files.
 *
 * Placeholder, deliberately: real recorded material lands with Lys's art and
 * the VO. Synthesis now means the game has its three-layer pickup sound today
 * with zero download, and swapping in samples later touches only this file.
 *
 * Three layers on every pickup, per BUILD-PLAN section 6:
 *
 *   impulse  keyed to the item's MATERIAL, not its rarity, which is why two
 *            hundred pickups do not sound identical
 *   body     the kete rustle, pitch-randomised so it never phases
 *   confirm  a kalimba note that CLIMBS a pentatonic across consecutive
 *            pickups and resets after a pause
 *
 * The climb is the best idea in the sound design: it turns clearing a stretch
 * of beach into playing an instrument.
 *
 * Nothing here can be verified headless. Chromium has no audio device, so the
 * agent can confirm the code runs and nothing more. This is human-checked.
 */

const PENTATONIC = [0, 2, 4, 7, 9, 12]; // major pentatonic, six steps
const CHAIN_WINDOW_MS = 4000;
const BASE_HZ = 392; // G4

/** Which impulse a given item makes. Material, never rarity. */
const MATERIAL = {
  shell_chip: 'ceramic', scallop: 'ceramic', cats_eye: 'ceramic', paua_piece: 'ceramic',
  mermaids_purse: 'cloth', dry_kelp: 'cloth', leaf_litter: 'cloth', heavy_feather: 'cloth',
  sea_glass: 'glass', quartz_chip: 'glass', banded_agate: 'glass', humming_geode: 'glass',
  one_note_shell: 'glass', portal_shard: 'glass',
  worn_pebble: 'stone', pounamu: 'stone', resin_bead: 'stone', seeing_stone: 'stone',
  twig: 'wood', pinecone: 'wood',
  can_tab: 'metal', wrong_compass: 'metal', sealed_tin: 'metal',
  scifi_heru: 'metal', chainmail_maro: 'metal',
  elytron: 'cloth', carry_knot: 'cloth',
};

const TONE = {
  ceramic: { hz: 2100, decay: 0.055, type: 'triangle', gain: 0.16 },
  glass: { hz: 3300, decay: 0.09, type: 'sine', gain: 0.14 },
  stone: { hz: 620, decay: 0.045, type: 'square', gain: 0.1 },
  wood: { hz: 900, decay: 0.05, type: 'square', gain: 0.11 },
  metal: { hz: 2700, decay: 0.16, type: 'sine', gain: 0.12 },
  cloth: { hz: 400, decay: 0.04, type: 'sine', gain: 0.09 },
};

/**
 * Lyss singing "background bullshit, background, background", from her own
 * voice memo.
 *
 * 17.5 seconds from 18.0s of `lyss bits .m4a`: two sung phrases with the
 * breath between them. It is the only human sound in the game and everything
 * else here is a synthesised placeholder, so it does the work of telling you a
 * person made this.
 *
 * The first cut of this took 2.6s from 127s, chosen by scoring the memo for
 * sustained pitch. That was a held note in SPEECH — "which is kind of crazy" —
 * and the transcript is what caught it. Pitch finds emphasis; only the words
 * find the song.
 *
 * It plays twice over: once as the title song, on the Start press (the first
 * gesture the browser will let audio through on), and again in the world on
 * the trinket maker, whose caption puts her "at the edge of the ngāhere,
 * whispering into a puoro" — you hear her before you see who it is.
 */
const VOICE_URL = new URL('../../public/audio/lyss-background.mp3', import.meta.url).href;
const VOICE = {
  /** Full volume within this many metres, silent past `far`. */
  near: 6,
  far: 34,
  gain: 0.5,
  /** Title volume. Not attenuated; it is the song. */
  titleGain: 0.62,
  /** Silence between phrases in the world, so she is not on a loop. */
  restMinMs: 24000,
  restMaxMs: 48000,
};

export function makeAudio() {
  /** @type {AudioContext | null} */
  let ctx = null;
  let master = null;
  let muted = false;
  let chainStep = 0;
  let lastPickupAt = -1e9;

  /** @type {AudioBuffer | null} */
  let voiceBuffer = null;
  let voiceRequested = false;
  let voiceGain = null;
  /** @type {AudioBufferSourceNode | null} */
  let voiceSource = null;
  let voiceEndsAtMs = -1e9;
  let voiceNextAtMs = 0;
  let titleSongPlayed = false;
  let titleSongStopped = false;
  /** @type {AudioBufferSourceNode | null} */
  let titleSource = null;
  /** @type {GainNode | null} */
  let titleGainNode = null;
  /** the return door's hum, made once on first use */
  let humOsc = null;
  let humGain = null;

  function ensure() {
    if (ctx) return ctx;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
    master = ctx.createGain();
    master.gain.value = 0.5;
    master.connect(ctx.destination);
    return ctx;
  }

  /** Browsers require a gesture before audio starts. Called on first input. */
  function unlock() {
    const c = ensure();
    if (c && c.state === 'suspended') c.resume().catch(() => {});
  }

  function blip({ hz, decay, type, gain, when = 0, detune = 0 }) {
    const c = ensure();
    if (!c || muted) return;
    const t = c.currentTime + when;
    const osc = c.createOscillator();
    const env = c.createGain();
    osc.type = type;
    osc.frequency.value = hz;
    osc.detune.value = detune;
    env.gain.setValueAtTime(0, t);
    env.gain.linearRampToValueAtTime(gain, t + 0.004);
    env.gain.exponentialRampToValueAtTime(0.0001, t + decay);
    osc.connect(env);
    env.connect(master);
    osc.start(t);
    osc.stop(t + decay + 0.02);
  }

  /** Filtered noise burst: the kete rustle. */
  function rustle(when = 0) {
    const c = ensure();
    if (!c || muted) return;
    const t = c.currentTime + when;
    const len = Math.floor(c.sampleRate * 0.14);
    const buf = c.createBuffer(1, len, c.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) {
      d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.4);
    }
    const src = c.createBufferSource();
    src.buffer = buf;
    // Pitch-randomised so the same sample never phases against itself.
    src.playbackRate.value = 0.92 + Math.random() * 0.16;
    const bp = c.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.value = 1500;
    bp.Q.value = 0.8;
    const g = c.createGain();
    g.gain.value = 0.32;
    src.connect(bp); bp.connect(g); g.connect(master);
    src.start(t);
  }

  /** Fetch and decode her clip once, the first time anyone gets near her. */
  function ensureVoice() {
    if (voiceRequested) return;
    const c = ensure();
    if (!c) return;
    voiceRequested = true;
    voiceGain = c.createGain();
    voiceGain.gain.value = 0;
    voiceGain.connect(master);
    fetch(VOICE_URL)
      .then((r) => r.arrayBuffer())
      .then((b) => c.decodeAudioData(b))
      .then((buf) => { voiceBuffer = buf; })
      .catch(() => { /* no voice; the game is otherwise unaffected */ });
  }

  return {
    unlock,
    get muted() { return muted; },
    setMuted(v) { muted = v; },

    /**
     * Her singing, heard from `distance` metres away.
     *
     * Called every frame; it decides for itself whether to start a phrase. The
     * gain is set continuously so walking toward her swells it and walking away
     * takes it back, and the long random rest is what stops a 2.6-second clip
     * turning into a loop you notice.
     *
     * @param {number} distance metres to the singer
     * @param {number} nowMs
     */
    ambientVoice(distance, nowMs) {
      if (muted || distance > VOICE.far) {
        if (voiceGain) voiceGain.gain.value = 0;
        return;
      }
      ensureVoice();
      if (!voiceBuffer || !voiceGain) return;

      const falloff = 1 - Math.min(1, Math.max(0, (distance - VOICE.near) / (VOICE.far - VOICE.near)));
      // Squared, so she fades in over the last stretch rather than being
      // audible at a flat murmur across the whole clearing.
      voiceGain.gain.value = VOICE.gain * falloff * falloff;

      const c = ensure();
      if (!c || c.state !== 'running') return;
      if (nowMs < voiceEndsAtMs || nowMs < voiceNextAtMs) return;

      voiceSource = c.createBufferSource();
      voiceSource.buffer = voiceBuffer;
      // Played as recorded. This is a real person singing; pitch-shifting her
      // for "variety" detunes her, and the long rest between phrases is what
      // stops a short clip from reading as a loop.
      voiceSource.connect(voiceGain);
      voiceSource.start();
      const durMs = voiceBuffer.duration * 1000;
      voiceEndsAtMs = nowMs + durMs;
      voiceNextAtMs = voiceEndsAtMs
        + VOICE.restMinMs + Math.random() * (VOICE.restMaxMs - VOICE.restMinMs);
    },

    /**
     * The title song. Plays her clip once, full, at title volume, as soon as
     * it has decoded. Called on the Start press, which is the first gesture the
     * browser allows audio on. Harmless if called before decode finishes: it
     * waits for the buffer rather than dropping the phrase.
     */
    titleSong(nowMs) {
      unlock();
      ensureVoice();
      const c = ensure();
      if (!c || muted) return;
      const play = () => {
        if (!voiceBuffer) { setTimeout(play, 120); return; }
        // The player can start the game before the clip has decoded. Then the
        // song must not begin at all, or it starts under the beach and loops.
        if (titleSongStopped) return;
        // Not now: the decode wait means "now" may be a second stale, so read
        // the game clock again through the getter the caller handed over.
        const now = typeof nowMs === 'function' ? nowMs() : nowMs;
        const src = c.createBufferSource();
        src.buffer = voiceBuffer;
        // Loops for as long as the title is up. Juniper's call: it is the
        // title music, not a sting. titleSongStop() ends it when play starts,
        // and from then on she is only heard in the world, on herself.
        src.loop = true;
        const g = c.createGain();
        g.gain.value = VOICE.titleGain;
        src.connect(g);
        g.connect(master);
        src.start();
        titleSource = src;
        titleGainNode = g;
        // Hold the world's ambient copy back until the song has finished, so
        // walking straight to her does not stack two of her over each other.
        voiceEndsAtMs = Math.max(voiceEndsAtMs, now + voiceBuffer.duration * 1000);
        voiceNextAtMs = Math.max(voiceNextAtMs, voiceEndsAtMs + VOICE.restMinMs);
        titleSongPlayed = true;
      };
      play();
    },

    /** The title is coming down: fade her out over half a second and stop. */
    titleSongStop() {
      titleSongStopped = true;
      const c = ctx;
      if (!c || !titleSource || !titleGainNode) return;
      const t = c.currentTime;
      titleGainNode.gain.cancelScheduledValues(t);
      titleGainNode.gain.setValueAtTime(titleGainNode.gain.value, t);
      titleGainNode.gain.linearRampToValueAtTime(0, t + 0.5);
      try { titleSource.stop(t + 0.55); } catch { /* already stopped */ }
      titleSource = null;
      titleGainNode = null;
    },

    /** Testing hooks. */
    get voiceReady() { return Boolean(voiceBuffer); },
    get titleSongPlayed() { return titleSongPlayed; },

    /**
     * @param {string} itemId
     * @param {number} tier
     * @param {number} nowMs
     */
    pickup(itemId, tier, nowMs) {
      const c = ensure();
      if (!c || muted) return;

      // Layer 1: material impulse.
      const mat = MATERIAL[itemId] ?? 'stone';
      blip({ ...TONE[mat], detune: (Math.random() - 0.5) * 40 });

      // Layer 2: body.
      rustle(0.012);

      // Layer 3: the climb. Resets after a pause, capped at six notes.
      if (nowMs - lastPickupAt > CHAIN_WINDOW_MS) chainStep = 0;
      else chainStep = Math.min(chainStep + 1, PENTATONIC.length - 1);
      lastPickupAt = nowMs;

      const semis = PENTATONIC[chainStep] + (tier >= 4 ? 7 : 0);
      blip({
        hz: BASE_HZ * Math.pow(2, semis / 12),
        decay: 0.5,
        type: 'sine',
        gain: 0.1,
        when: 0.06,
      });
    },

    /**
     * Handing something over. Deliberately NOT the pickup sound reversed —
     * giving is not un-collecting. A soft descending pair, warmer the better
     * the gift, and it does not touch the pentatonic climb, so a conversation
     * never resets the beach-clearing instrument.
     * @param {number} tier
     */
    give(tier) {
      const c = ensure();
      if (!c || muted) return;
      const root = BASE_HZ * Math.pow(2, (tier >= 4 ? 5 : 0) / 12);
      blip({ hz: root, decay: 0.32, type: 'sine', gain: 0.1 });
      blip({ hz: root * 0.75, decay: 0.55, type: 'sine', gain: 0.09, when: 0.11 });
      rustle(0.02);
    },

    /**
     * The tell. Ambient ducks 6 dB over 400ms and a low resonant tone fades in
     * under it. Nothing is on screen yet: this and the leaning foliage are the
     * only reason the player turns to look.
     * @param {number} seconds how long the tell lasts before the pinhole
     */
    epicTell(seconds) {
      const c = ensure();
      if (!c || muted || seconds <= 0) return;
      const t = c.currentTime;
      // -6 dB is a factor of about 0.5.
      master.gain.cancelScheduledValues(t);
      master.gain.setValueAtTime(master.gain.value, t);
      master.gain.linearRampToValueAtTime(0.25, t + 0.4);

      const osc = c.createOscillator();
      const env = c.createGain();
      osc.type = 'sine';
      osc.frequency.value = 110;
      env.gain.setValueAtTime(0.0001, t);
      env.gain.exponentialRampToValueAtTime(0.16, t + seconds);
      env.gain.exponentialRampToValueAtTime(0.0001, t + seconds + 0.35);
      osc.connect(env);
      env.connect(master);
      osc.start(t);
      osc.stop(t + seconds + 0.4);
    },

    /**
     * The return door's hum. The tell's tone — same 110Hz sine — held rather
     * than swelled, because the door is a place and not an event: it hums for
     * as long as you are near it, and it is the only sound elsewhere makes
     * about the way home.
     *
     * Called every frame with a gain of 0..1; 0 is silence and costs nothing
     * until the first non-zero, when the oscillator is made once and kept.
     * @param {number} gain
     */
    doorHum(gain) {
      if (gain <= 0.0001 && !humGain) return;
      const c = ensure();
      if (!c) return;
      if (!humGain) {
        humOsc = c.createOscillator();
        humGain = c.createGain();
        humOsc.type = 'sine';
        humOsc.frequency.value = 110;
        humGain.gain.value = 0;
        humOsc.connect(humGain);
        humGain.connect(master);
        humOsc.start();
      }
      const target = muted ? 0 : Math.min(1, Math.max(0, gain)) * 0.16;
      humGain.gain.setTargetAtTime(target, c.currentTime, 0.12);
    },

    /**
     * Impact, plus the stand-in for the recorded VO.
     *
     * The real thing fires 80ms BEFORE impact, because recorded voice has a
     * soft attack and triggering on the frame makes it feel late. There is no
     * recording yet, so the caller fires this on the frame and the synthesised
     * stinger — which has a hard attack — is correct as-is. When Lyss's takes
     * land, measure each one's onset and pre-fire by exactly that.
     */
    epicImpact() {
      const c = ensure();
      if (!c || muted) return;
      const t = c.currentTime;
      master.gain.cancelScheduledValues(t);
      master.gain.setValueAtTime(master.gain.value, t);
      master.gain.linearRampToValueAtTime(0.5, t + 0.9);

      blip({ hz: 74, decay: 0.42, type: 'sine', gain: 0.28 });
      rustle(0);
      blip({ hz: BASE_HZ * 2, decay: 0.7, type: 'triangle', gain: 0.12, when: 0.02 });
      blip({ hz: BASE_HZ * 3, decay: 0.9, type: 'sine', gain: 0.08, when: 0.06 });
    },

    /** A refused item makes no sound at all. Silence is the feedback. */
    get chainStep() { return chainStep; },
  };
}
