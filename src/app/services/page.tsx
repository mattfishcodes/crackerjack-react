import React from 'react'
import styles from './page.module.scss'
import Section from '../components/Section'
import Header from '../components/Header'
import CallToAction from '../components/CallToAction'
import ServiceDescription from './components/ServiceDescription/ServiceDescription'
import RetainerPackages from './components/RetainerPackages/RetainerPackages'
import ServicesList from './components/ServicesList/ServicesList'
import SoftwareList from './components/SoftwareList/SoftwareList'
import ReviewsCarousel from './components/ReviewsCarousel/ReviewsCarousel'

export default function Services() {
  return (
    <main>
      <Section>
        <CallToAction buttonColor='light'>
          <h3>Interested in Exploring How our Services Can Benefit You?</h3>
          <p>
            Schedule your complimentary 30 minute call below.
            <br />
            Let&apos;s explore how to navigate life&apos;s unpredictability
            togetherand find that equilibrium you&apos;re searching for.
          </p>
        </CallToAction>
      </Section>

      <Header title={'Services'} />

      <Section>
        <ServiceDescription />
      </Section>

      <RetainerPackages />

      <Section>
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
      </Section>

      <Section>
        <div className={styles.flexContainer}>
          <ServicesList title={'Projects'}>
            <li>Create Detailed Project Plans</li>
            <li>Lead Initial Kickoff Call with Stakeholders</li>
            <li>Lead Regular Check In Calls</li>
            <li>
              Manage Communication, Timeline, Change Requests, Status and
              Deliverables
            </li>
            <li>Maximize Productivity, Quality and Stakeholder Satisfaction</li>
            <li>And more…</li>
          </ServicesList>

          <ServicesList title={'Systems'}>
            <li>Manage Scheduling</li>
            <li>Manage Invoicing</li>
            <li>Manage Client Onboarding</li>
            <li>Review, Update and Create Processes</li>
            <li>Create SOPs & Playbooks for Systems</li>
            <li>And more…</li>
          </ServicesList>

          <ServicesList title={'Operations'}>
            <li>Review and Optimize existing Business Processes and Tools</li>
            <li>Create SOPs and Playbooks for Operations</li>
            <li>Manage CRM, Email and Calendar</li>
            <li>Create and/or Update Automations</li>
            <li>Develop Digital File Systems</li>
            <li>And more…</li>
          </ServicesList>
        </div>
      </Section>

      <SoftwareList />

      <ReviewsCarousel />
    </main>
  )
}
