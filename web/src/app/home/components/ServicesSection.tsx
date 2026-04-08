import Link from 'next/link'

import Container from '@/components/Container'
import Separator from '@/components/Separator'
import { type HomePageData } from '@/sanity/queries/homePage'

type ServicesSectionProps = {
  data: HomePageData['services']
}

export default async function ServicesSection({ data }: ServicesSectionProps) {
  return (
    <Container>
      <h3 className='text-center font-semibold'>{data.heading}</h3>

      <Separator variant='dark' />

      <div className='flex flex-col gap-5 lg:flex-row'>
        {data.items.map((item) => (
          <div
            key={item.title}
            className='bg-primary flex flex-col items-center justify-center rounded-2xl px-8 py-16 text-white lg:flex-1'
          >
            <p className='text-center'>{item.description}</p>
            <Link
              href={item.href}
              className='bg-secondary text-secondary-foreground rounded-2xl px-4 py-2 transition-all hover:scale-105 hover:bg-white active:scale-95 active:bg-white'
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </Container>
  )
}
