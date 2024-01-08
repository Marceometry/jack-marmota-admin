import Image from 'next/image'
import Link from 'next/link'
import { LogoutDialog } from '@/components/organisms'
import { ROUTES } from '@/routes'

export function Header() {
  return (
    <header className="w-full flex items-center justify-between py-2 px-5 border-b border-zinc-800 bg-zinc-900">
      <div className="w-fit">
        <Link
          href={ROUTES.HOME}
          className="pt-1 pl-1 -ml-1 block rounded transition-shadow"
        >
          <Image src="/logo.png" alt="" width={150} height={31} priority />
        </Link>
      </div>

      <LogoutDialog />
    </header>
  )
}
