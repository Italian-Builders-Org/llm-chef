# Issue Drafts

Status: Draft issue candidate backlog before live GitHub issues/Project board exist.

Last updated: 2026-06-28 (Recipe Engine scoped as V2; epics, owner-type/size, walking skeleton, bootstrap split).

These are GitHub issue candidates, not active assignments. They are intentionally task-shaped: each should be small enough to own, review, and close.

Backlog ideas live in `00_project_room/backlog/BACKLOG.md`. Do not convert every backlog item into a GitHub issue. Only promote backlog items after the team decides they belong in an active milestone.

## Promotion Rules

- Keep dependencies intact. Do not start a blocked ticket just because it is interesting.
- Every promoted issue needs an owner, primary area, success check, and out-of-scope section.
- Product app code belongs in `/website`, not the numbered planning rooms.
- Public PDF/OCR/full-text work is blocked until source rights are labeled (IB-010).
- Single repo (ADR-0006): the `Area` field is the primary work area within `llm-chef`: `website` = `/website`, `planning` = the numbered rooms, `data` = `/data`. Pick exactly one primary area; use labels/notes for secondary impact. There is no separate product repo.
- IDs are frozen. When splitting or adding work, use a new ID; do not renumber existing tickets.
- This file is **pre-launch staging**. Once GitHub issues exist (Phase 0), it is frozen as a snapshot, superseded by the issues/board, and moved to `90_archive/`. Do not maintain both.

## How To Run It

After Phase 0, work is grouped into **epics** (ownable deliverables). Epics A–C run **in parallel**, then converge:

- **Epic A** — source corpus, inventory, rights (the gating path).
- **Epic B** — product shell + walking skeleton (a thin live site early).
- **Epic C** — OCR feasibility + Level A text (go/no-go on the faithful-edition premise).
- **Epics D–E** — data contract + specs once the first pilot survives rights + OCR.
- **Epics F–H** — build → ship → post-V1.

Owner-type: `core` (team) · `community` (open to all) · `specialist` (OCR/ML). Size: `xs/s/m/l`. See `00_project_room/routing/CONTRIBUTOR_WORKFLOW.md` for how to pick up and PR work.

Guard rail: the walking skeleton renders sample or verified-safe **metadata only**. No PDF/OCR/full text reaches the public until rights labels (IB-010) and UI rights gates (IB-028) exist.

## Epics

Each epic is an ownable deliverable. Encode as a milestone or tracking issue (see `CONTRIBUTOR_WORKFLOW.md`).

| Epic | Theme | Owner-type | Issues |
|---|---|---|---|
| A | Source library & rights | core (+ community research) | IB-006, 007, 008, 009, 010, 011, 014, 038 |
| B | Product foundation | core | IB-004, 005, 023 |
| C | OCR & Level A text | specialist | IB-037, 015, 016 |
| D | Data contract & taxonomy | core (+ community) | IB-012, 013, 021, 017 |
| E | Product specs | core | IB-018, 019, 020, 022 |
| F | Catalog & reader build | community | IB-024, 025, 026, 027, 028 |
| G | Ship V1 | core | IB-029, 030 |
| H | Post-V1 stretch | community + specialist | IB-031, 032, 033, 034, 036 |

## Phase 0 — Bootstrap (owner: Adam, off-tracker)

These create the tracker itself, so they are not GitHub issues. Do them once, by hand. IDs are kept for dependency references only.

| ID | Task | Owner |
|---|---|---|
| IB-001 | Connect repo remote (origin → llm-chef) | Adam |
| IB-002 | Set up GitHub labels, issue templates, and Project board (was IB-002 + IB-003) | Adam |

## Dependency Order

### Epic A — Source library & rights

| Issue | Area | Owner | Size | Depends on |
|---|---|---|---|---|
| IB-006 Locate raw source corpus and storage options | planning | core | S | Phase 0 — start now |
| IB-007 Normalize seed book inventory with slugs | planning | core | M | none — start now |
| IB-008 Verify bibliographic metadata for seed books | planning | community | M | IB-007 |
| IB-009 Identify V1 pre-1929 candidate pool | planning | core | S | IB-007, IB-008 |
| IB-010 Assign public-release labels to V1 candidates | planning | core | M | IB-006, IB-009 |
| IB-011 Select 3-5 pilot sources for V1 | planning | core | S | IB-010 |
| IB-014 Define source asset manifest | data | core | S | IB-006, IB-010 |
| IB-038 Choose project licenses (code, data, content) | planning | core | S | none — start now |

### Epic B — Product foundation (shell + walking skeleton)

