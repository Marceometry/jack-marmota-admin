'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'
import { useApiCall } from '@/hooks'
import { useFirebaseDatabase } from '@/lib/firebase'
import {
  CreateSongModel,
  Song,
  SongsContextData,
  SongsContextProviderProps,
} from './types'

export const SongsContext = createContext({} as SongsContextData)

export function SongsContextProvider({ children }: SongsContextProviderProps) {
  const { call, isLoading, setIsLoading } = useApiCall(true)
  const [songs, setSongs] = useState<Song[]>([])
  const { onChange, add } = useFirebaseDatabase<Song>('songs')

  const addSong = call(
    (data: CreateSongModel) => {
      add({ id: uuid(), ...data })
    },
    { toastText: 'Música adicionada!' },
  )

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
    <SongsContext.Provider value={{ isLoading, songs, addSong }}>
      {children}
    </SongsContext.Provider>
  )
}

export const useSongs = () => useContext(SongsContext)
