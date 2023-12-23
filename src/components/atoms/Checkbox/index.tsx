type Props = {
  label?: string
  disabled?: boolean
  checked?: boolean
  onChange?: (value: boolean) => void
}

export function Checkbox({ label, disabled, checked, onChange }: Props) {
  return (
    <label className="w-fit flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        className="h-4 w-4 cursor-pointer"
        disabled={disabled}
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
      />
      {label}
    </label>
  )
}
