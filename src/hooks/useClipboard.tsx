import { useToast } from '@/hooks'
import { stringifyList } from '@/utils'

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
