import Image from 'next/image'

import Container from '@/components/Container'
import Separator from '@/components/Separator'
import { type HomePageData } from '@/sanity/queries/homePage'

type HeroSectionProps = {
  data: HomePageData['hero']
}

export default function HeroSection({ data }: HeroSectionProps) {
  return (
    <Container className='bg-primary text-white'>
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
          <h1>{data.heading}</h1>
          <Separator variant='light' />
          <p className='text-primary-foreground text-2xl font-semibold'>
            {data.subheading}
          </p>
          <p>{data.body}</p>
        </div>
      </div>
    </Container>
  )
}
