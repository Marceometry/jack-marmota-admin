import { RadioOption } from '@/components/atoms'

export const enumToRadioOption = <T extends object>(
  obj: T,
): RadioOption<keyof T>[] => {
  return Object.entries(obj).map(([key, value]) => ({
    label: value,
    value: key as keyof T,
  }))
}
