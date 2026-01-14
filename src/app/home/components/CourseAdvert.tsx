'use client'

import Link from 'next/link'

export const CourseAdvert = () => {
  return (
    <>
      <p className='font-titillium-web bg-primary text-secondary rounded-md py-4 font-light md:text-lg'>
        How many SaaS tools do you pay for each month?
      </p>
      <h3>Master Moxie: Simplify Your Business</h3>
      <p>
        Learn how to configure Moxie step-by-step and streamline your entire
        business. You may not need another tool.
      </p>
      <div className='py-4'>
        <div className='mb-4'>
          In this self paced course I cover all areas of Moxie:
        </div>
        <ul>
          <li>Lead Pipeline</li>
          <li>Clients</li>
          <li>Projects</li>
          <li>Invoices</li>
          <li>Automations</li>
          <li>Custom Forms</li>
          <li>Custom Fields</li>
          <li>Custom Contracts</li>
          <li>And more…</li>
        </ul>
      </div>
      <div className='py-4 text-xl'>
        👉 Get the details:{' '}
        <Link
          href='https://courses.crackerjacksolutions.com/info'
          className='hover:text-primary font-semibold underline transition-colors'
        >
          Master Moxie
        </Link>
      </div>
      <div>
        Disclaimer: This course is independently created and is not affiliated
        with or endorsed by Moxie. All trademarks belong to their respective
        owners.
      </div>
    </>
  )
}
