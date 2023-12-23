import { format } from 'date-fns'

export const minutesToHoursText = (min?: number) => {
  if (!min) return ''

  const hours = Math.floor(min / 60)
  const minutes = min % 60

  return `${hours}h${minutes ? ` ${minutes}min` : ''}`
}

export const formatDate = (date: Date | string) => {
  try {
    return format(new Date(date), 'dd/MM/yyyy')
  } catch (error) {
    return ''
  }
}

export const dateInputToValue = (date: Date | string) => {
  try {
    return new Date(`${date} 00:00`).toISOString()
  } catch (error) {
    return ''
  }
}

export const dateValueToInput = (date?: Date | string) => {
  if (!date) return ''
  try {
    return new Date(date).toISOString().split('T')[0]
  } catch (error) {
    return ''
  }
}
