import style from "@/style/bottomSheet.module.css";
import React, { useState, ReactNode, useEffect } from "react";
import cn from "classnames";
import useScrollBlock from "@/hooks/useScrollBlock";

interface BottomSheeetProps {
  firstHeight?: number;
  onOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
}

const BottomSheet = ({
  onOpen,
  children,
  firstHeight = 386,
}: BottomSheeetProps) => {
  useScrollBlock(true);

  return (
    <>
      <button
        className={`fixed inset-0 bg-black z-20 opacity-45`}
        onClick={() => onOpen(false)}
      />
      <div
        className={`safeArea fixed max-width m-auto z-30 bottom-0 left-0 right-0 bg-white rounded-t-lg transition-transform`}
        style={{ height: firstHeight }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-center rounded-t-lg items-center w-full h-7 bg-inherit">
          <div className="w-[60px] h-1 bg-grey-200" />
        </div>
        <div className="w-full" style={{ height: firstHeight - 28 }}>
          {children}
        </div>
      </div>
    </>
  );
};

export default BottomSheet;
