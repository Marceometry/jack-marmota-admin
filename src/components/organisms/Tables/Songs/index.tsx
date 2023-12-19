'use client'

import { Edit } from 'lucide-react'
import { IconButton } from '@/components/atoms'
import { Table, TableColumn } from '@/components/molecules'
import {
  CopyDialog,
  DeleteSongDialog,
  SongFilterForm,
  SongForm,
} from '@/components/organisms'
import { SONG_COPY_TEMPLATES } from '@/constants'
import { songFilter, useSongs } from '@/contexts'
import { Song } from '@/types'

const songActions = (item: Song) => (
  <div className="flex gap-3 w-fit">
    <SongForm
      song={item}
      trigger={
        <IconButton aria-label="Editar música" icon={<Edit size={16} />} />
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

  const tableHeader = (
    <div className="flex items-center gap-3">
      <CopyDialog list={filteredSongs} templates={SONG_COPY_TEMPLATES} />
      <SongFilterForm />
      <SongForm />
    </div>
  )

  return (
    <Table
      data={filteredSongs}
      columns={columns}
      tableHeader={tableHeader}
      defaultSortParam="name"
    />
  )
}
