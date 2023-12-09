'use client'

import { MenuIcon, XIcon } from 'lucide-react'
import Link from 'next/link'
import { useDisclose } from '@/hooks'
import { DASHBOARD_ROUTE_LABELS, DASHBOARD_ROUTES } from '@/routes'

export function Sidebar() {
  const { isOpen, onToggle } = useDisclose()

  return (
    <aside className="p-4 border-r border-zinc-800 bg-zinc-900">
      <div className="mb-4">
        <button
          onClick={onToggle}
          className="hover:brightness-75 transition-all"
        >
          {isOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {isOpen && (
        <nav className="pl-1 pr-4">
          <ul className="flex flex-col gap-2">
            {Object.values(DASHBOARD_ROUTES).map((route) => (
              <li key={route}>
                <Link href={route}>{DASHBOARD_ROUTE_LABELS[route]}</Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </aside>
  )
}
