import { FieldValues, Path, useFormContext } from 'react-hook-form'

export type RadioValue<V> = 'ALL' | V
export enum RadioDefaultValueLabel {
  ALL = 'Todas',
}

export type RadioOption<S = string> = { label: string; value: S }

type Props<T> = {
  options: RadioOption[]
  name: Path<T>
}

export const RadioGroup = <T extends FieldValues>({
  options,
  name,
}: Props<T>) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<T>()

  const error = errors[name]?.message
  const inputRegister = register(name)

  return (
    <div>
      <fieldset className="flex gap-4">
        {options.map((option) => (
          <label
            key={option.value}
            className="flex items-center gap-1.5 cursor-pointer"
          >
            <input
              type="radio"
              className="cursor-pointer"
              value={option.value}
              {...inputRegister}
            />
            {option.label}
          </label>
        ))}
      </fieldset>

      {typeof error === 'string' && (
        <span className="block mt-1 text-xs text-red-400">{error}</span>
      )}
    </div>
  )
}
