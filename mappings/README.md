# Mappings to Other Standards

This folder describes how MPP relates to other standards, ontologies and taxonomies. The notes help implementers connect Participation Records and Meaning Profiles to frameworks their ecosystems already use.

**The notes are non-normative.** They are not part of the MPP specification, do not change the meaning of any MPP term, and are not published as versioned artefacts. They can be added or updated at any time without a new MPP release. Where a note and the specification differ, the specification takes precedence.

## Notes

| Standard | Note | Status |
| --- | --- | --- |
| Common Impact Data Standard (CIDS) | [cids.md](cids.md) | Draft |

Candidates not yet written: the Traffic Light Protocol 2.0 and the FPF de-identification levels (disclosure boundaries); the Admiralty Scale (source reliability); the MISP AI-assistance taxonomy. A note is added when there is a use case for it.

## How a mapping is expressed

Mapping tables use the [SKOS mapping relations](https://www.w3.org/TR/skos-reference/#mapping), read from the MPP concept to the external term:

| Match | Meaning |
| --- | --- |
| Exact | The two can be used interchangeably |
| Close | Similar enough to be used interchangeably in most cases |
| Broad | The external term is broader than the MPP concept |
| Narrow | The external term is narrower than the MPP concept |
| Related | Associated, but not interchangeable |
| None | No equivalent |

Where an ecosystem links its own Meaning Profiles or Participation Types to an external framework, it does so through the `alignments` property planned for MPP 1.1. Until then, an ecosystem can use `extensions`.

## Note template

Each note has these sections:

1. **Summary.** One or two sentences: what the standard is and what the mapping enables.
2. **About the standard.** Steward, current version and date, licence, namespace, maintenance activity and known adopters, each with a source. Anything not published by the steward is stated as unknown, not estimated.
3. **Relevance to MPP.** The MPRA layers and MPP objects involved, and the use case.
4. **Mapping table.** MPP concept, external term, match type and notes.
5. **How to use it.** A short example, if one helps.
6. **Implementation effort.** S, M or L, with what the work involves.
7. **Open questions.**
8. **Sources.** Pages consulted, with the date they were consulted.
