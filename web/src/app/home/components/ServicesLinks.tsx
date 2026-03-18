import Separator from '@/components/Separator'
import { client } from '@/sanity/client'
import { type SanityDocument } from 'next-sanity'
import Link from 'next/link'

const servicesQuery = `*[_type == "service"]{_id, description, slug, title}`

const headingQuery = `*[_type == "homePage"][0]{"heading": servicesHeading}`

export default async function ServicesLinks() {
  const services: SanityDocument[] = await client.fetch(servicesQuery)

  const { heading } = await client.fetch(headingQuery)

  return (
    <>
      <h3 className='text-center font-semibold'>{heading}</h3>

      <Separator variant='dark' />

      <div className='flex w-full flex-col gap-2 lg:flex-row'>
        {services.map((s) => (
          <div key={s._id}>
            <span>{s.title}</span>
            <p>{s.description}</p>
            <Link href={'/services#' + s.slug.current}>Learn More</Link>
          </div>
        ))}
      </div>
    </>
  )
}
