"use client";
import { useUtil } from "@/contexts/util.context";
import { PropsWithChildren } from "react";
interface ModalProps {
  title: string;
}
function Modal({ title, children }: PropsWithChildren<ModalProps>) {
  const { setModal } = useUtil();
  const handleClickBackDrop = () => {
    setModal(<></>);
  };
  return (
    <div
      className="bg-black/50 flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 z-20"
      onClick={handleClickBackDrop}
    >
      <div
        className="bg-white rounded-lg w-full max-w-[440px] px-5 py-8"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="font-bold text-3xl text-center my-12">{title}</h2>
        {children}
      </div>
    </div>
  );
}

export default Modal;
