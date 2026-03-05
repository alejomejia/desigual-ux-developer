"use client"

import type { ComponentType, SVGProps } from "react"
import { IconFavorite } from "../icons/icon-favorite"
import { IconShoppingBag } from "../icons/icon-shopping-bag"
import { IconUser } from "../icons/icon-user"
import { Link } from "../link"

type ShopItemBase = {
  id: string
  label: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
}

type ShopItemButton = ShopItemBase & {
  type: "button"
  onClick: () => void
}

type ShopItemLink = ShopItemBase & {
  type: "link"
  href: string
}

type ShopItem = ShopItemButton | ShopItemLink

const HEADER_SHOP_ITEMS: ShopItem[] = [
  {
    id: "account",
    type: "link",
    href: "#",
    label: "Mi Cuenta",
    icon: IconUser,
  },
  {
    id: "favorites",
    type: "link",
    href: "#",
    label: "Favoritos",
    icon: IconFavorite,
  },
  {
    id: "shopping-bag",
    type: "button",
    onClick: () => {
      console.log("Clicking shopping bag...")
    },
    label: "Bolsa",
    icon: IconShoppingBag,
  },
]

function ShopMenuItem({ item }: { item: ShopItem }) {
  const Icon = item.icon

  if (item.type === "button") {
    return (
      <button className="cursor-pointer px-1.5 h-full flex gap-1 items-center" onClick={item.onClick} type="button">
        <Icon className="size-6" />
        <span className="hidden xl:block uppercase">{item.label}</span>
      </button>
    )
  }

  return (
    <Link className="px-1.5 h-full flex gap-1 items-center" href={item.href}>
      <Icon className="size-6" />
      <span className="hidden xl:block">{item.label}</span>
    </Link>
  )
}

export function HeaderShopMenu() {
  return (
    <nav className="h-full">
      <ul className="h-full flex items-center gap-1 md:gap-2.5">
        {HEADER_SHOP_ITEMS.map((item) => (
          <li key={item.id} className="h-full">
            <ShopMenuItem item={item} />
          </li>
        ))}
      </ul>
    </nav>
  )
}