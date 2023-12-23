import { Button } from '@/components/atoms'
import { CancelEdit, CopyDialog } from '@/components/organisms'
import { useSetLists } from '@/contexts'
import { useDisclose } from '@/hooks'
import { SetList, Song } from '@/types'

type Props = {
  setlist: SetList
  selectedSongs: Song[]
  setSelectedSongs: (value: Song[]) => void
  isReadonly: boolean
  setIsReadonly: (value: boolean) => void
}

export function SelectedSongsHeader({
  setlist,
  selectedSongs,
  setSelectedSongs,
  isReadonly,
  setIsReadonly,
}: Props) {
  const { isOpen, onClose, onOpenChange } = useDisclose()
  const { updateSetList } = useSetLists()

  const handleUpdateSetlist = () => {
    updateSetList({
      ...setlist,
      songs: selectedSongs,
      songsCount: selectedSongs.length,
    })
    setIsReadonly(true)
  }

  const handleEdit = () => {
    setIsReadonly(false)
  }

  const handleCancel = () => {
    setIsReadonly(true)
    setSelectedSongs(setlist?.songs || [])
    onClose()
  }

  return (
    <div className="flex justify-between gap-4">
      <CopyDialog list={selectedSongs} />

      <div className="flex gap-4">
        <CancelEdit
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          onConfirm={handleCancel}
          trigger={
            !isReadonly ? (
              <Button className="w-32" variant="outline">
                Cancelar
              </Button>
            ) : null
          }
        />

        {isReadonly ? (
          <Button className="w-32" onClick={handleEdit}>
            Editar
          </Button>
        ) : (
          <Button className="w-32" fullWidth onClick={handleUpdateSetlist}>
            Salvar
          </Button>
        )}
      </div>
    </div>
  )
}
