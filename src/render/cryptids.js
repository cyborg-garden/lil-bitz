import * as THREE from 'three';
import { faceCamera, makeBlobShadow } from './billboard.js';
import { warmthAt, mermaidShown, kelpiiStanding, CRYPTID_DATA as C } from '../worldgen/cryptids.js';

/**
 * How the three cryptid areas look. Canvas-drawn quads and soft sprites, no
 * shader, no post — the same rule as the portal: nothing load-bearing may be
 * an effect, and nothing here may be a figure.
 *
 *   grotto mermaids   a pale shape UNDER the water surface, only while the
 *                     player is near and still; a rock at the waterline whose
 *                     shadow falls the wrong way. No arm, no limb, no hair.
 *   moana kelpī       a driftwood billboard, lying down from senseRadius in,
 *                     standing only inside standRadius. Driftwood until it
 *                     isn't; never a body.
 *   patupaiarehe      no figure at all: a patch of denser fog on the ridge and
 *                     a cold light between the trees. The fog is what answers.
 *
 * PUBLIC INTERFACE
 *
 *   makeCryptidRender(scene) -> { update, hide, warmth }
 *
 *   update(sites, playerPos, camera, opts) -> Record<siteId, warmth>
 *       sites      from findCryptidSites
 *       playerPos  {x, y, z}
 *       camera     the chase camera, for billboarding
 *       opts       { nowMs, stillSeconds }   stillSeconds = time since the
 *                  player last moved; drives the mermaid shape.
 *       Returns the warmth map (0..1 per site) it drew with, so integration
 *       can drive the shimmer/chime cue (mermaids) and lerp scene.fog toward
 *       C.sites.patupaiarehe.fog (colour, near, far) by warmth.patupaiarehe.
 *       Scene fog is NOT touched here: worlds.js owns scene.fog for the
 *       palette; this module only drops local fog sprites in the patch.
 *
 *   hide()  hides everything (for elsewhere, where there are no cryptids).
 *
 *   warmth  the last warmth map, read-only.
 *
 * Every sprite here is dressing placed at the site by this module; none of it
 * is terrain, so the world hash cannot move. Her drawings replace the canvas
 * textures without touching placement.
 */

/** A soft round blot, alpha from `inner` at the centre to nothing at the edge. */
function blotTexture(inner, mid) {
  const S = 128;
  const c = document.createElement('canvas');
  c.width = S;
  c.height = S;
  const g = c.getContext('2d');
  const rg = g.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S / 2);
  rg.addColorStop(0, inner);
  rg.addColorStop(0.5, mid);
  rg.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = rg;
  g.fillRect(0, 0, S, S);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/**
 * The pale shape. A long soft ellipse, drawn to be read THROUGH water: no
 * outline, no detail, the edges lost. Deliberately not a silhouette of
 * anything — a shape, which is all her caption gives them.
 */
