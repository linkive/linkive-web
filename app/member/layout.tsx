"use client";
import { BaseTopBar } from "@/components/TopBar";
import Back from "@/public/icon/back.svg";
import useScrollBlock from "@/hooks/useScrollBlock";
import { usePathname, useRouter } from "next/navigation";
import Nav from "./Nav";

const TopBar = () => {
  const router = useRouter();
  return (
    <BaseTopBar>
      <button className="w-full" onClick={() => router.back()}>
        <Back />
      </button>

      <h1 className="font-medium flex-shrink-0 text-primary-black">
        아이디 / 비밀번호 찾기
      </h1>
      <div className="w-full" />
    </BaseTopBar>
  );
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useScrollBlock(true);
  const pathOrder = usePathname().slice(-1);

  return (
    <main className="w-full h-dvh">
      <div className="px-3">
        <TopBar />
      </div>

      <div className="flex flex-col w-full h-full belowTopBar">
        <Nav />

        <div className="flex w-full flex-grow flex-col">{children}</div>
        {/* safeArea */}
        <div className="w-full h-[34px]" />
      </div>
    </main>
  );
}
