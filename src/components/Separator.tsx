'use client'

import { cn } from '@/lib/utils'

export default function Separator({
  variant,
}: {
  variant: 'light' | 'dark' | 'dotted'
}) {
  return (
    <div
      className={cn(
        'mt-4 mb-4 h-0.5 w-full rounded-3xl',
        variant === 'light' && 'bg-secondary',
        variant === 'dark' && 'bg-primary',
        variant === 'dotted' && 'bg-[url(/dash.svg)] bg-position-[10px_0]',
      )}
    />
  )
}
