import { Table, TableColumn } from '@/components'

const data = [
  { id: '1', name: 'Cabo XLR/P10', quantity: 2 },
  { id: '2', name: 'Cabo P10', quantity: 4 },
]

type Item = (typeof data)[number]

const columns: TableColumn<Item>[] = [
  { label: 'Nome', key: 'name' },
  { label: 'Quantidade', key: 'quantity' },
]

export default function Page() {
  return (
    <div>
      <Table data={data} columns={columns} defaultSortParam="name" />
    </div>
  )
}
