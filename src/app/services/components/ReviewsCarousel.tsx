'use client'

import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const ReviewsCarousel = () => {
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
      if (ulRef.current.scrollLeft > liRef.current.scrollWidth * 4) {
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
          <li
            ref={liRef}
            className='flex flex-[100%] shrink-0 grow-0 snap-center list-none flex-col justify-center border border-gray-200 p-4'
          >
            <blockquote className='mb-4'>
              Working with Christine was a great experience, and I will
              certainly hire her again. She was methodical, highly responsive,
              and professional, and her service exceeded my expectations. What
              truly sets her apart is her unwavering commitment to integrity and
              precision. Christine went above and beyond to understand my
              project&apos;s needs, and I was impressed with her ability to
              provide me with tailored solutions. Her expertise and attention to
              detail were evident in every task she handled. I highly recommend
              her services to anyone seeking a reliable, skilled, and
              trustworthy partner for their business needs.
            </blockquote>
            <div className='font-meow-script text-3xl'>- Avinoam Lerner</div>
          </li>
          <li className='flex flex-[100%] shrink-0 grow-0 snap-center list-none flex-col justify-center border border-gray-200 p-4'>
            <blockquote className='mb-4'>
              It was a pleasure working with Christine. She was able to walk us
              through different solutions to help us with our form builds. She
              provided examples and documentation in a timely manner. It was a
              great experience overall. The whole team really enjoyed working
              with Christine and learned a lot.
            </blockquote>
            <div className='font-meow-script text-3xl'>- Trina</div>
          </li>
          <li className='flex flex-[100%] shrink-0 grow-0 snap-center list-none flex-col justify-center border border-gray-200 p-4'>
            <blockquote className='mb-4'>Christine was outstanding!</blockquote>
            <div className='font-meow-script text-3xl'>- Mandy</div>
          </li>
          <li className='flex flex-[100%] shrink-0 grow-0 snap-center list-none flex-col justify-center border border-gray-200 p-4'>
            <blockquote className='mb-4'>
              Christine has gone over and beyond during the onboarding and
              training. She is very knowledgeable and is a great trainer, always
              making sure the training is very practical and customized.
            </blockquote>
            <div className='font-meow-script text-3xl'>- Nadine</div>
          </li>
          <li className='flex flex-[100%] shrink-0 grow-0 snap-center list-none flex-col justify-center border border-gray-200 p-4'>
            <blockquote className='mb-4'>
              This was one of the most comprehensive and helpful onboarding
              experiences I have had with any product or service. Christine was
              incredibly helpful and flexible, working with us to address our
              concerns and support us as we setup new forms and came across
              challenges or error messages. She ensured we had the required
              training but also was happy to work though any issues we brought
              to the meetings. The organization and set up for booking calls
              also worked well and was effective. Thank you!
            </blockquote>
            <div className='font-meow-script text-3xl'>- Victoria</div>
          </li>
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

export default ReviewsCarousel
