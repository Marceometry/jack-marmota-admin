'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'
import { useApiCall } from '@/hooks'
import { useFirebaseDatabase } from '@/lib/firebase'
import { SetList } from '@/types'
import {
  CreateSetListModel,
  SetListFilters,
  SetListsContextData,
  SetListsContextProviderProps,
} from './types'

export const SetListsContext = createContext({} as SetListsContextData)

export function SetListsContextProvider({
  children,
}: SetListsContextProviderProps) {
  const { call, isLoading, setIsLoading } = useApiCall(true)
  const { onChange, onChangeItem, add, remove } =
    useFirebaseDatabase<SetList>('setlists')
  const [filters, setFilters] = useState<SetListFilters>({})
  const [setlists, setSetlists] = useState<SetList[]>([])

  const addSetList = call(
    async (data: CreateSetListModel) => {
      const id = uuid()
      await add({ id, ...data, songs: [], songsCount: 0 })
      return id
    },
    { toastText: 'Adicionada com sucesso!' },
  )

  const updateSetList = call((data: SetList) => add(data), {
    toastText: 'Atualizada com sucesso!',
  })

  const deleteSetList = call((id: string) => remove(id), {
    toastText: 'Excluída com sucesso!',
  })

  useEffect(() => {
    const unsubscribe = onChange((data) => {
      setSetlists(data)
      setIsLoading(false)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <SetListsContext.Provider
      value={{
        isLoading,
        setlists,
        filters,
        setFilters,
        onChangeItem,
        addSetList,
        updateSetList,
        deleteSetList,
      }}
    >
      {children}
    </SetListsContext.Provider>
  )
}

export const useSetLists = () => useContext(SetListsContext)
