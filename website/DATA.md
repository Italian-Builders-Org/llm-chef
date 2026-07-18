# Data: Current State

**⚠️ Current data is hard-coded and for demo purposes only.**

The sample books and recipes in `data/books.json` are placeholders created for prototyping. They do not represent actual transcribed historical cookbook content.

## Current Data Files

```
data/
└── books.json    # Hard-coded catalog (7 sample books with placeholder recipes)
```

## Replacing with Dynamic Data

When real cookbook data is available, replace the hard-coded data with an API or database.

### Option 1: API Route (Recommended)

1. Create an API route at `app/api/books/route.ts`:

```typescript
// app/api/books/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  const books = await fetchBooksFromDatabase() // Replace with actual fetch
  return NextResponse.json(books)
}
```

2. Update `app/page.tsx` to fetch from the API:

```typescript
// In your page component
const res = await fetch('http://localhost:3000/api/books', { cache: 'no-store' })
const books = await res.json()
```

### Option 2: External Data File

1. Store real data in `/data/books.json` (future: `/data/recipes.json`)
2. Use `fs` to read in a Server Component:

```typescript
import fs from 'fs'
import path from 'path'

export default async function Page() {
  const filePath = path.join(process.cwd(), 'data', 'books.json')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const books = JSON.parse(fileContents)
  // ...
}
```

### Option 3: Database (V2)

Per ADR-0007, a database is planned for V2. When implemented:

1. Connect to Postgres via Neon/Supabase
2. Create API routes or Server Actions
3. Fetch in Server Components with proper caching

## Book Reader Data

Currently `ReaderPage` component contains hard-coded sample recipes in `sampleContent`. To use real data:

1. Fetch book content from API/database by `slug`
2. Pass content as props to `ReaderPage`
3. Structure recipes with proper schema (see `20_data_foundation/schema/`)

```typescript
// app/books/[slug]/page.tsx - Future version
const book = await fetchBook(slug)
const content = await fetchBookContent(slug)
return <ReaderPage book={book} content={content} />
```

## See Also

- [ADR-0004: V1 Scope](../00_project_room/decisions/adr/0004-v1-scope-faithful-pre-1929-editions.md)
- [ADR-0007: Web Stack](../00_project_room/decisions/adr/0007-v1-web-stack-nextjs-vercel.md)
- [Data Foundation Room](../20_data_foundation/)
