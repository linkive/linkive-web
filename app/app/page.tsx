"use client";

import Divider from "@/components/Divider";
import FeedBox from "@/app/app/FeedBox";
import RankBar from "./RankBar";

import Image from "next/image";
import { BaseTopBar } from "@/components/TopBar";

import React, { useRef, useEffect, useMemo, Suspense } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import useInfiniteVideos from "@/hooks/useVideos";
import HomeSkeleton from "./loading";

export default function Home() {
  return (
    <main className="w-full h-max flex flex-col items-center belowTopBar aboveNavBar">
      <TopBar />
      <RankBar />
      <Divider />
      <Suspense fallback={<HomeSkeleton />}>
        <InfiniteVideosFeed />
      </Suspense>
    </main>
  );
}

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

const InfiniteVideosFeed = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteVideos();

  const loadMoreRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          console.log("intersect");
          fetchNextPage();
        }
      },
      {
        rootMargin: "200%",
        threshold: 0,
      }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => observer.disconnect();
  }, [hasNextPage, fetchNextPage]);

  return (
    <>
      {data ? (
        <>
          {data.pages.map((page, i) =>
            page.videos.map((videoUrl, index) => (
              <FeedBox key={`${videoUrl}-${index}`} videoUrl={videoUrl} />
            ))
          )}

          <div
            ref={loadMoreRef}
            className="w-full h-[200px] bg-grey-50 justify-center items-center"
          >
            {isFetchingNextPage && (
              <div className="w-full h-full flex bg-grey-50 justify-center items-center">
                <Image
                  className="animate-spin"
                  src={"/icon/spinner.png"}
                  quality={100}
                  width={30}
                  height={30}
                  alt="spinner"
                />
              </div>
            )}
          </div>
        </>
      ) : (
        Array.from({ length: 13 }, (_, index) => index).map((index) => (
          <HomeSkeleton key={index} />
        ))
      )}
    </>
  );
};
