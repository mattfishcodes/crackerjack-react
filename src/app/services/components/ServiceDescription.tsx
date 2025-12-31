'use client'

import Separator from '@/components/Separator'

const ServiceDescription = () => {
  return (
    <div className='flex flex-col gap-4 lg:flex-row lg:flex-wrap'>
      <div
        id='systems-analysis'
        className='bg-primary flex-4/9 rounded-xl p-4 text-white lg:p-8'
      >
        <h3 className='text-secondary'>Systems Analysis</h3>

        <p>
          Identify bottlenecks, inefficiencies, and areas for improvement within
          your organization&apos;s operations.
        </p>

        <Separator variant='light' />

        <p>
          <strong className='text-secondary'>
            Understanding Your Processes
          </strong>
          <br />
          We&apos;ll meet with you to understand your current processes,
          systems, and workflows.
        </p>

        <p>
          <strong className='text-secondary'>Thorough Evaluation</strong>
          <br />
          Our team will conduct a detailed evaluation of your current state.
        </p>

        <p>
          <strong className='text-secondary'>Actionable Recommendations</strong>
          <br />
          You&apos;ll receive a customized report with actionable
          recommendations.
        </p>
      </div>
      <div
        id='crm-setup'
        className='bg-primary flex-4/9 rounded-xl p-4 text-white lg:p-8'
      >
        <h3 className='text-secondary'>CRM Setup</h3>

        <p>
          Streamline your client relationships with a tailored customer
          relationship management solution.
        </p>

        <Separator variant='light' />

        <p>
          <strong className='text-secondary'>Centralized Platform</strong>
          <br />
          Manage all client and potential client relationships seamlessly.
        </p>

        <p>
          <strong className='text-secondary'>
            Stronger Business Relationships
          </strong>
          <br />
          Leverage our expertise to cultivate strong connections.
        </p>

        <p>
          <strong className='text-secondary'>Improved Communication</strong>
          <br />
          Streamline processes and watch your bottom line soar.
        </p>
      </div>
      <div
        id='website-refresh'
        className='bg-primary flex-4/9 rounded-xl p-4 text-white lg:p-8'
      >
        <h3 className='text-secondary'>Website Refresh</h3>

        <p>Launch a fast, modern, and reliable refresh of your site.</p>

        <Separator variant='light' />

        <p>
          <strong className='text-secondary'>
            Faster Load Times with Pre-Rendered React Pages
          </strong>
          <br />
          By converting your site to a static React-powered platform, we can
          dramatically reduce load times. This approach pre-renders pages at
          build time, ensuring users experience near-instant loading —
          especially important for SEO and user retention.
        </p>

        <p>
          <strong className='text-secondary'>
            Improved Mobile Responsiveness and UI/UX
          </strong>
          <br />
          Many sites suffer from clunky mobile layouts or dated design patterns.
          A refreshed UI will make the experience seamless across all devices,
          align with modern design trends, and better reflect the
          professionalism of your brand.
        </p>

        <p>
          <strong className='text-secondary'>
            Future-Ready, Maintainable Architecture
          </strong>
          <br />A static architecture reduces server load, lowers hosting costs,
          and increases security — all while being easy to update or expand as
          your business grows.
        </p>
      </div>
    </div>
  )
}

export default ServiceDescription
