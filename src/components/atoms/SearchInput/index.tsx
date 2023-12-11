'use client'

import { Search, XIcon } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { useDebouncedValue } from '@/hooks'

type Props = {
  className?: string
  placeholder?: string
  clearable?: boolean
  onChange?: (value: string) => void
}

export function SearchInput({
  onChange,
  className,
  clearable = true,
  placeholder = 'Pesquisar...',
}: Props) {
  const [text, setText] = useState('')
  const debouncedValue = useDebouncedValue(text)
  const ref = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    onChange?.(debouncedValue)
  }, [debouncedValue])

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value)
  }

  function clearInput() {
    setText('')
    ref.current?.focus()
  }

  return (
    <div className="flex items-center relative">
      <Search size={18} className="absolute left-3 cursor-text" />

      <input
        ref={ref}
        value={text}
        onChange={handleChange}
        placeholder={placeholder}
        className={twMerge(
          'w-full flex-1 text-sm rounded-md py-2 pl-10 border border-zinc-700 placeholder:text-zinc-500 bg-transparent transition-all',
          clearable ? 'pr-8' : 'pr-3',
          className,
        )}
      />

      {clearable && text && (
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
