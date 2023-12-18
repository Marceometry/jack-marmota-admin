'use client'

import { ChevronDown } from 'lucide-react'
import { useMemo, useState } from 'react'
import { twJoin } from 'tailwind-merge'
import { SearchInput } from '@/components/atoms'
import { dynamicSort, filterByText } from '@/utils'

type Item = {
  id: string | number
  [x: string]: React.ReactNode
}

export type TableColumn<T extends Item> = {
  label: string
  key?: keyof T
  render?: (item: T) => React.ReactNode
}

type Props<T extends Item> = {
  data: T[]
  columns: TableColumn<T>[]
  defaultSortParam: keyof T
  hideResultCount?: boolean
  tableHeader?: React.ReactNode
}

export function Table<T extends Item>({
  data,
  columns,
  defaultSortParam,
  hideResultCount,
  tableHeader,
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
      <div className="mb-2 gap-4 w-full flex justify-end">
        <SearchInput clearable onChange={setSearchText} />

        {tableHeader}
      </div>

      <div className="max-h-[65vh] overflow-y-auto">
        <table className="w-full rounded-md overflow-hidden border-collapse bg-zinc-900">
          <thead>
            <tr>
              {columns.map(({ key, label }, index) => {
                const isActive = sortParam === key
                return (
                  <th key={label} className="text-left bg-zinc-800">
                    {key ? (
                      <button
                        onClick={() => handleClickSort(key, isActive)}
                        className={twJoin(
                          'w-full py-2 pl-4 pr-7 flex items-center gap-1 hover:bg-zinc-700 transition-colors',
                          index === 0
                            ? 'rounded-tl-md'
                            : index === columns.length - 1
                            ? 'rounded-tr-md'
                            : '',
                        )}
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
              orderedData.map((item) => {
                return (
                  <tr key={item.id}>
                    {columns.map((column) => (
                      <td
                        key={column.label}
                        className="py-2 px-4 text-left border-b border-b-zinc-800"
                      >
                        {(column.key
                          ? item[column.key]
                          : column.render?.(item)) || '-'}
                      </td>
                    ))}
                  </tr>
                )
              })
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
