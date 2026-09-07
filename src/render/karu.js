import * as THREE from 'three';
import { faceCamera } from './billboard.js';
import { KARU_DATA as K } from '../systems/karu.js';
import CHARS from '../../public/art/chars/manifest.json' with { type: 'json' };

/**
 * Karu, drawn. A billboard carrying an eye-sign, and the column of light it
 * puts on the return door.
 *
 *   makeKaruMesh(scene)                       -> {update, hide}
 *     .update(karu, camera, nowMs, {door})    karu is systems/karu.js; door is
 *                                             {x, y, z} of the lit return door
 *                                             or null
 *
 * Integration calls `update` every frame. Nothing here decides where Karu is:
 * it reads `karu.pos` and `karu.blinkFrame` and draws them.
 *
 * The glyph is a SIGN for an eye, not a picture of one: a ring with a dark
 * centre and one ink stroke, in the portal's ink, on canvas. No almond lid, no
 * iris colour, no lashes. A literal drawn eye floating on its own is a face
 * fragment, and the design says no faces anywhere in this rung. The blink is
 * the ring closing to a line, stepped over three frames, not lids closing.
 * Lyss's drawing replaces the canvas when it exists; the mesh is the same
 * size and pivot either way.
 *
 * The light column is a tall additive quad, the same trick as the portal's
 * smear: nothing load-bearing may be an effect, so it is drawn, not posted.
 */

const G = K.glyph;
const L = K.light;

/**
 * One frame of the sign. `close` is 0 (open ring) .. 1 (a line).
 * @param {number} close
 */
