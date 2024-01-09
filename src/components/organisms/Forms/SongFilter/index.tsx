'use client'

import { Filter } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { Button, IconButton, RadioGroup } from '@/components/atoms'
import { Form, Modal } from '@/components/molecules'
import { useSongs } from '@/contexts'
import { useDisclose } from '@/hooks'
import {
  regionOptions,
  songFilterDefaultValues,
  SongFilterInputs,
  songFilterResolver,
  statusOptions,
} from './validation'

export function SongFilterForm() {
  const { filters, setFilters } = useSongs()
  const { isOpen, onClose, onOpenChange } = useDisclose()
  const formMethods = useForm<SongFilterInputs>({
    resolver: songFilterResolver,
    defaultValues: { ...songFilterDefaultValues, ...filters },
  })

  function handleClear() {
    setFilters(songFilterDefaultValues)
    formMethods.reset()
    onClose()
  }

  function handleSubmit(data: SongFilterInputs) {
    setFilters(data)
    onClose()
  }

  return (
    <Modal
      open={isOpen}
      onOpenChange={onOpenChange}
      title="Filtrar músicas"
      trigger={
        <IconButton aria-label="Filtrar músicas" icon={<Filter size={16} />} />
      }
    >
      <Form formMethods={formMethods} onSubmit={handleSubmit}>
        <div className="grid gap-4">
          <RadioGroup<SongFilterInputs> name="region" options={regionOptions} />
          <RadioGroup<SongFilterInputs> name="status" options={statusOptions} />

          <div className="grid grid-cols-2 gap-4 mt-4">
            <Button variant="outline" onClick={handleClear}>
              Limpar
            </Button>
            <Button type="submit">Filtrar</Button>
          </div>
        </div>
      </Form>
    </Modal>
  )
}
