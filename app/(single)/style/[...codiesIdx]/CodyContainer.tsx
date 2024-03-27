"use client";

import { YouTubeEmbed } from "@/components/Youtube";
import DropDown from "@/public/icon/arrow_down.svg";
import Image from "next/image";
import BottomSheet from "@/components/BottomSheet";
import { Suspense, useEffect, useState } from "react";

import HeartActive from "@/public/icon/heart_on.svg";
import HeartInactive from "@/public/icon/heart_off.svg";
import HeartMediumActive from "@/public/icon/heart_m_on.svg";
import HeartMediumInactive from "@/public/icon/heart_m_off.svg";

export interface FeedboxProps {
  profileImgUrl?: string;
  celebName?: string;
  updateDate?: string;

  // cody information
  codyVideoID?: string;
  codyThumbNailUrl?: string;

  // producti information
  productImgurl?: string;
  productIndex?: string;
  productSiteName?: string;
  productPrice?: string;
  productSalePrice?: string;

  videoUrl: string;
  id: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const CodyContainer = ({
  videoUrl,
  id,
  setActiveIndex,
}: FeedboxProps) => {
  const [showProductSheet, setShowProductSheet] = useState(false);
  const [heart, setHeart] = useState(false);
  const codyProductInfoBoxes = [0, 1, 2, 4];
  const gridStyle = {
    gridAutoColumns:
      codyProductInfoBoxes.length <= 2 ? "100%" : "calc(100% - 28px)",
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 여기서 active 상태를 변경
            console.log("intersect" + id);
            setActiveIndex(id); // id는 이 컴포넌트의 prop
          }
        });
      },
      { threshold: 1 }
    );

    const element = document.getElementById(`cody-${id}`);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.disconnect();
      }
    };
  }, [id, setActiveIndex]);

  return (
    <>
      <div id={`cody-${id}`} className=" inline-flex flex-col w-full gap-2.5">
        {/* video box */}
        <div className="relative block w-full" style={{ paddingTop: "56.25%" }}>
          <button
            className="absolute z-10 top-4 right-[14px]"
            onClick={() => setHeart((heart) => !heart)}
          >
            {heart ? <HeartMediumActive /> : <HeartMediumInactive />}
          </button>
          <YouTubeEmbed videoId={videoUrl} />
        </div>

        {/* product information */}
        <div
          style={gridStyle}
          className="w-full grid grid-rows-2 gap-y-3 grid-flow-col overflow-x-scroll"
        >
          {/* <div className="flex w-full overflow-x-scroll"> */}
          {codyProductInfoBoxes.map((index) => (
            <CodyProductInfoBox key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

const CodyProductInfoBox = () => {
  const [heart, setHeart] = useState(false);
  const link = "https://d1wa6tg9pd3mhn.cloudfront.net/";

  return (
    <div className="flex items-center w-full h-full gap-2.5 px-3">
      <div className="flex shrink-0">
        <Image
          src={link + "product_test_2.webp"}
          width={51}
          height={68}
          quality={100}
          alt="product"
        />
      </div>

      <div className="flex flex-col h-[68px] flex-grow justify-center items-start text-left">
        <div className="flex flex-grow flex-col ">
          <span className="text-xs font-medium text-grey-400 line-clamp-1">
            무신사
          </span>
          <p className="flex-grow text-xs font-medium text-primary-black line-clamp-2">
            레더 텍스처드 스몰 (실버)
          </p>
        </div>

        <div className="flex gap-1">
          <span className="text-sm font-semibold text-primary-red">10%</span>
          <span className="text-sm font-semibold text-grey-900">106,000원</span>
        </div>
      </div>
      <button
        className="flex shrink-0"
        onClick={() => setHeart((heart) => !heart)}
      >
        {heart ? (
          <Image
            src={"/icon/heart_on.svg"}
            height={16}
            width={16}
            alt="heart"
          />
        ) : (
          <Image
            src={"/icon/heart_off.svg"}
            height={16}
            width={16}
            alt="heart"
          />
        )}
      </button>
    </div>
  );
};

export default CodyContainer;
