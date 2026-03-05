"use client"

import { IconClose } from "../icons/icon-close"

export function ModalClose() {
  const handleClick = () => {
    console.log("Clicking on size guide modal close...")
  }

  return (
    <button className="cursor-pointer size-6" onClick={handleClick} type="button">
      <IconClose />
    </button>
  )
}