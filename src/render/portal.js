import * as THREE from 'three';
import { faceCamera } from './billboard.js';
import { tierMeta } from '../worldgen/chunk.js';
import { EPIC_SEQUENCE_TUNING as E } from '../systems/epicSequence.js';

/**
 * The Epic Find portal, and everything that falls out of it.
 *
 * The single most important line in BUILD-PLAN section 6 about this: the inside
 * of the portal is NOT A SHADER. It is a flat cutout of a different sky — warm
 * sunset with drawn stars, the opposite palette to the beach — because a shader
 * would be the one thing on screen that is not drawn, and it would give the
 * whole trick away.
 *
 * The rim boils on four hand-jittered frames at 12fps. Everything else in this
 * file is a canvas texture on a quad for the same reason: the sequence has to
 * survive with zero post-processing, so nothing load-bearing may be an effect.
 */

const RIM_FRAMES = 4;
const RIM_FPS = 12;

/** One frame of the mouth: sunset cutout inside, ragged ink rim around it. */
function drawMouth(frame) {
  const S = 256;
  const c = document.createElement('canvas');
  c.width = S;
  c.height = S;
  const g = c.getContext('2d');
  const cx = S / 2;
  const cy = S / 2;

  // A ragged, hand-wobbled circle. Two harmonics so it reads as drawn rather
  // than as a noise function, and the frame index shifts the phase so it boils.
  const path = new Path2D();
  for (let i = 0; i <= 96; i++) {
    const a = (i / 96) * Math.PI * 2;
    const r = 104
      + Math.sin(a * 5 + frame * 1.3) * 4.0
      + Math.sin(a * 11 + frame * 2.1) * 2.4
      + Math.sin(a * 3 - frame * 0.7) * 2.0;
    const x = cx + Math.cos(a) * r;
    const y = cy + Math.sin(a) * r;
    if (i === 0) path.moveTo(x, y); else path.lineTo(x, y);
  }
  path.closePath();

  g.save();
  g.clip(path);

  // The other sky. Deliberately the opposite palette to the beach's pale sand.
  const sky = g.createLinearGradient(0, cy - 110, 0, cy + 110);
  sky.addColorStop(0.00, '#241443');
  sky.addColorStop(0.42, '#7b3b6a');
  sky.addColorStop(0.72, '#e8763a');
  sky.addColorStop(1.00, '#ffd08a');
  g.fillStyle = sky;
  g.fillRect(0, 0, S, S);

  // Drawn stars, not points: four-armed, in the upper half only.
  g.fillStyle = 'rgba(255, 246, 220, 0.95)';
  for (let i = 0; i < 34; i++) {
    // Sunflower spacing: even coverage of the disc without a random source, so
    // the same frame is drawn the same way every session.
    const a = i * 2.39996;
    const rr = 96 * Math.sqrt((i + 0.5) / 34);
    const x = cx + Math.cos(a) * rr;
    // Squeezed into the upper part of the mouth. The bottom is the sunset.
    const y = cy + Math.sin(a) * rr * 0.62 - 30;
    const s = 1.1 + ((i * 13) % 5) * 0.4;
    g.beginPath();
    g.moveTo(x, y - s * 2.2);
    g.lineTo(x + s * 0.6, y - s * 0.6);
    g.lineTo(x + s * 2.2, y);
    g.lineTo(x + s * 0.6, y + s * 0.6);
    g.lineTo(x, y + s * 2.2);
    g.lineTo(x - s * 0.6, y + s * 0.6);
    g.lineTo(x - s * 2.2, y);
    g.lineTo(x - s * 0.6, y - s * 0.6);
    g.closePath();
    g.fill();
  }
  g.restore();

  // Warm bleed just inside the rim, then the ink line on top of it.
  g.save();
  g.clip(path);
  g.strokeStyle = 'rgba(255, 196, 120, 0.55)';
  g.lineWidth = 16;
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

/** A soft round blot, used for the ink smear and the impact burst. */
function drawBlot(inner, outer) {
  const S = 64;
  const c = document.createElement('canvas');
  c.width = S;
  c.height = S;
  const g = c.getContext('2d');
  const rg = g.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S / 2);
  rg.addColorStop(0, inner);
  rg.addColorStop(0.55, outer);
  rg.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = rg;
  g.fillRect(0, 0, S, S);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/** A drawn four-point sparkle. Four points, never a soft glow blob. */
function drawSparkle() {
  const S = 64;
  const c = document.createElement('canvas');
  c.width = S;
  c.height = S;
  const g = c.getContext('2d');
  const m = S / 2;
  g.fillStyle = '#fff6dc';
  g.beginPath();
  g.moveTo(m, 2);
  g.quadraticCurveTo(m + 4, m - 4, S - 2, m);
  g.quadraticCurveTo(m + 4, m + 4, m, S - 2);
  g.quadraticCurveTo(m - 4, m + 4, 2, m);
  g.quadraticCurveTo(m - 4, m - 4, m, 2);
  g.fill();
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function makePortal(scene) {
  const rimTex = Array.from({ length: RIM_FRAMES }, (_, i) => drawMouth(i));
  const smearTex = drawBlot('rgba(255,220,150,0.9)', 'rgba(210,140,70,0.35)');
  const burstTex = drawBlot('rgba(255,255,255,1)', 'rgba(255,240,210,0.5)');
  const sparkTex = drawSparkle();

  const quad = new THREE.PlaneGeometry(1, 1);

  const mkMouth = () => {
    // alphaTest with transparent:false, the same pairing as the character
    // billboards: it still writes depth, so the mouth sorts against the terrain
    // and the trees for free instead of needing a per-frame sort.
    const mesh = new THREE.Mesh(quad, new THREE.MeshBasicMaterial({
      map: rimTex[0],
      transparent: false,
      alphaTest: 0.5,
      side: THREE.DoubleSide,
      toneMapped: false,
    }));
    mesh.frustumCulled = false;
    mesh.visible = false;
    scene.add(mesh);
    return mesh;
  };

  const mouth = mkMouth();
  const mouth2 = mkMouth();

  // The delivered object, drawn to match the collectible it is about to become.
  const objMesh = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1, 1),
    new THREE.MeshLambertMaterial({ flatShading: true }),
  );
  objMesh.frustumCulled = false;
  objMesh.visible = false;
  scene.add(objMesh);

  const mkSprite = (tex, blend = THREE.NormalBlending) => {
    const mesh = new THREE.Mesh(quad, new THREE.MeshBasicMaterial({
      map: tex,
      transparent: true,
      depthWrite: false,
      blending: blend,
      toneMapped: false,
    }));
    mesh.frustumCulled = false;
    mesh.visible = false;
    scene.add(mesh);
    return mesh;
  };

  const smears = Array.from({ length: E.smearSegments }, () => mkSprite(smearTex, THREE.AdditiveBlending));
  const sparks = Array.from({ length: 14 }, () => mkSprite(sparkTex, THREE.AdditiveBlending));
  const burst = mkSprite(burstTex, THREE.AdditiveBlending);

  // The dust ring: on the ground, expanding, drawn not simulated.
  const dust = new THREE.Mesh(
    (() => { const g = new THREE.RingGeometry(0.74, 1.0, 40); g.rotateX(-Math.PI / 2); return g; })(),
    new THREE.MeshBasicMaterial({
      color: '#e8dcc0', transparent: true, depthWrite: false, side: THREE.DoubleSide, toneMapped: false,
    }),
  );
  dust.frustumCulled = false;
  dust.visible = false;
  scene.add(dust);

  // Flecks of sand or leaf, thrown up in a cone. One instanced mesh.
  // 0.13, not 0.07: the site is 20m out, and at that range the smaller flecks
  // were sub-pixel and the impact read as nothing having happened.
  const flecks = new THREE.InstancedMesh(
    new THREE.TetrahedronGeometry(0.13, 0),
    new THREE.MeshBasicMaterial({ color: '#cbbb96', toneMapped: false }),
    E.fleckCount,
  );
  flecks.count = 0;
  flecks.frustumCulled = false;
  flecks.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  scene.add(flecks);

  /** @type {{x: number, y: number, z: number}[]} trailing positions for the smear */
  let trail = [];
  /** @type {{a: number, e: number, sp: number}[]} spark directions, fixed at the burp */
  let sparkDirs = null;
  /** @type {{vx: number, vy: number, vz: number}[]} */
  let fleckVel = null;
  const m4 = new THREE.Matrix4();
  const vv = new THREE.Vector3();
  const qq = new THREE.Quaternion();
  const ss = new THREE.Vector3();

  function hideAll() {
    mouth.visible = false;
    mouth2.visible = false;
    objMesh.visible = false;
    burst.visible = false;
    dust.visible = false;
    flecks.count = 0;
    for (const s of smears) s.visible = false;
    for (const s of sparks) s.visible = false;
    trail = [];
    sparkDirs = null;
    fleckVel = null;
  }

  /**
   * @param {ReturnType<import('../systems/epicSequence.js').makeEpicSequence>} seq
   * @param {THREE.Camera} camera
   * @param {number} nowMs
   */
  function update(seq, camera, nowMs) {
    if (!seq.active) { hideAll(); return; }

    const meta = tierMeta(seq.tier) ?? tierMeta(5);
    const ap = seq.aperture();
    const p = seq.portal;

    // --- the mouth ---------------------------------------------------------
    const frame = Math.floor((nowMs / 1000) * RIM_FPS) % RIM_FRAMES;
    const size = E.mouthMetres * ap.scale;
    const showMouth = p && ap.scale > 0.001;
    mouth.visible = showMouth;
    if (showMouth) {
      mouth.material.map = rimTex[frame];
      mouth.position.set(p.x, p.y, p.z);
      mouth.scale.set(size * ap.sx, size * ap.sy, 1);
      faceCamera(mouth, camera);
    }

    const p2 = seq.portal2;
    mouth2.visible = Boolean(p2) && showMouth;
    if (p2 && showMouth) {
      mouth2.material.map = rimTex[(frame + 2) % RIM_FRAMES];
      mouth2.position.set(p2.x, p2.y, p2.z);
      mouth2.scale.set(size * 0.72 * ap.sx, size * 0.72 * ap.sy, 1);
      faceCamera(mouth2, camera);
    }

    // --- the object --------------------------------------------------------
    const o = seq.object();
    objMesh.visible = Boolean(o);
    if (o) {
      objMesh.material.color.set(meta.colour);
      objMesh.material.emissive.set(meta.colour);
      objMesh.material.emissiveIntensity = 0.42;
      objMesh.position.set(o.x, o.y + meta.scale, o.z);
      objMesh.rotation.set(o.spin * 0.6, o.spin, o.spin * 0.3);
      objMesh.scale.setScalar(meta.scale * o.scale);

      if (!o.landed) {
        trail.unshift({ x: o.x, y: o.y + meta.scale, z: o.z });
        trail.length = Math.min(trail.length, E.smearSegments + 1);
      }
    }

    // --- the ink smear behind it -------------------------------------------
    // trail[0] is this frame's position, which is where the object already is.
    // Drawing a smear there put an additive blot on top of the object and
    // washed it out, so the tail starts one frame back.
    for (let i = 0; i < smears.length; i++) {
      const t = trail[i + 1];
      const show = Boolean(t) && Boolean(o) && !o.landed;
      smears[i].visible = show;
      if (!show) continue;
      const f = 1 - i / smears.length;
      smears[i].position.set(t.x, t.y, t.z);
      smears[i].scale.setScalar(meta.scale * 1.5 * f);
      smears[i].material.opacity = 0.42 * f * f;
      faceCamera(smears[i], camera);
    }

    // --- the burp's sparkles -----------------------------------------------
    const tl = seq._timeline;
    const burpAge = tl ? seq.t - tl.irisEnd : -1;
    const sparkLife = 0.55;
    if (tl && burpAge >= 0 && burpAge < sparkLife) {
      if (!sparkDirs) {
        sparkDirs = sparks.map((_, i) => ({
          a: (i / sparks.length) * Math.PI * 2 + (i % 3) * 0.21,
          e: -0.3 + (i % 5) * 0.16,
          sp: 2.4 + (i % 4) * 0.7,
        }));
      }
      const n = 10 + (sparks.length - 10);
      for (let i = 0; i < sparks.length; i++) {
        const show = i < n;
        sparks[i].visible = show;
        if (!show) continue;
        const d = sparkDirs[i];
        const r = d.sp * burpAge;
        sparks[i].position.set(
          p.x + Math.cos(d.a) * r,
          p.y + d.e * r,
          p.z + Math.sin(d.a) * r,
        );
        const k = 1 - burpAge / sparkLife;
        sparks[i].scale.setScalar(0.45 * k + 0.12);
        sparks[i].material.opacity = k;
        faceCamera(sparks[i], camera);
      }
    } else {
      for (const s of sparks) s.visible = false;
      if (burpAge >= sparkLife) sparkDirs = null;
    }

    // --- impact ------------------------------------------------------------
    const si = seq.sinceImpact();
    const site = seq.site;

    // One white radial burst, three frames at 24fps and then gone.
    const burstShown = si >= 0 && si < 3 / 24;
    burst.visible = burstShown;
    if (burstShown) {
      burst.position.set(site.x, site.y + 0.5, site.z);
      burst.scale.setScalar(3.0);
      burst.material.opacity = 1 - si / (3 / 24);
      faceCamera(burst, camera);
    }

    const dustLife = E.dustMs / 1000;
    const dustShown = si >= 0 && si < dustLife;
    dust.visible = dustShown;
    if (dustShown) {
      const u = si / dustLife;
      dust.position.set(site.x, site.y + 0.04, site.z);
      dust.scale.setScalar(0.05 + u * E.dustRadius);
      dust.material.opacity = 0.8 * (1 - u);
    }

    const fleckLife = 0.75;
    if (si >= 0 && si < fleckLife) {
      if (!fleckVel) {
        fleckVel = Array.from({ length: E.fleckCount }, (_, i) => {
          const a = (i / E.fleckCount) * Math.PI * 2 + (i % 7) * 0.11;
          const sp = 1.4 + (i % 5) * 0.42;
          return { vx: Math.cos(a) * sp, vy: 3.0 + (i % 4) * 0.65, vz: Math.sin(a) * sp };
        });
      }
      flecks.count = E.fleckCount;
      for (let i = 0; i < E.fleckCount; i++) {
        const v = fleckVel[i];
        vv.set(
          site.x + v.vx * si,
          site.y + v.vy * si - 0.5 * 9.8 * si * si,
          site.z + v.vz * si,
        );
        qq.setFromAxisAngle(new THREE.Vector3(0, 1, 0), si * 9 + i);
        ss.setScalar(1 - si / fleckLife);
        m4.compose(vv, qq, ss);
        flecks.setMatrixAt(i, m4);
      }
      flecks.instanceMatrix.needsUpdate = true;
    } else {
      flecks.count = 0;
      if (si >= fleckLife) fleckVel = null;
    }
  }

  return { update, hide: hideAll };
}
