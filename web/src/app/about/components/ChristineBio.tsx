import { Suspense } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import Container from '@/components/Container'
import { type AboutPageData } from '@/sanity/queries/aboutPage'
import { Skeleton } from '@/shadcn/ui/skeleton'

type ChristineBioProps = {
  data: AboutPageData['christine']
}

export default async function ChristineBio({ data }: ChristineBioProps) {
  const paragraphs: string[] = data.bio
    .split('\n')
    .filter((p: string) => p.length > 0)

  return (
    <>
      <Container className='bg-secondary'>
        <h2>{data.name}</h2>
        <div>
          <div className='mb-4 w-full md:float-left md:mr-4 md:w-60'>
            <Suspense fallback={<Skeleton className='aspect-square w-full' />}>
              <Image
                src={data.imageUrl}
                alt='Crackerjack Solutions founder Christine Warner'
                width={500}
                height={500}
                sizes='(max-width: 768px) 200px, 400px'
                priority
                loading='eager'
                unoptimized
              />
            </Suspense>
          </div>
          <div>
            {paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </Container>
      <Container className='bg-primary text-primary-foreground font-semibold'>
        <div className='text-center text-xl'>
          If you would like to review my recent career history, you can do so{' '}
          <Link
            href='/qualifications'
            className='underline underline-offset-2 transition-colors hover:text-white active:text-white'
          >
            here
          </Link>
          .
        </div>
      </Container>
      <Container>
        <div className='flex flex-wrap items-stretch justify-center'>
          {data.certificates.map((cert, i: number) => (
            <div
              key={i}
              className='flex aspect-square flex-[49%] items-center md:flex-1'
            >
              <Suspense fallback={<Skeleton className='size-full' />}>
                <Image
                  src={cert.imageUrl}
                  alt=''
                  width={200}
                  height={200}
                  sizes='(max-width: 768px) 200px, 300px'
                  loading='eager'
                  unoptimized
                />
              </Suspense>
            </div>
          ))}
        </div>
      </Container>
    </>
  )
}
