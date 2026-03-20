import Image from 'next/image'

import Container from '@/components/Container'
import { client } from '@/sanity/client'

const query = `*[_type == "homePage"][0]{
    promo {
        text,
        ctaText,
        ctaLink,
        "imageUrl": image.asset->url
    }
}`

export default async function MoxiePromoSection() {
  const { promo } = await client.fetch(query)

  return (
    <>
      <Container className='bg-secondary'>
        <p>{promo.text}</p>
        <button>{promo.ctaText}</button>
        <div className='h-auto w-20'>
          <Image
            src={promo.imageUrl}
            alt=''
            width={256}
            height={256}
            unoptimized
          />
        </div>
      </Container>
    </>
  )
}
