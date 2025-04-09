import React from 'react'
import styles from './page.module.scss'
import Section from '../components/Section'
import ScheduleButton from '../components/ScheduleButton'
import Header from '../components/Header'

export default function Services() {
  return (
    <main>
      <Section>
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ lineHeight: '2.25rem', marginBottom: '20px' }}>
            Interested in Exploring How our Services Can Benefit You?
          </h3>

          <p>Schedule your complimentary 30 minute call below.</p>

          <p>
            Let&apos;s explore how to navigate life&apos;s unpredictability
            together and find that equilibrium you&apos;re searching for.
          </p>

          <ScheduleButton color='light' />
        </div>
      </Section>

      <Header title={'Services'} />

      <Section>
        <div className={styles.flexbox}>
          <div className={styles.flexitem}>
            <h3>Systems Analysis</h3>

            <p>
              Identify bottlenecks, inefficiencies, and areas for improvement
              within your organization&apos;s operations.
            </p>

            <hr />

            <p>
              <strong>Understanding Your Processes</strong>
              <br />
              We&apos;ll meet with you to understand your current processes,
              systems, and workflows.
            </p>

            <p>
              <strong>Thorough Evaluation</strong>
              <br />
              Our team will conduct a detailed evaluation of your current state.
            </p>

            <p>
              <strong>Actionable Recommendations</strong>
              <br />
              You&apos;ll receive a customized report with actionable
              recommendations.
            </p>
          </div>
          <div className={styles.flexitem}>
            <h3>CRM Setup</h3>

            <p>
              Streamline your client relationships with a tailored customer
              relationship management solution.
            </p>

            <hr />

            <p>
              <strong>Centralized Platform</strong>
              <br />
              Manage all client and potential client relationships seamlessly.
            </p>

            <p>
              <strong>Stronger Business Relationships</strong>
              <br />
              Leverage our expertise to cultivate strong connections.
            </p>

            <p>
              <strong>Improved Communication</strong>
              <br />
              Streamline processes and watch your bottom line soar.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div>
          <h3>Hourly Retainer Packages</h3>
          <p
            style={{ fontFamily: 'var(--font-montserrat)', fontWeight: '500' }}
          >
            Flexible Solutions for Your Business Needs
          </p>
          <p>
            At Crackerjack Solutions, we understand that every business has
            unique requirements. Our hourly retainer packages offer the
            flexibility and expertise you need, exactly when you need it.
            Whether you require ongoing support, specialized project assistance,
            or expert advice, our retainer packages are designed to fit
            seamlessly into your workflow.
          </p>
          <hr />
          <div>
            <h4
              className='secondary bg-primary'
              style={{ borderRadius: '20px' }}
            >
              Why Choose Our Hourly Retainer Packages?
            </h4>
            <p>
              Customizable Plans: Tailor your package to suit your specific
              needs, from a few hours a month to full-time support.
            </p>
            <p>
              Cost-Effective: Optimize your budget with flexible hourly rates
              that provide excellent value without the commitment of a full-time
              hire.
            </p>
            <p>
              Consistency: Work with the same team members who understand your
              business, ensuring consistent and high-quality results.
            </p>
          </div>
          <div>
            <h4
              className='secondary bg-primary'
              style={{ borderRadius: '20px' }}
            >
              Packages
            </h4>
            <p>
              Starter Package: 10 hours per month &#45; Ideal for small projects
              or as-needed support. $600.00
            </p>
            <p>
              Basic Package: 20 hours per month &#45; Suitable for moderate
              projects and more frequent assistance. $1,200.00
            </p>
            <p>
              Growth Package: 30 hours per month &#45; Perfect for ongoing
              projects and consistent support. $1,650.00
            </p>
            <p>
              Pro Package: 40 hours per month &#45; Best for larger projects and
              frequent collaboration. $2,000.00
            </p>
          </div>
          <hr className={styles.dottedHr} />
          <div>
            Hourly packages expire 6 months from the date of purchase, and any
            remaining hours are lost. If you purchase additional hours prior to
            the expiration of existing hours, they will be added to the existing
            package, and the expiration date will be extended to 6 months from
            the last purchase.
          </div>
          <hr className={styles.dottedHr} />
        </div>
      </Section>

      <Section>
        <div>
          <h2>Ready to Get Started?</h2>
          <p>
            Invest in your business&apos;s success with a flexible hourly
            retainer package from Crackerjack Solutions. Contact us today to
            schedule your free consultation and discover how we can help you
            achieve your goals.
          </p>
          <ScheduleButton color='light' />
        </div>
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

      <Section>
        <div>
          <p>
            Software We use a variety of online apps/SaaS tools. Some of them
            are used daily and some weekly, others less often. However, we have
            not yet met a SaaS tool that we were not able to master! We learn
            quickly and love the challenge of learning a new tool. Here is a
            brief list of some of the tools we currently use or have used
            frequently:
          </p>
          <div>
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
