"use client";
import { BaseTopBar } from "@/components/TopBar";
import useScrollBlock from "@/hooks/useScrollBlock";
import Back from "@/public/icon/back.svg";
import ProgressBar from "./ProgressBar";
import CheckBox from "@/components/CheckBox";
import Link from "next/link";

const TopBar = () => {
  return (
    <BaseTopBar>
      <div className="w-full">
        <Back />
      </div>
      <h1 className="font-medium flex-shrink-0 text-primary-black">로그인</h1>
      <div className="w-full" />
    </BaseTopBar>
  );
};

const Terms = ({ text, link }: { text: string; link: string }) => {
  return (
    <div className="flex gap-2.5 items-center text-sm font-meidum">
      <CheckBox />
      <span className="text-grey-700 flex-grow">{text}</span>
      <Link href={link}>
        <span className="text-grey-500">보기</span>
      </Link>
    </div>
  );
};

export default function SignUp() {
  useScrollBlock(true);
  return (
    <main className="w-full h-dvh">
      <TopBar />

      <div className="w-full h-max px-3 mt-[50px]">
        <ProgressBar numerate={1} denominator={4} />

        <div className="flex flex-col gap-10 w-full py-[30px] ">
          <p className=" text-xl font-medium text-grey-900">
            링카이브 서비스 이용약관에
            <br />
            동의해주세요
          </p>

          <div className="flex gap-2.5 items-center ">
            <CheckBox />
            <span className="font-meidum text-grey-800 flex-grow">
              전체 약관에 동의합니다(선택 정보 포함)
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <Terms text="[필수] 만 14세 이상" link="/signup" />
            <Terms text="[필수] 이용약관 동의" link="/signup" />
            <Terms text="[필수] 개인정보 처리방침 동의" link="/signup" />
            <Terms
              text="[선택] 광고성 정보 수신 및 마케팅 활용 동의"
              link="/signup"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
