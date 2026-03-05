import { HeaderAnnouncement } from "./header-announcement";
import { HeaderCategoriesMenu } from "./header-categories-menu";
import { HeaderSearch } from "./header-search";
import { HeaderShopMenu } from "./header-shop-menu";

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 bg-white w-full h-10 px-10 border-b border-brand-gray uppercase text-xs">
      <div className="w-full h-full flex gap-6">
        <div className="flex-1 flex gap-12">
          <HeaderCategoriesMenu />
          <HeaderAnnouncement />
        </div>
        <div className="flex">
          <div className="min-w-34 mr-4 border-r border-brand-gray">
            <HeaderSearch />
          </div>
          <HeaderShopMenu />
        </div>
      </div>
    </header>
  )
}