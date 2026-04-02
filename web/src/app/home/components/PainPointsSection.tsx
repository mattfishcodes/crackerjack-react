import Container from '@/components/Container'
import { type HomePageData } from '@/sanity/queries/homePage'

type PainPointsSectionProps = {
  data: HomePageData['painPoints']
}

export default function PainPointsSection({ data }: PainPointsSectionProps) {
  return (
    <Container>
      <h3>{data.heading}</h3>
      <ul>
        {data.items.map((p: string) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </Container>
  )
}
