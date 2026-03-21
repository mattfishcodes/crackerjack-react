import { type SanityDocument } from 'next-sanity'

import Container from '@/components/Container'
import Separator from '@/components/Separator'
import { client } from '@/sanity/client'

const query = `*[_type == "retainerPackage"]{_id, name, hours, price, description}`

const sectionQuery = `*[_type == "servicesPage"][0]{"retainerSection":retainer, transformation}`

export default async function RetainerPackages() {
  const packages = await client.fetch<SanityDocument[]>(query)

  const { retainerSection } = await client.fetch(sectionQuery)

  return (
    <Container>
      <div className='flex justify-center'>
        <div>
          <h3>{retainerSection.heading}</h3>
          <p>{retainerSection.description}</p>
          <Separator variant='dark' />
          <div className='flex items-stretch gap-4'>
            {packages.map((p) => (
              <div
                key={p._id}
                className='bg-primary flex-1 rounded-3xl p-8 text-white'
              >
                <h4 className='font-bold'>{p.name}</h4>
                <p>{p.hours}</p>
                <p className='text-primary-foreground font-bold'>${p.price}</p>
                <p>{p.description}</p>
              </div>
            ))}
          </div>
          <Separator variant='dotted' />
          <div className='px-4'>{retainerSection.disclaimer}</div>
          <Separator variant='dotted' />
        </div>
      </div>
      <div>
        <h4>{retainerSection.transformation.heading}</h4>
        <ul>
          {retainerSection.transformation.benefits.map((ben: string) => (
            <li key={ben}>{ben}</li>
          ))}
        </ul>
      </div>
    </Container>
  )
}
