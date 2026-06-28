# V1 Pre-1929 Candidate Pool (IB-009)

Status: Active — IB-009 deliverable. **CANDIDATE-ONLY. NOT public-domain verified.**

Last updated: 2026-06-28.

Purpose: list the seed sources eligible to be *considered* for faithful Level A
treatment in V1, on the basis of **publication date alone**. Built from
[`../inventory/BIBLIOGRAPHIC_VERIFICATION.md`](../inventory/BIBLIOGRAPHIC_VERIFICATION.md)
(IB-008) and [`RIGHTS_STATUS_MATRIX.md`](RIGHTS_STATUS_MATRIX.md).

> **This is a candidate filter, not an approval.** Being on this list means only that
> the work was published before 1929. It does **not** mean the source is public domain,
> cleared for display, or free of edition/translation/scan/reprint rights. Public-
> domain verification and release labels happen in **IB-010**, with reviewer sign-off
> per [`PUBLIC_RELEASE_POLICY.md`](PUBLIC_RELEASE_POLICY.md). Pilot selection is **IB-011**.

**Update 2026-06-28:** IB-010 labeled all candidates and the owner signed off **6** of
these to `public_domain_verified`; IB-011 selected them as the V1 pilot (Artusi 1891 =
build-first prototype). See [`RELEASE_LABELS_V1.md`](RELEASE_LABELS_V1.md) and
[`V1_PILOT_SELECTION.md`](V1_PILOT_SELECTION.md).

## Filter used

- **Rule:** include a source only if the underlying work was **published before 1929**
  (ADR-0004's conservative V1 candidate filter). Language is not a filter — pre-1929
  French/German sources qualify.
- **Note on the cutoff:** "pre-1929" is the project's *candidate* line. The actual US
  public-domain line is published-before-1931 (rolling); the EU line is author
  life + 70 (or 70-from-publication for anonymous/corporate). The candidate filter is
  deliberately tighter than either and still does not clear anything — see IB-010.
- **Date confidence comes from IB-008:** title-page/foreword evidence where available;
  flagged where the year is unconfirmed.

## Candidate pool (15)

| slug | pub year | language | basis | candidate caveat |
|---|---|---|---|---|
| dioscoride-1546-della-materia-medicinale | 1547 | Italian | archive.org (Giunti, Firenze) | external copy, not locally scanned |
| cervio-1593-trinciante | 1593 | Italian | title page | **scan is a 1980 Forni reprint** — exclude reprint's modern matter |
| unknown-1832-manuale-cuoco-pasticcere | 1832 | Italian | title page | **scan is a 1983 Forni reprint** — exclude reprint's modern matter |
| unknown-1857-cuciniere-italiano | 1857 | Italian | title page (ed. XV, Vignozzi) | anonymous |
| artusi-1891-scienza-in-cucina | 1891 | Italian | title page | clean |
| artusi-1891-scienza-in-cucina-immagini | 1891 | Italian | same work (image set) | image-set rights to confirm |
| unknown-1896-traditions-culinaires | 1896 | French | title page (G. Havard fils, 10e éd.) | clean |
| unknown-1897-re-dei-cuochi | 1897 | Italian | title page (Salani, Firenze) | anonymous |
| aloi-1920s-olivo-olio | 1898 | Italian | title page (4ª ed., Hoepli) | slug year stale (says 1920s) |
| unknown-undated-cuoco-sapiente | 1901 | Italian | title page (Guigoni, Milano) | likely anonymous; confirm |
| unknown-undated-cucina-salutare-bambini | ~1909 | Italian | dedication (A. Pettini) | year from dedication, not title page |
| unknown-1912-kochrezepte-unterricht-kochen | 1912 | German | foreword (Olga & Adolf Hess) | "Sacher" label false; title page not in scan |
| unknown-1925-frutta-alimentazione-terapia | 1925 | Italian | front matter (A. Masoni) | year from folder; title page not in scan |
| artusi-1896-ricette | (Artusi work, 1891) | Italian | interior Artusi pages | phantom — no distinct 1896 edition; Artusi content |
| unknown-undated-vero-re-cuochi | undated (web: 1890s) | Italian | title (Il vero re dei cucinieri) | **date unconfirmed** — provisional; confirm pre-1929 |

## Borderline — excluded from the V1 candidate pool

- **boni-1929-talismano-felicita** — first edition is at the 1929 boundary (sources
  split 1925/1928/1929) **and** the scanned copy is the **XXIII ed., Carlo Colombo**
  (a mid-20th-century reprint), **and** Ada Boni died 1973 (EU copyright to ~2044).
  On all three counts it fails the conservative pre-1929 candidate test. Excluded.

## Excluded — published 1929 or later (out of scope for V1 full-text)

cioccolato-1933, academie-gastronomes-1942 (1962), ricette-regionali-1967,
segreti-1968, gelati-1975, romagna-1978, cucina-ebraica-1982 (1982),
gran-banchetto (~1986), ricette-duce-1988, ricette-rocca-1988, marchesi-1990,
ricette-per-ogni-giorno-1990, cucina-romagnola-1995, pane-pizza (modern). These may
still feed the post-V1 clean-room **Track-2 (V2 Recipe Engine)**, not V1 full-text.

## Caveats carried into IB-010 / IB-011

- **No row here is cleared.** Each still needs the four-layer rights review
  (work / edition / scan-file / jurisdiction) and a reviewer sign-off (IB-010).
- **Reprint artifacts:** the Manuale (Forni 1983) and Trinciante (Forni 1980) scans are
  modern reprints of public-domain works — usable content, but the reprint's added
  matter (intro, notes, typesetting) is excluded and the scan-file rights differ.
- **EU clearance gaps:** several candidates are US-pre-1931 but need an author death
  year for EU (Aloi, Pettini, Hess ×2, Masoni) — that research is the opening task of
  IB-010.
- **Date to confirm:** `vero-re-cuochi` is included provisionally until its publication
  date is established.
- **Pilot selection (IB-011)** should favor the cleanest, highest-value rows — e.g.
  Artusi 1891 (marquee, clean), plus 2–4 others from the anonymous/old-and-clean set.
