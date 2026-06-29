# Chef-LLM

Single repository for the historical Italian cookbook project: planning and coordination in the numbered rooms, and the website code in `/website`.

This repo is currently in setup mode. The priority is to make the project legible for humans and agents, define routing, capture unknowns, and avoid turning early screenshots into fake certainty.

## Read Order

1. `AGENTS.md` - operating rules for AI agents and contributors.
2. `VISION.md` - current vision draft, open questions, and strategic risks.
3. `FOLDER_MAP.md` - 3-layer folder system and where work belongs.
4. `00_project_room/README.md` - project coordination room.
5. The relevant area README before touching files inside that area.

## Current Status

- `main` is pushed to `Italian-Builders-Org/llm-chef` and branch protection is enabled: work should flow through PRs with at least one approval.
- 28 V1 GitHub issues (#1-#28, milestone `V1`) and the Chef-LLM Project board are live; track work there. `00_project_room/todos/ISSUE_DRAFTS.md` is now a frozen plan snapshot.
- Raw PDFs, screenshots, and large source files are not copied into the repo yet.
- V1 scope is accepted in ADR-0004: faithful Level A digital editions for rights-verified pre-1929 candidate sources, plus catalog and metadata search.

## Repo Topology

This is a **single repository** (per `00_project_room/decisions/adr/0006-single-repository-topology.md`). Planning and knowledge live in the numbered rooms (`00_project_room/` … `90_archive/`); the website code lives in `/website`; the data contract lives in `/data`; LLM/RAG code (later) lives in `/llm`.

Keep planning in the rooms and code in `/website`; do not mix them. The host deploys the `/website` folder as its root.

## Start Here (Contributors)

This single repo holds **both** the planning (numbered rooms) and the website code (`/website`); see Repo Topology above.

1. Read the docs in the order above to understand the project and how we work.
2. **Pick up work from GitHub Issues / the Project board**, not from this file. See `00_project_room/routing/CONTRIBUTOR_WORKFLOW.md` for the contribution flow (fork, PR, review).
3. **Code** goes in `/website` (scaffolded in IB-004). Early on, the most useful non-code help is source rights/metadata research and the data contract.
4. Treat `00_project_room/todos/ISSUE_DRAFTS.md` as a frozen planning snapshot; live work belongs in GitHub Issues / the Project board.

## License

- **Code** → MIT (see [`LICENSE`](LICENSE)).
- **Data / metadata** → CC0 (added with `/data`).
- **Content** (Level A transcriptions of public-domain sources) → public domain / CC0.
- Future editorial content (V2) is reserved under CC-BY-SA.

See [ADR-0008](00_project_room/decisions/adr/0008-project-licenses.md). Licensing never overrides rights: no source is published until it is rights-cleared (`public_domain_verified`).
