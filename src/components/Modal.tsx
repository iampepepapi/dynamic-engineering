// components/Modal.tsx
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
}

export default function Modal({ isOpen, onClose, imageSrc }: ModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        onClose={onClose}
      >
        <div className="flex min-h-screen items-center justify-center p-4">
          {/* Custom Overlay */}
          <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
          <Transition
            as={Fragment}
            enter="transition ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Panel className="relative mx-auto max-w-3xl rounded-lg bg-white p-4 shadow-lg">
              <button
                type="button"
                onClick={onClose}
                className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <Image
                src={imageSrc}
                alt="Preview"
                width={500}
                height={500}
                className="h-auto w-full rounded-lg"
              />
            </Dialog.Panel>
          </Transition>
        </div>
      </Dialog>
    </Transition>
  );
}
