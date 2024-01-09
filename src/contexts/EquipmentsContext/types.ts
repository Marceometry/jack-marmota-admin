import { ReactNode } from 'react'
import { Equipment } from '@/types'

export type CreateEquipmentModel = Omit<Equipment, 'id'>

export type EquipmentsContextData = {
  isLoading: boolean
  equipments: Equipment[]
  addEquipment: (data: CreateEquipmentModel) => void
  updateEquipment: (data: Equipment) => void
  deleteEquipment: (id: string) => void
}

export type EquipmentsContextProviderProps = {
  children: ReactNode
}
