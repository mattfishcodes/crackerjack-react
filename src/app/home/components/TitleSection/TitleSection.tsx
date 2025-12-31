'use client'

import Image from 'next/image'
import styles from './TitleSection.module.scss'
import Container from '@/app/components/Container/Container'
import Separator from '@/components/Separator'

const TitleSection = () => {
  return (
    <Container bg='primary'>
      <div className={styles.container}>
        <div className={styles.item}>
          <Image
            src='/images/icon-square.png'
            alt=''
            width={800}
            height={800}
            sizes='(max-width: 768px) 300px, 800px'
            priority
          />
        </div>
        <div className={styles.item}>
          <h1>Crackerjack Solutions</h1>
          <Separator variant='light' />
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
