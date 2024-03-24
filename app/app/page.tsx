import Divider from "@/components/Divider";
import FeedBox from "@/components/FeedBox";
import RankBar from "./RankBar";

import Image from "next/image";
import { BaseTopBar } from "@/components/TopBar";

const TopBar = () => {
  return (
    <BaseTopBar>
      <Image
        width={24}
        height={24}
        alt={"search"}
        src={"/icon/nav_search_on.png"}
      />

      <Image
        width={24}
        height={24}
        alt={"search"}
        src={"/icon/nav_search_on.png"}
      />
    </BaseTopBar>
  );
};

export default function Home() {
  const url = "https://d3ez73fw0zma30.cloudfront.net/";

  const links = [];

  for (let i = 1; i <= 6; i++) {
    links.push(url + "output_s_video" + i + ".mp4");
    links.push(url + "output_video" + i + ".mp4");
  }

  return (
    <main className="w-full h-max belowTopBar">
      <TopBar />
      <RankBar />
      <Divider />
      {links.map((index: string) => (
        <FeedBox key={index} videoId={index} />
      ))}
      <div className="w-full h-svh bg-white" />
    </main>
  );
}
