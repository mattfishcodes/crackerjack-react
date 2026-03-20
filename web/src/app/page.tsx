import { type Metadata } from 'next'
import { type OnlineBusiness, type WithContext } from 'schema-dts'

import Script from 'next/script'

import Container from '@/components/Container'

import CallToActionSection from './home/components/CallToActionSection'
import HeroSection from './home/components/HeroSection'
import MoxiePromoSection from './home/components/MoxiePromoSection'
import OurProcessSection from './home/components/OurProcessSection'
import PaintPointsSection from './home/components/PainPointsSection'
import ServicesLinks from './home/components/ServicesLinks'
import TransformationSection from './home/components/TransformationSection'

export const metadata: Metadata = {
  title: 'Home | Crackerjack Solutions',
}

export default function Home() {
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
          <HeroSection />
        </Container>

        <Container>
          <PaintPointsSection />
        </Container>

        <TransformationSection />

        <MoxiePromoSection />

        <CallToActionSection />

        <OurProcessSection />

        <ServicesLinks />
      </main>
    </>
  )
}
