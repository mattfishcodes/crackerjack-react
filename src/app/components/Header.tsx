import React from 'react'
import styles from './Header.module.scss'

type HeaderProps = {
  title: string
}

const Header: React.FunctionComponent<HeaderProps> = ({ title }) => {
  return (
    <header className={styles.header}>
      <h2>{title}</h2>
      <hr />
    </header>
  )
}

export default Header
