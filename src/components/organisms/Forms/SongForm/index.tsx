'use client'

import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Input, RadioGroup } from '@/components/atoms'
import { Drawer, Form } from '@/components/molecules'
import { Song, useSongs } from '@/contexts'
import { useDisclose } from '@/hooks'
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
  const { isOpen, onClose, onToggle } = useDisclose()
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
    song ? updateSong({ ...song, ...data }) : addSong(data)
    handleClear()
  }

  return (
    <Drawer
      open={isOpen}
      onOpenChange={onToggle}
      width={440}
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

          <div className="flex gap-3 mt-4">
            <Button fullWidth variant="outline" onClick={handleClear}>
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
