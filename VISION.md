# Vision Draft

Status: Draft v0.3. V1 scope accepted by ADR-0004; broader vision still draft.

Last updated: 2026-06-27 after ADR-0004 scope cleanup.

## What This Might Be

Chef-LLM is currently aiming to become a live, open-source digital library for historical Italian culinary texts and recipes. The first product should make the collection navigable and useful through inventory, metadata, faithful digital editions, and search.

AI may become part of the product, but it is not required for the first 2-4 week milestone.

## Confirmed Facts

- The local workspace is `/Users/owner/Chef-llm`.
- A GitHub repo appears to exist under `Italian-Builders-Org / llm-chef`, but this local folder was not connected to it at setup time.
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

## Candidate Product Directions, Not Decisions

- Searchable historical cookbook library.
- Master timeline of cookbooks, authors, periods, regions, and culinary movements.
- Structured recipe database with tags for ingredients, techniques, measurement precision, region, period, and use.
- Digital reader or source detail pages for verified public-use materials.
- Source-grounded AI assistant over curated books and recipes.
- Open-weight model experiments or fine-tuning later, only if a simpler retrieval baseline is insufficient.

## Current V1

V1 is not a generic AI recipe assistant and not an editorial modernization project.

V1 is:

- faithful digital editions, Level A only: source content unchanged
- rights-verified pre-1929 candidate sources only for public full-text/PDF/OCR rendering
- catalog and metadata search over the full known inventory
- catalog-only treatment for sources whose rights are not verified
- app/product code in a separate product repo

Pre-1929 is a candidate filter, not proof of public-domain status. Every publicly rendered source still needs a `public_domain_verified` or equivalent release label.

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

- Which sources can be safely shown publicly in the first website?
- What database/storage stack should V1 use?
- What raw source material can legally and ethically be stored, shared, or published?
- Does V1 include full-text search for verified sources, or only cleaned digital edition pages plus metadata search?
- Does V1 include an AI feature, or is AI explicitly a post-V1 stretch?
- Who owns frontend, data, source verification, and deployment?
- When should deferred backlog work be promoted into active scope?

## Vision Interview Gate

Do not finalize the broader vision until the team confirms public-source policy, source storage, and product-repo ownership.
