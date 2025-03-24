'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from './Nav.module.scss';
import { routes } from "../../../constants";


export default function Nav({ position }) {
    const pn = usePathname()

    const positionClass = position === 'top' ? styles.top : styles.bottom
    return (
        <nav className={styles.nav}>
            {routes.map((l, key) => {
                return <Link key={key} href={l[0]} className={`${styles.link} ${positionClass} ${pn === l[0] ? styles.active : ''}`}>{l[1]}</Link>
            })}
        </nav>
    )
}