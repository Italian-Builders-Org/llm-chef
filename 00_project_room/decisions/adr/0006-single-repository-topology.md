# ADR-0006: Single-Repository Topology

- Status: Accepted
- Date: 2026-06-28
- Deciders: Adam, Domenico (org owner)
- Supersedes: ADR-0002

## Context

ADR-0002 planned to split planning and product code into separate repos. The org owner (Domenico) confirmed the team should use the existing `Italian-Builders-Org/llm-chef` repo as the single home, with the website in a `/website` folder and the host (e.g. Vercel) deploying that folder as its root. Creating additional org repos was not the preferred path, and a single repo is simpler for a small team at this stage.

## Decision

Use one repository (`llm-chef`) for everything:

- **Planning & knowledge** stay in the numbered rooms (`00_project_room/` … `90_archive/`).
- **Product/app code** lives in `/website`; the host's deploy root points there.
- **Data contract** (`books.json`, manifests) lives in `/data`, consumed directly by `/website` at build. No cross-repo snapshot is needed.
- **LLM/RAG code**, when it starts, lives in `/llm` in this repo. It is split out only if it later earns an independent deploy boundary (the original ADR-0002 trigger still applies as a future option).

Contribution is fork-based for everyone (org convention): fork → PR → review → merge to a protected `main`.

## Consequences

- One clone, one board, one history; no cross-repo version coordination.
- Planning prose and app code share one history and PR stream. Mitigated by CODEOWNERS, path-scoped CI (build/deploy `/website` only on `/website/**` changes), and area labels.
- Reversible: `/website` can be extracted into its own repo later with history (`git filter-repo` / subtree) if it earns a deploy boundary.
- Issue drafts use a single primary `Area` field (`website`, `planning`, `data`) for work location within this repo, not a separate repository.
