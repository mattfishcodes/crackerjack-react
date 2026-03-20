'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { routes } from '@/app/routes'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/shadcn/ui/navigation-menu'

export default function Nav({
  orientation = 'horizontal',
  onNavigate = () => {},
}: {
  orientation?: 'horizontal' | 'vertical'
  onNavigate?: () => void
}) {
  const pn = usePathname()
  return (
    <NavigationMenu orientation={orientation}>
      <NavigationMenuList>
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
