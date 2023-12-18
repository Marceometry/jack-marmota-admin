'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'
import { useApiCall } from '@/hooks'
import { useFirebaseDatabase } from '@/lib/firebase'
import {
  CreateSongModel,
  Song,
  SongFilters,
  SongsContextData,
  SongsContextProviderProps,
} from './types'

export const SongsContext = createContext({} as SongsContextData)

export function SongsContextProvider({ children }: SongsContextProviderProps) {
  const { call, isLoading, setIsLoading } = useApiCall(true)
  const { onChange, add } = useFirebaseDatabase<Song>('songs')
  const [filters, setFilters] = useState<SongFilters>({})
  const [songs, setSongs] = useState<Song[]>([])

  const addSong = call(
    (data: CreateSongModel) => add({ id: uuid(), ...data }),
    { toastText: 'Adicionada com sucesso!' },
  )

  const updateSong = call((data: Song) => add(data), {
    toastText: 'Atualizada com sucesso!',
  })

  useEffect(() => {
    const unsubscribe = onChange((data) => {
      setSongs(data)
      setIsLoading(false)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <SongsContext.Provider
      value={{
        isLoading,
        songs,
        addSong,
        updateSong,
        filters,
        setFilters,
      }}
    >
      {children}
    </SongsContext.Provider>
  )
}

export const useSongs = () => useContext(SongsContext)
