import { type Metadata } from 'next'

import Link from 'next/link'

import Button from '@/components/Button'
import Container from '@/components/Container'
import FillImage from '@/components/FillImage'
import PageHeader from '@/components/PageHeader'
import { client } from '@/sanity/lib/client'
import { type AboutPageData, aboutPageQuery } from '@/sanity/queries/aboutPage'

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
          <div className='relative aspect-square w-full'>
            <FillImage src={christine.imageUrl} alt='' />
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
              className='relative flex aspect-square flex-[49%] items-center md:flex-1'
            >
              <FillImage
                src={cert.imageUrl}
                alt=''
                objectFit='object-contain'
              />
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
        <div className='relative aspect-square w-full'>
          <FillImage
            src={matthew.certificates[0].imageUrl}
            alt=''
            objectFit='object-contain'
          />
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
              <div key={imageUrl} className='relative aspect-square flex-1'>
                <FillImage src={imageUrl} alt='' />
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
