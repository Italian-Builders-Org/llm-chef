# ADR-0005: Entity Slug Standard and OKF Scope

- Status: Accepted
- Date: 2026-06-27
- Deciders: project owner

## Context

Books and recipes need stable identifiers for URLs, cross-references, and machine-readable data. The team wants to align with Google's Open Knowledge Format (OKF), but OKF is a spec for structured data products, not for folder or doc structure.

## Decision

- **Slugs:** every book (later, recipe) gets a stable kebab-case slug `author-year-shorttitle` (e.g. `artusi-1891-scienza-in-cucina`). Lowercase ASCII; stable forever; editions disambiguated by suffix.
- **OKF scope:** OKF applies only to the structured data contract (future `books.json` / recipe records in `20_data_foundation/`). Record `id` = slug; taxonomy = controlled glossary; relationships (book→author, recipe→book) typed. OKF must not drive repo/folder/doc organization.

## Consequences

- Repo naming stays as-is (no churn for "slug purity"); slugs apply only to data identifiers.
- The data layer is OKF-ready when built, without retrofitting the repo.
