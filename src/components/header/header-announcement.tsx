import { cn } from "@/lib/utils/helpers";

import { IconPlusCircle } from "../icons/icon-plus-circle";
import { Link } from "../link";

const ANNOUNCEMENT_MESSAGE = "Envíos gratis a partir de 50€ · Devolución a 30 días"

export function HeaderAnnouncement() {
  return (
    <Link
      href="#"
      className={cn(
        "w-full max-w-122 h-full px-4",
        "hidden lg:flex gap-2 justify-center items-center",
        "bg-brand-salmon/80",
        "group/announcement"
      )}>
      <span>{ANNOUNCEMENT_MESSAGE}</span>
      <IconPlusCircle className="shrink-0 size-3" />
    </Link>
  )
}