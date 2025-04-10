import React, { ReactNode } from 'react'
import styles from './Section.module.scss'

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children?: ReactNode
}

const Section: React.FunctionComponent<SectionProps> = ({
  children,
  ...props
}) => {
  return (
    <section className={styles.section} {...props}>
      <div className={styles.container}>{children}</div>
    </section>
  )
}

export default Section
