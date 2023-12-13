'use client'

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { useFirebaseDatabase } from '@/lib/firebase'

export type Song = {
  id: string
  name: string
  artist: string
}

export type SongsContextData = {
  isLoading: boolean
  setIsLoading: (isLoading: boolean) => void
  songs: any[]
}

export type SongsContextProviderProps = {
  children: ReactNode
}

export const SongsContext = createContext({} as SongsContextData)

export function SongsContextProvider({ children }: SongsContextProviderProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [songs, setSongs] = useState<Song[]>([])
  const { onChange } = useFirebaseDatabase<Song>('songs')

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
    <SongsContext.Provider value={{ isLoading, setIsLoading, songs }}>
      {children}
    </SongsContext.Provider>
  )
}

export const useSongs = () => useContext(SongsContext)
