import toast from 'react-hot-toast'

type ToastVariant = 'success' | 'error'

export function useToast() {
  return (
    message: string,
    variant: ToastVariant = 'success',
    duration?: number,
  ) => {
    const toastId = toast[variant](message, { duration })
    return () => toast.remove(toastId)
  }
}
