import type { Metadata } from 'next'
import { Toaster } from '@/components/atoms'
import '@/styles/globals.css'
import { AuthContextProvider } from '@/contexts'

export const metadata: Metadata = {
  title: 'Jack Marmota Admin',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Toaster />

        <AuthContextProvider>{children}</AuthContextProvider>
      </body>
    </html>
  )
}
