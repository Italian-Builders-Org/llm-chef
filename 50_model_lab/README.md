# Model Lab

Purpose: evaluate and experiment with AI use only after source and data assumptions are clear.

This room owns:

- RAG experiments
- fine-tuning experiments
- model evaluation
- prompt experiments
- source-grounded answer quality

## Local Map

| Folder | Purpose | Status |
|---|---|---|
| `evals/` | Evaluation questions and results. | deferred_post_v1 |
| `rag/` | Retrieval experiments. | create on demand |
| `fine_tuning/` | Fine-tuning experiments. | create on demand |

Add subfolders per `FOLDER_MAP.md` (Subfolder Creation Rule); update this table in the same change.

## Strong Warning

Fine-tuning is not the first move. A small AI/RAG feature may be a V1 stretch, but only after:

- source inventory exists
- OCR/data quality is measured
- retrieval baseline exists
- evaluation questions exist
- the team knows what the model must do better than general LLMs
