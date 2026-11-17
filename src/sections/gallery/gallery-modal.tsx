import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import type { GalleryModalProps } from "@/ts/gallery";

export default function GalleryModal({
  images,
  isOpen,
  setIsOpen,
  currentIndex,
  setCurrentIndex,
  preventImageAction,
}: GalleryModalProps) {
  const [api, setApi] = useState<CarouselApi>();

  // 슬라이드 변경 감지
  useEffect(() => {
    if (!api || !isOpen) return;

    const updateIndex = () => {
      setCurrentIndex(api.selectedScrollSnap());
    };

    api.on("select", updateIndex);

    return () => {
      api.off("select", updateIndex);
    };
  }, [api, isOpen, setCurrentIndex]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        showCloseButton={false}
        className="fixed! inset-0! top-0! left-0! z-50 flex! h-dvh! w-screen! max-w-none! translate-x-0! translate-y-0! items-center justify-center overflow-hidden rounded-none border-0 bg-black p-0 text-white"
      >
        <DialogTitle className="sr-only">웨딩 갤러리</DialogTitle>

        {/* 닫기 버튼 */}
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5 z-50 text-white hover:bg-white/20 hover:text-white"
          aria-label="갤러리 닫기"
        >
          <X className="size-6" />
        </Button>

        {/* 이미지 캐러셀 */}
        {isOpen && (
          <Carousel
            setApi={setApi}
            opts={{
              loop: true,
              startIndex: currentIndex,
              align: "center",
            }}
            className="w-full min-w-0"
          >
            <CarouselContent className="ml-0">
              {images.map((image, index) => (
                <CarouselItem
                  key={image}
                  className="flex h-dvh min-w-0 basis-full items-center justify-center pl-0"
                >
                  <img
                    src={image}
                    alt={`웨딩 사진 ${index + 1}`}
                    className="block h-auto max-h-[80dvh] max-w-[90vw] object-contain select-none"
                    draggable={false}
                    onContextMenu={preventImageAction}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        )}

        {/* 이전 버튼 */}
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={() => api?.scrollPrev()}
          className="absolute top-1/2 left-3 z-50 -translate-y-1/2 text-white hover:bg-white/20 hover:text-white"
          aria-label="이전 사진"
        >
          <ArrowLeft />
        </Button>

        {/* 다음 버튼 */}
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={() => api?.scrollNext()}
          className="absolute top-1/2 right-3 z-50 -translate-y-1/2 text-white hover:bg-white/20 hover:text-white"
          aria-label="다음 사진"
        >
          <ArrowRight />
        </Button>

        {/* 이미지 번호 */}
        <div className="absolute bottom-8 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 text-sm tracking-widest text-white">
          <span>{String(currentIndex + 1).padStart(2, "0")}</span>

          <span>/</span>

          <span>{String(images.length).padStart(2, "0")}</span>
        </div>
      </DialogContent>
    </Dialog>
  );
}
