# Book List Seed

Status: Seed inventory from (local, off-repo; path withheld). Normalized in IB-007.

Last updated: 2026-06-28.

Do not treat years, editions, titles, or slugs as final until checked against actual source files in IB-007/IB-008. After a source is promoted into the product data contract, its slug becomes stable forever.

Pre-1929 rows are V1 candidates only. They are not automatically public-domain verified.

The project owner reported on 2026-06-27 that every item in this original seed list was scanned from a physical copy they own. This should be confirmed per file when filenames, editions, and checksums are added.

Local scan root observed on 2026-06-27: (local path withheld).

Filename-only scan result: 25 top-level book folders, 24 PDFs, about 9,754 files, and about 17GB total. No scan contents were read for this inventory pass.

Second scan batch (2026-06-28), folder "LIBRI SCANSIONATI 2": added 3 sources — `cervio-1593-trinciante`, `unknown-1988-ricette-rocca`, and the previously-absent `aloi-1920s-olivo-olio` (now located). The table is now **30 rows**. Of the original 3 "no local scan" rows, Aloi is now in the corpus and Dioscoride is resolved via archive.org; only `academie-gastronomes-1942` remains without any copy.

Observed file and folder paths are recorded literally. A local rename cleanup was performed on 2026-06-28 for obvious filesystem typos; the `title` column is still only the working canonical title for project discussion and is not final bibliographic metadata until IB-008 verifies the edition.

Duplicate resolution on 2026-06-28: `Kochrezepte fur den Unterricht im Kochen` and `Ricettario austroungarico / Sacher` were merged into one working source row. The German title is kept as the working title; the local scan folder remains `RICETTARIO AUSTROUNGARICO 1912 (SACHER)` as an alias/descriptive folder label until title-page verification.

## IB-007 Normalization

This pass normalizes the seed inventory into a structured table satisfying the
IB-007 success check: every row carries a `slug`, display `title`, assumed `year`,
`language` (where inferable), and a verification status. It does **not** verify
rights or OCR (out of scope; see IB-008 bibliographic, IB-010 rights, IB-016 OCR).

- **Slugs** follow ADR-0005 (`author-year-shorttitle`, lowercase ASCII, hyphenated).
- **`language`** was added in this pass (see Language note below).
- **Verification status** is the `metadata status` column: every row is `unverified`
  until IB-008 confirms metadata against the source title page.

### Slug conventions (provisional)

Seed slugs are **working identifiers**, not yet stabilized. They become stable
forever only when a source is promoted into the data contract (`books.json`).
Until then:

- `unknown-` prefix = author not yet confirmed; replace with the real author slug
  at verification.
- `-undated-` = year not yet established. A known decade is written in place of the
  year (e.g. `aloi-1920s-olivo-olio`) and resolved to a 4-digit year at verification.
- The Artusi 1891 image-only set is disambiguated from the PDF row with an
  `-immagini` suffix per ADR-0005.

### Language note

`language` is **inferred from the working title**, not confirmed from a title page
(IB-008). The 1912 Austro-Hungarian / Sacher source is provisionally `German` based
on the first inspected page but may be multilingual.

## IB-008 Bibliographic Verification

Verification of **title / year / author / edition** (each marked `verified` /
`corrected` / `unknown`, with corrected values, death years, publishers, and sources)
is tracked in [`BIBLIOGRAPHIC_VERIFICATION.md`](BIBLIOGRAPHIC_VERIFICATION.md) (IB-008).
Three passes: web research, an independent adversarial cross-check, and — for the
books physically present locally (22 in the first corpus + 3 in a second batch) —
**inspection of the scanned title pages** (the strongest evidence). Highlights that
affect this seed table:

- The `metadata status` column below is left as-is per row; the authoritative,
  field-by-field status now lives in the verification doc. Most located books are now
  **title-page-confirmed**.
- **Mislabeled rows identified from the scans:** `artusi-1896-ricette` (no 1896 Artusi
  edition — interior Artusi recipe pages, no title page); `marchesi-1990-abc-cucina`
  (a RAI "Video & Ricette" booklet, **not** a book); `unknown-1912-kochrezepte…` (the
  "Sacher" label is **false** — foreword signed Olga & Adolf Hess, Wien 1912).
- **Re-identified from the title page:** `unknown-1897-re-dei-cuochi` is a Salani
  (Firenze) 1897 popular cookbook, **not** Nelli's 1868 treatise; the seed's 1897 was
  correct. `unknown-undated-cuoco-sapiente` = Guigoni, Milano, 1901. `unknown-1857-
  cuciniere-italiano` = Vignozzi, Livorno, 1857 (15th ed.). `unknown-1978-romagna` =
  **Erica Marini** (not Fosca Martini).
