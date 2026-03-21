import { type Metadata } from 'next'
import { type SanityDocument } from 'next-sanity'

import Container from '@/components/Container'
import CTAButton from '@/components/CTAButton'
import PageHeader from '@/components/PageHeader'
import { client } from '@/sanity/client'

import RetainerPackages from './components/RetainerPackages'
import RetainerServices from './components/RetainerServices'
import ReviewsCarousel from './components/ReviewsCarousel'
import ServicesDescription from './components/ServicesDescription'
import SoftwareList from './components/SoftwareList'

export const metadata: Metadata = {
  title: 'Services',
}

const HERO_QUERY =
  '*[_type == "hero"]{_id, heading, description, buttonText, buttonLink}'

const scheduleQuery = `*[_type == "cta" && name == 'Schedule Call']{buttonLink, buttonText, buttonSubtext, name}`

const REVIEWS_QUERY = `*[_type == "review"]|order(order asc){_id, name, body}`

const reviewsHeadingQuery = `*[_type == "servicesPage"][0]{reviewsHeading}`

export default async function Services() {
  const hero = await client.fetch<SanityDocument[]>(HERO_QUERY)

  const cta = await client.fetch<SanityDocument[]>(scheduleQuery)

  const { reviewsHeading } = await client.fetch(reviewsHeadingQuery)

  const reviews = await client.fetch<SanityDocument[]>(REVIEWS_QUERY)
  return (
    <main>
      <Container className='text-secondary-foreground text-center'>
        <h1 className=''>{hero[0].heading}</h1>
        <p className=''>{hero[0].description}</p>

        <CTAButton cta={cta[0]} />
      </Container>

      <PageHeader>Services</PageHeader>

      <ServicesDescription />

      <RetainerPackages />

      <Container className='text-center'>
        <h3>Ready to Get Started?</h3>
        <p>
          Invest in your business&apos;s success with a flexible hourly retainer
          package from Crackerjack Solutions.
          <br />
          Contact us today to schedule your free consultation and discover how
          we can help you achieve your goals.
        </p>
        <CTAButton cta={cta[0]} />
      </Container>

      <RetainerServices />

      <ReviewsCarousel heading={reviewsHeading} reviews={reviews} />

      <Container className='from-secondary to-primary bg-linear-30 from-85% to-95%'>
        <SoftwareList />
      </Container>
    </main>
  )
}
