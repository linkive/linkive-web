"use client";
import Image from "next/image";
import style from "@/style/feedBox.module.css";
import { YouTubeEmbed } from "./Youtube";

export interface FeedboxProps {
  videoId: string;
}

export const FeedBox = ({ videoId }: FeedboxProps) => {
  return (
    <div className={style.feedBox_container}>
      <div className={style.feedBox_profileBar}>
        <div className={style.feedBox_profile_image} />
        <div className={style.feedBox_userInfo}>
          <span className={style.feedBox_username}>username</span>
          <span className={style.feedBox_date}>2023.01.16</span>
        </div>
      </div>
      <div className={style.feedBox_video}>
        <YouTubeEmbed videoId={videoId} />
      </div>

      <button
        onClick={() => {}}
        className={style.feedBox_product_dropbox_container}
      >
        <div className={style.feedBox_product_info}>
          <span className={style.feedBox_product_info_description}>
            코디 상품 모아보기
          </span>
          <span className={style.feedBox_product_info_count}>05</span>
        </div>

        <div className={style.feedBox_product_dropbox_wrapper}>
          {/* <Image src={"/img/item.png"} width={32} height={43} alt="product" /> */}
          <div className="w-8 h-8" />

          <div className={style.feedBox_product_dropbox_info}>
            <span className={style.brand}>HERNO</span>
            <span className={style.productName}>
              스트링 하이넥 후드 구스다운 패딩 코트
            </span>
          </div>
        </div>
      </button>
    </div>
  );
};

export default FeedBox;
