import { isBefore, isValid } from 'date-fns'

const alphabeticallySort = (a: string, b: string, reverse?: boolean) => {
  return reverse ? b.localeCompare(a) : a.localeCompare(b)
}

const dateSort = (a: string, b: string, oldestFirst?: boolean) => {
  const date1 = new Date(a)
  const date2 = new Date(b)
  if (oldestFirst)
    return isBefore(date2, date1) ? 1 : isBefore(date1, date2) ? -1 : 0
  return isBefore(date1, date2) ? 1 : isBefore(date2, date1) ? -1 : 0
}

export const dynamicSort = (a: any, b: any, reverse?: boolean) => {
  if (isValid(new Date(a))) return dateSort(a, b, reverse)
  if (typeof a === 'string') return alphabeticallySort(a, b, reverse)
  if (typeof a === 'number') {
    if (reverse) return a - b
    return b - a
  }
  return 0
}
