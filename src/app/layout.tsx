import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jack Marmota Admin',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
