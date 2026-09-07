import * as THREE from 'three';
import { tierMeta } from '../worldgen/chunk.js';

/**
 * Collectibles, streamed by chunk and drawn as one InstancedMesh per tier.
 *
 * Placeholder geometry, deliberately. These are stand-ins for Lys's cutouts and
 * become alpha-tested billboard quads in milestone 3. What matters now is that
 * the streaming, the instancing and the pickup maths are right, because those
 * do not change when the art arrives.
 */

const MAX_PER_TIER = 900;

export function makeProps(scene) {
  // Tier 6 is never scattered — the Epic sequence delivers it and nothing else
  // can — but it still has to have somewhere to be drawn once it exists.
  const tiers = [1, 2, 3, 4, 5, 6];
  /** @type {Map<number, THREE.InstancedMesh>} */
  const meshes = new Map();

  for (const t of tiers) {
    const meta = tierMeta(t);
    // Higher tiers get more facets, so rarity reads at a glance even in
    // placeholder form.
    const geo = t >= 4
      ? new THREE.IcosahedronGeometry(1, 1)
      : t === 3
        ? new THREE.OctahedronGeometry(1, 0)
        : new THREE.TetrahedronGeometry(1, 0);

    const mat = new THREE.MeshLambertMaterial({
      color: new THREE.Color(meta.colour),
      emissive: new THREE.Color(meta.colour),
      emissiveIntensity: t >= 4 ? 0.34 : t === 3 ? 0.16 : 0.04,
      flatShading: true,
    });

    const mesh = new THREE.InstancedMesh(geo, mat, MAX_PER_TIER);
    mesh.count = 0;
    mesh.frustumCulled = false;
    mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    scene.add(mesh);
    meshes.set(t, mesh);
  }

  const m = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  const eul = new THREE.Euler();
  const v = new THREE.Vector3();
  const s = new THREE.Vector3();

  /**
   * Rebuild the instance buffers from the currently visible objects.
   * @param {import('../worldgen/chunk.js').WorldObject[]} objects
   * @param {(id: string) => boolean} isTaken
   * @param {number} tMs animation clock, for the idle bob
   */
  function rebuild(objects, isTaken, tMs) {
    const counts = new Map(tiers.map((t) => [t, 0]));

    for (const o of objects) {
      if (isTaken(o.id)) continue;
      const mesh = meshes.get(o.tier);
      const i = counts.get(o.tier);
      if (i >= MAX_PER_TIER) continue;

      const meta = tierMeta(o.tier);
      // A slow bob, phase-offset per object so they do not pulse in unison.
      const phase = (o.x * 0.7 + o.z * 1.3) % (Math.PI * 2);
      const bob = Math.sin(tMs * 0.0015 + phase) * 0.05;

      eul.set(0, o.rot, 0);
      q.setFromEuler(eul);
      v.set(o.x, o.y + meta.scale + bob, o.z);
      s.setScalar(meta.scale);
      m.compose(v, q, s);
      mesh.setMatrixAt(i, m);
      counts.set(o.tier, i + 1);
    }

    for (const t of tiers) {
      const mesh = meshes.get(t);
      mesh.count = counts.get(t);
      mesh.instanceMatrix.needsUpdate = true;
    }
  }

  return { rebuild, meshes };
}

/**
 * A ring that sits under the nearest collectible, so the player can see what a
 * collect press would take. Without this the pickup is guesswork, and guessing
 * is fatal for a mechanic where declining an item is meaningful.
 */
export function makeHighlight() {
  const geo = new THREE.RingGeometry(0.55, 0.75, 28);
  geo.rotateX(-Math.PI / 2);
  const mat = new THREE.MeshBasicMaterial({
    color: '#fff4d0',
    transparent: true,
    opacity: 0.9,
    depthWrite: false,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.visible = false;
  mesh.frustumCulled = false;
  return mesh;
}
