'use client'

import React from 'react'
import styles from './List.module.scss'

type ListProps = {
  title: string
  list: Array<string>
}

const List: React.FC<ListProps> = ({ title, list }) => {
  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <div className='separator dark' />
      <ul>
        {list.map((value, i) => {
          return <li key={i}>{value}</li>
        })}
      </ul>
    </div>
  )
}

export default List
