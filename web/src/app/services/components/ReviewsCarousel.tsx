'use client'

import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { SanityDocument } from 'next-sanity'

export default function ReviewsCarousel({
  reviews = [],
}: {
  reviews: SanityDocument[]
}) {
  const ulRef = useRef<HTMLUListElement | null>(null)
  const liRef = useRef<HTMLLIElement | null>(null)

  const scrollBack = () => {
    if (ulRef.current !== null && liRef.current !== null) {
      if (ulRef.current.scrollLeft === 0) {
        ulRef.current.scrollLeft = ulRef.current.scrollWidth
        return
      }
      ulRef.current.scrollLeft -= liRef.current.scrollWidth
    }
  }

  const scrollForward = () => {
    if (ulRef.current !== null && liRef.current !== null) {
      if (
        ulRef.current.scrollLeft >
        liRef.current.scrollWidth * (reviews.length - 1)
      ) {
        ulRef.current.scrollLeft = 0
        return
      }
      ulRef.current.scrollLeft += liRef.current.scrollWidth
    }
  }

  return (
    <div>
      <h4 className='my-4 text-center'>Reviews</h4>
      <div className='relative flex items-center justify-center'>
        <button
          className='bg-primary text-primary-foreground just hidden cursor-pointer items-center rounded-full p-1 transition-all hover:scale-110 hover:text-white lg:inline-flex'
          onClick={scrollBack}
        >
          <ChevronLeft />
        </button>
        <ul
          ref={ulRef}
          className='mb-4 flex snap-x snap-mandatory gap-[1.1rem] overflow-x-scroll scroll-smooth px-4'
        >
          {reviews.map((r: SanityDocument, i: number) => {
            return (
              <li
                key={r._id}
                ref={i === 0 ? liRef : undefined}
                className='flex flex-[100%] shrink-0 grow-0 snap-center list-none flex-col justify-center border border-gray-200 p-4'
              >
                <blockquote className='mb-4'>{r.body}</blockquote>
                <div className='font-meow-script text-3xl'>- {r.name}</div>
              </li>
            )
          })}
        </ul>
        <button
          className='bg-primary text-primary-foreground just hidden cursor-pointer items-center rounded-full p-1 transition-all hover:scale-110 hover:text-white lg:inline-flex'
          onClick={scrollForward}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}
