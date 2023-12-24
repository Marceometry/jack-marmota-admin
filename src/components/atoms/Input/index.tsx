'use client'

import { FieldValues, Path, useFormContext } from 'react-hook-form'
import { twJoin } from 'tailwind-merge'

export type InputProps<T extends FieldValues> =
  React.InputHTMLAttributes<HTMLInputElement> & {
    name: Path<T>
    label?: string
    placeholder?: string
    required?: boolean
    onValueChange?: (value: string) => void
    options?: string[]
  }

export function Input<T extends FieldValues>({
  label,
  name,
  required,
  disabled,
  placeholder,
  onValueChange,
  options,
  ...props
}: InputProps<T>) {
  const {
    register,
    formState: { errors },
  } = useFormContext<T>()

  const error = errors[name]?.message
  const inputRegister = register(name, { required })
  const datalistId = options?.length ? name + '-list' : undefined

  return (
    <div className="relative">
      {label && (
        <label htmlFor={name} className="block text-sm mb-1">
          {label}
          {required ? '*' : ''}
        </label>
      )}

      <input
        {...inputRegister}
        {...props}
        id={name}
        list={datalistId}
        required={required}
        disabled={disabled}
        placeholder={placeholder || label}
        className={twJoin(
          'w-full flex-1 text-sm rounded-md py-2 px-3',
          'border border-zinc-700 hover:border-zinc-600 placeholder:text-zinc-500 bg-transparent transition-all',
        )}
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

      {typeof error === 'string' && (
        <span className="block mt-1 text-xs text-red-400">{error}</span>
      )}
    </div>
  )
}
