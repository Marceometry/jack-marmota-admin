import { ReactNode } from 'react'
import { RadioValue } from '@/components/atoms'
import { Song, SongCheck, SongRegion, SongStatus } from '@/types'

export type CreateSongModel = Omit<Song, 'id'>

export type SongFilters = {
  region?: RadioValue<SongRegion>
  status?: RadioValue<SongStatus>
  checked?: RadioValue<SongCheck>
}

export type SongsContextData = {
  isLoading: boolean
  songs: Song[]
  filters: SongFilters
  setFilters: (data: SongFilters) => void
  addSong: (data: CreateSongModel) => void
  updateSong: (data: Song) => void
  deleteSong: (id: string) => void
}

export type SongsContextProviderProps = {
  children: ReactNode
}
