'use client'

import { Table, TableColumn } from '@/components/molecules'
import { SongForm } from '@/components/organisms'
import { Song, useSongs } from '@/contexts'

const columns: TableColumn<Song>[] = [
  { label: 'Nome', key: 'name' },
  { label: 'Artista', key: 'artist' },
  { label: 'Início', key: 'start' },
  { label: 'Fim', key: 'end' },
]

export default function Page() {
  const { songs } = useSongs()

  return (
    <div>
      <Table
        data={songs}
        columns={columns}
        tableHeader={<SongForm />}
        defaultSortParam="name"
      />
    </div>
  )
}
