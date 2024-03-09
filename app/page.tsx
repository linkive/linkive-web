"use client";
import { BaseTopBar } from "@/components/TopBar";
import LoginField from "./LoginField";
import Link from "next/link";
import Image from "next/image";
import useScrollBlock from "@/hooks/useScrollBlock";
import Back from "@/public/icon/back.svg";

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

export default function Login() {
  useScrollBlock(true);
  return (
    <main className="w-full h-dvh ">
      {/* Topbar */}
      <TopBar />

      {/* logo */}
      <div className="w-full mt-[50px] h-24 text-center">logo space</div>

      {/* login space */}
      <LoginField />

      {/* id password sign up */}
      <div className="w-full px-9 mt-[30px] mb-10 flex justify-between text-sm font-medium text-grey-300">
        <Link href="/">아이디/이메일 찾기</Link>
        <span>|</span>
        <Link href="/">비밀번호 찾기</Link>
        <span>|</span>
        <Link className="text-primary-black" href="/signup-1">
          회원가입
        </Link>
      </div>

      {/* social login */}
      <div className="flex flex-col w-full px-9 py-5  justify-center text-center gap-5">
        <span className="font-meidum">SNS 계정으로 로그인하기</span>
        <div className="flex justify-between">
          <Image
            width={60}
            height={60}
            src={"/icon/naver_round_icon.png"}
            alt="apple"
            quality={100}
          />
          <Image
            width={60}
            height={60}
            src={"/icon/kakao_round_icon.png"}
            alt="apple"
            quality={100}
          />
          <Image
            width={60}
            height={60}
            src={"/icon/apple_round_icon.png"}
            alt="apple"
            quality={100}
          />
          <Image
            width={60}
            height={60}
            src={"/icon/google_round_icon.png"}
            alt="apple"
            quality={100}
          />
        </div>
      </div>
    </main>
  );
}
