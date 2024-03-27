"use client";

import Image from "next/image";
import style from "../style/home.module.css";
import { useEffect, useState } from "react";

export const RankBar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  const info = ["여자 무스탕", "트위드 자켓", "아무거나 엄청 긴 거 작성"];

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(0); // 우선 opacity를 0으로 만들어 사라지게 함
      setTimeout(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % info.length);
        setOpacity(1); // 그 다음 index를 업데이트하고 opacity를 1로 만들어 다시 나타나게 함
      }, 150); // 이 timeout은 opacity 변화 후 새로운 값을 세팅하는데 약간의 지연을 줍니다.
    }, 2000);

    return () => clearInterval(interval);
  }, [info.length]);
  return (
    <div className="flex w-full h-[46px]">
      <div
        key={activeIndex}
        className="flex w-full px-5 py-4 items-center gap-1 text-sm font-medium transition-opacity"
        style={{ opacity: opacity }}
      >
        <span className="flex w-6">{activeIndex + 1}</span>
        <span className="flex flex-grow relative">{info[activeIndex]}</span>

        <Image
          src={!(activeIndex % 2) ? "/icon/rank_up.svg" : "/icon/rank_down.svg"}
          width={12}
          height={12}
          alt="Profile"
        />
      </div>
    </div>
  );
};

export default RankBar;
