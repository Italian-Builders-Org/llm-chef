# Source Corpus & Storage Inventory

Status: Active — IB-006 deliverable.

Last updated: 2026-06-28.

Purpose: record where the raw source corpus (PDFs/scans) lives and the storage
model for V1. This is a location/access inventory, not bibliographic or rights
verification. For per-book detail see [`BOOK_LIST_SEED.md`](BOOK_LIST_SEED.md); for
the corpus composition snapshot see
[`SCAN_CORPUS_SNAPSHOT_2026-06-27.md`](SCAN_CORPUS_SNAPSHOT_2026-06-27.md); for the
storage decision see the Decision Register (2026-06-27 raw source files row).

> Local filesystem paths are intentionally withheld from this repo. The corpus is
> not stored in git; its working location is a contributor's local machine and is
> not personal information this public repo needs to carry.

## Provenance Note (confirmed)

`Fact:` The project owner reported on 2026-06-27 that **every item in the original
seed list was scanned by the project owner from a physical copy they personally
own.** Physical-copy owner = project owner; scan creator = project owner for all
seed-list sources.

`Assumption:` This blanket statement has not yet been confirmed per file (filename,
edition, checksum). Per-file confirmation happens in IB-007/IB-008/IB-014. Treat it
as the working default, not a per-file proven fact.

## Known Source Locations

| # | Location | Owner | Size | Access method | Shareable with contributors |
|---|---|---|---:|---|---|
| 1 | Restricted team Google Drive (archive of record) | project owner / team | ~17 GB (25 book folders, 24 PDFs, ~9,754 files; corpus uploaded) | Restricted Drive share link | Yes — currently shared via Drive link with some contributors |
| 2 | Physical copies (project owner's collection) | project owner | n/a | Physical | n/a — provenance root, not a digital store |
| 3 | Slack | team | n/a | Chat | Pointers/links only — **not** a storage location (policy) |
| 4 | Repo `10_source_library/raw_sources/` | repo | empty | git | Intentionally empty placeholder — raw masters stay off-git |

Scan creator and physical-copy owner for all located seed sources = the project
owner (see Provenance Note), **except** Dioscoride (external archive.org copy, not
owner-scanned). A local working copy also exists on a contributor machine; its
filesystem path is withheld per the note above.

A **second local scan batch** ("LIBRI SCANSIONATI 2", 2026-06-28) holds three more
sources (Cervio *Il Trinciante* 1593, Aloi *L'olivo e l'olio* 1898, *Le ricette della
Rocca* 1988); same withheld-path policy applies.

## Storage Model for V1

`Decision (2026-06-27):`

- **Raw masters** → restricted team Google Drive, off-git. Corpus uploaded
  (location #1).
- **Rights-cleared pilot assets** → hosted at build time only, via IB-014 (source
  asset manifest) and IB-027 (Level A reader). Nothing copyrighted goes public until
  cleared.
- **Slack** → pointers/links only, never a store.
- **Public storage upload** → out of scope for this issue.
- **Git** → no large binary source corpora in the repo (no LFS decision made).

## Gaps & Risks

- `Fact (updated 2026-06-28, IB-008):` Of the three originally-unlocated rows, two are
  now resolved — **Aloi** (*L'olivo e l'olio*, 4ª ed., Hoepli 1898) arrived in a second
  scan batch ("LIBRI SCANSIONATI 2"), and **Dioscoride** is resolved via an external
  digitisation (archive.org, 1547 Giunti Florence edition). Only **Dictionnaire de
  l'Académie des Gastronomes (1962)** still has no copy. The second batch also added
  two new sources: Cervio's *Il Trinciante* (1593) and *Le ricette della Rocca* (1988).
- `Risk:` The Artusi 1891 "immagini" set is an **image-only folder with no PDF**.
  Page-image rights/handling differ from a single PDF.
- `Risk:` The team Drive share link covers the **entire ~17 GB corpus**, which
  includes post-1928 / rights-unverified books (e.g. 1933–1995 titles). Sharing
  uncleared copyrighted scans with contributors is a rights-exposure surface even
  when not public. `Decision needed:` confirm whether contributor access should be
  scoped to pre-1929 candidates only, or whether broad internal access is acceptable
  for working purposes.
- `Decision needed:` Define who specifically holds the Drive link and how access is
  granted/revoked, so the access method is auditable for IB-038 (licensing) and
  IB-010 (public-release labels).
- `Fact:` **Bibliographic metadata** (title/author/year/edition/publisher) is now
  verified per book in [`BIBLIOGRAPHIC_VERIFICATION.md`](BIBLIOGRAPHIC_VERIFICATION.md)
  (IB-008), including against the scanned title pages where present. **Public-domain
  status and OCR quality remain unverified** — see
  [`../provenance/RIGHTS_STATUS_MATRIX.md`](../provenance/RIGHTS_STATUS_MATRIX.md) for
  the rights gap map. Note two scans are modern reprints (Manuale = Forni 1983,
  Trinciante = Forni 1980) and one source is external (Dioscoride, archive.org), which
  changes the "all owner-scanned" assumption for those rows.

## Out of Scope

- Uploading any files to public storage.
- Bibliographic verification (IB-008), rights labeling (IB-010), and OCR
  measurement (IB-016).
