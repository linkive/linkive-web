"use client";

import { useEffect, useRef } from "react"; // useRef를 추가로 임포트합니다.
import { ButtonXS } from "@/components/Button";

export default function Timeline({
  items,
  onItemClicked,
  activeIndex,
}: {
  items: string[];
  onItemClicked: (index: number) => void;
  activeIndex: number;
}) {
  const navRef = useRef<HTMLDivElement | null>(null); // ref의 타입을 지정합니다.

  useEffect(() => {
    if (navRef.current) {
      const activeElement = navRef.current.children[
        activeIndex
      ] as HTMLDivElement; // 타입 단언을 사용합니다.
      if (activeElement) {
        const scrollLeft = activeElement.offsetLeft - navRef.current.offsetLeft;
        console.log(scrollLeft);
        navRef.current.scrollLeft = -scrollLeft;
      }
    }
  }, [activeIndex]);

  return (
    <nav ref={navRef} className="flex gap-2 justify-center">
      {items.map((item, index) => (
        <TimesetItem
          key={index}
          number={item}
          onClick={() => onItemClicked(index)}
          isActive={activeIndex === index}
        />
      ))}
    </nav>
  );
}

function TimesetItem({
  number,
  onClick,
  isActive,
}: {
  number: string;
  onClick: () => void;
  isActive: boolean;
}) {
  return (
    <div className="flex flex-shrink-0">
      <ButtonXS
        status={isActive ? "default" : "white"}
        text={number}
        onClick={() => {
          onClick(); // Call the passed callback function
        }}
      />
    </div>
  );
}
