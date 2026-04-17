import { ArrowDown } from 'lucide-react'
import { type Metadata } from 'next'

import Image from 'next/image'

import Button from '@/components/Button'
import Container from '@/components/Container'
import Separator from '@/components/Separator'
import { client } from '@/sanity/lib/client'
import { type HomePageData, homePageQuery } from '@/sanity/queries/homePage'

export const metadata: Metadata = {
  title: 'Home | Crackerjack Solutions',
}

export default async function Home() {
  const {
    hero,
    painPoints,
    benefits,
    moxiePromo,
    coursePromo,
    services,
    process,
  } = (await client.fetch(homePageQuery)) as HomePageData

  return (
    <>
      <main>
        {/* Hero */}
        <Container className='bg-primary text-white'>
          <div className='flex flex-col items-center justify-between gap-4 text-center lg:flex-row'>
            <div className='w-[85%] md:max-w-1/4'>
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
              <h1>{hero.heading}</h1>
              <Separator variant='light' />
              <p className='text-primary-foreground text-2xl font-semibold'>
                {hero.subheading}
              </p>
              <p>{hero.body}</p>
            </div>
          </div>
        </Container>

        {/* Pain Points */}
        <Container className='text-center'>
          <h3>{painPoints.heading}</h3>
          <ul className=''>
            {painPoints.items.map((p: string) => (
              <li key={p} className='mb-4'>
                {p}
              </li>
            ))}
          </ul>
        </Container>

        {/* Benefits */}
        <Container className='bg-secondary text-center'>
          <span className='text-3xl'>{benefits.heading}</span>
        </Container>
        <Container className='text-center'>
          {benefits.items.map((b: string) => (
            <p key={b}>{b}</p>
          ))}
        </Container>

        {/* Moxie Promo */}
        <Container className='bg-secondary py-4 text-center'>
          <p className='font-mono text-2xl'>{moxiePromo.heading}</p>
          <div className='mb-4'>
            <Button
              data={{
                buttonLink: moxiePromo.cta.buttonLink,
                buttonText: moxiePromo.cta.buttonText,
              }}
            />
          </div>
          <div className='flex h-auto items-center justify-center'>
            <Image
              className='h-20 w-20'
              src={moxiePromo.logoUrl}
              alt=''
              width={256}
              height={256}
              unoptimized
            />
          </div>
        </Container>

        {/* Course Promo */}
        <Container className='bg-primary text-center'>
          <p className='text-primary-foreground'>{coursePromo.heading}</p>
          <p className='text-white'>{coursePromo.primaryBody}</p>
          <div className='mb-4'>
            <Button data={coursePromo.primaryCta} variant='secondary' />
          </div>
          <p className='text-white'>{coursePromo.secondaryBody}</p>
          <Button data={coursePromo.secondaryCta} variant='secondary' />
        </Container>

        {/* Services */}
        <Container>
          <h3 className='text-center font-semibold'>{services.heading}</h3>

          <Separator variant='dark' />

          <div className='flex flex-col gap-5 lg:flex-row'>
            {services.items.map((item) => (
              <div
                key={item.title}
                className='bg-primary flex flex-col items-center justify-center rounded-2xl px-8 py-16 lg:flex-1'
              >
                <p className='text-center text-white'>{item.description}</p>
                <Button
                  data={{ buttonText: 'Read More', buttonLink: item.href }}
                  variant='secondary'
                  openInNewTab={false}
                  icon={false}
                />
              </div>
            ))}
          </div>
        </Container>

        {/* Process */}
        <Container>
          <h3 className='text-center'>{process.heading}</h3>

          <Separator variant='dark' />

          <div className='flex flex-col lg:flex-row'>
            {process.steps.map((s, i: number) => (
              <div
                key={s.title}
                className='flex min-w-0 flex-1 flex-col lg:flex-row'
              >
                <div className='px-4 py-4 text-center'>
                  <p className='font-montserrat text-secondary-foreground bg-secondary inline-flex h-8 w-8 items-center justify-center rounded-full font-semibold'>
                    {i + 1}
                  </p>
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                </div>
                {i < process.steps.length - 1 && (
                  <div className='flex items-center justify-center lg:-rotate-90'>
                    <ArrowDown />
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </main>
    </>
  )
}
