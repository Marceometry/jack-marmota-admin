import { Unsubscribe } from 'firebase/database'
import { ReactNode } from 'react'
import { ApiResponse } from '@/hooks'
import { SetList } from '@/types'

export type CreateSetListModel = Omit<SetList, 'id' | 'songs' | 'songsCount'>

export type SetListFilters = {}

export type SetListsContextData = {
  isLoading: boolean
  setlists: SetList[]
  filters: SetListFilters
  setFilters: (data: SetListFilters) => void
  onChangeItem: (id: string, cb: (data: SetList) => void) => Unsubscribe
  addSetList: (data: CreateSetListModel) => Promise<ApiResponse<string>>
  updateSetList: (data: SetList) => Promise<ApiResponse>
  deleteSetList: (id: string) => Promise<ApiResponse>
}

export type SetListsContextProviderProps = {
  children: ReactNode
}
