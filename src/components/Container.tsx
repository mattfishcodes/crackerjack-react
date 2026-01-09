'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

const Container = ({
  className,
  children,
}: {
  className?: string
  children: ReactNode[] | ReactNode
}) => {
  return (
    <section
      className={cn('flex items-center justify-center px-4 py-8', className)}
    >
      <div className='w-full max-w-300'>{children}</div>
    </section>
  )
}

export default Container