| Issue | Area | Owner | Size | Depends on |
|---|---|---|---|---|
| IB-004 Scaffold the /website workspace | website | core | S | Phase 0 |
| IB-005 Decide hosting/deployment stack (decided in ADR-0007) | planning | core | XS | n/a |
| IB-023 Scaffold web app + hello-world deploy | website | core | M | IB-004 |

### Epic C — OCR & Level A text

| Issue | Area | Owner | Size | Depends on |
|---|---|---|---|---|
| IB-037 OCR feasibility go/no-go spike | planning | specialist | M | IB-011 |
| IB-015 Define Level A OCR/text contract | planning | specialist | M | IB-010, IB-011, IB-037 (go) |
| IB-016 Measure OCR quality for pilot sources | planning | specialist | M | IB-011, IB-015 |

### Epic D — Data contract & taxonomy

| Issue | Area | Owner | Size | Depends on |
|---|---|---|---|---|
| IB-012 Define `books.json` schema | data | core | M | IB-007 |
| IB-013 Create seed `books.json` | data | community | S | IB-012 |
| IB-021 Version, publish, and validate the data contract | data | core | M | IB-012, IB-013, IB-014 |
| IB-017 Define catalog taxonomy v1 | planning | core | M | IB-008 |

### Epic E — Product specs

| Issue | Area | Owner | Size | Depends on |
|---|---|---|---|---|
| IB-018 Write V1 product requirements spec | planning | core | M | IB-011, IB-013, IB-017 |
| IB-019 Write Level A reader UX spec | planning | core | M | IB-015, IB-018 |
| IB-020 Write catalog/search UX spec | planning | core | M | IB-013, IB-017, IB-018 |
| IB-022 Define rights-gating product behavior | planning | core | M | IB-010, IB-018 |

### Epic F — Catalog & reader build

| Issue | Area | Owner | Size | Depends on |
|---|---|---|---|---|
| IB-024 Load catalog data in product app | website | community | M | IB-013, IB-021, IB-023 |
| IB-025 Build catalog page and filters | website | community | M | IB-017, IB-020, IB-024 |
| IB-026 Build book detail pages | website | community | M | IB-020, IB-024 |
| IB-027 Build Level A reader for pilot source | website | community | L | IB-016, IB-019, IB-023 |
| IB-028 Implement rights gates in UI | website | core | M | IB-022, IB-025, IB-026, IB-027 |

### Epic G — Ship V1

| Issue | Area | Owner | Size | Depends on |
|---|---|---|---|---|
| IB-029 Deploy public V1 site | website | core | S | IB-024, IB-028 |
| IB-030 Run V1 release QA | website | core | M | IB-025, IB-026, IB-027, IB-028, IB-029 |

### Epic H — Post-V1 stretch

| Issue | Area | Owner | Size | Depends on |
|---|---|---|---|---|
| IB-031 RAG feasibility spike | planning | specialist | M | IB-016, IB-030 |
| IB-032 Digital timeline view | website | community | M | IB-017, IB-030 |
| IB-033 Community contribution flow | website | core | M | IB-030 |
| IB-034 Speculative dish image policy/spike | planning | core | S | IB-030 |
| IB-036 Editorial modernization planning | planning | core | M | IB-030, backlog B002 |

### V2 (anticipated) — Recipe Engine

Not yet broken into issues. The **Recipe Engine** — extract individual recipes from V1's faithful text and classify them (ingredient/protein, course, technique, region/kitchen, period, function) into the structured recipe database — is the anticipated **V2 milestone**. It needs its own **ADR** and issue set, and depends on V1's OCR/text contract (IB-015) and rights labels (IB-010). Most vision experiences (AI recipe search, the Collana, dish maps, trending) depend on it. Do not start before V1 ships. V1's `books.json` is book-level only; the Engine adds the recipe level.

## Candidates

### IB-004: Scaffold the `/website` workspace

**Area:** website (`/website` in this repo)
**Labels:** `setup`, `website`, `blocking`
**Dependencies:** Phase 0, ADR-0007
**Output:** the `/website` app workspace in `llm-chef`, per ADR-0006, with lint/build/dev scripts and a README.
**Success check:** `/website` runs locally, the host can deploy it with `/website` as the root directory, and no source corpus is committed.
**Out of scope:** building the catalog UI.

### IB-005: Decide hosting and deployment stack

