'use client'

import { FieldValues, Path, useFormContext } from 'react-hook-form'

export type InputProps<T extends FieldValues> =
  React.InputHTMLAttributes<HTMLInputElement> & {
    name: Path<T>
    label?: string
    placeholder?: string
    required?: boolean
    onValueChange?: (value: string) => void
  }

export function Input<T extends FieldValues>({
  label,
  name,
  required,
  disabled,
  placeholder,
  onValueChange,
  ...rest
}: InputProps<T>) {
  const {
    register,
    formState: { errors },
  } = useFormContext<T>()

  const error = errors[name]?.message
  const inputRegister = register(name, { required })

  return (
    <div className="relative">
      {label && (
        <label htmlFor={name}>
          {label}
          {required ? '*' : ''}
        </label>
      )}

      <input
        {...inputRegister}
        {...rest}
        id={name}
        required={required}
        disabled={disabled}
        placeholder={placeholder || label}
      />

      {typeof error === 'string' && (
        <span className="mt-1 absolute text-red-400">{error}</span>
      )}
    </div>
  )
}
