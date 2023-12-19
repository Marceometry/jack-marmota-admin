'use client'

import { Edit, Trash } from 'lucide-react'
import { IconButton } from '@/components/atoms'
import { Table, TableColumn } from '@/components/molecules'
import {
  DeleteSongDialog,
  SongFilterForm,
  SongForm,
} from '@/components/organisms'
import { Song, songFilter, useSongs } from '@/contexts'

const tableHeader = (
  <div className="flex items-center gap-3">
    <SongFilterForm />
    <SongForm />
  </div>
)

const songActions = (item: Song) => (
  <div className="flex gap-3 w-fit">
    <SongForm
      song={item}
      trigger={
        <IconButton
          variant="fill"
          aria-label="Editar música"
          icon={<Edit size={16} />}
        />
      }
    />
    <DeleteSongDialog song={item} />
  </div>
)

const columns: TableColumn<Song>[] = [
  { label: 'Nome', key: 'name' },
  { label: 'Artista', key: 'artist' },
  { label: 'Início', key: 'start' },
  { label: 'Fim', key: 'end' },
  { label: 'Ações', render: songActions },
]

export function SongsTable() {
  const { songs, filters } = useSongs()

  const hasFilters = !!Object.keys(filters).length
  const filteredSongs = hasFilters
    ? songs.filter((song) => songFilter(song, filters))
    : songs

  return (
    <Table
      data={filteredSongs}
      columns={columns}
      tableHeader={tableHeader}
      defaultSortParam="name"
    />
  )
}
