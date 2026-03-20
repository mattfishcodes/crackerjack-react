import { type SanityDocument } from 'next-sanity'

import Container from '@/components/Container'
import Separator from '@/components/Separator'
import { client } from '@/sanity/client'

const servicesQuery = `*[_type == "service"]{_id, title, subtitle, features, slug}`

export default async function ServicesDescription() {
  const services = await client.fetch<SanityDocument[]>(servicesQuery)
  return (
    <Container>
      <div className='flex flex-col gap-4 lg:flex-row lg:flex-wrap'>
        {services.map((s) => (
          <div
            key={s._id}
            id={s.slug.current}
            className='bg-primary flex-4/9 rounded-xl p-4 text-white lg:p-8'
          >
            <h3 className='text-primary-foreground font-semibold'>{s.title}</h3>
            <p>{s.subtitle}</p>
            <Separator variant='light' />
            {s.features.map((f: SanityDocument) => (
              <p key={f._key}>
                <strong className='text-primary-foreground'>{f.heading}</strong>
                <br />
                {f.description}
              </p>
            ))}
          </div>
        ))}
      </div>
    </Container>
  )
}
