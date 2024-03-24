"use client";

import BottomSheet from "@/components/BottomSheet";
import FeedBox from "@/components/FeedBox";
import { useEffect, useState } from "react";

export default function Login() {
  const [isSheetOpen, setSheetOpen] = useState(false);

  useEffect(() => {
    async function fetchVideoUrl() {
      try {
        // Fetch 요청
        const response = await fetch("https://api.linkive.co.kr/test/log", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",

            Authorization: "Bearer 1234",
          },
        });

        if (!response.ok) {
          throw new Error("Network response error");
        }

        const data = await response.json();

        console.log(data);
      } catch (error) {
        console.error("Error occurs", error);
      }
    }
    fetchVideoUrl();
  }, []);

  const url = "https://d3ez73fw0zma30.cloudfront.net/";

  const links = [];

  for (let i = 7; i <= 18; i++) {
    links.push(url + "output_video" + i + ".mp4");
  }

  const toggleSheet = () => {
    setSheetOpen(!isSheetOpen);
  };
  return (
    <main className="w-full h-max">
      테스트화면입니다
      {links.map((index: string) => (
        <FeedBox key={index} videoId={index} />
      ))}
      <div className="w-full h-svh bg-white" />
    </main>
  );
}