**Area:** planning
**Labels:** `architecture`, `deployment`, `decision`
**Status:** Done locally via ADR-0007; do not promote as a live issue unless the team wants a historical tracking issue.
**Dependencies:** none
**Decided:** ADR-0007 — Next.js on Vercel (deploy `/website`); DB deferred to V2.
**Output:** an ADR covering hosting, database, storage, preview deployments, and environment management.
**Success check:** team can answer where V1 deploys, where data lives, and how `/website` reads the data contract.
**Out of scope:** actual deployment implementation.

### IB-006: Locate raw source corpus and storage options

**Area:** planning
**Labels:** `source-library`, `storage`, `rights`, `blocking`
**Dependencies:** none — start immediately
**Output:** inventory of where PDFs/scans currently live and storage options for V1.
**Success check:** each known source location is listed with owner, size, access method, physical-copy owner, scan creator if known, and whether it can be shared with contributors. Confirm Adam's note that original seed-list PDFs were scanned from his own physical copies.
**Storage decision:** raw masters live in a restricted team Google Drive (off-git); rights-cleared pilot assets get hosted at build time (IB-014/IB-027); Slack is for pointers, not storage.
**Out of scope:** uploading files to public storage.

### IB-007: Normalize seed book inventory with slugs

**Area:** planning
**Labels:** `source-library`, `data-foundation`, `v1`
**Dependencies:** none — start immediately
**Output:** structured inventory table with stable slugs using ADR-0005.
**Success check:** every seed book has `slug`, display title, assumed year, language if known, and verification status.
**Out of scope:** rights verification and OCR.

### IB-008: Verify bibliographic metadata for seed books

**Area:** planning
**Labels:** `source-library`, `bibliography`, `v1`
**Dependencies:** IB-007
**Output:** corrected metadata for the seed inventory.
**Success check:** each row marks title/year/author/edition as verified, corrected, or unknown with notes.
**Out of scope:** legal public-domain approval.

### IB-009: Identify V1 pre-1929 candidate pool

**Area:** planning
**Labels:** `source-library`, `v1`, `scope`
**Dependencies:** IB-007, IB-008
**Output:** list of pre-1929 candidate sources for faithful Level A treatment.
**Success check:** candidate pool is explicitly marked as candidate-only, not public-domain verified.
**Out of scope:** using post-1929 titles as V1 full-text content.

### IB-010: Assign public-release labels to V1 candidates

**Area:** planning
**Labels:** `rights`, `source-library`, `blocking`, `v1`
**Dependencies:** IB-006, IB-009
**Output:** each V1 candidate gets a public-release label from `10_source_library/provenance/PUBLIC_RELEASE_POLICY.md` using the checklist in `10_source_library/provenance/RIGHTS_VERIFICATION_RESEARCH.md`.
**Success check:** every candidate has work-level, edition-level, source-file/provider, jurisdiction, and cultural-heritage checks marked complete or explicitly blocked; no candidate has public PDF/OCR/full-text status without `public_domain_verified` or an explicit equivalent decision.
**Out of scope:** legal advice; this is project risk triage unless counsel is involved.

### IB-011: Select 3-5 pilot sources for V1

**Area:** planning
**Labels:** `v1`, `source-library`, `priority`
**Dependencies:** IB-010
**Output:** short pilot list for first faithful digital editions.
**Success check:** each pilot source has verified metadata, storage location, rights label, and rationale.
**Out of scope:** selecting the whole corpus.

### IB-012: Define `books.json` schema

**Area:** data
**Labels:** `data-foundation`, `schema`, `blocking`
**Dependencies:** IB-007
**Output:** schema for book records consumed by `/website` (the OKF-scoped data contract).
**Success check:** fields include slug, display title, year, author, source type, rights status, file pointers, and verification status.
**Out of scope:** recipe-level schema.

### IB-013: Create seed `books.json`

**Area:** data
**Labels:** `data-foundation`, `v1`
**Dependencies:** IB-012
**Output:** machine-readable seed data for the catalog.
**Success check:** file validates against schema and contains all seed books.
**Out of scope:** product UI rendering.

### IB-014: Define source asset manifest

**Area:** data
**Labels:** `data-foundation`, `storage`, `rights`
**Dependencies:** IB-006, IB-010
**Output:** manifest format for PDFs/OCR/page images and where they live.
**Success check:** manifest distinguishes private, metadata-only, and public-release assets.
**Out of scope:** storing large assets in git.

### IB-015: Define Level A OCR/text contract

