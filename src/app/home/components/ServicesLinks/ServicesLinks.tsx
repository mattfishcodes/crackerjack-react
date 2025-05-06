'use client'

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRectangleList, faGears } from '@fortawesome/free-solid-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import styles from './ServicesLinks.module.scss'

const ServicesLinks = () => {
  return (
    <div className={styles.container}>
      <h3>Services</h3>

      <div className='separator dark' />

      <div className={styles.links}>
        <Link className={styles.link} href='/services#systems-analysis'>
          <span className={styles.iconWrapper}>
            <FontAwesomeIcon icon={faRectangleList} />
          </span>
          <span>Systems Analysis</span>
        </Link>

        <Link className={styles.link} href='/services#crm-setup'>
          <span className={styles.iconWrapper}>
            <FontAwesomeIcon icon={faGears} />
          </span>
          <span>CRM Setup</span>
        </Link>

        <Link className={styles.link} href='/services#static-react-site'>
          <span className={styles.iconWrapper}>
            <FontAwesomeIcon icon={faReact} />
          </span>
          <span>Static Site Builds</span>
        </Link>
      </div>
    </div>
  )
}

export default ServicesLinks
