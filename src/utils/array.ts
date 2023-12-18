import { RadioOption } from '@/components/atoms'

export const enumToRadioOption = <T extends object>(
  obj: T,
): RadioOption<keyof T>[] => {
  return Object.entries(obj).map(([key, value]) => ({
    label: value,
    value: key as keyof T,
  }))
}

export const enumToStringArray = <T extends { [key: string]: any }>(
  obj: T,
): [keyof T, ...(keyof T)[]] => {
  const keys = Object.keys(obj)
  return [keys[0], ...keys.slice(1)]
}
