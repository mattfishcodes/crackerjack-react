'use client'

import Image from 'next/image'
import { Separator } from '@/components/Separator'

const TitleSection = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-between gap-4 text-center lg:flex-row'>
        <div className='w-full md:max-w-1/4'>
          <Image
            src='/images/icon-square.png'
            alt=''
            width={800}
            height={800}
            sizes='(max-width: 768px) 200px, 400px'
            priority
            loading='eager'
          />
        </div>
        <div>
          <h1>Crackerjack Solutions</h1>
          <Separator variant='light' />
          <p>
            Welcome to Crackerjack Solutions Virtual Business Management
            Services!
          </p>
          <p>
            Empowering Entrepreneurs and Business Leaders to cultivate business
            growth, elevate productivity, and optimize operations.
          </p>
          <p>
            Unleash Your Potential, Reduce Stress, and Reclaim Time for What
            Matters Most!
          </p>
        </div>
      </div>
    </>
  )
}

export default TitleSection
