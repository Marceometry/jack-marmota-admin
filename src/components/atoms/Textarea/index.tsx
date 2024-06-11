'use client'

import { FieldValues, Path, useFormContext } from 'react-hook-form'
import { twJoin } from 'tailwind-merge'

export type TextareaProps<T extends FieldValues> =
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    name: Path<T>
    label?: string
    placeholder?: string
    required?: boolean
    onValueChange?: (value: string) => void
    options?: string[]
  }

export function Textarea<T extends FieldValues>({
  label,
  name,
  required,
  disabled,
  placeholder,
  onValueChange,
  options,
  ...props
}: TextareaProps<T>) {
  const { register } = useFormContext<T>()

  const inputRegister = register(name, { required })

  return (
    <div className="relative">
      {label && (
        <label htmlFor={name} className="block text-sm mb-1">
          {label}
          {required ? '*' : ''}
        </label>
      )}

      <textarea
        {...inputRegister}
        {...props}
        id={name}
        required={required}
        disabled={disabled}
        placeholder={placeholder || label}
        className={twJoin(
          'w-full flex-1 text-sm rounded-md py-2 px-3',
          'border border-zinc-700 hover:border-zinc-600 placeholder:text-zinc-500 bg-transparent transition-colors',
        )}
      />
    </div>
  )
}
