'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import routes from '@/app/routes'
import { Menu, X } from 'lucide-react'
import { cn, useLockBodyScroll } from '@/lib/utils'

export default function Navbar() {
  const pn = usePathname()
  const ref = useRef<HTMLElement>(null)

  const [open, setOpen] = useState(false)

  useLockBodyScroll(open)

  return (
    <header className='flex flex-col items-center justify-center border-b-2 border-gray-400'>
      <div className='flex h-16 w-full items-center justify-between px-4 lg:max-w-300 lg:p-0'>
        <Link href='/' className='h-12 w-12'>
          <Image
            src='/icon.svg'
            alt='Crackerjack Solutions logo'
            width={180}
            height={180}
            priority
            unoptimized
          />
        </Link>

        <nav className='hidden lg:flex lg:gap-2'>
          {routes.map((r, i) => {
            return (
              <Link
                className={cn(
                  'hover:bg-primary rounded-full px-3 py-2 transition-colors hover:text-white',
                  pn === r.href && 'bg-primary text-secondary',
                )}
                key={i}
                href={r.href}
              >
                {r.name}
              </Link>
            )
          })}
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className='text-primary cursor-pointer p-1 lg:hidden'
        >
          <Menu strokeWidth={3} />
        </button>
      </div>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className='fixed inset-0 z-30 bg-black/40'
        />
      )}

      <nav
        ref={ref}
        className={cn(
          'fixed inset-x-0 top-0 z-40 bg-white',
          'origin-top transform-gpu',
          'transition-all duration-300 ease-out',
          'pointer-events-none -translate-y-2 scale-y-95 opacity-0',
          'flex flex-col',
          'motion-reduce:transition-none',
          'text-right',
          open && 'pointer-events-auto translate-y-0 scale-y-100 opacity-100',
        )}
      >
        <div className='px-4 py-2'>
          <button onClick={() => setOpen(false)}>
            <X size={36} />
          </button>
        </div>
        {routes.map((r, i) => {
          return (
            <Link
              className='active:text-secondary active:bg-primary px-4 py-2 text-xl'
              key={i}
              href={r.href}
              onClick={() => setOpen((v) => !v)}
            >
              {r.name}
            </Link>
          )
        })}
      </nav>
    </header>
  )
}
