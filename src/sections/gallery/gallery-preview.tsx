import { Button } from "@/components/ui/button";
import type { GalleryPreviewProps } from "@/ts/gallery";

export default function GalleryPreview({
  images,
  openGallery,
  preventImageAction,
}: GalleryPreviewProps) {
  return (
    <>
      {/* Masonry Gallery */}
      <div className="mt-10 columns-2 gap-2">
        {images.slice(0, 8).map((image, index) => (
          <button
            key={image}
            type="button"
            className="group mb-2 block w-full cursor-pointer break-inside-avoid overflow-hidden"
            onClick={() => openGallery(index)}
          >
            <img
              src={image}
              alt={`웨딩 사진 ${index + 1}`}
              loading="lazy"
              draggable={false}
              onContextMenu={preventImageAction}
              className="block h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {/* 전체 보기 */}
      <Button
        type="button"
        variant="ghost"
        onClick={() => openGallery(0)}
        className="mt-8 flex h-auto w-full cursor-pointer items-center justify-center rounded-none border-0 border-y border-[var(--line-color)]/30 py-4 text-xs font-normal tracking-widest text-[var(--point-color)] hover:bg-[var(--point-color)] hover:text-white"
      >
        VIEW ALL +
      </Button>
    </>
  );
}
