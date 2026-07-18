# Website

The web application for Chef-LLM, built with Next.js, Tailwind CSS, and TypeScript.

## Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS for utility styling
- **Type:** TypeScript
- **Deployment:** Vercel (static export via `output: 'export'`)

---

## Run Locally

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Steps

```bash
# 1. Navigate to the website folder
cd website

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

### Access the app

Open your browser and go to:

```
http://localhost:3000
```

---

## Other Commands

```bash
# Build for production (static export)
npm run build

# Preview production build
npm start

# Lint code
npm run lint
```

## Project Structure

```
website/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── books/[slug]/      # Dynamic book reader pages
│   ├── globals.css        # Global styles + Tailwind
│   ├── layout.tsx         # Root layout (header/footer)
│   ├── page.tsx           # Home / catalog page
│   └── not-found.tsx      # 404 page
├── components/            # React components
│   ├── BookCard.tsx       # Book catalog card
│   ├── ReaderPage.tsx     # Book reader (client component)
│   └── index.ts
├── data/                   # Static data
│   └── books.json         # Book catalog
└── public/               # Static assets (coming soon)
```

## Development Notes

- Dev server runs at `http://localhost:3000`
- Static export generates `/out` folder for deployment
- ReaderPage is a client component (`'use client'`) for interactivity
- Tailwind uses custom theme colors (cream, terracotta, olive, espresso, parchment, sage)

---

## Data

**⚠️ Current data is hard-coded and for demo purposes only.**

See [DATA.md](./DATA.md) for details on replacing hard-coded data with dynamic sources.

## Contributing

See the [main project README](../README.md) for contribution guidelines.

## License

- Code: MIT
- Data/Metadata: CC0

See [ADR-0008](../00_project_room/decisions/adr/0008-project-licenses.md) for full licensing details.
