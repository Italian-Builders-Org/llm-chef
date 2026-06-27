# Rights Verification Research

Status: Working research memo, not legal advice.
Last updated: 2026-06-27

Purpose: explain why "pre-1929" is only a candidate filter and define the checks required before publishing PDFs, OCR, full text, page images, or model outputs.

## Bottom Line

For V1, default every source to `metadata_only` until it passes a documented rights review.

A source is not safe for public release just because it is old. The team must verify four separate layers:

1. Work-level copyright: is the underlying text public domain in the relevant jurisdictions?
2. Edition-level rights: does this edition contain protected translation, introduction, annotations, images, critical apparatus, layout, or editorial material?
3. File/source rights: do we have permission or a clear license to host this specific scan, PDF, OCR, or page image?
4. Jurisdiction/reuse constraints: are there EU/Italy, US, library/archive, or cultural-heritage rules that limit public reuse?

If any layer is unclear, the public website should show metadata only and link to an external source page when appropriate.

## Known Source-Origin Fact

the project owner reported on 2026-06-27 that every item in the original seed list was scanned from a physical copy owned by him.

Implication: for those sources, the scan/source-provider layer is simpler than if the PDFs came from a library, paid database, Internet Archive, Google Books, or another external host.

Limit: ownership of the physical copy and creation of the scan do not by themselves clear work-level copyright, edition-level rights, translation rights, introductions, annotations, illustrations, photographs, or jurisdiction questions. Each source still needs per-file confirmation and a public-release label.

## Jurisdiction Model For V1

The website is public and will likely be accessed from the EU/Italy and the United States. Treat a source as publicly releasable only if the team is comfortable with both:

- EU/Italy copyright and cultural-heritage constraints.
- US copyright and hosting risk.

This is conservative, but it is the right default for an open-source project that wants to avoid public cleanup later.

## Verification Layers

### 1. Work-Level Copyright

Minimum checks:

- author/editor name
- author death year, if known
- publication year
- country/language context
- anonymous, pseudonymous, corporate, or joint authorship status

Operational rule:

- EU/Italy: assume literary works are generally protected for the author's life plus 70 years. If the author died less than 70 years ago, do not publish full text without further review or permission.
- US: use the U.S. Copyright Office duration chart. Very old US-published works may be public domain, but the chart must be checked rather than using a loose "old book" rule.
- Unknown author/death year: keep as `metadata_only` or `public_domain_likely`, not `public_domain_verified`.

Example risk:

- A 1929 book can still be protected in EU/Italy if the author died much later. Publication year alone does not clear it.

### 2. Edition, Translation, And Added Material

Even if the underlying work is public domain, a specific edition may contain protected material.

Check for:

- modern translations
- introductions, notes, essays, indexes, annotations, or critical apparatus
- restored or edited text with new scholarly contribution
- later illustrations, photographs, cover art, or typography/layout claims
- publisher-specific compilation or selection choices

Operational rule:

- If the physical/digital item is a modern reprint of an old text, do not publish the PDF/OCR until added material is separated or cleared.
- If only the original public-domain text is needed, record exactly which pages/sections are excluded from public release.

### 3. Scan, PDF, OCR, And Source-Provider Rights

The copyright status of the book and the rights to host a specific file are different questions.

Check:

- Did the project owner/team scan a physical copy owned by the team?
- Did the file come from Internet Archive, Google Books, HathiTrust, a university library, a national library, a paid database, or another source?
- What license or terms does that provider attach to downloads and reuse?
- Is the project allowed to rehost the PDF, page images, and OCR, or should it link out?

Operational rule:

- Team-owned scans of clearly public-domain editions are usually the cleanest V1 path.
- External scans with unclear terms should be linked, not rehosted.
- OCR made from a file with unclear rehosting rights should stay private until source terms are cleared.

### 4. Italy / EU Cultural Heritage Constraints

Some Italian public collections apply reproduction or concession rules to cultural heritage materials, separate from ordinary copyright analysis.

Check:

