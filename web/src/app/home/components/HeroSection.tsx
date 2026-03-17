import Image from 'next/image'
import Separator from '@/components/Separator'
import { client } from '@/sanity/client'

const heroQuery = `*[_type == "homePage"][0]{hero}`

const HeroSection = async () => {
  const content = await client.fetch(heroQuery)

  const hero = content.hero
  return (
    <>
      <div className='flex flex-col items-center justify-between gap-4 text-center lg:flex-row'>
        <div className='w-full md:max-w-1/4'>
          <Image
            src='/images/icon-square.png'
            alt=''
            width={800}
            height={800}
            sizes='(max-width: 768px) 200px, 400px'
            priority
            loading='eager'
          />
        </div>
        <div>
          <h1>{hero.title}</h1>
          <Separator variant='light' />
          <h2>{hero.headline}</h2>
          <p>{hero.subtext}</p>
        </div>
      </div>
    </>
  )
}

export default HeroSection
