# ADR-0003: Three-Layer Folder System

- Status: Accepted
- Date: 2026-06-27
- Deciders: the project owner

## Context

The repo must be quickly legible to humans and agents, give contributors an obvious place to put work, and avoid both empty-folder clutter and speculative structure.

## Decision

- **Layer 1** root docs (how to work here), **Layer 2** numbered domain rooms (where work lives), **Layer 3** artifacts (the work itself).
- Rooms are a **stable numbered skeleton** (`NN_snake_case`, gaps of 10). They persist even when dormant, as contributor signposts.
- **Subfolders are created on demand** by the contributor/agent doing the work; no empty folders, no `.gitkeep`. Each room README's Local Map table is the registry; rows marked `create on demand` are intended-but-not-yet-created destinations.
- Naming conventions, the Subfolder Creation Rule, and the New Room Rule live solely in `FOLDER_MAP.md`.

## Consequences

- Contributors always know where work lands, without an over-built tree.
- 9 empty subfolders were removed; their destinations survive as Local Map rows.
- `FOLDER_MAP.md` is the single source of truth for structure; other docs link to it instead of restating it.
