'use client'

import { SquareArrowOutUpRight } from 'lucide-react'

import Link from 'next/link'

import { cn } from '@/lib/utils'

export default function CTAButton({
  cta,
  variant = 'primary',
}: {
  cta: {
    buttonLink: string
    buttonText: string
    buttonSubtext?: string | undefined
  }
  variant?: 'primary' | 'secondary' | 'dark'
}) {
  return (
    <Link
      href={cta.buttonLink}
      target='_blank'
      className={cn(
        'inline-block cursor-pointer rounded-3xl px-8 py-4 transition-all hover:scale-105 active:scale-95',
        variant === 'primary' &&
          'bg-primary hover:text-primary text-white hover:bg-white',
        variant === 'secondary' &&
          'bg-secondary hover:bg-white active:bg-white',
        variant === 'dark' && 'bg-secondary hover:bg-primary hover:text-white',
      )}
    >
      <div className='font-titillium-web flex items-center justify-center gap-2 text-2xl font-semibold'>
        {cta.buttonText} <SquareArrowOutUpRight size={24} strokeWidth={3} />
      </div>
      {cta.buttonSubtext && (
        <div className='font-montserrat'>{cta.buttonSubtext}</div>
      )}
    </Link>
  )
}
