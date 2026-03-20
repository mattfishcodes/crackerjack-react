import { type SanityDocument } from 'next-sanity'

import Container from '@/components/Container'
import Flipbox from '@/components/Flipbox'
import Separator from '@/components/Separator'
import { client } from '@/sanity/client'

const servicesQuery = `*[_type == "service"]{_id, description, slug, title}`

const headingQuery = `*[_type == "homePage"][0]{"heading": servicesHeading}`

export default async function ServicesLinks() {
  const services: SanityDocument[] = await client.fetch(servicesQuery)

  const { heading } = await client.fetch(headingQuery)

  console.log(services)

  return (
    <Container>
      <h3 className='text-center font-semibold'>{heading}</h3>

      <Separator variant='dark' />

      <div className='flex flex-nowrap gap-5'>
        {services.map((s) => (
          <Flipbox
            key={s._id}
            title={s.title}
            description={s.description}
            slug={s.slug.current}
          />
        ))}
      </div>
    </Container>
  )
}
