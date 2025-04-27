import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import styles from './ScheduleButton.module.scss'

type ScheduleButtonTypes = {
  color: string
}

export default function ScheduleButton({ color }: ScheduleButtonTypes) {
  return (
    <Link href='https://crackerjack-solutions.moxieapp.com/public/crackerjack-solutions/consult-30-minutes'>
      <button className={`${styles.button} ${styles[color]}`}>
        <span>
          Schedule Now! <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </span>
        <p>Get access to a FREE 30 minute call!</p>
      </button>
    </Link>
  )
}
