'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'
import { useApiCall } from '@/hooks'
import { useFirebaseDatabase } from '@/lib/firebase'
import { SongList } from '@/types'
import {
  CreateSongListModel,
  SongListFilters,
  SongListsContextData,
  SongListsContextProviderProps,
} from './types'

export const SongListsContext = createContext({} as SongListsContextData)

export function SongListsContextProvider({
  children,
}: SongListsContextProviderProps) {
  const { call, isLoading, setIsLoading } = useApiCall(true)
  const { onChange, add, remove } = useFirebaseDatabase<SongList>('song-lists')
  const [filters, setFilters] = useState<SongListFilters>({})
  const [songLists, setSongLists] = useState<SongList[]>([])

  const addSongList = call(
    (data: CreateSongListModel) => add({ id: uuid(), ...data }),
    { toastText: 'Adicionada com sucesso!' },
  )

  const updateSongList = call((data: SongList) => add(data), {
    toastText: 'Atualizada com sucesso!',
  })

  const deleteSongList = call((id: string) => remove(id), {
    toastText: 'Excluída com sucesso!',
  })

  useEffect(() => {
    const unsubscribe = onChange((data) => {
      setSongLists(data)
      setIsLoading(false)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <SongListsContext.Provider
      value={{
        isLoading,
        songLists,
        filters,
        setFilters,
        addSongList,
        updateSongList,
        deleteSongList,
      }}
    >
      {children}
    </SongListsContext.Provider>
  )
}

export const useSongLists = () => useContext(SongListsContext)
