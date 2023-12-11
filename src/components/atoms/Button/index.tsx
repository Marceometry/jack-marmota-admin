import { ForwardedRef, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  children: React.ReactNode
  variant?: 'fill' | 'outline'
}

export const Button = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLButtonElement>) => {
    const { children, className, type = 'button', variant = 'fill' } = props

    return (
      <button
        {...props}
        ref={ref}
        type={type}
        className={twMerge(
          'py-2 px-6 rounded-md text-sm transition-all hover:bg-zinc-700',
          variant === 'fill'
            ? 'border border-zinc-800 bg-zinc-800'
            : 'border border-zinc-700',
          className,
        )}
      >
        {children}
      </button>
    )
  },
)
