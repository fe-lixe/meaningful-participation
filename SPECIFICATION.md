---
subtitle: An Open Protocol for Representing Meaningful Participation
  Across Digital Ecosystems
title: Meaningful Participation Protocol (MPP)
---

# Purpose

The Meaningful Participation Protocol (MPP) defines an open,
interoperable protocol for representing and exchanging portable
assertions of Meaningful Participation through Participation Records,
together with relationships between Ecosystems that support
interoperability and portability.

MPP forms the Participation layer of the Meaningful Participation
Reference Architecture (MPRA). MPRA separates Identity, Credentials,
Participation, Interpretation and Incentives into distinct architectural
layers. MPP standardises only the representation and exchange of
Meaningful Participation within that architecture, leaving
interpretation and incentives entirely ecosystem specific.

MPP uses a reference-oriented data model with limited embedding of
informative or integrity-related properties. Protocol Objects remain
independently identifiable, while Participation Records may include
selected metadata needed for readability, portability or verification.

A Participation Record is an assertion by an Ecosystem that a specific
instance of Participation constitutes Meaningful Participation according
to that Ecosystem's criteria. It identifies the Commitment Classes
associated with that assertion and provides the basis for associated
Evidence, Verification and Status Statements.

An Ecosystem Relationship is a Protocol Object representing an assertion
that one Ecosystem has a defined relationship with another Ecosystem.
Ecosystem Relationships enable structural and delegated-authority
relationships to be represented independently of individual
Participation Records.

MPP standardises how assertions of Meaningful Participation and
relationships between Ecosystems are represented and exchanged. It does
not standardise how Meaningful Participation is defined, valued, scored,
ranked, governed or incentivised, or how Ecosystem Relationships
influence interoperability, interpretation or incentives.

The protocol is implementation-independent and may be used in
centralised, federated or decentralised systems.

# Problem Statement

There is no open, interoperable standard for representing and exchanging
Meaningful Participation across Ecosystems. As a result, representations
of Meaningful Participation are typically proprietary, making them
difficult to exchange, verify independently or reuse across systems.

Relationships through which Ecosystems are organised, or delegate
authority, are commonly represented through proprietary organisational
structures, bilateral agreements or application-specific configuration.
Policies governing whether Participation Records from other Ecosystems
should be considered are likewise typically embedded within proprietary
applications. This makes interoperability difficult to express, discover
and manage consistently across Ecosystems.

This fragmentation limits interoperability, reduces participant agency
and inhibits the development of services that build upon shared
Participation Records and explicit relationships between Ecosystems.

# Scope

**MPP standardises:**

- Participation Records;

- Ecosystem Relationships;

- Commitment Classes;

- Core Relationship Types;

- Participant Roles;

- Vocabularies;

- Protocol Object lineage;

- Language and translation;

- Relationship Scope;

- Identifiers;

- Evidence representation;

- Verification representation;

- Protocol Object lifecycle;

- Exchange; and

- Conformance

**MPP does not standardise:**

- Graphs;

- Scoring;

- Reputation;

- Incentives;

- Governance;

- Interoperability policies;

- Business models;

- Ranking;

- Recommendation;

- Identity systems; or

- Storage technology.

This separation enables interoperable Participation Records and
Ecosystem Relationships while allowing Ecosystems to develop independent
graphs, reputation models, governance frameworks, interoperability
policies and incentive systems.

# Design Principles

1.  **Ecosystem-defined Meaning**  
    Each Ecosystem defines what constitutes Meaningful Participation and
    is responsible for assigning Commitment Classes to Participation
    Records. MPP does not prescribe which Participation an Ecosystem
    should recognise as Meaningful Participation. Different Ecosystems
    have different objectives, values and governance models. The
    protocol standardises how Meaningful Participation is represented
    and exchanged, while allowing each Ecosystem to define its own
    criteria for Meaningful Participation.

2.  **Representation, Not Interpretation**  
    MPP represents Meaningful Participation and relationships between
    Ecosystems; applications interpret them. MPP defines common
    representations for Participation Records and Ecosystem
    Relationships but does not prescribe how they should be valued,
    scored, ranked, rewarded, recognised or otherwise interpreted.
    Applications remain responsible for determining interoperability,
    policy evaluation, interpretation, scoring, incentives and other
    behaviours built upon Protocol Objects.

3.  **Evidence Before Inference**  
    MPP records assertions of Meaningful Participation together with
    supporting Evidence. It does not standardise derived metrics,
    reputation or other interpretations. Applications remain free to
    infer reputation, credibility, influence or other metrics from
    protocol-compliant Participation Records.

4.  **Technology Neutrality**  
    MPP is implementation independent. The protocol supports
    centralised, federated and decentralised deployments. It does not
    require blockchain, distributed ledgers or any specific storage
    architecture.

5.  **Stable Core**  
    MPP standardises only the concepts necessary for interoperable
    representation and exchange of Meaningful Participation and
    Ecosystem Relationships. Ecosystems remain free to innovate in areas
    such as graphs, reputation, governance, interoperability policies,
    incentives and recommendation without affecting protocol
    conformance.

6.  **Extensibility**  
    MPP evolves through extension while preserving interoperability. MPP
    should allow Ecosystems to introduce new Participation types,
    metadata and extensions while preserving interoperability with
    existing implementations. Extensions should extend the protocol
    without reducing interoperability.

7.  **Participant Agency**  
    MPP enables Participants to retain portable Participation Records
    that are not permanently confined to individual applications or
    organisations. The protocol should enable Participation Records to
    remain portable, reusable and independently verifiable wherever
    appropriate. Explicit Ecosystem Relationships, together with
    ecosystem-defined interoperability policies, enable Participants and
    applications to determine how Participation Records may be evaluated
    across Ecosystem boundaries.

8.  **Privacy by Design**  
    MPP should minimise unnecessary disclosure of Participation
    information. The protocol should support selective disclosure,
    pseudonymous participation and implementation approaches that
    minimise collection and exchange of unnecessary information.

9.  **Data Minimisation**  
    MPP should represent only what is necessary. MPP should require only
    the minimum information needed to represent, exchange and verify
    Meaningful Participation, leaving additional information to optional
    extensions or individual implementations.

10. **Independent Verifiability**  
    Participation Records and Ecosystem Relationships should contain
    sufficient information to support independent evaluation of the
    assertions they represent. MPP standardises the representation of
    Evidence and Verification but does not prescribe how assertions are
    verified.

11. **Separation of Participation from Platforms**  
    MPP represents Meaningful Participation independently of the
    platforms in which it occurs, allowing Participation Records to
    remain portable, reusable and independently verifiable beyond the
    systems in which they were created.

Collectively, these principles define the architectural foundations of
MPP, enabling interoperable participation infrastructure upon which
organisations, ecosystems and applications can represent, exchange and
build upon meaningful participation without dependence on proprietary
participation systems.

# Terminology

The following terms are used throughout this specification. These
definitions describe how the terms are used within the Meaningful
Participation Protocol and are not intended to be universal definitions.

**Participant**  
An individual, organisation, system or other identifiable entity
associated with an instance of Participation represented by a
Participation Record.

**Participant Role**  
The function performed by a Participant in relation to the
Participation or the Participation Record.

**Ecosystem**  
A set of Participants, rules, governance and interactions within which
Meaningful Participation is defined and occurs. An Ecosystem determines
its own criteria for Meaningful Participation.

**Ecosystem Relationship**  
A Protocol Object representing an assertion that one Ecosystem has a
defined relationship with another Ecosystem.

**Interoperability Policy**  
An ecosystem-defined set of rules determining whether and under what
conditions Participation Records originating from other Ecosystems may
be considered. Interoperability Policies are outside the scope of MPP.

**Relationship Type**  
The protocol-defined or Ecosystem-defined identifier describing the
nature and direction of an Ecosystem Relationship.

**Relationship Scope**  
The limitations, conditions or domains to which an Ecosystem
Relationship applies.

**Participation**  
An action, contribution, interaction or other activity performed by a
Participant within an Ecosystem. Participation may subsequently be
recognised by an Ecosystem as Meaningful Participation.

**Meaningful Participation**  
Participation that an Ecosystem asserts satisfies its own criteria for
meaningful participation. MPP does not define those criteria; it defines
how such assertions are represented and exchanged.

**Participation Record**  
The primary protocol object representing a single assertion of
Meaningful Participation by an Ecosystem. A Participation Record
contains the information defined by this specification for representing,
exchanging, verifying and managing the lifecycle of that assertion.

**Participation History**  
The collection of Participation Records associated with a Participant.

**Commitment Classes**  
The categories of commitment assigned by an Ecosystem to describe the
commitments materially contributing to a Participation Record. MPP
defines four Commitment Classes: Effort, Capital, Knowledge and
Standing.

**Evidence**  
Information supporting the occurrence or characteristics of Meaningful
Participation. Evidence may be supplied directly or referenced by a
Participation Record.

**Verification**  
The assessment of a Participation Record, Ecosystem Relationship or
supporting Evidence according to the rules of an Ecosystem or another
recognised authority. MPP represents verification outcomes but does not
prescribe verification methods.

