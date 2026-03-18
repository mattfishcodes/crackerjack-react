'use client'

import { Cog } from 'lucide-react'
import Link from 'next/link'

export default function Flipbox({
  title,
  description,
  slug,
}: {
  title: string
  description: string
  slug: string
}) {
  return (
    <div className='min-h-87.5 flex-1'>
      <div className='group h-full w-full perspective-distant transform-3d'>
        <div className='relative h-full w-full duration-500 transform-3d'>
          <div className='text-secondary-foreground border-primary absolute inset-0 z-10 flex rotate-y-0 flex-col items-center justify-center rounded-2xl border-4 bg-white duration-500 backface-hidden transform-3d group-hover:rotate-y-180'>
            <Cog className='size-20' />
            <span className=''>{title}</span>
          </div>
          <div className='bg-primary absolute inset-0 flex -rotate-y-180 flex-col items-center justify-center rounded-2xl text-white duration-500 backface-hidden transform-3d group-hover:rotate-y-0'>
            <p className='text-center'>{description}</p>
            <Link
              href={'/services#' + slug}
              className='bg-secondary text-secondary-foreground rounded-2xl px-4 py-2 transition-colors hover:bg-white'
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
