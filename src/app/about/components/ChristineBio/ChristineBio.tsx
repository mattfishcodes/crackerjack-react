'use client'

import Image from 'next/image'
import styles from './ChristineBio.module.scss'

const ChristineBio = () => {
  return (
    <div>
      <h2>Christine Warner</h2>
      <div className={styles.container}>
        <div className={styles.item}>
          <Image
            className={styles.headshot}
            src='/christine-headshot.png'
            alt='Crackerjack Solutions founder Christine Warner'
            width={500}
            height={500}
            sizes='(max-width: 768px) 100px, 400px'
            priority
          />
        </div>
        <div className={styles.item}>
          <p>
            Hey there! I&apos;m Christine, the founder of Crackerjack Solutions.
            With a lifelong background in entrepreneurship and over 25 years of
            corporate experience across diverse industries, I&apos;ve embraced
            the digital nomad lifestyle for the past 8 years to refine my
            expertise.
          </p>
          <p>
            At Crackerjack Solutions, I help entrepreneurs, solopreneurs, and
            freelancers strategize, organize, and streamline their operations.
            Think of me as your behind-the-scenes sherpa, leading you through
            complex business terrain and fine-tuning your systems.
          </p>
          <p>
            I excel at strategic thinking and solving complex business
            challenges through the effective use of technology, processes, and
            resources. Together, we&apos;ll create a plan to automate and
            streamline your operations, transforming chaos into efficiency and
            freeing you to focus on what you do best.
          </p>
          <p>
            Building strong relationships with customers is a priority for me.
          </p>
          <p>
            When I&apos;m not busy crafting business solutions, you can find me
            exploring the beautiful woods and waters of Traverse City, tending
            to my garden, getting lost in a good book, or painting my next
            masterpiece. After all, even a sherpa needs some downtime to
            recharge!
          </p>
          <p>
            I&apos;m excited to help you achieve peak efficiency and tackle your
            business challenges. Let&apos;s optimize your business for peak
            performance!
          </p>
        </div>
      </div>
    </div>
  )
}

export default ChristineBio
