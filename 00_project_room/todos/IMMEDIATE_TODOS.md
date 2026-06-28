# Immediate Todos

Status: Local checklist. Phase 0 complete; issue tracking is now on GitHub issues + the Chef-LLM Project board.

Last updated: 2026-06-28.

## Foundation

- [x] Create local 3-layer folder system.
- [x] Create root agent/human orientation docs.
- [x] Create initial vision draft with open questions.
- [x] Create contributor routing rules.
- [x] Adam partially answers `00_project_room/interviews/INTERVIEW_001_FOUNDATION.md`.
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
- [ ] Decide which PDFs/OCR text can be public in V1.
- [ ] Verify book list against actual filenames/PDFs.
- [ ] Reconcile seed rows with no obvious local folder match: Dioscoride, L'olivo e l'olio, and Dictionnaire de l'Academie des Gastronomes.
- [ ] Mark each source with rights/provenance status using `10_source_library/provenance/RIGHTS_VERIFICATION_RESEARCH.md`.
- [ ] Choose first 3-5 books for pilot extraction.

## Planning

- [x] Choose first 2-4 week milestone: V1 per ADR-0004 (faithful pre-1929 editions + catalog/metadata search).
- [x] Choose V1 tech stack: Next.js on Vercel, deployed from `/website`; DB deferred to V2 (ADR-0007).
- [x] Convert immediate todos into issue drafts.
- [ ] Convert selected backlog items into GitHub issues only after V1 scope is chosen.
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
