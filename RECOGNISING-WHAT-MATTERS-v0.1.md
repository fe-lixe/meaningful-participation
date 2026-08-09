# Recognising What Matters
## An Open Architecture for Meaningful Participation Across Ecosystems

**Working Paper v0.1**  
**Author:** Jason Lambert  
**Steward:** [Felixe](https://felixe.com)  
**Target v1.0 publication:** 30 August 2026

## About This Working Paper

This is a working version of Recognising What Matters, published openly to invite review, critique and contribution.

We aim to publish v1.0 on 30 August 2026. At that point, contributions accepted during this review period will be incorporated into a designed PDF edition, creating the first stable publication of the white paper. The Markdown version will remain available as part of the project's open record.

### How to Contribute

We welcome challenges to the ideas presented here, suggested improvements, relevant research and standards, applications to new ecosystems, examples from different domains, and proposed changes to the text.

- Open an Issue to raise a question, critique, suggestion or area for discussion.
- Submit a Pull Request to propose a specific change to the paper.
- Join an existing Issue or Pull Request to contribute to an ongoing discussion.

Not sure where to start? This paper and the accompanying specification have been written to be semantically rich and readily explored by both humans and AI systems. Give a capable AI assistant the URL for this repository - or upload the white paper and specification - and ask:

> “What is the relevance of MPRA and MPP to my organisation, sector, community or ecosystem?”

You can then ask it to identify forms of Meaningful Participation that may currently go unrecognised, opportunities for participant portability and ecosystem interoperability, and ways in which different recognition or incentive models might strengthen your ecosystem. If the analysis surfaces something interesting, we encourage you to bring it back to the repository as an Issue, example or proposed contribution.

Appendix A provides additional questions and prompts for exploring MPRA and MPP with AI.

Proposed changes do not automatically become part of the paper. Contributions will be reviewed by the project maintainers and may be discussed, revised, accepted or declined before inclusion.

Contributions intended for consideration in v1.0 should be submitted before 30 August 2026.

As an initial demonstration of the protocol proposed in this paper, we will manually create Participation Records recognising contributors and the commitments they make to this process. These may include commitments of **Effort, Knowledge, Standing and Capital**, supported where appropriate by evidence such as Issues, Pull Requests, reviews, public endorsements or other contributions.

Contributors may choose whether and how they are publicly profiled. See **`CONTRIBUTORS.md`** for contributor profiles and Participation Records.

After v1.0, the repository will remain open for discussion and future development of the ideas, architecture and protocol.

## Executive Summary

Participatory ecosystems - including societies, organisations, sectors, networks, communities, teams and digital platforms - depend on valuable contributions. Yet there is no common standard for recognising and representing the participation that ecosystems consider valuable in advancing their objectives. Throughout this paper, such participation is referred to as Meaningful Participation.

This structural gap makes Meaningful Participation difficult to retain, recognise or reuse beyond the ecosystem in which it occurs. Each ecosystem develops its own representations and measures, while participants have limited ability to carry meaningful records of their contributions with them. As increasingly capable AI systems reshape how humans and agents contribute, the need for better ways to recognise human contribution - and for people to retain agency over how their participation is represented and shared - becomes increasingly urgent.

This paper introduces the **Meaningful Participation Reference Architecture (MPRA)**, comprising five distinct but interconnected layers: Identity, Credentials, Participation, Interpretation and Incentives. Together, these provide a way of thinking about how ecosystems can identify participants, establish relevant credentials, represent participation, interpret its meaning and align incentives with the behaviours and outcomes they value.

For the Participation layer, the paper proposes the **Meaningful Participation Protocol (MPP)**: an open protocol for representing Meaningful Participation in a form that supports participant portability, ecosystem interoperability and independent verification. MPP separates the representation of participation from its interpretation. It allows participation to be recorded consistently without prescribing what that participation should mean, how it should be valued or how it should be rewarded by any ecosystem.

Together, MPRA and MPP are designed to enable:

- **Participant agency** - giving participants greater control over how their Meaningful Participation is represented, retained and shared.
- **Portability and interoperability** - enabling participants to carry records of Meaningful Participation between ecosystems **(portability)**, while enabling ecosystems to recognise and work with participation originating elsewhere according to their own policies **(interoperability)**.
- **Broad applicability** - providing an architecture that can be applied across very different participatory ecosystems, from organisations and industries to communities, digital platforms and societies.

These capabilities are means rather than ends. By making Meaningful Participation more visible, portable and useful, this work ultimately seeks to:

- **Strengthen recognition of human contribution**, particularly as increasingly capable AI systems reshape how humans and agents participate in economic and social life.
- **Improve incentive design**, helping ecosystems recognise and encourage the behaviours that advance their objectives while contributing positively to wider human flourishing.
- **Address damaging systemic imbalances** by giving ecosystems better ways to recognise, value and incentivise forms of participation that are beneficial to their participants and society - particularly where prevailing incentives reward behaviours that produce harmful long-term outcomes.

MPRA and MPP are presented as open work for experimentation, implementation and further development. Rather than defining what meaningful participation should be, they provide infrastructure through which different ecosystems can make that determination for themselves, enabling participants a greater role in carrying the resulting record of their contributions with them.

## A Missing Layer in Digital Infrastructure

The next generation of digital infrastructure should do more than connect people. It should help us cooperate in ways that strengthen the ecosystems we depend on. While the internet transformed the way information, identity and commerce scale, it has largely failed to provide common infrastructure for recognising participation and aligning incentives with long-term ecosystem health. As a result, many digital ecosystems optimise for activity rather than contribution, and extraction rather than value creation. These outcomes are not inevitable; they are consequences of the architectures and incentives we choose to build. By redesigning those foundations, digital systems can better support cooperation at scale.

This paper argues that digital infrastructure is missing a common Participation layer: an open way of representing participation that supports portability for participants and interoperability between ecosystems, while each ecosystem maintains complete freedom to interpret and value that participation according to its own objectives.

Over the past three decades, digital infrastructure has transformed how people communicate, learn, create, collaborate and exchange value. Today, an increasing proportion of our work, creativity, learning, governance and commerce takes place through digital participation within online ecosystems.

Every digital ecosystem depends on participation. Media outlets rely on readers, contributors and subscribers. Open-source software depends on developers and maintainers. Educational platforms depend on learners and educators. Scientific research depends on distributed collaboration. Online communities depend on moderators, volunteers and subject experts. Sports teams depend on coaches, competitors and fans. Religions depend on worshippers, religious leaders and communities of service. Across every domain, participation creates value that extends well beyond individual transactions.

As participation has become increasingly important, every ecosystem has developed its own ways of representing it. Different platforms define participation differently, using proprietary terminology, data structures and scoring models to capture the behaviours they value. Most spoken languages have tens of thousands of verbs to describe actions. Participation histories therefore remain confined within the ecosystems in which they were created. A participant's contributions in one ecosystem are rarely understandable or reusable in another, even when they demonstrate similar forms of commitment. Participation itself is not the only information that remains fragmented. Relationships between ecosystems are also typically represented through proprietary organisational structures, bilateral agreements or application-specific configuration. As a result, participation may be technically portable while remaining difficult for another ecosystem to recognise consistently.

Portability alone is therefore insufficient. Participants need the ability to carry Participation Records between ecosystems, while receiving ecosystems need ways to determine whether and how those records can interoperate with their own systems and policies.

This stands in contrast to many other areas of digital infrastructure. Open standards have enabled identity, payments, messaging and, increasingly, Verifiable Credentials to become portable and interoperable across systems. Participation, despite becoming one of the most valuable forms of digital activity, remains largely proprietary. For many organisations, participation data represents a strategic asset that supports product differentiation, user retention and competitive advantage. As a result, there has been little incentive for individual platforms to develop common representations that benefit the wider digital economy.

This is less a market failure than a coordination problem. Like many foundational internet standards before it, an interoperable Participation layer is more likely to emerge through open collaboration than through any individual commercial platform.

Although this paper refers to digital ecosystems, participation need not occur exclusively online. Offline activities can also be represented once they have been digitally evidenced and verified. The challenge is therefore not where participation occurs, but how it can be represented consistently and exchanged across digital systems.

## Why a Participation Layer Matters

The consequences of an absent Participation layer extend beyond technical fragmentation. Individuals repeatedly rebuild their participation histories because evidence of their contributions remains confined within individual platforms. Organisations - not participants - typically determine how participation is represented, retained and reused. At the same time, organisations increasingly need to recognise contributions that occur across multiple ecosystems rather than within isolated systems.

Participation is increasingly becoming one of the primary ways in which value is created within digital ecosystems. While financial transactions remain important, many of the activities that sustain successful ecosystems occur beyond traditional markets. People contribute knowledge, create content, moderate communities, mentor others, review work, fund initiatives and build shared resources. These contributions generate economic, social and civic value, yet they are typically recognised only within the ecosystems where they occur.

Unlike identity or credentials, participation is dynamic. It accumulates throughout a participant's lifetime, reflects ongoing commitment rather than static attributes, and often spans multiple organisations, communities and domains. As more digital ecosystems emerge, the ability to recognise participation across them becomes increasingly valuable.

A common Participation layer would enable both participant portability and ecosystem interoperability. Participants could carry evidence of their Meaningful Participation under their own control, while ecosystems could recognise contributions originating elsewhere according to their own policies.

These capabilities depend upon two complementary Protocol Objects: **Participation Records**, which participants can carry between ecosystems, and **Ecosystem Relationships**, which describe relationships between ecosystems that may inform interoperability policies.

## Why Now?

Several technological and societal developments have created a unique opportunity for a common Participation layer to emerge.

### Technological Convergence

Artificial intelligence is dramatically increasing the volume of digital content and automated activity. Generative AI has been adopted at unprecedented speed, while increasingly capable AI systems now contribute to content creation, software development, research and knowledge work. As digital ecosystems become populated by both human and machine-generated activity, authentic human participation becomes a more valuable signal. Demonstrating commitment, expertise and contribution is therefore becoming more important, not less.[^1]

### Societal Convergence

Participation itself has become central to digital life. Creator economies, open-source software, online education, citizen science and collaborative research have matured into significant economic and social structures. Increasingly, value is created not only through transactions, but through sustained participation by communities of contributors, reviewers, moderators, mentors and supporters. Yet the evidence of these contributions remains fragmented across thousands of independent platforms, limiting its reuse beyond the ecosystems in which it was created.

### Infrastructure Convergence

The supporting infrastructure has matured. Decentralised Identifiers (DIDs), Verifiable Credentials and digital identity wallets have established open foundations for representing identity and recognised claims in portable, interoperable ways. A Participation layer can now complement this emerging infrastructure by representing what participants contribute alongside who they are and the recognised claims they hold.

### Institutional Convergence

Digital collaboration increasingly spans multiple organisations, platforms and communities rather than occurring within isolated systems. Organisations increasingly need to recognise contributions that originate beyond their own ecosystems, while also establishing explicit relationships describing when participation from another ecosystem should be recognised or when assertion authority may be delegated. Participants also expect greater control over their digital identities, credentials and personal data. Extending these principles to participation enables ecosystems to recognise contributions originating elsewhere while allowing participants to control how evidence of those contributions is shared and reused.

Together, these developments create a unique opportunity to establish participation as an interoperable layer of digital infrastructure.

## Why Open Protocols Matter

The internet has grown through open infrastructure. Open protocols for the web, email, domain names, messaging and digital identity have enabled interoperability across organisations, platforms and technologies while allowing innovation to flourish above shared foundations. A Participation layer would benefit from the same protocol-based approach, providing shared infrastructure for representing both Meaningful Participation and the relationships between ecosystems that can support interoperability.

Participants gain portability by carrying Participation Records; ecosystems gain interoperability by adopting a common representation and applying their own policies to records originating elsewhere.

Protocols succeed when they standardise representation and exchange while leaving interpretation to applications. The same principle applies to participation.

An open Participation layer offers several advantages. Implemented through an open protocol, it provides a neutral foundation that can be adopted by organisations with different objectives and governance models. It enables participants to carry and selectively disclose evidence of participation between ecosystems instead of rebuilding their histories within every platform. As more organisations adopt a common representation, the value of participation records increases through network effects, making them more useful to both participants and ecosystems.

Network effects are particularly important for open participation infrastructure. A participation record created within one ecosystem has limited value if it can only be understood within that ecosystem. However, as more organisations adopt a common protocol for representing participation, the utility of those records increases for everyone. Participants can demonstrate contributions across a wider range of ecosystems and organisations can recognise participation originating elsewhere through explicit Ecosystem Relationships rather than proprietary bilateral integrations. Like many open internet standards, the value of such a layer therefore grows with each additional implementation, creating a shared participation infrastructure that benefits the broader digital economy rather than any single organisation.

Open governance is equally important. As with other foundational internet infrastructure, the protocol governing a Participation layer should be openly specified and developed through transparent governance. No single organisation should define what participation means across society. A Participation layer should therefore standardise only the representation of participation and Ecosystem Relationships, leaving every ecosystem free to determine what it recognises, how it verifies contributions and how it designs incentives.

The broader digital landscape is also evolving towards greater participant agency. Initiatives such as the European Digital Identity Wallet, Verifiable Credentials and personal data store architectures increasingly seek to give individuals greater control over their identities, credentials and personal information. A Participation layer naturally extends this trajectory by enabling participants to carry and selectively share evidence of participation across ecosystems, while preserving each ecosystem's ability to interpret that participation according to its own objectives.

By standardising the representation of Participation Records and Ecosystem Relationships through an open protocol, a participation layer would encourage innovation in interpretation models, incentive systems and ecosystem design while reducing unnecessary duplication of foundational infrastructure.

## Proposing the Meaningful Participation Reference Architecture (MPRA)

Digital ecosystems increasingly comprise multiple interoperable layers rather than monolithic platforms. Identity has already emerged as mature layer supported by widely adopted standards and protocols, while standards in the Credentials layer are gaining traction. Participation, however, remains tightly coupled to proprietary applications, where its representation, interpretation and incentives are typically inseparable. This paper proposes a new Meaningful Participation Reference Architecture (MPRA) that separates these concerns into five distinct technology layers: Identity, Credentials, Participation, Interpretation and Incentives.

By separating these layers, MPRA enables portability where participants benefit from carrying information between ecosystems, and interoperability where ecosystems benefit from shared infrastructure, while retaining complete control over how participation is interpreted and how future behaviour is encouraged.

| Layer | Purpose |
| --- | --- |
| Identity | Who is participating? |
| Credentials | What recognised attributes do they possess? |
| Participation | What has the participant done? |
| Interpretation | What does that participation mean here? |
| Incentives | How should future behaviour be encouraged? |

### Identity

The Identity layer establishes who is participating within an ecosystem. It enables people, organisations and, increasingly, software agents to be identified consistently across digital services. Over the past three decades, digital identity has evolved into one of the most mature layers of digital infrastructure through widely adopted standards and interoperable technologies.

Identity may be established using traditional username and password systems, enterprise Single Sign-On (SSO), social identity providers, national digital identity schemes such as [MitID](https://www.mitid.dk/en-gb/) and the European Union's [eIDAS framework](https://digital-strategy.ec.europa.eu/en/policies/eidas-regulation). The emerging [European Digital Identity Wallet (EUDI Wallet)](https://digital-strategy.ec.europa.eu/en/policies/eudi-wallet-implementation) extends this model by enabling participants to securely identify themselves and present digital credentials across borders and services. Decentralised approaches based on [W3C Decentralized Identifiers (DIDs)](https://www.w3.org/TR/did-core/) and digital wallets further strengthen participant agency and interoperability. Federated identity standards such as [OpenID Connect](https://openid.net/developers/how-connect-works/) and [OAuth 2.0](https://oauth.net/2/) enable participants to authenticate securely across multiple services, while authentication technologies developed by the [FIDO Alliance](https://fidoalliance.org/) increasingly reduce reliance on passwords.

Collectively, these technologies have transformed identity from an application-specific capability into shared digital infrastructure. Although implementations continue to evolve, the fundamental challenge of identifying participants is now supported by mature standards, broad industry adoption and growing interoperability across centralised, federated and decentralised architectures.

### Credentials

The Credentials layer establishes what recognised attributes a participant possesses. While Identity answers who is participating, Credentials provide verifiable assertions about qualifications, memberships, permissions, certifications, achievements, affiliations and other recognised characteristics that influence how a participant is treated within an ecosystem. Participants may include individuals, organisations, teams, products, services or other recognised entities.

Credentials have traditionally existed as physical or digitally issued documents, including passports, driving licences, educational qualifications, professional licences, memberships and certifications. Increasingly, these credentials are becoming portable and independently verifiable through open standards. The [W3C Verifiable Credentials Data Model](https://www.w3.org/TR/vc-data-model-2.0/) provides a common framework for issuing, presenting and verifying digital credentials, while the [Open Badges 3.0](https://openbadges.org/) specification extends this model for educational achievements, skills and micro-credentials by aligning digital badges with Verifiable Credentials.

Interoperable credential ecosystems are already emerging across education, government and industry. Universities and the [Digital Credentials Consortium](https://dcconsortium.org/) are developing shared infrastructure for portable academic credentials, while online learning providers such as [Coursera](https://www.coursera.org/) issue Open Badges that can be independently verified and shared beyond the learning platform. Governments are progressively adopting digital credentials for identity documents, licences and permits, while professional bodies increasingly issue digitally verifiable memberships and certifications. Organisations also represent certifications and standards digitally, including quality, security and environmental standards such as ISO certifications, allowing organisational attributes to become portable and independently verifiable alongside individual credentials.

Collectively, these developments demonstrate that portable credentials are becoming a mature layer of digital infrastructure. Although implementations continue to evolve, the combination of open standards, trusted issuers and growing interoperability enables recognised attributes to move increasingly independently of the applications in which they were originally issued.

### Participation

The Participation layer establishes what participants do within and across ecosystems. Unlike Identity and Credentials, which represent relatively stable information, Participation encompasses an evolving history of actions, interactions and contributions made by people, organisations and increasingly autonomous software agents. It is through participation that ecosystems create value, build relationships, exchange knowledge and pursue shared objectives.

Participation extends far beyond online activity. It may begin offline through attending an event, mentoring a colleague, purchasing a ticket, volunteering, coaching a sports team, donating to a charitable cause, conducting scientific research or participating in civic life. Once digitally represented, these activities add to a participation history. Online, participation may include creating content, publishing software, contributing to discussions, completing courses, moderating communities, making financial contributions, voting, collaborating, reviewing, recommending, purchasing, subscribing, sharing information or interacting with intelligent software agents. It may also include associated behavioural information, supporting evidence and contextual metadata.

Participation is therefore represented in countless ways across today's digital infrastructure. Social networking protocols such as [ActivityStreams 2.0](https://www.w3.org/TR/activitystreams-core/) and [ActivityPub](https://www.w3.org/TR/activitypub/) define standard representations for social activities within federated networks. Decentralised social protocols including [AT Protocol]([https://nostr.com/](https://atproto.com/) and [Nostr](https://nostr.com/) provide new approaches to participant-controlled social interaction and portability. Software development platforms commonly represent contributions through distributed version control systems such as [Git](https://git-scm.com/), while research ecosystems increasingly identify scholarly contributions using persistent identifiers such as [ORCID](https://orcid.org/) and [DOI Foundation identifiers](https://www.doi.org/). Every sector develops its own vocabulary, data structures and application-specific models for representing participation.

Despite this diversity, these representations remain largely confined to the ecosystems in which they originate. Participation data is commonly treated as a proprietary asset that supports product differentiation, recommendation systems, participant retention and competitive advantage. Even where open protocols exist, they typically address communication, content exchange or domain-specific activities rather than providing a general representation of participation that can be recognised across diverse ecosystems.

The scale of the Participation layer presents an additional architectural challenge. Modern ecosystems generate vast quantities of behavioural data, much of which has limited long-term value beyond the applications in which it was created. Recording every click, view, reaction, transaction and interaction may be valuable for local analytics, but exchanging complete participation histories between ecosystems would be inefficient, costly and difficult to interpret consistently. As digital participation continues to grow - particularly through automation and increasingly capable AI agents - the volume of participation will continue to expand.

The challenge is therefore not simply how to represent participation, but how to determine which participation is worth representing beyond the ecosystem in which it occurs. A practical Participation layer cannot depend on exchanging exhaustive behavioural histories. Instead, it requires a common representation of the subset of participation that ecosystems explicitly consider important.

The Meaningful Participation Protocol, outlined later in this paper, addresses this challenge by representing only the participation that each ecosystem chooses to recognise as Meaningful Participation. This architectural reduction makes Participation Records practical to carry between ecosystems, supporting participant portability while providing a common foundation for ecosystem interoperability.

### Interpretation

The Interpretation layer establishes what represented participation means within a particular ecosystem. While the proposed Participation layer can provide a common representation of Meaningful Participation, Interpretation remains entirely ecosystem specific. Two ecosystems may interpret the same Participation Records in completely different ways, reflecting their own objectives, values, governance models and operational requirements.

Interpretation encompasses every process through which ecosystems derive meaning from participation. This may include reputation graphs, trust and credibility models, recommendation systems, ranking algorithms, eligibility criteria, policy engines, fraud detection, risk assessment, analytics, search, discovery and AI reasoning. It may also incorporate information beyond Participation Records, including Credentials, organisational policies, historical behaviour, contextual information and external data sources.

Many ecosystems already employ sophisticated interpretation models, although these are typically tightly coupled to proprietary participation data. Search engines interpret hyperlinks and user behaviour to rank information. E-commerce platforms interpret purchasing behaviour and reviews to recommend products. Social platforms interpret interactions to curate content feeds. Scientific communities interpret publications, citations and peer review to assess research impact. Financial institutions interpret transaction histories to assess risk. Increasingly, AI systems interpret large volumes of behavioural information to support decision-making across many domains.

Separating Participation from Interpretation fundamentally changes where innovation occurs. Rather than competing through proprietary participation data, ecosystems can compete through better interpretation. Interoperable Participation Records provide a common foundation upon which ecosystems remain free to build graphs, scoring models, recommendation systems and other approaches that reflect their own priorities.

Graphs are likely to become an increasingly important form of interpretation. By modelling relationships between participants, organisations, activities, credentials, evidence and ecosystems, graphs can reveal patterns that are difficult to observe through isolated records alone. Different ecosystems may construct entirely different graphs from the same Participation Records, producing distinct interpretations that support their own objectives. A media ecosystem, for example, may prioritise credibility and original reporting, while an educational ecosystem may focus on learning progression and mentoring. Neither interpretation is more correct; each reflects the purpose of the ecosystem applying it.

Interpretation therefore remains intentionally outside the scope of the Meaningful Participation Protocol. MPP standardises the representation of Meaningful Participation, not the meaning derived from it. This separation preserves ecosystem autonomy while creating new opportunities for innovation in graph design, analytics, AI reasoning and decision-support systems.

As interoperable Participation Records become more widely available, the quality of interpretation is likely to become an increasingly important differentiator between ecosystems. Rather than asking how participation should be represented, ecosystems can focus on a more valuable question: **how can participation be interpreted in ways that strengthen long-term ecosystem health?**

### Incentives

The Incentives layer establishes how ecosystems encourage future participation. While the Participation layer represents what has happened and the Interpretation layer determines what it means, Incentives influence what participants choose to do next. Together, these layers create a continuous feedback loop in which participation is recognised, interpreted and used to shape future behaviour.

Every ecosystem already contains incentive models, whether intentionally designed or emerging through practice. Financial rewards, salaries, promotions, governance rights, badges, reputation, access to opportunities, discounts, prizes, recognition, exclusive privileges, recommendations and social status all influence how participants behave. Even the absence of explicit incentives creates incentives of its own, as participants naturally respond to whatever behaviours are recognised, rewarded or ignored.

Well-designed incentives have repeatedly transformed ecosystems. Frequent flyer programmes encourage customer loyalty across the airline industry. Open-source software communities motivate voluntary collaboration through recognition, reputation and influence. Scientific research combines funding, publication, citation and professional recognition to encourage discovery and collaboration. Professional accreditation schemes encourage continuous learning and high standards of practice. Governments employ grants, tax incentives and regulatory mechanisms to influence economic, environmental and social outcomes. Increasingly, digital platforms use financial rewards, rankings, badges, recommendations and algorithmic visibility to shape participant behaviour at scale.

The effectiveness of any incentive model depends upon the quality of its interpretation. Ecosystems that rely solely on simple activity metrics risk rewarding behaviour that increases measurable engagement without strengthening the ecosystem itself. Conversely, richer interpretation models - including graphs, trust models, reputation systems, policy engines and AI-assisted reasoning - enable ecosystems to design incentives that recognise more meaningful forms of participation and better align individual behaviour with long-term ecosystem objectives.

The Incentives layer therefore remains intentionally outside the scope of the Meaningful Participation Protocol. MPP provides a common representation of Meaningful Participation but does not prescribe how ecosystems should reward, recognise or respond to it. Different ecosystems may apply entirely different incentive models to exactly the same Participation Records, reflecting their own values, governance and priorities.

As portable Participation Records and ecosystem interoperability become more widespread, incentive design becomes a strategic capability rather than a consequence of proprietary data ownership. Ecosystems gain greater freedom to experiment with new economic models, recognition systems, governance mechanisms and collaborative structures while remaining interoperable with others.

Ultimately, healthier ecosystems depend not only on recognising valuable participation, but on encouraging more of it. By separating incentives from representation, MPRA enables ecosystems to continuously refine how they encourage participation without changing the underlying participation infrastructure. This creates opportunities to address challenges that extend far beyond digital platforms, including education, scientific collaboration, professional development, civic participation, environmental stewardship and countless other domains in which long-term outcomes depend upon aligning individual incentives with collective success.

*The maturity of open standards decreases noticeably across the Meaningful Participation Reference Architecture. Identity is supported by decades of mature standards and widespread interoperability. Credentials are rapidly following the same trajectory. Participation, despite representing where value is created within ecosystems, remains largely proprietary and application specific. Interpretation and Incentives are intentionally left to individual ecosystems, where diversity, experimentation and competitive differentiation are desirable rather than standardisation. MPRA therefore identifies Participation as the next logical layer for open interoperability while preserving innovation where it creates the greatest value.*

## Proposing the Meaningful Participation Protocol (MPP)

For the purposes of this protocol, Meaningful Participation is participation that an ecosystem explicitly chooses to recognise because it advances that ecosystem's objectives.

The Meaningful Participation Protocol originated during the design of a digital participation model for the news media sector. While developing that system, it became apparent that many of its underlying architectural principles were not media-specific, but addressed a broader challenge shared by digital ecosystems: participation is often optimised for what is easy to measure rather than what creates lasting value.

Rather than embedding these concepts solely within a media application, the underlying representation model was extracted into the open, general-purpose MPP. The protocol continues to underpin the original media implementation while also providing a common foundation that other sectors can adapt to recognise the forms of participation they consider meaningful.

Although MPP was inspired by challenges observed in media, its design is intentionally domain neutral. The protocol can be applied wherever an ecosystem wishes to represent Meaningful Participation in a way that supports participant portability, ecosystem interoperability and independent verification, while remaining free to define what meaningful participation means within its own context.

### Why Meaningful Participation Provides Stronger Signals

Digital ecosystems generate vast numbers of interactions every day, but not all interactions communicate the same level of commitment. Some forms of participation require little effort, investment or responsibility, while others demand significant time, expertise, resources, reputation or sustained engagement. Although low-friction interactions remain valuable indicators of awareness or interest, they generally provide weaker evidence of meaningful contribution than participation involving greater commitment.

Other forms of participation require individuals to commit scarce resources in pursuit of an ecosystem's objectives. Purchasing a product or service, making a financial contribution, contributing expertise, mentoring others, moderating a community or publicly endorsing an initiative all require participants to invest resources that are more difficult to imitate without genuine commitment. As a result, these forms of participation generally provide stronger evidence of intent, capability or investment than low-friction interactions alone.

This distinction is supported by signalling theory, which differentiates between low-cost and costly signals. Costly signals require participants to commit scarce resources – such as capital, effort, knowledge or standing - making them generally more reliable indicators of commitment than actions that can be performed with little effort or sacrifice. Originally developed in economics and evolutionary biology, signalling theory has since been applied across disciplines including education, cooperation, philanthropy and online communities.[^2]

By enabling ecosystems to represent costly signals consistently, the Meaningful Participation Protocol encourages richer evidence of contribution, reduces the need to collect and retain large volumes of low-value behavioural data, and provides a simpler, more interoperable foundation for ecosystem-specific Interpretation, Incentives and long-term value creation.

### Design Principles

The Meaningful Participation Protocol is guided by the following principles:

- **Representation, not Interpretation** – MPP standardises the representation of Meaningful Participation and Ecosystem Relationships, not how ecosystems evaluate or reward these.
- **Ecosystem-defined Meaning** – Every ecosystem determines which forms of participation are meaningful according to its own objectives.
- **Evidence before Inference** – Participation should be supported by evidence wherever possible, leaving analysis and scoring to implementing ecosystems.
- **Participant Agency** – Individuals should be able to carry and selectively share evidence of their Meaningful Participation across ecosystems, while Ecosystem Relationships make potential recognition pathways explicit.
- **Privacy by Design** – The protocol represents Meaningful Participation rather than exhaustive behavioural data, supporting data minimisation and participant control.
- **Technology Neutral** – MPP can be implemented using centralised, federated or decentralised technologies.
- **Portable and Interoperable** – Participation Records should be portable between ecosystems under participant control, while the protocol should provide shared infrastructure through which ecosystems can establish their own interoperability policies.

MPP represents Meaningful Participation and Ecosystem Relationships through a minimal set of interoperable concepts. Participation Records identify Participants, originating Ecosystems, Commitment Classes and supporting Evidence. Ecosystem Relationships separately describe how Ecosystems relate, including recognition, delegation and structural relationships. Together these objects enable interoperability while preserving ecosystem-specific interpretation.

This paper intentionally focuses on the protocol's conceptual architecture. Detailed definitions of the protocol objects, schemas, exchange mechanisms and conformance requirements are provided in the accompanying **Meaningful Participation Protocol Specification**.

### Two Primary Protocol Objects

The Meaningful Participation Protocol standardises two complementary Protocol Objects that together support participant portability and ecosystem interoperability while preserving ecosystem-specific interpretation.

**Participation Records** represent individual instances of Meaningful Participation. They record participation that an originating ecosystem has explicitly chosen to recognise as advancing its objectives. Participation Records are designed to be participant-held and portable, allowing participants to decide when and where they present records of their Meaningful Participation.

**Ecosystem Relationships** represent relationships between ecosystems. They describe structural relationships, delegated assertion authority and other relationships that receiving ecosystems may use when applying interoperability policies. Ecosystem Relationships are maintained by ecosystems rather than participants.

The two Protocol Objects therefore perform distinct but complementary roles. **Participation Records enable portability; Ecosystem Relationships support interoperability**. Neither determines whether participation should ultimately be interpreted, recognised or rewarded. Those decisions remain entirely within each ecosystem's Interpretation and Incentives layers.

### Participation Record

A Participation Record is the protocol's primary representation of Meaningful Participation. It records a single assertion by an ecosystem that a participant has undertaken participation the ecosystem considers meaningful. The protocol intentionally standardises how this assertion is represented rather than why it is meaningful. Every ecosystem remains free to determine the criteria under which Participation Records are issued.

Participation Records are designed to be participant-held. Rather than remaining confined within proprietary platforms, they can accompany participants as portable records of Meaningful Participation that may be presented to other ecosystems whenever the participant chooses.

### Commitment Classes

The Meaningful Participation Protocol is not intended to represent every digital interaction. Instead, it provides a common framework for representing participation that reflects meaningful commitments made in support of an ecosystem's objectives. While different ecosystems may value different forms of contribution, many recognise contributions that involve one or more of four universal Commitment Classes:

| Commitment Class | Description | Examples |
| --- | --- | --- |
| Capital | Resources committed through Participation | Money, grants, equipment, cloud computing capacity, facilities, blood or organ donation |
| Effort | Human capacity applied through Participation | Reading, watching, analysing, creating, mentoring, caring, physical presence |
| Knowledge | Information, understanding or expertise contributed through Participation | Research findings, local knowledge, specialist expertise, observations, insight |
| Standing | Recognised position committed through Participation | Endorsements, governance roles, institutional affiliation, issuing credentials, accepting accountability |

These Commitment Classes describe **what is being committed** rather than the activities through which participation occurs. They distinguish between the commitment of resources (Capital), the application of human capacity (Effort), the contribution of information or expertise (Knowledge), and the commitment of recognised position (Standing).

MPP standardises these four universal Commitment Classes rather than ecosystem-specific activity types. This enables diverse forms of participation to be represented consistently across different ecosystems while allowing each ecosystem to determine how those commitments should be interpreted, verified and valued.

### Why These Commitment Classes?

The Meaningful Participation Protocol is designed to support a wide range of digital ecosystems without prescribing which forms of participation they should value. To achieve this, the protocol classifies participation according to the scarce resources being committed, rather than the activities being performed.

During the protocol's development, numerous forms of participation were examined across domains including media, open-source software, scientific research, education, volunteering, governance and online communities. Although the activities varied considerably, they consistently involved commitments of one or more fundamental resources.

These four classes are intended to be broadly applicable across digital ecosystems while remaining minimal. Rather than creating separate classes for every possible activity, MPP provides a common vocabulary capable of describing diverse forms of participation through combinations of these four commitments.

An individual Participation Record may involve one Commitment Class or several simultaneously. The protocol therefore represents the commitments embodied in a contribution rather than attempting to classify the activity itself.

The example below illustrates how a sports club ecosystem might apply the Commitment Classes to various types of participation.

| Activity an ecosystem might record | Capital | Effort | Knowledge | Standing |
| --- | :---: | :---: | :---: | :---: |
| Buying a ticket for a sports event | ✓ |  |  |  |
| Attending that event |  | ✓ |  |  |
| Buying team merchandise | ✓ |  |  |  |
| Posting about the event on social media |  |  |  | ✓ |
| Volunteering at the event |  | ✓ | ✓ |  |
| Coaching a youth team |  | ✓ | ✓ | ✓ |
| Refereeing a match |  | ✓ | ✓ | ✓ |
| Serving on the club committee |  | ✓ | ✓ | ✓ |
| Sponsoring the club | ✓ |  |  | ✓ |
| Donating equipment | ✓ |  |  |  |
| Running a fan forum |  | ✓ | ✓ | ✓ |
| Reporting safety issues at the venue |  | ✓ | ✓ |  |

Over time, this enables the club to develop a more complete understanding of how each participant contributes to the ecosystem. One person may primarily invest Capital through tickets, merchandise and sponsorship, while another contributes Effort through volunteering, Knowledge through coaching, or Standing through advocacy and public support. By representing these contributions consistently, MPP provides the foundation upon which the club can build its own Interpretation of Meaningful Participation and design Incentives that strengthen long-term ecosystem health. The protocol itself remains neutral, leaving every ecosystem free to decide which forms of participation it values most.

### Ecosystem Relationship

An Ecosystem Relationship describes how one ecosystem relates to another. Relationships may describe:

- **Structural relationships**, such as membership within a wider federation or delegated assertion authority.
- **Recognition relationships**, which define whether and under what conditions Participation Records from another ecosystem may be recognised.

Unlike Participation Records, Ecosystem Relationships are ecosystem-held because they describe relationships asserted or maintained by ecosystems rather than individual participation.

By representing these relationships through a common protocol, ecosystems can make interoperability explicit while avoiding bespoke integrations and application-specific configuration.

Example Ecosystem Relationships

| Originating Ecosystem | Relationship | Target Ecosystem | Example Use |
| --- | --- | --- | --- |
| Real Madrid | constituentOf | Royal Spanish Football Federation | Identifies Real Madrid as part of the Spanish football hierarchy. |
| Royal Spanish Football Federation | constituentOf | UEFA | Enables traversal to the continental federation. |
| UEFA | constituentOf | FIFA | Completes the federation hierarchy. |
| FIFA | delegatesAssertionAuthorityTo | Royal Spanish Football Federation | National associations may issue defined Participation Records on FIFA's behalf. |
| Acme Subsidiary | constituentOf | Acme Group | Enables company-wide interoperability policies. |
| Medical School | accreditedBy | National Medical Council | Enables receiving ecosystems to identify accredited institutions. |

These structural relationships do not themselves determine whether Participation Records are accepted. They provide context that receiving ecosystems may use when evaluating interoperability according to their own policies.

### How Portability and Interoperability Work Across Ecosystems

Meaningful Participation becomes portable through the interaction of the two Protocol Objects and the ecosystem-specific Interpretation layer.

```text
Participant
    │
    ▼
Participation Record
(participant-held / portable)
    │
    ▼
Receiving Ecosystem
    │
    ▼
Interoperability Policy
(may use Ecosystem Relationships)
    │
    ▼
Interpretation
    │
    ▼
Ecosystem-specific Incentives
```

The process begins when an originating ecosystem issues a Participation Record recognising a participant's Meaningful Participation. The participant retains this record and may subsequently choose to present it to any receiving ecosystem.

The receiving ecosystem evaluates the Participation Record according to its own **interoperability policy**. This policy may reference Ecosystem Relationships, credentials, verification status or other local criteria to determine which Participation Records should proceed to interpretation.

For example, one ecosystem may choose to consider Participation Records only from ecosystems within its own organisation, while another may accept records originating from any ecosystem within the FIFA federation. Others may consider Participation Records from any ecosystem unless explicitly excluded.

Participation Records that satisfy the interoperability policy are then evaluated by the receiving ecosystem's Interpretation layer alongside its own credentials, graphs and other contextual information. Any resulting recognition, privileges or incentives are determined entirely by that ecosystem.

MPP therefore standardises the representation and portability of Meaningful Participation without standardising how ecosystems determine interoperability, interpretation or incentives. In the example below, an Academy Coach at Real Madrid may present Participation Records to multiple ecosystems. Each ecosystem first applies its own interoperability policy to determine which records should be considered, then interprets those records according to its own objectives. The same Participation Record may therefore contribute to coaching accreditation, university admission, civic programmes or employment - or it may be ignored entirely.

| Receiving Ecosystem | Example Interoperability Policy |
| --- | --- |
| Corporate Group | Consider Participation Records only from ecosystems within the corporate group. |
| Football News Platform | Consider Participation Records originating from ecosystems within the FIFA federation. |
| University | Consider Participation Records from any ecosystem, giving additional weight to recognised educational and professional organisations. |
| Municipality | Consider Participation Records relating to youth development, volunteering and community engagement regardless of originating ecosystem. |
| Professional Coaching Association | Consider Participation Records from recognised football associations and affiliated clubs. |
| NGO | Consider Participation Records from any ecosystem provided associated Evidence has been independently verified. |

MPP standardises the representation and portability of Meaningful Participation while leaving interoperability policies, interpretation and incentives under the control of each ecosystem.

## What Becomes Possible?

By separating the representation of Meaningful Participation from ecosystem-specific interpretation, MPP enables new forms of interoperability while preserving the autonomy of every ecosystem. **Participants gain portability; ecosystems gain interoperability**. Participants can carry Participation Records between ecosystems under their control, while receiving ecosystems remain free to determine which records they consider, how they interpret them and what incentives, if any, they provide.

| Today | With MPP |
| --- | --- |
| Participation histories remain trapped within individual platforms and ecosystems. | Participants hold portable Participation Records and decide when, where and with whom they are shared. |
| Participants have limited control over how their participation history is reused. | Participants gain agency over the representation and sharing of their Participation Records. |
| Changing ecosystems often means starting again. | Participants can present verified records of previous Meaningful Participation to new ecosystems. |
| Recognition is tied to where participation occurred. | Participation can be interpreted according to its characteristics, evidence and context rather than being confined to its originating ecosystem. |
| Recognition and interoperability are embedded in proprietary systems or bilateral agreements. | Interoperability policies can be defined explicitly and consistently using Ecosystem Relationships. |
| Cross-ecosystem recognition depends on proprietary integrations and bilateral arrangements. | Ecosystems can establish explicit interoperability policies using a common protocol and Ecosystem Relationships. |
| Each ecosystem builds an isolated understanding of every participant. | Ecosystems can supplement their own understanding with participant-presented Participation Records from elsewhere. |
| Delegated assertion authority is managed through bespoke organisational arrangements. | Delegated authority can be represented through standard Protocol Objects. |
| Cross-ecosystem participation is difficult to represent and reuse. | Participants can carry Meaningful Participation across ecosystems through portable Participation Records. |
| Ecosystems must build bespoke integrations to exchange participation information. | A common protocol reduces custom integration while allowing each ecosystem to retain complete control over interpretation and incentives. |

## Illustrative Deployment Models

The Meaningful Participation Protocol is designed to deliver value at multiple scales. An organisation can begin by using MPP within its own ecosystem and progressively extend interoperability to partners, suppliers, customers and eventually an entire sector. Each stage builds upon the previous one without requiring changes to the protocol itself.

### Single Organisation

A company implements MPP across its own internal systems. Human Resources, Learning & Development, volunteering programmes, innovation initiatives and employee communities each issue Participation Records recognising Meaningful Participation.

Employees retain these Participation Records and may choose to present them when applying for new internal roles, leadership programmes or recognition schemes. The organisation gains a more complete understanding of participation across previously disconnected systems while retaining full control over interpretation and incentives.

### Corporate Ecosystem

The organisation extends MPP across subsidiaries, regional offices and affiliated companies.

Participation Records become portable throughout the corporate group, while common protocol infrastructure enables interoperability between its constituent ecosystems.

Each company retains its own interpretation policies while benefiting from a shared representation of Meaningful Participation.

### Ecosystem Steward

Having demonstrated value internally, the organisation publishes an ecosystem profile and invites suppliers, customers, universities, professional associations and other partners to participate.

Rather than imposing a central reputation system, the organisation helps establish common infrastructure for representing Meaningful Participation across the sector. Participating organisations remain entirely free to determine their own interoperability policies, interpretation models and incentives.

This allows organisations to become stewards of healthier digital ecosystems rather than simply consumers of shared infrastructure.

### Open Participatory Ecosystem

As adoption grows, independent organisations begin issuing and interpreting Participation Records across the ecosystem.

Participants accumulate portable histories of Meaningful Participation that they choose when and where to share. Ecosystems define their own interoperability policies and interpretation models while benefiting from a common protocol for representing participation.

The result is a more connected ecosystem in which Meaningful Participation becomes portable without requiring centralised governance or standardised incentives.

## Looking Forward

Digital ecosystems increasingly shape how people learn, work, collaborate, create knowledge, build communities and contribute to society. Yet many continue to optimise for participation that is easiest to measure rather than participation that creates the greatest long-term value.

The Meaningful Participation Protocol does not attempt to prescribe what participation should mean. Instead, it provides a common foundation through which diverse ecosystems can represent Meaningful Participation consistently while remaining free to determine their own interoperability policies, interpretation models and incentives.

Our own work began with a practical challenge in the news media sector, where recognising Meaningful Participation is essential to sustaining what we call Consequential Media - sources people genuinely rely on for current information that shapes how they understand and act in the world. As the underlying architecture evolved, however, it became clear that the same principles could apply wherever digital ecosystems depend upon sustained human contribution.

We therefore hope MPP will be adopted not only by individual organisations seeking to better recognise participation within their own ecosystems, but also by organisations willing to act as ecosystem stewards, encouraging interoperable implementations and helping establish shared participation infrastructure within their sectors.

No protocol, on its own, can create healthier ecosystems. That responsibility rests with the organisations and communities that define what they value and how they choose to recognise and incentivise it. MPP provides common infrastructure for representing those choices in a way that supports participant portability, ecosystem interoperability and independent verification.

The ambition extends beyond making participation easier to represent or exchange. As increasingly capable AI systems reshape economic and social life, better infrastructure for recognising human contribution may become increasingly important. MPRA and MPP offer ecosystems a way to identify forms of participation that matter, recognise contributions that existing systems overlook, and design incentives around the behaviours and outcomes they want to encourage.

The opportunity is to build ecosystems that become better at recognising what matters, and encouraging more of it.

## Get Involved

Organisations interested in applying MPRA and MPP are encouraged to begin by exploring how Meaningful Participation is currently recognised within their own ecosystems. Modern AI tools can be valuable in identifying opportunities, designing Participation Records and developing candidate interpretation and incentive models tailored to specific organisational contexts.

MPRA and MPP are intended to evolve through practical implementation across diverse ecosystems. We welcome feedback on the architecture, protocol, examples and reference implementations, as well as discussion of new use cases and ecosystem-specific requirements.

The protocol specification, schemas and examples are published as open resources to encourage experimentation, implementation and community participation.

This white paper is published as a working document to encourage discussion and development of the ideas presented here. Comments, critiques, examples and proposed changes are welcome. Please use GitHub Issues for discussion and Pull Requests for proposed amendments.

The author welcomes discussion with organisations, communities and practitioners interested in applying MPRA and MPP, exploring ecosystem-specific implementations, or contributing to the protocol’s further development.

## Appendices

### Appendix A – Exploring MPRA and MPP with AI

The Meaningful Participation Reference Architecture (MPRA) and Meaningful Participation Protocol (MPP) are intended to be applied across many different ecosystem types. Every organisation, community, sector or network defines Meaningful Participation differently, so implementations will naturally vary.

One practical way to explore their potential is to provide this white paper, the MPP specification and a description of your own ecosystem to a modern AI assistant. By combining the protocol with knowledge of your organisation, the AI can help identify opportunities to recognise participation more effectively, strengthen incentives and improve ecosystem health.

Because MPRA separates architectural concerns from ecosystem-specific interpretation, it lends itself particularly well to AI-assisted exploration. General-purpose AI systems can rapidly analyse diverse ecosystems, identify opportunities for recognising Meaningful Participation and generate candidate Participation Records, interoperability policies and incentive models for human review.

Questions worth exploring include:

- Which forms of participation genuinely strengthen our ecosystem?
- Which forms of participation do we currently fail to recognise?
- How might those forms of participation be represented using MPP?
- What Participation Records could our ecosystem issue?
- Which existing credentials, identities and evidence could support those records?
- What interoperability policies would be appropriate for our ecosystem?
- Which incentives might better align participant behaviour with our long-term objectives?
- How could portable Participation Records benefit our participants?
- With which neighbouring ecosystems would interoperability create value for participants or the ecosystem?
- Could our organisation become a steward of participation interoperability within our sector?

A useful starting prompt is:

> Using the Meaningful Participation Reference Architecture (MPRA) and the Meaningful Participation Protocol (MPP), analyse my organisation, community or ecosystem. Identify the participants, ecosystem boundaries and forms of Meaningful Participation that contribute to long-term ecosystem health. Propose appropriate Participation Records, Credentials, Ecosystem Relationships, interoperability policies, Interpretation models, participation graphs and Incentive models. Recommend how these components should work together, identify opportunities to strengthen participant agency and ecosystem health, and describe a phased roadmap from internal deployment to wider ecosystem interoperability. Where appropriate, identify opportunities for our organisation to become an ecosystem steward within its sector.

Follow-up prompt:

> Imagine our organisation had fully adopted MPRA and MPP five years from now. Describe how participants, communities, partners and neighbouring ecosystems would experience the difference. Explain what new capabilities, behaviours, incentives, collaborations and business opportunities would become possible, and identify the strategic advantages this could create for our ecosystem.

[^1]: *The 2026 AI Index Report*, Stanford University, accessed 4 August 2026.
[^2]: *The Dynamics of Costly Signaling*, University of Amsterdam, 26 April 2013.
