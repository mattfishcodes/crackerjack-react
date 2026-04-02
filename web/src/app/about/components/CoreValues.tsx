import Image from 'next/image'

import Container from '@/components/Container'
import { type AboutPageData } from '@/sanity/queries/aboutPage'

type CoreValuesProps = {
  data: AboutPageData['coreValues']
}

export default function CoreValues({ data }: CoreValuesProps) {
  return (
    <Container className='bg-primary text-white'>
      <div className='flex flex-col items-center font-light'>
        <h3>{data.heading}</h3>
        <div className='font-montserrat text-xl'>
          {data.values.map((v) => (
            <p key={v}>{v}</p>
          ))}
        </div>
        <div className='my-4 flex w-full flex-col gap-4 md:flex-row md:justify-stretch'>
          {data.memes.map(({ imageUrl }) => (
            <div key={imageUrl} className='flex-1'>
              <Image
                className='h-full'
                src={imageUrl}
                alt=''
                width={300}
                height={300}
                sizes='(max-width: 768px) 200px, 300px'
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}
