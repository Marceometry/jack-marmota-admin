'use client'

import { Table } from '@/components/molecules'
import { EquipmentForm } from '@/components/organisms'
import { useEquipments } from '@/contexts'
import { columns } from './columns'

export default function Page() {
  const { equipments } = useEquipments()

  return (
    <Table
      data={equipments}
      columns={columns}
      tableHeader={<EquipmentForm />}
      hideResultCount
    />
  )
}
