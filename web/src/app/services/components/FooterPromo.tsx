import Container from '@/components/Container'
import CTAButton from '@/components/CTAButton'
import { type ServicesPageData } from '@/sanity/queries/servicesPage'

type FooterPromoProps = {
  data: ServicesPageData['footerPromo']
}

export default function FooterPromo({ data }: FooterPromoProps) {
  return (
    <Container>
      <h6>{data.heading}</h6>
      <p>{data.primaryBody}</p>
      <CTAButton cta={data.primaryCta} />

      <p>{data.secondaryBody}</p>
      <CTAButton cta={data.secondaryCta} />
    </Container>
  )
}
