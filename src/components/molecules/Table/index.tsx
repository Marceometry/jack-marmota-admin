'use client'

import { ChevronDown } from 'lucide-react'
import { useMemo, useState } from 'react'
import { twJoin } from 'tailwind-merge'
import { SearchInput } from '@/components/atoms'
import { dynamicSort, filterByText } from '@/utils'

type Item = {
  id: string | number
}

export type TableColumn<T extends Item> = {
  label: string
  key?: keyof T
  render?: (item: T) => React.ReactNode
  stopPropagation?: boolean
}

type Props<T extends Item> = {
  data: T[]
  columns: TableColumn<T>[]
  onRowClick?: (item: T) => void
  tableHeader?: React.ReactNode
  hideResultCount?: boolean
  defaultSortParam?: keyof T
  justifyHeader?: 'start' | 'end'
}

export function Table<T extends Item>({
  data,
  columns,
  onRowClick,
  tableHeader,
  hideResultCount,
  justifyHeader = 'end',
  defaultSortParam = columns.filter((c) => c.key)[0]?.key!,
}: Props<T>) {
  const [searchText, setSearchText] = useState('')
  const [sortParam, setSortParam] = useState<keyof T>(defaultSortParam)
  const [reverseSort, setReverseSort] = useState(false)

  const filteredData = useMemo(
    () => filterByText(data, columns, searchText),
    [searchText, data],
  )
  const orderedData = filteredData.sort((a, b) =>
    dynamicSort(a[sortParam], b[sortParam], reverseSort),
  )

  const handleClickSort = (key: keyof T, isActive?: boolean) => {
    setSortParam(key)
    setReverseSort(isActive ? !reverseSort : false)
  }

  return (
    <div>
      <div
        className={twJoin(
          'mb-3 gap-3 w-full flex',
          justifyHeader === 'end' ? 'justify-end' : 'justify-start',
        )}
      >
        <SearchInput clearable onChange={setSearchText} />

        {tableHeader && (
          <div className="flex items-center gap-3">{tableHeader}</div>
        )}
      </div>

      <div className="max-h-[65vh] overflow-y-auto">
        <table className="w-full overflow-hidden border-collapse bg-zinc-900">
          <thead>
            <tr>
              {columns.map(({ key, label }) => {
                const isActive = sortParam === key
                return (
                  <th key={label} className="text-left bg-zinc-800">
                    {key ? (
                      <button
                        onClick={() => handleClickSort(key, isActive)}
                        className="w-full py-2 pl-4 pr-7 flex items-center gap-1 hover:bg-zinc-700 transition-colors"
                      >
                        {label}
                        <ChevronDown
                          size={20}
                          className={twJoin(
                            'translate-y-0.5 transition-all',
                            isActive ? 'opacity-1' : 'opacity-0',
                            reverseSort ? 'rotate-180' : '',
                          )}
                        />
                      </button>
                    ) : (
                      <span className="py-2 px-4">{label}</span>
                    )}
                  </th>
                )
              })}
            </tr>
          </thead>

          <tbody>
            {!orderedData.length ? (
              <tr>
                <td colSpan={columns.length} className="p-4 text-center">
                  Não há resultados
                </td>
              </tr>
            ) : (
              orderedData.map((item) => (
                <tr
                  key={item.id}
                  onClick={() => onRowClick?.(item)}
                  className={
                    onRowClick
                      ? 'cursor-pointer transition-colors hover:bg-zinc-700 active:bg-zinc-800'
                      : ''
                  }
                >
                  {columns.map((column) => (
                    <td
                      key={column.label}
                      className="py-2 px-4 text-left border-b border-b-zinc-800"
                      onClick={
                        column.stopPropagation
                          ? (e) => e.stopPropagation()
                          : undefined
                      }
                    >
                      {(column.render
                        ? column.render?.(item)
                        : column.key
                        ? item[column.key]
                        : '') || '-'}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {!hideResultCount && !!orderedData.length && (
        <span className="pt-2 text-sm text-center block">
          {orderedData.length} resultado{orderedData.length > 1 && 's'}
        </span>
      )}
    </div>
  )
}
