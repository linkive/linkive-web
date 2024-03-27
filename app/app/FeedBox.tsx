"use client";

import { YouTubeEmbed } from "../../components/Youtube";
import DropDown from "@/public/icon/arrow_down.svg";
import Image from "next/image";
import BottomSheet from "../../components/BottomSheet";
import { Suspense, useEffect, useState } from "react";
import { Button } from "../../components/Button";
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
}

export const FeedBox = ({ videoUrl }: FeedboxProps) => {
  const [showProductSheet, setShowProductSheet] = useState(false);
  const [heart, setHeart] = useState(false);
  const link = "https://d1wa6tg9pd3mhn.cloudfront.net/";

  return (
    <>
      <div className=" inline-flex py-3 flex-col w-full gap-3">
        <div className="flex w-full px-3 items-center gap-2.5">
          <div className="relative block w-[30px] h-[30px] rounded-full overflow-hidden">
            <Image fill={true} alt="image" src={link + "profile_test.webp"} />
          </div>
          <div className="flex flex-col justify-center items-start">
            <span className="text-xs font-medium text-grey-800">username</span>
            <span className="text-xs text-grey-400">2023.01.16</span>
          </div>
        </div>
        {/* <div className="relative block w-full min-h-[211px] bg-slate-400" style={{}}> */}
        <div className="relative block w-full" style={{ paddingTop: "56.25%" }}>
          <button
            className="absolute z-10 top-4 right-[14px]"
            onClick={() => setHeart((heart) => !heart)}
          >
            {heart ? <HeartMediumActive /> : <HeartMediumInactive />}
          </button>
          <YouTubeEmbed videoId={videoUrl} />
        </div>

        <button
          onClick={() => {
            setShowProductSheet(true);
          }}
          className="flex flex-col items-center w-full gap-2.5 px-3"
        >
          <div className="flex w-full items-start gap-1">
            <span className="text-xs font-medium text-grey-500">코디 상품</span>
            <span className="text-xs font-medium text-primary-red">05</span>
          </div>

          <div className="flex w-full px-3 py-1.5 justify-start items-center gap-2.5 rounded-lg border border-grey-100">
            {/* <Image src={"/img/item.png"} width={32} height={43} alt="product" /> */}
            <Image
              width={33}
              height={44}
              alt="image"
              src={link + "product_test_1.webp"}
            />

            <div className="flex flex-grow flex-col justify-center items-start gap-1 text-left">
              <span className="text-xs font-medium text-grey-400 line-clamp-1">
                HERNO
              </span>
              <span className="text-xs font-medium text-grey-800 line-clamp-1">
                스트링 하이넥 후드 구스다운
              </span>
            </div>

            <DropDown />
          </div>
        </button>
      </div>

      {showProductSheet && <FeedBoxBottomSheet onOpen={setShowProductSheet} />}
    </>
  );
};

interface FeedBoxBottomSheetProps {
  onOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const FeedBoxBottomSheet = ({ onOpen }: FeedBoxBottomSheetProps) => {
  return (
    <BottomSheet onOpen={onOpen}>
      <div className="inline-flex flex-col px-3 items-center w-full">
        <div className="flex w-full h-6 items-start gap-1">
          <span className="text-sm font-medium text-primary-black">
            코디 상품 모아보기
          </span>
          <span className="text-sm font-semibold text-primary-red">4</span>
        </div>

        {/* 4번 반복 */}
        <div className="flex flex-col w-full h-[244px] gap-2 pt-2 overflow-y-scroll">
          <FeedBoxProductDropBox />
          <FeedBoxProductDropBox />
          <FeedBoxProductDropBox />
          <FeedBoxProductDropBox />
        </div>

        {/* 반복 끝 */}
        <div className="w-full h-5 bg-primary-white" />
        <Button text="영상 속 코디보기" onClick={() => onOpen} />
      </div>
    </BottomSheet>
  );
};

//TODO: heart눌렀을 때 count하는 코드

const FeedBoxProductDropBox = () => {
  const [heart, setHeart] = useState(false);
  const link = "https://d1wa6tg9pd3mhn.cloudfront.net/";

  return (
    <div className=" flex items-center w-full h-full gap-2.5 p-3 border border-grey-50 rounded-md">
      <Image
        src={link + "product_test_2.webp"}
        width={66}
        height={88}
        alt="product"
      />

      <div className="flex flex-col h-[88px] flex-grow justify-center items-start text-left gap-2">
        <div className="flex flex-grow flex-col ">
          <span className="text-xs font-medium text-grey-400 line-clamp-1">
            HERNO
          </span>
          <p className="text-xs font-medium text-primary-black mt-1 line-clamp-2">
            스트링 하이넥 후드 구스다운 패딩 패딩 패딩 팯패패패패 디읻읻이딩
            팯패딩딩딩팽딩
          </p>
        </div>

        <div className="flex gap-1">
          <span className="text-sm font-semibold text-primary-red">10%</span>
          <span className="text-sm font-semibold text-grey-900">106,000원</span>
        </div>
      </div>
      <button onClick={() => setHeart((heart) => !heart)}>
        {heart ? <HeartActive /> : <HeartInactive />}
      </button>
    </div>
  );
};

export default FeedBox;
