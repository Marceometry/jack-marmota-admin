import { EquipmentsContextProvider } from '@/contexts'

export default function Layout({ children }: { children: React.ReactNode }) {
  return <EquipmentsContextProvider>{children}</EquipmentsContextProvider>
}
