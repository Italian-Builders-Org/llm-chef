# Folder Map

This repo uses a 3-layer folder system.

```
Chef-LLM/
│
├─ LAYER 1 · CONTEXT  ── "how to work here"
│  ├── README.md          human + agent orientation
│  ├── AGENTS.md          agent rules · read-first · update protocol
│  ├── CLAUDE.md          Claude review entrypoint
│  ├── VISION.md          draft vision + open questions
│  └── FOLDER_MAP.md      structure · naming · this map  (owns structure)
│
├─ LAYER 2 · ROOMS  ── "where work lives"  (stable, numbered)
│  ├── 00_project_room/                 coordination · routing · todos
│  │   └── decisions/
│  │       ├── DECISION_REGISTER.md     ledger / index
│  │       └── adr/  ························· LAYER 3 artifacts
│  │           ├── 0001-use-adrs.md
│  │           └── ...
│  ├── 10_source_library/               inventory · provenance
│  ├── 20_data_foundation/              taxonomy · schema  (→ books.json)
│  ├── 30_editorial_engine/             editorial playbook (Level A/B/C)
│  ├── 40_product_experience/           product options · design
│  ├── 50_model_lab/                    rag · evals                [dormant]
│  ├── 60_publishing_and_partnerships/  publishing · partners      [dormant]
│  └── 90_archive/                      superseded material
│
└─ LAYER 3 · ARTIFACTS  ── "the work itself"
   the real files inside each room (e.g. adr/ above):
   inventories · schemas · ADRs · drafts · templates
   subfolders created on demand · no navigation logic here
```

## Layer 1: Context and Orientation

Root files explain how to work here.

| File | Purpose |
|---|---|
| `README.md` | Human and agent orientation. |
| `AGENTS.md` | Global agent/contributor rules. |
| `CLAUDE.md` | Claude-specific review entrypoint. |
| `VISION.md` | Draft project vision and unresolved questions. |
| `FOLDER_MAP.md` | Navigation and ownership map. |

## Layer 2: Domain Rooms

Each top-level numbered folder is a room. Read its README before editing inside it. Rooms are a stable skeleton; their subfolders are created on demand (see Subfolder Creation Rule below).

| Room | Purpose |
|---|---|
| `00_project_room/` | Coordination, interviews, decisions, todos, routing, meeting context. |
| `10_source_library/` | Books, PDFs, scans, OCR status, provenance, source inventory. |
| `20_data_foundation/` | Taxonomy, schema, extraction pipeline, quality rules, master database design. |
| `30_editorial_engine/` | How historical recipes become readable editorial content without losing source integrity. |
| `40_product_experience/` | Reader/search/frontend/UX concepts and product surface decisions. |
| `50_model_lab/` | RAG, fine-tuning, model evaluation, experiments. |
| `60_publishing_and_partnerships/` | Volumes, fundraising, classes, chef/restaurant partnerships. |
| `90_archive/` | Superseded docs and inactive artifacts. |

## Layer 3: Artifacts and Execution

Layer 3 contains the actual work:

- inventories
- schemas
- decision records
- backlog items
- templates
- experiments
- drafts
- source references
- generated outputs

Layer 3 files should not redefine repo navigation. If a lower-level file needs broader context, link upward to the room README.

## Naming Conventions

| Thing | Convention | Example |
|---|---|---|
| Top-level rooms (Layer 2) | `NN_snake_case`, numbered in gaps of 10 to encode reading order and allow insertion | `10_source_library` |
| Subfolders | `snake_case`, no number prefix | `raw_sources` |
| Standalone docs | `SCREAMING_SNAKE_CASE.md` | `DECISION_REGISTER.md` |
| Root/canonical docs | `UPPERCASE.md` | `README.md`, `AGENTS.md` |
| Entity IDs / slugs (data, URLs) | lowercase kebab-case, ASCII, stable forever | `artusi-1891-scienza-in-cucina` |
| ADR files | `NNNN-kebab-title.md` under `00_project_room/decisions/adr/` | `0001-use-adrs.md` |

Repo organization uses filesystem hygiene, not OKF. Do not rename existing files for "slug purity" — slugs apply to data identifiers, not docs.

## New Room Rule (Layer 2)

Layer 2 rooms are a stable skeleton. Do not create a new top-level room unless:

1. The work cannot fit an existing room.
2. The room has a clear owner or purpose.
3. `FOLDER_MAP.md` is updated in the same change.

## Subfolder Creation Rule (Layer 3)

Subfolders are created on demand, by the contributor (or their agent) doing the work. The rule is identical for humans and agents:

1. **On demand only.** Create a subfolder when the first real file exists. No empty folders, no `.gitkeep` placeholders.
2. **Naming.** lowercase `snake_case`, descriptive noun. No number prefixes.
3. **Reuse before create.** Read the room README's Local Map table first; if an existing subfolder fits, use it.
4. **Register it.** In the same change, add a row to that room's Local Map table: `| newfolder/ | one-line purpose | active |`.
5. **Depth.** One level under a room by default. Go deeper only when distinct sub-streams emerge. Artifacts (Layer 3) live at the leaf.
6. **Link up, don't restate.** Files link to the room README for context; they never re-document repo navigation.

Each room README's Local Map table is the registry of that room's subfolders. Rows marked `create on demand` are intended destinations that do not yet exist as folders.

## Entity ID & Slug Standard

Books and (later) recipes get a stable kebab-case slug as their identity:

- Pattern: `author-year-shorttitle` (e.g. `artusi-1891-scienza-in-cucina`).
- Lowercase ASCII, hyphen-separated; no spaces or punctuation.
- **Stable forever:** a slug is identity, not a title. Never re-edit it even if the display title changes.
- Disambiguate editions/duplicates with a suffix (e.g. `artusi-1896-ricette`).

## Open Knowledge Format (OKF) Scope

OKF applies to the structured data contract only — the future `books.json` / recipe records in `20_data_foundation/` — not to repo, folder, or doc structure. When that contract is built:

- each record's `id` is its slug
- taxonomy (`20_data_foundation/taxonomy/`) becomes the controlled glossary
- relationships (book→author, recipe→book) are typed

OKF is not a folder convention and must not drive repo organization.
