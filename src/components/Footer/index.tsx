'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import routes from '@/app/routes'
import { cn } from '@/lib/utils'
import { Copyright } from 'lucide-react'

export const Footer = () => {
  const pn = usePathname()

  return (
    <footer>
      <div className='bg-primary'>
        <nav className='container mx-auto flex flex-col justify-between py-4 md:flex-row'>
          <div className='flex flex-col gap-4 text-center md:flex-row'>
            {routes.map((r, i) => (
              <Link
                className={cn(
                  'text-secondary transition-colors hover:text-white active:text-white',
                  pn === r.href && 'text-gray-300',
                )}
                href={r.href}
                key={i}
              >
                {r.name}
              </Link>
            ))}
          </div>
          <div className='pt-4 text-center md:pt-0'>
            <Link
              className={cn(
                'text-secondary transition-colors hover:text-white active:text-white',
                pn === '/privacy-policy/' && 'text-gray-300',
              )}
              href='/privacy-policy'
            >
              Privacy Policy
            </Link>
          </div>
        </nav>
      </div>
      <div className='flex flex-row items-center justify-center py-4 font-semibold'>
        <Copyright className='mr-1' /> 2025 Crackerjack Solutions LLC
      </div>
    </footer>
  )
}
