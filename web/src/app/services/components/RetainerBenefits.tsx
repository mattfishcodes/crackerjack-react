import Container from '@/components/Container'
import { type ServicesPageData } from '@/sanity/queries/servicesPage'

type RetainerBenefitsProps = {
  data: ServicesPageData['retainerBenefits']
}

export default function RetainerBenefits({ data }: RetainerBenefitsProps) {
  return (
    <Container className='text-center'>
      <h4>{data.heading}</h4>
      <ul>
        {data.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Container>
  )
}