**Area:** planning
**Labels:** `data-foundation`, `ocr`, `v1`
**Dependencies:** IB-010, IB-011, IB-037 (go)
**Output:** contract for faithful text: what counts as OCR, cleaned OCR, transcription, page references, and known uncertainty.
**Success check:** `/website` can render text without guessing whether it is source text or editorial interpretation.
**Forward-compat:** capture text with structure and page/section references (not a flat blob) so the V2 Recipe Engine can extract recipes from it later without re-processing.
**Out of scope:** Level B/C recipe modernization.

### IB-016: Measure OCR quality for pilot sources

**Area:** planning
**Labels:** `ocr`, `quality`, `v1`
**Dependencies:** IB-011, IB-015
**Output:** per-pilot deep quality pass (the early go/no-go is IB-037).
**Success check:** each pilot has sample OCR accuracy notes, known failure modes, and recommendation: render now, clean first, or defer.
**Out of scope:** full-corpus OCR cleanup.

### IB-017: Define catalog taxonomy v1

**Area:** planning
**Labels:** `taxonomy`, `data-foundation`, `v1`
**Dependencies:** IB-008
**Output:** controlled filter vocabulary for catalog V1.
**Success check:** taxonomy covers period, source type, language, rights status, and candidate/pilot status.
**Out of scope:** full recipe taxonomy.

### IB-018: Write V1 product requirements spec

**Area:** planning
**Labels:** `website`, `requirements`, `v1`
**Dependencies:** IB-011, IB-013, IB-017
**Output:** PRD-style V1 requirements anchored to ADR-0004.
**Success check:** requirements are testable and say what the website must do and must not do.
**Out of scope:** visual design exploration.

### IB-019: Write Level A reader UX spec

**Area:** planning
**Labels:** `website`, `ux`, `reader`, `v1`
**Dependencies:** IB-015, IB-018
**Output:** UX spec for faithful digital edition pages. Keep it light — a few pages, not a design system.
**Success check:** spec covers page/chapter navigation, source citation, OCR uncertainty, and rights/status display.
**Out of scope:** modernized recipe cards.

### IB-020: Write catalog/search UX spec

**Area:** planning
**Labels:** `website`, `ux`, `search`, `v1`
**Dependencies:** IB-013, IB-017, IB-018
**Output:** UX spec for catalog browsing and metadata search. Keep it light.
**Success check:** spec defines filters, result cards, empty states, and metadata-only books.
**Out of scope:** semantic search and AI chat.

### IB-021: Version, publish, and validate the data contract

**Area:** data
**Labels:** `data-foundation`, `website`, `contract`, `blocking`
**Dependencies:** IB-012, IB-013, IB-014
**Output:** versioning + a validation check for the data contract defined by IB-012 (`books.json` schema) and IB-014 (asset manifest). Does not redefine the schema.
**Success check:** the contract is versioned, has a runnable validation (CI or script), and `/website` can pin a known-good version without asking where data comes from.
**Out of scope:** schema design (IB-012), product implementation.

### IB-022: Define rights-gating product behavior

**Area:** planning
**Labels:** `rights`, `website`, `v1`
**Dependencies:** IB-010, IB-018
**Output:** behavior spec for what users see for verified, likely, metadata-only, private, and blocked sources.
**Success check:** no UI state accidentally exposes unverified source content.
**Out of scope:** legal approval.

### IB-023: Scaffold web app + hello-world deploy

**Area:** website
**Labels:** `website`, `frontend`, `setup`, `v1`
**Dependencies:** IB-004, ADR-0007
**Output:** initial web app scaffold with lint/build/dev commands, plus a live hello-world deploy (the walking skeleton).
**Success check:** app runs locally and a public deploy preview is reachable.
**Out of scope:** finished catalog UI. Renders sample or verified-safe metadata only; no PDF/OCR/full-text path until IB-010 + IB-028.

### IB-024: Load catalog data in product app

**Area:** website
**Labels:** `website`, `data`, `v1`
**Dependencies:** IB-013, IB-021, IB-023
**Output:** product app reads seed catalog data.
**Success check:** app renders known book count from data contract and fails clearly on invalid data.
**Out of scope:** search/filter UI. Metadata only; no source content until rights gates ship (IB-028).

### IB-025: Build catalog page and filters

**Area:** website
**Labels:** `website`, `frontend`, `search`, `v1`
**Dependencies:** IB-017, IB-020, IB-024
**Output:** catalog page with metadata filters.
**Success check:** users can filter by period/type/language/rights status and open book detail pages.
**Out of scope:** full-text search.

### IB-026: Build book detail pages

**Area:** website
**Labels:** `website`, `frontend`, `v1`
**Dependencies:** IB-020, IB-024
**Output:** detail page for each book.
**Success check:** each page shows metadata, rights status, source status, and whether full text is available.
**Out of scope:** reader page for OCR text.

