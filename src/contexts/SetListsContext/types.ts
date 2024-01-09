import { Unsubscribe } from 'firebase/database'
import { ReactNode } from 'react'
import { ApiResponse } from '@/hooks'
import { SetList, Song } from '@/types'

export type CreateSetListModel = Omit<SetList, 'id' | 'songs' | 'songsCount'>

export type SetListsContextData = {
  isLoading: boolean
  setlists: SetList[]
  onChangeItem: (id: string, cb: (data: SetList) => void) => Unsubscribe
  addSetList: (data: CreateSetListModel) => Promise<ApiResponse<string>>
  updateSetList: (data: SetList) => Promise<ApiResponse>
  deleteSetList: (id: string) => Promise<ApiResponse>
  selectedSongs: Song[]
  setSelectedSongs: (songs: Song[]) => void
}

export type SetListsContextProviderProps = {
  children: ReactNode
}
