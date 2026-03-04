"use client"

import { IconSearch } from "../icons/icon-search"

export function HeaderSearch() {
  const handleClick = () => {
    console.log("Clicking search...")
  }

  return (
    <button className="cursor-pointer px-1.5 w-full h-full flex gap-1 justify-center items-center" onClick={handleClick} type="button">
      <IconSearch className="size-6" />
      <span className="uppercase">Buscar</span>
    </button>
  )
}