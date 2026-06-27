# ADR-0004: V1 Scope — Faithful Pre-1929 Digital Editions

- Status: Accepted
- Date: 2026-06-27
- Deciders: Adam

## Context

The first milestone is a live digital-library website. "Rebuild the books with nice UX" can mean a faithful digital edition (same content, cleaner presentation) or a reinterpretation (restructured recipes, new images) — very different products, rights exposure, and editorial labor. Much of the seed list (1929–1995) is likely still under copyright.

## Decision

V1 = **faithful digital editions (Level A)** — cleaned OCR, searchable, well-typeset, content unchanged — of **pre-1929 public-domain books only**, plus a catalog with metadata search over the full inventory.

- Reinterpretation (Level B/C) is deferred to backlog B002 / a GitHub issue.
- 1929–1995 titles are catalog-only until rights are verified.

## Consequences

- V1 content = the ~10 pre-1929 seed titles (Dioscoride 1546 … La frutta 1925).
- Lower rights and editorial risk; a shippable scope.
- Rights labels (`10_source_library/provenance/PROVENANCE_POLICY_DRAFT.md`) gate full-text rendering vs metadata-only.
