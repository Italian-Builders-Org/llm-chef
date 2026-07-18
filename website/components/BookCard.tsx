import Link from 'next/link'

interface Book {
  id: string
  title: string
  subtitle: string | null
  author: string
  year: number
  region: string
  period: string
  cuisine: string
  description: string
  status: string
  pageCount: number
  recipesCount: number
  tags: string[]
  slug: string
}

export function BookCard({ book }: { book: Book }) {
  return (
    <article className="card overflow-hidden group">
      {/* Book Spine Accent */}
      <div className="h-2 bg-terracotta" />
      
      <div className="p-6">
        {/* Header */}
        <div className="mb-4">
          <div className="flex items-start justify-between gap-2 mb-2">
            <span className="text-xs font-medium px-2 py-1 bg-sage/20 text-olive rounded">
              {book.year}
            </span>
            <span className="text-xs text-espresso/50">
              {book.pageCount} pages
            </span>
          </div>
          
          <h3 className="font-serif font-bold text-lg leading-tight group-hover:text-terracotta transition-colors">
            {book.title}
          </h3>
          
          {book.subtitle && (
            <p className="text-sm text-espresso/70 mt-1">{book.subtitle}</p>
          )}
        </div>

        {/* Meta */}
        <div className="space-y-1 text-sm text-espresso/70 mb-4">
          <p><span className="font-medium">Author:</span> {book.author}</p>
          <p><span className="font-medium">Region:</span> {book.region}</p>
          <p><span className="font-medium">Recipes:</span> {book.recipesCount}</p>
        </div>

        {/* Description */}
        <p className="text-sm text-espresso/80 leading-relaxed mb-4 line-clamp-3">
          {book.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {book.tags.slice(0, 4).map((tag) => (
            <span 
              key={tag} 
              className="text-xs px-2 py-0.5 bg-parchment text-espresso/60 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Status Badge */}
        <div className="flex items-center justify-between pt-4 border-t border-espresso/10">
          <span className="text-xs text-sage font-medium flex items-center gap-1">
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Public Domain
          </span>
          
          <Link 
            href={`/books/${book.slug}`}
            className="text-sm font-medium text-terracotta hover:underline flex items-center gap-1"
          >
            Read
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </article>
  )
}