**Status**  
The lifecycle state of a Protocol Object, including whether it is
active, suspended, superseded, revoked, disputed or otherwise modified
in accordance with this specification.

# Meaningful Participation Protocol

## 1. Protocol Overview

The Meaningful Participation Protocol (MPP) defines an interoperable
representation of Meaningful Participation within and across Ecosystems.

MPP represents Meaningful Participation through **Participation
Records** and relationships between Ecosystems through **Ecosystem
Relationships**. It standardises how these Protocol Objects are
represented and exchanged while leaving interoperability, interpretation
and incentives entirely ecosystem specific.

### Participation Record

MPP enables an Ecosystem to create a portable and verifiable
Participation Record that:

- identifies the Participants and their respective Roles;

- identifies the Ecosystem in which the Participation occurred;

- describes the recognised instance of Participation;

- records the basis upon which the Ecosystem recognises the
  Participation as Meaningful Participation;

- records the Commitment Classes assigned to the Participation;

- references supporting Evidence;

- distinguishes the Participation Record from its Verification; and

- records the lifecycle Status of the Participation Record.

### Ecosystem Relationship

MPP enables an Ecosystem to create a portable and verifiable Ecosystem
Relationship that:

- identifies the source and target Ecosystems;

- identifies the Relationship Type;

- identifies the Participant responsible for asserting the relationship;

- describes any applicable Relationship Scope;

- references supporting Evidence;

- distinguishes the Ecosystem Relationship from its Verification; and

- records the lifecycle Status of the Ecosystem Relationship.

### Out of Scope

MPP does not define:

- universal participation scores;

- reputation scores;

- incentive mechanisms;

- reward allocation;

- governance systems;

- participation graphs;

- identity systems;

- transport protocols; or

- storage infrastructure.

Implementations MAY build these systems using MPP Protocol Objects.

## 2. Normative Language

The key words MUST, MUST NOT, REQUIRED, SHOULD, SHOULD NOT, MAY and
OPTIONAL in this specification are to be interpreted as described in RFC
2119 and RFC 8174, when and only when they appear in all capitals.

Property names and literal values used in serialised Protocol Objects
are shown in code formatting, for example `participationEnd` or
`delegatesAssertionAuthorityTo`, and are case-sensitive. Capitalised
terms such as Participation Record and Status Statement are defined
terms of this specification.

## 3. Protocol Objects

Participation Record and Ecosystem Relationship are the two primary
Protocol Objects defined by MPP.

### Primary Protocol Objects

#### Participation Record

A Participation Record is the primary Protocol Object and the principal
unit of information exchanged through MPP. It represents an assertion by
an Ecosystem that a specific instance of Participation constitutes
Meaningful Participation.

#### Ecosystem Relationship

An Ecosystem Relationship is a primary Protocol Object representing an
assertion that one Ecosystem has a defined relationship with another
Ecosystem. Ecosystem Relationships provide the infrastructure through
which structural and delegated-authority relationships may be
represented across Ecosystem boundaries.

### Supporting Protocol Objects

#### Meaning Profile

A Meaning Profile defines the criteria under which an Ecosystem
recognises Participation as Meaningful Participation. It provides the
basis for the assertions represented by Participation Records.

#### Evidence

Evidence is a Protocol Object that represents information supporting an
assertion contained in a Participation Record or Ecosystem Relationship.
It enables assertions of Meaningful Participation to be substantiated
through independently referenceable evidence.

#### Verification

A Verification is a Protocol Object that records the outcome of
evaluating a Participation Record, an Ecosystem Relationship, one or
more Evidence objects, or a combination of these. It enables independent
parties to assess and communicate confidence in assertions without
modifying the original Protocol Object.

#### Status Statement

A Status Statement records changes to the lifecycle Status of a
Participation Record, Ecosystem Relationship or other Protocol Object
for which lifecycle Status is defined, including suspension, revocation,
supersession or dispute.

## 4. Participation Record

A Participation Record is a portable, verifiable assertion by an
Ecosystem that a specific instance of Participation constitutes
Meaningful Participation according to that Ecosystem's criteria. It is
the primary Protocol Object exchanged through MPP.

### Required Properties

A Participation Record MUST include:

- protocol version;

- globally unique Participation Record identifier;

- one or more Commitment Classes;

- Ecosystem identifier;

- Participants, including an identifier and one or more Roles for each
  Participant;

- Participation Type;

- Participation description;

- Meaning Profile identifier;

- Participation end time;

- Record creation timestamp; and

- integrity proof or signature where required by the implementation
  profile.

An implementation profile is an implementation-specific specification
that defines optional requirements, including integrity mechanisms,
identifier formats or deployment constraints.

### Optional Properties

A Participation Record MAY include:

- Participation start time;

- identifier of the Participation Record it supersedes;

- contextual properties;

- references to one or more Evidence objects;

- privacy and disclosure information; and

- extension properties.

### Behavioural Requirements

- Participation Records are immutable and MUST NOT be modified after
  issuance. Changes to the assertion they contain MUST be represented
  through a new Participation Record and, where appropriate, an
  associated Status Statement.

- A Participation Record that replaces an earlier Participation Record
  SHOULD identify it through the `supersedes` property, in accordance with
  section 25.

- A Participation Record MUST identify one or more Participants.

- Each Participant MUST be assigned one or more Participant Roles.

- A Participant MAY be assigned multiple Roles.

- Exactly one Participant MUST be assigned the **asserter** Role,
  identifying the Participant responsible for the assertion represented
  by the Participation Record.

- One or more Participants MUST be assigned the **subject** Role,
  identifying the Participant or Participants whose Participation is
  recognised by the Participation Record.

- A Participation Record MUST include one or more Commitment Classes. An
  Ecosystem MUST assign only those Commitment Classes that apply to the
  Participation represented by the record.

- A Participation Record MAY reference one or more Evidence objects. An
  Evidence reference included at issuance forms part of the immutable
  Participation Record.

- Implementations SHOULD avoid duplicating information available through
  persistent references, particularly where MPP objects are appended to
  larger payloads or exchanged at high volume.

### Participation Time

A Participation Record represents Participation that has been completed.
It identifies when that Participation occurred through two properties:

- **participationEnd** (REQUIRED): the time at which the Participation
  was completed or, for Participation occurring at a single point in
  time, the time at which it occurred; and

- **participationStart** (OPTIONAL): the time at which the Participation
  began, included where the Participation took place over a period of
  time.

#### Representation

Each Participation time value MUST be either:

- a date-time conforming to the RFC 3339 `date-time` format, including a
  UTC offset or `Z`; or

- a calendar date conforming to the RFC 3339 `full-date` format
  (`YYYY-MM-DD`).

A date-only value indicates that the Participation started or ended at an
unspecified time on that calendar date. It does not imply a time of day
or a time zone.

The record creation timestamp MUST be a date-time conforming to the RFC
3339 `date-time` format, including a UTC offset or `Z`.

#### Behavioural Requirements

- A Participation Record MUST include `participationEnd`.

- A Participation Record MUST NOT represent Participation that is
  ongoing at the time of issuance. Ongoing Participation SHOULD be
  represented through separate Participation Records for each completed
  period, such as a term, season or year.

- Where Participation occurred at a single point in time,
  `participationStart` SHOULD be omitted.

- The absence of `participationStart` indicates only that no start time is
  asserted. It MUST NOT be interpreted as evidence of the duration of
  the Participation.

- Where `participationStart` is included, it MUST NOT be later than
  `participationEnd`.

- `participationEnd` SHOULD NOT be later than the record creation
  timestamp.

- Where two time values have different precision, they MUST be compared
  at the precision of the less precise value, using the calendar date as
  written in the date-time value.

- Implementations MUST NOT assign a time of day or a time zone to a
  date-only value.

- Consistent with Data Minimisation, an Ecosystem SHOULD use the least
  precise time value sufficient for the intended use of the
  Participation Record.

#### Example

The following properties represent Participation that took place over a
period, with a start date and a precise completion time.

```json
{
  "participationStart": "2026-07-14",
  "participationEnd": "2026-07-28T13:15:00Z"
}
```

## 5. Commitment Classes

### 5.1 Purpose

Commitment Classes represent finite commitments intentionally made
through Participation, rather than enduring personal attributes or
outcomes.

Commitment Classes provide a common, minimal semantic vocabulary for
describing the finite commitments that make Participation meaningful
across otherwise incompatible Ecosystems.

#### Defined Commitment Classes

A Participation Record MUST identify one or more Commitment Classes
describing the finite commitments materially represented by the
Participation.

MPP defines four Commitment Classes, published in the
[Commitment Classes vocabulary](vocabularies/commitment-classes.jsonld):

1.  Capital

2.  Effort

3.  Knowledge

4.  Standing

Commitment Classes provide a compact semantic description of what the
Participant committed, rather than attempting to classify the activity
itself.

The ordering of Commitment Classes in this specification is alphabetical
and does not imply precedence, importance or weighting. Examples
provided throughout this specification are illustrative and
non-exhaustive. They are intended to provide semantic richness that
assists human readers, implementers and machine-assisted systems in
consistently interpreting and mapping Participation to the Commitment
Classes.

The four Commitment Classes constitute the core semantic vocabulary for
describing commitments across Ecosystems. They describe what
Participants commit, rather than what they do.

