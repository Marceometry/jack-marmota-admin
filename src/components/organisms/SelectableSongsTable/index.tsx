import { Table } from '@/components/molecules'
import { CopyDialog, SongFilterForm } from '@/components/organisms'
import { songFilter, useSetLists, useSongs } from '@/contexts'
import { Song } from '@/types'
import { getColumns } from './columns'

type Props = {
  isReadonly: boolean
}

export function SelectableSongsTable({ isReadonly }: Props) {
  const { selectedSongs, setSelectedSongs } = useSetLists()
  const { songs, filters } = useSongs()

  const hasFilters = !!Object.keys(filters).length
  const filteredSongs = hasFilters
    ? songs.filter((song) => songFilter(song, filters))
    : songs

  const handleChangeSong = (song: Song) => {
    const index = selectedSongs.findIndex((s) => s.id === song.id)
    const value =
      index < 0
        ? [...selectedSongs, song]
        : [...selectedSongs.slice(0, index), ...selectedSongs.slice(index + 1)]
    setSelectedSongs(value)
  }

  const tableHeader = (
    <>
      <CopyDialog list={filteredSongs} />
      <SongFilterForm />
    </>
  )

  const columns = getColumns(selectedSongs, isReadonly)

  return (
    <Table
      data={filteredSongs}
      columns={columns}
      onRowClick={!isReadonly ? handleChangeSong : undefined}
      tableHeader={tableHeader}
      justifyHeader="start"
    />
  )
}
