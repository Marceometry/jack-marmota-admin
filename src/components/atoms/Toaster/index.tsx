import { Toaster as RHToaster } from 'react-hot-toast'

export function Toaster() {
  return (
    <RHToaster
      toastOptions={{
        style: {
          color: '#fefefe',
          backgroundColor: '#222227',
          borderBottom: '2px solid #222227',
        },
        success: {
          duration: 3000,
          style: { borderColor: 'green' },
        },
        error: {
          duration: 5000,
          style: { borderColor: 'red' },
        },
      }}
    />
  )
}
