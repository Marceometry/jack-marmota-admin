import { SongListsContextProvider } from '@/contexts'

export default function Layout({ children }: { children: React.ReactNode }) {
  return <SongListsContextProvider>{children}</SongListsContextProvider>
}
