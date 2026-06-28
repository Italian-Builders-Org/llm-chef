# Vision

Status: Draft v0.4. North-Star vision; V1 scope is owned by ADR-0004. The broader vision is intentionally aspirational.

Last updated: 2026-06-28.

## North Star

Chef-LLM aims to become an open, educational companion platform that resurfaces Italian and broader European culinary heritage in a digestible, navigable form.

The recipes themselves are not scarce: they exist in books and online. The scarcity is **curation, organization, and guidance**. Most people don't know where to start, which books to buy, or what to learn, so they hit information overload and stop. Chef-LLM's value is to be the companion that turns a scattered, intimidating corpus into something anyone curious can explore and learn from.

This is an educational resource first, and an open-source contribution to cultural preservation, not "here are some scanned books, good luck." It is grounded in roughly 30 known source records, anchored by about 17 GB of owner-scanned files in the first corpus plus later additions, to be opened only where rights allow.

## The Problem We Solve

- The source material is rich but scattered, often untranslated, and overwhelming.
- Newcomers don't know where to begin or what is worth their time.
- General LLMs already handle ordinary recipe help, so an "AI chef" alone is not differentiated.

The defensible value is the combination of: rare or underused sources, curated provenance, historical and regional classification, editorial rigor, source-grounded retrieval, and a genuinely useful workflow for cooks, researchers, and enthusiasts. If those foundations are weak, model polish and UI will not save the project.

## How We Get There

The vision is reached in milestones, each scoped by its own ADR (V1, then V2, and so on). This document stays high-level and aspirational; ADRs own committed scope.

- **Current milestone, V1:** see [ADR-0004](00_project_room/decisions/adr/0004-v1-scope-faithful-pre-1929-editions.md). Faithful Level A digital editions from rights-verified pre-1929 candidates, plus catalog and metadata search. This is book-level only: a catalog of books and a faithful **Level A reader** (cleaned, well-typeset transcription of the source text, not page facsimiles and not reinterpretation). It is **not** recipe extraction.
- **Next milestone, V2 (anticipated):** the **Recipe Engine** below, extracting and classifying individual recipes into the structured database. It needs its own ADR and depends on V1's OCR contract and rights work. It is what unlocks recipe search, the Collana, dish maps, and trending.
- Everything below (the Engine and the End-State Experiences) is **aspirational**: where we are heading, not committed scope. Each becomes its own ADR when promoted.

**V1 in practice.** V1 ships in phases. **V1a** is an offline / localhost prototype (private; prove the OCR/transcription pipeline and the reader/library UI on the pilot source). **V1b** is a public launch, gated on a value-bearing product *and* the rights sign-off. V1's realistic audience is researchers, enthusiasts, and cultural preservation, plus the foundation everything else builds on; the broad "companion for newcomers" value (interpretation, translation, guided/AI search) arrives with **V2**.

## The Engine: A Structured Recipe Database

Everything downstream depends on turning scanned sources into a structured, queryable recipe database:

- **Pipeline:** scan, extract, classify, store, with provenance and citations preserved.
- **Classification axes** (horizontal and vertical): ingredient/protein (e.g. chicken, beef, vegetarian), course (soups, desserts, and so on), technique, cooking method, region/kitchen (Italian and other European cuisines), period/year, use/function, and measurement precision.

A well-classified database is what makes discovery, curation, maps, timelines, and AI search possible.

## End-State Experiences (Aspirational)

Not committed scope: the menu of what the platform could become once the database exists.

### Discovery & Navigation
- A friendly, inviting UI that resurfaces recipes rather than burying them.
- **Conversational AI search** with iterative narrowing (e.g. "chicken + butter" returns many results; "+ sage" filters further), exploring by ingredient, technique, region, or period.
- **Regional maps** showing dishes by place.
- A **timeline** from the earliest sources to the most recent.

### Curated Works: the "Collana"
- AI-assisted assembly of *new* curated collections from the database, reorganized by theme (protein, course, region, period) with an editorial point of view.
- This mirrors how a cook historically authored a book: read widely, test, select what makes the cut, reorganize, add a personal twist, now done at scale with a database and AI.
- This is **transformation, not republishing**. *Rights caveat:* a recipe's list of ingredients is generally not copyrightable, but the original expressive text often is, so building new works from extracted recipes still requires rights review, not just reorganization.

### Enrichment
- **Speculative dish imagery** (image generation) for dishes never photographed ("eat with your eyes"), always clearly labeled as speculative, never presented as historical evidence.
- **Chef collaborations:** webinars or cooking videos of aspiring and well-known chefs trying the dishes.

### Adjacent Knowledge
- Culinary-adjacent domains in our sources earn their own sections: **agriculture** (e.g. olive cultivation and oil pressing), **butchery** (cuts and techniques), and preservation.
- Framing: "Italian and European cultural learnings, resurfaced," not strictly recipes.

### Social & Community Engagement
- Verified users (email + login) engage with each recipe: leave **comments**, post **photos of dishes they've actually cooked**, and **upvote / downvote**.
- Popularity signals surface the best dishes (a **trending page**, "most cooked," and similar), turning a static library into a living, social space around historical recipes.
- *Caveat:* this adds accounts, moderation, and trust/safety needs, and community signals (votes, photos, comments) must stay clearly separated from historical source content: opinion is not evidence.

### Community Heritage
- Let people contribute **family and handwritten recipe books** (e.g. a grandmother's recipes) via PDF, with provenance (name, place of origin, approximate year).
- These become a preserved, living piece of culinary history, valuable even to contributors who don't cook themselves.

## Who It's For

Curious public and home cooks; aspiring and well-known chefs; culinary and cultural researchers; the Italian Builders community; and families preserving heritage recipes.

## Constraints That Shape The Vision

- **Copyright/rights** is the central constraint. It is why V1 is limited to rights-verified sources, why public rendering is gated, and why the long-term strategy leans on *transformation* (the Collana) rather than republishing. Rights review is a permanent part of the workflow, not a one-time gate.
- **Authenticity:** source text and editorial interpretation must always be distinguishable. Modernized or interpreted content is labeled, never passed off as the original.
- **Trust over polish:** a beautiful UI on unreliable data is a liability. Expose what is actually known; never imply the corpus is cleaner, more complete, or more rights-cleared than it is.

## Explicitly Not V1

Deferred, not rejected. These become GitHub issues / future ADRs once the foundation works:

- Publishing a book or collana.
- Creating standardized modern versions of historical recipes.
- Editorially rewriting source material into new cookbooks.
- Publicly hosting copyrighted PDFs or OCR text before rights are verified.
- Fine-tuning or releasing model weights before a retrieval/evaluation baseline exists.

## Open Decisions

- How should the six IB-010 `public_domain_verified` sources be represented in the asset manifest and UI rights gates?
- Does V1 include full-text search for verified sources, or only cleaned digital edition pages plus metadata search?
- Does V1 include an AI feature, or is AI explicitly a post-V1 stretch?
- When should deferred backlog work be promoted into active scope?

## Vision Interview Gate

Do not finalize the broader vision until the team confirms public-source policy and release-review ownership. V1 issue ownership now lives on GitHub issues / the Project board.