### IB-027: Build Level A reader for pilot source

**Area:** website
**Labels:** `website`, `frontend`, `reader`, `v1`
**Dependencies:** IB-016, IB-019, IB-023
**Output:** faithful reader view for at least one verified pilot source.
**Success check:** reader shows source text with citation/page context and no modernized recipe content.
**Out of scope:** Level B/C interpretation.

### IB-028: Implement rights gates in UI

**Area:** website
**Labels:** `website`, `rights`, `v1`, `blocking`
**Dependencies:** IB-022, IB-025, IB-026, IB-027
**Output:** UI gating that hides or disables unverified source content.
**Success check:** metadata-only sources never expose PDF/OCR/full text; verified sources show allowed content only.
**Out of scope:** changing rights labels.

### IB-029: Deploy public V1 site

**Area:** website
**Labels:** `website`, `deployment`, `v1`
**Dependencies:** IB-024, IB-028
**Output:** public URL for the full V1 site (the hello-world deploy from IB-023 is promoted to the real release).
**Success check:** deployment is reproducible, deploys the `/website` folder as its root, and exposes no ungated source content.
**Out of scope:** custom domain if it blocks launch.

### IB-030: Run V1 release QA

**Area:** website
**Labels:** `qa`, `v1`, `release`
**Dependencies:** IB-025, IB-026, IB-027, IB-028, IB-029
**Output:** QA report before sharing with Italian Builders/community.
**Success check:** catalog, detail pages, rights gates, reader, mobile layout, and public URL are verified.
**Out of scope:** adding new features during QA.

### IB-031: RAG feasibility spike

**Area:** planning
**Labels:** `ai`, `rag`, `stretch`, `post-v1`
**Dependencies:** IB-016, IB-030
**Output:** short spike testing source-grounded Q&A over verified pilot text.
**Success check:** answers cite sources and say "not found"; otherwise AI remains out of scope.
**Out of scope:** fine-tuning and model-weight release.

### IB-032: Digital timeline view

**Area:** website
**Labels:** `website`, `timeline`, `stretch`, `post-v1`
**Dependencies:** IB-017, IB-030
**Output:** timeline view of books by year/period.
**Success check:** timeline uses verified metadata and links to book detail pages.
**Out of scope:** full historical essay writing.

### IB-033: Community contribution flow

**Area:** website
**Labels:** `community`, `github`, `post-v1`
**Dependencies:** IB-030
**Output:** way for contributors to suggest corrections, sources, or metadata changes.
**Success check:** submissions route into GitHub issues or a documented review queue.
**Out of scope:** open uploads of copyrighted PDFs.

### IB-034: Speculative dish image policy/spike

**Area:** planning
**Labels:** `image-generation`, `policy`, `post-v1`
**Dependencies:** IB-030
**Output:** decision on whether speculative dish images are allowed and how they must be labeled.
**Success check:** policy prevents generated images from being mistaken for historical evidence.
**Out of scope:** production image generation.

### IB-036: Editorial modernization planning

**Area:** planning
**Labels:** `editorial`, `backlog`, `post-v1`
**Dependencies:** IB-030, backlog B002
**Output:** scoped plan for Level B/C modernization after V1.
**Success check:** plan defines approval workflow, measurement policy, and sample selection.
**Out of scope:** writing modernized recipes now.

### IB-037: OCR feasibility go/no-go spike

**Area:** planning
**Labels:** `ocr`, `spike`, `v1`, `risk`
**Dependencies:** IB-011 (or one candidate source + IB-006)
**Output:** quick OCR test on 1-2 candidate/pilot sources to decide whether faithful Level A rendering is viable before the reader spec chain is written.
**Success check:** a go/no-go recommendation with sample output. If no-go, V1 reader scope is reconsidered before IB-015/IB-019 are written.
**Out of scope:** full OCR pipeline; per-pilot deep quality pass (that is IB-016).

### IB-038: Choose project licenses (code, data, content)

**Area:** planning
**Labels:** `rights`, `legal`, `decision`, `blocking`
**Dependencies:** none — start early; informs IB-010 and IB-029
**Output:** an ADR choosing a code license (e.g. MIT/Apache-2.0), a data license for `books.json`/metadata (e.g. CC0/CC-BY), and content terms for rendered source text.
**Success check:** LICENSE file(s) planned for the repo (code and data); data and content terms documented and consistent with the open-source intent and rights constraints.
**Out of scope:** legal counsel sign-off (flag if needed).
