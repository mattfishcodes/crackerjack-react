import Container from '@/components/Container'
import CTAButton from '@/components/CTAButton'
import { type ServicesPageData } from '@/sanity/queries/servicesPage'

type ConsultPromoProps = {
  data: ServicesPageData['consultPromo']
}

export default function ConsultPromo({ data }: ConsultPromoProps) {
  return (
    <Container className='text-secondary-foreground text-center'>
      <h1 className=''>{data.heading}</h1>
      <p className=''>{data.body}</p>

      <CTAButton cta={data.cta} variant='dark' />
    </Container>
  )
}
