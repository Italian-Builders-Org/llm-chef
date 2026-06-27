# AGENTS.md

This repository is an agent-readable project room for Chef-LLM. Act as a rigorous strategic and technical partner, not an agreeable assistant.

## Operating Contract

- Separate facts, assumptions, opinions, and uncertainty.
- Do not treat screenshots, chat excerpts, or brainstorming as approved requirements.
- If context conflicts, document the conflict and ask before resolving it.
- Prefer the smallest useful structure over speculative architecture.
- Make surgical edits. Do not reformat or reorganize unrelated files.
- Every proposed task needs a clear owner, context, expected output, and verification check.

## Read-First Rule

Before working in this repo:

1. Read `README.md`.
2. Read `VISION.md`.
3. Read `FOLDER_MAP.md`.
4. Read the relevant area README.
5. If the work changes scope, update `00_project_room/decisions/DECISION_REGISTER.md` or `00_project_room/todos/ISSUE_DRAFTS.md`.

## Update Protocol

Keep docs honest at the moment work changes them, not later.

- Any change that alters scope, structure, status, or a decision must update the docs it affects in the SAME change:
  - the room README Local Map table (if a subfolder is added or removed)
  - `FOLDER_MAP.md` (if structure or naming conventions change)
  - a new ADR plus the Decision Register (if a decision changes — see `00_project_room/decisions/`)
  - the relevant area README or seed doc (if its content is now stale)
- **State-tracking docs** (`VISION.md`, `00_project_room/decisions/DECISION_REGISTER.md`, `00_project_room/todos/IMMEDIATE_TODOS.md`, `00_project_room/todos/ISSUE_DRAFTS.md`, `00_project_room/routing/CONTRIBUTOR_WORKFLOW.md`) carry `Status:` and `Last updated:`; update the stamp when you change the doc's subject. **Static guidance** (`README.md`, `AGENTS.md`, `CLAUDE.md`, `FOLDER_MAP.md`, room READMEs, policy docs) does not need stamps.
- If you notice a stale doc you are not changing, flag it in `00_project_room/todos/IMMEDIATE_TODOS.md` instead of leaving it silently wrong.
- A deleted or moved artifact must have its references updated in the same change.

## 3-Layer Folder System

See `FOLDER_MAP.md` for the layer model, naming conventions, room map, and the Subfolder Creation Rule. Do not restate that structure here.

## Assumption Protocol

When an assumption is necessary, write it explicitly:

- `Fact:` directly supported by a source in this repo or by the user.
- `Assumption:` plausible but not confirmed.
- `Decision needed:` requires Adam/team confirmation.
- `Risk:` could invalidate work if ignored.

Do not bury assumptions inside polished prose.

## Project-Specific Guardrails

- Do not ingest, publish, or redistribute raw PDFs until provenance and rights are documented.
- Do not propose fine-tuning before the source inventory, retrieval baseline, and evaluation questions exist.
- Do not start frontend implementation until the v1 product surface is chosen.
- Treat "AI chef assistant" as strategically weak unless grounded in unique data, source citations, editorial rigor, or a concrete user workflow.
- Preserve historical authenticity. Modernized recipes must be labeled as interpretation, not source text.

## Contributor Routing

Use `00_project_room/routing/CONTRIBUTOR_ROUTING.md` to decide where a task belongs, and `00_project_room/routing/CONTRIBUTOR_WORKFLOW.md` for how work flows from issue to merged PR (fork/branch → PR → review, epics, board setup).

If a task does not clearly belong anywhere, put it in `00_project_room/todos/ISSUE_DRAFTS.md` instead of creating a new folder.
