import Container from '@/components/Container'
import Separator from '@/components/Separator'
import { type ServicesPageData } from '@/sanity/queries/servicesPage'

type ServicesCardsProps = {
  data: ServicesPageData['servicesCards']
}

export default function ServicesCards({ data }: ServicesCardsProps) {
  return (
    <Container>
      <div className='flex flex-col gap-4 lg:flex-row lg:flex-wrap'>
        {data.map((d) => (
          <div
            key={d.title}
            id={d.slug.current}
            className='bg-primary flex-4/9 rounded-xl p-4 text-white lg:p-8'
          >
            <h3 className='text-primary-foreground font-semibold'>{d.title}</h3>
            <p>{d.subtitle}</p>
            <Separator variant='light' />
            {d.features.map((f) => (
              <p key={f.heading}>
                <strong className='text-primary-foreground'>{f.heading}</strong>
                <br />
                {f.body}
              </p>
            ))}
          </div>
        ))}
      </div>
    </Container>
  )
}
