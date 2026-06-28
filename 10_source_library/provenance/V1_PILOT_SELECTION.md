# V1 Pilot Selection (IB-011)

Status: Active — IB-011 deliverable.

Last updated: 2026-06-28.

Purpose: name the short pilot list for the first **faithful Level A digital editions**,
drawn only from the owner-signed-off `public_domain_verified` set in
[`RELEASE_LABELS_V1.md`](RELEASE_LABELS_V1.md). One book is the **build-first prototype**;
the rest are the cleared pool that graduates once the prototype works.

## Product surface this pilot feeds (per ADR-0004)

ADR-0004 already sets V1 as "faithful digital editions (Level A) — **cleaned OCR,
well-typeset, content unchanged**." So the reader renders **Level A = faithful
transcription, re-typeset** (per
[`../../30_editorial_engine/playbook/EDITORIAL_PLAYBOOK.md`](../../30_editorial_engine/playbook/EDITORIAL_PLAYBOOK.md)):
the source's own words, OCR'd and corrected, in a **clean, paper-like e-reader UI** —
**not** raw page scans, and **not** modernized/reworded text (Level B/C, deferred). The
page images are retained as the **source-of-truth** behind each transcription, not as
the primary reading surface. IB-018 (product requirements) and IB-019 (reader UX)
operationalize the reading experience; this is not a new scope decision.

## Pilot pool (6 — all `public_domain_verified`, owner sign-off 2026-06-28)

| slug | title | year | lang | storage | rights | role |
|---|---|---|---|---|---|---|
| artusi-1891-scienza-in-cucina | La scienza in cucina e l'arte di mangiar bene | 1891 | IT | owner scan (PDF), team corpus | public_domain_verified | **PROTOTYPE** |
| artusi-1891-scienza-in-cucina-immagini | …same work — image/plate set | 1891 | IT | owner scan (images), team corpus | public_domain_verified | prototype's images |
| unknown-1896-traditions-culinaires | Traditions culinaires… (B. Staffe) | 1896 | FR | owner scan (PDF), team corpus | public_domain_verified | graduate after prototype |
| unknown-1897-re-dei-cuochi | Il re dei cuochi… (Salani) | 1897 | IT | owner scan (PDF+images), team corpus | public_domain_verified | graduate after prototype |
| unknown-undated-cuoco-sapiente | Cuoco sapiente… (Guigoni) | 1901 | IT | owner scan (PDF+images), team corpus | public_domain_verified | graduate after prototype |
| unknown-1857-cuciniere-italiano | Il cuciniere italiano moderno (Vignozzi) | 1857 | IT | owner scan (PDF+images), team corpus | public_domain_verified | graduate last (hardest OCR) |

Storage detail (filenames) is in [`../inventory/BOOK_LIST_SEED.md`](../inventory/BOOK_LIST_SEED.md);
raw masters live off-git per [`../inventory/SOURCE_CORPUS_AND_STORAGE.md`](../inventory/SOURCE_CORPUS_AND_STORAGE.md).
Local filesystem paths are withheld from the repo by policy.

## Per-pilot rationale

- **Artusi 1891 — PROTOTYPE.** The marquee source; **cleanest type** of the six (1891
  printing) so OCR accuracy is highest; and an **authoritative public-domain
  transcription already exists** (Wikisource / Casa Artusi) to **validate our OCR
  against** — the single biggest de-risk for a transcription prototype. Proven here,
  the pipeline + reader UI graduate to the rest.
- **Traditions culinaires 1896 (Staffe).** Adds **French** breadth; clean late-19th-c
  type; author died 1911 (clearly PD).
- **Il re dei cuochi 1897 (Salani)** and **Cuoco sapiente 1901 (Guigoni).** Anonymous
  Italian popular cookbooks, clean type, good variety of period/voice.
- **Il cuciniere italiano moderno 1857 (Vignozzi).** Oldest of the six → **hardest OCR**
  (older type, more ligatures); deliberately **graduated last**, once the pipeline is
  proven on cleaner sources.

## Prototype flagship vs public flagship

Artusi is the **prototype** (cleanest type, an existing transcription to validate
against) and a recognizable anchor, but it is the **least rare** book here and a weak
public differentiator. When V1 goes public (V1b), **lead with the rare/underused
titles** that aren't freely available elsewhere (the anonymous *Cuoco sapiente* 1901,
*Il re dei cuochi* 1897, and later the obscure regional/agronomy sources). Artusi rides
along as the familiar name, not the headline.

## Prototype plan (one book, two things to prove)

1. **Reader UI** — render an existing clean Artusi transcription in the e-reader to
   prove the reading experience fast (decoupled from our OCR quality).
2. **OCR pipeline** — OCR our Artusi scan and **diff against the reference** to prove we
   can produce a faithful Level A transcription from our own masters.

Only after both hold do the other five graduate into the localhost prototype build.

## Dependencies & handoff

- **OCR / text contract:** IB-037 (feasibility go/no-go), IB-015 (Level A OCR/text
  contract), IB-016 (OCR quality for pilot sources) — the prototype's blocking chain.
- **App:** IB-004 (scaffold `/website`), IB-023 (hello-world deploy), IB-027 (Level A
  reader for the pilot source), IB-028 (rights gates in UI).
- **Data:** the pilot books feed IB-013 (seed `books.json`) and IB-014 (asset manifest).

## Out of scope

Selecting the whole corpus. The remaining `public_domain_likely` / `metadata_only`
sources stay catalog-metadata-only until their own sign-off (death-year firm-up,
date/edition resolution) per `RELEASE_LABELS_V1.md`.
