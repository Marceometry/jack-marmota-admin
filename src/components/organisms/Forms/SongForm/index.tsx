'use client'

import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Input, RadioGroup } from '@/components/atoms'
import { Form, Modal } from '@/components/molecules'
import { useSongs } from '@/contexts'
import { useDisclose } from '@/hooks'
import { Song } from '@/types'
import {
  regionOptions,
  SongFormInputs,
  songFormResolver,
  statusOptions,
} from './validation'

type Props = {
  song?: Song
  trigger?: React.ReactNode
}

export function SongForm({ song, trigger }: Props) {
  const { addSong, updateSong } = useSongs()
  const { isOpen, onClose, onOpenChange } = useDisclose()
  const formMethods = useForm<SongFormInputs>({ resolver: songFormResolver })

  useEffect(() => {
    if (song && isOpen) {
      formMethods.setValue('name', song.name)
      formMethods.setValue('artist', song.artist)
      formMethods.setValue('region', song.region)
      formMethods.setValue('status', song.status)
      formMethods.setValue('end', song.end)
      formMethods.setValue('start', song.start)
    }
  }, [song, isOpen])

  function handleClear() {
    formMethods.reset()
    onClose()
  }

  function handleSubmit(data: SongFormInputs) {
    if (song) {
      updateSong({ ...song, ...data })
    } else {
      addSong(data)
    }
    handleClear()
  }

  return (
    <Modal
      open={isOpen}
      onOpenChange={onOpenChange}
      trigger={trigger || <Button>Adicionar música</Button>}
      title={song ? 'Editar música' : 'Adicionar música'}
    >
      <Form formMethods={formMethods} onSubmit={handleSubmit}>
        <div className="grid gap-4">
          <Input<SongFormInputs> name="name" label="Nome" required />
          <Input<SongFormInputs> name="artist" label="Artista" required />

          <div className="flex gap-4">
            <Input<SongFormInputs> name="start" label="Início" />
            <Input<SongFormInputs> name="end" label="Fim" />
          </div>

          <RadioGroup<SongFormInputs> name="region" options={regionOptions} />
          <RadioGroup<SongFormInputs> name="status" options={statusOptions} />

          <div className="grid grid-cols-2 gap-3 mt-2">
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
