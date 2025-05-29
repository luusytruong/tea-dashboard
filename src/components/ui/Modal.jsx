"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Modal = ({ children }) => {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="absolute inset-0 z-[100]">
      <div className="fixed w-full h-full flex md:items-center md:justify-center overflow-auto">
        <div className="fixed inset-0 bg-[#0b0b0bcc]" onClick={handleClose} />
        <div className="relative z-5 w-full h-fit py-8 md:p-0 md:max-w-3xl">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
