import type { MouseEvent, Dispatch, SetStateAction } from "react";

type ImageAction = (e: MouseEvent<HTMLImageElement>) => void;

// 미리보기 컴포넌트
export type GalleryPreviewProps = {
  images: string[];
  openGallery: (index: number) => void;
  preventImageAction: ImageAction;
};

// 모달 컴포넌트
export type GalleryModalProps = {
  images: string[];
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  currentIndex: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
  preventImageAction: ImageAction;
};
