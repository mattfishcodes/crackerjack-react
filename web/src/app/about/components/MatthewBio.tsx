import { client } from '@/sanity/client'
import { SanityDocument } from 'next-sanity'

export const dynamic = 'force-static'

const BIO_QUERY =
  '*[_type == "bio" && name == "Matthew Fisher"]{_id, name, body}'

export default async function MatthewBio() {
  const bio = (await client.fetch<SanityDocument[]>(BIO_QUERY))[0]

  const paragraphs: string[] = bio.body
    .split('\n')
    .filter((p: string) => p.length > 0)

  return (
    <>
      <h2>{bio.name}</h2>
      {paragraphs.map((p) => (
        <p key={p}>{p}</p>
      ))}
    </>
  )
}