function drawSign(close) {
  const S = 128;
  const c = document.createElement('canvas');
  c.width = S;
  c.height = S;
  const g = c.getContext('2d');
  const cx = S / 2;
  const cy = S / 2;
  const r = 44;
  // The ring flattens as it closes. At 1 it is a horizontal stroke, which is
  // the whole blink: the sign shuts, it does not grow lids.
  const ry = Math.max(3, r * (1 - close));

  // A faint halo under it, so it reads against dark bush as well as sky.
  const halo = g.createRadialGradient(cx, cy, r * 0.6, cx, cy, r * 1.4);
  halo.addColorStop(0, `rgba(255, 246, 220, ${G.haloAlpha})`);
  halo.addColorStop(1, 'rgba(255, 246, 220, 0)');
  g.fillStyle = halo;
  g.fillRect(0, 0, S, S);

  // The ring, hand-wobbled with two harmonics like the portal rim so it reads
  // as drawn rather than as a circle primitive.
  const path = new Path2D();
  for (let i = 0; i <= 72; i++) {
    const a = (i / 72) * Math.PI * 2;
    const w = 1 + Math.sin(a * 5 + 0.4) * 0.035 + Math.sin(a * 3 - 1.1) * 0.025;
    const x = cx + Math.cos(a) * r * w;
    const y = cy + Math.sin(a) * ry * w;
    if (i === 0) path.moveTo(x, y); else path.lineTo(x, y);
  }
  path.closePath();
  g.strokeStyle = G.ink;
  g.lineWidth = r * G.ringWidth * 2;
  g.lineJoin = 'round';
  g.stroke(path);

  // The dark centre. Fades out with the close so the closed frame is one line.
  if (close < 0.9) {
    g.fillStyle = G.ink;
    g.beginPath();
    g.ellipse(cx, cy, r * 0.34, ry * 0.34, 0, 0, Math.PI * 2);
    g.fill();
  }

  // One ink stroke, tapering, off to the upper right. The single mark that
  // makes it a drawn sign rather than a target reticle.
  g.strokeStyle = G.ink;
  g.lineCap = 'round';
  g.lineWidth = 5;
  g.beginPath();
  g.moveTo(cx + r * 0.95, cy - ry * 0.55);
  g.quadraticCurveTo(cx + r * 1.25, cy - ry * 0.95 - 6, cx + r * 1.4, cy - ry * 1.15 - 12);
  g.stroke();

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/** The column: bright at the foot, gone at the top. */
function drawColumn() {
  const W = 16;
  const H = 256;
  const c = document.createElement('canvas');
  c.width = W;
  c.height = H;
  const g = c.getContext('2d');
  const v = g.createLinearGradient(0, H, 0, 0);
  v.addColorStop(0, L.colour);
  v.addColorStop(0.55, L.colour);
  v.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = v;
  g.fillRect(0, 0, W, H);
  // Soft edges across, so two crossed quads read as a beam and not a plank.
  const h = g.createLinearGradient(0, 0, W, 0);
  h.addColorStop(0, 'rgba(0,0,0,1)');
  h.addColorStop(0.5, 'rgba(0,0,0,0)');
  h.addColorStop(1, 'rgba(0,0,0,1)');
  g.globalCompositeOperation = 'destination-out';
  g.fillStyle = h;
  g.fillRect(0, 0, W, H);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/**
 * @param {THREE.Scene} scene
 */
export function makeKaruMesh(scene) {
  // Lyss's Karu arrived on 2026-08-29, as a photo of her paper cutout: a moth,
  // eye-spots on the wings, feathered antennae, holding something on a
  // thread. So Karu is drawn by her, same as everyone else in the world — an
  // alpha-tested camera-facing quad with the pivot at the feet — and the
  // canvas eye-sign above is kept only as the fallback for a missing texture.
  // The blink is gone with it; a moth does not blink, it hovers.
  const def = CHARS.karu;
  const sign = drawSign(0);
  let tex = sign;
  let aspect = 1;
  if (def) {
    tex = new THREE.TextureLoader().load(def.png);
    tex.magFilter = THREE.LinearFilter;
    tex.minFilter = THREE.LinearMipmapLinearFilter;
    tex.generateMipmaps = true;
    tex.anisotropy = 4;
    tex.colorSpace = THREE.SRGBColorSpace;
    aspect = def.w / def.h;
  }
  const h = def ? def.worldHeight : G.sizeMetres;
  const quad = new THREE.PlaneGeometry(h * aspect, h);
  quad.translate(0, h / 2, 0);
  const eye = new THREE.Mesh(quad, new THREE.MeshBasicMaterial({
    map: tex,
    transparent: !def,
    alphaTest: def ? 0.5 : 0,
    depthWrite: Boolean(def),
    side: THREE.DoubleSide,
    toneMapped: false,
  }));
  eye.frustumCulled = false;
  eye.visible = false;
  scene.add(eye);
  // Where the feet sit relative to karu.pos, which systems/karu.js keeps at
  // hover height. A 2.35m moth hung with its middle at that height floats
  // with its claws just clear of the ground, which is right for a moth.
  const footDrop = h * 0.55;

  const colTex = drawColumn();
  const mkColumn = () => {
    const geo = new THREE.PlaneGeometry(L.widthMetres, L.heightMetres);
    geo.translate(0, L.heightMetres / 2, 0);
    const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({
      map: colTex,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
      opacity: L.alpha,
      toneMapped: false,
    }));
    m.frustumCulled = false;
    m.visible = false;
    scene.add(m);
    return m;
  };
  // Two crossed quads, so the beam has a footprint from every side.
  const columns = [mkColumn(), mkColumn()];
  columns[1].rotation.y = Math.PI / 2;

  function hide() {
    eye.visible = false;
    for (const c of columns) c.visible = false;
  }

  /**
   * @param {ReturnType<import('../systems/karu.js').makeKaru>} karu
   * @param {THREE.Camera} camera
   * @param {number} nowMs
   * @param {{door?: {x: number, y: number, z: number} | null}} [o]
   */
  function update(karu, camera, nowMs, { door = null } = {}) {
    if (!karu.present) { hide(); return; }

    const p = karu.pos;
    eye.visible = true;
    eye.position.set(p.x, p.y - footDrop, p.z);
    faceCamera(eye, camera);

    // The door is lit only while Karu is with you. Slow flicker, so it reads
    // as light and not as a static prop.
    const lit = Boolean(door);
    const flicker = 0.85 + 0.15 * Math.sin((nowMs / 1000) * Math.PI * 2 * L.flickerHz);
    for (const c of columns) {
      c.visible = lit;
      if (!lit) continue;
      c.position.set(door.x, door.y, door.z);
      c.material.opacity = L.alpha * flicker;
    }
  }

  return { update, hide };
}
