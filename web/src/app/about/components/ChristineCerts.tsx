'use client'

import { Suspense } from 'react'

import Image from 'next/image'

import { Skeleton } from '@/shadcn/ui/skeleton'

const ChristineCerts = () => {
  return (
    <div className='flex flex-wrap items-stretch justify-center'>
      <div className='flex aspect-square flex-[49%] items-center md:flex-1'>
        <Suspense fallback={<Skeleton className='size-full' />}>
          <Image
            src='/Salesforce-Administrator.png'
            alt=''
            width={200}
            height={200}
            sizes='(max-width: 768px) 200px, 300px'
            loading='eager'
          />
        </Suspense>
      </div>
      <div className='flex aspect-square flex-[49%] items-center md:flex-1'>
        <Suspense fallback={<Skeleton className='size-full' />}>
          <Image
            src='/DBM-PM-Cert.jpg'
            alt=''
            width={200}
            height={200}
            sizes='(max-width: 768px) 200px, 300px'
            loading='eager'
          />
        </Suspense>
      </div>
      <div className='flex aspect-square flex-[49%] items-center md:flex-1'>
        <Suspense fallback={<Skeleton className='size-full' />}>
          <Image
            src='/DBM-SM-Cert.jpg'
            alt=''
            width={200}
            height={200}
            sizes='(max-width: 768px) 200px, 300px'
            loading='eager'
          />
        </Suspense>
      </div>
      <div className='flex aspect-square flex-[49%] items-center md:flex-1'>
        <Suspense fallback={<Skeleton className='size-full' />}>
          <Image
            src='/Moxie-Approved.png'
            alt=''
            width={200}
            height={200}
            sizes='(max-width: 768px) 200px, 300px'
            loading='eager'
          />
        </Suspense>
      </div>
    </div>
  )
}

export default ChristineCerts