#### Interpretation

The presence of a Commitment Class does not establish:

- the quantity committed;

- the personal cost to the Participant;

- the quality of the commitment;

- the value created;

- the risk incurred;

- the sincerity of the Participant;

- the Participant's motivation; or

- the relative importance of one Commitment Class compared with another.

#### Behavioural Requirements

- A Commitment Class SHOULD be assigned only where that form of
  commitment materially contributes to the Ecosystem's recognition of
  the Participation as Meaningful Participation.

- Implementations MUST NOT infer a universal score or ranking from the
  presence or number of Commitment Classes.

### 5.2 Capital

Capital is a scarce resource committed through Participation that is
transferred, reserved, consumed or otherwise made available in support
of an Ecosystem. Capital may be financial, physical, computational,
biological or any other transferable or controllable asset.

#### Examples

Examples include:

- **Financial:** money, grants, loans, guarantees, securities and
  insurance;

- **Physical:** equipment, vehicles, facilities, infrastructure,
  materials and consumables;

- **Computational:** computing capacity, storage, bandwidth, cloud
  credits and software licences;

- **Biological:** blood, plasma, tissue, organs and other biological
  materials; and

- **Rights and access:** intellectual property licences, spectrum
  rights, land-use rights, access rights and rights to use or reserve an
  asset.

The declaration of Capital does not indicate the relative affordability,
financial exposure or economic significance of the commitment to the
Participant.

#### Behavioural Requirements

- Capital SHOULD be declared only where it is material to the
  Ecosystem's recognition of the Participation.

### 5.3 Effort

Effort is the application of human capacity through Participation.

Effort includes Participation that occurs over time but does not treat
elapsed time as a separate Commitment Class.

#### Examples

Examples include:

- **Physical:** moving, lifting, carrying, operating, enduring and being
  physically present;

- **Cognitive:** reading, listening, watching, observing, learning,
  interpreting, analysing, planning, designing, creating, reviewing,
  problem-solving and decision-making; and

- **Emotional:** caring, supporting, empathising, encouraging,
counselling, comforting and maintaining emotional resilience.

#### Behavioural Requirements

- Effort SHOULD be declared only where it is material to the Ecosystem's
  recognition of the Participation.

### 5.4 Knowledge

Knowledge is information, understanding, expertise, judgement, insight
or know-how contributed through Participation.

Knowledge may be acquired before, during or through Participation and is
not inherently time bound.

#### Examples

Examples include:

- **Factual:** information, observations, measurements, evidence and
  records;

- **Experiential:** know-how, practical experience, lived experience and
  lessons learned;

- **Contextual:** local knowledge, cultural knowledge, historical
  knowledge and institutional knowledge;

- **Analytical:** interpretation, insight, judgement and
  recommendations; and

- **Technical:** expertise, specialist knowledge, research findings,
  methodologies and models.

Knowledge does not need to be exclusive or depleted when contributed.

#### Behavioural Requirements

- Knowledge SHOULD be declared only where it is material to the
  Ecosystem's recognition of the Participation.

### 5.5 Standing

Standing is the commitment of a Participant's recognised position,
authority, accountability or reputation through Participation.

Standing is committed when an Ecosystem's recognition of Participation
as Meaningful Participation materially depends on who the Participant
is, the position they hold, or their willingness to associate their
recognised standing with that Participation.

#### Examples

Examples include:

- **Reputation:** credibility, trust, track record, public profile,
  professional standing and recognised expertise;

- **Authority:** organisational authority, delegated authority,
  regulatory authority, elected office and decision-making authority;

- **Accountability:** accepting responsibility, acting as a witness,
  legal accountability and professional accountability;

- **Affiliation:** institutional affiliation, organisational membership,
  community membership, representation and recognised association; and

- **Endorsement:** signing, endorsing, certifying, attesting, issuing
  credentials and sponsoring.

Standing does not represent a reputation score.

The presence of Standing indicates only that the Participant's
recognised position is materially associated with the Participation.

#### Behavioural Requirements

Standing SHOULD be declared only where it is material to the Ecosystem's
recognition of the Participation.

### 5.6 Extensions

#### Behavioural Requirements

- Implementations MUST use the four defined Commitment Class identifiers
  where they apply.

- The Commitment Classes vocabulary is closed. Ecosystems MUST NOT
  define additional Commitment Classes.

- Ecosystems MAY define additional commitment-related properties using
  extensions.

- Ecosystem-specific extensions MUST NOT redefine the meaning of the
  four core Commitment Classes.

- A future major version of MPP may add, deprecate or refine Commitment
  Classes following ontology testing and public review (see section 28).

## 6. Ecosystem Identification

Each Ecosystem MUST be identified by a persistent, globally unique
identifier.

### Identifier Requirements

Each Ecosystem is responsible for generating its own identifier. The
protocol does not require a central registration authority or issuing
authority.

An Ecosystem identifier MUST remain stable even if:

- the Ecosystem changes its name;

- its website or domain changes;

- its technical operator changes;

- its resolution endpoint changes; or

- the Ecosystem temporarily or permanently ceases online operation.

### Resolution and Verification

- An Ecosystem SHOULD cryptographically bind its identifier to one or
  more verification methods under its control. The cryptographic methods
  used are implementation specific.

- An Ecosystem MAY additionally provide one or more resolution
  locations, including HTTP URLs.

- The identity of an Ecosystem MUST NOT depend solely on the continued
  availability or ownership of a domain name.

### Example

```json
{
  "id": "urn:mpp:ecosystem:01JQ4C6AQ9H9H30C27Y4HPRT52",
  "name": "Example Research Community",
  "resolvesTo": [
    "https://example.org/.well-known/mpp-ecosystem.json"
  ]
}
```

## 7. Ecosystem Relationship

An Ecosystem Relationship is a Protocol Object representing an assertion
that one Ecosystem has a defined relationship with another Ecosystem.

Ecosystem Relationships enable structural and delegated-authority
relationships to be represented in a portable and independently
verifiable form.

MPP represents Ecosystem Relationships but does not prescribe their
organisational, legal or interpretative consequences. The existence of
an Ecosystem Relationship does not require an Ecosystem to recognise,
value, score, reward or otherwise interpret Participation Records in a
particular way.

Ecosystem Relationships describe how Ecosystems relate to one another
independently of individual Participation Records. They provide
interoperable representations of structural and delegated-authority
relationships upon which ecosystem-specific interoperability policies
may subsequently be based.

Participation Records therefore become portable across Ecosystems
through explicit, interoperable Ecosystem Relationships rather than
proprietary configuration.

### Required Properties

An Ecosystem Relationship MUST include:

- protocol version;

- globally unique Ecosystem Relationship identifier;

- source Ecosystem identifier;

- Relationship Type;

- target Ecosystem identifier;

- Participant assigned the asserter Role;

- Relationship effective timestamp; and

- record creation timestamp.

### Optional Properties

An Ecosystem Relationship MAY include:

- relationship description;

- Relationship Scope;

- identifier of the Ecosystem Relationship it supersedes;

- references to one or more Evidence objects;

- privacy information;

- integrity information;

- extension properties; and

- expiration timestamp.

### Behavioural Requirements

- An Ecosystem Relationship MUST identify exactly one source Ecosystem.

- An Ecosystem Relationship MUST identify exactly one target Ecosystem.

- An Ecosystem Relationship MUST identify exactly one Relationship Type.

- An Ecosystem Relationship MUST identify exactly one Participant
  assigned the asserter Role.

- An Ecosystem Relationship MUST NOT identify the same Ecosystem as both
  the source and target.

- An Ecosystem Relationship MUST represent only one relationship
  assertion.

- The direction of every Ecosystem Relationship MUST be interpreted as:

  - **source Ecosystem → Relationship Type → target Ecosystem**

- Where multiple relationships exist between the same Ecosystems, each
  relationship MUST be represented by a separate Ecosystem Relationship.

- Ecosystem Relationships are immutable and MUST NOT be modified after
  issuance. Changes to the lifecycle Status of an Ecosystem Relationship
  MUST be represented through a Status Statement. Materially changed
  relationships MUST be represented through a new Ecosystem
  Relationship, which SHOULD identify the Ecosystem Relationship it
  replaces through the `supersedes` property, in accordance with section
  25.

- An Ecosystem Relationship MAY reference one or more Evidence objects.

- An Ecosystem Relationship MAY be assessed through one or more
  Verification objects.

### Core Relationship Types

MPP defines the following core Relationship Types, published in the
[Relationship Types vocabulary](vocabularies/relationship-types.jsonld).

Ecosystems MAY define additional Relationship Types. Ecosystem-defined
Relationship Types MUST be identified in accordance with section 24 and
MUST NOT redefine the meaning of the core Relationship Types.

#### constituentOf

The source Ecosystem is a recognised constituent of the target Ecosystem
while retaining its own identity.

This relationship does not by itself imply governance authority or
recognition of Participation Records.

#### governedBy

The source Ecosystem is governed by the target Ecosystem.

#### operatedBy

The source Ecosystem is technically or administratively operated by the
target Ecosystem.

Operational responsibility does not necessarily imply governance
authority.

#### affiliatedWith

