'use client'

import Image from 'next/image'
import styles from './ChristineCerts.module.scss'

const ChristineCerts = () => {
  return (
    <div className={styles.container}>
      <Image
        src='/Salesforce-Administrator.png'
        alt=''
        width={200}
        height={200}
        sizes='(max-width: 768px) 100px, 300px'
      />
      <Image
        src='/DBM-PM-Cert.jpg'
        alt=''
        width={200}
        height={200}
        sizes='(max-width: 768px) 100px, 300px'
      />
      <Image
        src='/DBM-SM-Cert.jpg'
        alt=''
        width={200}
        height={200}
        sizes='(max-width: 768px) 100px, 300px'
      />
      <Image
        src='/Moxie-Approved.png'
        alt=''
        width={200}
        height={200}
        sizes='(max-width: 768px) 100px, 300px'
      />
    </div>
  )
}

export default ChristineCerts
