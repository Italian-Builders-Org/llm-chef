# ADR-0002: Repository Topology

- Status: Accepted
- Date: 2026-06-27
- Deciders: the project owner

## Context

The project spans planning/strategy, a public website, source data, and (later) LLM/RAG work. One repo for all of it mixes slow-moving prose with fast-shipping code. Splitting eagerly by topic (website repo, LLM repo, data repo) creates cross-repo coordination before any code exists.

## Decision

Split repos by deploy boundary, release cadence, and audience — not by topic:

- **This repo** — planning, source inventory, provenance, decisions. No product code.
- **Product repo** (separate) — the website now; RAG added later as a module inside it.
- **Dedicated LLM repo** — only when the LLM earns its own deploy boundary (independent deployment/release cadence).

Raw source files (e.g. ~20GB of PDFs) live in object storage / Git LFS / a data bucket — never in git.

## Consequences

- Two repos now, not three. The third is created only when a real deploy boundary justifies it.
- The source inventory stays in this repo; a future `books.json` is the contract the product repo consumes.
