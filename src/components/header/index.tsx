import { HeaderAnnouncement } from "./header-announcement";
import { HeaderCategoriesMenu } from "./header-categories-menu";
import { HeaderSearch } from "./header-search";
import { HeaderShopMenu } from "./header-shop-menu";

export function Header() {
  return (
    <header className="w-full h-10 border-b border-brand-gray uppercase text-xs">
      <div className="w-full h-full max-w-360 mx-auto flex gap-12">
        <div className="flex-1 flex gap-12">
          <HeaderCategoriesMenu />
          <HeaderAnnouncement />
        </div>
        <div className="flex">
          <div className="min-w-34 border-r border-brand-gray">
            <HeaderSearch />
          </div>
          <HeaderShopMenu />
        </div>
      </div>
    </header>
  )
}