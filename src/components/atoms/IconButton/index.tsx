import { ForwardedRef, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  onClick?: () => void
  className?: string
  square?: boolean
  variant?: 'fill' | 'ghost'
  icon: React.ReactNode
  'aria-label': string
}

export const IconButton = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLButtonElement>) => {
    const { className, icon, square = true, variant = 'fill', ...rest } = props
    return (
      <button
        {...rest}
        ref={ref}
        type="button"
        className={twMerge(
          'rounded-md transition-all',
          variant === 'fill'
            ? 'p-2.5 border border-zinc-800 bg-zinc-800 hover:bg-zinc-700'
            : 'hover:brightness-75',
          square ? 'aspect-square' : '',
          className,
        )}
      >
        {icon}
      </button>
    )
  },
)
