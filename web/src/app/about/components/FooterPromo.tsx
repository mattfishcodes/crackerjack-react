import Container from '@/components/Container'
import CTAButton from '@/components/CTAButton'
import { type AboutPageData } from '@/sanity/queries/aboutPage'

type FooterPromoProps = {
  data: AboutPageData['footerPromo']
}

export default function FooterPromo({ data }: FooterPromoProps) {
  return (
    <Container className='bg-secondary text-foreground text-center'>
      <h6>{data.heading}</h6>
      <p>{data.body}</p>
      <CTAButton cta={data.primaryCta} />
      <CTAButton cta={data.secondaryCta} />
    </Container>
  )
}
