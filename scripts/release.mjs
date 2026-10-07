// Plans a release from its tag (SPECIFICATION.md section 28).
//
//   node scripts/release.mjs v1.1.0
//
// vX.Y.0 (or the legacy vX.Y) publishes the artefacts for protocol version
// X.Y. vX.Y.Z with Z > 0 is a patch release: it publishes nothing and fails
// if schemas/, vocabularies/ or context/ differ from the X.Y release.
// In GitHub Actions the plan is written to $GITHUB_OUTPUT.
import fs from 'node:fs';
import { execFileSync } from 'node:child_process';

const tag = process.argv[2] ?? process.env.GITHUB_REF_NAME;
const match = /^v(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)(?:\.(0|[1-9][0-9]*))?$/.exec(tag ?? '');
if (!match) {
  console.error(`Release tag ${JSON.stringify(tag)} is not vMAJOR.MINOR.PATCH.`);
  process.exit(1);
}

const [, major, minor, patchText] = match;
const protocolVersion = `${major}.${minor}`;
const patch = Number(patchText ?? 0);
const git = (...args) => execFileSync('git', args, { encoding: 'utf8' }).trim();
const tagExists = (t) => {
  try {
    git('rev-parse', '--verify', '--quiet', `refs/tags/${t}`);
    return true;
  } catch {
    return false;
  }
};

let mode = 'publish';
if (patch > 0) {
  mode = 'patch';
  const base = [`v${protocolVersion}.0`, `v${protocolVersion}`].find(tagExists);
  if (!base) {
    console.error(`Patch release ${tag} has no ${protocolVersion} release to patch (v${protocolVersion}.0 or v${protocolVersion}).`);
    process.exit(1);
  }
  const changed = git('diff', '--name-only', base, 'HEAD', '--', 'schemas', 'vocabularies', 'context');
  if (changed) {
    console.error(`Patch release ${tag} changes published artefacts since ${base}:\n${changed}`);
    console.error(`Release these changes as a new minor version instead.`);
    process.exit(1);
  }
  console.log(`Patch release ${tag}: artefacts unchanged since ${base}; nothing to publish.`);
} else {
  console.log(`Release ${tag}: publishing artefacts for protocol version ${protocolVersion}.`);
}

if (process.env.GITHUB_OUTPUT) {
  fs.appendFileSync(process.env.GITHUB_OUTPUT, `protocol-version=${protocolVersion}\nmode=${mode}\n`);
}
