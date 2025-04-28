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
      />
      <Image src='/DBM-PM-Cert.jpg' alt='' width={200} height={200} />
      <Image src='/DBM-SM-Cert.jpg' alt='' width={200} height={200} />
      <Image src='/Moxie-Approved.png' alt='' width={200} height={200} />
    </div>
  )
}

export default ChristineCerts
