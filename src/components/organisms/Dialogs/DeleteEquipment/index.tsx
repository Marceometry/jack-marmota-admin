'use client'

import { Trash } from 'lucide-react'
import { Button, IconButton } from '@/components/atoms'
import { Modal } from '@/components/molecules'
import { useEquipments } from '@/contexts'
import { useDisclose } from '@/hooks'
import { Equipment } from '@/types'

type Props = {
  equipment: Equipment
}

export function DeleteEquipmentDialog({ equipment }: Props) {
  const { isOpen, onClose, onOpenChange } = useDisclose()
  const { deleteEquipment } = useEquipments()

  const handleDeleteEquipment = () => {
    deleteEquipment(equipment.id)
  }

  const trigger = (
    <IconButton aria-label="Excluir música" icon={<Trash size={16} />} />
  )

  return (
    <Modal
      open={isOpen}
      onOpenChange={onOpenChange}
      trigger={trigger}
      behaviour="dialog"
      title={`Excluir "${equipment.name}"?`}
      description="Esta ação não poderá ser desfeita."
    >
      <div className="grid grid-cols-2 gap-4">
        <Button variant="outline" onClick={onClose}>
          Cancelar
        </Button>
        <Button variant="danger" onClick={handleDeleteEquipment}>
          Excluir
        </Button>
      </div>
    </Modal>
  )
}
