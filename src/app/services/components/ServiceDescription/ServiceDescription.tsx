'use client'

import styles from './ServiceDescription.module.scss'

const ServiceDescription = () => {
  return (
    <div className={styles.container}>
      <div id='systems-analysis' className={styles.item}>
        <h3>Systems Analysis</h3>

        <p>
          Identify bottlenecks, inefficiencies, and areas for improvement within
          your organization&apos;s operations.
        </p>

        <div className='separator light' />

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
      <div id='crm-setup' className={styles.item}>
        <h3>CRM Setup</h3>

        <p>
          Streamline your client relationships with a tailored customer
          relationship management solution.
        </p>

        <div className='separator light' />

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
      <div id='static-react-site' className={styles.item}>
        <h3>Static React Website</h3>

        <p>
          Launch a fast, modern, and reliable website built with React and
          Nextjs.
        </p>

        <div className='separator light' />

        <p>
          <strong>Lightning-Fast Performance</strong>
          <br />
          Serve pre-rendered pages instantly for a smooth user experience.
        </p>

        <p>
          <strong>SEO Optimization</strong>
          <br />
          Boost your visibility with static pages that search engines love.
        </p>

        <p>
          <strong>Easy Maintenance</strong>
          <br />
          Update your content effortlessly without complex backend systems.
        </p>
      </div>
    </div>
  )
}

export default ServiceDescription
