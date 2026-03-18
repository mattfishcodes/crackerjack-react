import Container from '@/components/Container'
import CTAButton from '@/components/CTAButton'
import { client } from '@/sanity/client'

const query = `*[_type == "homePage"][0]{courseCta}`

const courseButtonQuery = `*[_type == "cta" && name == "Course"][0]{_id, buttonLink, buttonText, buttonSubtext, name}`

const checklistButtonQuery = `*[_type == "cta" && name == "Chaos-Free Checklist"][0]{_id, buttonLink, buttonText, buttonSubtext, name}`

export default async function CallToActionSection() {
  const { courseCta } = await client.fetch(query)

  const courseButton = await client.fetch(courseButtonQuery)
  const checklistButton = await client.fetch(checklistButtonQuery)

  return (
    <Container className='bg-primary'>
      <p className='text-primary-foreground'>{courseCta.heading}</p>
      <p className='text-white'>{courseCta.description}</p>
      <CTAButton cta={courseButton} />
      <p className='text-white'>Not ready to book yet? Start here →</p>
      <CTAButton cta={checklistButton} />
    </Container>
  )
}
