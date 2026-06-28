# Bibliographic Verification (IB-008)

Status: Active — IB-008 deliverable.

Last updated: 2026-06-28.

Purpose: record researched bibliographic metadata for the seed inventory and mark
each of **title / year / author / edition** as `verified`, `corrected`, or
`unknown`, with notes and sources. Companion to
[`BOOK_LIST_SEED.md`](BOOK_LIST_SEED.md) (the working inventory) and
[`SOURCE_CORPUS_AND_STORAGE.md`](SOURCE_CORPUS_AND_STORAGE.md) (locations).

**Out of scope (IB-008):** legal public-domain approval. Author death years are
recorded here as inputs to IB-009/IB-010, not as rights determinations.

## Method & status vocabulary

Two independent passes: (1) research via open authoritative/secondary sources
(library catalogs, BnF/Gallica, antiquarian-bookseller and auction records, Google
Books, archive.org, Wikipedia); (2) an adversarial cross-check by a second agent
(Codex / gpt-5.5, web-enabled) tasked with disputing weak or overstated claims. The
reconciliation below applies a conservative rule:

- where the two passes found **conflicting** values → the field is `unknown`, with
  the candidate values listed;
- where a correction rests on a **single secondary source** the cross-check could
  not resurface → the correction is kept but flagged "single-source; confirm at
  title page";
- where the first pass **overstated** an interpretation → wording softened.

**No physical title pages were inspected**, and OPAC SBN/ICCU detail pages did not
render to automated fetch. Even `verified`/`corrected` here means "corroborated
against a citable open source," not "confirmed against the copy in hand." A
title-page pass is still required (see Open items) and is what the out-of-scope note
defers.

- **verified** — working value corroborated by a citable source; no change.
- **corrected** — working value wrong/incomplete; corrected value given (confidence
  noted).
- **unknown** — could not corroborate, or sources conflict; needs title page / ICCU.

"Year" = the work's publication year claimed by the seed. "Edition" = whether the
specific printing the scan represents is identified (usually `unknown`).

## Critical findings (read first)

1. **Phantom / mislabeled items** — three working entries likely do not denote a real
   object as labeled:
   - `artusi-1896-ricette` ("Ricette Artusi 1896"): **no 1896 Artusi edition exists**
     (author-curated editions 1891, 1895, 1897, 1899…). Likely excerpt pages from the
     1895/1897 edition, or mislabeled. Re-identify.
   - `marchesi-1990-abc-cucina`: **no book by this title surfaced** in either pass. A
     1990 RAI2 TV series "ABC della cucina" (Marchesi & Oldani) exists; whether the
     scan is a book at all is unverified. Verify item type.
   - `unknown-1912-kochrezepte-unterricht-kochen`: the **"Sacher" association is
     unsupported**; the working title is not a verifiable catalogued work.
2. **Copyright flag (not a determination):** `boni-1929-talismano-felicita` — Ada Boni
   died **1973** (verified by both passes); under EU/Italy life+70 the work stays in
   copyright to ~2044 regardless of edition year. The pre-1929 US heuristic does not
   clear it for EU. Carry to IB-009/IB-010.
3. **Date corrections that survived cross-check:** Mattioli/Dioscoride work = **1544**
   (not 1546/47); `academie-gastronomes-1942` = **1962** (probable digit
   transposition; the book did not exist in 1942).
4. **Conflicts the cross-check surfaced** (now `unknown`, candidates recorded):
   `traditions-culinaires` year/publisher; `cucina-romagnola` title/year;
   `talismano` first-edition year; `ricette-regionali-italiane` publisher.
5. **Generic-title collisions** flagged, not forced: `cuciniere-italiano`,
   `vero-re-cuochi`, `cuoco-sapiente`, `ricette-per-ogni-giorno`, `pane-pizza-focacce`,
   `segreti-grandi-cuochi`, `gran-banchetto`.
6. **Provisional slugs not changed.** Several corrections would change a provisional
   `unknown-`/`undated-` slug; per IB-007 these are working IDs. Recommended slugs are
   noted but **not applied** — `Decision needed:` confirm slug stabilization is
   deferred to the data-contract step (IB-012/IB-013).

