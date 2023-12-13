'use client'

import { Table, TableColumn } from '@/components/molecules'
import { Song, useSongs } from '@/contexts'

const columns: TableColumn<Song>[] = [
  { label: 'Nome', key: 'name' },
  { label: 'Artista', key: 'artist' },
]
export default function Page() {
  const { songs } = useSongs()

  return (
    <div>
      <Table data={songs} columns={columns} defaultSortParam="name" />
    </div>
  )
}
