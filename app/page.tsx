"use client";

import BottomSheet from "@/components/BottomSheet";
import FeedBox from "@/components/FeedBox";
import { useState } from "react";

export default function Login() {
  const [isSheetOpen, setSheetOpen] = useState(false);
  const url = "https://d3ez73fw0zma30.cloudfront.net/";

  const links = [];

  for (let i = 1; i <= 6; i++) {
    links.push(url + "output_s_video" + i + ".mp4");
    links.push(url + "output_video" + i + ".mp4");
  }

  const toggleSheet = () => {
    setSheetOpen(!isSheetOpen);
  };
  return (
    <main className="w-full h-max">
      홈화면입니당
      {links.map((index: string) => (
        <FeedBox key={index} videoId={index} />
      ))}
      <div className="w-full h-svh bg-white" />
    </main>
  );
}
