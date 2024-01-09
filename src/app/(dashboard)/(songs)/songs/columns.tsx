import { Edit } from 'lucide-react'
import { IconButton } from '@/components/atoms'
import { TableColumn } from '@/components/molecules'
import { DeleteSongDialog, SongForm } from '@/components/organisms'
import { Song } from '@/types'

const editTrigger = (
  <IconButton aria-label="Editar música" icon={<Edit size={16} />} />
)

const actions = (item: Song) => (
  <div className="flex gap-4 w-fit">
    <SongForm song={item} trigger={editTrigger} />
    <DeleteSongDialog song={item} />
  </div>
)

export const columns: TableColumn<Song>[] = [
  { label: 'Nome', key: 'name' },
  { label: 'Artista', key: 'artist' },
  { label: 'Início', key: 'start' },
  { label: 'Fim', key: 'end' },
  { label: 'Ações', render: actions },
]