## Verification status matrix

| slug | title | year | author | edition | roll-up |
|---|---|---|---|---|---|
| dioscoride-1546-della-materia-medicinale | verified | corrected | corrected | unknown | corrected |
| unknown-1832-manuale-cuoco-pasticcere | corrected | verified | corrected | verified | corrected |
| unknown-1857-cuciniere-italiano | unknown | unknown | unknown | unknown | unconfirmable |
| artusi-1891-scienza-in-cucina | verified | verified | verified | verified | verified |
| artusi-1891-scienza-in-cucina-immagini | verified | verified | verified | unknown | verified |
| unknown-1896-traditions-culinaires | corrected | unknown | corrected | unknown | partial |
| artusi-1896-ricette | unknown | corrected | unknown | unknown | unconfirmable |
| unknown-1897-re-dei-cuochi | corrected | corrected | corrected | unknown | corrected (single-source) |
| unknown-1912-kochrezepte-unterricht-kochen | unknown | unknown | unknown | unknown | unconfirmable |
| aloi-1920s-olivo-olio | verified | corrected | verified | unknown | partial (single-source) |
| unknown-1925-frutta-alimentazione-terapia | corrected | verified | corrected | verified | corrected |
| boni-1929-talismano-felicita | verified | unknown | verified | unknown | partial |
| unknown-1933-cioccolato-valore-alimentare | corrected | verified | corrected | verified | corrected (single-source) |
| academie-gastronomes-1942-dictionnaire | verified | corrected | corrected | verified | corrected |
| unknown-1967-ricette-regionali-italiane | verified | verified | corrected | unknown | partial |
| unknown-1968-segreti-grandi-cuochi | unknown | unknown | unknown | unknown | unconfirmable |
| unknown-1975-gelati-fatti-in-casa | verified | verified | corrected | verified | corrected |
| unknown-1978-romagna-in-bocca | verified | unknown | corrected | unknown | corrected |
| unknown-1988-ricette-duce | verified | verified | corrected | verified | corrected (single-source) |
| marchesi-1990-abc-cucina | unknown | unknown | verified | unknown | unconfirmable |
| unknown-1990-ricette-per-ogni-giorno | unknown | unknown | unknown | unknown | unconfirmable |
| unknown-1995-cucina-romagnola | unknown | unknown | corrected | unknown | partial |
| unknown-undated-cucina-salutare-bambini | unknown | unknown | unknown | unknown | unconfirmable |
| unknown-undated-cuoco-sapiente | corrected | unknown | corrected | unknown | probable |
| unknown-undated-vero-re-cuochi | corrected | corrected | corrected | unknown | probable |
| unknown-undated-gran-banchetto-rinascimento | unknown | unknown | unknown | unknown | unconfirmable |
| unknown-undated-cucina-ebraica-famiglia | corrected | corrected | corrected | unknown | corrected |
| unknown-undated-pane-pizza-focacce | unknown | unknown | unknown | unknown | unconfirmable |

Roll-up tally: 2 `verified`, 11 `corrected` (4 single-source), 4 `partial`, 2
`probable`, 9 `unconfirmable`.

## Per-book findings (corrected values · death year · publisher · sources · notes)

1. **dioscoride-1546** — Pietro Andrea **Mattioli**'s Italian translation/commentary
   on Dioscorides. Author **d. 1577/1578** (unsettled — keep as a range). Work first
   published **1544** (Venice), not 1546/47; expanded 1548 (Valgrisi). Italian. No
   discrete 1546/47 printing found → edition `unknown`. Original author = Dioscorides
   (1st c. AD). Both passes CONFIRM 1544. Sources: Wikipedia (Mattioli); archive.org.
2. **unknown-1832-manuale-cuoco-pasticcere** — Author **Vincenzo Agnoletti** (death
   year unknown). Fuller title *Manuale del cuoco e del pasticcere di raffinato gusto
   moderno*. Original issue **1832–1834**, Pesaro. Italian. Rec. slug `agnoletti-1832`.
   Sources: SBN/BNCF; LibreriaUniversitaria; Libroco.
