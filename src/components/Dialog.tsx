"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useRef, useEffect, useState } from "react";
import type { ElementRef } from "react";
import Loader from "./Loader";

type DialogProps = {
  title: string,
  children: React.ReactNode,
};

export default function Dialog({ title, children }: DialogProps) {
  const dialogRef = useRef<ElementRef<"dialog">>(null);
  const [showLoader, setShowLoader] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const open = searchParams.get("show");

  useEffect(() => {
    if (open === "contact") {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [open]);

  const onClose = () => {
    dialogRef.current?.close();
    router.back();
  }

  const onSubmit = (e: EventTarget) => {
    const element = e as HTMLButtonElement;
    element.disabled;
    setShowLoader(true);

    setTimeout(() => {
      setShowLoader(false);
      onClose();
    }, 3000);
  }

  const dialogBox: JSX.Element | null = (open === "contact")
    ? (
      <dialog ref={dialogRef} className="fixed top-50 left-50 -translate-x-50 -translate-y-50 z-10  rounded-lg backdrop:bg-gray-800/50">
        <div className="w-[46rem] flex flex-col relative">
          <div className="flex flex-col p-5 border-b">
            <span className="text-lg text-gray-400">Contact</span>
            <h1 className="text-2xl font-bold">{title}</h1>
          </div>
          <div>
            {children}
            <div className="flex flex-row justify-end gap-2 p-5">
              <button className="button-alternate py-2" onClick={onClose}>Cancel</button>
              <button onClick={(e) => onSubmit(e.target)}>
                {showLoader && <Loader />}
                {!showLoader && "Contact"}
              </button>
            </div>
          </div>

          <button
            onClick={onClose}
            className="absolute right-5 top-5 bg-transparent min-w-4 min-h-4 h-4 leading-none border-0 text-gray-400 text-lg p-0"
          >x</button>
        </div>
      </dialog>
    )
    : null;

  return dialogBox
};