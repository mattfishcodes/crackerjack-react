import Container from '@/components/Container'
import Separator from '@/components/Separator'
import { type ServicesPageData } from '@/sanity/queries/servicesPage'

type RetainerServicesProps = {
  data: ServicesPageData['retainerServices']
}

export default function RetainerServices({ data }: RetainerServicesProps) {
  return (
    <Container className='bg-gray-200'>
      <div className='text-center'>
        <h5>{data.heading}</h5>
        <p>{data.body}</p>
      </div>
      <div className='flex flex-row flex-wrap gap-4'>
        {data.items.map((item) => {
          return (
            <div key={item.title} className='min-w-75 flex-1 py-4'>
              <h3>{item.title}</h3>
              <Separator variant='dark' />
              <ul className='list-none'>
                {item.items.map((i) => {
                  return (
                    <li
                      key={i}
                      className='bg-[url(/icon.svg)] bg-size-[10px_auto] bg-position-[0_7px] bg-no-repeat pl-4'
                    >
                      {i}
                    </li>
                  )
                })}
                <li className='bg-[url(/icon.svg)] bg-size-[10px_auto] bg-position-[0_7px] bg-no-repeat pl-4'>
                  And More...
                </li>
              </ul>
            </div>
          )
        })}
      </div>
    </Container>
  )
}
