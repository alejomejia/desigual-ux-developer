import { DesigualLogo } from "@/components/desigual-logo";
import { ProductGallery } from "@/components/product-gallery";
import { SizeGuideModal } from "@/components/size-guide-modal";

export default function Home() {
  return (
    <div className="grid grid-cols-2">
      <div className="relative max-h-[calc(100vh-2.5rem)] mt-10 overflow-y-scroll">
        <DesigualLogo
          className="text-white h-10 absolute top-6 left-10 mix-blend-difference"
        />
        <ProductGallery />
      </div>
      <div className="mt-10 p-10">
        <SizeGuideModal />
      </div>
    </div>
  );
}
