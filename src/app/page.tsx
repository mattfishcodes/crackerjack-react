import Container from '@/components/Container'
import TitleSection from './home/components/TitleSection'
import PaintPointsSection from './home/components/PainPointsSection'
import ServicesLinks from './home/components/ServicesLinks'
import OurProcess from './home/components/OurProcess'
import ScheduleButton from '@/components/ScheduleButton'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home | Crackerjack Solutions',
}

export default function Home() {
  return (
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
          importantly, we believe in keeping things in sync with your big vision
          and goals.
        </p>
        <p>
          So, what do we do? Well, we help you out with managing your projects,
          systems, and operations. However, we don&apos;t just provide services;
          we&apos;re like your trusty sidekick. We&apos;re here to lend a hand
          and keep things rolling smoothly. Our aim? To help you focus on what
          truly matters &#45; your passions, growth, and vision.
        </p>
        <p>
          Picture a world where you&apos;re not buried in the day-to-day grind,
          while also having more time to do what you love. Crackerjack Solutions
          is here to turn that vision into your reality. So, why not get in
          touch today and unlock your business&apos;s full potential?
        </p>
        <ScheduleButton color='dark' />
      </Container>

      <Container>
        <OurProcess />
      </Container>

      <Container className='text-foreground bg-gray-100'>
        <ServicesLinks />
      </Container>
    </main>
  )
}
