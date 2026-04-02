import Container from '@/components/Container'
import CTAButton from '@/components/CTAButton'
import { type HomePageData } from '@/sanity/queries/homePage'

type CoursePromoSectionProps = {
  data: HomePageData['coursePromo']
}

export default function CoursePromoSection({ data }: CoursePromoSectionProps) {
  return (
    <Container className='bg-primary'>
      <p className='text-primary-foreground'>{data.heading}</p>
      <p className='text-white'>{data.primaryBody}</p>
      <CTAButton cta={data.primaryCta} />
      <p className='text-white'>{data.secondaryBody}</p>
      <CTAButton cta={data.secondaryCta} />
    </Container>
  )
}
