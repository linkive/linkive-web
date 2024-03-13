"use client";
import { BaseTopBar } from "@/components/TopBar";
import LoginField from "./LoginField";
import Link from "next/link";
import Image from "next/image";
import useScrollBlock from "@/hooks/useScrollBlock";
import Back from "@/public/icon/back.svg";
import { useSession, signIn, signOut } from "next-auth/react";

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
  const { data: session } = useSession();
  console.log(session);

  return (
    <main className="w-full h-dvh ">
      {/* Topbar */}
      <TopBar />
      <div className="flex flex-col belowTopBar w-full h-full">
        {/* logo */}
        <div className="w-full  h-[100px] text-center"></div>

        {/* login space */}
        <LoginField />

        {/* id password sign up */}
        <div className="w-full px-9 mt-[30px] mb-10 flex justify-between text-sm font-medium text-grey-300">
          <Link href="/member/id">아이디/이메일 찾기</Link>
          <span>|</span>
          <Link href="/member/password">비밀번호 찾기</Link>
          <span>|</span>
          <Link className="text-grey-600" href="/signup-1">
            회원가입
          </Link>
        </div>

        {/* social login */}
        <div className="flex flex-col w-full px-9 py-5  justify-center text-center gap-5">
          <span className="font-medium">SNS 계정으로 로그인하기</span>
          <div className="flex justify-between">
            <button onClick={() => signIn("naver")}>
              <Image
                width={60}
                height={60}
                src={"/icon/naver_round_icon.png"}
                alt="naver"
                quality={100}
              />
            </button>

            <button onClick={() => signIn("kakao")}>
              <Image
                width={60}
                height={60}
                src={"/icon/kakao_round_icon.png"}
                alt="kakao"
                quality={100}
              />
            </button>

            <button onClick={() => signIn("apple")}>
              <Image
                width={60}
                height={60}
                src={"/icon/apple_round_icon.png"}
                alt="apple"
                quality={100}
              />
            </button>

            <button onClick={() => signIn("google")}>
              <Image
                width={60}
                height={60}
                src={"/icon/google_round_icon.png"}
                alt="google"
                quality={100}
              />
            </button>

            {/* <button onClick={() => signOut()}>
            <Image
              width={60}
              height={60}
              src={"/icon/google_round_icon.png"}
              alt="app"
              quality={100}
            />
          </button> */}
          </div>
        </div>
      </div>
    </main>
  );
}
