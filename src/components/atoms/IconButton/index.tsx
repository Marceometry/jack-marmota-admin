import { twMerge } from 'tailwind-merge'

type Props = {
  onClick?: () => void
  className?: string
  variant?: 'fill' | 'text'
  icon: React.ReactNode
  'aria-label': string
}

export function IconButton({
  className,
  icon,
  variant = 'text',
  ...props
}: Props) {
  return (
    <button
      {...props}
      type="button"
      className={twMerge(
        'rounded-md transition-all',
        variant === 'fill'
          ? 'border border-zinc-800 bg-zinc-800 hover:bg-zinc-700'
          : 'hover:brightness-75',
        className,
      )}
    >
      {icon}
    </button>
  )
}
