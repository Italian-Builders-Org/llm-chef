# Data Foundation

Purpose: turn source material into structured, queryable, auditable data.

This room owns:

- taxonomy
- data schema
- extraction pipeline design
- deduplication strategy
- recipe/entity IDs
- quality checks
- master database design

This room should not assume an app, model, or book series exists yet.

## Local Map

| Folder | Purpose | Status |
|---|---|---|
| `taxonomy/` | Controlled vocabulary and classification axes. | active |
| `schema/` | Data models, field definitions, open schema questions. | active |
| `pipelines/` | OCR/extraction/import workflows. | create on demand |
| `quality/` | QA rules, validation, sampling checks. | create on demand |

Add subfolders per `FOLDER_MAP.md` (Subfolder Creation Rule); update this table in the same change.

## First Useful Output

A small, verified pilot dataset from 1-3 sources is more valuable than a large unverified extraction.

