# Contributor Routing

Use this before starting work.

## Route By Question

| If the work is about... | Put it in... |
|---|---|
| Scope, meetings, team roles, open questions, immediate todos | `00_project_room/` |
| Book list, PDFs, scans, OCR status, provenance, source rights | `10_source_library/` |
| Database shape, taxonomy, extraction, deduplication, quality checks | `20_data_foundation/` |
| Recipe interpretation, measurement policy, editorial standards | `30_editorial_engine/` |
| Reader, search, UX, frontend, app flows, visual concepts | `40_product_experience/` |
| RAG, fine-tuning, evals, model comparison, prompts | `50_model_lab/` |
| Book series, classes, chefs, restaurants, fundraising, partnerships | `60_publishing_and_partnerships/` |
| Old or superseded material | `90_archive/` |

## Route By Contributor Type

| Contributor | Starting point |
|---|---|
| Project lead | `VISION.md`, then `00_project_room/` |
| Historian/editor | `10_source_library/`, then `30_editorial_engine/` |
| Data engineer | `20_data_foundation/` |
| Frontend/product designer | `40_product_experience/` |
| ML engineer | `50_model_lab/`, but only after source/data scope is clear |
| Partnerships/fundraising | `60_publishing_and_partnerships/` |

## Rule For Ambiguous Work

If the task touches more than two rooms, it is probably too broad. Draft an issue first and ask for scoping.

