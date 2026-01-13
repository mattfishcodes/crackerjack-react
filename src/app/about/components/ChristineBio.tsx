'use client'

import Image from 'next/image'
import Container from '@/components/Container'
import { Suspense } from 'react'
import { Skeleton } from '@/components/ui/skeleton'

const ChristineBio = () => {
  return (
    <Container>
      <h2>Christine Warner</h2>
      <div>
        <div className='mb-4 w-full md:float-left md:mr-4 md:w-60'>
          <Suspense fallback={<Skeleton className='aspect-square w-full' />}>
            <Image
              src='/christine-headshot.png'
              alt='Crackerjack Solutions founder Christine Warner'
              width={500}
              height={500}
              sizes='(max-width: 768px) 200px, 400px'
              priority
              loading='eager'
            />
          </Suspense>
        </div>
        <div>
          <p>
            Hey there! I&apos;m Christine, the founder of Crackerjack Solutions.
            With a lifelong background in entrepreneurship and over 25 years of
            corporate experience across diverse industries, I&apos;ve embraced
            the digital nomad lifestyle for the past 8 years to refine my
            expertise.
          </p>
          <p>
            At Crackerjack Solutions, I help entrepreneurs, solopreneurs, and
            freelancers strategize, organize, and streamline their operations.
            Think of me as your behind-the-scenes sherpa, leading you through
            complex business terrain and fine-tuning your systems.
          </p>
          <p>
            I excel at strategic thinking and solving complex business
            challenges through the effective use of technology, processes, and
            resources. Together, we&apos;ll create a plan to automate and
            streamline your operations, transforming chaos into efficiency and
            freeing you to focus on what you do best. Building strong
            relationships with customers is a priority for me.
          </p>
          <p>
            When I&apos;m not busy crafting business solutions, you can find me
            exploring the beautiful woods and waters of Traverse City, tending
            to my garden, getting lost in a good book, or painting my next
            masterpiece. After all, even a sherpa needs some downtime to
            recharge!
          </p>
          <p>
            I&apos;m excited to help you achieve peak efficiency and tackle your
            business challenges. Let&apos;s optimize your business for peak
            performance!
          </p>
        </div>
      </div>
    </Container>
  )
}

export default ChristineBio
