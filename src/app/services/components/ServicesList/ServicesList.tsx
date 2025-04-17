'use client'

import React, { ReactNode } from 'react'
import styles from './ServicesList.module.scss'

type ServicesListProps = {
  title: string
  children?: Array<ReactNode>
}

const ServicesList: React.FC<ServicesListProps> = ({ title, children }) => {
  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <hr />
      <ul>{children}</ul>
    </div>
  )
}

export default ServicesList
