import * as THREE from 'three';
import { buildSpeciesGeometries, SPECIES_NAMES } from './treeGeometry.js';

/**
 * Scenery rendering: one InstancedMesh per kind, so the whole forest is a
 * handful of draw calls no matter how many trees are on screen.
 *
 * Each tree species is a single merged geometry with its colours baked into
 * vertices, which is what lets a nīkau have a pale trunk and dark fronds, and a
 * pōhutukawa have red flowers, without a second material or a second draw call.
 * The material is shared across all of them.
 */

const MAX_TREE = 900;
const MAX = { scrub: 900, rock: 700, driftwood: 300 };

export function makeSceneryMesh(scene) {
  // One shared material. Vertex colours carry everything, so a species is
  // distinguished by its geometry alone.
  const foliageMat = new THREE.MeshLambertMaterial({
    vertexColors: true,
    flatShading: true,
    // Fronds are flat ribbons one triangle thick. Front-face only meant every
    // crown lost the half of itself that happened to face away from the
    // camera, so a nīkau seen from the wrong side was a bare pole.
    side: THREE.DoubleSide,
  });

  const speciesGeo = buildSpeciesGeometries();
  /** @type {Map<string, THREE.InstancedMesh>} */
  const trees = new Map();
  for (const name of SPECIES_NAMES) {
    const mesh = new THREE.InstancedMesh(speciesGeo[name], foliageMat, MAX_TREE);
    mesh.count = 0;
    mesh.frustumCulled = false;
    mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    scene.add(mesh);
    trees.set(name, mesh);
  }

  /** @type {Map<string, THREE.InstancedMesh>} */
  const groups = new Map();

  const scrubGeo = new THREE.IcosahedronGeometry(1, 0);
  scrubGeo.scale(1, 0.72, 1);
  scrubGeo.translate(0, 0.6, 0);
  const rockGeo = new THREE.DodecahedronGeometry(1, 0);
  rockGeo.scale(1, 0.62, 1);
  rockGeo.translate(0, 0.3, 0);
  const woodGeo = new THREE.CylinderGeometry(0.16, 0.22, 2.4, 5);
  woodGeo.rotateZ(Math.PI / 2);
  woodGeo.translate(0, 0.2, 0);

  const mk = (geo, colour, max) => {
    const mesh = new THREE.InstancedMesh(
      geo,
      new THREE.MeshLambertMaterial({ color: new THREE.Color(colour), flatShading: true }),
      max,
    );
    mesh.count = 0;
    mesh.frustumCulled = false;
    mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    scene.add(mesh);
    return mesh;
  };

  groups.set('scrub', mk(scrubGeo, '#6f8451', MAX.scrub));
  groups.set('rock', mk(rockGeo, '#9a9184', MAX.rock));
  groups.set('driftwood', mk(woodGeo, '#b0a189', MAX.driftwood));

  const m = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  const eul = new THREE.Euler();
  const v = new THREE.Vector3();
  const s = new THREE.Vector3();
  const qBend = new THREE.Quaternion();
  const axis = new THREE.Vector3();

  /**
   * @param {import('../worldgen/scenery.js').SceneryItem[]} items
   * @param {{x: number, z: number}} cam
   * @param {{x: number, z: number}} player
   * @param {{x: number, z: number, radius: number, radians: number} | null} [bend]
   *
   * Scenery within `CAM_CLEAR` of the camera is dropped. A tree standing where
   * the lens is fills the entire frame with a wall of trunk and hides the
   * player completely, which is what the first version did. Dropping rather
   * than fading is fine here because the camera is only ever 9m behind the
   * player and anything that close is off the edge of the frame anyway.
   *
   * Scenery within `BODY_CLEAR` of the player is dropped too, so the player is
   * never standing inside a trunk.
   *
   * `bend` is the Epic Find tell. Before anything is on screen, every tree and
   * shrub inside the radius leans toward the site. That is the whole trick: the
   * player turns to look because the WORLD pointed, not because a UI arrow did.
   *
   * The lean is a quaternion PREmultiplied onto the yaw, not an Euler tilt.
   * Baking the tilt into the same Euler as the yaw makes the lean direction
   * rotate with each tree's random facing, so half the forest would lean away.
   */
  const CAM_CLEAR = 4.2;
  const BODY_CLEAR = 1.1;

  function rebuild(items, cam, player, bend = null) {
    const counts = new Map([...groups.keys()].map((k) => [k, 0]));
    const treeCounts = new Map(SPECIES_NAMES.map((k) => [k, 0]));

    for (const it of items) {
      const isTree = it.kind === 'tree';
      const mesh = isTree
        ? trees.get(it.species) ?? trees.get('manuka')
        : groups.get(it.kind);
      if (!mesh) continue;

      if (isTree || it.kind === 'scrub') {
        // Clearance scales with the tree. A flat 4.2m was tuned when every
        // tree was the same cone; a 7m pōhutukawa spreads about 3.5m and one
        // standing 5m from the lens filled the entire frame with dark green.
        const clear = CAM_CLEAR + (isTree ? it.scale * 0.42 : 0);
        if (Math.hypot(it.x - cam.x, it.z - cam.z) < clear) continue;
        if (Math.hypot(it.x - player.x, it.z - player.z) < BODY_CLEAR) continue;
      }

      const key = isTree ? (trees.has(it.species) ? it.species : 'manuka') : it.kind;
      const counter = isTree ? treeCounts : counts;
      const i = counter.get(key);
      if (i >= (isTree ? MAX_TREE : MAX[it.kind])) continue;

      eul.set(0, it.rot, 0);
      q.setFromEuler(eul);

      if (bend && (isTree || it.kind === 'scrub')) {
        const dx = bend.x - it.x;
        const dz = bend.z - it.z;
        const d = Math.hypot(dx, dz);
        if (d > 0.001 && d < bend.radius) {
          // Falls off with distance, so the lean has a visible centre.
          const strength = bend.radians * (1 - d / bend.radius);
          // Leaning TOWARD unit (dx, dz) is a rotation about (dz, 0, -dx).
          axis.set(dz / d, 0, -dx / d);
          qBend.setFromAxisAngle(axis, strength);
          q.premultiply(qBend);
        }
      }

      v.set(it.x, it.y, it.z);

      if (isTree) {
        // Species geometry is authored one metre tall with its pivot on the
        // ground, so scale IS the tree's height in metres and no species needs
        // special handling here.
        s.setScalar(it.scale);
      } else {
        s.setScalar(it.scale);
      }

      m.compose(v, q, s);
      mesh.setMatrixAt(i, m);
      counter.set(key, i + 1);
    }

    for (const [kind, mesh] of groups) {
      mesh.count = counts.get(kind);
      mesh.instanceMatrix.needsUpdate = true;
    }
    for (const [name, mesh] of trees) {
      mesh.count = treeCounts.get(name);
      mesh.instanceMatrix.needsUpdate = true;
    }
  }

  // `trees` and `groups` are exposed so systems/worlds.js applyPalette can tint
  // the materials per world; nothing else reads them.
  return { rebuild, trees, groups };
}
