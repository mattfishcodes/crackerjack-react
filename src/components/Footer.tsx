'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import routes from '@/app/routes'
import { cn } from '@/lib/utils'
import { Copyright } from 'lucide-react'

export default function Footer() {
  const pn = usePathname()

  return (
    <footer>
      <div className='bg-primary flex flex-col justify-center py-2 md:flex-row'>
        <nav className='flex max-w-300 flex-[100%] flex-col items-center justify-between gap-4 md:flex-row'>
          <div className='flex flex-col gap-4 text-center md:flex-row'>
            {routes.map((r, i) => (
              <Link
                className={cn(
                  'text-secondary transition-colors hover:text-white active:text-white',
                  pn === r.href && 'text-white',
                )}
                href={r.href}
                key={i}
              >
                {r.name}
              </Link>
            ))}
          </div>
          <div>
            <Link
              className={cn(
                'text-secondary transition-colors hover:text-white active:text-white',
                pn === '/privacy-policy/' && 'text-white',
              )}
              href='/privacy-policy'
            >
              Privacy Policy
            </Link>
          </div>
        </nav>
      </div>
      <div className='flex h-8 flex-row items-center justify-center font-semibold'>
        <Copyright className='mr-1' /> 2025 Crackerjack Solutions LLC
      </div>
    </footer>
  )
}
