import React from 'react'
import styles from './page.module.scss'
import Container from '../components/Container/Container'
import CallToAction from '../components/CallToAction'
import ServiceDescription from './components/ServiceDescription/ServiceDescription'
import RetainerPackages from './components/RetainerPackages/RetainerPackages'
import ServicesList from './components/ServicesList/ServicesList'
import SoftwareList from './components/SoftwareList/SoftwareList'
import ReviewsCarousel from './components/ReviewsCarousel/ReviewsCarousel'

export default function Services() {
  return (
    <main className={styles.main}>
      <Container>
        <CallToAction buttonColor='light'>
          <h3>Interested in Exploring How our Services Can Benefit You?</h3>
          <p>
            Schedule your complimentary 30 minute call below.
            <br />
            Let&apos;s explore how to navigate life&apos;s unpredictability
            togetherand find that equilibrium you&apos;re searching for.
          </p>
        </CallToAction>
      </Container>

      <Container bg='primary'>
        <div style={{ textAlign: 'center' }}>
          <h1>Services</h1>
          <div className='separator light' />
        </div>
      </Container>

      <Container>
        <ServiceDescription />
      </Container>

      <Container bg='secondary'>
        <RetainerPackages />
      </Container>

      <Container>
        <CallToAction buttonColor='light'>
          <h3>Ready to Get Started?</h3>
          <p>
            Invest in your business&apos;s success with a flexible hourly
            retainer package from Crackerjack Solutions.
            <br />
            Contact us today to schedule your free consultation and discover how
            we can help you achieve your goals.
          </p>
        </CallToAction>
      </Container>

      <Container>
        <ServicesList />
      </Container>

      <SoftwareList />

      <Container>
        <ReviewsCarousel />
      </Container>
    </main>
  )
}
