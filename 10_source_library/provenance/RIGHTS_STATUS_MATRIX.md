# Rights Status Matrix (historical seed for IB-009 / IB-010)

Status: Historical working seed. Superseded for live V1 release labels by
[`RELEASE_LABELS_V1.md`](RELEASE_LABELS_V1.md). NOT a legal clearance.

Last updated: 2026-06-28.

This is the rights/public-domain **gap map** that fed IB-009 (V1 pre-1929 candidate
pool) and seeded IB-010 (public-release labels). It records, per book, the likely US
and EU/Italy status, the **scan artifact** (original vs modern reprint), and what was
missing to clear it.

> **This is not legal advice and not a clearance.** It is a structured first pass to
> prioritise review. Use [`RELEASE_LABELS_V1.md`](RELEASE_LABELS_V1.md) for the live
> IB-010 labels and owner sign-off. See also
> [`RIGHTS_VERIFICATION_RESEARCH.md`](RIGHTS_VERIFICATION_RESEARCH.md) and the
> bibliographic basis in [`../inventory/BIBLIOGRAPHIC_VERIFICATION.md`](../inventory/BIBLIOGRAPHIC_VERIFICATION.md).

## Rules of thumb used (general, not jurisdiction-specific advice)

- **US:** works published **before 1931** are public domain (95-year rule; the cutoff
  advances one year each 1 January — it is 1930-and-earlier as of 2026).
- **EU / Italy:** **life + 70 years** for named authors (PD if the author died
  ≤ 1955). **Anonymous / pseudonymous / corporate** works: **70 years from
  publication**. Italy has extra wrinkles (a 20-year right for critical/scientific
  editions; historic war extensions) — flag for the reviewer; do not assume.
- **Scans/facsimiles:** a faithful reproduction of a 2-D public-domain work generally
  gains **no new copyright** (US *Bridgeman v. Corel*; EU DSM Directive Art. 14). So
  scanning a PD book does not create rights — **but a modern reprint's added matter**
  (new introduction, notes, critical apparatus, fresh typesetting) can carry thin
  protection. Use the historical content; exclude modern editorial additions.
- **Recipes:** a list of ingredients is an unprotected **fact**; the author's
  **expressive text** (method prose, headnotes, commentary) is protected, as is a
  collection's **selection/arrangement**. "Clean-room" re-expression of the factual
  recipe mitigates, but does not license copying expression or a copyrighted
  compilation's structure.

## Two tracks (what each needs)

- **Track 1 — verbatim** (page images / OCR full text / faithful Level-A editions):
  needs the underlying work **public domain in the hosting jurisdiction**. Year +
  (for named authors) death year are load-bearing.
- **Track 2 — clean-room recipes** (extract facts, re-express, reorganise): post-V1 /
  V2 Recipe Engine work only. It is far less date-sensitive, but still governed by
  the recipe/compilation rules above and needs its own ADR before work starts.

## Matrix

Legend — US/EU: `PD` public domain · `©` under copyright · `?` unresolved (missing
input). Artifact: `orig` original printing scanned · `reprint` modern reprint scanned
· `digital` external digitisation.

### Group A — public domain US + EU lean (strongest Track-1 candidate pool)

| slug | pub year | author / death | artifact | US | EU | gap / note | reviewer |
|---|---|---|---|---|---|---|---|
| dioscoride-1546-della-materia-medicinale | 1547 (Giunti) | Mattioli (transl.) d.1577 | digital (archive.org) | PD | PD | use archive.org copy; not locally scanned | |
| cervio-1593-trinciante | 1593 | Vincenzo Cervio | reprint (Forni 1980) | PD | PD | exclude any 1980 Forni intro/apparatus | |
| unknown-1832-manuale-cuoco-pasticcere | 1832 | Vincenzo Agnoletti (early 1800s) | reprint (Forni 1983) | PD | PD | exclude 1983 Forni added matter | |
| unknown-1857-cuciniere-italiano | 1857 (ed. XV) | anonymous | orig | PD | PD | anonymous → 70y from pub | |
| artusi-1891-scienza-in-cucina | 1891 | Pellegrino Artusi d.1911 | orig | PD | PD | clear | |
| artusi-1891-scienza-in-cucina-immagini | 1891 | Artusi d.1911 | orig (images) | PD | PD | clear | |
| unknown-1896-traditions-culinaires | 1896 (10e éd.) | Baronne Staffe (B. Soyer) d.1911 | orig | PD | PD | French; clear | |
| unknown-1897-re-dei-cuochi | 1897 | anonymous (Salani) | orig | PD | PD | anonymous → 70y from pub | |
| unknown-undated-cuoco-sapiente | 1901 (Guigoni) | likely anonymous | orig | PD | PD | confirm no named author | |
| artusi-1896-ricette | (Artusi work, 1891) | Artusi d.1911 | orig (excerpt pages) | PD | PD | not a distinct 1896 edition — interior Artusi recipe pages, no title page | |

### Group B — US public domain; EU unresolved (needs a death year or a date)

