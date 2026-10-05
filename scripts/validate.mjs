// Validates the JSON Schemas, the files in examples/, the JSON examples
// embedded in SPECIFICATION.md and the vocabularies/ DefinedTermSets.
// Run with: npm install && npm run validate
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

const schemas = {};
const validators = {};
for (const [type, file] of Object.entries(schemaFiles)) {
  schemas[type] = readJson(path.join(root, file));
  validators[type] = ajv.compile(schemas[type]);
}

// Vocabulary file → schema enums that must list exactly its term codes.
const vocabularyBase = 'https://raw.githubusercontent.com/fe-lixe/meaningful-participation/main/vocabularies';
const vocabularyEnums = {
  'participant-roles.jsonld': [
    ['ParticipationRecord', '/$defs/coreParticipantRole/enum'],
    ['EcosystemRelationship', '/$defs/coreParticipantRole/enum'],
  ],
  'commitment-classes.jsonld': [['ParticipationRecord', '/properties/commitmentClasses/items/enum']],
  'relationship-types.jsonld': [['EcosystemRelationship', '/$defs/coreRelationshipType/enum']],
  'verification-outcomes.jsonld': [['EcosystemRelationship', '/$defs/coreVerificationOutcome/enum']],
  'status-values.jsonld': [], // No Status Statement schema yet.
};

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
    const problems = data.type === 'ParticipationRecord' ? participationTimeProblems(data) : [];
    if (problems.length === 0) {
      console.log(`ok   ${label} (${data.type})`);
      return;
    }
    failures++;
    console.error(`FAIL ${label} (${data.type})`);
    for (const problem of problems) console.error(`       ${problem}`);
  } else {
    failures++;
    console.error(`FAIL ${label} (${data.type})`);
    for (const err of validate.errors) {
      console.error(`       ${err.instancePath || '/'} ${err.message}`);
    }
  }
}

// Compares two schema-valid time values. Where either is date-only, both are
// compared as calendar dates as written (SPECIFICATION.md, Participation Time).
function compareTimes(a, b) {
  if (a.length === 10 || b.length === 10) {
    const [da, db] = [a.slice(0, 10), b.slice(0, 10)];
    return da < db ? -1 : da > db ? 1 : 0;
  }
  return Math.sign(Date.parse(a) - Date.parse(b));
}

function participationTimeProblems(record) {
  const problems = [];
  const { participationStart: start, participationEnd: end, recordCreationTimestamp: created } = record;
  if (start !== undefined && compareTimes(start, end) > 0) {
    problems.push(`participationStart ${start} is later than participationEnd ${end}`);
  }
  if (compareTimes(end, created) > 0) {
    problems.push(`participationEnd ${end} is later than recordCreationTimestamp ${created}`);
  }
  return problems;
}

function fail(label, problems) {
  checked++;
  if (problems.length === 0) {
    console.log(`ok   ${label}`);
    return;
  }
  failures++;
  console.error(`FAIL ${label}`);
  for (const problem of problems) console.error(`       ${problem}`);
}

const pointer = (obj, ptr) => ptr.split('/').slice(1).reduce((node, key) => node?.[key], obj);

function vocabularyProblems(file, set) {
  const problems = [];
  const setId = `${vocabularyBase}/${file}`;
  if (set['@type'] !== 'DefinedTermSet') problems.push(`@type is ${JSON.stringify(set['@type'])}, expected "DefinedTermSet"`);
  if (set['@id'] !== setId) problems.push(`@id is ${JSON.stringify(set['@id'])}, expected ${JSON.stringify(setId)}`);
  const terms = Array.isArray(set.hasDefinedTerm) ? set.hasDefinedTerm : [];
  if (terms.length === 0) problems.push('hasDefinedTerm is missing or empty');
  for (const term of terms) {
    const code = term.termCode;
    if (term['@type'] !== 'DefinedTerm') problems.push(`${code}: @type is not "DefinedTerm"`);
    if (term['@id'] !== `${setId}#${code}`) problems.push(`${code}: @id is not ${setId}#${code}`);
    if (term.inDefinedTermSet !== setId) problems.push(`${code}: inDefinedTermSet is not ${setId}`);
    for (const key of ['termCode', 'name', 'description']) {
      if (typeof term[key] !== 'string' || term[key].length === 0) problems.push(`${code}: ${key} is missing`);
    }
  }
  const codes = terms.map((t) => t.termCode);
  if (new Set(codes).size !== codes.length) problems.push('term codes are not unique');
  if (!(file in vocabularyEnums)) problems.push('not registered in vocabularyEnums in scripts/validate.mjs');
  for (const [type, ptr] of vocabularyEnums[file] ?? []) {
    const values = pointer(schemas[type], ptr);
    if (JSON.stringify([...(values ?? [])].sort()) !== JSON.stringify([...codes].sort())) {
      problems.push(`term codes ${JSON.stringify(codes)} differ from ${schemaFiles[type]}#${ptr} ${JSON.stringify(values)}`);
    }
  }
  return problems;
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
const examplesById = {};
for (const name of fs.readdirSync(path.join(root, 'examples')).filter((f) => f.endsWith('.json')).sort()) {
  const label = `examples/${name}`;
  const data = parse(label, fs.readFileSync(path.join(root, 'examples', name), 'utf8'));
  if (data === undefined) continue;
  examplesById[data.id] = { label, data };
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
  if (data !== undefined) {
    check(label, data);
    // A spec block sharing an id with an examples/ file must be an exact copy of it.
    const example = examplesById[data.id];
    if (example) {
      const same = JSON.stringify(data) === JSON.stringify(example.data);
      fail(`${label} matches ${example.label}`, same ? [] : ['differs; copy the file into the specification']);
    }
  }
  i = end;
}

// vocabularies/*.jsonld must be well-formed DefinedTermSets that agree with the schemas.
for (const name of fs.readdirSync(path.join(root, 'vocabularies')).filter((f) => f.endsWith('.jsonld')).sort()) {
  const label = `vocabularies/${name}`;
  const set = parse(label, fs.readFileSync(path.join(root, 'vocabularies', name), 'utf8'));
  if (set !== undefined) fail(label, vocabularyProblems(name, set));
}
for (const name of Object.keys(vocabularyEnums)) {
  if (!fs.existsSync(path.join(root, 'vocabularies', name))) fail(`vocabularies/${name}`, ['file is missing']);
}

console.log(`\n${checked} checked, ${failures} failed`);
process.exit(failures ? 1 : 0);
