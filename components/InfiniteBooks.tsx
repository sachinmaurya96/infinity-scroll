'use client'
import { useInfiniteQuery } from '@tanstack/react-query'
import { fetchBooks } from '@/lib/api'
import BookCard from './BookCard'
import { useInView } from 'react-intersection-observer'
import React from 'react'
export default function InfiniteBooks() {
  const { ref, inView } = useInView()

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status
  } = useInfiniteQuery({
    queryKey: ['books'],
    queryFn: ({ pageParam = 1 }) => fetchBooks(pageParam),
    initialPageParam: 1, // ✅ Required in React Query v5
    getNextPageParam: (lastPage) =>
      lastPage.nextPage ? lastPage.currentPage + 1 : undefined
  })
  React.useEffect(() => {
    if (inView && hasNextPage) fetchNextPage()
  }, [inView, hasNextPage, fetchNextPage])

  if (status === 'pending') return <p className="text-gray-500">Loading...</p>
  if (status === 'error') return <p className="text-red-500">Failed to load books.</p>

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {data?.pages.map((page, i) => (
        <React.Fragment key={i}>
          {page.books.map((book: any) => (
            <BookCard key={book.id} book={book} />
          ))}
        </React.Fragment>
      ))}

      {isFetchingNextPage && <div>Loading...</div>}

      <span ref={ref} className="h-1" />
    </div>
  )
}
