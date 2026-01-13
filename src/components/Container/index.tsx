'use client'

import { ReactNode } from 'react'

export const Container = ({
  className,
  children,
}: {
  className?: string
  children: ReactNode[] | ReactNode
}) => {
  return (
    <section className={className}>
      <div className='container mx-auto py-8'>{children}</div>
    </section>
  )
}
