'use client'

import React from "react";
import Link from "next/link";
import styles from './Footer.module.scss';
import Nav from "./Nav";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.flex}>
            <Nav position={'footer'}/>

            <Link className={styles.link} href='#'>Privacy Policy</Link>
            </div>
            <div className={styles.copyright}>
                <small>Copyright 2025 Crackerjack Solutions LLC</small>
            </div>
        </footer>
    )
}