import React from 'react'
import styles from './page.module.scss'
import Container from '../components/Container/Container'
import CallToAction from '../components/CallToAction/CallToAction'
import PageHeader from '../components/PageHeader/PageHeader'
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

      <PageHeader title='Services' />

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

      <Container bg='fancy'>
        <SoftwareList />
      </Container>

      <Container>
        <ReviewsCarousel />
      </Container>
    </main>
  )
}
