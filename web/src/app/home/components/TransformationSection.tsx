import Container from '@/components/Container'
import { client } from '@/sanity/client'

const query = '*[_type == "homePage"][0]{transformation}'

export default async function TransformationSection() {
  const { transformation } = await client.fetch(query)

  return (
    <>
      <Container className='bg-secondary text-center'>
        <span className='text-3xl'>{transformation.heading}</span>
      </Container>

      <Container>
        {transformation.benefits.map((b: string) => (
          <p key={b}>{b}</p>
        ))}
      </Container>
    </>
  )
}
