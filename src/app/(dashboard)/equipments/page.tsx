import { Table, TableColumn } from '@/components/molecules'
import { NewEquipmentForm } from '@/components/organisms'

const data = [
  { id: '1', name: 'Cabo XLR/P10', quantity: 2, category: 'Cabos' },
  { id: '2', name: 'Cabo P10', quantity: 4, category: 'Cabos' },
]

type Item = (typeof data)[number]

const columns: TableColumn<Item>[] = [
  { label: 'Nome', key: 'name' },
  { label: 'Categoria', key: 'category' },
  { label: 'Quantidade', key: 'quantity' },
]

export default function Page() {
  return (
    <Table
      data={data}
      columns={columns}
      tableHeader={<NewEquipmentForm />}
      hideResultCount
    />
  )
}
