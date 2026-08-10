# Meaningful Participation

**Open infrastructure for recognising what matters across ecosystems**

Participatory ecosystems — including organisations, sectors, networks, communities, teams and digital platforms — depend on valuable contributions. Yet there is no common way to represent the participation they consider meaningful in a form that can be recognised across ecosystem boundaries.

This repository develops open infrastructure for representing **Meaningful Participation** in a portable, interoperable and independently verifiable way.

It contains two related components:

- **Meaningful Participation Reference Architecture (MPRA)** — a reference architecture for designing ecosystems around five layers: Identity, Credentials, Participation, Interpretation and Incentives.
- **Meaningful Participation Protocol (MPP)** — an open protocol within the Participation layer for representing Meaningful Participation through portable Participation Records and Ecosystem Relationships.

The central principle is simple:

> **Representation should be standardised. Meaning should not be.**

MPP provides a common way to represent participation while leaving each ecosystem free to decide what participation it considers meaningful, what external records it recognises, how it interprets them and what incentives follow.

## Start Here

| Resource | Purpose |
| --- | --- |
| [Working Paper](RECOGNISING-WHAT-MATTERS-v0.1.md) | Introduces the problem, MPRA, MPP and what they could make possible |
| [MPRA](MPRA.md) | Defines the five-layer Meaningful Participation Reference Architecture |
| [MPP Specification](SPECIFICATION.md) | Defines the normative requirements of the Meaningful Participation Protocol |
| [Schemas](schemas/) | JSON Schemas for each Protocol Object, extracted from the specification |
| [Examples](examples/) | Example Participation Records and Ecosystem Relationships |
| [Contributors](CONTRIBUTORS.md) | Recognises Meaningful Participation in the development of this repository |
| [Licence](LICENSE) | Terms under which repository materials may be used |

If you are new to the project, the **Working Paper** is the best place to begin. Implementers should then refer to the **MPP Specification**.

## Why Meaningful Participation?

Most systems are much better at recording **presence, activity and credentials** than they are at representing what someone actually contributed.

A professional profile might show where somebody worked and what qualifications they hold. A platform might record posts, clicks, transactions or reputation scores. An organisation might record job titles and performance ratings.

These representations are usually ecosystem-specific and difficult to carry elsewhere.

MPP explores a different model:

> **What did a Participant contribute, why did an Ecosystem consider it meaningful, and what evidence supports that assertion?**

A Participation Record can represent that contribution without requiring another ecosystem to agree with the originating ecosystem's interpretation of it.

The receiving ecosystem remains free to decide whether the record matters in its own context.

## The Architecture

MPRA separates Meaningful Participation into five layers:

1. **Identity** — Who are you?
2. **Credentials** — What are you qualified, authorised or entitled to do?
3. **Participation** — What have you contributed?
4. **Interpretation** — What does that participation mean here?
5. **Incentives** — What recognition, access, opportunity or reward follows?

MPP standardises part of the **Participation** layer.

It does not attempt to create a universal reputation system, scoring model or definition of valuable behaviour.

## What MPP Represents

MPP currently defines two primary protocol objects:

### Participation Records

Portable assertions about Meaningful Participation.

Participation Records can represent commitments of:

- **Capital**
- **Effort**
- **Knowledge**
- **Standing**

These Commitment Classes describe what a Participant committed through an instance of participation. They do not determine how valuable that participation is.

### Ecosystem Relationships

These represent relationships between ecosystems that may affect how Participation Records are created, recognised or exchanged.

They enable ecosystems to represent structures such as membership, delegation and interoperability relationships without requiring a universal ecosystem hierarchy.

## Where It Could Be Used

Meaningful Participation is intended to be general-purpose. Potential application domains include:

- civic participation;
- companies and professional ecosystems;
- education;
- media;
- open-source software;
- professional communities;
- scientific collaboration;
- sport;
- volunteering; and
- other ecosystems in which participants make contributions that matter.

The same Participation Record may be interpreted differently by different ecosystems.

That is intentional.

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

See [CONTRIBUTORS.md](CONTRIBUTORS.md) for how contributions are recognised.

## Status

MPP and MPRA are under active development.

The current materials should be treated as working specifications and proposals rather than established standards. Feedback, testing and implementation experiments are encouraged.

---

**Steward:** [Felixe](https://felixe.com)
