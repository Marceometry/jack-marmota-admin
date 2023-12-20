import { ReactNode } from 'react'
import { SetList } from '@/types'

export type CreateSetListModel = Omit<SetList, 'id'>

export type SetListFilters = {}

export type SetListsContextData = {
  isLoading: boolean
  setLists: SetList[]
  filters: SetListFilters
  setFilters: (data: SetListFilters) => void
  addSetList: (data: CreateSetListModel) => void
  updateSetList: (data: SetList) => void
  deleteSetList: (id: string) => void
}

export type SetListsContextProviderProps = {
  children: ReactNode
}
