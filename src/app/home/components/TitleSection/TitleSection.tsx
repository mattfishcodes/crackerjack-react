'use client'

import Image from 'next/image'
import styles from './TitleSection.module.scss'
import Container from '@/app/components/Container/Container'
import { images } from '@/lib/images'

const TitleSection = () => {
  return (
    <Container bg='primary'>
      <div className={styles.container}>
        <div className={styles.item}>
          <Image
            src={images.titleLogo.src}
            alt={images.titleLogo.alt}
            width={400}
            height={400}
          />
        </div>
        <div className={styles.item}>
          <h1>Crackerjack Solutions</h1>
          <div className='separator light' />
          <p>
            Welcome to Crackerjack Solutions Virtual Business Management
            Services!
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
    </Container>
  )
}

export default TitleSection
