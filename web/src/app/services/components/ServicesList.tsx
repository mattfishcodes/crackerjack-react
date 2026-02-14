'use client'

import Separator from '@/components/Separator'

const services = [
  {
    title: 'Projects',
    list: [
      'Create Detailed Project Plans',
      'Lead Initial Kickoff Call with Stakeholders',
      'Lead Regular Check In Calls',
      'Manage Communication, Timeline, Change Requests, Status and Deliverables',
      'Maximize Productivity, Quality and Stakeholder Satisfaction',
      'And more…',
    ],
  },
  {
    title: 'Systems',
    list: [
      'Manage Scheduling',
      'Manage Invoicing',
      'Manage Client Onboarding',
      'Review, Update and Create Processes',
      'Create SOPs & Playbooks for Systems',
      'And more…',
    ],
  },
  {
    title: 'Operations',
    list: [
      'Review and Optimize existing Business Processes and Tools',
      'Create SOPs and Playbooks for Operations',
      'Manage CRM, Email and Calendar',
      'Create and/or Update Automations',
      'Develop Digital File Systems',
      'And more…',
    ],
  },
]

const ServicesList = () => {
  return (
    <div className='flex flex-row flex-wrap gap-2'>
      {services.map((s, i) => {
        return (
          <div key={i} className='min-w-75 flex-1 py-4'>
            <h3>{s.title}</h3>
            <Separator variant='dark' />
            <ul className='list-none'>
              {s.list.map((value, i) => {
                return (
                  <li
                    key={i}
                    className='bg-[url(/icon.svg)] bg-size-[10px_auto] bg-position-[0_7px] bg-no-repeat pl-4'
                  >
                    {value}
                  </li>
                )
              })}
            </ul>
          </div>
        )
      })}
    </div>
  )
}

export default ServicesList
