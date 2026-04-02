import Container from '@/components/Container'
import Separator from '@/components/Separator'
import { type ServicesPageData } from '@/sanity/queries/servicesPage'

type RetainerPackagesProps = {
  data: ServicesPageData['retainerPackages']
}

export default function RetainerPackages({ data }: RetainerPackagesProps) {
  return (
    <Container>
      <div className='flex justify-center'>
        <div>
          <h3>{data.heading}</h3>
          <p>{data.body}</p>
          <Separator variant='dark' />
          <div className='flex items-stretch gap-4'>
            {data.items.map((item) => (
              <div
                key={item.title}
                className='bg-primary flex-1 rounded-3xl p-8 text-white'
              >
                <h4 className='font-bold'>{item.title}</h4>
                <p>{item.hours}</p>
                <p className='text-primary-foreground font-bold'>
                  ${item.price}
                </p>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
          <Separator variant='dotted' />
          <div className='px-4'>{data.disclaimer}</div>
          <Separator variant='dotted' />
        </div>
      </div>
    </Container>
  )
}
