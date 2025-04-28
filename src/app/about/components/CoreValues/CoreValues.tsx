'use client'

import Image from 'next/image'
import styles from './CoreValues.module.scss'

const CoreValues = () => {
  return (
    <div className={styles.container}>
      <h3>Core Values</h3>
      <p>
        <span>Integrity</span> <span>Accountability</span> <span>Kindness</span>
      </p>
      <div className={styles.imgContainer}>
        <Image src='/integrity-meme.jpg' alt='' width={300} height={300} />
        <Image src='/accountability-meme.jpg' alt='' width={300} height={300} />
        <Image src='/kindness-meme.jpg' alt='' width={300} height={300} />
      </div>
    </div>
  )
}

export default CoreValues
