'use client'

import { Link } from '@/components/atoms'
import { Table } from '@/components/molecules'
import { useSetLists } from '@/contexts'
import { ROUTES } from '@/routes'
import { columns } from './columns'

export default function Page() {
  const { setLists } = useSetLists()

  const tableHeader = <Link href={ROUTES.NEW_SETLIST}>Adicionar setlist</Link>

  return <Table data={setLists} columns={columns} tableHeader={tableHeader} />
}
