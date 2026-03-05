"use client"

import { IconMobileMenu } from "../icons/icon-mobile-menu"

export function HeaderMobileMenu() {
  const handleClick = () => {
    console.log("Clicking mobile menu...")
  }

  return (
    <button className="h-full flex items-center gap-1" onClick={handleClick} type="button">
      <IconMobileMenu className="size-6" />
      <span className="uppercase text-xs">Menu</span>
    </button>
  )
}