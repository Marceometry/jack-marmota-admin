import { Edit } from 'lucide-react'
import { IconButton } from '@/components/atoms'
import { TableColumn } from '@/components/molecules'
import { DeleteEquipmentDialog, EquipmentForm } from '@/components/organisms'
import { Equipment } from '@/types'

const editTrigger = (
  <IconButton aria-label="Editar equipamento" icon={<Edit size={16} />} />
)

const actions = (item: Equipment) => (
  <div className="flex gap-4 w-fit">
    <EquipmentForm equipment={item} trigger={editTrigger} />
    <DeleteEquipmentDialog equipment={item} />
  </div>
)

export const columns: TableColumn<Equipment>[] = [
  { label: 'Nome', key: 'name' },
  { label: 'Categoria', key: 'category' },
  { label: 'Quantidade', key: 'quantity' },
  { label: 'Ações', render: actions },
]
