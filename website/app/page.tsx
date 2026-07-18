import Link from 'next/link'
import { BookCard } from '@/components/BookCard'
import booksData from '@/data/books.json'

export default function Home() {
  const books = booksData.books

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-espresso text-cream py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Rediscover Italian Culinary Heritage
            </h1>
            <p className="text-lg text-cream/80 mb-8 leading-relaxed">
              An open educational platform that resurfaces historical Italian and European cookbooks 
              in a digestible, navigable form. Faithful digital editions, curated provenance, 
              and scholarly classification.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#catalog" className="btn-primary">
                Browse Catalog
              </a>
              <a href="https://github.com/Italian-Builders-Org/llm-chef" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="btn-secondary border-cream text-cream hover:bg-cream hover:text-espresso">
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-olive text-cream py-8">
        <div className="container-page">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-serif font-bold">{books.length}</p>
              <p className="text-sm text-cream/70">Verified Sources</p>
            </div>
            <div>
              <p className="text-3xl font-serif font-bold">
                {books.reduce((acc, b) => acc + b.recipesCount, 0)}
              </p>
              <p className="text-sm text-cream/70">Recipes</p>
            </div>
            <div>
              <p className="text-3xl font-serif font-bold">
                {Array.from(new Set(books.map(b => b.region))).length}
              </p>
              <p className="text-sm text-cream/70">Regions</p>
            </div>
            <div>
              <p className="text-3xl font-serif font-bold">V1</p>
              <p className="text-sm text-cream/70">Phase</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 bg-parchment">
        <div className="container-page">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-serif font-bold mb-4">About Chef-LLM</h2>
            <p className="text-espresso/80 leading-relaxed">
              The recipes themselves are not scarce: they exist in books and online. 
              The scarcity is <strong>curation, organization, and guidance</strong>. 
              Chef-LLM's value is to be the companion that turns a scattered, intimidating 
              corpus into something anyone curious can explore and learn from.
            </p>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="py-16">
        <div className="container-page">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-serif font-bold">Source Catalog</h2>
            <span className="text-sm text-espresso/60">
              {books.length} verified public domain sources
            </span>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-sage/20">
        <div className="container-page text-center">
          <h2 className="text-2xl font-serif font-bold mb-4">Help Preserve Culinary Heritage</h2>
          <p className="text-espresso/70 mb-6 max-w-xl mx-auto">
            This is an open-source project. Help us verify sources, transcribe recipes, 
            and build the future of culinary education.
          </p>
          <a href="https://github.com/Italian-Builders-Org/llm-chef" 
             target="_blank" 
             rel="noopener noreferrer"
             className="btn-primary inline-block">
            Contribute on GitHub
          </a>
        </div>
      </section>
    </div>
  )
}
