'use client'

import { useForm } from 'react-hook-form'
import { Button, Input } from '@/components/atoms'
import { Drawer, Form } from '@/components/molecules'
import { useDisclose } from '@/hooks'
import { NewEquipmentFormInputs, newEquipmentFormResolver } from './validation'

export function NewEquipmentForm() {
  const { isOpen, onClose, onToggle } = useDisclose()
  const formMethods = useForm<NewEquipmentFormInputs>({
    resolver: newEquipmentFormResolver,
  })

  function handleCancel() {
    formMethods.reset()
    onClose()
  }

  function handleSubmit(data: NewEquipmentFormInputs) {}

  return (
    <Drawer
      open={isOpen}
      onOpenChange={onToggle}
      width={440}
      trigger={<Button>Adicionar equipamento</Button>}
      title="Adicionar novo equipamento"
    >
      <Form formMethods={formMethods} onSubmit={handleSubmit}>
        <div className="grid gap-4">
          <Input name="name" label="Nome" required />

          <Input
            name="quantity"
            label="Quantidade"
            type="number"
            min={1}
            required
          />

          <div className="flex gap-3 mt-4">
            <Button fullWidth variant="outline" onClick={handleCancel}>
              Cancelar
            </Button>

            <Button fullWidth type="submit">
              Confirmar
            </Button>
          </div>
        </div>
      </Form>
    </Drawer>
  )
}
