import * as THREE from 'three';

/**
 * Tree species, built as geometry rather than picked from a library.
 *
 * The forest was pines, and pines are wrong twice over: they are a wilding
 * conifer and an active pest in Aotearoa, and a cone on a stick is the most
 * generic tree shape there is. What is here instead is a small set of forms
 * abstracted from native trees — not botanical models, just enough of each
 * silhouette that the bush reads as this place and not as anywhere.
 *
 * Each species is ONE merged geometry with its colours baked into vertices, so
 * the whole forest is still one draw call per species with a single material.
 * That is the constraint that shapes everything below: no per-part meshes, no
 * per-instance colour, no textures.
 *
 * Every geometry is built with its pivot at the ground and a height of exactly
 * 1, so `scale` in the scenery data is the tree's height in metres and nothing
 * downstream needs to know which species it is holding.
 */

/** @type {{r: number, g: number, b: number}} */
const c = (hex) => new THREE.Color(hex);

/**
 * Merge a list of {geo, colour, matrix} parts into one vertex-coloured
 * BufferGeometry. Written out rather than pulled from BufferGeometryUtils
 * because all it needs to do is concatenate position/normal/index and paint,
 * and doing it here keeps the colour baking in the same place as the shapes.
 *
 * @param {{geo: THREE.BufferGeometry, colour: string}[]} parts
 */
function bake(parts) {
  let vertexCount = 0;
  let indexCount = 0;
  for (const p of parts) {
    p.geo = p.geo.toNonIndexed ? p.geo : p.geo;
    if (!p.geo.index) p.geo = p.geo; // non-indexed already
    vertexCount += p.geo.attributes.position.count;
    indexCount += p.geo.index ? p.geo.index.count : p.geo.attributes.position.count;
  }

  const position = new Float32Array(vertexCount * 3);
  const normal = new Float32Array(vertexCount * 3);
  const colour = new Float32Array(vertexCount * 3);
  const index = new Uint32Array(indexCount);

  let vo = 0;
  let io = 0;
  for (const p of parts) {
    const pos = p.geo.attributes.position;
    const nrm = p.geo.attributes.normal;
    const col = c(p.colour);
    for (let i = 0; i < pos.count; i++) {
      position[(vo + i) * 3] = pos.getX(i);
      position[(vo + i) * 3 + 1] = pos.getY(i);
      position[(vo + i) * 3 + 2] = pos.getZ(i);
      normal[(vo + i) * 3] = nrm.getX(i);
      normal[(vo + i) * 3 + 1] = nrm.getY(i);
      normal[(vo + i) * 3 + 2] = nrm.getZ(i);
      colour[(vo + i) * 3] = col.r;
      colour[(vo + i) * 3 + 1] = col.g;
      colour[(vo + i) * 3 + 2] = col.b;
    }
    if (p.geo.index) {
      const idx = p.geo.index;
      for (let i = 0; i < idx.count; i++) index[io + i] = idx.getX(i) + vo;
      io += idx.count;
    } else {
      for (let i = 0; i < pos.count; i++) index[io + i] = vo + i;
      io += pos.count;
    }
    vo += pos.count;
    p.geo.dispose();
  }

  const out = new THREE.BufferGeometry();
  out.setAttribute('position', new THREE.BufferAttribute(position, 3));
  out.setAttribute('normal', new THREE.BufferAttribute(normal, 3));
  out.setAttribute('color', new THREE.BufferAttribute(colour, 3));
  out.setIndex(new THREE.BufferAttribute(index, 1));
  return out;
}

/** A tapered frond: a long thin wedge, drooping along its length. */
function frond({ length, width, droop, segments = 4 }) {
  const g = new THREE.BufferGeometry();
  const pos = [];
  const idx = [];
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    // Tapers to a point, and falls away in a curve rather than a straight line.
    const w = width * (1 - t) * (1 - t * 0.35);
    const y = -droop * t * t;
    const x = length * t;
    pos.push(x, y, -w, x, y, w);
  }
  for (let i = 0; i < segments; i++) {
    const a = i * 2;
    idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
  }
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

/** Radial crown of fronds around the top of a trunk. */
function frondCrown({ n, at, length, width, droop, tilt, colour, phase = 0 }) {
  const parts = [];
  for (let i = 0; i < n; i++) {
    const a = phase + (i / n) * Math.PI * 2;
    const g = frond({ length, width, droop });
    g.rotateZ(-tilt);
    g.rotateY(a);
    g.translate(0, at, 0);
    parts.push({ geo: g, colour });
  }
  return parts;
}

const TRUNK = '#6b5540';
const TRUNK_PALE = '#8d7a5e';

/**
 * nīkau — the only palm this far south. Bare ringed trunk, a bulge at the top,
 * and a crown of fronds held high and stiff. Unmistakable in a silhouette,
 * which is why it is the one doing most of the work.
 */
