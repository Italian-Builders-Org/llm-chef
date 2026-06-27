# Chef-LLM

Local foundation for organizing the historical Italian cookbook project before GitHub issues, GitHub Projects, or product code.

This repo is currently in setup mode. The priority is to make the project legible for humans and agents, define routing, capture unknowns, and avoid turning early screenshots into fake certainty.

## Read Order

1. `AGENTS.md` - operating rules for AI agents and contributors.
2. `VISION.md` - current vision draft, open questions, and strategic risks.
3. `FOLDER_MAP.md` - 3-layer folder system and where work belongs.
4. `00_project_room/README.md` - project coordination room.
5. The relevant area README before touching files inside that area.

## Current Status

- Local git repo is connected to the `Italian-Builders-Org/llm-chef` remote; full project history is not pushed yet.
- GitHub issue candidates are drafted in `00_project_room/todos/ISSUE_DRAFTS.md` (grouped into epics); live issues and the Project board are the next bootstrap step.
- Raw PDFs, screenshots, and large source files are not copied into the repo yet.
- V1 scope is accepted in ADR-0004: faithful Level A digital editions for rights-verified pre-1929 candidate sources, plus catalog and metadata search.

## Repo Topology

This repo is the planning and information repo. It owns decisions, source inventory, provenance policy, data contracts, issue candidates, and coordination docs.

Do not add product application code here. The live website belongs in a separate product repo, per `00_project_room/decisions/adr/0002-repository-topology.md`.

## Start Here (Contributors)

This is the **planning & coordination repo** — no product or app code lives here (see Repo Topology above).

1. Read the docs in the order above to understand the project and how we work.
2. **Pick up work from GitHub Issues / the Project board**, not from this repo. See `00_project_room/routing/CONTRIBUTOR_WORKFLOW.md` for the fork/branch → PR → review flow.
3. **Code** goes in the separate **product repo** (being set up — IB-004). Until it exists, the most useful non-code help is source rights/metadata research and the data contract.
4. Before the GitHub board exists, `00_project_room/todos/ISSUE_DRAFTS.md` is the staging list of planned issues; it is superseded by the board once issues are created.
