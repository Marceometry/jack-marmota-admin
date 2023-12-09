import { MenuIcon } from 'lucide-react'

export function Sidebar() {
  return (
    <aside className="py-2 px-4 border-r border-zinc-800 bg-zinc-900">
      <button>
        <MenuIcon />
      </button>

      <nav>
        <ul></ul>
      </nav>
    </aside>
  )
}