function nikau() {
  const trunk = new THREE.CylinderGeometry(0.030, 0.045, 0.70, 7);
  trunk.translate(0, 0.35, 0);
  const bulge = new THREE.CylinderGeometry(0.055, 0.075, 0.13, 7);
  bulge.translate(0, 0.755, 0);
  return bake([
    { geo: trunk, colour: TRUNK_PALE },
    { geo: bulge, colour: '#7f8b52' },
    ...frondCrown({
      n: 9, at: 0.82, length: 0.46, width: 0.075, droop: 0.30, tilt: -0.30,
      colour: '#3f6b3a',
    }),
    ...frondCrown({
      n: 5, at: 0.86, length: 0.34, width: 0.055, droop: 0.10, tilt: -0.85,
      colour: '#4d7a41', phase: 0.35,
    }),
  ]);
}

/**
 * tī kōuka, the cabbage tree. A bare trunk that forks near the top, each fork
 * ending in a spray of stiff blades. Reads as a handful of exclamation marks,
 * and nothing else in the world looks like it.
 */
function tiKouka() {
  const parts = [];
  const trunk = new THREE.CylinderGeometry(0.035, 0.055, 0.62, 6);
  trunk.translate(0, 0.31, 0);
  parts.push({ geo: trunk, colour: TRUNK });

  const heads = [
    { x: 0.00, z: 0.00, y: 0.62, s: 1.00 },
    { x: 0.12, z: 0.05, y: 0.72, s: 0.78 },
    { x: -0.10, z: 0.09, y: 0.68, s: 0.72 },
  ];
  for (const h of heads) {
    const branch = new THREE.CylinderGeometry(0.022, 0.030, 0.16 * h.s, 5);
    branch.rotateZ(-h.x * 1.6);
    branch.translate(h.x * 0.6, h.y - 0.02, h.z * 0.6);
    parts.push({ geo: branch, colour: TRUNK });
    // Blades: narrow, barely drooping, radiating in every direction.
    for (const spray of frondCrown({
      n: 11, at: h.y + 0.06 * h.s, length: 0.26 * h.s, width: 0.022,
      droop: 0.16 * h.s, tilt: -0.55, colour: '#5f7d40',
    })) {
      spray.geo.translate(h.x, 0, h.z);
      parts.push(spray);
    }
  }
  return bake(parts);
}

/**
 * ponga, the tree fern. Short fibrous trunk, and one wide flat crown held out
 * almost horizontally. It fills the middle of the frame where the canopy
 * species do not, so the bush has an understorey instead of bare ground.
 */
function ponga() {
  const trunk = new THREE.CylinderGeometry(0.050, 0.070, 0.55, 7);
  trunk.translate(0, 0.275, 0);
  return bake([
    { geo: trunk, colour: '#5c4a38' },
    // Arched, not flat. The camera looks down 25 degrees, so a horizontal
    // crown shows the viewer its plan view and a stand of them reads as a
    // scatter of green starfish.
    ...frondCrown({
      n: 10, at: 0.57, length: 0.52, width: 0.11, droop: 0.36, tilt: -0.30,
      colour: '#4a7a44',
    }),
    // A tight inner rosette of new growth, a shade lighter.
    ...frondCrown({
      n: 6, at: 0.60, length: 0.22, width: 0.06, droop: 0.05, tilt: -0.95,
      colour: '#6d9450', phase: 0.5,
    }),
  ]);
}

/**
 * pōhutukawa. A coastal tree, so it belongs in the dune band rather than deep
 * in the bush: broad, low, spreading much wider than it is tall, leaning the
 * way the wind pushed it. The red is in the geometry, as a scatter of flower
 * clumps, because a second material would cost a second draw call.
 */
function pohutukawa() {
  const parts = [];
  const trunk = new THREE.CylinderGeometry(0.055, 0.10, 0.34, 6);
  trunk.rotateZ(0.12);
  trunk.translate(0.02, 0.17, 0);
  parts.push({ geo: trunk, colour: '#5a4635' });

  // Three overlapping lobes, wider than tall, so the crown is a wind-flattened
  // dome and not a ball on a stick.
  const lobes = [
    { x: 0.00, y: 0.46, z: 0.00, rx: 0.52, ry: 0.26 },
    { x: 0.30, y: 0.40, z: 0.10, rx: 0.34, ry: 0.19 },
    { x: -0.26, y: 0.42, z: -0.12, rx: 0.31, ry: 0.18 },
  ];
  for (const l of lobes) {
    const g = new THREE.IcosahedronGeometry(1, 1);
    g.scale(l.rx, l.ry, l.rx);
    g.translate(l.x, l.y, l.z);
    parts.push({ geo: g, colour: '#3d5b3c' });
  }

  // Flowers. A pōhutukawa in bloom is a HAZE of red across the top of the
  // crown, not fruit hanging off it — seven fat red polyhedra read as apples.
  // So: many, small, flattened, sitting on the upper surface of the lobes, in
  // a crimson pulled slightly toward the foliage so they sit in it rather than
  // on it.
  for (let i = 0; i < 26; i++) {
    const a = i * 2.39996;
    const r = 0.50 * Math.sqrt((i + 0.5) / 26);
    const lx = Math.cos(a) * r;
    const lz = Math.sin(a) * r * 0.85;
    // Height follows the dome so the flowers lie on the canopy.
    const dome = 0.46 + 0.24 * Math.sqrt(Math.max(0, 1 - (r / 0.52) ** 2));
    const g = new THREE.IcosahedronGeometry(0.045 + (i % 3) * 0.008, 0);
    g.scale(1.3, 0.55, 1.3);
    g.translate(lx, dome + 0.01, lz);
    parts.push({ geo: g, colour: '#a83a34' });
  }
  return bake(parts);
}

