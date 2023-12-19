'use client'

import { usePathname } from 'next/navigation'
import { DASHBOARD_ROUTE_LABELS } from '@/routes'

export function PageTitle() {
  const pathname = usePathname()

  const paths = pathname.slice(1).split('/')

  const labels = paths.map((_, index, array) => {
    const path = array.slice(0, index + 1).join('/')
    return { path, label: DASHBOARD_ROUTE_LABELS[`/${path}`] }
  })

  if (!labels?.length) return null

  return (
    <div>
      <h2 className="mb-4 text-2xl font-medium">
        {labels.map((item) => item.label).join(' > ')}
      </h2>
    </div>
  )
}
