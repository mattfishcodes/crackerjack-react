import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import styles from './ScheduleButton.module.scss'

type ScheduleButtonTypes = {
    color: string
}

export default function ScheduleButton({ color }: ScheduleButtonTypes) {
    if (color !== 'light' && color !== 'dark') {
        throw new TypeError('prop \'color\' must be one of \'light\', \'dark\'')
    }

    return (
        <button className={`${styles.button} ${styles[color]}`}>
          <span>Schedule Now! <FontAwesomeIcon icon={faArrowUpRightFromSquare}/></span>
          <p>Get access to a FREE 30 minute call!</p>
        </button>
    )
}