'use client'

import { SquareArrowOutUpRight } from 'lucide-react'

import Link from 'next/link'

import { cn } from '@/lib/utils'

export default function Button({
  data,
  variant = 'primary',
  openInNewTab = true,
  icon = true,
}: {
  data: {
    buttonLink: string
    buttonText: string
    buttonSubtext?: string | undefined
  }
  variant?: 'primary' | 'secondary' | 'dark'
  openInNewTab?: boolean
  icon?: boolean
}) {
  return (
    <Link
      href={data.buttonLink}
      target={openInNewTab ? '_blank' : undefined}
      className={cn(
        'inline-block cursor-pointer rounded-3xl px-8 py-4 transition-all hover:scale-105 active:scale-95',
        variant === 'primary' &&
          'bg-primary hover:text-primary active:text-primary text-white hover:bg-white active:bg-white',
        variant === 'secondary' &&
          'bg-secondary hover:bg-white active:bg-white',
        variant === 'dark' &&
          'bg-secondary hover:bg-primary active:bg-primary hover:text-white active:text-white',
      )}
    >
      <div className='font-titillium-web flex items-center justify-center gap-2 text-2xl font-semibold'>
        {data.buttonText}
        {icon && <SquareArrowOutUpRight size={24} strokeWidth={3} />}
      </div>
      {data.buttonSubtext && (
        <div className='font-montserrat'>{data.buttonSubtext}</div>
      )}
    </Link>
  )
}
