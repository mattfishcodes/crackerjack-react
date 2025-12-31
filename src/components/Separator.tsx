'use client'

import { cn } from '@/lib/utils'

const Separator = ({ variant }: { variant: 'light' | 'dark' | 'dotted' }) => {
  return (
    <div
      className={cn(
        'h-0.5 w-full rounded-3xl mt-4 mb-4',
        variant === 'light' && 'bg-secondary',
        variant === 'dark' && 'bg-primary',
        variant === 'dotted' && 'bg-[url("/dash.svg")] bg-position-[10px_0]',
      )}
    />
  )
}

export default Separator
