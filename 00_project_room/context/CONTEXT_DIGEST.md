# Context Digest

Status: Historical digest from user-provided context on 2026-06-27; partially superseded by ADR-0004, ADR-0006, ADR-0007, and the live GitHub issues / Project board.

## Facts From Current Context

- The project owner has access to a private collection of cookbook PDFs and books.
- The project discussion mentions about 20GB of scanned PDFs and about 25-30 books.
- Some sources may be rare, old, regional, handwritten, or not well represented in model training data.
- Several collaborators are interested in the project and discussed using Slack, GitHub issues, PRs, and GitHub Projects.
- The folder system should be readable by both humans and agents.
- At the time, the desired order was local organization first, GitHub issues/project later. That sequencing is now complete.

## Ideas Mentioned

- Recover forgotten recipes and techniques.
- Build a curated database of historical Italian culinary texts.
- Create a master timeline and knowledge matrix for cookbooks.
- Structure recipes by historical period, region, ingredients, techniques, use/function, and measurement precision.
- Preserve original recipes while offering controlled interpretation or modern execution guidance.
- Explore AI assistant, RAG, or fine-tuned/open-weight models.
- Consider eventual books, classes, partnerships, or fundraising.

## Risks And Contradictions

- Scope is too broad if inventory, editorial publishing, frontend, model training, and partnerships all start at once.
- General LLMs already do generic recipe guidance well, so the project needs a stronger differentiated wedge.
- Rare source material may create rights/provenance issues.
- Modernizing recipes can destroy historical value if not labeled carefully.
- A polished app before reliable data would create false confidence.

## Resolution

The first narrow milestone is now decided: V1 is a faithful Level A digital-library site from rights-verified candidates, plus catalog and metadata search. See ADR-0004 and ADR-0007 for committed scope; use this digest as historical context only.
