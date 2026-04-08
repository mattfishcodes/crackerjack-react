import Image from 'next/image'

import Container from '@/components/Container'
import CTAButton from '@/components/CTAButton'
import { type HomePageData } from '@/sanity/queries/homePage'

type MoxiePromoSectionProps = {
  data: HomePageData['moxiePromo']
}

export default function MoxiePromoSection({ data }: MoxiePromoSectionProps) {
  return (
    <>
      <Container className='bg-secondary text-center'>
        <p>{data.heading}</p>
        <CTAButton
          cta={{
            buttonLink: data.cta.buttonLink,
            buttonText: data.cta.buttonText,
          }}
        />
        <div className='flex h-auto items-center justify-center'>
          <Image
            className='h-20 w-20'
            src={data.logoUrl}
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
