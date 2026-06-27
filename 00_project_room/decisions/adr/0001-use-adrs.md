# ADR-0001: Use Architecture Decision Records

- Status: Accepted
- Date: 2026-06-27
- Deciders: the project owner

## Context

Decisions were captured only as one-line rows in `DECISION_REGISTER.md`. That ledger is good for scanning *what* was decided but loses *why*, the alternatives, and the consequences. As contributors arrive (via GitHub issues/Projects) and agents act on the repo, decisions need durable context so they are not silently re-litigated or reversed.

## Decision

Record architecturally significant decisions as ADRs: one Markdown file per decision in `00_project_room/decisions/adr/`, named `NNNN-kebab-title.md`, based on `ADR_TEMPLATE.md`.

`DECISION_REGISTER.md` remains the lightweight ledger and index: it lists decisions and links significant ones to their ADR. Not every row needs an ADR — only decisions that shape architecture, scope, or conventions.

## Consequences

- Significant decisions carry context, alternatives, and consequences.
- Two surfaces to keep in sync; the Update Protocol in `AGENTS.md` requires updating both in the same change.
- ADR files use `NNNN-kebab-title.md` — a documented exception to the `SCREAMING_SNAKE` doc convention.
