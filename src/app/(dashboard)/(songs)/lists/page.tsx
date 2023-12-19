'use client'

import { Link } from '@/components/atoms'
import { Table } from '@/components/molecules'
import { useSongLists } from '@/contexts'
import { columns } from './columns'

export default function Page() {
  const { songLists } = useSongLists()

  const tableHeader = <Link href="/">Adicionar lista</Link>

  return <Table data={songLists} columns={columns} tableHeader={tableHeader} />
}
