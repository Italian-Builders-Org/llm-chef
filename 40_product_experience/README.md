# Product Experience

Purpose: explore and later build user-facing ways to read, search, study, and use the source library.

This room owns:

- product concepts
- UX flows
- frontend design
- reader/search ideas
- AI assistant interaction concepts

This room should not drive the project before source/data scope is clear.

## Local Map

| Folder | Purpose | Status |
|---|---|---|
| `research/` | Product options and user research. | active |
| `design/` | UX flows and visual concepts. | active |
| `frontend/` | Frontend specs/assets (app code lives in `/website`). | create on demand |

Add subfolders per `FOLDER_MAP.md` (Subfolder Creation Rule); update this table in the same change.

## Current Boundary

Frontend work is part of V1. The app code lives in `/website` (single repo, ADR-0006); this room holds product specs, UX decisions, and data/API contracts, not the app code.

The V1 product should be a digital library first. Do not let the frontend imply that source rights, OCR quality, recipe extraction, or AI answers are more reliable than they actually are.
