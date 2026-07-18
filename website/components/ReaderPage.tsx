'use client'

import { useState } from 'react'
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
}

export function ReaderPage({ book }: { book: Book }) {
  const [activeSection] = useState('preface')
  
  const tocItems = [
    { id: 'preface', title: 'Preface' },
    { id: 'introduction', title: 'Introduction to Italian Cooking' },
    { id: 'basics', title: 'Kitchen Basics and Equipment' },
    { id: 'antipasti', title: 'Antipasti and Starters' },
    { id: 'primi', title: 'Primi: Pasta and Rice' },
    { id: 'secondi', title: 'Secondi: Main Courses' },
    { id: 'dolci', title: 'Dolci: Desserts' },
  ]
  
  // Sample content for demonstration
  const sampleContent: Record<string, string> = {
    preface: `
      <h2>Preface</h2>
      <p>
        The art of Italian cooking is as old as Italy itself, yet it continues to evolve, 
        reflecting the diverse regions, local ingredients, and cultural influences that have 
        shaped this beloved culinary tradition over centuries.
      </p>
      <p>
        This work aims to preserve and share the wisdom of our ancestors in the kitchen, 
        presenting time-honored recipes that have nourished Italian families for generations. 
        <em>We have endeavored to maintain the integrity of the original preparations while 
        providing clear, modern instructions for the contemporary cook.</em>
      </p>
      <div class="bg-sage text-white p-4 rounded my-4 font-sans text-sm">
        <strong>Editorial Note:</strong> This is a Level A faithful transcription of the 
        original source. No editorial interpretation has been added. All measurements and 
        techniques are presented as written in the ${book.year} edition.
      </div>
    `,
    introduction: `
      <h2>Introduction to Italian Cooking</h2>
      <p>
        Italian cuisine is fundamentally a cuisine of simplicity and quality. The success 
        of any dish depends not on elaborate preparation but on the excellence of the 
        ingredients and the skill of their combination.
      </p>
      <p>
        The Italian kitchen is built upon a foundation of olive oil, bread, wine, and 
        fresh produce. From the butter-rich dishes of the north to the olive oil-based 
        preparations of the south, each region has developed its own distinct character 
        while maintaining a common thread of simplicity and respect for ingredients.
      </p>
    `,
    basics: `
      <h2>Kitchen Basics and Equipment</h2>
      <p>
        Before beginning our journey through Italian culinary tradition, it is essential 
        to equip the kitchen with the fundamental tools of the trade.
      </p>
      <p>
        The Italian kitchen requires few implements but demands they be of excellent quality. 
        A heavy-bottomed copper pot, a wooden cutting board, a good knife, and earthenware 
        vessels for baking constitute the essential equipment.
      </p>
    `,
    antipasti: `
      <h2>Antipasti and Starters</h2>
      <p>
        The meal in Italy traditionally begins with the <em>antipasto</em>, that which 
        comes before the pasta. This course serves to stimulate the appetite and introduce 
        the flavors that will follow.
      </p>
      <div class="bg-cream border-l-4 border-terracotta p-6 my-6 rounded-r-lg">
        <h3 class="text-terracotta font-serif font-bold text-xl mt-0">Bruschetta al Pomodoro</h3>
        <div class="bg-parchment p-4 rounded my-4 font-sans">
          <strong>Ingredients:</strong>
          <ul class="list-disc list-inside mt-2 space-y-1">
            <li>Good bread, sliced thickly</li>
            <li>Fresh ripe tomatoes, chopped</li>
            <li>Garlic</li>
            <li>Olive oil, finest quality</li>
            <li>Fresh basil</li>
            <li>Salt and pepper</li>
          </ul>
        </div>
        <p class="mt-4">
          Toast the bread well upon the grill. While still hot, rub thoroughly with 
          a clove of garlic. Chop the tomatoes with care, season with salt, and place 
          upon the toast. Drizzle with oil and adorn with basil leaves.
        </p>
      </div>
    `,
    primi: `
      <h2>Primi: Pasta and Rice</h2>
      <p>
        The first course, or <em>primo</em>, is the heart of the Italian meal. 
        Whether pasta, risotto, or gnocchi, this course provides the nourishment 
        and satisfaction that defines Italian dining.
      </p>
      <div class="bg-cream border-l-4 border-terracotta p-6 my-6 rounded-r-lg">
        <h3 class="text-terracotta font-serif font-bold text-xl mt-0">Risotto alla Milanese</h3>
        <div class="bg-parchment p-4 rounded my-4 font-sans">
          <strong>Ingredients:</strong>
          <ul class="list-disc list-inside mt-2 space-y-1">
            <li>Arborio rice, one cup</li>
            <li>Saffron threads, a generous pinch</li>
            <li>Beef broth, simmering, four cups</li>
            <li>Onion, finely minced</li>
            <li>Butter, two ounces</li>
            <li>Parmesan cheese, grated</li>
            <li>White wine, half cup</li>
          </ul>
        </div>
        <p class="mt-4">
          In a heavy pan, melt the butter and soften the onion without coloring. 
          Add the rice and stir until each grain is coated and begins to turn translucent. 
          Pour in the wine and stir until absorbed. Add the saffron to the hot broth, 
          then incorporate the broth one ladleful at a time, stirring constantly, 
          until the rice is al dente and the mixture is creamy. Finish with parmesan 
          and a generous knob of butter.
        </p>
      </div>
    `,
    secondi: `
      <h2>Secondi: Main Courses</h2>
      <p>
        The second course typically features meat or fish, accompanied by vegetables 
        served separately. The portions are smaller than one might expect, as the 
        pasta course has already provided substantial nourishment.
      </p>
    `,
    dolci: `
      <h2>Dolci: Desserts</h2>
      <p>
        The meal concludes with fruit, cheese, or the sweet preparations known as 
        <em>dolci</em>. Italian desserts are generally less elaborate than their 
        French counterparts but no less satisfying, relying on quality ingredients 
        and simple techniques.
      </p>
      <div class="bg-cream border-l-4 border-terracotta p-6 my-6 rounded-r-lg">
        <h3 class="text-terracotta font-serif font-bold text-xl mt-0">Tiramisù</h3>
        <div class="bg-parchment p-4 rounded my-4 font-sans">
          <strong>Ingredients:</strong>
          <ul class="list-disc list-inside mt-2 space-y-1">
            <li>Savoiardi biscuits (ladyfingers)</li>
            <li>Strong espresso, cooled</li>
            <li>Marsala wine</li>
            <li>Eggs, separated</li>
            <li>Sugar</li>
            <li>Mascarpone cheese</li>
            <li>Cocoa powder</li>
          </ul>
        </div>
        <p class="mt-4">
          Whip the yolks with sugar until pale and thick. Beat in the mascarpone. 
          Whip the whites until stiff and fold gently into the cream. Dip the biscuits 
          briefly in espresso mixed with marsala, layer in a dish with the cream, 
          and finish with a dusting of cocoa. Rest for several hours before serving.
        </p>
      </div>
    `,
  }
  
  return (
    <div className="min-h-screen bg-cream">
      {/* Top Bar */}
      <div className="bg-espresso text-cream p-4 sticky top-0 z-50 shadow-lg">
        <div className="max-w-[900px] mx-auto flex items-center justify-between gap-4">
          <Link href="/" className="text-cream/80 hover:text-terracotta transition-colors flex items-center gap-2 text-sm">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Catalog
          </Link>
          <span className="text-sm opacity-75 hidden sm:block truncate">{book.title}</span>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-[900px] mx-auto px-6 py-12 md:py-16">
        {/* Status Banner */}
        <div className="bg-sage text-white p-4 rounded-lg mb-8 flex items-center gap-3 font-sans text-sm">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          <span>
            <strong>Public Domain Verified</strong> — Level A faithful transcription
          </span>
        </div>
        
        {/* Book Header */}
        <header className="mb-12 pb-8 border-b-2 border-terracotta">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-espresso mb-2 leading-tight">
            {book.title}
          </h1>
          {book.subtitle && (
            <p className="font-serif text-xl text-olive italic mb-6">{book.subtitle}</p>
          )}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-sans text-sm text-espresso/80">
            <div>
              <strong className="text-olive">Author</strong>
              <p>{book.author}</p>
            </div>
            <div>
              <strong className="text-olive">Year</strong>
              <p>{book.year}</p>
            </div>
            <div>
              <strong className="text-olive">Region</strong>
              <p>{book.region}</p>
            </div>
            <div>
              <strong className="text-olive">Recipes</strong>
              <p>{book.recipesCount}</p>
            </div>
          </div>
        </header>
        
        {/* Table of Contents */}
        <nav className="bg-parchment p-6 rounded-lg mb-8">
          <h2 className="font-serif text-xl mb-4 text-espresso">Contents</h2>
          <ul className="space-y-2">
            {tocItems.map((item) => (
              <li key={item.id} className="border-b border-cream pb-2 last:border-0 last:pb-0">
                <a 
                  href={`#${item.id}`}
                  className={activeSection === item.id ? 'text-terracotta font-semibold' : 'text-terracotta hover:underline'}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Prose Content */}
        <div 
          className="font-serif text-lg leading-relaxed text-espresso prose-headings:text-espresso prose-headings:font-bold prose-headings:border-b prose-headings:border-terracotta prose-headings:pb-2 prose-p:mb-4"
          dangerouslySetInnerHTML={{ 
            __html: tocItems.map(item => sampleContent[item.id] || '').join('')
          }} 
        />
      </div>
    </div>
  )
}
