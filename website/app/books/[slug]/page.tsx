import { notFound } from 'next/navigation'
import booksData from '@/data/books.json'
import { ReaderPage } from '@/components/ReaderPage'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return booksData.books.map((book) => ({
    slug: book.slug,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const book = booksData.books.find((b) => b.slug === slug)
  
  if (!book) {
    return { title: 'Book Not Found' }
  }
  
  return {
    title: `${book.title} | Chef-LLM`,
    description: book.description,
  }
}

export default async function BookPage({ params }: PageProps) {
  const { slug } = await params
  const book = booksData.books.find((b) => b.slug === slug)
  
  if (!book) {
    notFound()
  }
  
  return <ReaderPage book={book} />
}
