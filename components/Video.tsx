import React, { forwardRef, useRef, useState, Ref, useEffect } from "react";

import Link from "next/link";

interface VideoPlayerProps {
  src: string;
}

const VideoPlayer = forwardRef<HTMLVideoElement, VideoPlayerProps>(
  (props, ref) => {
    const internalRef = useRef<HTMLVideoElement>(null);
    const videoRef = (ref || internalRef) as Ref<HTMLVideoElement>;
    const [progress, setProgress] = useState(0);

    const handleVideoTimeUpdate = () => {
      const currentVideoRef = (
        videoRef as React.MutableRefObject<HTMLVideoElement | null>
      ).current;
      if (currentVideoRef) {
        const currentProgress =
          (currentVideoRef.currentTime / currentVideoRef.duration) * 100;
        setProgress(currentProgress);
      }
    };

    const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
      const currentVideoRef = (
        videoRef as React.MutableRefObject<HTMLVideoElement | null>
      ).current;
      if (currentVideoRef) {
        const progressBarWidth = e.currentTarget.clientWidth;
        const clickPosition = e.nativeEvent.offsetX;
        const newTime =
          (clickPosition / progressBarWidth) * currentVideoRef.duration;
        currentVideoRef.currentTime = newTime;
      }
    };

    return (
      <>
        <video
          className="video absolute top-0 left-0"
          ref={videoRef}
          width="100%"
          height="100%"
          muted
          preload="auto"
          playsInline
          loop
          onTimeUpdate={handleVideoTimeUpdate}
        >
          <source src={props.src} type="video/mp4" />
        </video>

        <div
          className="relative h-0.5 w-full bg-grey-200 cursor-pointer"
          onClick={handleProgressBarClick}
        >
          <div className="flex h-full items-center">
            <div
              className="h-full bg-primary-black relative"
              style={{
                width: `${progress}%`,
              }}
            />
            <div className="w-[6px] h-[6px] bg-primary-black rounded-full" />
          </div>
        </div>
      </>
    );
  }
);

VideoPlayer.displayName = "VideoPlayer";
export default VideoPlayer;
