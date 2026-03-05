import { cn } from "@/lib/utils/helpers"

type RadioOptionProps = {
  id: string
  name: string
  value: string
  label: string
  checked?: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function RadioOption({
  id,
  name,
  value,
  label,
  checked,
  onChange,
}: RadioOptionProps) {
  return (
    <label
      htmlFor={id}
      className="cursor-pointer flex gap-2.5 items-center p-2"
    >
      <div className="relative flex items-center">
        <input
          id={id}
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          className={cn(
            "peer appearance-none cursor-pointer",
            "size-3.5 rounded-full border border-black"
          )}
        />
        <span
          className={cn(
            "absolute top-1/2 left-1/2 bg-black size-2.5 rounded-full",
            "-translate-x-1/2 -translate-y-1/2",
            "opacity-0 peer-checked:opacity-100 transition-opacity duration-200"
          )}
        />
      </div>
      <span>{label}</span>
    </label>
  )
}