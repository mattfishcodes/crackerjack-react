'use client'

import { Separator } from '@/components/Separator'

export const PageHeader = ({ children }: { children: string }) => {
  return (
    <div className='bg-primary text-white'>
      <div className='container mx-auto py-8 text-center'>
        <h1>{children}</h1>
        <Separator variant='light' />
      </div>
    </div>
  )
}
