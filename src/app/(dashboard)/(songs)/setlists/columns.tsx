import { Edit } from 'lucide-react'
import { IconButton } from '@/components/atoms'
import { TableColumn } from '@/components/molecules'
import { DeleteSetlistDialog, SetlistForm } from '@/components/organisms'
import { SetList } from '@/types'
import { formatDate, minutesToHoursText } from '@/utils'

const editTrigger = (
  <IconButton
    aria-label="Editar música"
    className="hover:bg-zinc-600"
    icon={<Edit size={16} />}
  />
)

const actions = (item: SetList) => (
  <div className="flex gap-4 w-fit">
    <SetlistForm setlist={item} trigger={editTrigger} />
    <DeleteSetlistDialog setlist={item} />
  </div>
)

export const columns: TableColumn<SetList>[] = [
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
  { label: 'Ações', render: actions, stopPropagation: true },
]
