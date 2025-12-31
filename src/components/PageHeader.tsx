'use client'

import Separator from '@/components/Separator'

const PageHeader = ({ children }: { children: string }) => {
  return (
    <div className='bg-primary flex flex-col items-center justify-center px-4 py-8 text-white'>
      <div className='w-full max-w-300 text-center'>
        <h1>{children}</h1>
        <Separator variant='light' />
      </div>
    </div>
  )
}

export default PageHeader
