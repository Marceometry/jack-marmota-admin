import { FieldValues, Path, useFormContext } from 'react-hook-form'

type Props<T> = {
  name: Path<T>
  label: string
}

export function Checkbox<T extends FieldValues>({ name, label }: Props<T>) {
  const { register } = useFormContext<T>()
  const inputRegister = register(name)

  return (
    <label className="w-fit flex items-center gap-2 cursor-pointer">
      <input {...inputRegister} type="checkbox" />
      {label}
    </label>
  )
}
