import { Suspense } from 'react'

import { type SanityDocument } from 'next-sanity'

import Image from 'next/image'

import { client } from '@/sanity/client'
import { Skeleton } from '@/shadcn/ui/skeleton'

export const dynamic = 'force-static'

const BIO_QUERY =
  '*[_type == "bio" && name == "Christine Warner"]{_id, name, body}'

export default async function ChristineBio() {
  const bio = (await client.fetch<SanityDocument[]>(BIO_QUERY))[0]

  const paragraphs: string[] = bio.body
    .split('\n')
    .filter((p: string) => p.length > 0)

  return (
    <>
      <h2>{bio.name}</h2>
      <div>
        <div className='mb-4 w-full md:float-left md:mr-4 md:w-60'>
          <Suspense fallback={<Skeleton className='aspect-square w-full' />}>
            <Image
              src='/christine-headshot.png'
              alt='Crackerjack Solutions founder Christine Warner'
              width={500}
              height={500}
              sizes='(max-width: 768px) 200px, 400px'
              priority
              loading='eager'
            />
          </Suspense>
        </div>
        <div>
          {paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </>
  )
}
