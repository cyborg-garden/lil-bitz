// Fold the built bundle into ONE self-contained HTML file.
//
// Artifacts run under a strict CSP that blocks every external host, so nothing
// can be fetched at runtime: the JS and CSS have to be in the document. Output
// is body content only, with no doctype/html/head/body wrapper, because the
// artifact host supplies those.
//
//   npm run build && node agent/inline.mjs

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const dist = 'dist';
const assets = readdirSync(join(dist, 'assets'));
const jsName = assets.find((f) => f.endsWith('.js'));
const cssName = assets.find((f) => f.endsWith('.css'));
if (!jsName) throw new Error('no built js found; run npm run build first');

let js = readFileSync(join(dist, 'assets', jsName), 'utf8');
const css = cssName ? readFileSync(join(dist, 'assets', cssName), 'utf8') : '';

// Inline the character textures as data URIs.
//
// Files under public/ are copied verbatim and are never inlined by the bundler,
// so in a single-file artifact every one of them would 404 and the figures
// would silently vanish. Rewriting the paths here is what keeps the art in a
// page that is allowed to make no network requests at all.
let inlined = 0;
let artBytes = 0;
const charDir = join(dist, 'art', 'chars');
for (const file of readdirSync(charDir)) {
  if (!file.endsWith('.png')) continue;
  const buf = readFileSync(join(charDir, file));
  const uri = `data:image/png;base64,${buf.toString('base64')}`;
  const needle = `art/chars/${file}`;
  if (!js.includes(needle)) {
    throw new Error(`${needle} is on disk but nothing references it in the bundle`);
  }
  js = js.split(needle).join(uri);
  inlined++;
  artBytes += buf.length;
}
if (inlined === 0) throw new Error('no character textures were inlined');

// And her voice. Same reason: `public/` files are copied, never bundled, and
// a fetch for /audio/lyss-hum.mp3 inside the artifact sandbox is a silent 404
// that leaves the trinket maker mute with no error anywhere.
let audioBytes = 0;
const audioDir = join(dist, 'audio');
for (const file of readdirSync(audioDir)) {
  if (!file.endsWith('.mp3')) continue;
  const buf = readFileSync(join(audioDir, file));
  const needle = `/audio/${file}`;
  if (!js.includes(needle)) {
    throw new Error(`${needle} is on disk but nothing references it in the bundle`);
  }
  js = js.split(needle).join(`data:audio/mpeg;base64,${buf.toString('base64')}`);
  audioBytes += buf.length;
}
if (audioBytes === 0) throw new Error('no audio was inlined');

// The bundle must be standalone. A bare import would hit the network and the
// CSP would kill it silently, leaving a blank page and no error worth reading.
const bareImport = /(^|\n)\s*import\s+[^;]*from\s*["'][^."'][^"']*["']/;
if (bareImport.test(js)) throw new Error('bundle still has external imports');

const html = `<title>Lil Bitz</title>
<style>
  html, body {
    margin: 0;
    height: 100%;
    overflow: hidden;
    background: #d8cdb4;
    overscroll-behavior: none;
  }
  canvas { display: block; touch-action: none; }

  #stamp {
    position: fixed;
    right: max(14px, env(safe-area-inset-right));
    top: max(12px, env(safe-area-inset-top));
    z-index: 5;
    font: 500 11px/1.5 ui-rounded, "Avenir Next", "Segoe UI", system-ui, sans-serif;
    letter-spacing: 0.04em;
    text-align: right;
    color: #4a3b2b;
    pointer-events: none;
    text-transform: uppercase;
    /* The scene behind this ranges from pale sand to near-black foliage, so the
       stamp needs its own ground or it disappears into the forest. */
    background: rgba(252, 246, 232, 0.82);
    border-radius: 10px;
    padding: 6px 10px;
  }
  #stamp b { display: block; font-weight: 700; letter-spacing: 0.12em; }
  #stamp .wip { display: block; opacity: 0.6; }

  @media (max-width: 620px) { #stamp { display: none; } }

${css}
</style>

<div id="stamp">
  <b>Lil Bitz</b>
  Project R&#363;MOKO &middot; art by Lyss <span>@gods_eyeball</span>
  <span class="wip">milestone 4 &middot; work in progress</span>
</div>

<script type="module">
${js}
</script>
`;

writeFileSync('dist/artifact.html', html);
const kb = (Buffer.byteLength(html) / 1024).toFixed(0);
console.log(`dist/artifact.html  ${kb} kB  (js ${(js.length / 1024) | 0} kB, css ${(css.length / 1024) | 0} kB, ${inlined} textures ${(artBytes / 1024) | 0} kB, audio ${(audioBytes / 1024) | 0} kB)`);
