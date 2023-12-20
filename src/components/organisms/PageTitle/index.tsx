'use client'

import { usePathname } from 'next/navigation'
import { ROUTE_LABELS } from '@/routes'

export function PageTitle() {
  const pathname = usePathname()

  const label = ROUTE_LABELS[pathname]

  if (!label) return null

  return (
    <div className="mb-4 text-xl font-medium">
      <strong>{label}</strong>
    </div>
  )
}
