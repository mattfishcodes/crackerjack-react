import { ArrowDown } from 'lucide-react'
import Separator from '@/components/Separator'
import Container from '@/components/Container'
import { client } from '@/sanity/client'
import { type SanityDocument } from 'next-sanity'

const query = `*[_type == "homePage"][0]{process}`

export default async function OurProcessSection() {
  const { process } = await client.fetch(query)

  return (
    <Container>
      <h3 className='text-center'>Our Process</h3>

      <Separator variant='dark' />

      <div className='flex flex-col lg:flex-row'>
        {process.steps.map((s: SanityDocument, i: number) => (
          <div key={s._key}>
            <div className='flex-1 px-4 py-4 text-center'>
              <p className='font-montserrat text-secondary-foreground bg-secondary inline-flex h-8 w-8 items-center justify-center rounded-full font-semibold'>
                {i + 1}
              </p>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </div>
            {i < process.steps.length - 1 && (
              <div className='flex items-center justify-center lg:-rotate-90'>
                <ArrowDown />
              </div>
            )}
          </div>
        ))}
      </div>
    </Container>
  )
}
