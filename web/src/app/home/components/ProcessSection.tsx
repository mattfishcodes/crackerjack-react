import { ArrowDown } from 'lucide-react'

import Container from '@/components/Container'
import Separator from '@/components/Separator'
import { type HomePageData } from '@/sanity/queries/homePage'

type ProcessSectionProps = {
  data: HomePageData['process']
}

export default function ProcessSection({ data }: ProcessSectionProps) {
  return (
    <Container>
      <h3 className='text-center'>{data.heading}</h3>

      <Separator variant='dark' />

      <div className='flex flex-col lg:flex-row'>
        {data.steps.map((s, i: number) => (
          <div key={s.title}>
            <div className='flex-1 px-4 py-4 text-center'>
              <p className='font-montserrat text-secondary-foreground bg-secondary inline-flex h-8 w-8 items-center justify-center rounded-full font-semibold'>
                {i + 1}
              </p>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </div>
            {i < data.steps.length - 1 && (
              <div className='flex items-center justify-center lg:-rotate-90'>
                <ArrowDown />
              </div>
            )}
          </div>
        ))}
      </div>
    </Container>
  )
}
