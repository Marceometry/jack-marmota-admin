import { Route } from 'next'
import NextLink from 'next/link'
import { twMerge } from 'tailwind-merge'

type Props = {
  href: Route
  children: React.ReactNode
  className?: string
  variant?: 'fill' | 'outline'
  fullWidth?: boolean
}

export function Link({
  href,
  children,
  className,
  fullWidth,
  variant = 'fill',
}: Props) {
  return (
    <NextLink
      href={href}
      className={twMerge(
        'py-2 px-6 rounded-md transition-all hover:bg-zinc-700',
        variant === 'fill'
          ? 'border border-zinc-800 bg-zinc-800'
          : 'border border-zinc-700',
        fullWidth ? 'w-full' : '',
        className,
      )}
    >
      {children}
    </NextLink>
  )
}
