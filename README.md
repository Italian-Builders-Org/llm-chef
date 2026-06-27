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

- Local git repo exists.
- No GitHub remote is configured yet.
- GitHub issues and project board are intentionally deferred.
- Raw PDFs, screenshots, and large source files are not copied into the repo yet.
- V1 scope is accepted in ADR-0004: faithful Level A digital editions for rights-verified pre-1929 candidate sources, plus catalog and metadata search.

## Repo Topology

This repo is the planning and information repo. It owns decisions, source inventory, provenance policy, data contracts, issue candidates, and coordination docs.

Do not add product application code here. The live website belongs in a separate product repo, per `00_project_room/decisions/adr/0002-repository-topology.md`.

## Working Principle

Do not start by building a broad app, training a model, or publishing a roadmap. Build only the inventory, data contract, source verification, and product-repo handoff needed to make ADR-0004 real.
