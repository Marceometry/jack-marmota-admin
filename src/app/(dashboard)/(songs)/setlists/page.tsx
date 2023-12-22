'use client'

import { Route } from 'next'
import { useRouter } from 'next/navigation'
import { Table } from '@/components/molecules'
import { SetlistForm } from '@/components/organisms'
import { useSetLists } from '@/contexts'
import { ROUTES } from '@/routes'
import { SetList } from '@/types'
import { columns } from './columns'

const tableHeader = <SetlistForm />

export default function Page() {
  const { setlists } = useSetLists()
  const router = useRouter()

  const handleRowClick = (data: SetList) => {
    router.push(`/setlists/${data.id}`)
  }

  return (
    <Table
      data={setlists}
      columns={columns}
      tableHeader={tableHeader}
      onRowClick={handleRowClick}
    />
  )
}
