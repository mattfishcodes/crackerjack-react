'use client'

import React from 'react'
import Image from 'next/image'
import styles from './TitleSection.module.scss'

const TitleSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src='/icon-square.png' alt='' width={400} height={400} />
      </div>
      <div className={styles.item}>
        <h1>Crackerjack Solutions</h1>
        <div className='separator light' />
        <p>
          Welcome to Crackerjack Solutions Virtual Business Management Services!
        </p>
        <p>
          Empowering Entrepreneurs and Business Leaders to cultivate business
          growth, elevate productivity, and optimize operations.
        </p>
        <p>
          Unleash Your Potential, Reduce Stress, and Reclaim Time for What
          Matters Most!
        </p>
      </div>
    </div>
  )
}

export default TitleSection
