import { Suspense } from 'react'

import Image from 'next/image'

import Container from '@/components/Container'
import { client } from '@/sanity/client'
import { Skeleton } from '@/shadcn/ui/skeleton'

const query = `*[_type == "person" && name == "Christine Warner"] {
  certificates[] {
    "url": asset->url
  }
}`

export default async function ChristineCerts() {
  const { certificates } = (await client.fetch(query))[0]

  return (
    <Container>
      <div className='flex flex-wrap items-stretch justify-center'>
        {certificates.map((c: { url: string }, i: number) => (
          <div
            key={i}
            className='flex aspect-square flex-[49%] items-center md:flex-1'
          >
            <Suspense fallback={<Skeleton className='size-full' />}>
              <Image
                src={c.url}
                alt=''
                width={200}
                height={200}
                sizes='(max-width: 768px) 200px, 300px'
                loading='eager'
                unoptimized
              />
            </Suspense>
          </div>
        ))}
      </div>
    </Container>
  )
}
