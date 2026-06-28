# Decision Register

Status: Active.

Last updated: 2026-06-28.

## Architecture Decision Records

Significant decisions are recorded as ADRs in [`adr/`](adr/) (start with [`adr/0001-use-adrs.md`](adr/0001-use-adrs.md)). This table is the lightweight ledger and index; rows backed by an ADR name it in the Decision cell.

- ADR-0001 — Use ADRs
- ADR-0002 — Repository topology (superseded by ADR-0006)
- ADR-0003 — Three-layer folder system
- ADR-0004 — V1 scope: faithful digital editions from pre-1929 candidates
- ADR-0005 — Entity slug standard & OKF scope
- ADR-0006 — Single-repo topology (supersedes ADR-0002)
- ADR-0007 — V1 web stack: Next.js on Vercel

| Date | Decision | Status | Rationale | Revisit trigger |
|---|---|---|---|---|
| 2026-06-27 | Use the 3-layer folder system locally. | Provisional | User requested this structure and it fits agent/human routing. | If contributors find routing unclear after first week. |
| 2026-06-27 | Defer GitHub issues and project board until local foundation exists. | Completed | User requested local organization first; this has now produced issue drafts, ADRs, and routing docs. | Next step is promoting the first live issues and board, not continuing to defer. |
| 2026-06-27 | Do not copy raw PDFs/screenshots into repo yet. | Superseded by raw-source storage decision | Size, provenance, and rights policy required a storage decision. | See the 2026-06-27 raw source files decision below. |
| 2026-06-27 | Treat source inventory/data foundation as required for V1. | Provisional | The website needs trustworthy metadata and rights status to avoid becoming a vague demo. | If team chooses an AI-only or frontend-only prototype. |
| 2026-06-27 | Use English as default docs language with Italian terms preserved. | Decided | The project owner confirmed repo docs should be in English. | If the team later needs bilingual public docs. |
| 2026-06-27 | Target a live V1 digital-library website in 2-4 weeks. | Decided | The project owner set the desired first milestone; ADR-0004 and ADR-0007 narrow this to a catalog/faithful-edition site with static data and no V1 database. | If rights/OCR leave too little public content for a credible V1. |
| 2026-06-27 | Keep publishing and editorial modernization out of V1. | Provisional | The project owner said V1 should not create standardized book/recipe versions yet. | After the digital library is live and useful. |
| 2026-06-27 | Prefer public/open-source outputs where legally safe. | Provisional | The project owner's intent is open source, bounded by copyright law. | After source rights review. |
| 2026-06-27 | V1 = faithful digital editions (Level A) from rights-verified pre-1929 candidate sources, plus catalog + metadata search (ADR-0004). | Decided | The project owner confirmed pre-1929 candidate scope; faithful re-rendering, not reinterpretation. Pre-1929 still requires rights verification. | If rights review leaves too few verified sources. |
| 2026-06-27 | Repo topology: this repo is planning/info only; product code lives in a separate repo; a dedicated LLM repo only when it earns its own deploy boundary. | Superseded by ADR-0006 | Split by deploy boundary, cadence, and audience, not by topic. | Superseded 2026-06-28: org owner confirmed single repo. |
| 2026-06-27 | Layer 2 rooms are a stable numbered skeleton; subfolders are created on demand per `FOLDER_MAP.md`. | Decided | Keep contributor signposts without empty-folder clutter. | If routing becomes unclear. |
| 2026-06-27 | Entity IDs use stable kebab-case slugs (`author-year-shorttitle`). | Decided | Human-readable, URL- and OKF-ready, stable across title changes. | If slug collisions need a different scheme. |
| 2026-06-27 | OKF scoped to the structured data contract (books/recipes), not repo or folder structure. | Decided | OKF describes data products, not planning docs. | When the data contract is built. |
| 2026-06-27 | Level B/C reinterpretation deferred (tracked in backlog B002). | Decided | Faithful editions first; reinterpretation is a derivative work with rights/editorial risk. | After V1 ships and editorial policy is set. |
| 2026-06-27 | Defer confirming team members and roles; handle via GitHub issues/Projects. | Decided | Roles and ownership will be tracked in GitHub once live issues and the board are created. | When the GitHub board is set up. |
| 2026-06-27 | Raw source files: restricted team Google Drive as the archive (off-git); public hosting of rights-cleared assets deferred to build time (IB-014/IB-027); Slack for pointers only, not storage. | Decided | Drive fits 20GB + team access; Slack is unfit as a store; nothing copyrighted goes public until cleared. | When the product must serve cleared assets, or if Drive limits/access become a problem. |
| 2026-06-28 | Single repo (`llm-chef`): website in `/website`, data in `/data`, LLM in `/llm` later; host deploys the `/website` folder as its root. Fork-based PRs for everyone. (ADR-0006, supersedes ADR-0002) | Decided | Org owner confirmed one repo; simpler for a small team; reversible if a part later earns its own deploy. | If `/website` or the LLM needs an independent deploy boundary. |
| 2026-06-28 | V1 web stack: Next.js + Vercel (deploy `/website`); no DB in V1 (a V2 decision); keep data/API decoupled. (ADR-0007, resolves IB-005) | Decided | One framework from V1 through the V2 app surface (accounts/social/AI); no later migration. | When traffic/cost or the V2 surface forces a hosting re-eval. |

## How To Add Decisions

Add a row when a choice changes future work. Do not use this file for minor todos.
