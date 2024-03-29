'use client'

import { MenuIcon, XIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { twJoin } from 'tailwind-merge'
import { IconButton } from '@/components/atoms'
import { useDisclose } from '@/hooks'
import { ROUTE_ICONS, ROUTE_LABELS, SIDEBAR_ROUTES } from '@/routes'

export function Sidebar() {
  const { isOpen, onToggle } = useDisclose({ defaultValue: true })
  const pathname = usePathname()

  return (
    <aside
      className={twJoin(
        'border-r border-zinc-800 bg-zinc-900 transition-all duration-500 overflow-hidden',
        isOpen ? 'w-48' : 'w-14',
      )}
    >
      <IconButton
        onClick={onToggle}
        icon={isOpen ? <XIcon /> : <MenuIcon />}
        aria-label={isOpen ? 'Fechar barra lateral' : 'Abrir barra lateral'}
        variant="ghost"
        className="m-4"
      />

      <nav>
        <ul>
          {Object.values(SIDEBAR_ROUTES).map((route) => {
            const Icon = ROUTE_ICONS[route]
            const label = ROUTE_LABELS[route]
            const isActive =
              route.length === 1 ? pathname === '/' : pathname.startsWith(route)

            return (
              <li key={route}>
                <Link
                  href={route}
                  title={label}
                  className={twJoin(
                    'py-2 px-3 border-x-4 border-transparent flex items-center gap-2 transition-all hover:bg-zinc-700',
                    isActive ? 'text-yellow-500 border-l-yellow-500' : '',
                  )}
                >
                  <Icon className="shrink-0" size={20} />
                  <span
                    className={twJoin(
                      'transition-all whitespace-nowrap',
                      isOpen
                        ? 'duration-500'
                        : 'duration-200 opacity-0 invisible',
                    )}
                  >
                    {label}
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}