function paleShapeTexture() {
  const W = 256;
  const H = 128;
  const c = document.createElement('canvas');
  c.width = W;
  c.height = H;
  const g = c.getContext('2d');
  g.translate(W / 2, H / 2);
  g.scale(1, 0.42);
  const rg = g.createRadialGradient(0, 0, 0, 0, 0, W / 2);
  rg.addColorStop(0, 'rgba(226, 232, 226, 0.78)');
  rg.addColorStop(0.55, 'rgba(206, 218, 214, 0.42)');
  rg.addColorStop(1, 'rgba(190, 206, 204, 0)');
  g.fillStyle = rg;
  g.beginPath();
  g.arc(0, 0, W / 2, 0, Math.PI * 2);
  g.fill();
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/**
 * A rock at the waterline: a hand-wobbled ink lump. Its shadow is drawn
 * separately and placed on the wrong side — that IS the mermaid sighting, and
 * it is the only thing at the grotto that is always there.
 */
function rockTexture() {
  const S = 128;
  const c = document.createElement('canvas');
  c.width = S;
  c.height = S;
  const g = c.getContext('2d');
  const path = new Path2D();
  for (let i = 0; i <= 40; i++) {
    const a = (i / 40) * Math.PI * 2;
    const r = 46 + Math.sin(a * 3 + 0.4) * 7 + Math.sin(a * 7) * 3;
    const x = S / 2 + Math.cos(a) * r;
    const y = S / 2 + 12 + Math.sin(a) * r * 0.72;
    if (i === 0) path.moveTo(x, y); else path.lineTo(x, y);
  }
  path.closePath();
  g.fillStyle = '#5a5650';
  g.fill(path);
  g.strokeStyle = '#2b2118';
  g.lineWidth = 5;
  g.lineJoin = 'round';
  g.stroke(path);
  // A little wet sheen low on the rock, so it reads as at the waterline.
  g.fillStyle = 'rgba(200, 214, 214, 0.35)';
  g.beginPath();
  g.ellipse(S / 2 - 8, S / 2 + 30, 22, 6, 0, 0, Math.PI * 2);
  g.fill();
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/**
 * Driftwood, two frames: lying, and standing. The standing frame is the SAME
 * drawing turned on end with the grain kept — the point is that it never stops
 * looking like driftwood, it is just driftwood that is upright.
 */
function driftwoodTexture(standing) {
  const S = 192;
  const c = document.createElement('canvas');
  c.width = S;
  c.height = S;
  const g = c.getContext('2d');
  g.translate(S / 2, S / 2);
  if (standing) g.rotate(-Math.PI / 2 + 0.12);
  // A long knotted log: a spline with two bulges, ink outline, pale bleached fill.
  const path = new Path2D();
  path.moveTo(-84, -6);
  path.bezierCurveTo(-60, -22, -20, -10, 8, -16);
  path.bezierCurveTo(40, -24, 70, -12, 86, -4);
  path.bezierCurveTo(78, 10, 44, 14, 12, 12);
  path.bezierCurveTo(-24, 10, -56, 20, -84, 8);
  path.closePath();
  g.fillStyle = '#c9bda4';
  g.fill(path);
  g.strokeStyle = '#2b2118';
  g.lineWidth = 5;
  g.lineJoin = 'round';
  g.stroke(path);
  // Grain lines, so it is wood and not a shape.
  g.strokeStyle = 'rgba(90, 74, 52, 0.55)';
  g.lineWidth = 2;
  for (let i = 0; i < 4; i++) {
    g.beginPath();
    g.moveTo(-70, -4 + i * 5);
    g.bezierCurveTo(-30, -12 + i * 5, 20, 2 + i * 4, 72, -2 + i * 3);
    g.stroke();
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/**
 * @param {THREE.Scene} scene
 */
export function makeCryptidRender(scene) {
  const quad = new THREE.PlaneGeometry(1, 1);

  const mkSprite = (tex, { blending = THREE.NormalBlending, depthWrite = false } = {}) => {
    const mesh = new THREE.Mesh(quad, new THREE.MeshBasicMaterial({
      map: tex,
      transparent: true,
      depthWrite,
      blending,
      toneMapped: false,
      side: THREE.DoubleSide,
    }));
    mesh.frustumCulled = false;
    mesh.visible = false;
    scene.add(mesh);
    return mesh;
  };

  // alphaTest with transparent:false, the same pairing as every billboard in
  // the game: it writes depth, so it sorts against terrain and trees for free.
  const mkCutout = (tex) => {
    const mesh = new THREE.Mesh(quad, new THREE.MeshBasicMaterial({
      map: tex,
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

  // --- grotto mermaids ------------------------------------------------------
  // The shape lies FLAT, just under the water surface, so it is seen through
  // the plane and not standing in it. Depth write off: the water plane and the
  // sea bed are both nearby and a written depth would fight with them.
  const shape = mkSprite(paleShapeTexture());
  shape.rotation.x = -Math.PI / 2;
  // Drawn AFTER the sea. Both are transparent, and three sorts transparent
  // meshes by distance to their centres: the sea plane's centre follows the
  // player, so it is always nearer than the shape and was painted over it at
  // 82% every frame. Three placements moved a shape the frame never showed
  // before the order, not the position, turned out to be the reason.
  shape.renderOrder = 2;
  const rock = mkCutout(rockTexture());
  const rockShadow = makeBlobShadow(1.1);
  rockShadow.visible = false;
  scene.add(rockShadow);

  // --- moana kelpī ----------------------------------------------------------
  const lying = mkCutout(driftwoodTexture(false));
  const standing = mkCutout(driftwoodTexture(true));
  const woodShadow = makeBlobShadow(1.3);
  woodShadow.visible = false;
  scene.add(woodShadow);

  // --- patupaiarehe ---------------------------------------------------------
  // Fog: a handful of big soft sprites scattered around the site on a fixed
  // sunflower spiral (no random source: the patch is the same every session).
  // Cold light: one small, colder sprite that hovers between the trees.
  const fogCol = new THREE.Color(C.sites.patupaiarehe.fog.colour);
  const fogTex = blotTexture(
    `rgba(${Math.round(fogCol.r * 255)}, ${Math.round(fogCol.g * 255)}, ${Math.round(fogCol.b * 255)}, 0.55)`,
    `rgba(${Math.round(fogCol.r * 255)}, ${Math.round(fogCol.g * 255)}, ${Math.round(fogCol.b * 255)}, 0.22)`,
  );
  const FOG_N = 14;
  const fogs = Array.from({ length: FOG_N }, () => mkSprite(fogTex));
  const fogOffsets = Array.from({ length: FOG_N }, (_, i) => {
    const a = i * 2.39996;
    const r = C.cryptidArea.radius * 0.85 * Math.sqrt((i + 0.5) / FOG_N);
    return { dx: Math.cos(a) * r, dz: Math.sin(a) * r, s: 7 + (i % 3) * 2.5, ph: i * 0.7 };
  });
  const coldTex = blotTexture('rgba(214, 236, 255, 0.9)', 'rgba(170, 206, 240, 0.35)');
  const cold = mkSprite(coldTex, { blending: THREE.AdditiveBlending });

  /** @type {Record<string, number>} */
  let warmth = {};
  let holdShape = false;

  function hideAll() {
    shape.visible = false;
    rock.visible = false;
    rockShadow.visible = false;
    lying.visible = false;
    standing.visible = false;
    woodShadow.visible = false;
    for (const f of fogs) f.visible = false;
    cold.visible = false;
  }

  /**
   * @param {import('../worldgen/cryptids.js').Site[]} sites
   * @param {{x: number, y: number, z: number}} playerPos
   * @param {THREE.Camera} camera
   * @param {{nowMs: number, stillSeconds: number, kelpiiDown?: boolean}} opts
   *   `kelpiiDown`: the driftwood has taken a gift and is driftwood again —
   *   lying, whatever the distance — until its grant is collected.
   */
  function update(sites, playerPos, camera, { nowMs = 0, stillSeconds = 0, kelpiiDown = false } = {}) {
    if (!sites || sites.length === 0) { hideAll(); warmth = {}; return warmth; }
    warmth = warmthAt(sites, playerPos.x, playerPos.z);
    const t = nowMs / 1000;

    for (const site of sites) {
      const w = warmth[site.id] ?? 0;

      if (site.id === 'grotto_mermaids') {
        // The rock is always there. Its shadow is on the seaward side, which is
        // the side the sun is not on, and slightly too big. That is the tell.
        rock.visible = true;
        rock.position.set(site.x, site.y, site.z);
        rock.scale.set(2.2, 2.2, 1);
        rock.position.y += 1.1 - 0.2;
        faceCamera(rock, camera);
        rockShadow.visible = true;
        rockShadow.position.set(site.x - 0.9, site.y + 0.03, site.z - 1.6);
        rockShadow.scale.setScalar(1.35);

        const show = !holdShape && mermaidShown({ site, px: playerPos.x, pz: playerPos.z, stillSeconds });
        shape.visible = show;
        if (show) {
          // Seaward of the rock, just under the surface, breathing very slowly.
          // Fades in over the first moments of stillness, so it arrives rather
          // than pops; it goes the instant the player moves.
          const fade = Math.min(1, (stillSeconds - C.sites.grotto_mermaids.stillSeconds) / 1.2 + 0.15);
          shape.material.opacity = 0.55 * fade;
          const drift = Math.sin(t * 0.35) * 0.4;
          // A hair ABOVE the water plane (which sits at -0.06), not on it: on
          // it, the 82% plane covered the shape entirely and the frame showed
          // empty water however still the player stood. Below sea level, so
          // it still reads as in the water and not on it.
          // Over the WATER. The site itself is dry sand (it has to be, to
          // stand at), one to six metres up the beach; a shape at sea level
          // beside the rock is under the sand. So it lies past the waterline,
          // where the ground is below the sea, and off to one side so the
          // rock does not hide it from the only side a player can stand on.
          // Big, because it is seen at a grazing angle: the chase camera
          // looks down the beach at about sixteen degrees, and a flat shape
          // on the water is a sliver of itself. That is right — "only if
          // you're already quiet" is a barely-there thing — but at 3.6m it
          // was ten pixels, and at six it is a pale length you can wonder at.
          // WHERE the water is comes from the site (`site.water`, found by
          // scanning seaward from the site): at a fixed offset from the site
          // the shape on the default seed lay 9cm under the sand while its
          // line played over empty beach. No water found, no shape.
          if (!site.water) { shape.visible = false; continue; }
          shape.position.set(site.water.x + drift, -0.02, site.water.z);
          shape.scale.set(6.0, 3.0, 1);
          shape.rotation.z = 0.5 + Math.sin(t * 0.2) * 0.08;
        }
      } else if (site.id === 'moana_kelpii') {
        // Visible from senseRadius. Lying until standRadius; standing inside
        // it — unless it has taken a gift. "it takes the thing and is
        // driftwood again": standing, it is 4.4m tall and 2.4m from the
        // giver, and the granted mouths opened behind it on seed delta.
        const visible = w > 0;
        const up = visible && !kelpiiDown && kelpiiStanding(site, playerPos.x, playerPos.z);
        lying.visible = visible && !up;
        standing.visible = up;
        woodShadow.visible = visible;
        const mesh = up ? standing : lying;
        if (visible) {
          // Standing, it is taller than a person and wider than the drawing's
          // rotated log suggests: at 2.4 x 3.2 it was a thin stick in the
          // rendered frame at give reach, which is not a thing that is
          // suddenly standing.
          mesh.position.set(site.x, site.y + (up ? 2.2 : 0.55), site.z);
          mesh.scale.set(up ? 3.6 : 3.2, up ? 4.4 : 1.4, 1);
          faceCamera(mesh, camera);
          woodShadow.position.set(site.x, site.y + 0.03, site.z);
          woodShadow.scale.setScalar(up ? 0.7 : 1.4);
        }
      } else if (site.id === 'patupaiarehe') {
        // The fog thickens from senseRadius in. Nothing else is here.
        const on = w > 0.02;
        for (let i = 0; i < fogs.length; i++) {
          const f = fogs[i];
          f.visible = on;
          if (!on) continue;
          const o = fogOffsets[i];
          const bob = Math.sin(t * 0.18 + o.ph) * 0.5;
          f.position.set(site.x + o.dx + bob, site.y + 1.2 + Math.sin(t * 0.11 + o.ph) * 0.3, site.z + o.dz);
          f.scale.set(o.s, o.s * 0.62, 1);
          f.material.opacity = 0.28 + 0.42 * w;
          faceCamera(f, camera);
        }
        cold.visible = on;
        if (on) {
          // A cold light, off-centre so it is between trees and not on the
          // summit, pulsing slowly. Colder than anything else in the palette.
          const pulse = 0.55 + Math.sin(t * 0.9) * 0.25;
          cold.position.set(site.x + 3.5, site.y + 1.9 + Math.sin(t * 0.5) * 0.15, site.z - 2.5);
          cold.scale.setScalar(1.4 + 0.5 * w);
          cold.material.opacity = (0.35 + 0.65 * w) * pulse;
          faceCamera(cold, camera);
        }
      }
    }
    return warmth;
  }

  return {
    update,
    hide: hideAll,
    get warmth() { return { ...warmth }; },
    /**
     * Where the drawn things are this frame, for the harness to project and
     * read a pixel at: the shape's centre and the driftwood's centre (which
     * drawing is up), or null when not drawn.
     */
    get positions() {
      const at = (m) => (m.visible ? { x: m.position.x, y: m.position.y, z: m.position.z } : null);
      return { shape: at(shape), driftwood: at(standing) ?? at(lying), rock: at(rock) };
    },
    /** Debug: draw the frame with the shape held off, so a capture can diff the pixel under it. */
    set holdShape(v) { holdShape = Boolean(v); },
    /** What is drawn this frame, for the harness: state can say a shape is there while the frame does not. */
    get shown() {
      return {
        shape: shape.visible,
        rock: rock.visible,
        lying: lying.visible,
        standing: standing.visible,
        fog: fogs.filter((f) => f.visible).length,
        cold: cold.visible,
      };
    },
  };
}
