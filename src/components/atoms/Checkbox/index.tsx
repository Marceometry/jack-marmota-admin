type Props = {
  label?: string
  checked?: boolean
  onChange?: (value: boolean) => void
}

export function Checkbox({ label, checked, onChange }: Props) {
  return (
    <label className="w-fit flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        className="h-4 w-4 cursor-pointer"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
      />
      {label}
    </label>
  )
}
