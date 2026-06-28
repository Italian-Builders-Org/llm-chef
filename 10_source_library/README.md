# Source Library

Purpose: manage the historical source collection before extraction or editorial work.

This room owns:

- book inventory
- source filenames and locations
- scan/PDF/OCR status
- provenance and rights status
- public domain checks
- source priority

This room does not own:

- database schema details
- editorial modernization rules
- model training plans
- frontend UX

## Local Map

| Folder | Purpose | Status |
|---|---|---|
| `inventory/` | Book lists, source status, prioritization. | active |
| `provenance/` | Rights, source origin, citation policy, and `RIGHTS_VERIFICATION_RESEARCH.md`. | active |
| `raw_sources/` | Placeholder; raw masters live off-git in team Drive (see DECISION_REGISTER). | dormant |

Add subfolders per `FOLDER_MAP.md` (Subfolder Creation Rule); update this table in the same change.

## Current Warning

The seed book list (`inventory/BOOK_LIST_SEED.md`) carries the *working* titles/years.
Bibliographic metadata is verified per book in `inventory/BIBLIOGRAPHIC_VERIFICATION.md`
(IB-008), including against scanned title pages where available; rights/public-domain
lean is mapped in `provenance/RIGHTS_STATUS_MATRIX.md` (IB-009/IB-010 seed). **Rights
are not cleared** — no source is publicly releasable until a reviewer signs off per
`provenance/PUBLIC_RELEASE_POLICY.md`.
