import { Header, Sidebar } from '@/components'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 flex">
        <Sidebar />

        <main className="flex-1 p-6 pb-0">{children}</main>
      </div>
    </div>
  )
}
