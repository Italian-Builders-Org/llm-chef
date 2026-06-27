# Decision Register

Status: Active.

Last updated: 2026-06-27.

## Architecture Decision Records

Significant decisions are recorded as ADRs in [`adr/`](adr/) (start with [`adr/0001-use-adrs.md`](adr/0001-use-adrs.md)). This table is the lightweight ledger and index; rows backed by an ADR name it in the Decision cell.

- ADR-0001 — Use ADRs
- ADR-0002 — Repository topology
- ADR-0003 — Three-layer folder system
- ADR-0004 — V1 scope: faithful digital editions from pre-1929 candidates
- ADR-0005 — Entity slug standard & OKF scope

| Date | Decision | Status | Rationale | Revisit trigger |
|---|---|---|---|---|
| 2026-06-27 | Use the 3-layer folder system locally. | Provisional | User requested this structure and it fits agent/human routing. | If contributors find routing unclear after first week. |
| 2026-06-27 | Defer GitHub issues and project board. | Provisional | User requested local organization first. | After vision and first milestone are clear. |
| 2026-06-27 | Do not copy raw PDFs/screenshots into repo yet. | Provisional | Size, provenance, and rights policy are not settled. | After source/provenance policy is approved. |
| 2026-06-27 | Treat source inventory/data foundation as required for V1. | Provisional | The website needs trustworthy metadata and rights status to avoid becoming a vague demo. | If team chooses an AI-only or frontend-only prototype. |
| 2026-06-27 | Use English as default docs language with Italian terms preserved. | Decided | Adam confirmed repo docs should be in English. | If the team later needs bilingual public docs. |
| 2026-06-27 | Target a live digital-library website in 2-4 weeks. | Provisional | Adam set the desired first milestone: inventory, database, frontend, maybe AI. | Team V1 scope decision. |
| 2026-06-27 | Keep publishing and editorial modernization out of V1. | Provisional | Adam said V1 should not create standardized book/recipe versions yet. | After the digital library is live and useful. |
| 2026-06-27 | Prefer public/open-source outputs where legally safe. | Provisional | Adam's intent is open source, bounded by copyright law. | After source rights review. |
| 2026-06-27 | V1 = faithful digital editions (Level A) from rights-verified pre-1929 candidate sources, plus catalog + metadata search (ADR-0004). | Decided | Adam confirmed pre-1929 candidate scope; faithful re-rendering, not reinterpretation. Pre-1929 still requires rights verification. | If rights review leaves too few verified sources. |
| 2026-06-27 | Repo topology: this repo is planning/info only; product code lives in a separate repo; a dedicated LLM repo only when it earns its own deploy boundary. | Decided | Split by deploy boundary, cadence, and audience, not by topic. | When LLM/RAG needs independent deployment. |
| 2026-06-27 | Layer 2 rooms are a stable numbered skeleton; subfolders are created on demand per `FOLDER_MAP.md`. | Decided | Keep contributor signposts without empty-folder clutter. | If routing becomes unclear. |
| 2026-06-27 | Entity IDs use stable kebab-case slugs (`author-year-shorttitle`). | Decided | Human-readable, URL- and OKF-ready, stable across title changes. | If slug collisions need a different scheme. |
| 2026-06-27 | OKF scoped to the structured data contract (books/recipes), not repo or folder structure. | Decided | OKF describes data products, not planning docs. | When the data contract is built. |
| 2026-06-27 | Level B/C reinterpretation deferred (tracked in backlog B002). | Decided | Faithful editions first; reinterpretation is a derivative work with rights/editorial risk. | After V1 ships and editorial policy is set. |
| 2026-06-27 | Defer confirming team members and roles; handle via GitHub issues/Projects. | Decided | Roles and ownership will be tracked in GitHub once the remote is connected. | When the GitHub remote/board is set up. |
| 2026-06-27 | Raw source files: restricted team Google Drive as the archive (off-git); public hosting of rights-cleared assets deferred to build time (IB-014/IB-027); Slack for pointers only, not storage. | Decided | Drive fits 20GB + team access; Slack is unfit as a store; nothing copyrighted goes public until cleared. | When the product must serve cleared assets, or if Drive limits/access become a problem. |

## How To Add Decisions

Add a row when a choice changes future work. Do not use this file for minor todos.
