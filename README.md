# Meaningful Participation

> **Experimental draft — open for critique**

> This repository contains a proposed approach to meaningful participation that is under active development. It is not a final standard and is not currently intended as a recommendation that organisations adopt or implement.

> It is published to invite critique, experimentation, implementation feedback and contributions from different ecosystems. The ideas, architecture and any emerging specifications may change substantially as a result.

> You can use the materials herein as a conceptual framework without adopting or implementing the architecture and protocol they propose.

**Open infrastructure for recognising what matters across ecosystems**

Participatory ecosystems - including organisations, sectors, networks, communities, teams and digital platforms - depend on valuable contributions. Yet there is no common way to represent the participation they consider meaningful in a consistent, verifiable form that can be recognised across ecosystem boundaries.

The Meaningful Participation Protocol (MPP) explores a simple proposition:

> **If meaningful participation can be represented consistently, ecosystems can become better at recognising, interpreting and incentivising the contributions they value**.

This repository develops open infrastructure for representing Meaningful Participation in a portable, interoperable and independently verifiable way.

It contains two related components:

- **Meaningful Participation Reference Architecture (MPRA)** - a reference architecture for designing ecosystems around five layers: Identity, Credentials, Participation, Interpretation and Incentives.
- **Meaningful Participation Protocol (MPP)** - an open protocol within the Participation layer for representing Meaningful Participation through portable Participation Records and Ecosystem Relationships.

The central principle is simple:

> **Representation should be standardised. Meaning should not be.**

MPP provides a common way to represent participation while leaving each ecosystem free to decide what participation it considers meaningful, what external records it recognises, how it interprets them and what incentives follow.

## Start Here

| Resource | Purpose |
| --- | --- |
| [Working Paper](RECOGNISING-WHAT-MATTERS-v0.1.md) | Introduces the problem, MPRA, MPP and what they could make possible |
| [MPRA](MPRA.md) | Defines the five-layer Meaningful Participation Reference Architecture |
| [MPP Specification](SPECIFICATION.md) | Defines the normative requirements of the Meaningful Participation Protocol |
| [Schemas](schemas/) | Includes JSON Schemas for each Protocol Object, extracted from the specification |
| [Examples](examples/) | Includes example Participation Records and Ecosystem Relationships |
| [Contributors](CONTRIBUTORS.md) | Recognises Meaningful Participation in the development of this repository |
| [Governance](GOVERNANCE.md) | Describes stewardship, decision-making, openness and the relationship between MPP and commercial implementations |
| [Licence](LICENSE) | Includes terms under which repository materials may be used |

If you are new to the project, the **Working Paper** is the best place to begin. Implementers should then refer to the **MPP Specification**.

## Why Meaningful Participation?

Ecosystems depend on participation to achieve their objectives. Yet the participation they measure, recognise and reward is often what is easiest to observe rather than what creates the most value.

A digital platform might optimise for clicks, posts or transactions. An organisation might recognise outputs while overlooking mentoring, knowledge-sharing or relationship-building. A community might count activity without distinguishing between participation that strengthens the community and participation that merely generates more activity.

This creates an incentive problem: **what an ecosystem chooses to recognise helps determine what participants are encouraged to do.**

Meaningful Participation describes participation that an ecosystem considers valuable in advancing its objectives. What qualifies is deliberately not universal: the same participation may be highly meaningful in one ecosystem, marginal in another and irrelevant in a third.

MPP provides a common way to represent such participation and the evidence supporting it while keeping interpretation with the ecosystem.

> **MPP standardises the representation of Meaningful Participation, not its meaning**

A Participation Record can therefore travel beyond the ecosystem in which it originated without requiring another ecosystem to accept the originating ecosystem's interpretation. A receiving ecosystem remains free to recognise, reinterpret or disregard it according to its own objectives.

## The Architecture

MPRA separates Meaningful Participation into five layers:

1. **Identity** - Who are you?
2. **Credentials** - What are you qualified, authorised or entitled to do?
3. **Participation** - What did you commit or contribute?
4. **Interpretation** - What does that participation mean here?
5. **Incentives** - What recognition, access, opportunity or reward follows?

MPP standardises part of the **Participation** layer.

It does not attempt to create a universal reputation system, scoring model or definition of valuable behaviour.

## What MPP Represents

MPP currently defines two primary protocol objects:

### Participation Records

Participation Records classify participation according to what the Participant committed:

- **Capital** - Financial or other economic resources committed through participation.
- **Effort** - Time, attention or labour committed through participation.
- **Knowledge** - Information, expertise, insight or intellectual contribution committed through participation.
- **Standing** - Reputation, relationships, authority or social position put behind an ecosystem, participant or activity.

These four Commitment Classes provide a common vocabulary for describing what a Participant put into an instance of participation. They do not determine whether the participation was valuable or how much value it created; those judgements remain ecosystem-specific.

### Ecosystem Relationships

These represent relationships between ecosystems that may affect how Participation Records are created, recognised or exchanged.

They enable ecosystems to represent structures such as membership, delegation and interoperability relationships without requiring a universal ecosystem hierarchy.

## Where It Could Be Used

Meaningful Participation is intended to be general-purpose. Its concepts may be applicable across organisations, communities, sectors, networks and digital platforms - from companies, education and scientific collaboration to media, open-source software and civic participation.

The same Participation Record may be interpreted differently by different ecosystems. That is intentional.

## An Open Reference, Not a Prescription ##

MPP is published openly to make the underlying ideas available for critique, experimentation, adaptation and reuse. It can be used as a design framework and source of hypotheses without requiring adoption or implementation of the protocol. Likewise, MPP does not depend on widespread adoption to be useful.

Applying these ideas to real-world ecosystems - conceptually or through implementation - may also reveal where the protocol should change.

## This Repository Is Also an Experiment

Where practical, this repository aims to apply the principles it proposes.

`CONTRIBUTORS.md` therefore does more than acknowledge authorship. It maintains a simple human-readable representation of Meaningful Participation in the development, testing, critique, documentation and stewardship of the project.

This is intentionally a primitive implementation rather than a claim of full MPP conformance. As the protocol develops, these records may evolve towards machine-readable Participation Records.

## Contributing

MPP is being developed openly.

We welcome:

- challenges to the architecture or protocol;
- proposed improvements;
- relevant research and standards;
- implementation experience;
- examples from different ecosystems;
- technical contributions;
- critiques and edge cases; and
- proposed changes to repository materials.

Open an **Issue** to raise a question, critique or proposal. Submit a **Pull Request** to propose a specific change.

A contribution does not necessarily need to be accepted into the repository to constitute Meaningful Participation. Contributions may be recognised where they materially improve, test or challenge the work.

See `CONTRIBUTORS.md` for how contributions are recognised.

## Open Stewardship ##

MPP and MPRA are open initiatives stewarded by [Felixe](https://felixe.com). Felixe may develop commercial implementations informed by MPP, as may other organisations; stewardship does not confer exclusive rights over the published protocol.

Governance, commercial separation, contributions, decision-making and protections for continued open use are described in `GOVERNANCE.md`.

## Status

MPP and MPRA are under active development.

They are intentionally published at this stage to enable their ideas to be explored, tested, challenged and improved across different ecosystems. Feedback, testing and implementation experiments are encouraged.
