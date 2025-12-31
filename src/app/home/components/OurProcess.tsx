'use client'

import { ArrowDown } from 'lucide-react'
import Container from '@/components/Container'
import Separator from '@/components/Separator'

const OurProcess = () => {
  return (
    <Container>
      <h3 className='text-center'>Our Process</h3>

      <Separator variant='dark' />

      <div className='flex flex-col lg:flex-row'>
        <div className='flex-1 p-[2rem_1rem] text-center'>
          <p className='font-montserrat text-primary bg-secondary inline-flex h-8 w-8 items-center justify-center rounded-full font-semibold'>
            1
          </p>
          <h3>Consultation</h3>
          <p>
            We begin with a free, open discussion to understand your business
            goals and challenges, so we can recommend the right solution for
            your needs.
          </p>
        </div>
        <div className='flex items-center justify-center lg:rotate-270'>
          <ArrowDown />
        </div>
        <div className='flex-1 p-[2rem_1rem] text-center'>
          <p className='font-montserrat text-primary bg-secondary inline-flex h-8 w-8 items-center justify-center rounded-full font-semibold'>
            2
          </p>
          <h3>Package Selection</h3>
          <p>
            Together, we&apos;ll select the best-fit package—whether you need
            systems analysis, CRM setup, web development, or ongoing support.
          </p>
        </div>
        <div className='flex items-center justify-center lg:-rotate-90'>
          <ArrowDown />
        </div>
        <div className='flex-1 p-[2rem_1rem] text-center'>
          <p className='font-montserrat text-primary bg-secondary inline-flex h-8 w-8 items-center justify-center rounded-full font-semibold'>
            3
          </p>
          <h3>Planning</h3>
          <p>
            Next, we&apos;ll schedule a detailed discovery call to outline the
            project scope and deliver a tailored proposal for your approval.
          </p>
        </div>
        <div className='flex items-center justify-center lg:rotate-270'>
          <ArrowDown />
        </div>
        <div className='flex-1 p-[2rem_1rem] text-center'>
          <p className='font-montserrat text-primary bg-secondary inline-flex h-8 w-8 items-center justify-center rounded-full font-semibold'>
            4
          </p>
          <h3>Execution</h3>
          <p>
            Our team will diligently work on your project, ensuring completion
            on time and in accordance with your expectations.
          </p>
        </div>
      </div>
    </Container>
  )
}

export default OurProcess
