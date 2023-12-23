'use client'

import { Table } from '@/components/molecules'
import { CopyDialog, SongFilterForm, SongForm } from '@/components/organisms'
import { songFilter, useSongs } from '@/contexts'
import { columns } from './columns'

export default function Page() {
  const { songs, filters } = useSongs()

  const hasFilters = !!Object.keys(filters).length
  const filteredSongs = hasFilters
    ? songs.filter((song) => songFilter(song, filters))
    : songs

  const tableHeader = (
    <>
      <CopyDialog list={filteredSongs} />
      <SongFilterForm />
      <SongForm />
    </>
  )

  return (
    <Table data={filteredSongs} columns={columns} tableHeader={tableHeader} />
  )
}
