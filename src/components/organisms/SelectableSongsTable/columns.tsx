import { Checkbox } from '@/components/atoms'
import { TableColumn } from '@/components/molecules'
import { Song } from '@/types'

export const getColumns = (selectedSongs: Song[]): TableColumn<Song>[] => [
  { label: 'Nome', key: 'name' },
  { label: 'Artista', key: 'artist' },
  {
    label: 'Início/Fim',
    key: 'start',
    render: ({ start, end }) => start && end && `${start}/${end}`,
  },
  {
    label: 'Marcado',
    render: ({ id }) => (
      <div className="flex justify-center">
        <Checkbox checked={!!selectedSongs.find((s) => s.id === id)} />
      </div>
    ),
  },
]
