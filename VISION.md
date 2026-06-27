# Vision Draft

Status: Draft v0.3. V1 scope accepted by ADR-0004; broader vision still draft.

Last updated: 2026-06-27 after ADR-0004 scope cleanup.

## What This Might Be

Chef-LLM is currently aiming to become a live, open-source digital library for historical Italian culinary texts and recipes. The first product should make the collection navigable and useful through inventory, metadata, faithful digital editions, and search.

AI may become part of the product, but it is not required for the first 2-4 week milestone.

## Current Milestone (V1)

The vision is reached in milestones, each scoped by an ADR (V1 → V2 → …). This document stays high-level; ADRs own the scoped detail.

The current milestone is **V1**, owned by [ADR-0004](00_project_room/decisions/adr/0004-v1-scope-faithful-pre-1929-editions.md): faithful Level A digital editions from rights-verified pre-1929 candidates, plus catalog + metadata search — not a generic AI assistant, not editorial modernization. See the ADR for authoritative scope and boundaries.

## Confirmed Facts

- The local workspace is `/Users/adambrecht/Chef-llm`.
- The project's repos live under the `Italian-Builders-Org` GitHub org; `llm-chef` is the planning/coordination repo.
- There is an existing collection of scanned cookbook PDFs, described in context as roughly 20GB and about 25-30 books.
- The provided book list spans assumed years from the 1500s through the late 1900s, with many books from 1800-1990.
- The project discussion includes historical Italian cuisine, recipe recovery, source preservation, editorial reconstruction, taxonomy, possible AI assistance, and possible publishing.
- The team wants a clean local foundation before GitHub issues and project boards.
- The first milestone target is a live website with basic functionality within 2-4 weeks.
- V1 scope is accepted in ADR-0004: faithful Level A digital editions for rights-verified pre-1929 candidate sources, plus catalog and metadata search over the inventory.
- First real users are internal team members, home cooks, the Italian Builders community, and public visitors who reach the web app.
- Repository documentation should be in English.
- The project intent is open source, with public data/PDF/model outputs only where rights allow.
- Publishing and editorial recipe modernization are not first-milestone goals.

## Possible Future Directions (Post-V1)

- Searchable historical cookbook library.
- Master timeline of cookbooks, authors, periods, regions, and culinary movements.
- Structured recipe database with tags for ingredients, techniques, measurement precision, region, period, and use.
- Digital reader or source detail pages for verified public-use materials.
- Source-grounded AI assistant over curated books and recipes.
- Open-weight model experiments or fine-tuning later, only if a simpler retrieval baseline is insufficient.

## Strategic Tension

An "AI chef" by itself is not differentiated enough. General LLMs are already good at ordinary recipe help.

The defensible value is more likely in the combination of:

- rare or underused source material
- curated provenance
- historical and regional classification
- editorial rigor
- source-grounded retrieval
- a useful product workflow for chefs, researchers, or serious enthusiasts

If those foundations are weak, model training and frontend polish will not save the project.

## Current Working Thesis

The first valuable milestone should be a live digital-library MVP backed by a trustworthy source inventory and a small database. The website can start now, but it should expose what is actually known rather than pretending the full corpus is clean, legal, searchable, or AI-ready.

This means V1 is catalog/search/faithful-edition first, with AI as a stretch only after the source/data path works.

## Explicitly Not V1

- Publishing a book or collana.
- Creating standardized modern versions of historical recipes.
- Editorially rewriting the source material into new cookbooks.
- Publicly hosting copyrighted PDFs or OCR text before rights are verified.
- Fine-tuning or releasing model weights before a retrieval/evaluation baseline exists.

These are not rejected ideas. They are deferred to the backlog so they can become GitHub issues later if the live digital library foundation works.

## Open Decisions

- Which sources can be safely shown publicly in the first website? (rights — IB-010)
- What database/hosting stack should V1 use? (IB-005)
- Does V1 include full-text search for verified sources, or only cleaned digital edition pages plus metadata search?
- Does V1 include an AI feature, or is AI explicitly a post-V1 stretch?
- When should deferred backlog work be promoted into active scope?

## Vision Interview Gate

Do not finalize the broader vision until the team confirms public-source policy and product-repo ownership.
