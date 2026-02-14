import Container from '@/components/Container'
import TitleSection from './home/components/TitleSection'
import PaintPointsSection from './home/components/PainPointsSection'
import ServicesLinks from './home/components/ServicesLinks'
import OurProcess from './home/components/OurProcess'
import ScheduleButton from '@/components/ScheduleButton'
import { Metadata } from 'next'
import Script from 'next/script'
import { OnlineBusiness, WithContext } from 'schema-dts'
import ReviewsCarousel from './home/components/ReviewsCarousel'
import { client } from '@/sanity/client'
import { type SanityDocument } from 'next-sanity'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Home | Crackerjack Solutions',
}

const REVIEWS_QUERY = `*[_type == "review"]|order(_createdAt){_id, name, body}`

export default async function Home() {
  const reviews = await client.fetch<SanityDocument[]>(REVIEWS_QUERY)

  const jsonLd: WithContext<OnlineBusiness> = {
    '@context': 'https://schema.org',
    '@type': 'OnlineStore',
    name: 'Crackerjack Solutions',
    description:
      'Crackerjack Solutions | Empowering Entrepreneurs and Business Leaders | Project, Systems and Operations Management',
    url: 'https://www.crackerjacksolutions.com',
    logo: 'https://www.crackerjacksolutions.com/icon.svg',
    legalName: 'Crackerjack Solutions LLC',
    sameAs: 'https://www.facebook.com/profile.php?id=61561307813553',
  }

  return (
    <>
      <Script
        id='google-structured-data'
        type='application/ld+json'
        strategy='beforeInteractive'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <main>
        <Container className='bg-primary text-white'>
          <TitleSection />
        </Container>

        <Container>
          <PaintPointsSection />
        </Container>

        <Container className='text-foreground bg-gray-100 text-center'>
          <h3>
            Do you experience ongoing stress caused by these issues? <br />
            Crackerjack Solutions can help!
          </h3>
          <p>
            Above all, at Crackerjack Solutions, we get that running a business
            can be a lot to handle. But don&apos;t worry, that&apos;s where we
            come in! We&apos;re all about making things simpler for you. Most
            importantly, we believe in keeping things in sync with your big
            vision and goals.
          </p>
          <p>
            So, what do we do? Well, we help you out with managing your
            projects, systems, and operations. However, we don&apos;t just
            provide services; we&apos;re like your trusty sidekick. We&apos;re
            here to lend a hand and keep things rolling smoothly. Our aim? To
            help you focus on what truly matters &#45; your passions, growth,
            and vision.
          </p>
          <p>
            Picture a world where you&apos;re not buried in the day-to-day
            grind, while also having more time to do what you love. Crackerjack
            Solutions is here to turn that vision into your reality. So, why not
            get in touch today and unlock your business&apos;s full potential?
          </p>
          <ScheduleButton color='dark' />
        </Container>

        <Container>
          <ReviewsCarousel reviews={reviews} />
        </Container>

        <Container>
          <OurProcess />
        </Container>

        <Container className='text-foreground bg-gray-100'>
          <ServicesLinks />
        </Container>
      </main>
    </>
  )
}
