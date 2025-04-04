'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import styles from './Header.module.scss'
import { routes } from '../../../constants'


export default function Header() {
    const pn = usePathname()
    const ref = useRef(null)

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
                        src='/customcolor_icon_transparent_background.png'
                        alt='Crackerjack Solutions logo'
                        width={180}
                        height={180}
                        priority
                    />
                </Link>

                <nav className={styles.desktopNav}>
                    {routes.map((l, key) => {
                        return <Link className={`${styles.link} ${pn === l[0] ? styles.active : ''}`} key={key} href={l[0]}>{l[1]}</Link>
                    })}
                </nav>


                <button onClick={() => toggle()} className={styles.toggle}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>

            <nav ref={ref} className={styles.mobileNav}>
                {routes.map((l, key) => {
                    return <Link className={`${styles.link} ${pn === l[0] ? styles.active : ''}`} key={key} href={l[0]} onClick={() => toggle(true)}>{l[1]}</Link>
                })}
            </nav>
        </header>
    )
}
