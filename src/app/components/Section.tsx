import React, { ReactNode } from "react";
import styles from './Section.module.scss';

type SectionProps = {
    children?: ReactNode;
}

export default function Section({children}: SectionProps) {
    return (
        <section className={styles.section}>
            {children}
        </section>
    )
}