import { Suspense } from 'react'

import { type Metadata } from 'next'

import Image from 'next/image'
import Link from 'next/link'

import Button from '@/components/Button'
import Container from '@/components/Container'
import PageHeader from '@/components/PageHeader'
import { client } from '@/sanity/lib/client'
import { type AboutPageData, aboutPageQuery } from '@/sanity/queries/aboutPage'
import { Skeleton } from '@/shadcn/ui/skeleton'

export const metadata: Metadata = {
  title: 'About',
}

export default async function About() {
  const { christine, consultPromo, matthew, coreValues, footerPromo } =
    (await client.fetch(aboutPageQuery)) as AboutPageData

  return (
    <main>
      <PageHeader>About</PageHeader>

      {/* Christine Bio */}
      <Container className='bg-secondary'>
        <h2>{christine.name}</h2>
        <div>
          <div className='mb-4 w-full md:float-left md:mr-4 md:w-60'>
            <Suspense fallback={<Skeleton className='aspect-square w-full' />}>
              <Image
                src={christine.imageUrl}
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
          <div>{christine.bio}</div>
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
          {christine.certificates.map((cert, i: number) => (
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

      {/* Consult Promo */}
      <Container className='bg-primary text-center'>
        <h3 className='text-white'>{consultPromo.heading}</h3>
        <Button data={consultPromo.cta} variant='secondary' />
      </Container>

      {/* Matthew Bio */}
      <Container className='bg-secondary text-secondary-foreground'>
        <h2>{matthew.name}</h2>
        <p>{matthew.bio}</p>
      </Container>
      <Container>
        <div className='flex justify-center'>
          <div className='w-full md:w-[30%]'>
            <Image
              className=''
              src={matthew.certificates[0].imageUrl}
              alt=''
              width={300}
              height={300}
              sizes='(max-width: 768px) 200px, 300px'
              unoptimized
            />
          </div>
        </div>
      </Container>

      {/* Core Values */}
      <Container className='bg-primary text-white'>
        <div className='flex flex-col items-center font-light'>
          <h3>{coreValues.heading}</h3>
          <div className='font-montserrat text-xl'>
            {coreValues.values.map((v) => (
              <p key={v}>{v}</p>
            ))}
          </div>
          <div className='my-4 flex w-full flex-col gap-4 md:flex-row md:justify-stretch'>
            {coreValues.memes.map(({ imageUrl }) => (
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

      {/* Footer Promo */}
      <Container className='bg-secondary text-foreground text-center'>
        <h6>{footerPromo.heading}</h6>
        <p>{footerPromo.body}</p>
        <Button data={footerPromo.primaryCta} />
        <br />
        <Button data={footerPromo.secondaryCta} />
      </Container>
    </main>
  )
}
