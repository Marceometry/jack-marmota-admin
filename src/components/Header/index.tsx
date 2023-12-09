import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <header className="w-full py-2 px-4 border-b border-zinc-800 bg-zinc-900">
      <div className="mt-1 w-fit">
        <Link href="/">
          <Image src="/logo.png" alt="" width={150} height={31} />
        </Link>
      </div>
    </header>
  )
}
