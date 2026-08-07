# Meaningful Participation Reference Architecture (MPRA)

**Version 0.1**

## Overview

The Meaningful Participation Reference Architecture (MPRA) provides a conceptual framework for designing digital ecosystems that recognise, represent, interpret and incentivise Meaningful Participation.

MPRA separates these concerns into distinct architectural layers, allowing ecosystems to adopt existing standards where appropriate while introducing new components only where necessary.

The architecture is technology neutral and may be implemented using centralised, federated or decentralised infrastructure.

The Meaningful Participation Protocol (MPP) provides the protocol specification for the Participation layer described by this architecture.

---

## Why MPRA?

Many digital ecosystems depend upon valuable contributions from participants. These contributions may include creating knowledge, providing expertise, volunteering, investing resources, mentoring others, moderating communities or contributing content.

While identity, credentials and incentives are common concepts, there has historically been no standard way to represent Meaningful Participation itself. As a result, participation histories are typically fragmented across platforms, difficult to reuse and controlled by proprietary systems.

MPRA addresses this gap by separating the representation of participation from its interpretation.

---

## The Five Layers

### 1. Identity

Establishes who or what is participating.

Identity may represent people, organisations, software agents, devices or other recognised participants.

Existing identity systems may be used, including decentralised identifiers, public key infrastructure, organisational identity systems and national identity schemes.

### 2. Credentials

Establishes why a participant is authorised, qualified or otherwise recognised to participate.

Credentials may include qualifications, certifications, licences, memberships, organisational affiliations or other verifiable claims.

MPRA does not prescribe a credential standard and is compatible with existing credential ecosystems.

### 3. Participation

Represents recognised instances of Meaningful Participation.

This layer is standardised through the Meaningful Participation Protocol (MPP), which defines portable Participation Records, Ecosystem Relationships and supporting Protocol Objects.

MPP standardises representation while allowing every ecosystem to determine what constitutes Meaningful Participation.

### 4. Interpretation

Determines how Participation Records are evaluated within a particular ecosystem.

Interpretation may include:

- interoperability policies;
- participation graphs;
- weighting models;
- reputation models;
- eligibility rules;
- recommendation systems; and
- other ecosystem-specific decision models.

Interpretation remains entirely under the control of each ecosystem.

### 5. Incentives

Uses the outputs of Interpretation to influence future participation.

Examples include:

- recognition;
- rewards;
- access;
- reputation;
- responsibilities;
- governance;
- funding;
- progression; and
- other ecosystem-defined outcomes.

MPRA intentionally separates incentives from representation, allowing different ecosystems to encourage different forms of participation while sharing a common representation.

---

## Design Principles

MPRA is based upon five core principles.

### Representation, Not Interpretation

Participation should be represented consistently without prescribing how it should be interpreted.

### Ecosystem Sovereignty

Every ecosystem remains free to determine what participation it recognises and how it values it.

### Participant Agency

Participants should be able to carry portable records of their Meaningful Participation between ecosystems.

### Interoperability

Common representations enable participation to be recognised across otherwise independent ecosystems.

### Technology Neutrality

MPRA does not prescribe implementation technologies or governance models.

---

## Relationship to MPP

MPRA defines the overall architectural model.

MPP defines the protocol used within the Participation layer.

The protocol does not define identity systems, credential standards, participation graphs, interoperability policies or incentive mechanisms. These remain responsibilities of the surrounding architecture.

---

## Status

MPRA is published as an open reference architecture to encourage discussion, experimentation and implementation.

Future versions may evolve independently of the Meaningful Participation Protocol while maintaining architectural compatibility.
