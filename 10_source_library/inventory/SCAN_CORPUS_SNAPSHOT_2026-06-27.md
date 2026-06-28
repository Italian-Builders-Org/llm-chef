# Scan Corpus Snapshot - 2026-06-27

Status: Filename-only local filesystem inspection. No scan contents were read.

Update: On 2026-06-28, the local folders/files listed in "Local Rename Cleanup" were renamed to remove obvious filesystem typos. The content, metadata, and rights status remain unverified.

Local root inspected:

(local path withheld)

## Summary

- Total size: about 17GB
- Top-level book folders: 25
- Top-level files: 1 (`.DS_Store`)
- Nested files: 9,754
- PDFs: 24
- JPG/JPEG page images: 9,703
- `.DS_Store` files: 27

## Top-Level Folders

| folder | files | jpg | pdf | size |
|---|---:|---:|---:|---:|
| ABC di cucina  MARCHESI 1990 | 496 | 494 | 1 | 585M |
| ARTUSI 1891 LA SCIENZA IN CUCINA E L'ARTE ...IMMAGINI | 450 | 450 | 0 | 421M |
| ARTUSI 1891 LA SCIENZA IN CUCINA E L'ARTE DI MANGIAR BENE | 1 | 0 | 1 | 593M |
| CUCINA SALUTARE per BAMBINI ,DEBOLI E CONVALESCENTI | 486 | 484 | 1 | 876M |
| CUOCO SAPIENTE | 315 | 313 | 1 | 525M |
| I GELATI FATTI IN CASA CON O SENZA MACCHINA 1975 | 93 | 91 | 1 | 185M |
| I SEGRETI DEI GRANDI CUOCHI 1968 CON VINI D'ACCOMPAGNAMENTO | 317 | 314 | 1 | 743M |
| IL CIOCCOLATO E IL SUO VALORE ALIMENTARE 1933 | 84 | 82 | 1 | 165M |
| IL CUCINIERE ITALIANO | 284 | 282 | 1 | 487M |
| IL GRAN BANCHETTO,CUCINA DEL RINASCIMENTO ITALIANO 1400-1600 | 68 | 66 | 1 | 183M |
| IL RE dei CUOCHI 1897 | 353 | 351 | 1 | 796M |
| IL TALISMANO DELLA FELICITÀ 1929 PRIMO RICETTARIO italiano | 809 | 807 | 1 | 2.0G |
| IL VERO RE DEI CUOCHI | 370 | 368 | 1 | 462M |
| LA CUCINA EBRAICA DELLA MIA FAMIGLIA DAL 1880 AD OGGI | 97 | 95 | 1 | 156M |
| LA CUCINA ROMAGNOLA RICETTE E INDICE VINI 1995 | 324 | 322 | 1 | 741M |
| LA FRUTTA NELL ALIMENTAZIONE E TERAPIA 1925 | 208 | 206 | 1 | 304M |
| LE RICETTE DEL DUCE 1988 | 137 | 135 | 1 | 255M |
| LE RICETTE REGIONALI ITALIANE 1967 | 1,110 | 1,108 | 1 | 2.3G |
| MANUALE del CUOCO e del PASTICCERE 1832 | 683 | 681 | 1 | 721M |
| PANE PIZZA FOCACCE TORTE SALATE | 115 | 113 | 1 | 159M |
| RICETTARIO AUSTROUNGARICO 1912 (SACHER) | 1,418 | 1,417 | 1 | 1.6G |
| RICETTE ARTUSI 1896.pdf | 667 | 664 | 1 | 1.3G |
| RICETTE PER OGNI GIORNO 1990 | 280 | 278 | 1 | 443M |
| ROMAGNA IN BOCCA 1978 | 173 | 171 | 1 | 262M |
| TRADITIONS CULINAIRES 1896 | 415 | 411 | 1 | 609M |

## Local Rename Cleanup

The following local filesystem typo cleanups were applied on 2026-06-28. These are path cleanups only, not bibliographic verification.

| original inconsistency | local filesystem cleanup | remaining verification |
|---|---|---|
| `TRADICTIONS/TRADICIONS/TRADIITIONS` | Renamed local path segments to `TRADITIONS`. | Needs title-page verification. |
| `11912` | Renamed local folder to `RICETTARIO AUSTROUNGARICO 1912 (SACHER)`. | Needs title-page verification. |
| `ITYALIANE` | Renamed local folder to `LE RICETTE REGIONALI ITALIANE 1967`. | Edition still unverified. |
| `ACOOMPAGNAMENTO` | Renamed local folder to `I SEGRETI DEI GRANDI CUOCHI 1968 CON VINI D'ACCOMPAGNAMENTO`. | Edition still unverified. |
| `CUCNA` | Renamed local PDF to `LA CUCINA ROMAGNOLA RICETTE E INDICE DI VINI REGIONALI 1995.pdf`. | Edition still unverified. |
| `1400-1600` vs `1400 1700` | Renamed local PDF to use `1400-1600`, matching the existing folder. | Date range needs title-page verification. |

## Immediate Reconciliation Notes

- The seed inventory now has 28 rows after merging `Kochrezepte fur den Unterricht im Kochen` with the local `RICETTARIO AUSTROUNGARICO 1912 (SACHER)` source alias.
- This local scan root has 25 top-level book folders.
- Three seed rows have no obvious folder match in this local scan root: Dioscoride, L'olivo e l'olio, and Dictionnaire de l'Academie des Gastronomes.
- One seed row has an image-only folder with no PDF: Artusi 1891 image/page set.
- The explicit filename inconsistencies above have been normalized in the local filesystem and in working inventory titles/notes.
- This snapshot confirms local availability only. It does not verify author, edition, public-domain status, OCR quality, or whether any file can be publicly released.
