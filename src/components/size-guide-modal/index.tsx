"use client"

import { ModalClose } from "./modal-close"
import { SizeGuideTabs } from "./tabs"

export function SizeGuideModal() {
  return (
    <div>
      <div className="flex justify-end mb-6">
        <ModalClose />
      </div>
      <div className="mb-10">
        <h3 className="mb-4 text-xl">Guía de tallas</h3>
        <h4 className="mb-1 text-base">Partes de abajo</h4>
        <p className="text-[0.8rem]">Pantalones, faldas y vaqueros</p>
      </div>
      <SizeGuideTabs />
    </div>
  )
}