import { format } from 'date-fns'

export const minutesToHoursText = (min?: number) => {
  if (!min) return ''

  const hours = Math.floor(min / 60)
  const minutes = min % 60

  return `${hours}h${minutes ? `${minutes}min` : ''}`
}

export const formatDateAndTime = (date: Date | string) => {
  return format(new Date(date), 'dd/MM/yyyy HH:mm')
}
