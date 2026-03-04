import type { IconProps } from "./type"

export function IconSearch({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <circle cx="11" cy="11" r="4.5" />
      <path d="m17.646 18.354-4-4" />
    </svg>
  )
}