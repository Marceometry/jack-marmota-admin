'use client'

import { Trash } from 'lucide-react'
import { Button, IconButton } from '@/components/atoms'
import { Modal } from '@/components/molecules'
import { useSongs } from '@/contexts'
import { useDisclose } from '@/hooks'
import { Song } from '@/types'

type Props = {
  song: Song
}

export function DeleteSongDialog({ song }: Props) {
  const { isOpen, onClose, onToggle } = useDisclose()
  const { deleteSong } = useSongs()

  const handleDeleteSong = () => {
    deleteSong(song.id)
  }

  const trigger = (
    <IconButton aria-label="Excluir música" icon={<Trash size={16} />} />
  )

  return (
    <Modal
      open={isOpen}
      onOpenChange={onToggle}
      trigger={trigger}
      behaviour="dialog"
      title={`Excluir ${song.name}?`}
      description="Esta ação não poderá ser desfeita."
    >
      <div className="grid grid-cols-2 gap-4">
        <Button variant="outline" onClick={onClose}>
          Cancelar
        </Button>
        <Button onClick={handleDeleteSong}>Excluir</Button>
      </div>
    </Modal>
  )
}
