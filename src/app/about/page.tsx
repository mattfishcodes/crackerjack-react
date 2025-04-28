import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.scss'
import PageHeader from '../components/PageHeader/PageHeader'
import Container from '../components/Container/Container'
import ChristineBio from './components/ChristineBio/ChristineBio'
import ChristineCerts from './components/ChristineCerts/ChristineCerts'
import MatthewBio from './components/MatthewBio/MatthewBio'
import CoreValues from './components/CoreValues/CoreValues'
import CallToAction from '../components/CallToAction/CallToAction'

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
          <Link href='/qualifications/' style={{ textDecoration: 'underline' }}>
            here
          </Link>
          .
        </div>
      </Container>

      <Container>
        <ChristineCerts />
      </Container>

      <Container bg='primary'>
        <MatthewBio />
      </Container>

      <Container>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Image src='/Matthew-Cert.png' alt='' width={300} height={300} />
        </div>
      </Container>

      <Container bg='primary'>
        <CoreValues />
      </Container>

      <Container bg='secondary'>
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
