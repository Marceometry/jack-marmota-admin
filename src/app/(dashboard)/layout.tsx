import { Header, PageTitle, Sidebar } from '@/components'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 flex">
        <Sidebar />

        <main className="flex-1 py-6 px-8 pb-0 max-w-screen-2xl">
          <PageTitle />

          {children}
        </main>
      </div>
    </div>
  )
}
