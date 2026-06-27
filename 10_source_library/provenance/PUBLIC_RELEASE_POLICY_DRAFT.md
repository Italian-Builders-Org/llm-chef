# Public Release Policy Draft

Status: Draft, not legal advice.

Purpose: clarify what can be public in an open-source historical cookbook project.

Use `RIGHTS_VERIFICATION_RESEARCH.md` as the working checklist for assigning release labels.

## Baseline Legal Reality

The team should assume that "old" does not automatically mean "safe to publish."

Useful reference points:

- In the United States, the U.S. Copyright Office explains that copyright duration depends on publication date and other factors. Its Circular 15A states that works published in the United States before January 1, 1931 are public domain under current term rules. See: https://www.copyright.gov/circs/circ15a.pdf
- For works created after January 1, 1978, the U.S. Copyright Office FAQ describes the general rule as life of the author plus 70 years. See: https://www.copyright.gov/help/faq/faq-duration.html
- In the EU, Directive 2006/116/EC harmonizes copyright term rules and describes the author-life-plus-70-years standard for copyright protection. See: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32006L0116
- SIAE notes that Italian literary works can remain protected when authors died less than 70 years ago, and translations can still be protected even if the original work is public domain. See: https://www.siae.it/it/utilizzatori/eventi-spettacolo-intrattenimento/letture-recitazioni-pubblico-opere-letterarie/

## Public Release Labels

Use these labels on every source before public release:

- `public_domain_verified`: Safe enough to publish source scans/OCR based on documented work-level, edition-level, source-file, and jurisdiction review.
- `public_domain_likely`: Probably safe, but needs confirmation before publishing files or OCR.
- `metadata_only`: Metadata can be public, but PDF/OCR should not be public yet.
- `permission_needed`: Rights holder or license needs confirmation.
- `private_research_only`: Do not publish files, OCR, or large excerpts.
- `do_not_use`: Exclude from project use.

Default to `metadata_only` until the source has evidence for the underlying work, the edition, the scan/PDF provider terms, and EU/Italy + US reuse status.

## What Can Usually Be Public First

Lower-risk:

- bibliographic metadata
- publication year
- author name
- source status
- high-level classification
- public-domain links hosted by libraries/archive sources
- short factual descriptions written by the team

Higher-risk:

- full PDF scans
- full OCR text
- page images
- modern editions
- translations
- photographs or illustrations inside a book
- model outputs that reproduce protected text

## V1 Rule

For the first live website, publish metadata for all known books, but publish PDFs/OCR/full text only for sources marked `public_domain_verified`.

Pre-1929 publication is a candidate filter for V1, not a release label. It does not override edition, translation, image, annotation, scan-owner, source-provider, cultural-heritage, or jurisdiction questions.

If a source is uncertain, show it as catalog metadata with rights status. Do not expose the file.

## Open Questions For the project owner/Team

- Confirm per-file that the original seed-list PDFs were scanned from the project owner-owned physical copies.
- Which books are modern editions of older public-domain works?
- Are there translations, introductions, photographs, or annotations that have separate rights?
- Will the site host files directly, or link to trusted external public-domain hosts?
- Who signs off on `public_domain_verified`?
