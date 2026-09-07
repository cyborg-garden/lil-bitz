import * as THREE from 'three';

/**
 * Alpha-tested camera-facing quads: how Lyss's flat ink gets into a 3D world
 * without anything reinterpreting it.
 *
 * Two settings carry the whole approach.
 *
 * `alphaTest` with `transparent: false` is the correct pairing, not
 * `transparent: true`. An alpha-tested material still writes depth, so dozens
 * of sprites sort against each other and against the terrain for free. Turning
 * on transparency instead buys a per-frame sorting problem and z-fighting at
 * chunk scale.
 *
 * `LinearFilter` with mipmaps and anisotropy, NOT `NearestFilter`. BUILD-PLAN
 * specified nearest for "crisp ink", which is right for pixel art and wrong for
 * this: her line is a loose tapering brush stroke with visible texture, and
 * nearest-neighbour turns it into stair-steps at the size these render.
 *
 * Y-axis billboarding only. The quad spins about vertical to face the camera
 * but never tips, so a figure stays standing on the ground instead of lying
 * back toward the lens as the camera pitches.
 */

const loader = new THREE.TextureLoader();

/**
 * @param {string} url
 * @param {THREE.WebGLRenderer} renderer
 */
export function loadSpriteTexture(url, renderer) {
  const tex = loader.load(url);
  tex.magFilter = THREE.LinearFilter;
  tex.minFilter = THREE.LinearMipmapLinearFilter;
  tex.generateMipmaps = true;
  tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/**
 * One standing figure.
 *
 * @param {Object} o
 * @param {THREE.Texture} o.texture
 * @param {number} o.worldHeight metres
 * @param {number} o.aspect width / height of the source image
 */
export function makeBillboard({ texture, worldHeight, aspect }) {
  const w = worldHeight * aspect;
  const geo = new THREE.PlaneGeometry(w, worldHeight);
  // Pivot at the feet, so placing one is "put it at ground height" and never
  // "put it at ground height plus half of whatever this sprite happens to be".
  geo.translate(0, worldHeight / 2, 0);

  const mat = new THREE.MeshBasicMaterial({
    map: texture,
    transparent: false,
    alphaTest: 0.5,
    side: THREE.DoubleSide,
    // MeshBasic, not Lambert: her art already has its shadows drawn in. Lighting
    // it again would double the shading and muddy the flat colour.
    toneMapped: false,
  });

  const mesh = new THREE.Mesh(geo, mat);
  mesh.frustumCulled = false;
  return mesh;
}

/**
 * A soft blob shadow. Without one a billboard reads as cardboard hovering over
 * the ground rather than a figure standing on it, and it is the cheapest
 * grounding trick there is.
 */
export function makeBlobShadow(radius = 0.5) {
  const size = 64;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, 'rgba(40,32,22,0.42)');
  g.addColorStop(0.6, 'rgba(40,32,22,0.18)');
  g.addColorStop(1, 'rgba(40,32,22,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;

  const geo = new THREE.PlaneGeometry(radius * 2, radius * 2);
  geo.rotateX(-Math.PI / 2);
  const mat = new THREE.MeshBasicMaterial({
    map: tex,
    transparent: true,
    depthWrite: false,
    toneMapped: false,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.frustumCulled = false;
  mesh.renderOrder = -1;
  return mesh;
}

/**
 * Turn a billboard to face the camera about the Y axis only.
 * @param {THREE.Object3D} mesh
 * @param {THREE.Camera} camera
 */
export function faceCamera(mesh, camera) {
  mesh.rotation.y = Math.atan2(
    camera.position.x - mesh.position.x,
    camera.position.z - mesh.position.z,
  );
}
