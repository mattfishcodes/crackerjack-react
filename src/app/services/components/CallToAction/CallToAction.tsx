'use client'

import React, { cloneElement } from 'react'
import ScheduleButton from '../../../components/ScheduleButton'
import styles from './CallToAction.module.scss'

const CallToActionBanner = ({ children }) => {
  return (
    <div className={styles.container}>
      {children.map((element) => {
        if (element.type === 'p') {
          return cloneElement(element, { className: styles.p })
        }

        return element
      })}

      <ScheduleButton color='light' />
    </div>
  )
}

export default CallToActionBanner
