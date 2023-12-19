import { ReactNode } from 'react'
import { SongList } from '@/types'

export type CreateSongListModel = Omit<SongList, 'id'>

export type SongListFilters = {}

export type SongListsContextData = {
  isLoading: boolean
  songLists: SongList[]
  filters: SongListFilters
  setFilters: (data: SongListFilters) => void
  addSongList: (data: CreateSongListModel) => void
  updateSongList: (data: SongList) => void
  deleteSongList: (id: string) => void
}

export type SongListsContextProviderProps = {
  children: ReactNode
}
