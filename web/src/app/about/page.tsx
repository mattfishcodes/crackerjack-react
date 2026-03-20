import { type Metadata } from 'next'

import Image from 'next/image'
import Link from 'next/link'

import Container from '@/components/Container'
import PageHeader from '@/components/PageHeader'
import ScheduleButton from '@/components/ScheduleButton'

import ChristineBio from './components/ChristineBio'
import ChristineCerts from './components/ChristineCerts'
import CoreValues from './components/CoreValues'
import MatthewBio from './components/MatthewBio'

export const metadata: Metadata = {
  title: 'About',
}

export default function About() {
  return (
    <main>
      <PageHeader>About</PageHeader>

      <Container>
        <ChristineBio />
      </Container>

      <Container className='bg-primary text-primary-foreground font-semibold'>
        <div className='text-center text-xl'>
          If you would like to review my recent career history, you can do so{' '}
          <Link
            href='/qualifications/'
            className='underline underline-offset-2 transition-colors hover:text-white active:text-white'
          >
            here
          </Link>
          .
        </div>
      </Container>

      <Container>
        <ChristineCerts />
      </Container>

      <Container className='bg-primary text-white'>
        <MatthewBio />
      </Container>

      <Container>
        <div className='flex justify-center'>
          <div className='w-full md:w-[30%]'>
            <Image
              className=''
              src='/Matthew-Cert.png'
              alt=''
              width={300}
              height={300}
              sizes='(max-width: 768px) 200px, 300px'
            />
          </div>
        </div>
      </Container>

      <Container className='bg-primary text-white'>
        <CoreValues />
      </Container>

      <Container className='bg-secondary text-foreground text-center'>
        <h3>
          Thank you for taking the time to learn a bit about me and Crackerjack
          Solutions online business management services.
        </h3>
        <p>
          We are excited to explore how we can assist you in achieving your
          business goals and overcoming challenges. Feel free to reach out, and
          let&apos;s start a conversation!
        </p>
        <ScheduleButton color='dark' />
      </Container>
    </main>
  )
}
