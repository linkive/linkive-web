// hooks/useInfiniteVideos.ts
import {
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  InfiniteQueryObserverResult,
} from "@tanstack/react-query";

interface Video {
  id: string;
  title: string;
}

interface FetchVideosResult {
  videos: string[];
  nextPage: number;
  totalPages: number;
}

const fetchVideos = async ({ pageParam = 1 }): Promise<FetchVideosResult> => {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // API 호출 지연 시뮬레이션
  const url = process.env.NEXT_PUBLIC_CDN_DOMAIN!;

  const videos = Array.from(
    { length: 12 },
    (_, i) => `${url}test${(pageParam - 1) * 12 + i + 1}.mp4`
  );
  return { videos, nextPage: pageParam + 1, totalPages: 5 };
};

// Updated hook with correct types
const useInfiniteVideos = () => {
  return useInfiniteQuery({
    queryKey: ["videos"],
    queryFn: async ({
      pageParam = 1,
    }: {
      pageParam: number;
    }): Promise<FetchVideosResult> => {
      return fetchVideos({ pageParam });
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.nextPage <= lastPage.totalPages) {
        return lastPage.nextPage;
      }
      return undefined;
    },
  });
};

export default useInfiniteVideos;
