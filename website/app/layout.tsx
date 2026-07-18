import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Chef-LLM | Italian Culinary Heritage',
  description: 'Open educational platform for Italian and European culinary heritage',
  keywords: ['Italian cooking', 'historical recipes', 'cookbook', 'culinary heritage'],
  other: {
    'version': '0.5.0',
    'phase': 'prototype',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-screen flex flex-col bg-cream">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

function Header() {
  return (
    <header className="bg-espresso text-cream sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <ChefHat className="w-8 h-8" />
            <div>
              <h1 className="text-xl font-serif font-bold">Chef-LLM</h1>
              <p className="text-xs text-cream/70">Italian Culinary Heritage</p>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            <a href="/" className="hover:text-terracotta transition-colors">Catalog</a>
            <a href="/about" className="hover:text-terracotta transition-colors">About</a>
            <a href="https://github.com/Italian-Builders-Org/llm-chef" 
               target="_blank" 
               rel="noopener noreferrer"
               className="hover:text-terracotta transition-colors">
              GitHub
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-espresso text-cream/70 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="font-serif text-cream">Chef-LLM</p>
            <p className="text-sm">Preserving culinary heritage through open source</p>
          </div>
          <div className="flex gap-4 text-sm">
            <a href="https://github.com/Italian-Builders-Org/llm-chef" 
               target="_blank" 
               rel="noopener noreferrer"
               className="hover:text-cream transition-colors">
              GitHub
            </a>
            <span>•</span>
            <span>MIT License</span>
            <span>•</span>
            <span>CC0 Data</span>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-cream/20 text-center text-xs">
          <p>An open project by <a href="https://github.com/Italian-Builders-Org" 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="hover:text-cream">Italian Builders Org</a></p>
        </div>
      </div>
    </footer>
  )
}

function ChefHat(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"/>
      <line x1="6" y1="17" x2="18" y2="17"/>
    </svg>
  )
}
