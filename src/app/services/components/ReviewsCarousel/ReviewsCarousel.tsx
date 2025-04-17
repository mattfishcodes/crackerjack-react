'use client'

import React, { useRef } from 'react'
import styles from './ReviewsCarousel.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

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
      <h4 style={{ textAlign: 'center', margin: '1rem 0' }}>Reviews</h4>
      <div className={styles.container}>
        <button className={styles.scrollBack} onClick={scrollBack}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <ul ref={ulRef} className={styles.ul}>
          <li ref={liRef}>
            <blockquote>
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
            <p>Avinoam Lerner</p>
          </li>
          <li>
            <blockquote>
              It was a pleasure working with Christine. She was able to walk us
              through different solutions to help us with our form builds. She
              provided examples and documentation in a timely manner. It was a
              great experience overall. The whole team really enjoyed working
              with Christine and learned a lot.
            </blockquote>
            <p>Trina</p>
          </li>
          <li>
            <blockquote>Christine was outstanding!</blockquote>
            <p>Mandy</p>
          </li>
          <li>
            <blockquote>
              Christine has gone over and beyond during the onboarding and
              training. She is very knowledgeable and is a great trainer, always
              making sure the training is very practical and customized.
            </blockquote>
            <p>Nadine</p>
          </li>
          <li>
            <blockquote>
              This was one of the most comprehensive and helpful onboarding
              experiences I have had with any product or service. Christine was
              incredibly helpful and flexible, working with us to address our
              concerns and support us as we setup new forms and came across
              challenges or error messages. She ensured we had the required
              training but also was happy to work though any issues we brought
              to the meetings. The organization and set up for booking calls
              also worked well and was effective. Thank you!
            </blockquote>
            <p>Victoria</p>
          </li>
        </ul>
        <button className={styles.scrollForward} onClick={scrollForward}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  )
}

export default ReviewsCarousel
