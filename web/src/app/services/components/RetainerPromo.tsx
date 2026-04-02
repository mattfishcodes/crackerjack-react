import Container from '@/components/Container'
import CTAButton from '@/components/CTAButton'
import { type ServicesPageData } from '@/sanity/queries/servicesPage'

type RetainerPromoProps = {
  data: ServicesPageData['retainerPromo']
}

export default function RetainerPromo({ data }: RetainerPromoProps) {
  return (
    <Container>
      <h3>{data.heading}</h3>
      <p>{data.body}</p>
      <CTAButton cta={data.cta} />
    </Container>
  )
}
