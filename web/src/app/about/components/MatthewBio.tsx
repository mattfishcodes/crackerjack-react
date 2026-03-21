import { type SanityDocument } from 'next-sanity'

import Image from 'next/image'

import Container from '@/components/Container'
import { client } from '@/sanity/client'

const query = `*[_type == "person" && name == "Matthew Fisher"]{_id, name, bio, certificates[] {
    "url": asset->url
  }}`

export default async function MatthewBio() {
  const person = (await client.fetch<SanityDocument[]>(query))[0]

  const paragraphs: string[] = person.bio
    .split('\n')
    .filter((p: string) => p.length > 0)

  return (
    <>
      <Container className='bg-primary text-white'>
        <h2>{person.name}</h2>
        {paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </Container>
      <Container>
        <div className='flex justify-center'>
          <div className='w-full md:w-[30%]'>
            <Image
              className=''
              src={person.certificates[0].url}
              alt=''
              width={300}
              height={300}
              sizes='(max-width: 768px) 200px, 300px'
              unoptimized
            />
          </div>
        </div>
      </Container>
    </>
  )
}
