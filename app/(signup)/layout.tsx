"use client";
import { BaseTopBar } from "@/components/TopBar";
import Back from "@/public/icon/back.svg";
import ProgressBar from "./ProgressBar";
import useScrollBlock from "@/hooks/useScrollBlock";
import { usePathname, useRouter } from "next/navigation";

const TopBar = () => {
  const router = useRouter();
  return (
    <BaseTopBar>
      <button className="w-full" onClick={() => router.back()}>
        <Back />
      </button>

      <h1 className="font-medium flex-shrink-0 text-primary-black">로그인</h1>
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
      <TopBar />

      <div className="flex flex-col w-full h-full px-3 pt-[50px]">
        <ProgressBar numerate={Number(pathOrder)} denominator={4} />

        <div className="flex w-full flex-grow flex-col gap-10 pt-[30px]">
          {children}
        </div>
        {/* safeArea */}
        <div className="w-full h-[34px]" />
      </div>
    </main>
  );
}
