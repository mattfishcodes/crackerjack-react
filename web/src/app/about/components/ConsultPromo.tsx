import Container from '@/components/Container'
import CTAButton from '@/components/CTAButton'
import { type AboutPageData } from '@/sanity/queries/aboutPage'

type ConsultPromoProps = {
  data: AboutPageData['consultPromo']
}

export default function ConsultPromo({ data }: ConsultPromoProps) {
  return (
    <Container>
      <h3>{data.heading}</h3>
      <CTAButton cta={data.cta} />
    </Container>
  )
}