The source Ecosystem maintains a recognised association with the target
Ecosystem.

The nature of the affiliation is determined by the participating
Ecosystems.

#### successorTo

The source Ecosystem succeeds the target Ecosystem in whole or in part.

This relationship does not automatically transfer governance,
interoperability policies or Participation Records.

#### delegatesAssertionAuthorityTo

The source Ecosystem authorises the target Ecosystem to issue specified
Participation Records or make specified assertions of Meaningful
Participation on its behalf.

The Relationship Scope SHOULD explicitly define the delegated authority.

### Relationship Scope

#### Purpose

A Relationship Scope defines limitations, conditions or domains that
apply to an Ecosystem Relationship.

An Ecosystem Relationship MAY include a Relationship Scope where the
relationship does not apply without limitation.

A Relationship Scope MAY identify:

- one or more Participation Types;

- one or more Meaning Profiles;

- required Verification methods or outcomes;

- an effective period;

- activities, programmes, services or organisational domains; and

- Ecosystem-specific conditions expressed through extensions.

#### Behavioural Requirements

- The structure and interpretation of a Relationship Scope depend upon
  the Relationship Type. A property SHOULD be included only where it is
  relevant to the relationship represented.

- A Relationship Scope MAY be used to qualify structural or
  delegated-authority relationships where appropriate.

- For a Relationship Type of `delegatesAssertionAuthorityTo`, the
  Relationship Scope SHOULD identify the assertions or Participation
  Types to which the delegated authority applies.

- The consequences of an Ecosystem Relationship, including how delegated
  authority affects interoperability or interpretation, remain decisions
  of the relevant Ecosystem or application.

### Example

The following example illustrates a Global Football Federation (GFF)
delegating defined assertion authority to the Examplia Football
Association (EFA). Both organisations are fictional. The
Relationship Scope limits that authority to specified forms of
participation and Meaning Profiles.

```json
{
  "type": "EcosystemRelationship",
  "mppVersion": "1.0",
  "id": "urn:uuid:52d115ef-b83e-44fa-a962-73ec548e91a2",
  "sourceEcosystem": {
    "id": "urn:mpp:ecosystem:01K7Q3M8ZT5X9R2C4V6B8N0D1E",
    "name": "Global Football Federation"
  },
  "relationshipType": "delegatesAssertionAuthorityTo",
  "targetEcosystem": {
    "id": "urn:mpp:ecosystem:01K7Q3P2HW4Y6A8S0F3G5J7K9M",
    "name": "Examplia Football Association"
  },
  "assertedByParticipant": {
    "id": "https://gff.example.org/identifiers/assertion-service",
    "roles": [
      "asserter"
    ]
  },
  "relationshipScope": {
    "participationTypes": [
      "https://gff.example.org/mpp/participation-types/referee-development",
      "https://gff.example.org/mpp/participation-types/coach-education"
    ],
    "meaningProfiles": [
      "https://gff.example.org/mpp/meaning-profiles/recognised-football-development/v1"
    ],
    "requiredVerificationOutcomes": [
      "verified"
    ]
  },
  "effectiveFrom": "2026-01-01T00:00:00Z",
  "recordCreationTimestamp": "2026-08-05T12:00:00Z"
}
```

In this example, the GFF delegates assertion authority to the EFA only
within the scope described by the Ecosystem Relationship. The
relationship does not grant the EFA unrestricted authority to issue
Participation Records on the GFF's behalf.

A receiving Ecosystem may subsequently evaluate this Ecosystem
Relationship as part of its own interoperability policy. For example, an
Ecosystem might choose to consider Participation Records asserted under
authority delegated by the GFF. MPP represents the Ecosystem Relationship
and its Relationship Scope, but does not standardise the
interoperability policy or determine how the resulting Participation
Records should be interpreted.

## 8. Interoperability

### Purpose

MPP separates the representation of Ecosystem Relationships from the
policies through which Ecosystems determine interoperability.

### Behavioural Requirements

- An Ecosystem MAY define an Interoperability Policy describing which
  Participation Records it is willing to consider and under what
  conditions.

- An Interoperability Policy MAY evaluate Ecosystem Relationships
  represented through MPP, together with Credentials, Verification,
  local governance rules and other contextual information.

- MPP standardises neither the format nor semantics of Interoperability
  Policies.

## 9. Participants

A Participant is an individual, organisation, system or other
identifiable entity associated with an instance of Participation or a
Protocol Object.

MPP does not define or require a universal identity system.

### Participant Types

A Participant MAY be:

- a natural person;

- an organisation;

- an informal group;

- a software agent;

- a device; or

- another entity recognised by an Ecosystem.

### Participant Identifiers

Participant identifiers MAY use existing identifier systems, including:

- decentralised identifiers;

- URLs;

- ORCID identifiers;

- legal entity identifiers;

- platform-specific identifiers;

- cryptographic public keys; or

- ecosystem-specific identifiers.

### Participant Roles

Each Participant identified within a Participation Record, Ecosystem
Relationship or supporting Protocol Object MUST be assigned one or more
Participant Roles.

MPP defines the following core Participant Roles, published in the
[Participant Roles vocabulary](vocabularies/participant-roles.jsonld):

- **subject**: the Participant whose Participation is recognised by a
  Participation Record;

- **asserter**: the Participant responsible for the assertion
  represented by a Participation Record or Ecosystem Relationship;

- **attestor**: the Participant responsible for attesting to the
  authenticity, provenance or validity of the Evidence represented by an
  Evidence object; and

- **verifier**: the Participant responsible for the assessment
  represented by a Verification object.

### Behavioural Requirements

- A Participant MAY be assigned multiple Roles.

- The subject Role applies only to Participation Records. An Ecosystem
  Relationship MUST NOT assign the subject Role.

- A Participant MAY be assigned both the subject and asserter Roles,
  representing a self-asserted Participation Record. Receiving
  Ecosystems remain free to interpret self-asserted Participation
  Records differently from other Participation Records.

- Ecosystems MAY define additional Roles. Ecosystem-defined Roles MUST
  be identified in accordance with section 24.

- Ecosystem-defined Roles MUST NOT replace or alter the meaning of Roles
  defined by MPP.

- Where a core Role applies, it MUST be assigned using its core term,
  even where an Ecosystem-defined Role is also assigned.

## 10. Participation Type

The Participation Type identifies the category of Participation represented by a Participation Record.

### Representation

Participation Types are Ecosystem-defined and need not be understood outside the originating Ecosystem. Interoperability across Ecosystems is provided through the protocol-defined Commitment Classes.

A Participation Type MUST be represented by a persistent identifier and MAY additionally include a human-readable name.

The persistent identifier is authoritative. The human-readable name is informative and MAY change without changing the identity of the Participation Type.

### Example

```json
{
  "participationType": {
    "id": "https://example.org/mpp/participation-types/peer-review",
    "name": "Peer review"
  }
}
```

## 11. Meaning Profile

A Meaning Profile defines the criteria under which an Ecosystem
recognises one or more Participation Types as Meaningful Participation.

Every Participation Record MUST reference exactly one Meaning Profile.

### Required Properties

A Meaning Profile MUST include:

- persistent identifier;

- issuing Ecosystem;

- version;

- criteria for recognising Meaningful Participation; and

- status.

### Optional Properties

A Meaning Profile MAY include:

- name;

- description;

- applicable Participation Type identifiers;

- effective date;

- integrity information;

- minimum Evidence requirements;

- Verification requirements; and

- Ecosystem-specific properties.

### Behavioural Requirements

MPP does not require different Ecosystems to agree on what constitutes
Meaningful Participation.

A Meaning Profile MUST NOT claim that its criteria represent a universal
measure of meaningfulness.

### Example

```json
{
  "type": "MeaningProfile",
  "mppVersion": "1.0",
  "id": "https://example.org/mpp/meaning-profiles/verified-peer-review/v1",
  "ecosystem": "urn:mpp:ecosystem:01JQ4C6AQ9H9H30C27Y4HPRT52",
  "name": "Verified Peer Review",
  "description": "Defines the criteria for recognising completed peer review as Meaningful Participation.",
  "version": "1.0",
  "applicableParticipationTypes": [
    "https://example.org/mpp/participation-types/peer-review"
  ],
  "recognitionCriteria": [
    {
      "id": "review-submitted",
      "description": "A substantive review was submitted for a research paper."
    },
    {
      "id": "submission-confirmed",
      "description": "Submission of the review was confirmed by the journal."
    }
  ],
  "minimumEvidenceRequirements": [
    {
      "type": "submission-record",
      "description": "Evidence that the review was submitted."
    }
  ],
  "verificationRequirements": [
    {
      "type": "editorial-confirmation",
      "description": "Verification by an authorised representative of the journal."
    }
  ],
  "effectiveFrom": "2026-08-01T00:00:00Z",
  "status": "active",
  "integrity": {
    "type": "DataIntegrityProof",
    "proofValue": "z..."
  }
}
```

## 12. Evidence

Evidence is a Protocol Object representing information that supports the
assertion represented by a Participation Record or Ecosystem
Relationship.

### Characteristics

An Evidence object MAY be:

- referenced by one or more Participation Records or Ecosystem
  Relationships;

