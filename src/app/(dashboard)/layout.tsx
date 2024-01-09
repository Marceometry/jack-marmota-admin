'use client'

import { Loader } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Header, PageTitle, Sidebar } from '@/components/organisms'
import { useAuth } from '@/contexts'

export default function Layout({ children }: { children: React.ReactNode }) {
  const { user, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (isLoading) return
    if (!user) router.replace('/login')
  }, [isLoading, user])

  if (isLoading || !user) {
    return (
      <div className="h-screen grid place-items-center">
        <Loader className="animate-spin" />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 flex">
        <Sidebar />

        <main className="flex-1 py-6 px-8">
          <div className="flex justify-between">
            <PageTitle />
          </div>

          {children}
        </main>
      </div>
    </div>
  )
}
