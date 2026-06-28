# Source Asset Manifest (IB-014)

Status: Active — IB-014 deliverable (format spec; not yet populated).

Last updated: 2026-06-28.

Purpose: define the manifest **format** that maps each source (by slug) to its assets
(master PDF, page images, OCR text, Level A transcription) and the **visibility class**
of each, so the build serves only what is cleared. It is the single source of truth for
"what may the site expose, per asset."

- Visibility is derived from the rights label in
  [`../../10_source_library/provenance/RELEASE_LABELS_V1.md`](../../10_source_library/provenance/RELEASE_LABELS_V1.md) (IB-010).
- Asset *locations* come from
  [`../../10_source_library/inventory/SOURCE_CORPUS_AND_STORAGE.md`](../../10_source_library/inventory/SOURCE_CORPUS_AND_STORAGE.md) (off-git masters).
- Consumed by `books.json` (IB-013), the Level A reader (IB-027), and the UI rights
  gates (IB-028).

**Out of scope:** storing large assets in git. The manifest records *references* to
asset locations, never the bytes.

## Visibility classes (the IB-014 success-check requirement)

Every asset carries exactly one:

- **`private`** — internal / research only; never exposed publicly (raw masters; assets
  of not-yet-verified sources).
- **`metadata_only`** — only catalog metadata may be public; no PDF / OCR / full text.
- **`public_release`** — may be served publicly (subject to the UI rights gate). Allowed
  **only** for assets of a source labeled `public_domain_verified`.

Rights label → maximum visibility:

| rights label (RELEASE_LABELS_V1) | max visibility |
|---|---|
| `public_domain_verified` | `public_release` (per asset) |
| `public_domain_likely` | `private` (research) until verified |
| `metadata_only` | `metadata_only` |
| `permission_needed` / blocked | `private` or `metadata_only` |

Visibility is **per asset**, not just per source. In V1 the **only `public_release`
asset is the Level A transcription**; a verified source keeps its **master PDF, raw
OCR, and page images `private`**. V1 has **no page-facsimile / "view original page"
feature** (decided 2026-06-28): page images are retained privately as masters /
provenance only, never served. Later layers (e.g. extracted recipes, V2) can become
`public_release` for verified sources.

## Format

JSON keyed by source slug. Per source: `rights_label` + an `assets[]` array. Per asset:
`type`, `location` (a reference, not bytes), `visibility`, `format`, and optional
`count` / `status` / `checksum`.

`type` ∈ `master_pdf` · `page_images` · `ocr_text` · `transcription_level_a`
`location` ∈ `drive:<ref>` (off-git master) · `build:<path>` (build-time hosted) — never a committed binary.

### Example — Artusi 1891 (the prototype: verified source, mixed visibility)

```json
{
  "artusi-1891-scienza-in-cucina": {
    "rights_label": "public_domain_verified",
    "assets": [
      { "type": "master_pdf",            "location": "drive:<ref>", "visibility": "private",        "format": "pdf" },
      { "type": "page_images",           "location": "drive:<ref>", "visibility": "private",        "format": "jpg", "count": 450 },
      { "type": "transcription_level_a", "location": "build:<path>","visibility": "public_release", "format": "md",  "status": "pending-OCR" }
    ]
  }
}
```

### Example — a non-verified source (metadata only)

```json
{
  "unknown-1912-kochrezepte-unterricht-kochen": {
    "rights_label": "metadata_only",
    "assets": [
      { "type": "master_pdf", "location": "drive:<ref>", "visibility": "private", "format": "pdf" }
    ]
  }
}
```

(Hess/"Sacher": EU-copyrighted to 2035 — catalog metadata only; no asset is `public_release`.)

## Rules

- **`public_release` requires `rights_label == public_domain_verified`.** Validation
  (IB-021 / CI) must reject any `public_release` asset whose source is not verified.
- **Raw masters are always `private`** and off-git (team Drive).
- The manifest **references** locations; it never embeds large binaries (out of scope).
- The reader (IB-027) serves only `public_release` assets; the UI rights gate (IB-028)
  enforces visibility at render time; `books.json` (IB-013) reads per-source metadata +
  visibility from here.

## Handoff (population is later)

This file defines the format only. The populated manifest is produced when `/data` is
created (IB-013) and as the OCR pipeline (IB-015/IB-016) yields Level A transcriptions —
starting with the Artusi prototype, then graduating the other `public_domain_verified`
sources.
