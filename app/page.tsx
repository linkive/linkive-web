"use client";

import BottomSheet from "@/components/BottomSheet";
import FeedBox from "@/components/FeedBox";
import { useState } from "react";

export default function Login() {
  const [isSheetOpen, setSheetOpen] = useState(false);

  const toggleSheet = () => {
    setSheetOpen(!isSheetOpen);
  };
  return (
    <main className="w-full h-max">
      홈화면입니당
      {["1", "2", "3", "4", "5", "6"].map((index: string) => (
        <FeedBox key={index} videoId={index} />
      ))}
      <div className="w-full h-svh bg-white" />
    </main>
  );
}
