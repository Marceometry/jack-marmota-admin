import { TableColumn } from '@/components/molecules'
import { SongList } from '@/types'
import { formatDate, minutesToHoursText } from '@/utils'

export const columns: TableColumn<SongList>[] = [
  {
    label: 'Data',
    key: 'date',
    render: ({ date }) => formatDate(date),
  },
  { label: 'Nome', key: 'name' },
  {
    label: 'Tamanho',
    key: 'songs',
    render: ({ songsCount }) => songsCount + ' músicas',
  },
  {
    label: 'Duração',
    key: 'duration',
    render: ({ duration }) => minutesToHoursText(duration),
  },
]
