import { ReactNode } from 'react'

export type Song = {
  id: string
  name: string
  artist: string
  isNational: boolean
  isReady: boolean
  end: string
  start: string
}

export type CreateSongModel = Omit<Song, 'id'>

export type SongsContextData = {
  isLoading: boolean
  songs: Song[]
  addSong: (data: CreateSongModel) => {}
}

export type SongsContextProviderProps = {
  children: ReactNode
}
