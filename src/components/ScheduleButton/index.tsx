'use client'

import Link from 'next/link'
import { SquareArrowOutUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export const ScheduleButton = ({ color }: { color: 'light' | 'dark' }) => {
  return (
    <Link
      href='https://crackerjack-solutions.moxieapp.com/public/crackerjack-solutions/consult-30-minutes'
      className={cn(
        'inline-block cursor-pointer rounded-3xl border-4 px-8 py-4 transition-all',
        color === 'light' &&
          'text-primary bg-secondary border-secondary hover:border-primary focus:border-primary active:border-primary hover:bg-white focus:bg-white active:bg-white',
        color === 'dark' &&
          'text-primary-foreground bg-primary border-primary hover:border-primary hover:text-primary active:border-primary active:text-primary focus:text-primary focus:border-primary hover:bg-white focus:bg-white active:bg-white',
      )}
    >
      <div className='font-titillium-web flex items-center justify-center gap-2 text-2xl font-semibold'>
        Schedule Now! <SquareArrowOutUpRight size={24} strokeWidth={3} />
      </div>
      <div className='font-montserrat'>
        Get access to a FREE 30 minute call!
      </div>
    </Link>
  )
}
