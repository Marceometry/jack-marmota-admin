import { SetListsContextProvider } from '@/contexts'

export default function Layout({ children }: { children: React.ReactNode }) {
  return <SetListsContextProvider>{children}</SetListsContextProvider>
}
