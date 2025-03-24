import React from "react";
import Image from "next/image";
import styles from './Header.module.scss';
import Nav from "./Nav";

export default () => {
    return (
        <header className={styles.header}>
            <Image
            className={styles.logo}
            src="/customcolor_icon_transparent_background.png"
            alt="Crackerjack Solutions logo"
            width={180}
            height={180}
            priority
            />
            <Nav position={'top'}/>
        </header>
    )
}