import { Button } from '@/components/atoms'
import { Drawer, Table, TableColumn } from '@/components/molecules'

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
      <Table
        data={data}
        columns={columns}
        tableHeader={
          <Drawer
            width={440}
            trigger={<Button>Adicionar equipamento</Button>}
            title="Adicionar novo equipamento"
          >
            <span></span>
          </Drawer>
        }
        defaultSortParam="name"
        hideResultCount
      />
    </div>
  )
}
