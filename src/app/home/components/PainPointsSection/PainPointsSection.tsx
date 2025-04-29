'use client'

import Image from 'next/image'
import styles from './PainPointsSection.module.scss'
import { images } from '@/lib/images'

const PaintPointsSection = () => {
  return (
    <div className={styles.container}>
      <div>
        <p>
          Are your days filled with scattered tasks and a never ending to do
          list?
        </p>
        <p>
          Do you find yourself jumping from one task to another, unable to focus
          on what truly matters?
        </p>
        <p>
          Are you struggling to keep up with the rapidly evolving digital
          landscape and its challenges?
        </p>
        <p>
          Is your productivity suffering due to inefficient systems and
          operations?
        </p>
        <p>
          Do you experience ongoing stress and overwhelm caused by these issues?
        </p>
      </div>
      <Image
        className={styles.image}
        src={images.scrabbleLetters.src}
        alt={images.scrabbleLetters.alt}
        width={400}
        height={300}
      />
    </div>
  )
}

export default PaintPointsSection
