import * as THREE from 'three';

/**
 * Infinite ground, done as a single grid that follows the player.
 *
 * Rather than building a mesh per chunk and streaming meshes, one fixed-size
 * grid is snapped to a coarse lattice and its vertex heights are re-sampled
 * from `heightAt` whenever it moves. The world is therefore infinite by
 * construction, there is exactly one draw call for the ground, and there are no
 * seams between terrain tiles to get wrong.
 *
 * Snapping is what keeps it from swimming: the mesh only ever moves in whole
 * grid steps, so a vertex always lands on the same world position it did last
 * frame and the surface stays still under the player.
 */
export function makeTerrainMesh({
  heightAt, forestnessAt, freshSurfaceAt = null, size = 190, segments = 150,
}) {
  const geo = new THREE.PlaneGeometry(size, size, segments, segments);
  geo.rotateX(-Math.PI / 2);

  const pos = geo.attributes.position;
  const colours = new Float32Array(pos.count * 3);
  geo.setAttribute('color', new THREE.BufferAttribute(colours, 3));

  const mat = new THREE.MeshLambertMaterial({ vertexColors: true });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.frustumCulled = false;

  const step = size / segments;
  const SAND = new THREE.Color('#e0cda4');
  const WET = new THREE.Color('#c2ad86');
  const SCRUB = new THREE.Color('#a8ad7e');
  const FOREST = new THREE.Color('#5f7148');
  const BED = new THREE.Color('#9a927c');
  const tmp = new THREE.Color();

  let originX = NaN;
  let originZ = NaN;

  /** Re-sample the grid around a world position, snapping to the lattice. */
  function update(px, pz, force = false) {
    const ox = Math.round(px / step) * step;
    const oz = Math.round(pz / step) * step;
    if (!force && ox === originX && oz === originZ) return false;
    originX = ox;
    originZ = oz;
    mesh.position.set(ox, 0, oz);

    for (let i = 0; i < pos.count; i++) {
      const wx = pos.getX(i) + ox;
      const wz = pos.getZ(i) + oz;
      const h = heightAt(wx, wz);
      pos.setY(i, h);

      // Colour by biome, with a wet band at the waterline so the sea edge reads.
      const f = forestnessAt(wx, wz);
      if (f < 0.5) tmp.copy(SAND).lerp(SCRUB, f * 2);
      else tmp.copy(SCRUB).lerp(FOREST, (f - 0.5) * 2);
      if (h < 0.35) tmp.lerp(WET, Math.min(1, (0.35 - h) / 0.5));

      // Streambeds get a bank of wet gravel either side. Without it the water
      // sits on forest-green ground and reads as a sheet laid over the bush
      // rather than as something that cut its way through it.
      if (freshSurfaceAt) {
        const bank = freshSurfaceAt(wx, wz) - h;
        if (bank > -0.55) tmp.lerp(BED, Math.min(1, (bank + 0.55) / 1.1));
      }

      colours[i * 3] = tmp.r;
      colours[i * 3 + 1] = tmp.g;
      colours[i * 3 + 2] = tmp.b;
    }

    pos.needsUpdate = true;
    geo.attributes.color.needsUpdate = true;
    geo.computeVertexNormals();
    return true;
  }

  return { mesh, update, step };
}

/**
 * Fresh water: streams and ponds, as a grid that follows the player exactly
 * like the ground does.
 *
 * The trick is that this surface is defined EVERYWHERE, not only in the
 * channels. Away from water it sits a little under the ground, so the terrain
 * hides it by ordinary depth testing, and it emerges only where the terrain was
 * cut below it. No alpha mask, no visibility per vertex, no seams to get wrong —
 * and it cannot disagree with the ground, because the same field carved both.
 */
export function makeFreshWater({ freshSurfaceAt, size = 190, segments = 118 }) {
  const geo = new THREE.PlaneGeometry(size, size, segments, segments);
  geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position;

  const mat = new THREE.MeshLambertMaterial({
    color: '#6f9a91',
    transparent: true,
    opacity: 0.80,
    // Fresh water is shallow and you see the bed through it, so it must not
    // write depth or it will hide the streambed it is sitting in.
    depthWrite: false,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.frustumCulled = false;
  mesh.renderOrder = 1;

  const step = size / segments;
  let originX = NaN;
  let originZ = NaN;

  function update(px, pz, force = false) {
    const ox = Math.round(px / step) * step;
    const oz = Math.round(pz / step) * step;
    if (!force && ox === originX && oz === originZ) return false;
    originX = ox;
    originZ = oz;
    mesh.position.set(ox, 0, oz);

    for (let i = 0; i < pos.count; i++) {
      pos.setY(i, freshSurfaceAt(pos.getX(i) + ox, pos.getZ(i) + oz));
    }
    pos.needsUpdate = true;
    geo.computeVertexNormals();
    return true;
  }

  return { mesh, update, step };
}

/** Flat translucent water plane at sea level, following the player. */
export function makeWater(seaLevel = 0) {
  const geo = new THREE.PlaneGeometry(1200, 1200);
  geo.rotateX(-Math.PI / 2);
  const mat = new THREE.MeshLambertMaterial({
    color: '#5e8ea0',
    transparent: true,
    opacity: 0.82,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.y = seaLevel - 0.06;
  mesh.frustumCulled = false;
  return mesh;
}