3. **unknown-1857-cuciniere-italiano** — Likely the anonymous *Il cuciniere italiano
   moderno* (Livorno, Vignozzi); work **predates 1857** (first ed. cited 1832/1839);
   no 1857 edition confirmed. Generic title, collision risk. All `unknown`. Sources:
   Pandolfini; Parma e la sua storia.
4. **artusi-1891-scienza-in-cucina** — Pellegrino **Artusi**, **d. 1911**. *La scienza
   in cucina e l'arte di mangiar bene*, **1891 first edition**, self-published, Firenze
   (tip. Salvadore Landi). Italian. All verified. Sources: it.wikipedia;
   pellegrinoartusi.it; archive.org/details/artusi-1891.
5. **artusi-1891-scienza-in-cucina-immagini** — Same work; **1891 = true first-edition
   year** (confirmed). Which edition the images are from = `unknown`. No 1896 Artusi
   edition exists (see row 7). Source: pellegrinoartusi.it editions list.
6. **unknown-1896-traditions-culinaires** — Author **Baronne Staffe** (pseud. of
   **Blanche-Augustine-Angèle Soyer**, **d. 1911**) — both passes agree. Title
   *Traditions culinaires et l'art de manger toute chose à table*. **Year/publisher
   CONFLICT → `unknown`:** candidates Paris, **L. Chailley, 1893** (fr.wikipedia, Codex
   pass) vs **Flammarion, 1894** (BnF reprint, first pass) vs seed **1896**. French.
   Rec. slug `staffe-189x`. Sources: fr.wikipedia (Baronne Staffe); Gallica/BnF.
7. **artusi-1896-ricette** — **PHANTOM:** no 1896 Artusi edition. Likely excerpt pages
   from the 1895/1897 edition of *La scienza in cucina*, or mislabeled. Re-identify.
   Source: pellegrinoartusi.it; it.wikipedia.
8. **unknown-1897-re-dei-cuochi** — Author **Giovanni Nelli** (death year unknown).
   *Il re dei cuochi. Trattato di gastronomia universale*; work first published **1868**
   (Felice Legros, Milano); 1897 = unconfirmed later printing. Italian. *Single-source:
   first pass cited auction/specialist records (Gonnelli, Invaluable,
   taccuinigastrosofici); Codex pass did not resurface them — confirm at title page.*
   Rec. slug `nelli-1868`.
9. **unknown-1912-kochrezepte-unterricht-kochen** — Title not verifiable; **Sacher link
   unsupported**. Possible (unconfirmed) match: Olga & Adolf Hess, *Wiener Küche*
   (~1913). German. All `unknown`; re-derive from title page. Sources: archive.org (Hess).
10. **aloi-1920s-olivo-olio** — Author **Antonio (F.) Aloi** (death year unknown).
    *L'olivo e l'olio* (Manuali Hoepli). First pass: work first published **1881**, eds
    1881/1892/1903, **pre-1929 likely**. *Single-source; Codex pass did not resurface —
    treat pre-1929 as probable, not confirmed.* Specific 1920s printing `unknown`.
    Italian. Sources: Google Books; bookseller listings.
11. **unknown-1925-frutta-alimentazione-terapia** — Author **Alfredo Masoni** (death
    year unknown). Title *Le frutta nell'alimentazione e nella terapia*. **1925**,
    Ulrico Hoepli, Milano (publisher medium-confidence). Italian. Rec. slug
    `masoni-1925`. Sources: Google Books; biblio.com.
12. **boni-1929-talismano-felicita** — **Ada Boni, d. 1973** (verified, both passes).
    *Il talismano della felicità*. **First-edition year CONFLICT → `unknown`:**
    candidates **1925** (Edizioni della Rivista Preziosa, Roma — first pass), **1928**
    (expanded), **1929** (AP; en.wikipedia). Italian. **COPYRIGHT FLAG:** EU life+70 →
    in copyright to ~2044. Sources: it/en.wikipedia (Ada Boni); VIVIT; AP.
