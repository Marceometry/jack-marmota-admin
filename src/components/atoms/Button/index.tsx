import { ForwardedRef, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  children: React.ReactNode
  variant?: 'fill' | 'outline'
  fullWidth?: boolean
}

export const Button = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLButtonElement>) => {
    const {
      children,
      className,
      fullWidth,
      type = 'button',
      variant = 'fill',
      ...rest
    } = props

    return (
      <button
        {...rest}
        ref={ref}
        type={type}
        className={twMerge(
          'py-2 px-6 text-sm rounded-md transition-all hover:bg-zinc-700',
          variant === 'fill'
            ? 'border border-zinc-800 bg-zinc-800'
            : 'border border-zinc-700',
          fullWidth ? 'w-full' : '',
          className,
        )}
      >
        {children}
      </button>
    )
  },
)