- stored within the same implementation as a Participation Record;

- stored externally;

- publicly accessible;

- access-controlled;

- encrypted;

- cryptographically committed;

- machine-generated; or

- supplied by a Participant or another recognised entity.

### Recommended Properties

An Evidence object SHOULD include:

- evidence type;

- location or content reference;

- content hash where applicable;

- attestor identifier;

- date of creation;

- access conditions; and

- media type.

### Behavioural Requirements

- An Evidence object MAY be withheld from the public record where
  disclosure would create privacy, security, legal or commercial risks.

- An implementation MAY publish only a cryptographic digest or other
  proof of the Evidence object's existence.

- The presence of an Evidence object does not itself mean that the
  Participation Record or Ecosystem Relationship has been verified.

## 13. Verification

A Verification is a Protocol Object that records the outcome of
assessing a Participation Record, an Ecosystem Relationship, one or more
Evidence objects, or a combination of these.

Multiple Verification objects MAY reference the same Participation
Record, Ecosystem Relationship or Evidence object.

### Recommended Properties

A Verification SHOULD include the following properties:

- persistent identifier;

- verifier;

- Verification method;

- Verification subject;

- outcome;

- Verification timestamp;

- referenced Evidence, where applicable;

- Verification scope;

- expiration, where applicable; and

- integrity information.

### Verification Outcomes

MPP defines the following core Verification outcomes, published in the
[Verification Outcomes vocabulary](vocabularies/verification-outcomes.jsonld):

- **verified**: the verifier confirmed the assessed assertion or
  properties within the stated scope of the Verification;

- **partiallyVerified**: the verifier confirmed some, but not all, of
  the assessed assertion or properties within the stated scope of the
  Verification;

- **unverified**: the verifier could not confirm the assessed assertion
  or properties within the stated scope of the Verification. This does
  not indicate that they are incorrect;

- **disputed**: the verifier identified conflicting information or an
  unresolved challenge relating to the assessed assertion or
  properties; and

- **rejected**: the verifier concluded that the assessed assertion or
  properties are not supported within the stated scope of the
  Verification.

Where a core Verification outcome applies, it MUST be used. Additional
Verification outcomes MUST be identified in accordance with section 24.

### Behavioural Requirements

- A Verification confirms only the assertion or properties within the
  stated scope of the verification.

- A Verification MUST NOT be interpreted as a universal measure of the
  value or meaningfulness of Participation or of the organisational,
  legal or interpretative consequences of an Ecosystem Relationship.

## 14. Status Statement

Participation Records and Ecosystem Relationships are immutable, but
their lifecycle Status may change.

Changes to the Status of a Participation Record or Ecosystem
Relationship MUST be represented through Status Statements.

### Status Values

MPP defines the following core Status Values, published in the
[Status Values vocabulary](vocabularies/status-values.jsonld):

- **active**: the Protocol Object is in effect and may be relied upon
  under the conditions stated by its issuer;

- **suspended**: the Protocol Object should temporarily not be relied
  upon. A suspended Protocol Object may later return to active;

- **revoked**: the Protocol Object should no longer be relied upon under
  the conditions stated by the issuing entity;

- **superseded**: the Protocol Object has been replaced by another
  Protocol Object, which the Status Statement SHOULD identify; and

- **disputed**: the Protocol Object is subject to an unresolved
  challenge.

A disputed Status records a lifecycle state of the Protocol Object,
whereas a disputed Verification outcome records a verifier's finding.

Where a core Status Value applies, it MUST be used. Additional Status
Values MUST be identified in accordance with section 24.

### Recommended Properties

A Status Statement SHOULD identify:

- the affected Protocol Object;

- the status;

- the entity issuing the Status Statement;

- the effective time;

- the reason or reason code; and

- integrity information.

### Behavioural Requirements

- Revoking a Protocol Object does not erase the object or deny that it
  existed.

- A revoked Status indicates that the Protocol Object should no longer
  be relied upon under the conditions stated by the issuing entity.

- The `subject` property MAY reference a Participation Record, Ecosystem
  Relationship or another Protocol Object for which lifecycle Status is
  defined.

- A superseded Status SHOULD identify the replacing Protocol Object
  through the `supersededBy` property. The `supersedes` property of the
  replacing Protocol Object does not itself change the Status of the
  Protocol Object it identifies (see section 25).

### Example

The following Status Statement marks the Participation Record in
section 20 as superseded by the corrected Participation Record in
[`examples/superseding-record.json`](examples/superseding-record.json).

```json
{
  "type": "StatusStatement",
  "mppVersion": "1.0",
  "id": "urn:uuid:8ce46dc6-623f-4a27-ad6b-11c88c41de87",
  "subject": "urn:uuid:77bf495d-f8ca-4661-9ed2-5b2c499607de",
  "status": "superseded",
  "issuedByParticipant": "https://journal.example.org/identifiers/editorial-system",
  "effectiveAt": "2026-08-14T09:30:00Z",
  "reason": {
    "code": "corrected-record",
    "description": "The Participation description in the original record omitted the review round."
  },
  "supersededBy": "urn:uuid:019fff9a-a240-7a3f-91c2-9e84b7d05f6e"
}
```

## 15. Privacy and Selective Disclosure

MPP Protocol Objects MAY contain sensitive information.

Implementations SHOULD minimise the disclosure of personal data and
confidential evidence.

### Privacy Mechanisms

A Participation Record, Ecosystem Relationship or supporting Protocol
Object MAY use:

- pseudonymous identifiers;

- encrypted evidence;

- access-controlled references;

- selective disclosure mechanisms;

- zero-knowledge proofs;

- blinded participant identifiers; and

- cryptographic commitments.

### Behavioural Requirements

- An Ecosystem SHOULD disclose only the information necessary for the
  intended use of the Protocol Object.

- The absence of publicly accessible Evidence MUST NOT automatically be
  interpreted as an absence of Evidence.

- MPP does not require Participation Records, Ecosystem Relationships,
  Evidence or other Protocol Objects to be publicly accessible.

- Identifiers that embed a timestamp, such as UUID version 7
  identifiers, disclose when the identifier was generated, to
  millisecond precision, even where other properties are withheld
  through selective disclosure. Where that disclosure would create
  privacy risks, implementations SHOULD use identifiers that do not
  embed a timestamp, such as UUID version 4 identifiers (see section
  25).

## 16. Integrity and Authenticity

A conformant implementation SHOULD provide a means to establish:

- Protocol Object integrity;

- identity of the Participant with the asserter Role;

- integrity of referenced Meaning Profiles;

- integrity of Ecosystem Relationships;

- integrity of Status Statements; and

- integrity and authenticity of Verification objects.

### Integrity Mechanisms

MPP does not mandate a specific integrity or signature mechanism.

Implementations MAY use:

- JSON Web Signatures;

- Data Integrity Proofs;

- verifiable credentials;

- detached signatures;

- content-addressed storage;

- blockchain anchoring; or

- other suitable integrity mechanisms.

### Behavioural Requirements

- An integrity mechanism MUST NOT alter the semantic meaning of the
  underlying MPP Protocol Object.

## 17. Extensions

MPP objects MAY include an `extensions` property.

### Behavioural Requirements

- Each extension MUST use a globally unique identifier or namespace.

- Implementations MUST preserve unknown extension properties when
  storing, forwarding or transforming an MPP Protocol Object, unless the
  implementation explicitly declares that it does not support lossless
  processing.

- Extensions MUST NOT:

  - redefine required MPP properties;

  - redefine the meaning of core Relationship Types;

  - change the meaning of core Commitment Classes;

  - make a non-conformant Protocol Object conformant; or

  - imply conformance with requirements the implementation does not
    meet.

## 18. Conformance

A conformant MPP implementation MUST:

- create or process valid MPP Protocol Objects;

- preserve globally unique Protocol Object identifiers;

- treat Participation Records and Ecosystem Relationships as immutable;

- represent corrections through new immutable Protocol Objects and
  lifecycle changes through Status Statements;

- preserve the semantic distinction between the subject, asserter,
  attestor and verifier Roles;

- use core vocabulary terms where they apply, and identify
  Ecosystem-defined terms in accordance with section 24;

- reference a Meaning Profile for each Participation Record;

- preserve the direction of Ecosystem Relationships;

- use the core Relationship Type identifiers where they apply;

- avoid inferring one Ecosystem Relationship from another unless such
  inference is explicitly defined by the relevant application or
  Ecosystem;

- avoid assigning universal value to Commitment Classes;

- avoid treating the number of Commitment Classes as a score;

- preserve unknown extensions where lossless processing is claimed;

- ignore unknown properties unless required to process a supported
  extension or determine conformance;

- treat descriptive text, contextual properties, extension properties
  and resolved content as untrusted data, and never as instructions, in
  accordance with section 27;

- verify integrity before normalising text for display or processing,
  and never alter a stored Protocol Object, in accordance with section
  27; and

- declare the MPP version or versions it supports.

An implementation MAY claim conformance only for the Protocol Object
types and optional features that it supports, provided those are clearly
declared.

## 19. Object References and Embedding

### Representation Model

MPP uses a constrained hybrid model for representing relationships
between Protocol Objects.

