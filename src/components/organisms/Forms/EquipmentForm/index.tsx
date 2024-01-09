'use client'

import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Input } from '@/components/atoms'
import { Form, Modal } from '@/components/molecules'
import { useEquipments } from '@/contexts'
import { useDisclose } from '@/hooks'
import { Equipment } from '@/types'
import { EquipmentFormInputs, equipmentFormResolver } from './validation'

type Props = {
  equipment?: Equipment
  trigger?: React.ReactNode
}

export function EquipmentForm({ equipment, trigger }: Props) {
  const { addEquipment, updateEquipment } = useEquipments()
  const { isOpen, onClose, onOpenChange } = useDisclose()
  const formMethods = useForm<EquipmentFormInputs>({
    resolver: equipmentFormResolver,
  })

  useEffect(() => {
    if (equipment && isOpen) {
      formMethods.setValue('name', equipment.name)
      formMethods.setValue('category', equipment.category)
      formMethods.setValue('quantity', equipment.quantity)
    }
  }, [equipment, isOpen])

  function handleClear() {
    formMethods.reset()
    onClose()
  }

  function handleSubmit(data: EquipmentFormInputs) {
    if (equipment) {
      updateEquipment({ ...equipment, ...data })
    } else {
      addEquipment(data)
    }
    handleClear()
  }

  return (
    <Modal
      open={isOpen}
      onOpenChange={onOpenChange}
      trigger={trigger || <Button>Adicionar equipamento</Button>}
      title={equipment ? 'Editar equipamento' : 'Adicionar equipamento'}
    >
      <Form formMethods={formMethods} onSubmit={handleSubmit}>
        <div className="grid gap-4">
          <Input<EquipmentFormInputs> name="name" label="Nome" required />

          <div className="grid grid-cols-[2fr_1fr] gap-4">
            <Input<EquipmentFormInputs>
              name="category"
              label="Categoria"
              required
            />

            <Input<EquipmentFormInputs>
              name="quantity"
              label="Quantidade"
              type="number"
              min={1}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mt-2">
            <Button variant="outline" onClick={handleClear}>
              Cancelar
            </Button>
            <Button type="submit">Confirmar</Button>
          </div>
        </div>
      </Form>
    </Modal>
  )
}
