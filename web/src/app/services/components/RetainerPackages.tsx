import Container from '@/components/Container'
import Separator from '@/components/Separator'
import { client } from '@/sanity/client'
import { type SanityDocument } from 'next-sanity'

const query = `*[_type == "retainerPackage"]{_id, name, hours, price, description}`

export default async function RetainerPackages() {
  const packages = await client.fetch<SanityDocument[]>(query)
  return (
    <Container>
      <div className='flex justify-center'>
        <div>
          <h3>Need Ongoing Support? Retainer Packages Have You Covered.</h3>
          <p>
            Every business is different — and your support should be too. Our
            hourly retainer packages give you flexible, expert help exactly when
            you need it. No full-time hire. No wasted hours. Just the right
            amount of support for where you are right now.
          </p>
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
          <div className='px-4'>
            Hourly packages expire 6 months from the date of purchase, and any
            remaining hours are lost. If you purchase additional hours prior to
            the expiration of existing hours, they will be added to the existing
            package, and the expiration date will be extended to 6 months from
            the last purchase.
          </div>
          <Separator variant='dotted' />
        </div>
      </div>
    </Container>
  )
}
