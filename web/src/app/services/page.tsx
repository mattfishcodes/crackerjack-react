import Container from '@/components/Container'
import PageHeader from '@/components/PageHeader'
import ServiceDescription from './components/ServiceDescription'
import RetainerPackages from './components/RetainerPackages'
import ServicesList from './components/ServicesList'
import SoftwareList from './components/SoftwareList'
import ReviewsCarousel from './components/ReviewsCarousel'
import ScheduleButton from '@/components/ScheduleButton'
import CourseAdvert from './components/CourseAdvert'
import { type Metadata } from 'next'
import { client } from '@/sanity/client'
import { type SanityDocument } from 'next-sanity'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Services',
}

const REVIEWS_QUERY = `*[_type == "review"]|order(_createdAt){_id, name, body}`

export default async function Services() {
  const reviews = await client.fetch<SanityDocument[]>(REVIEWS_QUERY)

  return (
    <main>
      <Container className='bg-primary'>
        <CourseAdvert />
      </Container>
      <Container className='text-center'>
        <h3>Interested in Exploring How our Services Can Benefit You?</h3>
        <p>
          Schedule your complimentary 30 minute call below.
          <br />
          Let&apos;s explore how to navigate life&apos;s unpredictability
          together and find that equilibrium you&apos;re searching for.
        </p>
        <ScheduleButton color='light' />
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

      <Container className='from-secondary to-primary bg-linear-30 from-85% to-95%'>
        <SoftwareList />
      </Container>

      <Container>
        <ReviewsCarousel reviews={reviews} />
      </Container>
    </main>
  )
}
