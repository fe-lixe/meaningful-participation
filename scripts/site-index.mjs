// Writes index.html at the root of the GitHub Pages site, listing every
// published protocol version and its files. The release workflow runs it on
// every release. It never writes inside a version folder, because published
// artefacts do not change (SPECIFICATION.md section 28).
//
//   node scripts/site-index.mjs <site directory>
import fs from 'node:fs';
import path from 'node:path';

const site = process.argv[2];
if (!site || !fs.existsSync(site)) {
  console.error('Usage: node scripts/site-index.mjs <site directory>');
  process.exit(1);
}

const repository = 'https://github.com/fe-lixe/meaningful-participation';
const escape = (s) => s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
const versionKey = (v) => v.split('.').map(Number);
const newestFirst = (a, b) => {
  const [x, y] = [versionKey(a), versionKey(b)];
  return y[0] - x[0] || y[1] - x[1];
};

const filesUnder = (dir, prefix = '') =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const rel = prefix ? `${prefix}/${entry.name}` : entry.name;
    return entry.isDirectory() ? filesUnder(path.join(dir, entry.name), rel) : [rel];
  });

const versions = fs
  .readdirSync(site, { withFileTypes: true })
  .filter((e) => e.isDirectory() && /^(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)$/.test(e.name))
  .map((e) => e.name)
  .sort(newestFirst);

const groupNames = { context: 'JSON-LD context', schemas: 'JSON Schemas', vocabularies: 'Vocabularies' };

const sections = versions
  .map((version, i) => {
    const groups = {};
    for (const file of filesUnder(path.join(site, version)).sort()) {
      const group = file.split('/')[0];
      (groups[group] ??= []).push(file);
    }
    const lists = Object.keys(groups)
      .sort()
      .map((group) => {
        const items = groups[group]
          .map((f) => `          <li><a href="${escape(`${version}/${f}`)}"><code>${escape(`${version}/${f}`)}</code></a></li>`)
          .join('\n');
        return `      <h3>${escape(groupNames[group] ?? group)}</h3>\n      <ul>\n${items}\n      </ul>`;
      })
      .join('\n');
    const latest = i === 0 ? ' <span class="tag">latest</span>' : '';
    return `    <section>\n      <h2>Protocol version ${escape(version)}${latest}</h2>\n${lists}\n    </section>`;
  })
  .join('\n');

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>MPP Published Artefacts</title>
  <style>
    :root { color-scheme: light dark; --fg: #1f2328; --muted: #59636e; --bg: #ffffff; --link: #0969da; --rule: #d1d9e0; --tag-bg: #ddf4ff; }
    @media (prefers-color-scheme: dark) {
      :root { --fg: #e6edf3; --muted: #9198a1; --bg: #0d1117; --link: #4493f8; --rule: #3d444d; --tag-bg: #12263f; }
    }
    body { margin: 0; background: var(--bg); color: var(--fg); font: 16px/1.55 system-ui, -apple-system, "Segoe UI", sans-serif; }
    main { max-width: 46rem; margin: 0 auto; padding: 2.5rem 1rem 4rem; }
    h1 { font-size: 1.6rem; margin: 0 0 .5rem; }
    h2 { font-size: 1.2rem; margin: 2.25rem 0 .25rem; padding-top: 1.25rem; border-top: 1px solid var(--rule); }
    h3 { font-size: .95rem; color: var(--muted); margin: 1.25rem 0 .25rem; }
    p { margin: .5rem 0; }
    ul { margin: .25rem 0; padding-left: 1.25rem; }
    li { margin: .2rem 0; overflow-wrap: anywhere; }
    a { color: var(--link); }
    code { font-size: .9em; }
    .muted { color: var(--muted); }
    .tag { font-size: .75rem; font-weight: 600; background: var(--tag-bg); color: var(--link); border-radius: 1rem; padding: .1rem .55rem; vertical-align: middle; }
  </style>
</head>
<body>
  <main>
    <h1>Meaningful Participation Protocol</h1>
    <p>Machine-readable artefacts of the Meaningful Participation Protocol (MPP). Each protocol version is published in its own folder and never changes after release, as set out in section 28 of the specification.</p>
    <p><a href="${repository}">Repository</a> · <a href="${repository}/blob/main/SPECIFICATION.md">Specification</a> · <a href="${repository}/releases">Releases</a> · <a href="${repository}/blob/main/CHANGELOG.md">Changelog</a></p>
${sections || '    <p class="muted">No versions have been published yet.</p>'}
  </main>
</body>
</html>
`;

fs.writeFileSync(path.join(site, 'index.html'), html);
fs.writeFileSync(path.join(site, '.nojekyll'), '');
console.log(`Wrote index.html listing ${versions.length} version(s): ${versions.join(', ') || 'none'}`);
