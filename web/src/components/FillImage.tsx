'use client'

import { useEffect, useRef, useState } from 'react'

import Image from 'next/image'

import { cn } from '@/lib/utils'
import { Skeleton } from '@/shadcn/ui/skeleton'

export default function FillImage({
  src,
  alt,
  aspectRatio = 'aspect-square',
  objectFit = 'object-cover',
}: {
  src: string
  alt: string
  aspectRatio?: string
  objectFit?: 'object-cover' | 'object-contain'
}) {
  const [loaded, setLoaded] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (imgRef.current?.complete) {
      setLoaded(true)
    }
  }, [src])

  return (
    <div className={`relative w-full ${aspectRatio}`}>
      {!loaded && <Skeleton className='absolute inset-0' />}
      <Image
        ref={imgRef}
        src={src}
        alt={alt}
        fill
        className={cn(`${objectFit} opacity-0`, loaded && 'opacity-100')}
        onLoad={() => setLoaded(true)}
        unoptimized
      />
    </div>
  )
}
