import { RadioOption } from "./radio-option"

type RadioGroupProps = {
  name: string
  value: string
  onChange: (value: string) => void
  options: {
    value: string
    label: string
  }[]
}

export function RadioGroup({
  name,
  value,
  onChange,
  options,
}: RadioGroupProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return (
    <form className="flex items-center text-xs">
      {options.map((option) => (
        <RadioOption
          key={option.value}
          id={option.value}
          name={name}
          value={option.value}
          label={option.label}
          checked={value === option.value}
          onChange={handleChange}
        />
      ))}
    </form>
  )
}