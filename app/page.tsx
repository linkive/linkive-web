"use client";

import BottomSheet from "@/components/BottomSheet";
import { useState } from "react";

export default function Login() {
  const [isSheetOpen, setSheetOpen] = useState(false);

  const toggleSheet = () => {
    setSheetOpen(!isSheetOpen);
  };
  return (
    <main className="w-full h-dvh ">
      홈화면입니당
      <div>
        <button onClick={toggleSheet}>Toggle Bottom Sheet</button>
        <BottomSheet isOpen={isSheetOpen} onClose={() => setSheetOpen(false)} />
      </div>
    </main>
  );
}
