import type { IconProps } from "./type"

export function IconFavorite({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <path d="M16.5 5.5v11.793l-4.5-4.5-4.5 4.5V5.5z" />
    </svg>
  )
}