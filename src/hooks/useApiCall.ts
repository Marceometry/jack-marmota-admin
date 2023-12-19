import { useState } from 'react'
import { useToast } from '@/hooks'

type ToastText = string | ((data: any) => string)

type Callback<T extends any[]> = (...args: T) => Promise<any> | any

type Options = {
  toastText?: ToastText
  toastError?: ToastText
  toastDuration?: number
}

export const useApiCall = (startLoadingState = true) => {
  const [isLoading, setIsLoading] = useState(startLoadingState)
  const toast = useToast()

  const generateToast = (data?: any, text?: ToastText) => {
    if (!text) return
    return typeof text === 'function' ? text(data) : text
  }

  const call = <T extends any[]>(callback: Callback<T>, options?: Options) => {
    return async (...args: T) => {
      try {
        if (!navigator.onLine) {
          toast('Você está offline', 'error')
          throw new Error('Offline')
        }

        setIsLoading(true)
        const data = await callback(...args)

        if (options?.toastText) {
          const text = generateToast(data, options.toastText)
          if (text) {
            toast(text, 'success', options.toastDuration)
          }
        }

        return data
      } catch (error) {
        const text = generateToast(error, options?.toastError)
        toast(text || 'Algo deu errado', 'error', options?.toastDuration)
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }
  }

  return { call, isLoading, setIsLoading }
}
