import { Table } from '@/components/molecules'
import { CopyDialog, SongFilterForm } from '@/components/organisms'
import { SONG_COPY_TEMPLATES } from '@/constants'
import { songFilter, useSongs } from '@/contexts'
import { Song } from '@/types'
import { getColumns } from './columns'

type Props = {
  selectedSongs: Song[]
  onChangeSong: (song: Song) => void
}

export function SelectableSongsTable({ selectedSongs, onChangeSong }: Props) {
  const { songs, filters } = useSongs()

  const hasFilters = !!Object.keys(filters).length
  const filteredSongs = hasFilters
    ? songs.filter((song) => songFilter(song, filters))
    : songs

  const tableHeader = (
    <>
      <CopyDialog list={filteredSongs} templates={SONG_COPY_TEMPLATES} />
      <SongFilterForm />
    </>
  )

  const columns = getColumns(selectedSongs)

  return (
    <Table
      data={filteredSongs}
      columns={columns}
      onRowClick={onChangeSong}
      tableHeader={tableHeader}
      justifyHeader="start"
    />
  )
}
