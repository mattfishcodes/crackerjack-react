'use client'

import Image from 'next/image'
import styles from './ChristineCerts.module.scss'
import { images } from '@/lib/images'

const ChristineCerts = () => {
  return (
    <div className={styles.container}>
      <Image
        src={images.salesforceAdmin.src}
        alt={images.salesforceAdmin.alt}
        width={200}
        height={200}
      />
      <Image
        src={images.dbmProjectCert.src}
        alt={images.dbmProjectCert.alt}
        width={200}
        height={200}
      />
      <Image
        src={images.dbmSystemsCert.src}
        alt={images.dbmSystemsCert.alt}
        width={200}
        height={200}
      />
      <Image
        src={images.moxieApproved.src}
        alt={images.moxieApproved.alt}
        width={200}
        height={200}
      />
    </div>
  )
}

export default ChristineCerts
