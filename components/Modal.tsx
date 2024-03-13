"use client";

import React, { ReactNode, useState, useRef, useEffect } from "react";
import { Button } from "./Button";

type ModalProps = {
  children?: ReactNode;
  title: string;
  description: string;

  button: string;
  buttonSubmit: () => void;

  subButton?: string;
  subButtonSubmit?: () => void;

  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Modal({
  children,
  title,
  description,
  button,
  buttonSubmit,
  subButton,
  subButtonSubmit,
  setShowModal,
}: ModalProps) {
  const [canClickOut, setCanClickOut] = useState(true);
  const [canDrag, setCanDrag] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Clean up function
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  return (
    <>
      <div className="  background" />
      <div className="fixed z-50 top-0 bottom-0 left-0 right-0 m-auto h-max flex flex-col justify-center items-center rounded-lg w-[256px] px-[18px] py-[30px] gap-6 bg-primary-white">
        {children && (
          <div className="flex w-[60px] h-[60px] rounded-full bg-grey-50 justify-center items-center">
            {children}
          </div>
        )}

        <div className="flex flex-col gap-5 items-center justify-center">
          <span className="font-bold text-grey-700">{title}</span>
          <pre className="text-sm text-grey-400 text-center">{description}</pre>
        </div>

        <div className="flex flex-col w-full gap-2.5">
          <Button
            text={button}
            onClick={() => {
              buttonSubmit();
              setShowModal(false);
            }}
          />
          {subButton && subButtonSubmit && (
            <Button
              status="white"
              text={subButton}
              onClick={() => {
                subButtonSubmit();
                setShowModal(false);
              }}
            />
          )}
        </div>
      </div>
    </>
  );
}
