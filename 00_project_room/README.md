# Project Room

This is the coordination room for Chef-LLM.

Use it for:

- interviews and scope clarification
- decisions
- immediate todos
- backlog items for later GitHub issues
- contributor routing and contribution workflow
- meeting notes
- source attachment indexes
- frozen issue-draft snapshots and routing notes for live GitHub issues / the Project board

Do not put domain work here if it belongs in a specialized room.

## Local Map

| Folder | Purpose | Status |
|---|---|---|
| `context/` | Digests, attachment indexes, source notes. | active |
| `interviews/` | Questions and answers used to shape the project. | active |
| `decisions/` | Decision register (ledger/index) and ADRs in `adr/`. | active |
| `backlog/` | Deferred ideas that may become future GitHub issues. | active |
| `todos/` | Immediate todos and future GitHub issue drafts. | active |
| `routing/` | Task routing rules and the contribution workflow (fork → PR → review). | active |
| `source_attachments/` | Pointers or later approved copies of external context. | dormant |

Add subfolders per `FOLDER_MAP.md` (Subfolder Creation Rule); update this table in the same change.

## Rule

If a contributor cannot explain where their work belongs, they should stop and add a backlog item in `backlog/BACKLOG.md` or an issue draft in `todos/ISSUE_DRAFTS.md`.