- **Authors/publishers confirmed locally:** Agnoletti (1832, scan is a 1983 Forni
  reprint), Baronne Staffe (Traditions, G. Havard fils 1896), Gosetti della Salda
  (Ricette regionali, "La Cucina Italiana"), Giorgio Colorni (Segreti 1968, Franco
  Angeli), Amedeo Pettini (Cucina salutare, ~1909), Limentani Pavoncello (1982).
  Provisional slugs are **not** changed here (deferred to the data-contract step).
- **Not resolvable locally:** 3 books are absent from the corpus (Dioscoride, Aloi,
  Dictionnaire); 3 scans contain no title page (Ricette per ogni giorno, Cucina
  romagnola, Pane pizza focacce — scanned mid-book).
- **Rights note:** `boni-1929-talismano-felicita` — Ada Boni died 1973 (EU copyright to
  ~2044); and the scan is the **XXIII ed., Carlo Colombo**, a later reprint, not the
  1929 first edition.

## Seed Inventory Table

| slug | title | year | language | filename | scan owner | scanned by | rights label | metadata status | notes |
|---|---|---:|---|---|---|---|---|---|---|
| dioscoride-1546-della-materia-medicinale | Dioscoride Anazarbeo - Della materia medicinale | 1547 | Italian | external: archive.org/details/dioscorideanazar00dios | n/a | n/a | metadata_only | unverified | No local scan; resolved via archive.org: Fiorenza, appresso Bernardo di Giunti, 1547 (Mattioli transl./commentary; work 1544). PD. See BIBLIOGRAPHIC_VERIFICATION.md. |
| unknown-1832-manuale-cuoco-pasticcere | Manuale del cuoco e del pasticcere | 1832 | Italian | `MANUALE del CUOCO e del PASTICCERE 1832/MANUALE del CUOCO e del PASTICCERE 1832.pdf` | owner | owner | metadata_only | unverified | Local scan file located. Pre-1929 candidate; needs author, edition, and rights check. |
| unknown-1857-cuciniere-italiano | Il cuciniere italiano | 1857 | Italian | `IL CUCINIERE ITALIANO/IL CUCINIERE ITALIANO.pdf` | owner | owner | metadata_only | unverified | Local scan file located. Pre-1929 candidate; needs author, edition, and rights check. |
| artusi-1891-scienza-in-cucina | Artusi - La scienza in cucina e l'arte di mangiar bene | 1891 | Italian | `ARTUSI 1891 LA SCIENZA IN CUCINA E L'ARTE DI MANGIAR BENE/La SCIENZA IN CUCINA e L'ARTE DI MANGIAR BENE ARTUSI 1891.pdf` | owner | owner | metadata_only | unverified | Local scan file located. Pre-1929 candidate; needs edition and rights check. |
| artusi-1891-scienza-in-cucina-immagini | Artusi 1891 - La scienza in cucina e l'arte di mangiar bene - immagini | 1891 | Italian | `ARTUSI 1891 LA SCIENZA IN CUCINA E L'ARTE ...IMMAGINI/` | owner | owner | metadata_only | unverified | Local image folder located with no PDF found. Pre-1929 candidate image/page set; needs image-specific rights and edition check. |
| unknown-1896-traditions-culinaires | Traditions culinaires | 1896 | French | `TRADITIONS CULINAIRES 1896/TRADITIONS CULINAIRES 1896/TRADITIONS CULINAIRES et L'art de manger tout chosses a' table 1896.pdf` | owner | owner | metadata_only | unverified | Local scan file located. Local path spelling normalized from `TRADICTIONS/TRADICIONS/TRADIITIONS`; canonical title still needs title-page verification. Author, edition, and rights need verification. |
| artusi-1896-ricette | Ricette Artusi | 1896 | Italian | `RICETTE ARTUSI 1896.pdf/Ricette ARTUSI 1896.pdf` | owner | owner | metadata_only | unverified | Local scan file located. Pre-1929 candidate; needs edition and relationship to Artusi source verified. |
| unknown-1897-re-dei-cuochi | Il re dei cuochi | 1897 | Italian | `IL RE dei CUOCHI 1897/IL RE dei CUOCHI 1897.pdf` | owner | owner | metadata_only | unverified | Local scan file located. Pre-1929 candidate; needs author, edition, and rights check. |
| unknown-1912-kochrezepte-unterricht-kochen | Kochrezepte fur den Unterricht im Kochen | 1912 | German | `RICETTARIO AUSTROUNGARICO 1912 (SACHER)/RICETTARIO  AUSTROUNGARICO 1912 8RICETTA ORIGINALE SACHER TORTE).pdf` | owner | owner | metadata_only | unverified | Local scan file located under alias folder `RICETTARIO AUSTROUNGARICO 1912 (SACHER)`. Merged duplicate seed row `Ricettario austroungarico / Sacher`; first inspected German page references a cooking-instruction helper book and collection of recipes. Title, author/source relationship, edition, and rights need verification. |
| aloi-1920s-olivo-olio | L'olivo e l'olio - Antonio Aloi | 1898 | Italian | (2nd batch) L'OLIO E ULIVO 1900/L'OLIO E L'ULIVO 1900.pdf | owner | owner | metadata_only | unverified | Now in corpus (LIBRI SCANSIONATI 2). Title page: 4ª ed., Ulrico Hoepli, Milano, 1898 (work first ed. 1881). Pre-1931 → US-PD; EU pending Aloi death year. Rec. slug `aloi-1898-olivo-olio`. |
| unknown-1925-frutta-alimentazione-terapia | La frutta nella alimentazione e terapia | 1925 | Italian | `LA FRUTTA NELL ALIMENTAZIONE E TERAPIA 1925/LA FRUTTA NELL'ALIMENTAZIONE E TERAPIA.1925pdf.pdf` | owner | owner | metadata_only | unverified | Local scan file located. Pre-1929 candidate; needs author, edition, and rights check. |
| boni-1929-talismano-felicita | Il talismano della felicita - Ada Boni | 1929 | Italian | `IL TALISMANO DELLA FELICITÀ 1929 PRIMO RICETTARIO italiano /IL TALISMANO DELLA FELICITÀprimo ricettario italiano 1929.pdf` | owner | owner | metadata_only | unverified | Local scan file located. Catalog-only by default; 1929 source needs stricter EU/Italy and edition rights review. |
| unknown-1933-cioccolato-valore-alimentare | Il cioccolato e il suo valore alimentare | 1933 | Italian | `IL CIOCCOLATO E IL SUO VALORE ALIMENTARE 1933/IL CIOCCOLATO E IL SUO VALORE ALIMENTARE1933.pdf` | owner | owner | metadata_only | unverified | Local scan file located. Post-1928; catalog-only unless rights are verified. |
| academie-gastronomes-1942-dictionnaire | Dictionnaire de l'Academie des Gastronomes | 1942 | French | TBD | owner | owner | metadata_only | unverified | No obvious local folder match in observed scan root. Post-1928; catalog-only unless rights are verified. |
| unknown-1967-ricette-regionali-italiane | Le ricette regionali italiane | 1967 | Italian | `LE RICETTE REGIONALI ITALIANE 1967/LE RICETTE REGIONALI ITALIANE 1967.pdf` | owner | owner | metadata_only | unverified | Local scan file located. Local folder spelling normalized from `ITYALIANE`; working title uses `italiane`. Post-1928; likely modern rights review required before any public text. |
| unknown-1968-segreti-grandi-cuochi | I segreti dei grandi cuochi - con vini d'accompagnamento | 1968 | Italian | `I SEGRETI DEI GRANDI CUOCHI 1968 CON VINI D'ACCOMPAGNAMENTO/I SEGRETI DEI GRANDI CUOCHI 1968 CON VINI DI ACCOMPAGNAMENTO.pdf` | owner | owner | metadata_only | unverified | Local scan file located. Local folder spelling normalized from `ACOOMPAGNAMENTO`; working title uses `accompagnamento`. Post-1928; likely modern rights review required before any public text. |
| unknown-1975-gelati-fatti-in-casa | I gelati fatti in casa con o senza macchina | 1975 | Italian | `I GELATI FATTI IN CASA CON O SENZA MACCHINA 1975/I GELATI FATTI IN CASA CON O SENZA MACCHINA 1975.pdf` | owner | owner | metadata_only | unverified | Local scan file located. Post-1928; likely modern rights review required before any public text. |
| unknown-1978-romagna-in-bocca | Romagna in bocca | 1978 | Italian | `ROMAGNA IN BOCCA 1978/Romagna in bocca 1978.pdf` | owner | owner | metadata_only | unverified | Local scan file located. Post-1928; likely modern rights review required before any public text. |
| unknown-1988-ricette-duce | Le ricette del Duce | 1988 | Italian | `LE RICETTE DEL DUCE 1988/LE RICETTE DEL DUCE 1988.pdf` | owner | owner | metadata_only | unverified | Local scan file located. Post-1928; likely modern rights review required before any public text. |
| marchesi-1990-abc-cucina | ABC di cucina - Marchesi | 1990 | Italian | `ABC di cucina  MARCHESI 1990/ABC della CUCINA di G- MARCHESI  1990.pdf` | owner | owner | metadata_only | unverified | Local scan file located. Post-1928; likely modern rights review required before any public text. |
| unknown-1990-ricette-per-ogni-giorno | Ricette per ogni giorno | 1990 | Italian | `RICETTE PER OGNI GIORNO 1990/RICETTE PER OGNI GIORNO 1990.pdf` | owner | owner | metadata_only | unverified | Local scan file located. Post-1928; likely modern rights review required before any public text. |
| unknown-1995-cucina-romagnola | La cucina romagnola - ricette e indice vini | 1995 | Italian | `LA CUCINA ROMAGNOLA RICETTE E INDICE VINI 1995/LA CUCINA ROMAGNOLA RICETTE E INDICE DI VINI REGIONALI 1995.pdf` | owner | owner | metadata_only | unverified | Local scan file located. Local PDF filename spelling normalized from `CUCNA`; working title uses `cucina`. Post-1928; likely modern rights review required before any public text. |
| unknown-undated-cucina-salutare-bambini | Cucina salutare per bambini, deboli e convalescenti | Unknown | Italian | `CUCINA SALUTARE per BAMBINI ,DEBOLI E CONVALESCENTI/Cucina Salutare per Bambini ,deboli e convalescenti.pdf` | owner | owner | metadata_only | unverified | Local scan file located. Unknown year; catalog-only until date, author, edition, and rights are verified. |
| unknown-undated-cuoco-sapiente | Cuoco sapiente | Unknown | Italian | `CUOCO SAPIENTE/CUOCO SAPIENTE .pdf` | owner | owner | metadata_only | unverified | Local scan file located. Unknown year; catalog-only until date, author, edition, and rights are verified. |
| unknown-undated-vero-re-cuochi | Il vero re dei cuochi | Unknown | Italian | `IL VERO RE DEI CUOCHI/IL VERO RE DEI CUOCHI.pdf` | owner | owner | metadata_only | unverified | Local scan file located. Unknown year; catalog-only until date, author, edition, and rights are verified. |
| unknown-undated-gran-banchetto-rinascimento | Il gran banchetto - Cucina del Rinascimento italiano 1400-1600 | Unknown | Italian | `IL GRAN BANCHETTO,CUCINA DEL RINASCIMENTO ITALIANO 1400-1600/IL GRAN BANCHETTO, CUCINA ITALIANA DEL RINASCIMENTO 1400-1600.pdf` | owner | owner | metadata_only | unverified | Local PDF filename date range normalized to match the folder. Date range still needs title-page verification. Unknown year; may be modern historical compilation; catalog-only until rights are verified. |
| unknown-undated-cucina-ebraica-famiglia | La cucina ebraica della mia famiglia dal 1880 ad oggi | Unknown | Italian | `LA CUCINA EBRAICA DELLA MIA FAMIGLIA DAL 1880 AD OGGI/LA CUCINA EBRAICA DELLA MIA FAMIGLIA DAL 1880 AD OGGI LA.pdf` | owner | owner | metadata_only | unverified | Local scan file located. Unknown year; likely modern/family-history source; catalog-only until rights are verified. |
| unknown-undated-pane-pizza-focacce | Pane, pizza, focacce, torte salate | Unknown | Italian | `PANE PIZZA FOCACCE TORTE SALATE /PANE PIZZE FOCACCE TORTE SALATE.pdf` | owner | owner | metadata_only | unverified | Local scan file located. Unknown year; likely modern source; catalog-only until rights are verified. |
| cervio-1593-trinciante | Cervio - Il Trinciante | 1593 | Italian | (2nd batch) IL TRINCIANTE RECETTE REALI 1593/ (PDF corrupt; IMG folder used) | owner | owner | metadata_only | unverified | New source (LIBRI SCANSIONATI 2). Title page: Vincenzo Cervio, Il Trinciante, Roma 1593, Nella Stampa del Gabbia; scan = Arnaldo Forni reprint 1980. Renaissance carving treatise; PD (US+EU). |
| unknown-1988-ricette-rocca | Le ricette della Rocca (Tempo d'Ulivo) | 1988 | Italian | (2nd batch) RICETTE DELLA ROCCA 1988/LE RICETTE DELLA ROCCA.pdf | owner | owner | metadata_only | unverified | New source (LIBRI SCANSIONATI 2). No title page in scan; "Tempo d'Ulivo — Le ricette della Rocca", Bertolli (Lucca) + La Cucina Italiana. Modern corporate/promotional; under copyright. |

## Fields Still Needed

- file location
- author
- author death year
- edition
- edition year
- publisher
- page count
- scan/OCR status
- source provider
- provider terms URL
- EU/Italy status
- US status
- cultural heritage constraints
- public release reviewer
- public release review date
- priority
