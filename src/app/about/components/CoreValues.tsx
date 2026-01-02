'use client'

import Image from 'next/image'
import Container from '@/components/Container'

const CoreValues = () => {
  return (
    <Container className='bg-primary text-white'>
      <div className='flex flex-col items-center font-light'>
        <h3>Core Values</h3>
        <p className='font-montserrat text-xl'>
          <span>Integrity</span> <span>Accountability</span>{' '}
          <span>Kindness</span>
        </p>
        <div className='my-4 flex w-full flex-col gap-4 md:flex-row'>
          <Image
            src='/integrity-meme.jpg'
            alt=''
            width={300}
            height={300}
            sizes='(max-width: 768px) 100px, 300px'
          />
          <Image
            src='/accountability-meme.jpg'
            alt=''
            width={300}
            height={300}
            sizes='(max-width: 768px) 100px, 300px'
          />
          <Image
            src='/kindness-meme.jpg'
            alt=''
            width={300}
            height={300}
            sizes='(max-width: 768px) 100px, 300px'
          />
        </div>
      </div>
    </Container>
  )
}

export default CoreValues
