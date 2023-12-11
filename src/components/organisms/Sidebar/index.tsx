'use client'

import { MenuIcon, XIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { twJoin } from 'tailwind-merge'
import { useDisclose } from '@/hooks'
import {
  DASHBOARD_ROUTE_ICONS,
  DASHBOARD_ROUTE_LABELS,
  DASHBOARD_ROUTES,
} from '@/routes'

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
      <button
        onClick={onToggle}
        className="m-4 rounded hover:brightness-75 transition-all"
      >
        {isOpen ? <XIcon /> : <MenuIcon />}
      </button>

      <nav>
        <ul>
          {Object.values(DASHBOARD_ROUTES).map((route) => {
            const Icon = DASHBOARD_ROUTE_ICONS[route]
            const label = DASHBOARD_ROUTE_LABELS[route]
            const isActive = route === pathname

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
                  <Icon className="shrink-0" />
                  <span
                    className={twJoin(
                      'transition-opacity whitespace-nowrap',
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
