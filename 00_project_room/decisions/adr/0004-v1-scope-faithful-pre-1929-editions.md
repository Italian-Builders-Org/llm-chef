# ADR-0004: V1 Scope — Faithful Digital Editions From Pre-1929 Candidates

- Status: Accepted
- Date: 2026-06-27
- Deciders: the project owner

## Context

The first milestone is a live digital-library website. "Rebuild the books with nice UX" can mean a faithful digital edition (same content, cleaner presentation) or a reinterpretation (restructured recipes, new images) — very different products, rights exposure, and editorial labor. Much of the seed list (1929–1995) is likely still under copyright.

## Decision

V1 = **faithful digital editions (Level A)** — cleaned OCR, searchable, well-typeset, content unchanged — from **rights-verified pre-1929 candidate sources**, plus a catalog with metadata search over the full inventory.

- Reinterpretation (Level B/C) is deferred to backlog B002 / a GitHub issue.
- 1929–1995 titles are catalog-only until rights are verified.
- Pre-1929 is a candidate filter, not proof of public-domain status. A source must still pass the checklist in `10_source_library/provenance/RIGHTS_VERIFICATION_RESEARCH.md` and receive a public-release label before its PDF/OCR/full text is rendered publicly.

## Consequences

- V1 candidate pool = the ~10 pre-1929 seed titles (Dioscoride 1546 … La frutta 1925).
- V1 public content = only the subset of that pool marked safe for public release.
- Lower rights and editorial risk; a shippable scope.
- Rights labels (`10_source_library/provenance/PROVENANCE_POLICY.md`) gate full-text rendering vs metadata-only.
