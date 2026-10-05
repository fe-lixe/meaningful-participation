# Mapping: Common Impact Data Standard (CIDS)

**Status:** Draft, non-normative · **MPP version:** 1.0 · **CIDS version:** 3.2.0 · **Last reviewed:** 5 October 2026

## Summary

CIDS is an ontology for sharing impact data between social purpose organisations and funders. Mapping MPP to CIDS lets an ecosystem state which CIDS outcomes or themes its Meaning Profiles serve, and report aggregated Meaningful Participation as CIDS indicators.

## About the standard

| | |
| --- | --- |
| Steward | [Common Approach to Impact Measurement](https://www.commonapproach.org/), a community-driven standards organisation based in Canada |
| Current version | 3.2.0, ontology IRI `https://ontology.commonapproach.org/cids/3.2.0` |
| Namespace | `cids:` = `https://ontology.commonapproach.org/cids#` |
| Licence | CC BY-SA 4.0 |
| Maintenance | Active. The revision history records releases in 2024 and 2025 |
| Conformance | Three tiers: Basic (Organization, Outcome, Indicator, IndicatorReport, Theme), Essential (adds Stakeholder, Characteristic, StakeholderOutcome, ImpactReport, Target, ImpactPathway) and Full (adds Program, Service, Activity, Input, Output, ImpactModel and more). Software exchanges data as JSON-LD, with a URI for each instance |
| Reused vocabularies | Includes schema.org, W3C Organization, OWL-Time, PROV-O, ISO/IEC 21972 (indicators and units), the SDGs and IRIS+ |
| Adopters | Not published on the steward's website. Two community projects are named: the Pathfinder Pilot and the Social Finance Fund |

## Relevance to MPP

- **MPRA layers.** CIDS sits mainly in the Interpretation and Incentives layers: it describes outcomes, indicators and impact. MPP sits in the Participation layer: it records who committed what.
- **The join.** A Meaning Profile states what an Ecosystem counts as Meaningful Participation. CIDS states which outcomes an organisation pursues. Aligning the two shows funders how recognised participation contributes to reported outcomes.
- **Use case.** A funder that already collects CIDS data could receive, from each funded organisation, indicator reports such as "verified volunteer hours contributing to Outcome X", derived from Participation Records. MPP itself does not define such indicators; that remains the Interpretation layer of each ecosystem.

## Mapping table

| MPP concept | CIDS term | Match | Notes |
| --- | --- | --- | --- |
| Ecosystem | `cids:Organization` | Narrow | An Ecosystem may be a single organisation, but also a network, sector or platform |
| Meaning Profile | `cids:Outcome` or `cids:Theme` | Related | Through `alignments` (planned for MPP 1.1), not equivalence: a Meaning Profile defines recognition criteria, not an outcome |
| Alignment object (planned) | `cids:Code` | Close | Both reference a term in an external taxonomy. `targetName` corresponds to `hasName`, `targetCode` to `hasIdentifier` |
| Participation Type | `cids:Activity` | Related | A Participation Type categorises what a Participant does; a CIDS Activity is performed to deliver a service |
| Participant with the `subject` Role | `cids:ContributingStakeholder` | Close | Where the subject provides inputs to an organisation's services |
| Commitment Classes `capital`, `effort`, `knowledge` | `cids:Input` | Broad | CIDS Inputs are resources in general; Commitment Classes name the kind committed |
| Commitment Class `standing` | None | None | CIDS has no equivalent for committing reputation or authority |
| `participationStart`, `participationEnd` | `prov:startedAtTime`, `prov:endedAtTime` | Close | CIDS uses `xsd:dateTime`; MPP also allows a date without a time |
| A count or total derived from Participation Records | `cids:IndicatorReport` for a `cids:Indicator` | Related | Produced by an ecosystem's Interpretation layer, not by MPP |
| Participation Record | None | None | CIDS has no object for an individual instance of recognised participation |

## How to use it

Until `alignments` is part of MPP, an ecosystem can link a Meaning Profile to a CIDS outcome through `extensions`. Here the outcome IRI is fictional:

```json
{
  "extensions": {
    "https://mappings.example.org/cids-alignment": {
      "targetName": "Increased civic participation",
      "targetUrl": "https://impact.example.org/outcomes/civic-participation",
      "targetFramework": "Common Impact Data Standard"
    }
  }
}
```

## Implementation effort

- **Alignment only (S).** Add CIDS outcome or theme IRIs to Meaning Profiles. This needs no change to how Participation Records are issued.
- **Indicator reporting (M).** Derive CIDS IndicatorReports from Participation Records for the Basic Tier. This needs the ecosystem to define its indicators, aggregate records over a reporting period, and export JSON-LD, which the MPP context makes easier.

## Open questions

1. How widely is CIDS adopted? The steward's website does not publish figures, so this should be asked of Common Approach directly.
2. Would Common Approach consider publishing MPP's Commitment Classes as a `cids:Code` list, or a profile for participation-based indicators?
3. CIDS is licensed CC BY-SA 4.0 and MPP Apache-2.0. Referring to CIDS terms, as this note does, raises no issue, but copying substantial parts of the ontology into MPP materials would bring share-alike obligations.

## Sources

Consulted on 5 October 2026:

- [Common Impact Data Standard ontology](https://ontology.commonapproach.org/cids-en.html), Common Approach to Impact Measurement
- [Common Approach to Impact Measurement](https://www.commonapproach.org/), home page
