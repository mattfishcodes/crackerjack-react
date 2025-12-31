'use client'

import Link from 'next/link'
import Container from '@/components/Container'
import { Cog, List, Waypoints } from 'lucide-react'
import Separator from '@/components/Separator'

const links = [
  {
    name: 'Systems Analysis',
    href: '/services#systems-analysis',
    icon: <List size={48} />,
  },
  {
    name: 'CRM Setup',
    href: '/services#crm-setup',
    icon: <Cog size={48} />,
  },
  {
    name: 'Website Refresh',
    href: '/services#website-refresh',
    icon: <Waypoints size={48} />,
  },
]

const ServicesLinks = () => {
  return (
    <Container className='bg-gray-100'>
      <h3 className='text-center font-semibold'>Services</h3>

      <Separator variant='dark' />

      <div className='flex w-full flex-col gap-2 lg:flex-row'>
        {links.map((link, i) => {
          return (
            <Link
              key={i}
              href={link.href}
              className='group bg-primary text-secondary hover:bg-secondary focus:bg-secondary active:bg-secondary flex flex-row items-center rounded-xl p-[1.5rem_1rem] lg:min-h-60 lg:flex-1/3 lg:flex-col lg:justify-center lg:transition-all'
            >
              <span className='group-hover:text-primary group-focus:text-primary group-active:text-primary mr-1 flex items-center justify-center lg:m-0 lg:transition-all'>
                {link.icon}
              </span>
              <span className='group-hover:text-primary group-focus:text-primary group-active:text-primary text-2xl lg:transition-all'>
                {link.name}
              </span>
            </Link>
          )
        })}
      </div>
    </Container>
  )
}

export default ServicesLinks
