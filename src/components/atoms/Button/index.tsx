type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  children: React.ReactNode
}

export function Button({ children, ...props }: Props) {
  return <button {...props}>{children}</button>
}
