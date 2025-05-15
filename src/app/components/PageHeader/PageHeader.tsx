'use client'

import styles from './PageHeader.module.scss'

const PageHeader = ({ title }: { title: string }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>{title}</h1>
        <div className={styles.separator} />
      </div>
    </div>
  )
}

export default PageHeader
