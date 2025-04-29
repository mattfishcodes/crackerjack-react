'use client'

import styles from './SoftwareList.module.scss'

const SoftwareList = () => {
  return (
    <div className={styles.container}>
      <h4>Software</h4>
      <p>
        We use a variety of online apps/SaaS tools. Some of them are used daily
        and some weekly, others less often. However, we have not yet met a SaaS
        tool that we were not able to master! We learn quickly and love the
        challenge of learning a new tool. Here is a brief list of some of the
        tools we currently use or have used frequently:
      </p>
      <div className={styles.list}>
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
          Stripe Payments
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
  )
}

export default SoftwareList
