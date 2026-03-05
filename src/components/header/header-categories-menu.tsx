import { cn } from "@/lib/utils/helpers"

import { Link } from "../link"
import { HeaderMobileMenu } from "./header-mobile-menu"

const HEADER_CATEGORIES_ITEMS = [
  {
    id: "mujer",
    href: "#",
    label: "Mujer"
  },
  {
    id: "hombre",
    href: "#",
    label: "Hombre"
  },
  {
    id: "kids",
    href: "#",
    label: "Kids"
  },
]

export function HeaderCategoriesMenu() {


  return (
    <nav className="h-full">
      <div className="h-full block sm:hidden">
        <HeaderMobileMenu />
      </div>
      <ul className="hidden sm:flex h-full items-center gap-3 md:gap-5.5">
        {HEADER_CATEGORIES_ITEMS.map(({ id, href, label }, index) => {
          // Active items must be compared by current path and href
          // In this case just for UI work, I'm gonna use index based active classname
          const isItemActive = index === 0

          return (
            <li key={id}>
              <Link
                href={href}
                className={cn(
                  {
                    "border-b pb-0.5": isItemActive,
                    "hover:opacity-40 transition-opacity duration-300": !isItemActive
                  }
                )}
              >
                {label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}