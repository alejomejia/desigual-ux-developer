import type { IconProps } from "./type"

export function IconClose({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <path strokeMiterlimit="10" d="m4.5 4.5 15 15M4.5 19.5l15-15" />
    </svg>
  )
}