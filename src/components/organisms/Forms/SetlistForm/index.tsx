'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Input } from '@/components/atoms'
import { Form, Modal } from '@/components/molecules'
import { useSetLists } from '@/contexts'
import { useDisclose } from '@/hooks'
import { SetList } from '@/types'
import { dateInputToValue, dateValueToInput } from '@/utils'
import { SetListFormInputs, setlistFormResolver } from './validation'

type Props = {
  setlist?: SetList
  trigger?: React.ReactNode
}

export function SetlistForm({ setlist, trigger }: Props) {
  const router = useRouter()
  const { isOpen, onClose, onOpenChange } = useDisclose()
  const { addSetList, updateSetList } = useSetLists()
  const formMethods = useForm<SetListFormInputs>({
    resolver: setlistFormResolver,
  })

  useEffect(() => {
    if (setlist && isOpen) {
      formMethods.setValue('name', setlist.name)
      formMethods.setValue('date', dateValueToInput(setlist.date))
      formMethods.setValue('duration', String(setlist.duration))
    }
  }, [setlist, isOpen])

  const handleReset = () => {
    formMethods.reset()
    onClose()
  }

  const handleSubmit = async (data: SetListFormInputs) => {
    const date = dateInputToValue(data.date)
    const duration = data.duration ? Number(data.duration) : undefined
    const payload = { ...data, duration, date }

    if (setlist) {
      const response = await updateSetList({ ...setlist, ...payload })
      if (response.error) return
      return handleReset()
    }

    const response = await addSetList(payload)
    if (response.error) return

    router.push(`/setlists/${response.data}`)
    handleReset()
  }

  return (
    <Modal
      open={isOpen}
      onOpenChange={onOpenChange}
      trigger={trigger || <Button>Adicionar setlist</Button>}
      title={setlist ? 'Editar setlist' : 'Nova setlist'}
      behaviour={setlist ? 'dialog' : 'drawer'}
    >
      <Form formMethods={formMethods} onSubmit={handleSubmit}>
        <div className="grid gap-2 mb-8">
          <Input<SetListFormInputs>
            name="name"
            label="Nome da setlist"
            required
          />

          <div className="grid grid-cols-2 gap-2">
            <Input<SetListFormInputs>
              name="date"
              type="date"
              label="Data"
              required
            />
            <Input<SetListFormInputs>
              name="duration"
              type="number"
              label="Duração (em minutos)"
            />
          </div>
        </div>

        <div className="flex gap-4">
          <Button fullWidth variant="outline" onClick={onClose}>
            Cancelar
          </Button>
          <Button fullWidth type="submit">
            Salvar
          </Button>
        </div>
      </Form>
    </Modal>
  )
}
