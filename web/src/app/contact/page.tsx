import PageHeader from '@/components/PageHeader'
import { type Metadata } from 'next'
import MoxieForm from './components/MoxieForm'

export const metadata: Metadata = {
  title: 'Contact',
}

export default function Contact() {
  return (
    <main>
      <PageHeader>Contact Us</PageHeader>

      <h4 className='m-0 mt-8 text-center italic'>
        We&apos;d Love to Help You - Reach Out Today!
      </h4>

      <MoxieForm />
    </main>
  )
}
