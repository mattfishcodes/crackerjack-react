import Container from '@/components/Container'
import { type HomePageData } from '@/sanity/queries/homePage'

type BenefitsSectionProps = {
  data: HomePageData['benefits']
}

export default function BenefitsSection({ data }: BenefitsSectionProps) {
  return (
    <>
      <Container className='bg-secondary text-center'>
        <span className='text-3xl'>{data.heading}</span>
      </Container>

      <Container>
        {data.items.map((b: string) => (
          <p key={b}>{b}</p>
        ))}
      </Container>
    </>
  )
}
