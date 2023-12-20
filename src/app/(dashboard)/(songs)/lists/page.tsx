'use client'

import { Link } from '@/components/atoms'
import { Table } from '@/components/molecules'
import { useSongLists } from '@/contexts'
import { ROUTES } from '@/routes'
import { columns } from './columns'

export default function Page() {
  const { songLists } = useSongLists()

  const tableHeader = <Link href={ROUTES.NEW_SONG_LIST}>Adicionar lista</Link>

  return <Table data={songLists} columns={columns} tableHeader={tableHeader} />
}
