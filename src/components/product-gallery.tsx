import { Image } from "@/components/image";
import { Video } from "@/components/video";

const SINGLE_PRODUCT_ASSETS = [
  {
    src: "/assets/product-cover.webp",
    alt: "Product placeholder",
  },
  {
    src: "/assets/product-video.mp4"
  },
  {
    src: "/assets/product-01.webp",
    alt: "Product placeholder"
  },
  {
    src: "/assets/product-02.webp",
    alt: "Product placeholder"
  },
  {
    src: "/assets/product-03.webp",
    alt: "Product placeholder"
  },
  {
    src: "/assets/product-04.webp",
    alt: "Product placeholder"
  },
]

function hasVideoFileFormat(src: string) {
  return src.slice(-4) === ".mp4"
}

export function ProductGallery() {
  return (
    <div className="flex flex-col">
      {SINGLE_PRODUCT_ASSETS.map(({ src, alt }) => {
        const isVideoAsset = hasVideoFileFormat(src)

        return isVideoAsset ? (
          <Video key={src} src={src} autoPlay loop />
        ) : (
          <Image
            key={src}
            className="w-full object-cover object-center"
            src={src}
            alt={alt ?? ""}
            width={720}
            height={862}
          />
        )
      })}
    </div>
  )
}