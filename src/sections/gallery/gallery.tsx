import { useState } from "react";
import type { MouseEvent } from "react";
import SectionTitle from "../../components/common/section-title";
import GalleryPreview from "./gallery-preview";
import GalleryModal from "./gallery-modal";

const images = Array.from(
  { length: 18 },
  (_, index) => `/images/gallery${index + 1}.jpg`,
);

export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openGallery = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const preventImageAction = (e: MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
  };

  return (
    <section className="gallery-section">
      <div className="inner">
        <SectionTitle mainTitle="Gallery" subTitle="우리의 순간들" />

        <GalleryPreview
          images={images}
          openGallery={openGallery}
          preventImageAction={preventImageAction}
        />
      </div>

      <GalleryModal
        images={images}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        preventImageAction={preventImageAction}
      />
    </section>
  );
}
