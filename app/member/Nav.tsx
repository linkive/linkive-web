"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  return (
    <div className="w-full h-max sticky top-[50px] z-10 bg-white">
      <nav className="w-full h-[40px] flex">
        <Link className="w-full" href={"/member/id"}>
          <div className="flex gap-2.5 justify-center items-center h-full">
            <span className="text-sm font-bold text-primary-black">
              아이디 찾기
            </span>
          </div>
        </Link>
        <Link scroll={false} className="w-full" href={"/member/password"}>
          <div className="flex gap-2.5 justify-center items-center h-full ">
            <span className="text-sm font-bold text-primary-black">
              비밀번호 찾기
            </span>
          </div>
        </Link>
      </nav>

      <div
        className={`flex w-full h-0.5 ${
          pathname === "/member/id" ? "flex-row-reverse" : " flex-row"
        }`}
      >
        <div className="w-full h-full bg-white" />
        <div className="w-full h-full bg-black" />
      </div>
    </div>
  );
}
