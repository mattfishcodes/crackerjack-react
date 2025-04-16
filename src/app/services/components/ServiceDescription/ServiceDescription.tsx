'use client'

import React from 'react'
import styles from './ServiceDescription.module.scss'

const ServiceDescription = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h3>Systems Analysis</h3>

        <p>
          Identify bottlenecks, inefficiencies, and areas for improvement within
          your organization&apos;s operations.
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
      <div className={styles.item}>
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
  )
}

export default ServiceDescription
