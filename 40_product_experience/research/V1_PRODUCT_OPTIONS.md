# V1 Product Options

Status: Team decision draft.

Goal window: 2-4 weeks.

Target: live website with basic digital-library functionality, inventory, database, frontend, and optional AI only if feasible.

## Hard Reality

"Live website + inventory + database + frontend + AI" is too broad if it means the full corpus, clean OCR, recipe extraction, semantic search, and trustworthy AI. It is feasible only if V1 uses a narrow corpus, clear disclaimers, and a simple product surface.

The strongest V1 is not "AI chef." It is a navigable historical cookbook library with credible source metadata.

## Option A: Public Catalog Website

### What It Is

A clean website showing the cookbook collection as a browsable catalog.

### Core Features

- Home page explaining the project.
- Catalog of all known books from the seed inventory.
- Filters: period, year, language, type, region/status if known.
- Book detail page with metadata, description, source status, and rights status.
- Public PDF/download links only for verified public-use sources.
- Contribution/contact path for team/community to suggest sources or corrections.

### Data Scope

- 25-30 book metadata records.
- No full recipe database required.
- No full-text OCR search required.

### Why Choose It

Fastest credible public artifact. It lets the team ship something without pretending the source corpus is processed.

### Weakness

May feel too lightweight if the team wants product depth quickly.

### Feasibility

High for 2-4 weeks.

## Option B: Searchable Digital Library MVP

### What It Is

A database-backed digital library with catalog browsing plus search over verified metadata and a small pilot set of OCR/source text.

### Core Features

- Everything in Option A.
- Database for books, authors, periods, source types, rights status, and file references.
- Search over metadata.
- Optional full-text search over 3-5 public-domain or rights-cleared pilot sources.
- Book detail pages with available OCR/source sections if legally safe.
- Basic admin/import script for adding books from a structured CSV/JSON file.

### Data Scope

- Metadata for 25-30 books.
- OCR/full-text pilot for 3-5 verified sources.
- No full recipe extraction required.

### Why Choose It

Best balance of usefulness, feasibility, and strategic foundation. This creates a real product while also building the data layer future AI needs.

### Weakness

Requires disciplined source verification and a small pilot. If the team tries to ingest all 20GB immediately, it will slip.

### Feasibility

Medium-high for 2-4 weeks if the pilot corpus is small.

## Option C: Source-Grounded AI Explorer

### What It Is

Option B plus a simple AI question-answering interface over a small verified corpus.

### Core Features

- Everything in Option B.
- Ask questions about the pilot sources.
- Answers must cite source/book/page or say "not found."
- Clear labeling: AI output is exploratory, not culinary or historical authority.
- No model fine-tuning.

### Data Scope

- Metadata for 25-30 books.
- RAG index for 1-3 verified sources.
- Evaluation set of 20-30 questions.

### Why Choose It

More exciting demo for the team and community.

### Weakness

Highest risk of looking impressive but being unreliable. If citations and "not found" behavior are weak, it damages trust.

### Feasibility

Medium-low for 2-4 weeks unless one person owns AI and the corpus is very small.

## Option D: Community Archive And Contribution Portal

### What It Is

A public project site focused on collecting, organizing, and inviting contributions around historical cookbooks.

### Core Features

- Project home page.
- Catalog/inventory.
- Public contribution guidelines.
- Source submission form or GitHub issue template.
- "Wanted sources" list.
- Team/status page.

### Data Scope

- Metadata for current books.
- No OCR/search required.
- No AI required.

### Why Choose It

Useful if the main early goal is community participation and Italian Builders visibility.

### Weakness

Less useful as a library product. It may attract submissions before the team is ready to process them.

### Feasibility

High for 2-4 weeks.

## Recommended Path

Choose Option B as the main V1, with Option C as a stretch.

This means:

- Build the live website.
- Load all known books as metadata.
- Verify and expose only legally safe public files/text.
- Add full-text search for a small pilot set.
- Do not fine-tune.
- Do not create modernized recipes.
- Add AI only after search and citations work.

## V1 Success Criteria

- A public URL exists.
- Catalog shows the seed collection with basic metadata.
- Each book has a detail page.
- Each source has a rights/status label.
- Search works over metadata.
- If full-text search is included, it covers only verified pilot sources.
- The site does not host or expose copyrighted material unless cleared.
- A contributor can understand how to suggest corrections or sources.

## Scope Boundaries For All Options

Out of scope:

- Publishing books.
- Standardizing recipes into modern measurements.
- Creating Level C executable recipe versions.
- Fine-tuning.
- Model weight release.
- Full-corpus OCR ingestion.
- Public hosting of unverified PDFs or OCR text.
- Sophisticated account systems.
- Payments, classes, or fundraising flows.

## Team Decision Needed

Pick one:

1. Option A: fastest credible catalog.
2. Option B: recommended searchable digital library MVP.
3. Option C: AI demo, higher risk.
4. Option D: community archive/contribution portal.

Then answer:

- Which 3-5 sources are safe for pilot full-text/OCR?
- Who owns frontend?
- Who owns data/import?
- Who owns source rights verification?
- Where will the site deploy?
- What database/storage stack should we use?

