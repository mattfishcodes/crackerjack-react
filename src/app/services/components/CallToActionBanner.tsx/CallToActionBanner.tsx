'use client'

import React from 'react'
import ScheduleButton from '../../../components/ScheduleButton'
import styles from './CallToActionBanner.module.scss'

const CallToActionBanner = () => {
  return (
    <div className={styles.container}>
      <h3>Interested in Exploring How our Services Can Benefit You?</h3>

      <p>
        Schedule your complimentary 30 minute call below.
        <br />
        Let&apos;s explore how to navigate life&apos;s unpredictability together
        and find that equilibrium you&apos;re searching for.
      </p>

      <ScheduleButton color='light' />
    </div>
  )
}

export default CallToActionBanner
