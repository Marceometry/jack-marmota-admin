'use client'

import { Edit2 } from 'lucide-react'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { IconButton } from '@/components/atoms'
import { SelectableSongsTable, SetlistForm } from '@/components/organisms'
import { useSetLists } from '@/contexts'
import { SetList, Song } from '@/types'
import { formatDate } from '@/utils'

export default function Page() {
  const [setlist, setSetlist] = useState<SetList | null>(null)
  const [selectedSongs, setSelectedSongs] = useState<Song[]>([])
  const { onChangeItem } = useSetLists()
  const params = useParams()

  useEffect(() => {
    const id = String(params.id)
    if (!id) return

    const unsubscribe = onChangeItem(id, (data) => setSetlist(data))
    return () => {
      unsubscribe()
    }
  }, [])

  const handleChangeSong = (song: Song) => {
    const index = selectedSongs.findIndex((s) => s.id === song.id)
    const value =
      index < 0
        ? [...selectedSongs, song]
        : [...selectedSongs.slice(0, index), ...selectedSongs.slice(index + 1)]
    setSelectedSongs(value)
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
          onChangeSong={handleChangeSong}
        />
      </div>

      <div className="flex flex-col justify-between gap-4">
        <div className="flex-1">
          {!selectedSongs.length ? (
            <div className="h-full grid place-items-center">
              <p>Não há músicas selecionadas</p>
            </div>
          ) : (
            selectedSongs.map((s, i) => (
              <p key={s.name}>
                {i + 1}. {s.name}
              </p>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
