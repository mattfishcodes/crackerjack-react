import { type Metadata } from 'next'

import PageHeader from '@/components/PageHeader'
import { client } from '@/sanity/lib/client'
import { type AboutPageData, aboutPageQuery } from '@/sanity/queries/aboutPage'

import ChristineBio from './components/ChristineBio'
import ConsultPromo from './components/ConsultPromo'
import CoreValues from './components/CoreValues'
import FooterPromo from './components/FooterPromo'
import MatthewBio from './components/MatthewBio'

export const metadata: Metadata = {
  title: 'About',
}

export default async function About() {
  const data = (await client.fetch(aboutPageQuery)) as AboutPageData

  return (
    <main>
      <PageHeader>About</PageHeader>

      <ChristineBio data={data.christine} />

      <ConsultPromo data={data.consultPromo} />

      <MatthewBio data={data.matthew} />

      <CoreValues data={data.coreValues} />

      <FooterPromo data={data.footerPromo} />
    </main>
  )
}
