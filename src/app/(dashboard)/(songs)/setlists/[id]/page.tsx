'use client'

import { Edit2 } from 'lucide-react'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { IconButton } from '@/components/atoms'
import {
  SelectableSongsTable,
  SelectedSongsContainer,
  SelectedSongsHeader,
  SetlistForm,
} from '@/components/organisms'
import { useSetLists } from '@/contexts'
import { SetList, Song } from '@/types'
import { formatDate } from '@/utils'

export default function Page() {
  const [isLoading, setIsLoading] = useState(true)
  const [isReadonly, setIsReadonly] = useState(true)
  const [setlist, setSetlist] = useState<SetList | null>(null)
  const [selectedSongs, setSelectedSongs] = useState<Song[]>([])
  const { onChangeItem } = useSetLists()
  const params = useParams()

  useEffect(() => {
    const id = String(params.id)
    if (!id) return

    setIsLoading(true)
    const unsubscribe = onChangeItem(id, (data) => {
      setSetlist(data)
      setSelectedSongs(data?.songs || [])
      setIsLoading(false)
    })

    return () => {
      unsubscribe()
    }
  }, [])

  if (!isLoading && !setlist) {
    return (
      <div className="h-full grid place-items-center">
        <p>Setlist não encontrada.</p>
      </div>
    )
  }

  const title = setlist
    ? `${setlist.name} - ${formatDate(setlist.date)}`
    : 'Carregando...'

  return (
    <div className="grid grid-cols-2 gap-8">
      <div>
        <div className="flex gap-2 mb-6">
          <h2 className="text-xl font-bold">{title}</h2>

          {!!setlist && (
            <SetlistForm
              setlist={setlist}
              trigger={
                <IconButton
                  variant="ghost"
                  aria-label="Editar setlist"
                  icon={<Edit2 size={16} />}
                  className="px-2"
                />
              }
            />
          )}
        </div>

        <SelectableSongsTable
          selectedSongs={selectedSongs}
          setSelectedSongs={setSelectedSongs}
          isReadonly={isReadonly}
        />
      </div>

      {!!setlist && (
        <div className="flex flex-col justify-between gap-6">
          <SelectedSongsHeader
            setlist={setlist}
            selectedSongs={selectedSongs}
            setSelectedSongs={setSelectedSongs}
            isReadonly={isReadonly}
            setIsReadonly={setIsReadonly}
          />

          <SelectedSongsContainer songs={selectedSongs} />
        </div>
      )}
    </div>
  )
}
