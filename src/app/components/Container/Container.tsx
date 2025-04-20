'use client'

import React from 'react'
import styles from './Container.module.scss'

interface Container extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode
}

const Container: React.FunctionComponent<Container> = ({ children }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>{children}</div>
    </section>
  )
}

export default Container