- Is the scan/image sourced from an Italian state museum, archive, library, or other public cultural institution?
- Do the institution's terms allow commercial or noncommercial reuse?
- Are attribution, fee, authorization, or no-derivatives requirements attached?

Operational rule:

- If the source comes from an Italian public cultural collection, record the institution's reuse terms before publishing scans or page images.
- If terms are unclear, keep the project page metadata-only and link to the institution page.

### 5. Model Outputs And Derived Data

Lower risk:

- bibliographic metadata
- factual tags
- short team-written summaries
- source citations
- extraction status

Higher risk:

- full OCR of unverified sources
- long excerpts
- model outputs that reproduce protected text
- generated editions that adapt protected material

Operational rule:

- Do not expose generated summaries or RAG answers that can reproduce full text from sources that are not `public_domain_verified`.
- Structured facts can often be stored, but keep the source evidence trail.

## Public Release Label Criteria

Use these criteria before assigning labels in `PUBLIC_RELEASE_POLICY_DRAFT.md`.

### `public_domain_verified`

Allowed only when all are documented:

- work-level copyright check completed
- edition-level/added-material check completed
- source-file or scan-provider terms checked
- jurisdiction notes recorded for EU/Italy and US
- cultural-heritage/source-provider constraints checked where relevant
- reviewer and review date recorded

### `public_domain_likely`

Use when the work appears old enough and low-risk, but one or more facts are still missing.

Never publish PDFs, OCR, page images, or full text from this label without a separate release decision.

### `metadata_only`

Default label for the public website.

Allowed public fields:

- title
- author/editor
- year or year range
- language
- source type
- rights status
- availability notes
- external source links
- team-written short descriptions

### `permission_needed`

Use when the source is probably protected, has unclear source-provider terms, is a modern edition/reprint, or contains protected added material.

### `private_research_only`

Use when internal analysis can continue but public release would be risky.

### `do_not_use`

Use when the source should be excluded from the project because rights, provenance, source quality, or reputational risk is unacceptable.

## V1 Recommendation

For the first 2-4 week website:

1. Publish catalog metadata for all known books.
2. Select 3-5 pilot sources only after metadata verification and rights triage.
3. Publish full PDF/OCR/reader views only for sources marked `public_domain_verified`.
4. Treat pre-1929 rows as candidates, not approvals.
5. Prefer team-owned scans or clearly licensed public-domain sources for V1.
6. Keep editorial modernization, standardized measurements, and derived books out of V1.

## Per-Source Checklist

Copy this checklist into each source record or issue:

- Source title:
- Stable slug:
- Author/editor:
- Author death year:
- Original publication year:
- Edition year:
- Publisher:
- Physical or digital source:
- Source URL or storage location:
- Scan provider:
- Provider license/terms URL:
- Work-level copyright status:
- Edition-level added material:
- Translation/annotation/image rights notes:
- EU/Italy status:
- US status:
- Cultural heritage/source-provider constraints:
- Allowed public use:
- Release label:
- Reviewer:
- Review date:
- Remaining blockers:

## Sources Consulted

- U.S. Copyright Office, Circular 15A, "Duration of Copyright": https://www.copyright.gov/circs/circ15a.pdf
- U.S. Copyright Office, "How Long Does Copyright Protection Last?": https://www.copyright.gov/help/faq/faq-duration.html
- EU Directive 2006/116/EC on the term of protection of copyright and certain related rights: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32006L0116
- Italian copyright law reference via WIPO Lex: https://www.wipo.int/wipolex/en/text/477668
- SIAE guidance on literary works and translations: https://www.siae.it/it/utilizzatori/eventi-spettacolo-intrattenimento/letture-recitazioni-pubblico-opere-letterarie/
- EU Directive 2019/790, including public-domain reproduction context in Article 14; useful context, but not sufficient by itself to clear all book scans or provider terms: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32019L0790
- Italian Cultural Heritage and Landscape Code reference, Legislative Decree No. 42/2004: https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2004-01-22;42!vig=
