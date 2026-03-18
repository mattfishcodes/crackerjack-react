import Container from '@/components/Container'
import HeroSection from './home/components/HeroSection'
import PaintPointsSection from './home/components/PainPointsSection'
import ServicesLinks from './home/components/ServicesLinks'
import OurProcessSection from './home/components/OurProcessSection'
import { Metadata } from 'next'
import Script from 'next/script'
import { OnlineBusiness, WithContext } from 'schema-dts'
import TransformationSection from './home/components/TransformationSection'
import MoxiePromoSection from './home/components/MoxiePromoSection'

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

        <OurProcessSection />

        <Container className='text-foreground bg-gray-100'>
          <ServicesLinks />
        </Container>
      </main>
    </>
  )
}
