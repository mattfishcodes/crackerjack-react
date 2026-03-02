import Container from '@/components/Container'
import PageHeader from '@/components/PageHeader'
import ServiceDescription from './components/ServiceDescription'
import RetainerPackages from './components/RetainerPackages'
import ServicesList from './components/ServicesList'
import SoftwareList from './components/SoftwareList'
import ScheduleButton from '@/components/ScheduleButton'
import CourseAdvert from './components/CourseAdvert'
import { type Metadata } from 'next'
import ReviewsCarousel from './components/ReviewsCarousel'
import { client } from '@/sanity/client'
import { type SanityDocument } from 'next-sanity'
import Link from 'next/link'
import { SquareArrowOutUpRight } from 'lucide-react'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Services',
}

const HERO_QUERY =
  '*[_type == "hero"]{_id, heading, description, buttonText, buttonLink}'
const REVIEWS_QUERY = `*[_type == "review"]|order(_createdAt){_id, name, body}`

export default async function Services() {
  const hero = await client.fetch<SanityDocument[]>(HERO_QUERY)

  const reviews = await client.fetch<SanityDocument[]>(REVIEWS_QUERY)
  return (
    <main>
      <Container className='bg-primary text-center'>
        <h1 className='text-primary-foreground'>{hero[0].heading}</h1>
        <p className='text-white'>{hero[0].description}</p>

        <Link
          href={hero[0].buttonLink}
          className='text-secondary-foreground bg-secondary border-secondary hover:border-primary focus:border-primary active:border-primary font-titillium-web inline-block cursor-pointer rounded-3xl border-4 px-8 py-4 text-2xl font-bold transition-all hover:bg-white focus:bg-white active:bg-white'
        >
          {hero[0].buttonText}
        </Link>
      </Container>

      <PageHeader>Services</PageHeader>

      <Container>
        <ServiceDescription />
      </Container>

      <Container className='bg-secondary text-foreground'>
        <RetainerPackages />
      </Container>

      <Container className='text-center'>
        <h3>Ready to Get Started?</h3>
        <p>
          Invest in your business&apos;s success with a flexible hourly retainer
          package from Crackerjack Solutions.
          <br />
          Contact us today to schedule your free consultation and discover how
          we can help you achieve your goals.
        </p>
        <ScheduleButton color='light' />
      </Container>

      <Container className='text-foreground bg-gray-100'>
        <ServicesList />
      </Container>

      <Container>
        <ReviewsCarousel reviews={reviews} />
      </Container>

      <Container className='from-secondary to-primary bg-linear-30 from-85% to-95%'>
        <SoftwareList />
      </Container>
    </main>
  )
}
