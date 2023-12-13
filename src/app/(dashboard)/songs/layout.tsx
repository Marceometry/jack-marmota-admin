import { SongsContextProvider } from '@/contexts'

export default function Layout({ children }: { children: React.ReactNode }) {
  return <SongsContextProvider>{children}</SongsContextProvider>
}
