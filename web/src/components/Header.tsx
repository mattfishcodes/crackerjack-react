'use client'

import Link from 'next/link'
import Image from 'next/image'
import Nav from './Nav'
import Offcanvas from './Offcanvas'

export default function Header() {
  return (
    <header className='border-b-2 border-gray-300'>
      <div className='container mx-auto px-4'>
        <div className='flex w-full items-center justify-between py-2'>
          <Link href={'/'} className='h-12 w-12'>
            <Image
              src='/icon.svg'
              alt='Crackerjack Solutions logo'
              width={180}
              height={180}
              priority
              unoptimized
            />
          </Link>
          {/* Desktop Nav */}
          <div className='hidden md:flex'>
            <Nav />
          </div>
          {/* Mobile Nav */}
          <Offcanvas />
        </div>
      </div>
    </header>
  )
}
