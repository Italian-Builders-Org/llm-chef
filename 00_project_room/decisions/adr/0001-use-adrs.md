# ADR-0001: Use Architecture Decision Records

- Status: Accepted
- Date: 2026-06-27
- Deciders: Adam

## Context

Decisions were captured only as one-line rows in `DECISION_REGISTER.md`. That ledger is good for scanning *what* was decided but loses *why*, the alternatives, and the consequences. As contributors arrive (via GitHub issues/Projects) and agents act on the repo, decisions need durable context so they are not silently re-litigated or reversed.

## Decision

Record architecturally significant decisions as ADRs: one Markdown file per decision in `00_project_room/decisions/adr/`, named `NNNN-kebab-title.md`, based on `ADR_TEMPLATE.md`.

`DECISION_REGISTER.md` remains the lightweight ledger and index: it lists decisions and links significant ones to their ADR. Not every row needs an ADR — only decisions that shape architecture, scope, or conventions.

## When To Write An ADR vs. A Register Row

- **Full ADR:** architectural, cross-room, strategic, or likely to be cited by later decisions (e.g. repo topology, V1 scope, slug standard).
- **Register row only:** tactical, single-room, easily reversible (e.g. doc language, a storage-tool pick).
- Every ADR also gets a register row; the register is the index. When unsure, default to a register row and promote to an ADR if the decision starts being referenced.

## Superseding An ADR

- ADRs are immutable once `Accepted`. To change a decision, write a **new** ADR that supersedes the old one.
- Mark the old ADR `Status: Superseded by ADR-NNNN`, leave the file in place (it is the history), and update its register row. Do not edit the original decision or delete the file.

## Consequences

- Significant decisions carry context, alternatives, and consequences.
- Two surfaces to keep in sync; the Update Protocol in `AGENTS.md` requires updating both in the same change.
- ADR files use `NNNN-kebab-title.md` — a documented exception to the `SCREAMING_SNAKE` doc convention.
