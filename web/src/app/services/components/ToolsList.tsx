import Container from '@/components/Container'
import { type ServicesPageData } from '@/sanity/queries/servicesPage'

type SoftwareListProps = {
  data: ServicesPageData['tools']
}

export default function ToolsList({ data }: SoftwareListProps) {
  return (
    <Container className='from-secondary to-primary bg-linear-30 from-85% to-95%'>
      <div className='py-8 text-center'>
        <h4>{data.heading}</h4>
        <p>{data.body}</p>
        <div className='font-montserrat flex max-h-100 flex-col flex-wrap items-start justify-center leading-6'>
          {data.items.sort().map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </div>
    </Container>
  )
}
