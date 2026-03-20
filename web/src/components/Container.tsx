'use client'

import { type ReactNode } from 'react'

export default function Container({
  className,
  children,
}: {
  className?: string
  children: ReactNode[] | ReactNode
}) {
  return (
    <section className={className}>
      <div className='container mx-auto px-4 py-8'>{children}</div>
    </section>
  )
}
