import React from 'react'
import styles from './Header.module.scss'

export default function Header({ title }) {
  return (
    <header className={styles.header}>
      <h2>{title}</h2>
      <hr />
    </header>
  )
}
