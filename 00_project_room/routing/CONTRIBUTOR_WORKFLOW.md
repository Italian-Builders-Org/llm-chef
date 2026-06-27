# Contributor Workflow

Status: Active. Last updated: 2026-06-27.

How work flows from an issue to merged code/docs across the Chef-LLM repos. Read this before picking up an issue or opening a PR. For *where* a task belongs, see `CONTRIBUTOR_ROUTING.md`; for repo structure, see `FOLDER_MAP.md`.

## Repos and the one board

| Repo | Holds | Issues for |
|---|---|---|
| `llm-chef` (this) | planning, source inventory, provenance, decisions, specs | rights, data, specs, ADRs |
| product repo | the website (code) | app, frontend, deploy |
| llm repo (later) | RAG / model work | only when it earns its own deploy (ADR-0002) |

Issues live in the repo where the work lands. One org-level GitHub **Project board** aggregates issues from all our repos into a single, filterable view (see Board Setup below). A Project only shows issues you add to it — never other teams' repos.

Raw PDFs and scans never go in git (see `.gitignore` and the provenance policy).

## Three sizes: epic → issue → PR

- **Epic** = an ownable deliverable (e.g. "Source library & rights"). Tracked as a milestone or tracking issue.
- **Issue** = a unit of work (`IB-xxx`) with an owner, success check, and out-of-scope.
- **PR** = a unit of review. One PR may close one issue — or several tiny related ones (`Closes #12, #13`). Aim for a PR a reviewer can read in ~20–30 min.

Do not force issue = PR. Group small related issues into one PR; split a large issue into several.

## Picking up work

1. Find an issue on the board. Filter by:
   - `owner-type`: `core` (team), `community` (open to all), `specialist` (needs OCR/ML/etc.)
   - `size`: `xs / s / m / l`
   - `good-first-issue` for newcomers
2. Check its dependencies are done — the issue lists them. Do not start blocked work.
3. Comment to claim it / assign yourself so two people do not collide.

## The loop

**Core team** (trusted, has Write access):

1. Branch off the latest `main`: `git switch -c <type>/<short-name>` (e.g. `feat/catalog-filters`).
2. Commit small, push the branch, open a PR.

**Community / external** (no Write access):

1. Fork the repo.
2. Branch off your fork's updated `main`.
3. Push to your fork, open a PR to the upstream repo.

**Everyone:**

- Bring your branch up to date with `main` before requesting review.
- One logical change per PR.

## Opening a PR

- Title: imperative, references the issue.
- Body: link the issue (`Closes #NN`), say what changed, and confirm the issue's **success check** is met and its **out-of-scope** respected.
- Keep it small. If it grows past one logical change, split it.

## Review and merge

- the project owner reviews (with Codex/Claude as needed). Merges if it meets the success check; otherwise requests changes.
- `main` is protected: **a reviewed PR is required to merge** — no direct pushes, even with Write access. This is what makes Write access safe to grant.
- After merge, `Closes #NN` auto-closes the issue and the board moves it to Done.

## Guard rails

- No public PDF/OCR/full-text until the source is rights-labeled (IB-010) and UI rights gates exist (IB-028).
- Product/app code goes in the product repo, not this planning repo.
- Update affected docs in the same change (see `AGENTS.md` Update Protocol).

## Board setup recipe (Phase 0 — the project owner, one-time)

1. **Connect this repo** to `Italian-Builders-Org/llm-chef` (the planning repo).
2. **Branch protection on `main`** (every repo): require a pull request before merging; require 1 approval; optionally require status checks. This is what enforces review.
3. **Labels** (per repo):
   - epic: `epic-a-rights` … `epic-h-stretch`
   - size: `size:xs` `size:s` `size:m` `size:l`
   - owner-type: `core` `community` `specialist`
   - meta: `blocked` `good-first-issue` `v1` `post-v1` `rights`
4. **Milestone** `V1` per repo; assign the V1 issues.
5. **Project board** — org-level if you can create one; otherwise a personal Project (both can pull from org repos you have access to):
   - Name it distinctively, e.g. `Chef-LLM · V1`.
   - Add your repos, or set the per-repo "auto-add" workflow. It only contains issues you add — other teams' repos never appear.
   - Custom fields: `Epic`, `Size`, `Owner-type`, `Repo`, `Status`.
   - Views: Board grouped by Status; Table grouped by Epic; optional Roadmap.
   - Visibility: private to the team, or org-public — your call.
6. **Access**: give core contributors **Write**; community works via forks.

If org-level Project or repo creation is restricted, ask an org owner (collaborator) — see the access asks in the project proposal.
