import React, { useEffect, useRef, useState } from "react";
import VideoPlayer from "./Video";

export interface YoutubeEmbedProps {
  videoId: string;
}

export const YouTubeEmbed = ({ videoId }: YoutubeEmbedProps) => {
  const [isClient, setIsClient] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const playTimeoutRef = useRef<NodeJS.Timeout | null>(null); // setTimeout을 위한 ref

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            // 이전에 설정된 타이머가 있다면 취소
            if (playTimeoutRef.current) {
              clearTimeout(playTimeoutRef.current);
            }

            // n초 후에 실행될 함수
            playTimeoutRef.current = setTimeout(() => {
              if (entry.isIntersecting) {
                videoElement.setAttribute("autoplay", "autoplay");
                videoElement.play();
              }
            }, 500); // 0.5초 지연
          } else {
            // 화면 밖으로 나갈 때
            if (playTimeoutRef.current) {
              clearTimeout(playTimeoutRef.current);
            }
            videoElement.removeAttribute("autoplay");
            videoElement.pause();
          }
        },
        {
          rootMargin: "0px 0px -30%",
          threshold: 1,
        }
      );

      observer.observe(videoElement);

      return () => {
        observer.unobserve(videoElement);
        // 컴포넌트가 언마운트될 때 타이머 취소
        if (playTimeoutRef.current) {
          clearTimeout(playTimeoutRef.current);
        }
      };
    }
  });

  return isClient ? (
    // <div>
    //   <video
    //     ref={videoRef}
    //     width="100%"
    //     height="100%"
    //     muted
    //     preload="auto"
    //     playsInline
    //     loop
    //   >
    //     <source src={videoId} type="video/mp4" />
    //   </video>
    //   <div className=" w-full h-0.5 bg-grey-200 ">

    //   </div>
    // </div>
    <VideoPlayer ref={videoRef} src={videoId} />
  ) : (
    <></>
  );
};
