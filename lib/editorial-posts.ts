import type { BlogPost } from "@/lib/blog";

export const EDITORIAL_POSTS: BlogPost[] = [
  {
    id: "editorial-pqc-migration-readiness",
    slug: "post-quantum-cryptography-migration-readiness",
    title: "What Is Post-Quantum Cryptography? A Practical Migration Readiness Guide",
    excerpt:
      "A clear, evidence-led introduction to PQC: what quantum computers could change, why organisations are planning now, and how to start a careful cryptographic discovery and migration process.",
    category: "Cybersecurity & PQC",
    read_time: "8 min read",
    keywords: [
      "post-quantum cryptography",
      "PQC migration",
      "cryptographic inventory",
      "NIST PQC standards",
      "quantum readiness",
      "cryptographic agility",
    ],
    related_service_slugs: ["technology-consulting", "cloud-devops"],
    published: true,
    published_at: "2026-10-17T00:00:00.000Z",
    created_at: "2026-10-17T00:00:00.000Z",
    updated_at: "2026-10-17T00:00:00.000Z",
    content: `## What does “post-quantum cryptography” mean?

Post-quantum cryptography (PQC) is cryptography designed to withstand attacks from both conventional computers and sufficiently capable future quantum computers. The concern is not that today’s computers have suddenly made encryption unsafe. Rather, a future large-scale, fault-tolerant quantum computer could undermine some of the public-key mathematics currently used for key establishment and digital signatures.

That distinction matters. PQC is a long-term migration and compatibility challenge, not a reason to panic or replace cryptography without a plan.

## Why are organisations planning before such a computer exists?

Some information must remain confidential for many years. An adversary could collect encrypted traffic today and attempt to decrypt it later if the underlying public-key protection becomes vulnerable. This “harvest now, decrypt later” risk can matter when the required confidentiality lifetime is longer than the expected migration timeline.

Organisations also depend on cryptography in many places they do not directly manage: applications, identity systems, certificates, devices, managed cloud services, suppliers, and network protocols. Finding owners, dependencies, upgrade paths, and testing requirements can take years. Starting with discovery and planning reduces the chance of a rushed, disruptive change later.

The UK National Cyber Security Centre (NCSC) sets out indicative milestones for organisations: define goals, carry out discovery, and make an initial migration plan by 2028; perform the highest-priority migration activities by 2031; and work towards completing migration by 2035. These are planning milestones, not a claim that every organisation has the same exposure or schedule. Follow current NCSC guidance and any sector-specific requirements.

## What has been standardised?

NIST published three final post-quantum standards in 2024:

- **ML-KEM (FIPS 203)** is a key-encapsulation mechanism used to establish a shared secret key. It is not a drop-in encryption algorithm for application data.
- **ML-DSA (FIPS 204)** is a digital-signature standard.
- **SLH-DSA (FIPS 205)** is a stateless hash-based digital-signature standard.

These standards give implementers and organisations defined algorithms to evaluate. They do not by themselves migrate an organisation’s systems, settle every protocol or product compatibility question, or constitute a complete migration plan. Use implementations and transition guidance from trusted vendors and standards bodies; do not design custom cryptography.

## A practical starting point: build a useful inventory

Start by asking where cryptography is used, who owns it, and what depends on it. Depending on the organisation, discovery may need to cover:

- Applications, source code, libraries, build pipelines, and packaged software
- TLS and other network protocols, certificates, public-key infrastructure, and identity services
- Operating systems, appliances, devices, hardware, and long-lived embedded products
- Cloud platforms, managed services, SaaS suppliers, and third-party integrations
- Data with a long confidentiality lifetime, plus the systems and keys protecting it

Record the evidence and its source, the affected service or asset, its owner, dependencies, confidence, and what has not yet been checked. A text search can find useful clues in source or configuration, but cannot prove that a whole estate has or has not been inventoried. Compiled binaries, runtime behaviour, certificates, managed services, generated code, and supplier systems may need different authorised discovery methods.

## Prioritise by business context, not by a keyword match

An algorithm name in a file is a lead for investigation—not a finding that a system is vulnerable, non-compliant, or immediately due for replacement. It may appear in a test, example, comment, unused dependency, or unrelated configuration. Conversely, no text match does not prove that cryptography is absent.

For each confirmed use, bring together technical and business context:

- How long must the protected information remain confidential?
- What service, customer, safety, regulatory, or contractual obligations depend on it?
- Who owns the component, and what upstream or downstream systems rely on it?
- Does the supplier have a documented upgrade path and support commitment?
- What interoperability, performance, key-size, certificate, or hardware constraints need testing?
- What is the change window, rollback plan, and approval process?

Use that context to set migration order with accountable system owners and security specialists. Keep “observed”, “inferred”, and “unknown” separate in records. A discovery tool can support evidence gathering; it cannot replace cryptographic expertise, business risk assessment, or an authorised migration decision.

## Design for change without rushing changes into production

Cryptographic agility means being able to replace cryptographic components in a controlled way as standards, requirements, and technology evolve. Practical preparation may include mapping dependencies, reducing unnecessary algorithm assumptions in interfaces, maintaining supported libraries, and testing protocol and product roadmaps with vendors.

Do not switch production algorithms simply because a scan reports a string, and do not deploy a PQC implementation without checking applicable standards, implementation maturity, interoperability, and vendor support. Plan tests, staged rollout, monitoring, approvals, and rollback with the teams responsible for each system.

## A short readiness checklist

- Name an accountable sponsor and technical owners for the discovery effort.
- Identify data whose confidentiality must last for many years.
- List the systems and suppliers in scope, including what is explicitly out of scope.
- Collect evidence from more than one source; track coverage gaps and unknowns.
- Confirm vendors’ PQC plans, support windows, and upgrade paths.
- Prioritise candidate migrations with security, engineering, procurement, and business owners.
- Revisit the inventory and roadmap as standards and products change.

## How GMHCO is approaching the topic

GMHCO is exploring a local-first PQC discovery and migration-readiness concept. It is **in development** and is not currently a generally available scanner, assessment, or cybersecurity assurance service. No scan results or migration conclusions should be inferred from this article. The website does not scan or accept source code.

## Sources and further reading

- [NIST FIPS 203: Module-Lattice-Based Key-Encapsulation Mechanism Standard (ML-KEM)](https://csrc.nist.gov/pubs/fips/203/final)
- [NIST FIPS 204: Module-Lattice-Based Digital Signature Standard (ML-DSA)](https://csrc.nist.gov/pubs/fips/204/final)
- [NIST FIPS 205: Stateless Hash-Based Digital Signature Standard (SLH-DSA)](https://csrc.nist.gov/pubs/fips/205/final)
- [UK NCSC: Timelines for migration to post-quantum cryptography](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)
- [NIST NCCoE: Migration to Post-Quantum Cryptography project](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/)

This article is general educational information, not legal, compliance, or security advice. Check the linked standards and current guidance for decisions about your own systems.`,
  },
];
