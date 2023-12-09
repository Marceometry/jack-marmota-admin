'use client'

import { usePathname } from 'next/navigation'
import { DASHBOARD_ROUTE_LABELS } from '@/routes'

export function PageTitle() {
  const pathname = usePathname()

  const label = DASHBOARD_ROUTE_LABELS[pathname]

  if (!label) return null

  return (
    <div>
      <h2 className="text-2xl">{label}</h2>
    </div>
  )
}