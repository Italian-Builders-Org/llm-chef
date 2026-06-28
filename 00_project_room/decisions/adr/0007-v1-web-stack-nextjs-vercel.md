# ADR-0007: V1 Web Stack — Next.js on Vercel

- Status: Accepted
- Date: 2026-06-28
- Deciders: the project owner
- Related: ADR-0006 (single repo), ADR-0004 (V1 scope); resolves IB-005

## Context

V1 (ADR-0004) is a content-first site: a catalog plus faithful digital editions that read a static data contract (`books.json`). But the broader vision (recipe DB, AI search, user accounts, social engagement) is an interactive, full-stack application. Rather than ship V1 on a content-first stack and migrate later, the team chose to build on the framework that natively fits the destination.

## Decision

V1 web stack:

- **Framework:** Next.js (React) — handles V1's static catalog (SSG) and the V2 app surface (auth, server actions/API routes, dynamic + interactive features) in one framework.
- **Host:** Vercel, deploying the `/website` folder as its root (project root directory set to `/website`).
- **Database:** none in V1. The catalog reads the static data contract (`/data/books.json`). A database is a V2 decision with its own ADR (likely Postgres via Neon/Supabase).
- **Principle:** keep the data/API layer decoupled from the frontend, so V2 (recipe DB, AI, accounts) is additive and the data isn't trapped in the UI.

## Consequences

- One framework from V1 through the V2 app surface — no later frontend migration.
- Heavier and slightly pricier V1 than a static-first stack (Astro/Cloudflare was the alternative considered); accepted as the cost of building toward the full application.
- First-class Vercel DX: preview deploys per PR, simple `/website`-root config.
- Re-evaluate hosting/runtime cost when traffic or the V2 surface grows; Next.js can move off Vercel later if needed (the decoupled data layer keeps that open).
- Verify Next.js version/runtime details at scaffold time (IB-004); the ecosystem moves fast.
