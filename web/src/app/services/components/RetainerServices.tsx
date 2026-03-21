import { type SanityDocument } from 'next-sanity'

import Container from '@/components/Container'
import Separator from '@/components/Separator'
import { client } from '@/sanity/client'

const servicesQuery = `*[_type == "retainerService"]|order(order asc){_id, title, features}`

export default async function RetainerServices() {
  const services = await client.fetch(servicesQuery)
  return (
    <Container className='bg-gray-200'>
      <div className='flex flex-row flex-wrap gap-4'>
        {services.map((s: SanityDocument) => {
          return (
            <div key={s._id} className='min-w-75 flex-1 py-4'>
              <h3>{s.title}</h3>
              <Separator variant='dark' />
              <ul className='list-none'>
                {s.features.map((f: string) => {
                  return (
                    <li
                      key={f}
                      className='bg-[url(/icon.svg)] bg-size-[10px_auto] bg-position-[0_7px] bg-no-repeat pl-4'
                    >
                      {f}
                    </li>
                  )
                })}
                <li className='bg-[url(/icon.svg)] bg-size-[10px_auto] bg-position-[0_7px] bg-no-repeat pl-4'>
                  And More...
                </li>
              </ul>
            </div>
          )
        })}
      </div>
    </Container>
  )
}
