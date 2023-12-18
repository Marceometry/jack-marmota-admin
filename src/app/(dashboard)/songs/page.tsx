'use client'

import { Table, TableColumn } from '@/components/molecules'
import { SongFilterForm, SongForm } from '@/components/organisms'
import { Song, songFilter, useSongs } from '@/contexts'

const columns: TableColumn<Song>[] = [
  { label: 'Nome', key: 'name' },
  { label: 'Artista', key: 'artist' },
  { label: 'Início', key: 'start' },
  { label: 'Fim', key: 'end' },
]

export default function Page() {
  const { songs, songFilters } = useSongs()

  const hasFilters = !!Object.keys(songFilters).length
  const filteredSongs = hasFilters
    ? songs.filter((song) => songFilter(song, songFilters))
    : songs

  const header = (
    <div className="flex items-center gap-2">
      <SongFilterForm />
      <SongForm />
    </div>
  )

  return (
    <Table
      data={filteredSongs}
      columns={columns}
      tableHeader={header}
      defaultSortParam="name"
    />
  )
}
