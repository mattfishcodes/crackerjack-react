'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Footer.module.scss'
import { routes } from '../../../constants'

export default function Footer() {
  const pn = usePathname()

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <nav className={styles.nav}>
          {routes.map((r, i) => (
            <Link
              className={`${styles.link} ${pn === r[0] ? styles.active : ''}`}
              href={r[0]}
              key={i}
            >
              {r[1]}
            </Link>
          ))}
        </nav>
        <Link
          className={`${styles.link} ${pn === '/privacy-policy' ? styles.active : ''}`}
          href='/privacy-policy'
        >
          Privacy Policy
        </Link>
      </div>
      <div className={styles.copyright}>
        <small>Copyright 2025 Crackerjack Solutions LLC</small>
      </div>
    </footer>
  )
}
