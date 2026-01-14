'use client'

import { Separator } from '@/components/Separator'

const RetainerPackages = () => {
  return (
    <div className='flex justify-center'>
      <div>
        <h3>Hourly Retainer Packages</h3>
        <p className='font-montserrat'>
          Flexible Solutions for Your Business Needs
        </p>
        <p>
          At Crackerjack Solutions, we understand that every business has unique
          requirements. Our hourly retainer packages offer the flexibility and
          expertise you need, exactly when you need it. Whether you require
          ongoing support, specialized project assistance, or expert advice, our
          retainer packages are designed to fit seamlessly into your workflow.
        </p>
        <Separator variant='dark' />
        <div>
          <h4>Why Choose Our Hourly Retainer Packages?</h4>

          <p>
            Customizable Plans: Tailor your package to suit your specific needs,
            from a few hours a month to full-time support.
          </p>
          <p>
            Cost-Effective: Optimize your budget with flexible hourly rates that
            provide excellent value without the commitment of a full-time hire.
          </p>
          <p>
            Consistency: Work with the same team members who understand your
            business, ensuring consistent and high-quality results.
          </p>
        </div>
        <Separator variant='dark' />
        <div>
          <h4>Packages</h4>
          <p>
            Starter Package: 10 hours per month &#45; Ideal for small projects
            or as-needed support.
          </p>
          <p>
            Basic Package: 20 hours per month &#45; Suitable for moderate
            projects and more frequent assistance.
          </p>
          <p>
            Growth Package: 30 hours per month &#45; Perfect for ongoing
            projects and consistent support.
          </p>
          <p>
            Pro Package: 40 hours per month &#45; Best for larger projects and
            frequent collaboration.
          </p>
        </div>
        <Separator variant='dotted' />
        <div className='px-4'>
          Hourly packages expire 6 months from the date of purchase, and any
          remaining hours are lost. If you purchase additional hours prior to
          the expiration of existing hours, they will be added to the existing
          package, and the expiration date will be extended to 6 months from the
          last purchase.
        </div>
        <Separator variant='dotted' />
      </div>
    </div>
  )
}

export default RetainerPackages
