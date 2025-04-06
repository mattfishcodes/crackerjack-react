'use client'

import React from 'react'
import Link from 'next/link'
import styles from './Flipbox.module.scss'
import Image from 'next/image'

type FlipboxTypes = {
    imageUrl: string,
    heading: string,
    content: string,
    link: string
}


export default function Flipbox({ imageUrl, heading, content, link }: FlipboxTypes) {
    return (
        <div className={styles.flipbox}>
            <div className={styles.flipboxInner}>
                <div className={styles.flipboxFront}>
                    <Image
                        src={imageUrl}
                        alt=''
                        width={200}
                        height={200}
                    />
                    <h3>{heading}</h3>
                </div>
                <div className={styles.flipboxBack}>
                    <p>{content}</p>
                    <Link className={styles.link} href={link}>Read More</Link>
                </div>
            </div>
        </div>
    )
}