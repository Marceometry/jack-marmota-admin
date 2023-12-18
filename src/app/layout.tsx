import type { Metadata } from 'next'
import { Toaster } from '@/components/atoms'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Jack Marmota Admin',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Toaster />

        {children}
      </body>
    </html>
  )
}
