import React from 'react'
import Link from 'next/link'
import styles from './page.module.scss'
import PageHeader from '../components/PageHeader/PageHeader'
import Container from '../components/Container/Container'
import ChristineBio from './components/ChristineBio/ChristineBio'
import CallToAction from '../components/CallToAction'
import MatthewBio from './components/MatthewBio/MatthewBio'

export default function About() {
  return (
    <main className={styles.container}>
      <PageHeader title='About' />

      <Container>
        <ChristineBio />
      </Container>

      <Container bg='secondary'>
        <div style={{ textAlign: 'center' }}>
          If you would like to review my recent career history, you can do so{' '}
          <Link href='#' style={{ textDecoration: 'underline' }}>
            here
          </Link>
          .
        </div>
      </Container>

      <Container>
        <MatthewBio />
      </Container>

      <Container bg='primary'>
        <div
          style={{
            display: 'flex',
            flexFlow: 'column nowrap',
            alignItems: 'center',
          }}
        >
          <h3>Core Values</h3>
          <p
            style={{
              fontFamily: 'var(--font-montserrat)',
              fontSize: '1.25rem',
              fontWeight: 300,
            }}
          >
            <span>Integrity</span> <span>Accountability</span>{' '}
            <span>Kindness</span>
          </p>
        </div>
      </Container>

      <Container>
        <CallToAction buttonColor='dark'>
          <h3>
            Thank you for taking the time to learn a bit about me and
            Crackerjack Solutions online business management services.
          </h3>
          <p>
            We are excited to explore how we can assist you in achieving your
            business goals and overcoming challenges. Feel free to reach out,
            and let&apos;s start a conversation!
          </p>
        </CallToAction>
      </Container>
    </main>
  )
}
