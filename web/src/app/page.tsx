import { type Metadata } from 'next'

import { client } from '@/sanity/lib/client'
import { type HomePageData, homePageQuery } from '@/sanity/queries/homePage'

import BenefitsSection from './home/components/BenefitsSection'
import CoursePromoSection from './home/components/CoursePromoSection'
import HeroSection from './home/components/HeroSection'
import MoxiePromoSection from './home/components/MoxiePromoSection'
import PainPointsSection from './home/components/PainPointsSection'
import ProcessSection from './home/components/ProcessSection'
import ServicesSection from './home/components/ServicesSection'

export const metadata: Metadata = {
  title: 'Home | Crackerjack Solutions',
}

export default async function Home() {
  const data = (await client.fetch(homePageQuery)) as HomePageData

  return (
    <>
      <main>
        <HeroSection data={data.hero} />

        <PainPointsSection data={data.painPoints} />

        <BenefitsSection data={data.benefits} />

        <MoxiePromoSection data={data.moxiePromo} />

        <CoursePromoSection data={data.coursePromo} />

        <ServicesSection data={data.services} />

        <ProcessSection data={data.process} />
      </main>
    </>
  )
}
