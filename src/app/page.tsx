import { DesigualLogo } from "@/components/desigual-logo";
import { ProductGallery } from "@/components/product-gallery";
import { SizeGuideModal } from "@/components/size-guide-modal";
import { cn } from "@/lib/utils/helpers";

export default function Home() {
  return (
    <div className="flex items-stretch min-h-screen">
      <div className="hidden md:flex flex-1 basis-1/2 relative mt-10">
        <div className={cn(
          /* 
          * Allows to have a scrollable container for the gallery with a specific max-height 
          * but grows if flex sibling grows in height 
          * */
          "w-full min-h-full max-h-[calc(100vh-2.5rem)] overflow-y-auto"
        )}>
          <DesigualLogo className="text-white h-10 absolute top-6 left-10 mix-blend-difference" />
          <ProductGallery />
        </div>
      </div>

      <div className="w-full flex-1 basis-1/2 mt-10 p-6 md:p-10">
        <SizeGuideModal />
      </div>
    </div>
  );
}
