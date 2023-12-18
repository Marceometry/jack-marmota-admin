'use client'

import { Filter } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { Button, IconButton, RadioGroup } from '@/components/atoms'
import { Modal, Form } from '@/components/molecules'
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
  const { filters: songFilters, setFilters: setSongFilters } = useSongs()
  const { isOpen, onClose, onToggle } = useDisclose()
  const formMethods = useForm<SongFilterInputs>({
    resolver: songFilterResolver,
    defaultValues: { ...songFilterDefaultValues, ...songFilters },
  })

  function handleClear() {
    setSongFilters(songFilterDefaultValues)
    formMethods.reset()
    onClose()
  }

  function handleSubmit(data: SongFilterInputs) {
    setSongFilters(data)
    onClose()
  }

  return (
    <Modal
      open={isOpen}
      onOpenChange={onToggle}
      width={440}
      title="Filtrar músicas"
      trigger={
        <IconButton
          aria-label="Filtrar músicas"
          variant="fill"
          icon={<Filter size={20} />}
        />
      }
    >
      <Form formMethods={formMethods} onSubmit={handleSubmit}>
        <div className="grid gap-4">
          <RadioGroup<SongFilterInputs> name="region" options={regionOptions} />
          <RadioGroup<SongFilterInputs> name="status" options={statusOptions} />

          <div className="flex gap-3 mt-4">
            <Button fullWidth variant="outline" onClick={handleClear}>
              Limpar
            </Button>
            <Button fullWidth type="submit">
              Filtrar
            </Button>
          </div>
        </div>
      </Form>
    </Modal>
  )
}
