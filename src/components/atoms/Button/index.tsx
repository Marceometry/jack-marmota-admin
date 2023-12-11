import { twMerge } from 'tailwind-merge'

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  children: React.ReactNode
  variant?: 'fill' | 'outline'
}

export function Button({
  children,
  className,
  type = 'button',
  variant = 'fill',
  ...props
}: Props) {
  return (
    <button
      {...props}
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
}