Each Protocol Object is independently identifiable and SHOULD normally
be referenced by their persistent identifiers rather than embedded in
full within another Protocol Object.

A reference MAY include a limited set of additional properties where
these improve:

- human readability;

- portability;

- offline interpretation; or

- integrity verification.

Examples include a human-readable name accompanying an Ecosystem or
Participation Type identifier, a version accompanying a Meaning Profile
identifier, a Relationship Type accompanying an Ecosystem Relationship
identifier, or a content digest accompanying an Evidence identifier.

Where a reference includes both a persistent identifier and additional
descriptive properties, the identifier is authoritative and the
additional properties are informative unless otherwise specified.

### Behavioural Requirements

Implementations SHOULD minimise embedded descriptive metadata and MUST
NOT embed complete supporting Protocol Objects where a persistent
reference is sufficient for interoperability.

This approach keeps MPP payloads compact while preserving object
independence and allowing records to retain essential context when
referenced objects cannot immediately be resolved.

Ecosystem Relationships applicable to an originating Ecosystem are
independently identifiable and MUST NOT be embedded in a Participation
Record where a persistent reference or separate resolution process is
sufficient.

## 20. Participation Record Example

### Example

The following example illustrates a Participation Record conforming to
MPP.

```json
{
  "type": "ParticipationRecord",
  "mppVersion": "1.0",
  "id": "urn:uuid:77bf495d-f8ca-4661-9ed2-5b2c499607de",
  "ecosystem": "urn:mpp:ecosystem:01JQ4C6AQ9H9H30C27Y4HPRT52",
  "participants": [
    {
      "id": "https://orcid.org/0000-0002-1825-0097",
      "roles": [
        "subject",
        "https://journal.example.org/mpp/roles/reviewer"
      ]
    },
    {
      "id": "https://journal.example.org/identifiers/editorial-system",
      "roles": [
        "asserter"
      ]
    }
  ],
  "participationType": "https://example.org/mpp/participation-types/peer-review",
  "participationDescription": "Completed a substantive review of a submitted research paper.",
  "commitmentClasses": [
    "effort",
    "knowledge",
    "standing"
  ],
  "meaningProfile": "https://example.org/mpp/meaning-profiles/verified-peer-review/v1",
  "participationStart": "2026-07-14",
  "participationEnd": "2026-07-28T13:15:00Z",
  "recordCreationTimestamp": "2026-07-28T13:22:14Z",
  "evidence": [
    "urn:uuid:8d5c4515-8985-41f3-9061-78f7d0e280ad"
  ],
  "context": {
    "submissionId": "submission-48372",
    "journal": "Journal of Example Research",
    "reviewRound": 2
  },
  "privacy": {
    "recordVisibility": "public"
  },
  "integrity": {
    "type": "DataIntegrityProof",
    "verificationMethod": "https://journal.example.org/identifiers/editorial-system#key-1",
    "proofValue": "z..."
  }
}
```

This example is also available as a file at
[`examples/peer-review.json`](examples/peer-review.json), together with further
examples in [`examples/`](examples/).

## 21. Minimal Participation Record Example

### Example

The following example illustrates the minimum Participation Record
conforming to MPP.

```json
{
  "type": "ParticipationRecord",
  "mppVersion": "1.0",
  "id": "urn:uuid:3d0b6c11-52af-4a90-9f3e-7c1d84a06e52",
  "commitmentClasses": [
    "effort"
  ],
  "ecosystem": "urn:mpp:ecosystem:01JQ4C6AQ9H9H30C27Y4HPRT52",
  "participants": [
    {
      "id": "participant-123",
      "roles": [
        "subject"
      ]
    },
    {
      "id": "ecosystem-operator",
      "roles": [
        "asserter"
      ]
    }
  ],
  "participationType": "https://example.org/mpp/participation-types/example",
  "participationDescription": "Completed an instance of recognised Participation.",
  "meaningProfile": "https://example.org/mpp/meaning-profiles/example/v1",
  "participationEnd": "2026-08-01",
  "recordCreationTimestamp": "2026-08-01T12:00:03Z"
}
```

This example intentionally omits all optional properties. It illustrates
the minimum information required for a conformant Participation Record.

It is also available as a file at
[`examples/minimal-participation-record.json`](examples/minimal-participation-record.json).

## 22. Participation Record JSON Schema

The JSON Schema for a Participation Record defines the serialisation
requirements for a Participation Record conforming to MPP.

It reflects MPP's constrained hybrid representation model, combining a
compact, interoperable core with optional constrained reference objects.
Ecosystems, Participation Types, Meaning Profiles and Evidence objects
may be represented either by a persistent identifier alone or by a
constrained reference object containing limited informative or
integrity-related metadata.

Each MPP Protocol Object has its own JSON Schema. This section defines
only the schema for Participation Records.

The schema is maintained as a separate file at [`schemas/participation-record.schema.json`](schemas/participation-record.schema.json),
which is the authoritative version. It is identified by the following URL,
at which it is published when version 1.0 is released (see section 28):

    https://fe-lixe.github.io/meaningful-participation/1.0/schemas/participation-record.schema.json

Examples that validate against it are provided in
[`examples/`](examples/).

### Schema notes

#### Structural Validation

The schema enforces the following requirements:

- every Participation Record contains at least one Commitment Class;

- Commitment Classes use the four protocol-defined identifiers;

- every Participant has at least one Role;

- every Participation Record includes `participationEnd`;

- `participationStart` and `participationEnd` are each an RFC 3339
  date-time with a UTC offset or an RFC 3339 full-date, and the record
  creation timestamp is an RFC 3339 date-time;

- exactly one Participant has the asserter Role;

- at least one Participant has the subject Role;

- each Role is either a core Participant Role or an absolute URI;

- the Participation description and informative names are either a
  string or a language map keyed by language tags;

- informative names do not exceed 200 characters and the Participation
  description does not exceed 2,000 characters, in each language;

- Ecosystem, Participation Type, Meaning Profile and Evidence references
  may use either a compact identifier or a constrained reference object;

- embedded reference metadata is limited to properties relevant to
  readability, versioning or integrity;

- Verification and Status Statements are not embedded because they may
  be issued after the immutable Participation Record;

- `mppVersion` is a 1.x version;

- unknown properties are permitted at the top level and in Participant
  and privacy objects, so that Participation Records from later 1.x
  versions validate (see section 28); Ecosystem-specific additions must
  nevertheless use the `extensions` property.

#### Out of Scope

The schema does not validate whether:

- an identifier is genuinely globally unique;

- `participationStart` is not later than `participationEnd`, or
  `participationEnd` is not later than the record creation timestamp;

- the Participation was completed at the time of issuance;

- a `supersedes` property identifies a different, existing Participation
  Record;

- a language tag is a valid, registered BCP 47 language tag;

- a referenced Protocol Object exists or is resolvable;

- an Ecosystem assigned the correct Commitment Classes;

- the Meaning Profile criteria were satisfied;

- Evidence supports the assertion;

- an integrity proof or signature is cryptographically valid; or

- a Participant is authorised to act as the Asserter.

These requirements depend upon object resolution, cryptographic
verification or Ecosystem-specific evaluation beyond structural JSON
Schema validation.

## 23. Ecosystem Relationship JSON Schema

The JSON Schema for an Ecosystem Relationship defines the serialisation
requirements for an Ecosystem Relationship conforming to MPP.

It reflects MPP's constrained hybrid representation model, combining a
compact, interoperable core with optional constrained reference objects.
Source and target Ecosystems and Evidence objects may be represented
either by a persistent identifier alone or by a constrained reference
object containing limited informative or integrity-related metadata.

The schema is maintained as a separate file at [`schemas/ecosystem-relationship.schema.json`](schemas/ecosystem-relationship.schema.json),
which is the authoritative version. It is identified by the following URL,
at which it is published when version 1.0 is released (see section 28):

    https://fe-lixe.github.io/meaningful-participation/1.0/schemas/ecosystem-relationship.schema.json

Examples that validate against it are provided in
[`examples/`](examples/).

### Schema Notes

#### Structural Validation

The Ecosystem Relationship schema enforces the following requirements:

- every Ecosystem Relationship identifies a source Ecosystem and target
  Ecosystem;

- every Ecosystem Relationship contains one Relationship Type, which is
  either a core Relationship Type or an absolute URI;

- every Ecosystem Relationship identifies exactly one Participant whose
  Roles include the asserter Role and do not include the subject Role;

- each Role and each required Verification outcome is either a core
  vocabulary term or an absolute URI;

- the relationship description and informative names are either a
  string or a language map keyed by language tags;

- informative names do not exceed 200 characters and the relationship
  description does not exceed 2,000 characters, in each language;

- Relationship Scope, Evidence, privacy, integrity and extension
  properties are optional;

- Ecosystem and Evidence references may use either a compact identifier
  or a constrained reference object;

- Relationship Scope may describe applicable Participation Types,
  Meaning Profiles, Verification requirements, effective periods and
  domains;

- `mppVersion` is a 1.x version;

- unknown properties are permitted at the top level and in the asserting
  Participant, Relationship Scope and privacy objects, so that Ecosystem
  Relationships from later 1.x versions validate (see section 28); and