13. **unknown-1933-cioccolato-valore-alimentare** — Corporate author **Federazione
    Nazionale Fascista dell'Industria Dolciaria**; title *Il cioccolato ed il suo valore
    alimentare*; **1933**, Stab. Grafico Foà, Torino. *Single-source (antiquarian
    listings); Codex pass did not resurface — confirm at title page.* Italian. Sources:
    Maremagnum; Libreria Malavasi.
14. **academie-gastronomes-1942-dictionnaire** — Corporate: **Académie des Gastronomes**;
    dir./ed. **Paul-Émile Cadilhac**. *Dictionnaire de l'Académie des gastronomes*,
    **1962** (not 1942), 2 vols, Éditions Prisma, Paris. French. Both passes CONFIRM
    1962. Sources: fr.wikipedia; Bibliorare; livre-rare-book.
15. **unknown-1967-ricette-regionali-italiane** — Author **Anna Gosetti della Salda**
    (**d. 2017** per obituary, first pass; Codex could not confirm year → treat as
    flagged). *Le ricette regionali italiane*, **first ed. 1967**. **Publisher CONFLICT
    → `unknown`:** seed "Vallardi" vs **Solares** (first pass) vs **La Cucina Italiana**
    (Codex). Italian. Rec. slug `gosetti-1967`. Sources: PapilleClandestine; IBS;
    Gazzetta di Mantova (obit); it.wikipedia.
16. **unknown-1968-segreti-grandi-cuochi** — **UNCONFIRMABLE** across all fields; no
    catalog match for the exact title+subtitle. Italian (inferred). Needs ICCU/title page.
17. **unknown-1975-gelati-fatti-in-casa** — Author **Elena Spagnol** (death year
    unknown). *I gelati fatti in casa con o senza macchina*, **1975 first edition**,
    Rizzoli, Milano. Italian. Rec. slug `spagnol-1975`. Source: Equilibri Libreria.
18. **unknown-1978-romagna-in-bocca** — Author **Fosca Martini** (death year unknown).
    Edizioni **Il Vespro**, Palermo; "In bocca" series (1974–1981); **trilingual**
    (Italian/English/Romagnolo). **Year ambiguous:** a **1977** printing is catalogued
    vs working **1978** → edition/year `unknown`. Sources: AbeBooks; italyinbocca.com.
19. **unknown-1988-ricette-duce** — Authors as printed **V. Luchinat & G. F. Borelli**
    ("Luchinat" possibly a pen name). *Le ricette del Duce*, **1988**, Gian Franco
    Borelli Editore. Distinct from Scicolone's *A tavola con il Duce* (2003). *Single
    listing source.* Italian. Sources: eBay listing; laFeltrinelli.
20. **marchesi-1990-abc-cucina** — **Gualtiero Marchesi, d. 2017** (verified). No book by
    this title surfaced in either pass; a **1990 RAI2 TV series "ABC della cucina"**
    exists. The 1990 Rizzoli Marchesi item is a reissue of *La mia nuova grande cucina
    italiana* (orig. 1980) — a different title. **Verify item type (book vs video).**
    Sources: it/en.wikipedia (Marchesi); Marchesi Foundation.
21. **unknown-1990-ricette-per-ogni-giorno** — **UNCONFIRMABLE**; generic title, no 1990
    match. Italian (inferred).
22. **unknown-1995-cucina-romagnola** — Author **Graziano Pozzetto** (d. ~2025 per
    obituaries, first pass; Codex did not confirm). **Title/year CONFLICT → `unknown`:**
    *La cucina romagnola*, F. Muzzio, **1995**, ISBN 9788870217155 (first pass) vs
    *Cucina di Romagna*, F. Muzzio, **2004** (Codex). Publisher Franco Muzzio (Padova)
    agreed. Working subtitle is descriptive. Italian. Rec. slug `pozzetto-199x`.
    Sources: AbeBooks; Buchfreund; it.wikipedia; RavennaToday/Corriere Romagna (obit).
