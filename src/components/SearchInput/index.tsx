'use client'

import { Search, XIcon } from 'lucide-react'
import { useRef } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
  clearable?: boolean
  onChange?: (value: string) => void
}

export function SearchInput({
  onChange,
  className,
  clearable = true,
  placeholder = 'Pesquisar...',
  ...props
}: Props) {
  const ref = useRef<HTMLInputElement | null>(null)

  function clearInput() {
    onChange?.('')
    ref.current?.focus()
  }

  return (
    <div className="flex items-center relative">
      <Search size={18} className="absolute left-2" />

      <input
        {...props}
        ref={ref}
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
        className={twMerge(
          'w-full flex-1 text-sm rounded-md py-2 pl-8 border border-zinc-700 placeholder:text-zinc-500 bg-transparent transition-all',
          clearable ? 'pr-8' : 'pr-3',
          className,
        )}
      />

      {clearable && props.value && (
        <button
          className="absolute right-2 rounded hover:brightness-75 transition-all"
          onClick={clearInput}
        >
          <XIcon size={18} />
        </button>
      )}
    </div>
  )
}