- Ecosystem-specific additions must use the `extensions` property.

#### Out of Scope

The schema does not validate whether:

- the source and target identifiers represent different real-world
  Ecosystems;

- a `supersedes` property identifies a different, existing Ecosystem
  Relationship;

- an asserted relationship is factually, organisationally or legally
  valid;

- an Ecosystem-defined Relationship Type is semantically appropriate;

- the asserting Participant is authorised to declare the relationship;

- referenced Evidence supports the relationship;

- a Relationship Scope is appropriate for the selected Relationship
  Type;

- the `effectiveFrom` timestamp precedes `expiresAt`;

- the Relationship Scope effective period falls within the effective
  period of the Ecosystem Relationship;

- another Ecosystem accepts or interprets the relationship;

- an integrity proof or signature is cryptographically valid; or

- the asserted relationship implies any organisational, legal or
  interpretative consequence.

These requirements depend upon object resolution, cryptographic
verification or Ecosystem-specific evaluation beyond structural JSON
Schema validation.

## 24. Vocabularies

### Purpose

MPP defines five controlled vocabularies. Each is published as a
machine-readable [schema.org](https://schema.org/)
[`DefinedTermSet`](https://schema.org/DefinedTermSet) in JSON-LD, in
which every core term is a
[`DefinedTerm`](https://schema.org/DefinedTerm) with a persistent
identifier, a term code, a name and a description.

| Vocabulary | File | Extensible |
| --- | --- | --- |
| Participant Roles | [`participant-roles.jsonld`](vocabularies/participant-roles.jsonld) | Yes |
| Commitment Classes | [`commitment-classes.jsonld`](vocabularies/commitment-classes.jsonld) | No |
| Relationship Types | [`relationship-types.jsonld`](vocabularies/relationship-types.jsonld) | Yes |
| Verification Outcomes | [`verification-outcomes.jsonld`](vocabularies/verification-outcomes.jsonld) | Yes |
| Status Values | [`status-values.jsonld`](vocabularies/status-values.jsonld) | Yes |

### Representation in Protocol Objects

Protocol Objects represent a core term by its term code, for example
`"asserter"` or `"effort"`. They do not embed `DefinedTerm` objects.

The persistent identifier of a core term is the identifier of its
`DefinedTermSet` followed by `#` and the term code.

### Behavioural Requirements

- A core term MUST be represented by its term code exactly as published,
  including case.

- Where a core term applies, it MUST be used in preference to an
  Ecosystem-defined term.

- An Ecosystem-defined term in an extensible vocabulary MUST be
  identified by an absolute URI under the control of the defining
  Ecosystem. It SHOULD resolve to a human-readable or machine-readable
  definition, which MAY itself be published as a `DefinedTerm`.

- An Ecosystem-defined term MUST NOT reuse a core term code and MUST NOT
  redefine the meaning of a core term.

- Ecosystems MUST NOT define additional terms in a vocabulary that is not
  extensible.

- Where a vocabulary file and this specification differ, this
  specification takes precedence.

### Example

The following Participants combine core Roles with an Ecosystem-defined
Role.

```json
{
  "participants": [
    {
      "id": "https://orcid.org/0000-0002-1825-0097",
      "roles": [
        "subject",
        "https://journal.example.org/mpp/roles/reviewer"
      ]
    },
    {
      "id": "https://journal.example.org/identifiers/editorial-system",
      "roles": [
        "asserter"
      ]
    }
  ]
}
```

## 25. Identifiers and Lineage

### Purpose

Every Protocol Object is independently identifiable. Because
Participation Records and Ecosystem Relationships are immutable, each
identifier refers to exactly one version of an assertion. A correction
or other change is a new Protocol Object with a new identifier, linked
to the Protocol Object it replaces through explicit relationships.

### Identifier Requirements

- Every Protocol Object MUST have a persistent, globally unique
  identifier.

- Every new Protocol Object, including one that corrects or replaces
  another, MUST have a new identifier. Identifiers MUST NOT be reused.

- Where an implementation generates UUID-based identifiers, it SHOULD
  express them as `urn:uuid:` URNs and SHOULD use UUID version 7, as
  defined in RFC 9562, unless section 15 indicates otherwise.

- Implementations MUST treat identifiers as opaque. They MUST NOT derive
  time, order, lineage, issuer or any other meaning from the structure
  of an identifier, including the timestamp embedded in a UUID version 7
  identifier.

- The order of Protocol Objects MUST be determined from their explicit
  timestamps, such as the record creation timestamp, rather than from
  their identifiers.

UUID version 7 identifiers are time-ordered, which makes them efficient
to index and convenient to sort within a single implementation. They do
not provide a reliable order across Ecosystems, whose clocks are
independent, and many Protocol Objects use identifiers that are not
UUIDs.

### Lineage

A Participation Record or Ecosystem Relationship MAY include a
`supersedes` property identifying the Protocol Object of the same type
that it replaces.

- A Protocol Object that replaces an earlier Protocol Object SHOULD
  include the `supersedes` property.

- The `supersedes` property MUST identify a Protocol Object of the same
  type, and MUST NOT identify the Protocol Object that contains it.

- The `supersedes` property records an assertion by the asserter of the
  replacing Protocol Object. It MUST NOT be interpreted as changing the
  Status of the Protocol Object it identifies. A change of Status MUST be
  represented through a Status Statement, in accordance with section 14.

- Lineage MUST be determined from `supersedes` properties and Status
  Statements, not inferred from identifiers or timestamps.

- A receiving Ecosystem SHOULD consider whether the asserter of a
  replacing Protocol Object is entitled to replace the Protocol Object
  it identifies.

### Example

The following Participation Record corrects the Participation Record in
section 20. The Status Statement in section 14 records the
corresponding change of Status.

```json
{
  "type": "ParticipationRecord",
  "mppVersion": "1.0",
  "id": "urn:uuid:019fff9a-a240-7a3f-91c2-9e84b7d05f6e",
  "supersedes": "urn:uuid:77bf495d-f8ca-4661-9ed2-5b2c499607de",
  "ecosystem": "urn:mpp:ecosystem:01JQ4C6AQ9H9H30C27Y4HPRT52",
  "participants": [
    {
      "id": "https://orcid.org/0000-0002-1825-0097",
      "roles": [
        "subject",
        "https://journal.example.org/mpp/roles/reviewer"
      ]
    },
    {
      "id": "https://journal.example.org/identifiers/editorial-system",
      "roles": [
        "asserter"
      ]
    }
  ],
  "participationType": "https://example.org/mpp/participation-types/peer-review",
  "participationDescription": "Completed a substantive second-round review of a submitted research paper.",
  "commitmentClasses": [
    "effort",
    "knowledge",
    "standing"
  ],
  "meaningProfile": "https://example.org/mpp/meaning-profiles/verified-peer-review/v1",
  "participationStart": "2026-07-14",
  "participationEnd": "2026-07-28T13:15:00Z",
  "recordCreationTimestamp": "2026-08-14T09:29:12Z",
  "evidence": [
    "urn:uuid:8d5c4515-8985-41f3-9061-78f7d0e280ad"
  ],
  "context": {
    "submissionId": "submission-48372",
    "journal": "Journal of Example Research",
    "reviewRound": 2
  },
  "privacy": {
    "recordVisibility": "public"
  },
  "integrity": {
    "type": "DataIntegrityProof",
    "verificationMethod": "https://journal.example.org/identifiers/editorial-system#key-1",
    "proofValue": "z..."
  }
}
```

It is also available as a file at
[`examples/superseding-record.json`](examples/superseding-record.json).

## 26. Language and Translation

### Purpose

The properties that carry the semantics of a Protocol Object, including
Commitment Classes, Participant Roles, Relationship Types, Verification
outcomes and Status Values, use language-neutral term codes and
identifiers. Only descriptive text needs translation.

### Language Maps

The following properties MAY be represented either as a string or as a
language map:

- the Participation description;

- the relationship description; and

- the informative name of an Ecosystem, Participant or Participation
  Type.

A language map is a JSON object whose keys are language tags and whose
values are the text in each language.

### Language Tags

Language tags MUST conform to BCP 47 (RFC 5646). BCP 47 incorporates
ISO 639: it uses the two-letter ISO 639-1 code where one exists and
three-letter ISO 639-2 or ISO 639-3 codes otherwise, and adds optional
script, region and variant subtags, for example `da`, `en-GB`, `se` or
`zh-Hant-TW`.

### Behavioural Requirements

- Every value in a language map MUST represent the same content in a
  different language.

- A language map MUST include at least one entry.

- Language tags SHOULD use the shortest valid form, for example `da`
  rather than `dan`, and SHOULD include script or region subtags only
  where they are material.

- Where a property is represented as a string, its language is
  unspecified unless indicated by an implementation profile.

- A translation produced after issuance is not a Protocol Object and
  does not constitute a new version of the Protocol Object it renders.
  It SHOULD reference the identifier of that Protocol Object and SHOULD
  include a digest of it. It MUST NOT be presented as part of the issued
  Protocol Object.

- Where an Ecosystem requires a translation to form part of the issued
  assertion, it MUST issue a new Protocol Object in accordance with
  section 25.

### Example

```json
{
  "participationDescription": {
    "en": "Financially supported a media Touchpoint published by a participating outlet.",
    "da": "Støttede økonomisk et medie-Touchpoint udgivet af et deltagende medie."
  }
}
```

## 27. Security Considerations

### Purpose

Protocol Objects are designed to travel beyond the systems in which they
were created, and to be interpreted by systems, including automated and
AI-based systems, that did not create them. A receiving system should
therefore treat every Protocol Object as input from a potentially
untrusted source.

Integrity mechanisms establish who made an assertion and that it has not
been altered. They do not establish that the assertion is true, that its
asserter was entitled to make it, or that its content is safe to
process.

### Trust in Assertions

#### Asserter Authority

- The presence of an Ecosystem identifier in a Participation Record does
  not establish that the asserter is entitled to make assertions on
  behalf of that Ecosystem. Before relying on a Participation Record, a
  receiving Ecosystem SHOULD establish that its asserter is authorised by
  the identified Ecosystem, for example through a verification method
  bound to the Ecosystem identifier in accordance with section 6, or
  through a `delegatesAssertionAuthorityTo` Ecosystem Relationship
  asserted on behalf of that Ecosystem.

- Where an integrity proof is present, a receiving Ecosystem SHOULD
  verify it using a verification method that the asserting Ecosystem has
  bound to its identifier.

#### Ecosystem Impersonation

- Ecosystem identifiers are generated without a central registration
  authority. An identifier or informative name that resembles a known
  organisation does not establish that the Ecosystem is that
  organisation.

- Implementations MUST NOT infer the identity, authority or affiliation
  of an Ecosystem from the text of its identifier or name. They SHOULD
  rely on cryptographic binding in accordance with section 6, together
  with Credentials or other trust that the receiving Ecosystem has
  established.

#### Ecosystem Relationships

- An Ecosystem Relationship asserted by one Ecosystem about another does
  not establish that the other Ecosystem accepts the relationship. A
  receiving Ecosystem SHOULD consider whether each Ecosystem named in the
  relationship has asserted or accepted it.

- A `delegatesAssertionAuthorityTo` relationship SHOULD be relied upon
  only where its asserter is authorised to act for the source Ecosystem.

- Delegated authority MUST NOT be treated as transitive unless the
  relevant Ecosystem Relationships explicitly provide for it.

#### Status, Supersession and Verification

- A Status Statement or `supersedes` property issued by a party other
  than the asserter of the affected Protocol Object could be used to
  suppress or replace legitimate assertions. A receiving Ecosystem SHOULD
  give effect to a Status Statement or `supersedes` property only where
  its issuer is the asserter of the affected Protocol Object or is
  otherwise entitled to act under the governance of the relevant
  Ecosystem.

- A Verification is only as reliable as its verifier. A receiving
  Ecosystem SHOULD evaluate the verifier, the Verification method and the
  stated scope before relying on a Verification outcome.

#### Presentation

- MPP does not bind a Participation Record to the party presenting it.
  Anyone holding a copy of a Participation Record can present it. Where
  it matters to the receiving Ecosystem, the receiving Ecosystem SHOULD
  establish that the presenting party is a Participant assigned the
  `subject` Role, or is authorised by one, for example by authenticating
  the presenting party against the `subject` identifier.

#### Volume of Assertions

- The number of Participation Records associated with a Participant is
  not itself evidence of Meaningful Participation. Ecosystems that issue
  Participation Records freely, or that are created in order to issue
  them, can inflate apparent Participation. Receiving Ecosystems SHOULD
  consider the issuing practices and Meaning Profiles of originating
  Ecosystems when interpreting Participation Records.

### Untrusted Content and Prompt Injection

Protocol Objects contain text written or supplied by people and systems
outside the control of the receiving Ecosystem, including:

- Participation descriptions, relationship descriptions and informative
  names, in every language of a language map;

- contextual and extension properties;

- Status Statement reasons and Meaning Profile criteria; and

- content obtained by resolving references, including Meaning Profiles
  and Evidence.

Where such text is processed by a system that follows natural-language
instructions, such as a large language model, it can be crafted to
influence that system, for example by instructing it to rank, recognise
or reward a Participant. This is known as prompt injection. A valid
integrity proof does not mitigate it: the asserter may be malicious or
compromised, or may have included text supplied by others.

#### Behavioural Requirements

- Implementations MUST treat descriptive text, contextual properties,
  extension properties and resolved content as untrusted data,
  regardless of the integrity, Verification or Status of the Protocol
  Object that contains or references them.

- Systems that interpret Protocol Objects using automated reasoning,
  including large language models, MUST treat such content as data to be
  analysed and MUST NOT follow instructions contained in it.

- Such systems SHOULD keep untrusted content separate from their own
  instructions, and SHOULD identify its source to the reasoning system.

- Decisions with consequences for Participants, including recognition,
  scoring, eligibility and incentives, SHOULD be based on structured,
  language-neutral properties, such as Commitment Classes, vocabulary
  terms, identifiers and Verification outcomes, rather than on
  descriptive text.

- Implementations MUST NOT assume that the values of a language map are
  equivalent, and SHOULD apply the same processing to every value rather
  than only to the value in an expected language.

### Rendering, Storage and Text Handling

#### Behavioural Requirements

- Implementations MUST encode text from Protocol Objects appropriately
  for the context in which it is displayed, and MUST NOT render it as
  markup or executable content.

- Implementations MUST NOT construct queries or commands by
  concatenating text from Protocol Objects, and SHOULD use parameterised
  interfaces.

- Asserters SHOULD normalise text to Unicode Normalization Form C and
  SHOULD NOT include control characters, bidirectional formatting
  characters (U+202A to U+202E and U+2066 to U+2069) or invisible tag
  characters (U+E0000 to U+E007F) in informative names or descriptions.

- Receiving systems SHOULD neutralise such characters when displaying or
  processing text. Because Protocol Objects are immutable and may carry
  integrity proofs, receiving systems MUST verify integrity before any
  such normalisation and MUST NOT alter the stored Protocol Object.

- Informative names can be crafted to resemble other Participants or
  Ecosystems, including through visually similar characters. In
  accordance with section 19, identifiers are authoritative and names
  are informative.

#### Length Limits

| Property | Maximum length |
| --- | --- |
| Informative names of Ecosystems, Participants and Participation Types | 200 characters |
| Participation description and relationship description | 2,000 characters |

- Each value MUST NOT exceed the maximum length in the table above.
  Where a property is represented as a language map, the limit applies
  to each value.

- Length is measured in Unicode code points.

- Implementations MAY apply further limits, including to contextual and
  extension properties and to the overall size of a Protocol Object, and
  MAY decline to process Protocol Objects that exceed them.

### Resolution of References

- Resolving a reference to a Meaning Profile, Evidence object,
  Participation Type or Ecosystem resolution location causes the
  receiving system to make a request to a location chosen by the author
  of the Protocol Object. Implementations SHOULD restrict resolution to
  secure schemes such as HTTPS, SHOULD NOT resolve references to
  loopback, private or link-local addresses, and SHOULD limit redirects,
  response size and response time.

- Referenced content can change after a Protocol Object is issued. Where
  a reference includes a digest, the receiving system SHOULD verify the
  resolved content against it. Asserters SHOULD include digests for
  Meaning Profile and Evidence references where the integrity of the
  referenced content matters to the assertion.

- Resolving a reference can disclose to the operator of the referenced
  location that a Protocol Object is being evaluated, and by whom.
  Receiving systems SHOULD consider this disclosure, in accordance with
  section 15.

- Resolved content is untrusted content and is subject to the
  requirements of this section.

## 28. Versioning and Publication

### Version Numbers

MPP versions are numbered MAJOR.MINOR, for example `1.0`. Every
Protocol Object states the version to which it conforms in its
`mppVersion` property.

### Compatibility

- A minor version MUST be backward compatible with earlier minor
  versions of the same major version. It MAY add optional properties and
  clarify existing text. It MUST NOT add required properties, remove
  properties, or change the meaning of existing properties or terms.

- Core vocabulary terms, including Commitment Classes, Participant
  Roles, Relationship Types, Verification outcomes and Status Values, are
  added, removed or changed only in a new major version.

- A major version MAY make incompatible changes.

- An implementation that supports a minor version of a major version
  MUST accept Protocol Objects that state any minor version of that
  major version. It MUST ignore properties that it does not support, in
  accordance with section 18.

- Properties not defined by this specification are reserved for future
  versions of MPP. Ecosystems MUST NOT add them, and MUST use the
  `extensions` property instead, in accordance with section 17.

### Published Artefacts

The JSON Schemas, vocabularies and other machine-readable artefacts of
each version are published at:

    https://fe-lixe.github.io/meaningful-participation/<version>/

for example
`https://fe-lixe.github.io/meaningful-participation/1.0/schemas/participation-record.schema.json`.

- The artefacts of a version MUST NOT be changed after publication.
  Corrections are published as a new version.

- The identifiers of schemas, vocabularies and vocabulary terms include
  the version in which they were published, and remain valid after
  later versions are published.

- These locations are interim. If MPP adopts a permanent domain or
  permanent-identifier service, artefacts already published will remain
  available at the locations above.
