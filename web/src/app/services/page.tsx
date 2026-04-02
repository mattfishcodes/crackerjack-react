import { type Metadata } from 'next'

import PageHeader from '@/components/PageHeader'
import { client } from '@/sanity/lib/client'
import {
  type ServicesPageData,
  servicesPageQuery,
} from '@/sanity/queries/servicesPage'

import ConsultPromo from './components/ConsultPromo'
import FooterPromo from './components/FooterPromo'
import RetainerBenefits from './components/RetainerBenefits'
import RetainerPackages from './components/RetainerPackages'
import RetainerPromo from './components/RetainerPromo'
import RetainerServices from './components/RetainerServices'
import ReviewsCarousel from './components/ReviewsCarousel'
import ServicesCards from './components/ServicesCards'
import ToolsList from './components/ToolsList'

export const metadata: Metadata = {
  title: 'Services',
}

export default async function Services() {
  const data = (await client.fetch(servicesPageQuery)) as ServicesPageData

  return (
    <main>
      <ConsultPromo data={data.consultPromo} />

      <PageHeader>Services</PageHeader>

      <ServicesCards data={data.servicesCards} />

      <RetainerPackages data={data.retainerPackages} />

      <RetainerBenefits data={data.retainerBenefits} />

      <RetainerPromo data={data.retainerPromo} />

      <RetainerServices data={data.retainerServices} />

      <ReviewsCarousel data={data.reviews} />

      <ToolsList data={data.tools} />

      <FooterPromo data={data.footerPromo} />
    </main>
  )
}
