import { type Metadata } from 'next'

import PageHeader from '@/components/PageHeader'
import { client } from '@/sanity/lib/client'
import {
  type ContactPageData,
  contactPageQuery,
} from '@/sanity/queries/contactPage'

import MoxieForm from './components/MoxieForm'

export const metadata: Metadata = {
  title: 'Contact',
}

export default async function Contact() {
  const data = (await client.fetch(contactPageQuery)) as ContactPageData

  return (
    <main>
      <PageHeader>Contact Us</PageHeader>

      <h4 className='m-0 mt-8 text-center italic'>{data.heading}</h4>

      <MoxieForm url={data.formUrl} />
    </main>
  )
}
