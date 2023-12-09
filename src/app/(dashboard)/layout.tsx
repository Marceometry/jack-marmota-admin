import { Header, PageTitle, Sidebar } from '@/components'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 flex">
        <Sidebar />

        <main className="flex-1 py-4 px-8 pb-0">
          <PageTitle />

          {children}
        </main>
      </div>
    </div>
  )
}