/**
 * A tall canopy tree, rimu-ish: narrow, dark, and much higher than everything
 * else, with weeping foliage. Its whole job is to break the height line, so the
 * bush has a canopy above the nīkau instead of a flat ceiling.
 */
function rimu() {
  const parts = [];
  const trunk = new THREE.CylinderGeometry(0.030, 0.065, 0.78, 6);
  trunk.translate(0, 0.39, 0);
  parts.push({ geo: trunk, colour: '#4f4030' });

  // Weeping tiers, narrowing upward, each one a ring of short drooping fronds.
  const tiers = [
    { y: 0.42, r: 0.30, n: 7 },
    { y: 0.58, r: 0.26, n: 7 },
    { y: 0.72, r: 0.19, n: 6 },
    { y: 0.86, r: 0.12, n: 5 },
  ];
  for (const t of tiers) {
    for (const p of frondCrown({
      n: t.n, at: t.y, length: t.r, width: 0.085, droop: 0.22, tilt: 0.28,
      colour: '#2f4a30', phase: t.y * 9,
    })) parts.push(p);
  }
  const tip = new THREE.ConeGeometry(0.09, 0.20, 6);
  tip.translate(0, 0.92, 0);
  parts.push({ geo: tip, colour: '#2f4a30' });
  return bake(parts);
}

/**
 * mānuka / kānuka scrub. Small, fine, twiggy, and everywhere — it is what
 * actually covers the ground between the big trees, and it is what grows back
 * first on the dune side.
 */
function manuka() {
  const parts = [];
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2;
    const lean = 0.30;
    const g = new THREE.CylinderGeometry(0.020, 0.035, 0.68, 5);
    g.rotateZ(lean * Math.cos(a));
    g.rotateX(lean * Math.sin(a));
    g.translate(Math.cos(a) * 0.10, 0.33, Math.sin(a) * 0.10);
    parts.push({ geo: g, colour: '#6a5744' });

    const puff = new THREE.IcosahedronGeometry(1, 0);
    puff.scale(0.24, 0.19, 0.24);
    puff.translate(Math.cos(a) * 0.20, 0.66, Math.sin(a) * 0.20);
    parts.push({ geo: puff, colour: '#68804a' });
  }
  const crown = new THREE.IcosahedronGeometry(1, 0);
  crown.scale(0.26, 0.20, 0.26);
  crown.translate(0, 0.78, 0);
  parts.push({ geo: crown, colour: '#778c52' });
  return bake(parts);
}

/**
 * Every species, keyed by name. Heights are the sensible range in metres for
 * that tree, and the scenery generator picks within it.
 *
 * `coastal` species prefer the dune band, `canopy` species the deep bush;
 * anything else is happy across the middle.
 */
export const SPECIES = {
  nikau: { build: nikau, min: 3.2, max: 6.4, zone: 'bush' },
  ti_kouka: { build: tiKouka, min: 2.8, max: 5.6, zone: 'open' },
  ponga: { build: ponga, min: 2.2, max: 4.4, zone: 'bush' },
  pohutukawa: { build: pohutukawa, min: 3.4, max: 7.0, zone: 'coastal' },
  rimu: { build: rimu, min: 6.0, max: 11.5, zone: 'canopy' },
  manuka: { build: manuka, min: 1.3, max: 2.6, zone: 'open' },
};

export const SPECIES_NAMES = Object.keys(SPECIES);

/**
 * Build every species geometry once, each normalised to exactly one metre tall
 * with its base on the ground.
 *
 * Normalising rather than hand-tuning every part to land on 1.0 is the point:
 * the scenery data stores a height in metres and the renderer applies it as a
 * plain scalar, so a species that happens to build 0.79 tall comes out 21%
 * short forever and nothing says so. Adding a frond should not silently
 * change how tall the tree is.
 */
export function buildSpeciesGeometries() {
  /** @type {Record<string, THREE.BufferGeometry>} */
  const out = {};
  for (const name of SPECIES_NAMES) {
    const geo = SPECIES[name].build();
    geo.computeBoundingBox();
    const bb = geo.boundingBox;
    const h = bb.max.y - Math.min(0, bb.min.y);
    if (h > 0.001) geo.scale(1 / h, 1 / h, 1 / h);
    geo.computeBoundingBox();
    // Sit it on the ground. The pōhutukawa's trunk leans, which put its lowest
    // corner slightly under zero and buried it a centimetre into the terrain.
    geo.translate(0, -geo.boundingBox.min.y, 0);
    geo.computeBoundingBox();
    out[name] = geo;
  }
  return out;
}
