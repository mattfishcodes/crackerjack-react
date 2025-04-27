'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import styles from './Navbar.module.scss'
import routes from '../../routes'

export default function Navbar() {
  const pn = usePathname()
  const ref = useRef<HTMLElement>(null)

  const toggle = (instant = false) => {
    if (ref.current) {
      if (instant) {
        ref.current.classList.add(styles.instant)
      } else {
        ref.current.classList.remove(styles.instant)
      }

      if (ref.current.style.height === '0px' || !ref.current.style.height) {
        ref.current.style.height = ref.current.scrollHeight + 'px'
      } else {
        ref.current.style.height = '0px'
      }
    }
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href='/'>
          <Image
            className={styles.logo}
            src='/icon.svg'
            alt='Crackerjack Solutions logo'
            width={180}
            height={180}
            priority
          />
        </Link>

        <nav className={styles.desktopNav}>
          {routes.map((r, i) => {
            return (
              <Link
                className={pn === r.href ? styles.active : ''}
                key={i}
                href={r.href}
              >
                {r.name}
              </Link>
            )
          })}
        </nav>

        <button onClick={() => toggle()} className={styles.toggle}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      <nav ref={ref} className={styles.mobileNav}>
        {routes.map((r, i) => {
          return (
            <Link
              className={pn === r.href ? styles.active : ''}
              key={i}
              href={r.href}
              onClick={() => toggle(true)}
            >
              {r.name}
            </Link>
          )
        })}
      </nav>
    </header>
  )
}
