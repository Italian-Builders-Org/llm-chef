# Immediate Todos

Status: Local checklist. Phase 0 complete; issue tracking is now on GitHub issues + the Chef-LLM Project board.

Last updated: 2026-06-28.

## Foundation

- [x] Create local 3-layer folder system.
- [x] Create root agent/human orientation docs.
- [x] Create initial vision draft with open questions.
- [x] Create contributor routing rules.
- [x] The project owner partially answers `00_project_room/interviews/INTERVIEW_001_FOUNDATION.md`.
- [x] Revise `VISION.md` based on initial interview answers.
- [x] Confirm project documentation language: English.
- [x] Create deferred backlog for post-V1 publishing/editorial ideas.
- [x] Select V1 product option: faithful digital editions (Level A) from rights-verified candidate sources — catalog + metadata search. See `00_project_room/decisions/DECISION_REGISTER.md`.
- [x] Define contribution workflow in `00_project_room/routing/CONTRIBUTOR_WORKFLOW.md`; defer team-member/role assignment to GitHub issues/Projects.
- [x] Create dependency-ordered GitHub issue candidates in `00_project_room/todos/ISSUE_DRAFTS.md`.
- [x] Add rights-verification research memo and public-release checklist.

## Source And Data

- [x] Confirm where the 20GB scanned PDFs live: restricted team Google Drive (access link shared via Slack, not committed to the repo).
- [x] Decide raw source storage: off-git, restricted team Google Drive (cloud); public hosting of cleared assets deferred to build. See `00_project_room/decisions/DECISION_REGISTER.md`.
- [x] Expand the seed book list into an actionable inventory table with slugs, filenames, scan owner, scanned by, rights label, metadata status, and notes.
- [x] Inspect local `Libri scansionati` folder by filenames only and record a corpus snapshot in `10_source_library/inventory/SCAN_CORPUS_SNAPSHOT_2026-06-27.md`.
- [x] Normalize obvious scan filename typos into working inventory titles and document the original observed inconsistencies.
- [x] Rename local scan folders/files for explicit typo/date inconsistencies and update inventory paths.
- [x] Merge `Kochrezepte fur den Unterricht im Kochen` with the local `Ricettario austroungarico / Sacher` source alias.
- [x] Decide which PDFs/OCR text can be public in V1 (IB-010: 6 books owner-signed-off `public_domain_verified`, all others metadata-only; and V1 publishes cleaned Level A *transcribed text*, not page scans — ADR-0004). See `RELEASE_LABELS_V1.md`.
- [x] Verify book list against actual filenames/PDFs (IB-008: bibliographic verification + scanned-title-page inspection; see `10_source_library/inventory/BIBLIOGRAPHIC_VERIFICATION.md`).
- [x] Reconcile seed rows with no obvious local folder match: Aloi now located (2nd scan batch, 1898), Dioscoride resolved via archive.org (1547); only Dictionnaire de l'Academie des Gastronomes (1962) still has no copy.
- [x] Mark each source with rights/provenance status (IB-010): all 15 candidates labeled in `RIGHTS_STATUS_MATRIX.md` / `RELEASE_LABELS_V1.md`; owner signed off 6 to `public_domain_verified` (2026-06-28); the rest stay `public_domain_likely` / `metadata_only` pending death-year/edition firm-up.
- [x] Choose pilot sources (IB-011): the 6 verified books are the pilot pool; **Artusi 1891 is the build-first prototype**. See `10_source_library/provenance/V1_PILOT_SELECTION.md`.

## Planning

- [x] Choose first 2-4 week milestone: V1 per ADR-0004 (faithful pre-1929 editions + catalog/metadata search).
- [x] Choose V1 tech stack: Next.js on Vercel, deployed from `/website`; DB deferred to V2 (ADR-0007).
- [x] Convert immediate todos into issue drafts.
- [x] Keep post-V1 backlog items out of live V1 issues; use the frozen Epic H snapshot only as future context.
- [x] Connect local repo to GitHub remote (`origin` → Italian-Builders-Org/llm-chef).
- [x] Create the V1 GitHub issues (28 across Epics A-G, #1-#28 on milestone `V1`); Epic H / post-V1 left in drafts.
- [x] Create the Chef-LLM Project board (labels, `V1` milestone, auto-add enabled).

## Do Not Start Yet

- [ ] Publishing commitments.
- [ ] Editorially standardized modern recipe versions.
- [ ] Fine-tuning or model-weight release.
- [ ] Public hosting of unverified copyrighted PDFs or OCR text.
- [ ] Monetization/fundraising plan.

These may become valid later, but starting them before V1 scope and source rights are clarified is likely premature.
