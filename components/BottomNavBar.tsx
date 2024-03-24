"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function BottomNavBar() {
  const pathname = usePathname();

  const navItems = [
    {
      path: "/app",
      iconOn: "/icon/nav_home_on.svg",
      iconOff: "/icon/nav_home_off.svg",
      label: "HOME",
    },
    {
      path: "/search",
      iconOn: "/icon/nav_search_on.png",
      iconOff: "/icon/nav_search_off.png",
      label: "SEARCH",
    },
    {
      path: "/like",
      iconOn: "/icon/nav_like_on.svg",
      iconOff: "/icon/nav_like_off.svg",
      label: "like",
    },
    {
      path: "/mypage",
      iconOn: "/icon/nav_mypage_on.svg",
      iconOff: "/icon/nav_mypage_off.svg",
      label: "mypage",
    },
  ];

  return (
    <div className="safeArea max-width fixed flex justify-between w-full h-[52px] py-3 px-9 bottom-0 left-0 right-0 m-auto bg-primary-white opacity-95">
      {navItems.map(({ path, iconOn, iconOff, label }) => (
        <div key={path} className="flex flex-col justify-center items-center">
          <Image
            width={22}
            height={22}
            alt={label.toLowerCase()}
            src={pathname === path ? iconOn : iconOff}
          />
          <span
            className={`text-2xs ${
              pathname === path ? "text-primary-black" : "text-grey-600"
            }`}
          >
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
