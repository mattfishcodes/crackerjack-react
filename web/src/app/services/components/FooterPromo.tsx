import Container from '@/components/Container'
import CTAButton from '@/components/CTAButton'
import { type ServicesPageData } from '@/sanity/queries/servicesPage'

type FooterPromoProps = {
  data: ServicesPageData['footerPromo']
}

export default function FooterPromo({ data }: FooterPromoProps) {
  return (
    <Container className='text-center'>
      <h6>{data.heading}</h6>
      <p>{data.primaryBody}</p>
      <CTAButton cta={data.primaryCta} variant='dark' />

      <p>{data.secondaryBody}</p>
      <CTAButton cta={data.secondaryCta} variant='dark' />
    </Container>
  )
}
