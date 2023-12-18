import { FieldValues, Path, useFormContext } from 'react-hook-form'

export type RadioValue<V> = 'ALL' | V
export type RadioValues<V> = [RadioValue<V>, ...RadioValue<V>[]]
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
  const { register } = useFormContext<T>()
  const inputRegister = register(name)

  return (
    <fieldset className="flex gap-4">
      {options.map((option) => (
        <label
          key={option.value}
          className="flex items-center gap-1 cursor-pointer"
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
  )
}
