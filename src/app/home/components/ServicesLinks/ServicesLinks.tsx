'use client'

import Link from 'next/link'
import styles from './ServicesLinks.module.scss'
import Container from '@/app/components/Container/Container'
import { Cog, List, Waypoints } from 'lucide-react'

const ServicesLinks = () => {
  return (
    <Container bg='gray'>
      <h3 className={styles.header}>Services</h3>

      <div className='separator dark' />

      <div className={styles.links}>
        <Link className={styles.link} href='/services#systems-analysis'>
          <span className={styles.iconWrapper}>
            <List size={48} />
          </span>
          <span>Systems Analysis</span>
        </Link>

        <Link className={styles.link} href='/services#crm-setup'>
          <span className={styles.iconWrapper}>
            <Cog size={48} />
          </span>
          <span>CRM Setup</span>
        </Link>

        <Link className={styles.link} href='/services#website-refresh'>
          <span className={styles.iconWrapper}>
            <Waypoints size={48} />
          </span>
          <span>Website Refresh</span>
        </Link>
      </div>
    </Container>
  )
}

export default ServicesLinks
