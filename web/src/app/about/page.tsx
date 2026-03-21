import { type Metadata } from 'next'

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

      <ChristineBio />

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

      <ChristineCerts />

      <MatthewBio />

      <CoreValues />

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
