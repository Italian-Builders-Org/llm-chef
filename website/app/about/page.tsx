import Link from 'next/link'

export const metadata = {
  title: 'About | Chef-LLM',
  description: 'Learn about the Chef-LLM project and its mission to preserve Italian culinary heritage',
}

export default function AboutPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-espresso text-cream py-16">
        <div className="container-page">
          <h1 className="text-4xl font-serif font-bold mb-4">About Chef-LLM</h1>
          <p className="text-xl text-cream/80 max-w-2xl">
            An open educational companion platform for Italian and European culinary heritage
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="container-page">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-serif font-bold mb-6 text-terracotta">Our Mission</h2>
            <div className="prose prose-lg">
              <p className="text-espresso/80 leading-relaxed mb-4">
                Chef-LLM aims to become an open, educational companion platform that resurfaces 
                Italian and broader European culinary heritage in a digestible, navigable form.
              </p>
              <p className="text-espresso/80 leading-relaxed mb-4">
                The recipes themselves are not scarce: they exist in books and online. 
                The scarcity is <strong>curation, organization, and guidance</strong>. 
                Most people don't know where to start, which books to buy, or what to learn, 
                so they hit information overload and stop.
              </p>
              <p className="text-espresso/80 leading-relaxed">
                Chef-LLM's value is to be the companion that turns a scattered, intimidating 
                corpus into something anyone curious can explore and learn from.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16 bg-parchment">
        <div className="container-page">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-serif font-bold mb-6 text-terracotta">Our Approach</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card p-6">
                <h3 className="font-serif font-bold mb-3">Faithful Transcriptions</h3>
                <p className="text-sm text-espresso/70">
                  Level A digital editions preserve the original text exactly as written, 
                  providing scholars and enthusiasts with accurate historical records.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="font-serif font-bold mb-3">Rights Verification</h3>
                <p className="text-sm text-espresso/70">
                  Every source is carefully verified for copyright status. We only publish 
                  public domain works or those with verified rights clearance.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="font-serif font-bold mb-3">Scholarly Classification</h3>
                <p className="text-sm text-espresso/70">
                  Recipes are classified by ingredient, technique, region, and period, 
                  making the corpus navigable and discoverable.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="font-serif font-bold mb-3">Open Source</h3>
                <p className="text-sm text-espresso/70">
                  All code is MIT licensed, data is CC0. Built by the community, 
                  for the community. Everyone is welcome to contribute.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-16">
        <div className="container-page">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-serif font-bold mb-6 text-terracotta">Development Roadmap</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-20 h-20 bg-olive text-cream rounded-lg flex items-center justify-center font-serif font-bold text-lg">
                  V1
                </div>
                <div>
                  <h3 className="font-bold mb-2">Current: Catalog & Reader</h3>
                  <p className="text-sm text-espresso/70">
                    Faithful digital editions from rights-verified pre-1929 sources, 
                    plus catalog and metadata search. Book-level access only.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-20 h-20 bg-sage text-cream rounded-lg flex items-center justify-center font-serif font-bold text-lg">
                  V2
                </div>
                <div>
                  <h3 className="font-bold mb-2">Planned: Recipe Engine</h3>
                  <p className="text-sm text-espresso/70">
                    Extraction and classification of individual recipes into a structured 
                    database. Enables recipe search, regional maps, and timelines.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-20 h-20 bg-terracotta text-cream rounded-lg flex items-center justify-center font-serif font-bold text-lg">
                  V3
                </div>
                <div>
                  <h3 className="font-bold mb-2">Future: AI & Community</h3>
                  <p className="text-sm text-espresso/70">
                    Conversational AI search, curated collections ("Collana"), 
                    community features, and family recipe preservation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contribute */}
      <section className="py-16 bg-espresso text-cream">
        <div className="container-page text-center">
          <h2 className="text-2xl font-serif font-bold mb-4">Get Involved</h2>
          <p className="text-cream/80 mb-8 max-w-xl mx-auto">
            Chef-LLM is an open project. We welcome contributors who share our passion 
            for culinary heritage and open knowledge.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://github.com/Italian-Builders-Org/llm-chef" 
               target="_blank" 
               rel="noopener noreferrer"
               className="btn-primary">
              Contribute on GitHub
            </a>
            <Link href="/" className="btn-secondary border-cream text-cream hover:bg-cream hover:text-espresso">
              Browse Catalog
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
