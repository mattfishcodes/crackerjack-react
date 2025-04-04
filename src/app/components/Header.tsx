'use client'

import React, { useRef } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';
import Link from 'next/link';
import { routes } from '../../../constants';

export default function Header() {
    const ref = useRef(null);

    const toggle = () => {
        if (ref.current) {
            if (ref.current.style.height === "0px" || !ref.current.style.height) {
                ref.current.style.height = ref.current.scrollHeight + "px";
            } else {
                ref.current.style.height = "0px";
            }
        }
    };

    return (
        <header>
            <div className={styles.header}>
                <Image
                    className={styles.logo}
                    src='/customcolor_icon_transparent_background.png'
                    alt='Crackerjack Solutions logo'
                    width={180}
                    height={180}
                    priority
                />
                <button onClick={toggle} className={styles.toggle}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>

            <nav ref={ref} className={styles.nav}>
                {routes.map((l, key) => {
                    return <Link className={styles.link} key={key} href={l[0]}>{l[1]}</Link>
                })}
            </nav>
        </header>
    );
}
