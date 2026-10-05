// Validates the JSON Schemas, the files in examples/ and the JSON examples
// embedded in SPECIFICATION.md. Run with: npm install && npm run validate
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import Ajv2020Module from 'ajv/dist/2020.js';
import addFormatsModule from 'ajv-formats';

const Ajv2020 = Ajv2020Module.default ?? Ajv2020Module;
const addFormats = addFormatsModule.default ?? addFormatsModule;

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const readJson = (file) => JSON.parse(fs.readFileSync(file, 'utf8'));

// Protocol Object "type" → schema file. Types without a schema yet are only
// checked for well-formed JSON.
const schemaFiles = {
  ParticipationRecord: 'schemas/participation-record.schema.json',
  EcosystemRelationship: 'schemas/ecosystem-relationship.schema.json',
};

const ajv = new Ajv2020({ allErrors: true, strict: true });
addFormats(ajv);

const validators = {};
for (const [type, file] of Object.entries(schemaFiles)) {
  validators[type] = ajv.compile(readJson(path.join(root, file)));
}

let failures = 0;
let checked = 0;

function check(label, data) {
  checked++;
  const validate = validators[data?.type];
  if (!validate) {
    console.log(`ok   ${label} (well-formed JSON; no schema for type ${JSON.stringify(data?.type)})`);
    return;
  }
  if (validate(data)) {
    console.log(`ok   ${label} (${data.type})`);
  } else {
    failures++;
    console.error(`FAIL ${label} (${data.type})`);
    for (const err of validate.errors) {
      console.error(`       ${err.instancePath || '/'} ${err.message}`);
    }
  }
}

function parse(label, text) {
  try {
    return JSON.parse(text);
  } catch (err) {
    failures++;
    checked++;
    console.error(`FAIL ${label}: invalid JSON (${err.message})`);
    return undefined;
  }
}

// examples/*.json must each be a Protocol Object with a schema.
for (const name of fs.readdirSync(path.join(root, 'examples')).filter((f) => f.endsWith('.json')).sort()) {
  const label = `examples/${name}`;
  const data = parse(label, fs.readFileSync(path.join(root, 'examples', name), 'utf8'));
  if (data === undefined) continue;
  if (!validators[data.type]) {
    failures++;
    checked++;
    console.error(`FAIL ${label}: no schema for type ${JSON.stringify(data.type)}`);
    continue;
  }
  check(label, data);
}

// ```json blocks in the specification must parse, and validate where a schema exists.
const spec = fs.readFileSync(path.join(root, 'SPECIFICATION.md'), 'utf8').split('\n');
for (let i = 0; i < spec.length; i++) {
  if (spec[i].trim() !== '```json') continue;
  const start = i + 1;
  let end = start;
  while (end < spec.length && spec[end].trim() !== '```') end++;
  const label = `SPECIFICATION.md:${start + 1}`;
  const data = parse(label, spec.slice(start, end).join('\n'));
  if (data !== undefined) check(label, data);
  i = end;
}

console.log(`\n${checked} checked, ${failures} failed`);
process.exit(failures ? 1 : 0);
