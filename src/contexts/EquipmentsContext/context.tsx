'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'
import { useApiCall } from '@/hooks'
import { useFirebaseDatabase } from '@/lib/firebase'
import { Equipment } from '@/types'
import {
  CreateEquipmentModel,
  EquipmentsContextData,
  EquipmentsContextProviderProps,
} from './types'

export const EquipmentsContext = createContext({} as EquipmentsContextData)

export function EquipmentsContextProvider({
  children,
}: EquipmentsContextProviderProps) {
  const { call, isLoading, setIsLoading } = useApiCall(true)
  const { onChange, add, remove } = useFirebaseDatabase<Equipment>('equipments')
  const [equipments, setEquipments] = useState<Equipment[]>([])

  const addEquipment = call(
    (data: CreateEquipmentModel) => add({ id: uuid(), ...data }),
    { toastText: 'Adicionado com sucesso!' },
  )

  const updateEquipment = call(add, { toastText: 'Atualizado com sucesso!' })

  const deleteEquipment = call(remove, { toastText: 'Excluído com sucesso!' })

  useEffect(() => {
    const unsubscribe = onChange((data) => {
      setEquipments(data)
      setIsLoading(false)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <EquipmentsContext.Provider
      value={{
        isLoading,
        equipments,
        addEquipment,
        updateEquipment,
        deleteEquipment,
      }}
    >
      {children}
    </EquipmentsContext.Provider>
  )
}

export const useEquipments = () => useContext(EquipmentsContext)
