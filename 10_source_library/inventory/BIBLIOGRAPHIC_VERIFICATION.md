# Bibliographic Verification (IB-008)

Status: Active — IB-008 deliverable. Includes local title-page inspection.

Last updated: 2026-06-28.

Purpose: record researched bibliographic metadata for the seed inventory and mark
each of **title / year / author / edition** as `verified`, `corrected`, or
`unknown`, with notes and sources. Companion to
[`BOOK_LIST_SEED.md`](BOOK_LIST_SEED.md) (the working inventory) and
[`SOURCE_CORPUS_AND_STORAGE.md`](SOURCE_CORPUS_AND_STORAGE.md) (locations).

**Out of scope (IB-008):** legal public-domain approval. Author death years are
recorded here as inputs to IB-009/IB-010, not as rights determinations.

## Method & evidence tiers

Three passes, in increasing authority:

1. **Web research** — open catalogs (ICCU/SBN, BnF/Gallica), antiquarian/auction
   records, Google Books, archive.org, Wikipedia.
2. **Adversarial cross-check** — a second agent (Codex / gpt-5.5, web-enabled) tasked
   with disputing weak claims; surfaced several conflicts.
3. **Local title-page inspection (PRIMARY)** — Codex read the scanned cover / title
   page / front matter of the books physically present (22 in the first corpus, plus
   3 in a second batch; Dioscoride resolved via archive.org). Only the Dictionnaire
   (1962) is still absent. **Where the title page disagrees with web research, the
   title page wins.** This pass corrected multiple web errors (see "What the title
   pages overturned").

A `verified`/`corrected` status backed by "TP" in the notes means it was read off the
physical copy's title page — the strongest evidence short of a cataloguer's hand.

- **verified** — value confirmed (TP-confirmed where marked "TP").
- **corrected** — working value was wrong/incomplete; corrected value given.
- **unknown** — not on the scanned pages and not corroborable; or the scan contains no
  title page.

"Year" = publication year of the scanned copy. "Edition" = the specific printing.

## Critical findings — resolution status

1. **Phantom / mislabeled items — ALL RESOLVED by local inspection:**
   - `unknown-1912-kochrezepte` ("Sacher"): the front-matter foreword is **signed
     "Olga und Adolf Fr. Hess, Wien, September 1912"** → this is the **Hess** Vienna
     cookbook (*Wiener Küche*), NOT a Sacher book. The "Sacher" label is **false**.
   - `marchesi-1990-abc-cucina`: cover reads **"ABC della Cucina — Video & Ricette,
     11, La Pasta", Gualtiero Marchesi, VIDEORAI / Musumeci video / Musumeci Editore**
     → it is a **RAI TV-series companion (video + recipe booklet), volume 11**, not a
     standalone cookbook.
   - `artusi-1896-ricette`: the scan has **no title page** — interior pages show
     Artusi's structure ("Spiegazione di voci", "Ricette", "Brodi, gelatina e sughi").
     → Artusi recipe content; **no distinct 1896 edition** (the 1896 label is unsupported).
2. **`unknown-1897-re-dei-cuochi` re-identified:** title page reads *Il re dei cuochi
   **ossia l'arte di mangiare al gusto degl'italiani**, Firenze, **Adriano Salani**,
   1897* — a popular Salani cookbook, **NOT** Giovanni Nelli's *Il re dei cuochi.
   Trattato di gastronomia universale* (1868, Legros, Milano) that web research had
   substituted. The seed's **1897 was correct**.
3. **Conflicts resolved from the copy in hand:** Traditions culinaires → **G. Havard
   fils, 1896, 10e éd.** (both web publisher guesses wrong); Ricette regionali → **"La
   Cucina Italiana", Milano** (not Solares/Vallardi); Talismano → scan is the **XXIII
   edizione, Carlo Colombo** (a later reprint, not the 1929 first edition).
4. **Copyright flags (carried, not decided):** Ada Boni d. **1973**; and note two scans
   are **modern reprints**, not the original: Manuale 1832 scan is an **Arnaldo Forni
   anastatic ristampa (1983)**; Talismano scan is the **Carlo Colombo XXIII ed.**
   (mid-20th-c). The physical artifact's own copyright matters for IB-010, separate
   from the underlying work's date.
5. **Generic-title collisions resolved:** Cuciniere italiano → Vignozzi, Livorno, 1857
   (15th ed.); Cuoco sapiente → Guigoni, Milano, 1901; Vero re dei cuochi → *Il vero re
   dei cucinieri e la cucina degli stomachi delicati*; Segreti 1968 → Giorgio Colorni,
   Franco Angeli; Gran banchetto → Della Beffa & Paolucci.
6. **Could not be resolved locally:**
   - **Not in the local corpus** (3): `dioscoride-1546`, `aloi-1920s-olivo-olio`,
     `academie-gastronomes-1942` — web-only values stand.
   - **Scan has no title page** (3, scanned mid-book — interior recipe pages only):
     `unknown-1990-ricette-per-ogni-giorno`, `unknown-1995-cucina-romagnola`,
     `unknown-undated-pane-pizza-focacce`.
7. **Provisional slugs not changed** (deferred to data-contract step). Note several are
   now clearly wrong (e.g. `unknown-1897-re-dei-cuochi` is a Salani work, not Nelli;
   `unknown-1912-kochrezepte` is Hess). `Decision needed:` confirm slug stabilization
   is deferred to IB-012/IB-013.

## What the title pages overturned (web → title page)

| book | web research said | title page says |
|---|---|---|
| re-dei-cuochi-1897 | Giovanni Nelli, work 1868 | *…ossia l'arte di mangiare al gusto degl'italiani*, Salani, Firenze, **1897** |
| cuoco-sapiente | Calisto Craveri, SEI, 1932 | Casa Editrice **Guigoni**, Milano, **1901** |
| traditions-1896 | Chailley 1893 / Flammarion 1894 | **G. Havard fils**, Paris, **1896**, 10e éd. |
| ricette-regionali-1967 | Solares / La Cucina Italiana / Vallardi | Casa Editrice **"La Cucina Italiana"**, Milano |
| romagna-1978 | Fosca Martini | **Erica Marini** |
| sacher-1912 | (Sacher?) possibly Hess | **Olga & Adolf Hess**, Wien, 1912 (Sacher false) |
| talismano | first ed. 1925/1928/1929 | scan = **XXIII ed., Carlo Colombo** (later reprint) |

## Verification status matrix

| slug | title | year | author | edition | roll-up |
|---|---|---|---|---|---|
| dioscoride-1546-della-materia-medicinale | verified | verified | corrected | verified | corrected (archive.org 1547) |
| cervio-1593-trinciante | verified | verified | verified | verified | verified (TP) |
| unknown-1832-manuale-cuoco-pasticcere | verified | verified | verified | verified | verified (TP) |
| unknown-1857-cuciniere-italiano | corrected | verified | unknown | verified | verified (TP) |
| artusi-1891-scienza-in-cucina | verified | verified | verified | verified | verified |
| artusi-1891-scienza-in-cucina-immagini | verified | verified | verified | unknown | verified |
| unknown-1896-traditions-culinaires | verified | verified | verified | verified | verified (TP) |
| artusi-1896-ricette | corrected | unknown | corrected | unknown | phantom (Artusi pages) |
| unknown-1897-re-dei-cuochi | corrected | verified | unknown | verified | verified (TP) |
| unknown-1912-kochrezepte-unterricht-kochen | corrected | verified | corrected | unknown | corrected (TP) |
| aloi-1920s-olivo-olio | verified | verified | verified | verified | verified (TP: 1898 4ª ed.) |
| unknown-1925-frutta-alimentazione-terapia | corrected | unknown | verified | unknown | corrected (TP) |
| boni-1929-talismano-felicita | verified | corrected | verified | verified | corrected (TP) |
| unknown-1933-cioccolato-valore-alimentare | verified | verified | verified | verified | verified (TP) |
| academie-gastronomes-1942-dictionnaire | verified | corrected | corrected | verified | corrected (no local scan) |
| unknown-1967-ricette-regionali-italiane | verified | unknown | verified | corrected | verified (TP) |
| unknown-1968-segreti-grandi-cuochi | corrected | unknown | corrected | corrected | corrected (TP) |
| unknown-1975-gelati-fatti-in-casa | verified | verified | corrected | verified | verified |
| unknown-1978-romagna-in-bocca | verified | unknown | corrected | verified | corrected (TP) |
| unknown-1988-ricette-duce | verified | unknown | corrected | unknown | corrected (TP) |
| marchesi-1990-abc-cucina | corrected | unknown | verified | corrected | corrected (TP: video booklet) |
| unknown-1990-ricette-per-ogni-giorno | unknown | unknown | unknown | unknown | unconfirmable (no title page in scan) |
| unknown-1995-cucina-romagnola | unknown | unknown | unknown | unknown | unconfirmable (no title page in scan) |
| unknown-undated-cucina-salutare-bambini | corrected | corrected | corrected | unknown | corrected (TP) |
| unknown-undated-cuoco-sapiente | corrected | verified | unknown | verified | verified (TP) |
| unknown-undated-vero-re-cuochi | corrected | unknown | unknown | unknown | corrected (TP: title) |
| unknown-undated-gran-banchetto-rinascimento | corrected | unknown | corrected | unknown | corrected (TP) |
| unknown-undated-cucina-ebraica-famiglia | verified | verified | verified | unknown | verified (TP) |
| unknown-undated-pane-pizza-focacce | unknown | unknown | unknown | unknown | unconfirmable (no title page in scan) |
| unknown-1988-ricette-rocca | verified | verified | corrected | unknown | corrected (TP: Bertolli/La Cucina Italiana) |

After local inspection: **2 unconfirmable with a scan present** (`ricette-per-ogni-giorno`,
`pane-pizza`; plus `cucina-romagnola`) — all three because the scan contains no title
page. The 3 books absent from the corpus rest on web research. Everything else is
title-page-confirmed or corrected.

## Local title-page findings (primary evidence)

Read by Codex from the scanned cover/title page/front matter. "TP" = title page;
"no TP in scan" = the scanned file begins mid-book.

- **manuale-1832** — TP: *Manuale del cuoco e del pasticciere di raffinato gusto
  moderno*, Tomo I, opera di **Vincenzo Agnoletti**, Pesaro, **Tipografia Nobili,
  1832**. The scan is the **Arnaldo Forni anastatic ristampa, 1983**. (Rights: scan is
  a modern reprint.)
- **cuciniere-1857** — TP: *Il cuciniere italiano moderno, ovvero L'amico dei ghiotti
  economi e dei convalescenti*, **Edizione XV**, **Livorno, Tip. di Egisto Vignozzi e
  C., 1857**. Anonymous (no author on TP).
- **traditions-1896** — TP: *Traditions culinaires et l'art de manger toutes choses à
  table*, par **La Baronne Staffe**, **10e édition, Paris, G. Havard fils, éditeur,
  1896**.
- **artusi-1896-ricette** — No TP in scan; interior pages ("Spiegazione di voci",
  "Ricette", "Brodi, gelatina e sughi") = Artusi's *La scienza in cucina* content. No
  1896 edition exists; treat as excerpt pages.
- **re-dei-cuochi-1897** — TP: *Il re dei cuochi ossia l'arte di mangiare al gusto
  degl'italiani*, **Firenze, Adriano Salani, Editore**, colophon **1897**. Anonymous
  (Salani popular line). NOT Nelli's *Trattato di gastronomia universale*.
- **sacher-1912** — No TP captured; foreword signed **Olga und Adolf Fr. Hess, Wien,
  September 1912** → the Hess Vienna cookbook (*Wiener Küche*). German. "Sacher" false.
- **frutta-1925** — No TP captured; work by **Dr. Alfredo Masoni** (preface by Dott.
  Edoardo Fairman). Confirms author Masoni; year 1925 from folder, not on scanned pages.
- **boni-1929-talismano** — TP: Ada Boni, *Il talismano della felicità*, **XXIII
  edizione, Casa Editrice Carlo Colombo** (no year on TP). Scan is a later reprint, not
  the 1929 first edition.
- **cioccolato-1933** — TP: *Il cioccolato ed il suo valore alimentare*, a cura della
  **Federazione Nazionale Fascista dell'Industria Dolciaria**, **Torino, Stabilimento
  Grafico Foà, 1933-XII**.
- **ricette-regionali-1967** — TP: *Le ricette regionali italiane*, interpretate da
  **Anna Gosetti della Salda**, Milano, Casa Editrice **"La Cucina Italiana"** (no year
  on TP; 1967 from cover/web).
- **segreti-1968** — TP: **Giorgio Colorni**, *I segreti dei grandi cuochi: Guida dei
  ristoranti tipici e famosi*, **Franco Angeli Editore** (no year on TP). (Working
  subtitle "con vini d'accompagnamento" not seen on TP — likely a cover blurb or error.)
- **gelati-1975** — Cover: **Elena Spagnol**, *I gelati fatti in casa con o senza
  macchina*, **Rizzoli**.
- **romagna-1978** — TP: **Erica Marini**, *Romagna in bocca*, prefazione di Max David,
  **Il Vespro** (place/year not on TP).
- **ricette-duce-1988** — No TP captured; front matter "Cosa c'entra Benito" signed
  **Giorgio Cajati**, then "I nostri simboli" + recipes. Title from cover/folder.
- **abc-marchesi-1990** — Cover: **ABC della Cucina — Video & Ricette, 11, La Pasta**,
  Gualtiero Marchesi, **VIDEORAI / Musumeci video / Musumeci Editore** (Quart, Aosta).
  A RAI video-series companion booklet, not a standalone cookbook.
- **cucina-salutare** — No TP captured; **A. (Amedeo) Pettini**, *Come cucinare i cibi
  ai bambini, ai debilitati ed ai convalescenti?*; dedication dated **Roma, 1 Luglio
  1909**.
- **cuoco-sapiente** — TP: *Cuoco sapiente ossia l'arte di piacere ai gusti
  degl'italiani*, **Casa Editrice Guigoni, Milano, 1901**.
- **vero-re-cuochi** — TP: *Il vero re dei cucinieri e la cucina degli stomachi
  delicati* (title confirms "cucinieri"). Author/year not captured (web: G. Belloni,
  Cioffi, 1890s).
- **gran-banchetto** — *Cucina italiana del Rinascimento: Gran banchetto*, a cura di
  **Carla Della Beffa e Africo Paolucci** (year not on captured pages; web: 1986).
- **cucina-ebraica** — Cover/front: **Donatella Limentani Pavoncello**, *Dal 1880 ad
  oggi: la cucina ebraica della mia famiglia*, **Carucci Editore, Roma**, cover shows
  **1982**.
- **ricette-per-ogni-giorno-1990**, **cucina-romagnola-1995**, **pane-pizza** — Scans
  are interior recipe pages only; **no title page, cover, or colophon in the file**.
  Not identifiable from the scan. (Web: cucina-romagnola likely Graziano Pozzetto, F.
  Muzzio — unconfirmed against this copy.)

## 2026-06-28 update — new acquisitions, Dioscoride, colophon pass

New material the owner provided ("LIBRI SCANSIONATI 2") plus an external digitisation
resolved most of what was previously web-only:

- **dioscoride-1546** — RESOLVED via archive.org (no local scan needed):
  *Dioscoride Anazarbeo della materia medicinale*, **Fiorenza, appresso Bernardo di
  Giunti, 1547** (the 1547 Giunti Florence edition; Mattioli is the translator/
  commentator; work first issued 1544). Italian. Copy:
  archive.org/details/dioscorideanazar00dios. Now Group-A PD.
- **aloi-1920s-olivo-olio** — NOW IN CORPUS (new upload). Title page:
  *L'olivo e l'olio*, Prof. **Antonio Aloi**, **4ª edizione, Ulrico Hoepli, Milano,
  1898**. Pre-1931 confirmed (US-PD); EU pending Aloi death year. (Work first ed.
  1881.) The seed slug's "1920s" is now clearly wrong; recommended `aloi-1898-olivo-olio`.
- **cervio-1593-trinciante** — NEW source. Title page: **Vincenzo Cervio, *Il
  Trinciante*, Roma, 1593, Nella Stampa del Gabbia**; the scan is an **Arnaldo Forni
  reprint, 1980** (use the historical content; exclude the reprint's modern matter).
  Renaissance carving treatise; Group-A PD.
- **unknown-1988-ricette-rocca** — NEW source. No title page in scan; identified as
  **"Tempo d'Ulivo — Le ricette della Rocca", Bertolli (Lucca) in collaboration with
  La Cucina Italiana**, 1988. Modern corporate/promotional; under copyright.
- **academie-gastronomes-1942** — STILL ABSENT from the corpus. Web only:
  *Dictionnaire de l'Académie des gastronomes*, **1962** (not 1942), 2 vols, Éditions
  Prisma, Paris; ed. Paul-Émile Cadilhac. Modern/under copyright regardless.

**Colophon pass:** the last pages of the six still-undated books (vero-re-cucinieri,
frutta-1925, cucina-salutare, segreti-1968, gran-banchetto, gelati-1975) were read for
a "finito di stampare" date — **none printed a year in the scanned end-matter**. Those
years remain from the folder/cover/web, not title-page-confirmed.

Net: only **academie-gastronomes-1942** is now unverifiable for lack of any copy; the
3 interior-only scans (ricette-per-ogni-giorno, cucina-romagnola, pane-pizza) still
lack a title page. Rights implications are carried into
[`../provenance/RIGHTS_STATUS_MATRIX.md`](../provenance/RIGHTS_STATUS_MATRIX.md).

## Open items / handoff

- **Acquire/scan title pages** for the 3 interior-only scans (`ricette-per-ogni-giorno`,
  `cucina-romagnola`, `pane-pizza`) and the 3 books absent from the corpus
  (`dioscoride`, `aloi`, `dictionnaire`) if their identity must be settled.
- **Exact years** not printed on several title pages (Ricette regionali, Segreti,
  Romagna, Ricette del Duce, Gran banchetto) — confirm from cover/colophon or catalog.
- **Slug stabilization** (deferred): apply corrected authors/years at the data-contract
  step.
- **Rights inputs for IB-009/IB-010:** author death years here; plus the **scan-artifact
  copyright** flags — the Manuale scan is a 1983 Forni reprint and the Talismano scan is
  a mid-20th-c Carlo Colombo edition, so neither scanned file is a pre-1929 public-domain
  artifact even where the underlying work is old. EU life+70 (e.g. Boni d. 1973) must be
  checked separately from the US pre-1929 heuristic.
