import Container from '@/components/Container'
import Flipbox from '@/components/Flipbox'
import Separator from '@/components/Separator'
import { type HomePageData } from '@/sanity/queries/homePage'

type ServicesSectionProps = {
  data: HomePageData['services']
}

export default async function ServicesSection({ data }: ServicesSectionProps) {
  return (
    <Container>
      <h3 className='text-center font-semibold'>{data.heading}</h3>

      <Separator variant='dark' />

      <div className='flex flex-nowrap gap-5'>
        {data.items.map((item) => (
          <Flipbox key={item.title} data={item} />
        ))}
      </div>
    </Container>
  )
}
