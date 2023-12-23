'use client'

import { Trash } from 'lucide-react'
import { Button, IconButton } from '@/components/atoms'
import { Modal } from '@/components/molecules'
import { useSetLists } from '@/contexts'
import { useDisclose } from '@/hooks'
import { SetList } from '@/types'

type Props = {
  setlist: SetList
}

const trigger = (
  <IconButton
    aria-label="Excluir setlist"
    className="hover:bg-zinc-600"
    icon={<Trash size={16} />}
  />
)

export function DeleteSetlistDialog({ setlist }: Props) {
  const { isOpen, onClose, onOpenChange } = useDisclose()
  const { deleteSetList } = useSetLists()

  const handleDeleteSetlist = () => {
    deleteSetList(setlist.id)
  }

  return (
    <Modal
      open={isOpen}
      onOpenChange={onOpenChange}
      trigger={trigger}
      behaviour="dialog"
      title={`Excluir "${setlist.name}"?`}
      description="Esta ação não poderá ser desfeita."
    >
      <div className="grid grid-cols-2 gap-4">
        <Button variant="outline" onClick={onClose}>
          Cancelar
        </Button>
        <Button onClick={handleDeleteSetlist}>Excluir</Button>
      </div>
    </Modal>
  )
}
