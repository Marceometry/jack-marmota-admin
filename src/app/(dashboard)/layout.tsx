import { Header, PageTitle, Sidebar } from '@/components/organisms'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 flex">
        <Sidebar />

        <main className="flex-1 py-6 px-8">
          <PageTitle />

          {children}
        </main>
      </div>
    </div>
  )
}
