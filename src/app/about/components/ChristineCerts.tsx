'use client'

import Container from '@/components/Container'
import Image from 'next/image'

const ChristineCerts = () => {
  return (
    <Container>
      <div className='flex flex-wrap items-center justify-center'>
        <Image
          className='flex-[49%] md:flex-1'
          src='/Salesforce-Administrator.png'
          alt=''
          width={200}
          height={200}
          sizes='(max-width: 768px) 200px, 300px'
        />
        <Image
          className='flex-[49%] md:flex-1'
          src='/DBM-PM-Cert.jpg'
          alt=''
          width={200}
          height={200}
          sizes='(max-width: 768px) 200px, 300px'
        />
        <Image
          className='flex-[49%] md:flex-1'
          src='/DBM-SM-Cert.jpg'
          alt=''
          width={200}
          height={200}
          sizes='(max-width: 768px) 200px, 300px'
        />
        <Image
          className='flex-[49%] md:flex-1'
          src='/Moxie-Approved.png'
          alt=''
          width={200}
          height={200}
          sizes='(max-width: 768px) 200px, 300px'
        />
      </div>
    </Container>
  )
}

export default ChristineCerts
