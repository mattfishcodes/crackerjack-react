'use client'

import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { usePathname } from 'next/navigation'
import routes from '@/app/routes'

export const Nav = ({
  orientation = 'horizontal',
  onNavigate = () => {},
  className,
}: {
  orientation?: 'horizontal' | 'vertical'
  onNavigate?: () => void
  className?: string
}) => {
  const pn = usePathname()
  return (
    <NavigationMenu orientation={orientation} className={className}>
      <NavigationMenuList className='data-[orientation=vertical]:flex-col'>
        {routes.map((r, i) => {
          const isActive = pn === r.href
          return (
            <NavigationMenuItem key={i}>
              <NavigationMenuLink asChild active={isActive}>
                <Link href={r.href} onClick={onNavigate}>
                  {r.name}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          )
        })}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
