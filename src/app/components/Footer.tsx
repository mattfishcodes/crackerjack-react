'use client'

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from './Footer.module.scss';
import { routes } from "../../../constants";
import Nav from "./Nav";

export default () => {
    const pn = usePathname()

    return (
        <footer className={styles.footer}>
            <div className={styles.flex}>
            <Nav position={'bottom'}/>

            <Link className={styles.link} href='#'>Privacy Policy</Link>
            </div>
            <div className={styles.copyright}>
                <small>Copyright 2025 Crackerjack Solutions LLC</small>
            </div>
        </footer>
    )
}