import { useToast } from '@/hooks'

const templateReplace = (item: object, index: number, template: string) => {
  return Object.entries(item)
    .reduce((acc, [key, value]) => {
      return acc.replaceAll(`{${key}}`, value)
    }, template)
    .replaceAll('{index}', String(index + 1))
}

const stringifyList = (list: object[], template: string) => {
  return list
    .map((item, index) => templateReplace(item, index, template))
    .join('\n')
}

export const useClipboard = (template: string) => {
  const toast = useToast()

  const copyToClipboard = (text: string) => {
    try {
      navigator?.clipboard.writeText(text)
      toast('Copiado para a área de transferência')
    } catch (error) {
      alert(error)
      toast('Algo deu errado ao copiar o texto')
    }
  }

  const copy = (list: object[]) => {
    const listAsString = stringifyList(list, template)
    copyToClipboard(listAsString)
  }

  return copy
}
