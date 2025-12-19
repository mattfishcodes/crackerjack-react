'use client'

import Link from 'next/link'
import styles from './ScheduleButton.module.scss'
import { SquareArrowOutUpRight } from 'lucide-react'

type ScheduleButtonTypes = {
  color: string
}

export default function ScheduleButton({ color }: ScheduleButtonTypes) {
  return (
    <Link href='https://crackerjack-solutions.moxieapp.com/public/crackerjack-solutions/consult-30-minutes'>
      <button className={`${styles.button} ${styles[color]}`}>
        <span>
          Schedule Now! <SquareArrowOutUpRight size={24} strokeWidth={3} />
        </span>
        <p>Get access to a FREE 30 minute call!</p>
      </button>
    </Link>
  )
}
