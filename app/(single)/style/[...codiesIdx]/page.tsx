"use client";
import Timeline from "./Timeline";
// import LookFeedBox from "@/components/LookFeedBox";
import { BaseTopBar } from "@/components/TopBar";
import Image from "next/image";
import CodyContainer from "./CodyContainer";
import { useEffect, useRef, useState } from "react";

export default function LookPage({
  params,
}: {
  params: { codiesIdx: number };
}) {
  const timelist = [
    "01:11",
    "02:21",
    "03:13",
    "04:11",
    "05:13",
    "11:11",
    "12:21",
    "13:13",
    "14:11",
    "15:13",
  ];
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const timelineRef = useRef<HTMLDivElement | null>(null);

  const url = process.env.NEXT_PUBLIC_CDN_DOMAIN!;

  useEffect(() => {
    if (timelineRef.current) {
      timelineRef.current.scroll({
        left: activeIndex * 57,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  return (
    <main className="w-full h-max flex flex-col items-center belowTopBar aboveNavBar">
      <TopBar />
      {/* basic information */}
      <div className="w-full h-auto flex flex-col items-start px-3 py-2.5 gap-2">
        <span className="text-xs font-medium text-grey-400">영상 정보</span>

        <div className="flex w-full gap-2.5 h-[81px]">
          <div className="block h-full w-36 relative flex-shrink-0">
            <Image
              objectFit="cover"
              src={url + "thumbnail_test.webp"}
              alt="youtube"
              quality={100}
              fill
            />
          </div>
          <div className="left-0 flex flex-col text-left h-full justify-start items-start">
            <div className="flex flex-col gap-0.5">
              <span className="flex text-sm font-medium text-primary black">
                해피 해은 HAPPY
              </span>
              <span className="flex text-xs text-grey-400 ">2023.09.28</span>
            </div>

            <span className="flex flex-grow text-xs font-medium text-primary-800 mt-3 line-clamp-2">
              붕어빵의 계절이 돌아 오는데요 내가 누구인지 아는 사람 fwef we
              fwefewf wf
            </span>
          </div>
          <div className=" flex-shrink-0">
            <Image
              height={20}
              width={20}
              src={"/icon/youtube.png"}
              alt="youtube"
            />
          </div>
        </div>
      </div>

      {/* timeline */}
      <div
        ref={timelineRef}
        style={{ top: "var( --top-bar-height)" }}
        className="sticky z-20 bg-primary-white left-0 flex px-3 py-3 items-start w-full overflow-x-scroll"
      >
        <Timeline
          items={timelist}
          onItemClicked={(index) => {
            const element = document.getElementById(`cody-${index}`);
            element?.scrollIntoView({ behavior: "smooth", block: "center" });
          }}
          activeIndex={activeIndex}
        />
      </div>

      <div className="flex flex-col w-full gap-6">
        {timelist.map((_, index) => (
          <CodyContainer
            key={index}
            id={index}
            videoUrl={url + "test1.mp4"}
            setActiveIndex={setActiveIndex}
          />
        ))}
      </div>
      <div className="w-full h-[150px] bg-primary-white" />
    </main>
  );
}

const TopBar = () => {
  return (
    <BaseTopBar>
      <Image width={24} height={24} src={"/icon/back.svg"} alt="back" />
      <h1>영상 속 코디보기</h1>
      <Image width={24} height={24} src={"/icon/showroom.svg"} alt="showroom" />
    </BaseTopBar>
  );
};
