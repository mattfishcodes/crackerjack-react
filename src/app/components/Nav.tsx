'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from './Nav.module.scss';
import { routes } from "../../../constants";

type NavTypes = {
    position: String
}


export default function Nav({ position }: NavTypes) {
    const pn = usePathname()

    const positionClass = position === 'header' ? styles.header : position === 'footer' ? styles.footer : null

    if (positionClass === null) {
        throw new TypeError(`'position' prop must be one of ['header', 'footer']`)
    }

    return (
        <nav className={styles.nav}>
            {routes.map((l, key) => {
                return <Link key={key} href={l[0]} className={`${styles.link} ${positionClass} ${pn === l[0] ? styles.active : ''}`}>{l[1]}</Link>
            })}
        </nav>
    )
}