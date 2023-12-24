type Props = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'id' | 'onChange'
> & {
  id: string
  value: string
  onChange: (value: string) => void
  label?: string
  options?: string[]
}

export function ControlledInput({
  id,
  onChange,
  label,
  placeholder,
  options,
  ...props
}: Props) {
  const datalistId = id + '-list'

  return (
    <div>
      {label && (
        <label htmlFor={id} className="block text-sm mb-1">
          {label}
        </label>
      )}

      <input
        {...props}
        id={id}
        list={datalistId}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder || label}
        className="w-full rounded-md text-sm py-2 px-3 border border-zinc-700 hover:border-zinc-600 placeholder:text-zinc-500 bg-transparent transition-all"
      />

      {options?.length && (
        <datalist id={datalistId}>
          {options.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </datalist>
      )}
    </div>
  )
}
