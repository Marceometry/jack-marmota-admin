import { ReactNode } from 'react'
import { RadioValue } from '@/components/atoms'

export enum SongRegionLabel {
  'NATIONAL' = 'Nacional',
  'INTERNATIONAL' = 'Internacional',
}
export type SongRegion = keyof typeof SongRegionLabel

export enum SongStatusLabel {
  'READY' = 'Pronto',
  'IN_REHEARSAL' = 'Em ensaio',
}
export type SongStatus = keyof typeof SongStatusLabel

export type Song = {
  id: string
  name: string
  artist: string
  region: SongRegion
  status: SongStatus
  end: string
  start: string
}

export type CreateSongModel = Omit<Song, 'id'>

export type SongFilters = {
  region?: RadioValue<SongRegion>
  status?: RadioValue<SongStatus>
}

export type SongsContextData = {
  isLoading: boolean
  songs: Song[]
  addSong: (data: CreateSongModel) => void
  songFilters: SongFilters
  setSongFilters: (data: SongFilters) => void
}

export type SongsContextProviderProps = {
  children: ReactNode
}
