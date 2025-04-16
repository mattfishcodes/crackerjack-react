import React from 'react'
import styles from './page.module.scss'
import Section from '../components/Section'
import Header from '../components/Header'
import CallToAction from './components/CallToAction/CallToAction'
import ServiceDescription from './components/ServiceDescription/ServiceDescription'
import RetainerPackages from './components/RetainerPackages/RetainerPackages'

export default function Services() {
  return (
    <main>
      <Section>
        <CallToAction>
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
        <CallToAction>
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
          <div className={styles.flexItem}>
            <h3>Projects</h3>
            <hr />
            <ul>
              <li>
                <span className={styles.bullet}></span>
                <span>Create Detailed Project Plans</span>
              </li>
              <li>Lead Initial Kickoff Call with Stakeholders</li>
              <li>Lead Regular Check In Calls</li>
              <li>
                Manage Communication, Timeline, Change Requests, Status and
                Deliverables
              </li>
              <li>
                Maximize Productivity, Quality and Stakeholder Satisfaction
              </li>
              <li>And more…</li>
            </ul>
          </div>
          <div className={styles.flexItem}>
            <h3>Systems</h3>
            <hr />
            <ul>
              <li>Manage Scheduling</li>
              <li>Manage Invoicing</li>
              <li>Manage Client Onboarding</li>
              <li>Review, Update and Create Processes</li>
              <li>Create SOPs & Playbooks for Systems</li>
              <li>And more…</li>
            </ul>
          </div>
          <div className={styles.flexItem}>
            <h3>Operations</h3>
            <hr />
            <ul>
              <li>Review and Optimize existing Business Processes and Tools</li>
              <li>Create SOPs and Playbooks for Operations</li>
              <li>Manage CRM, Email and Calendar</li>
              <li>Create and/or Update Automations</li>
              <li>Develop Digital File Systems</li>
              <li>And more…</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section className={styles.gradientBackground}>
        <div>
          <p>
            Software We use a variety of online apps/SaaS tools. Some of them
            are used daily and some weekly, others less often. However, we have
            not yet met a SaaS tool that we were not able to master! We learn
            quickly and love the challenge of learning a new tool. Here is a
            brief list of some of the tools we currently use or have used
            frequently:
          </p>
          <div
            style={{
              display: 'flex',
              flexFlow: 'row wrap',
              justifyContent: 'center',
              alignItems: 'left',
            }}
          >
            <div>
              Airtable
              <br />
              Asana
              <br />
              Calendly
              <br />
              Canva
              <br />
              ClickUp
              <br />
              Dubsado
              <br />
              FormAssembly
              <br />
              Gusto
              <br />
              HubSpot
              <br />
              LastPass
              <br />
              Loom
              <br />
              MailChimp
              <br />
              Make
            </div>
            <div>
              Microsoft/Office 365
              <br />
              Miro
              <br />
              Moxie
              <br />
              QuickBooks
              <br />
              Salesforce
              <br />
              SiteGround
              <br />
              Slack
              <br />
              Stripe
              <br />
              Payments
              <br />
              TaskRay
              <br />
              Trello
              <br />
              WordPress
              <br />
              Zapier
              <br />
              Zoom
            </div>
          </div>
        </div>
      </Section>
    </main>
  )
}
