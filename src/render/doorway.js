import * as THREE from 'three';
import { faceCamera } from './billboard.js';
import T from '../../data/tuning.json' with { type: 'json' };

/**
 * The arch, and the light Karu puts on the way home.
 *
 * PUBLIC INTERFACE
 *
 *   makeDoorway(scene) → {
 *     update(door, camera, nowMs)
 *       door: {x, y, z, hold?: 0..1, karu?: boolean} | null
 *         Draws the arch standing on the ground at (x, y, z), facing the
 *         camera about Y only. `hold` swells the ink and fills a ground ring
 *         while the player is holding the key. `karu` adds the column of
 *         light — the ONLY far-visible cue there is, and only with Karu.
 *         null hides everything. Call for the doorway at home and for the
 *         return door in elsewhere; it is the same arch.
 *     hide()
 *     mesh   the arch quad, for the harness to project (position is the base)
 *   }
 *
 * The same ragged ink ring as the portal mouth, standing up and person-sized:
 * one texture family, so the arch is legibly the mouth's cousin and the
 * sunset inside it is the sky you will be standing under. It boils on four
 * frames at 12fps like everything drawn in this game. No shader, no glow
 * pass: the column is a gradient on a quad.
 */

const RIM_FRAMES = 4;
const RIM_FPS = 12;
const D = T.worlds.doorway;

/** One frame of the arch. Taller than wide: a doorway, not a hole. */
function drawArch(frame) {
  const S = 256;
  const c = document.createElement('canvas');
  c.width = S;
  c.height = S;
  const g = c.getContext('2d');
  const cx = S / 2;
  const cy = S / 2;

  const path = new Path2D();
  for (let i = 0; i <= 96; i++) {
    const a = (i / 96) * Math.PI * 2;
    const r = 1
      + Math.sin(a * 5 + frame * 1.3) * 0.035
      + Math.sin(a * 11 + frame * 2.1) * 0.02
      + Math.sin(a * 3 - frame * 0.7) * 0.018;
    // 0.78 wide, 1.0 tall: the ring is an upright oval, with the foot of it
    // flattened a little so it reads as standing on the ground.
    const x = cx + Math.cos(a) * 88 * r;
    let y = cy + Math.sin(a) * 112 * r;
    if (y > cy + 100) y = cy + 100 + (y - cy - 100) * 0.35;
    if (i === 0) path.moveTo(x, y); else path.lineTo(x, y);
  }
  path.closePath();

  g.save();
  g.clip(path);
  const sky = g.createLinearGradient(0, cy - 116, 0, cy + 116);
  sky.addColorStop(0.00, '#241443');
  sky.addColorStop(0.42, '#7b3b6a');
  sky.addColorStop(0.72, '#e8763a');
  sky.addColorStop(1.00, '#ffd08a');
  g.fillStyle = sky;
  g.fillRect(0, 0, S, S);
  g.restore();

  g.save();
  g.clip(path);
  g.strokeStyle = 'rgba(255, 196, 120, 0.55)';
  g.lineWidth = 14;
  g.stroke(path);
  g.restore();

  g.strokeStyle = '#2b2118';
  g.lineWidth = 7;
  g.lineJoin = 'round';
  g.stroke(path);

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/** The column: bright at the foot, gone by the top. */
function drawColumn() {
  const c = document.createElement('canvas');
  c.width = 32;
  c.height = 256;
  const g = c.getContext('2d');
  const v = g.createLinearGradient(0, 256, 0, 0);
  v.addColorStop(0.00, 'rgba(255, 236, 190, 0.85)');
  v.addColorStop(0.35, 'rgba(255, 214, 140, 0.40)');
  v.addColorStop(1.00, 'rgba(255, 200, 120, 0)');
  g.fillStyle = v;
  g.fillRect(0, 0, 32, 256);
  // Soft edges, so the column is a shaft and not a plank.
  const h = g.createLinearGradient(0, 0, 32, 0);
  h.addColorStop(0, 'rgba(0,0,0,1)');
  h.addColorStop(0.3, 'rgba(0,0,0,0)');
  h.addColorStop(0.7, 'rgba(0,0,0,0)');
  h.addColorStop(1, 'rgba(0,0,0,1)');
  g.globalCompositeOperation = 'destination-out';
  g.fillStyle = h;
  g.fillRect(0, 0, 32, 256);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function makeDoorway(scene) {
  const rimTex = Array.from({ length: RIM_FRAMES }, (_, i) => drawArch(i));

  // Pivot at the foot, like the character billboards: placing it is "put it
  // at ground height" and nothing else.
  const archGeo = new THREE.PlaneGeometry(1, 1);
  archGeo.translate(0, 0.5, 0);
  const mesh = new THREE.Mesh(archGeo, new THREE.MeshBasicMaterial({
    map: rimTex[0],
    transparent: false,
    alphaTest: 0.5,
    side: THREE.DoubleSide,
    toneMapped: false,
  }));
  mesh.frustumCulled = false;
  mesh.visible = false;
  scene.add(mesh);

  // The hold: a ring on the ground filling toward the arch. Drawn, not a
  // progress bar — the same dust-ring geometry the Epic impact uses.
  const ring = new THREE.Mesh(
    (() => { const g = new THREE.RingGeometry(0.72, 1.0, 40); g.rotateX(-Math.PI / 2); return g; })(),
    new THREE.MeshBasicMaterial({
      color: '#ffd08a', transparent: true, depthWrite: false, side: THREE.DoubleSide, toneMapped: false,
    }),
  );
  ring.frustumCulled = false;
  ring.visible = false;
  scene.add(ring);

  const colGeo = new THREE.PlaneGeometry(1, 1);
  colGeo.translate(0, 0.5, 0);
  const column = new THREE.Mesh(colGeo, new THREE.MeshBasicMaterial({
    map: drawColumn(),
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide,
    toneMapped: false,
  }));
  column.frustumCulled = false;
  column.visible = false;
  scene.add(column);

  function hide() {
    mesh.visible = false;
    ring.visible = false;
    column.visible = false;
  }

  /**
   * @param {{x: number, y: number, z: number, hold?: number, karu?: boolean} | null} door
   * @param {THREE.Camera} camera
   * @param {number} nowMs
   */
  function update(door, camera, nowMs) {
    if (!door) { hide(); return; }
    const frame = Math.floor((nowMs / 1000) * RIM_FPS) % RIM_FRAMES;
    const hold = Math.min(1, Math.max(0, door.hold ?? 0));

    mesh.visible = true;
    mesh.material.map = rimTex[frame];
    mesh.position.set(door.x, door.y, door.z);
    // Swells a little under the hold, so the held key is visibly doing
    // something before the fade starts.
    const h = D.archMetres * (1 + hold * 0.08);
    mesh.scale.set(h * 0.8, h, 1);
    faceCamera(mesh, camera);

    ring.visible = hold > 0.001;
    if (ring.visible) {
      ring.position.set(door.x, door.y + 0.04, door.z);
      ring.scale.setScalar(1.6 - hold * 0.5);
      ring.material.opacity = 0.25 + hold * 0.6;
    }

    column.visible = Boolean(door.karu);
    if (column.visible) {
      // Breathes slowly, on the same 12fps step as the ink so it never reads
      // as a smooth CG effect beside a drawn arch.
      const step = Math.floor((nowMs / 1000) * RIM_FPS);
      const breathe = 1 + 0.06 * Math.sin(step * 0.35);
      column.position.set(door.x, door.y, door.z);
      column.scale.set(2.2 * breathe, 42, 1);
      faceCamera(column, camera);
    }
  }

  return { update, hide, mesh, column };
}
