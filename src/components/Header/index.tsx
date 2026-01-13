'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Nav } from '../Nav'
import { Offcanvas } from '../Offcanvas'

export const Header = () => {
  return (
    <header className='container mx-auto'>
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
        <Nav className='hidden md:flex' />

        {/* Mobile Nav */}
        <Offcanvas />
      </div>
    </header>
  )
}