23. **unknown-undated-cucina-salutare-bambini** — **UNCONFIRMABLE**; no record. Not
    Dubini's *La cucina degli stomachi deboli*. Italian (inferred).
24. **unknown-undated-cuoco-sapiente** — *Probable* (not confirmed): **Calisto Craveri**,
    *Il cuoco sapiente* (SEI), a 1932 year located. Bare phrase could match other works.
    Codex flagged as not independently reproduced. Italian. Rec. slug `craveri-cuoco-sapiente`.
    Source: Google Books.
25. **unknown-undated-vero-re-cuochi** — Title likely a **conflation**; best match **G.
    Belloni**, *Il vero re dei cucinieri* (Cesare Cioffi, Milano; first ed. **1890**, rev.
    **1895**) — "cucinieri", not "cuochi". Within the Nelli "re dei cuochi" tradition.
    Full name/death year `unknown`. *Probable, not confirmed.* Italian. Sources: Parma e
    la sua storia; La Fenice Libri Antichi.
26. **unknown-undated-gran-banchetto-rinascimento** — Exact title **unverifiable**;
    closest candidate *Cucina italiana del Rinascimento. Gran banchetto* (1986, Della
    Beffa & Paolucci) — different order/period. "1400–1600" is the subject period.
    Modern compilation. Source: Maremagnum.
27. **unknown-undated-cucina-ebraica-famiglia** — Author **Donatella Limentani
    Pavoncello** (d. ~2020, exact year unconfirmed). Canonical *Dal 1880 ad oggi: la
    cucina ebraica della mia famiglia*. **1982** (one source 1985), Carucci editore,
    Roma. "1880" = subject-period start. Italian. Rec. slug `limentani-pavoncello-1982`.
    Source: Google Books.
28. **unknown-undated-pane-pizza-focacce** — **UNCONFIRMABLE / ambiguous**; matches 5+
    distinct modern works (Edicart, Giunti, Fabbri, De Agostini, Gribaudo), ~2003–2012+.
    No dominant match. Italian (inferred).

## Verifier cross-check (Codex, gpt-5.5, web-enabled)

An independent adversarial pass reviewed the draft. Outcome:

- **Confirmed:** Mattioli 1544; Dictionnaire 1962; Ada Boni d. 1973; Marchesi d. 2017.
- **Surfaced hard conflicts** (downgraded to `unknown` above): Traditions culinaires
  (Chailley 1893 vs Flammarion 1894); Pozzetto (*Cucina di Romagna* 2004 vs *La cucina
  romagnola* 1995); Boni first-edition year (1925/1928/1929); Gosetti publisher
  (Solares vs La Cucina Italiana vs Vallardi).
- **Flagged single-source / unreproduced** (kept but marked): Nelli/Il re dei cuochi,
  Aloi/L'olivo e l'olio, Cioccolato corporate author, Cuoco sapiente, Vero re dei cuochi.
- **Softened overstatement:** Marchesi "ABC di cucina" — from "no such book / RAI2
  series" to "no book by this title surfaced; verify item type."
- **Net:** the matrix is honest for planning, but **not** a substitute for a title-page
  pass before any rights/scope decision.

## Open items / handoff

- **Title-page pass** (needs the physical/scanned copies): resolve the four conflicts
  (rows 6, 12, 15, 22); the three phantom/mislabeled items (rows 7, 9, 20); the
  single-source corrections (rows 8, 10, 13, 19, 24, 25); and the generic-title
  collisions (rows 3, 16, 21, 23, 26, 28).
- **ICCU / OPAC SBN** interactive lookups for the Italian rows that did not render to
  automated fetch.
- **Slug stabilization** (deferred): apply recommended slugs at the data-contract step
  once authors/years are title-page-confirmed.
- Author death years here feed **IB-009** (pre-1929 pool) and **IB-010** (public-release
  labels); note several "pre-1929" candidates have authors who died well after 1929
  (Boni d. 1973), so EU life+70 must be checked separately from the US pre-1929 heuristic.
