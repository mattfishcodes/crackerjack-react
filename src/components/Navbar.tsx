'use client'

import { useState } from 'react'
import Link from 'next/link'
import routes from '@/app/routes'
import { Menu } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from './ui/navigation-menu'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'
import { Button } from './ui/button'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className='container mx-auto'>
      <div className='flex w-full items-center justify-between'>
        <div>Brand</div>

        {/* Desktop Nav */}
        <NavigationMenu className='hidden md:flex'>
          <NavigationMenuList>
            {routes.map((r, i) => {
              return (
                <NavigationMenuItem key={i}>
                  <NavigationMenuLink asChild>
                    <Link href={r.href}>{r.name}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )
            })}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Nav */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className='md:hidden'>
            <Button variant='outline' size='icon'>
              <span className='sr-only'>Open menu</span>
              <Menu />
            </Button>
          </SheetTrigger>

          {/* OFFCANVAS */}
          <SheetContent side='right' className='w-75 text-center sm:w-100'>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>

            <div className='flex flex-col items-center'>
              <NavigationMenu>
                <NavigationMenuList>
                  {routes.map((r, i) => {
                    return (
                      <NavigationMenuItem key={i}>
                        <NavigationMenuLink asChild>
                          <Link href={r.href} onClick={() => setOpen(false)}>
                            {r.name}
                          </Link>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    )
                  })}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
