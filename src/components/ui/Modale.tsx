import type { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm"
    >
      <div
        className="bg-black border relative text-slate-100 font-geist border-orange-500 p-6 rounded-lg shadow-lg max-w-md w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="px-4 py-2 m-1 font-family-decifer text-2xl border border-orange-500 rounded-md hover:bg-orange-500 cursor-pointer absolute top-2 right-2"
        >
          X
        </button>
        {children}

      </div>
    </div>
  );
}