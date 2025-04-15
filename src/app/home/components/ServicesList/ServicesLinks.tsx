'use client'

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faRectangleList,
  faGears,
  faSitemap,
} from '@fortawesome/free-solid-svg-icons'
import styles from './ServicesLinks.module.scss'

const ServicesLinks = () => {
  return (
    <div className={styles.container}>
      <h3>Services</h3>

      <hr />

      <div className={styles.links}>
        <a href='/services#systems-analysis'>
          <span className={styles.iconWrapper}>
            <FontAwesomeIcon icon={faRectangleList} />
          </span>
          <span>Systems Analysis</span>
        </a>

        <a href='/services#crm-setup'>
          <span className={styles.iconWrapper}>
            <FontAwesomeIcon icon={faGears} />
          </span>
          <span>CRM Setup</span>
        </a>

        <a href='/services#website-maintenance'>
          <span className={styles.iconWrapper}>
            <FontAwesomeIcon icon={faSitemap} />
          </span>
          <span>Website Maintenance</span>
        </a>
      </div>
    </div>
  )
}

export default ServicesLinks
