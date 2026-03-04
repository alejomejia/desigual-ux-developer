import type { IconProps } from "./type"

export function IconPlusCircle({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 13 13" fill="none" stroke="currentColor" aria-hidden="true">
      <rect width="12" height="12" x=".5" y=".5" rx="6" />
      <path d="M3.059 6.383h6.882M6.382 9.941V3.059" />
    </svg>
  )
}