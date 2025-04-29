'use client'

import styles from './Container.module.scss'

type ContainerType = {
  bg?: string
  children?: React.ReactNode
}

const Container: React.FunctionComponent<ContainerType> = ({
  bg,
  children,
}) => {
  if (bg === undefined) {
    bg = ''
  }
  return (
    <section className={`${styles.section} ${styles[bg]}`}>
      <div className={styles.container}>{children}</div>
    </section>
  )
}

export default Container