| slug | pub year | author / death | artifact | US | EU | gap / note | reviewer |
|---|---|---|---|---|---|---|---|
| aloi-1920s-olivo-olio | 1898 (4ª ed.) | Antonio Aloi (death yr unknown) | orig | PD | ? | need Aloi death year | |
| unknown-undated-cucina-salutare-bambini | ~1909 (dedic.) | Amedeo Pettini (death yr unknown) | orig | PD | ? | need Pettini death year | |
| unknown-1912-kochrezepte-unterricht-kochen | 1912 | Olga & Adolf Hess (death yrs unknown) | orig | PD | ? | German; need Hess death years; "Sacher" label is false | |
| unknown-1925-frutta-alimentazione-terapia | 1925 | Alfredo Masoni (death yr unknown) | orig | PD | ? | need Masoni death year | |
| unknown-undated-vero-re-cuochi | undated (web: 1890s) | anon / G. Belloni? | orig | ? | ? | **date not found in scan**; if 1890s & anon → PD both | |

### Group C — under copyright (V2 clean-room candidate only; no verbatim)

| slug | pub year | author / death | artifact | US | EU | note | reviewer |
|---|---|---|---|---|---|---|---|
| unknown-1933-cioccolato-valore-alimentare | 1933 | corp. (Fed. Naz. Fascista Ind. Dolciaria) | orig | © (to 2029) | PD (corp. 70y → ~2004) | EU-PD, US not yet | |
| boni-1929-talismano-felicita | scan = XXIII ed. (Carlo Colombo) | Ada Boni d.1973 | orig (later ed.) | © | © (to 2044) | not the 1929 first ed.; copyrighted both | |
| academie-gastronomes-1942-dictionnaire | 1962 | Académie / P-É. Cadilhac | absent | © | © | not in corpus | |
| unknown-1967-ricette-regionali-italiane | 1967 | Anna Gosetti della Salda d.2017 | orig | © | © (to 2087) | publisher "La Cucina Italiana" | |
| unknown-1968-segreti-grandi-cuochi | ~1968 | Giorgio Colorni | orig | © | © | Franco Angeli | |
| unknown-1975-gelati-fatti-in-casa | 1975 | Elena Spagnol | orig | © | © | Rizzoli | |
| unknown-1978-romagna-in-bocca | 1977/78 | Erica Marini | orig | © | © | Il Vespro | |
| unknown-undated-cucina-ebraica-famiglia | 1982 | Donatella Limentani Pavoncello d.~2020 | orig | © | © | Carucci | |
| unknown-undated-gran-banchetto-rinascimento | ~1986 | Della Beffa & Paolucci | orig | © | © | curated compilation (selection protected) | |
| unknown-1988-ricette-duce | 1988 | G. Cajati (intro) / V. Luchinat? | orig | © | © | Borelli Editore | |
| unknown-1988-ricette-rocca | 1988 | corp. (Bertolli + La Cucina Italiana) | orig | © | © | promotional/corporate | |
| marchesi-1990-abc-cucina | 1990 | Gualtiero Marchesi d.2017 | orig | © | © | **video booklet** (VIDEORAI/Musumeci), not a book | |

### Group D — unidentified (cannot assess yet)

| slug | note | reviewer |
|---|---|---|
| unknown-1990-ricette-per-ogni-giorno | scan = interior recipe pages only; no title page; modern → assume © | |
| unknown-1995-cucina-romagnola | scan = interior only; web: Pozzetto, F. Muzzio; modern → assume © | |
| unknown-undated-pane-pizza-focacce | scan = interior only; generic modern title → assume © | |

## What this means for V1

The pre-1929 subset is formalised as the candidate pool in
[`V1_CANDIDATE_POOL.md`](V1_CANDIDATE_POOL.md) (IB-009). The live IB-010 labels and the
six `public_domain_verified` owner sign-offs are in
[`RELEASE_LABELS_V1.md`](RELEASE_LABELS_V1.md).


- **Track-1 review candidates:** the Group-A records — anchored by Artusi 1891, the
  Mattioli/Dioscoride 1547, and Cervio's *Trinciante* 1593 — were the strongest review
  candidates. The clean owner-scanned originals that passed the bright-line rule are
  signed off in `RELEASE_LABELS_V1.md`; the reprint/external rows remain conditional.
- **Group B rows** are carried forward in `RELEASE_LABELS_V1.md`: Pettini and Masoni
  remain `public_domain_likely` pending stronger authority records, Hess is blocked
  as `metadata_only`, Aloi remains EU-unconfirmed, and `vero-re-cuochi` still needs a
  publication date.
- **Track-2 (clean-room)** belongs to the anticipated V2 Recipe Engine, not V1. When
  promoted by its own ADR, Group A is the lowest-risk starting pool for proving the
  extraction/re-expression workflow before touching Group C.

## Remaining inputs after IB-010

- **Death years / authority records:** Aloi remains unresolved; Pettini and Masoni
  have single-source death years and need stronger authority records before any
  `public_domain_verified` elevation. Hess is resolved enough to block public text
  until 2035.
- **Date needed:** `vero-re-cuochi` (not in the scan; web points to Belloni 1890s).
- **Reprint/external conditions:** Manuale, Trinciante, and Dioscoride need the
  edition/source-file conditions in `RELEASE_LABELS_V1.md` resolved before public
  rehosting or full-text release.
