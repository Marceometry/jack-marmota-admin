import { TableColumn } from '@/components/molecules'

export const filterByText = (
  data: any[],
  columns: TableColumn<any>[],
  text: string,
) => {
  if (!text) return data
  return data.filter((item) => {
    return !!columns.filter((column) => {
      if (!column.key) return false
      return String(item[column.key]).toLowerCase().includes(text.toLowerCase())
    }).length
  })
}
