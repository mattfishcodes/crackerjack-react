import Image from 'next/image'

import Container from '@/components/Container'
import { type AboutPageData } from '@/sanity/queries/aboutPage'

type MatthewBioProps = {
  data: AboutPageData['matthew']
}

export default async function MatthewBio({ data }: MatthewBioProps) {
  const paragraphs: string[] = data.bio
    .split('\n')
    .filter((p: string) => p.length > 0)

  return (
    <>
      <Container className='bg-secondary text-secondary-foreground'>
        <h2>{data.name}</h2>
        {paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </Container>
      <Container>
        <div className='flex justify-center'>
          <div className='w-full md:w-[30%]'>
            <Image
              className=''
              src={data.certificates[0].imageUrl}
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
