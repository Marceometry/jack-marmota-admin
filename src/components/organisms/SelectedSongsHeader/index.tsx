import { Button } from '@/components/atoms'
import {
  CancelEdit,
  ClearSongs,
  CopyDialog,
  PrintSetlistForm,
} from '@/components/organisms'
import { useSetLists, useSongs } from '@/contexts'
import { useDisclose } from '@/hooks'
import { SetList, Song } from '@/types'

type Props = {
  setlist: SetList
  isReadonly: boolean
  setIsReadonly: (value: boolean) => void
}

export function SelectedSongsHeader({
  setlist,
  isReadonly,
  setIsReadonly,
}: Props) {
  const {
    isOpen: isOpenCancelDialog,
    onClose: onCloseCancelDialog,
    onOpenChange: onOpenChangeCancelDialog,
  } = useDisclose()
  const {
    isOpen: isOpenClearDialog,
    onClose: onCloseClearDialog,
    onOpenChange: onOpenChangeClearDialog,
  } = useDisclose()
  const { updateSetList, selectedSongs, setSelectedSongs } = useSetLists()
  const { songs } = useSongs()

  const handleUpdateSetlist = () => {
    updateSetList({
      ...setlist,
      songs: selectedSongs
        .map((song) => songs.find(({ id }) => id === song.id))
        .filter((song) => !!song) as Song[],
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
    onCloseCancelDialog()
  }

  const handleClear = () => {
    setSelectedSongs([])
    onCloseClearDialog()
  }

  return (
    <div className="flex justify-between gap-4">
      <div className="flex gap-2">
        {!isReadonly && (
          <ClearSongs
            isOpen={isOpenClearDialog}
            onOpenChange={onOpenChangeClearDialog}
            onConfirm={handleClear}
          />
        )}
        <PrintSetlistForm songs={selectedSongs} />
        <CopyDialog list={selectedSongs} />
      </div>

      <div className="flex gap-4">
        <CancelEdit
          isOpen={isOpenCancelDialog}
          onOpenChange={onOpenChangeCancelDialog}
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
