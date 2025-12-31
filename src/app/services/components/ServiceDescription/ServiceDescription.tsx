'use client'

import Separator from '@/components/Separator'
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

        <Separator variant='light' />

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

        <Separator variant='light' />

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
      <div id='website-refresh' className={styles.item}>
        <h3>Website Refresh</h3>

        <p>Launch a fast, modern, and reliable refresh of your site.</p>

        <Separator variant='light' />

        <p>
          <strong>Faster Load Times with Pre-Rendered React Pages</strong>
          <br />
          By converting your site to a static React-powered platform, we can
          dramatically reduce load times. This approach pre-renders pages at
          build time, ensuring users experience near-instant loading —
          especially important for SEO and user retention.
        </p>

        <p>
          <strong>Improved Mobile Responsiveness and UI/UX</strong>
          <br />
          Many sites suffer from clunky mobile layouts or dated design patterns.
          A refreshed UI will make the experience seamless across all devices,
          align with modern design trends, and better reflect the
          professionalism of your brand.
        </p>

        <p>
          <strong>Future-Ready, Maintainable Architecture</strong>
          <br />A static architecture reduces server load, lowers hosting costs,
          and increases security — all while being easy to update or expand as
          your business grows.
        </p>
      </div>
    </div>
  )
}

export default ServiceDescription
