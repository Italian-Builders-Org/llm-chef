import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-serif font-bold text-terracotta mb-4">404</h1>
        <h2 className="text-2xl font-serif font-bold mb-4">Page Not Found</h2>
        <p className="text-espresso/70 mb-8 max-w-md">
          The recipe you're looking for seems to have gotten lost in the kitchen. 
          Let's get you back on track.
        </p>
        <Link href="/" className="btn-primary">
          Back to Catalog
        </Link>
      </div>
    </div>
  )
}
