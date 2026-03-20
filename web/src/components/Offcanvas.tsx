'use client'

import { useState } from 'react'

import { Menu } from 'lucide-react'

import { Button } from '@/shadcn/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/shadcn/ui/sheet'

import Nav from './Nav'

export default function Offcanvas() {
  const [open, setOpen] = useState(false)
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetDescription className='sr-only'>
        Main Navigation Menu
      </SheetDescription>
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
          <Nav orientation='vertical' onNavigate={() => setOpen(false)} />
        </div>
      </SheetContent>
    </Sheet>
  )
}
