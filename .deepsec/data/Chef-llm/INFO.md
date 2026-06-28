# Chef-llm

## What this codebase does

Chef-LLM is currently a documentation/planning repository for a historical Italian cookbook project. It defines project scope, rights/provenance policy, source inventory, contributor workflow, ADRs, and future execution directories. The intended application code will live in `/website`, structured data in `/data`, and future LLM/RAG code in `/llm`, but those execution areas are not present yet in the scanned tree.

## Auth shape

There is no runtime auth layer yet: no routes, API handlers, middleware, server actions, sessions, or user database are implemented in this repo. Planned future surfaces mention verified users, comments, uploads, AI/RAG, and a public website, but these are aspirational/post-V1 until implemented under `/website` or `/llm`.

## Threat model

Highest impact right now is accidental disclosure: raw PDFs/scans, local filesystem paths, personal identifiers, Drive/Slack links, access tokens, `.env` files, or copied OCR/full text for rights-unverified sources. Secondary risk is documentation drift that instructs contributors to publish copyrighted scans/OCR before rights review. Once `/website` exists, normal web-app threats become relevant; for now, this is mostly a docs-and-source-governance scan.

## Project-specific patterns to flag

- Raw corpus leakage: committed PDFs, page images, OCR dumps, raw source files, or files under `raw_sources/` other than README placeholders.
- Local/private path leakage: `/Users/...`, local scan roots, personal machine names, private Drive/Slack URLs, or contributor-specific filesystem paths.
- Rights-gate bypass in docs: language saying pre-1929 means public-release approved, or saying PDF/OCR/full text/page images can be public without `public_domain_verified` review.
- Scope drift: V1 instructions that start recipe extraction, clean-room recipe rewriting, fine-tuning, account/social features, or public AI answers before ADR/policy gates.
- Future app placement drift: product code outside `/website`, data contract outside `/data`, or LLM/RAG code outside `/llm` unless a later ADR changes the topology.

## Known false-positives

- `.deepsec/` is the scanner workspace; generated scan outputs under `.deepsec/data/**/files`, `runs`, `reports`, and `node_modules` are tool state, not application source.
- `10_source_library/raw_sources/README.md` is an intentional placeholder; raw masters are off-git by policy.
- Public copyright-law URLs in provenance docs are intended references, not source-hosting links.
- File and folder names for cookbook scans are recorded as bibliographic/source metadata; flag only if they include local roots, private links, or personal-machine paths.
- `.env` and `.env.*` appear in `.gitignore` as ignored patterns; their presence as actual tracked files would be a finding.
