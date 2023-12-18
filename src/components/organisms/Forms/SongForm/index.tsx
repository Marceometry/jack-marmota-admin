'use client'

import { useForm } from 'react-hook-form'
import { Button, Checkbox, Input } from '@/components/atoms'
import { Drawer, Form } from '@/components/molecules'
import { Song, useSongs } from '@/contexts'
import { useDisclose } from '@/hooks'
import { SongFormInputs, songFormResolver } from './validation'

type Props = {
  song?: Song
}

export function SongForm({ song }: Props) {
  const { addSong } = useSongs()
  const { isOpen, onClose, onToggle } = useDisclose()
  const formMethods = useForm<SongFormInputs>({
    resolver: songFormResolver,
  })

  function handleClear() {
    formMethods.reset()
    onClose()
  }

  function handleSubmit(data: SongFormInputs) {
    addSong({ ...data, isReady: data.ready, isNational: data.national })
    handleClear()
  }

  return (
    <Drawer
      open={isOpen}
      onOpenChange={onToggle}
      width={440}
      trigger={<Button>Adicionar música</Button>}
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

          <div>
            <Checkbox<SongFormInputs> name="national" label="Nacional" />
            <Checkbox<SongFormInputs> name="ready" label="Pronto para tocar" />
          </div>

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
