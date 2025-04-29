'use client'

import Image from 'next/image'
import styles from './CoreValues.module.scss'
import { images } from '@/lib/images'

const CoreValues = () => {
  return (
    <div className={styles.container}>
      <h3>Core Values</h3>
      <p>
        <span>Integrity</span> <span>Accountability</span> <span>Kindness</span>
      </p>
      <div className={styles.imgContainer}>
        <Image
          src={images.integrityMeme.src}
          alt={images.integrityMeme.alt}
          width={300}
          height={300}
        />
        <Image
          src={images.accountabilityMeme.src}
          alt={images.accountabilityMeme.alt}
          width={300}
          height={300}
        />
        <Image
          src={images.kindnessMeme.src}
          alt={images.kindnessMeme.alt}
          width={300}
          height={300}
        />
      </div>
    </div>
  )
}

export default CoreValues
