// components/CustomModalShadcn.tsx
import Image from "next/image";
import { Dialog, DialogClose, DialogContent, DialogOverlay } from "./ui/dialog";

interface CustomModalShadcnProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
}

export default function CustomModalShadcn({
  isOpen,
  onClose,
  imageSrc,
}: CustomModalShadcnProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay className="" />
      <DialogContent className="">
        <div className="relative max-w-3xl rounded-lg bg-transparent p-4 shadow-lg">
          <DialogClose
            type="button"
            onClick={onClose}
            className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
          ></DialogClose>
          <Image
            src={imageSrc}
            alt="Preview"
            width={800}
            height={800}
            className="h-full w-full rounded-lg"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
