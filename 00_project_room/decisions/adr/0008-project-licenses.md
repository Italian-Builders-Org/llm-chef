# ADR-0008: Project Licenses (Code, Data, Content)

- Status: **Accepted** (2026-06-28). Code license = **MIT** (selected over Apache-2.0); data and content terms adopted as below.
- Date: 2026-06-28
- Deciders: project owner (recommendation) · Italian Builders (decision)

## Context

The project is open source "where rights allow," and it has three layers with very
different copyright realities and reuse intentions:

1. **Code** — the website (and a future `/llm`).
2. **Data / metadata** — `books.json`, the catalog, taxonomy.
3. **Content** — rendered source text: V1 is Level A *faithful transcriptions of
   public-domain works*; later, editorial Level B/C interpretation and translations.

Licensing must be consistent with the open-source intent **and** the rights
constraints (only `public_domain_verified` sources are ever published — see
[`../../../10_source_library/provenance/RELEASE_LABELS_V1.md`](../../../10_source_library/provenance/RELEASE_LABELS_V1.md)).
IB-038's output is "an ADR choosing the licenses." Because the choice is the Italian
Builders' to make, this ADR is **Proposed**: a concrete recommendation to react to, not
an accepted decision. No `LICENSE` files are committed until the Builders confirm.

## Decision

- **Code → MIT** (decided 2026-06-28). Simplest and most permissive; widest adoption for
  a small open team; maximizes contribution and reuse. Apache-2.0 was the considered
  alternative (explicit patent grant); MIT was selected for simplicity. The `LICENSE`
  file is committed at the repo root.
- **Data / metadata (`books.json`, catalog, taxonomy) → CC0-1.0.** Bibliographic
  metadata is largely fact (thin or no copyright); CC0 maximizes reuse and aligns with
  the Open Knowledge intent already adopted in ADR-0005.
- **Content — Level A transcriptions of public-domain sources → Public Domain Mark /
  CC0.** A faithful transcription of a PD work creates no new copyright (US *Bridgeman*;
  EU DSM Directive Art. 14). Marking it public domain is the honest, preservation-ethos
  choice; provenance/attribution is provided as good practice, not a legal condition.
- **Future editorial content (Level B/C interpretation, translations, curated
  collections) → reserved; recommend CC-BY-SA-4.0.** Keeps original editorial work
  open, attributed, and share-alike. This is V2 — only the posture is reserved here.
- **Hard rule:** licensing never overrides rights. Only `public_domain_verified`
  sources are published; uncleared sources stay `metadata_only` / `private` regardless
  of license.

## Consequences

- **LICENSE files:** `LICENSE` (MIT) is committed at the repo root for code. A CC0
  data-license note is added with `/data` (IB-013); per-source content terms surface via
  the asset manifest (IB-014) and are enforced by the UI rights gates (IB-028).
- **Strategic note for the Builders:** CC0 on transcriptions maximizes openness but
  gives that transcription work away freely. If the project later wants *proprietary*
  editorial products (the Collana, publishing, classes — see VISION), keep those
  **editorial layers** under a separate, more protective license; the underlying PD
  source transcriptions cannot be meaningfully restricted anyway.
- **Out of scope:** legal counsel sign-off. Recommended before a public launch (IB-029),
  especially for the EU content posture.
- Code license (MIT) is adopted and IB-038 (#8) is closed. The future-editorial license
  (CC-BY-SA) and the open-vs-protected question remain reserved for V2. The copyright
  holder in `LICENSE` ("Italian Builders and contributors") can be amended to a formal
  legal entity if the group establishes one.
