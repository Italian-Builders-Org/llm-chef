# Contributor Workflow

Status: Active. Last updated: 2026-06-28.

How work flows from an issue to merged code/docs in the Chef-LLM repo. Read this before picking up an issue or opening a PR. For *where* a task belongs, see `CONTRIBUTOR_ROUTING.md`; for repo structure, see `FOLDER_MAP.md`.

## One repo, one board

Everything lives in a single repo, `llm-chef` (ADR-0006), organized by area:

| Area | Holds |
|---|---|
| numbered rooms (`00_`…`90_`) | planning, source inventory, provenance, decisions, specs |
| `/website` | the web app (host deploy root) |
| `/data` | the data contract (`books.json`, manifests) the site consumes |
| `/llm` (later) | RAG / model code, until it earns its own deploy |

All issues live in this repo. One GitHub **Project board** gives a single, filterable view (see Board Setup below); a Project only shows issues you add to it, never other teams' repos.

Raw PDFs and scans never go in git (see `.gitignore` and the provenance policy).

## Three sizes: epic → issue → PR

- **Epic** = an ownable deliverable (e.g. "Source library & rights"). Tracked as a milestone or tracking issue.
- **Issue** = a unit of work (`IB-xxx`) with an owner, success check, and out-of-scope.
- **PR** = a unit of review. One PR may close one issue, or several tiny related ones (`Closes #12, #13`). Aim for a PR a reviewer can read in ~20–30 min.

Do not force issue = PR. Group small related issues into one PR; split a large issue into several.

## Picking up work

1. Find an issue on the board. Filter by:
   - `owner-type`: `core` (team), `community` (open to all), `specialist` (needs OCR/ML/etc.)
   - `size`: `xs / s / m / l`
   - `good-first-issue` for newcomers
2. Check its dependencies are done — the issue lists them. Do not start blocked work.
3. Comment to claim it / assign yourself so two people do not collide.

## The loop

Everyone works from a fork (the org convention, including the core team):

1. Fork `llm-chef`.
2. Branch off your fork's updated `main`: `git switch -c <type>/<short-name>` (e.g. `feat/catalog-filters`).
3. Commit small; push to your fork; open a PR to the upstream `main`.
4. Bring your branch up to date with upstream `main` before requesting review.

One logical change per PR. Maintainers may have Write access to merge and manage issues/labels, but the workflow is the same: no one pushes directly to `main`.

## Opening a PR

- Title: imperative, references the issue.
- Body: link the issue (`Closes #NN`), say what changed, and confirm the issue's **success check** is met and its **out-of-scope** respected.
- Keep it small. If it grows past one logical change, split it.

## Review and merge

- The project owner reviews (with Codex/Claude as needed). Merges if it meets the success check; otherwise requests changes.
- `main` is protected: **a reviewed PR is required to merge**; no one pushes directly, including maintainers.
- After merge, `Closes #NN` auto-closes the issue and the board moves it to Done.

## Guard rails

- No public PDF/OCR/full-text until the source is rights-labeled (IB-010) and UI rights gates exist (IB-028).
- Product/app code goes in `/website`, not the numbered planning rooms.
- Update affected docs in the same change (see `AGENTS.md` Update Protocol).

## Board setup recipe (Phase 0 — project owner, one-time)

1. **Connect** is done: `origin` points at `Italian-Builders-Org/llm-chef`.
2. **Branch protection on `main`:** require a pull request before merging; require 1 approval; optionally require status checks. This is what enforces review.
3. **Labels:**
   - epic: `epic-a-rights` … `epic-h-stretch`
   - size: `size:xs` `size:s` `size:m` `size:l`
   - owner-type: `core` `community` `specialist`
   - area: `planning` `website` `data`
   - meta: `blocked` `good-first-issue` `v1` `post-v1` `rights`
4. **Milestone** `V1`; assign the V1 issues.
5. **Project board** — org-level if you can create one; otherwise a personal Project:
   - Name it distinctively, e.g. `Chef-LLM · V1`.
   - Add this repo, or set the "auto-add" workflow. It only contains issues you add.
   - Custom fields: `Epic`, `Size`, `Owner-type`, `Primary Area`, `Status`.
   - Views: Board grouped by Status; Table grouped by Epic; optional Roadmap.
   - Visibility: private to the team, or org-public — your call.
6. **Access:** everyone contributes via forks; grant **Write** to 1–2 maintainers for merging and issue/label management.
7. **CODEOWNERS + path-scoped CI:** route `/website` PRs vs. planning PRs to the right reviewers; build/deploy `/website` only on `/website/**` changes.

If org-level Project creation is restricted, ask an org owner — see the access asks in the project proposal.
