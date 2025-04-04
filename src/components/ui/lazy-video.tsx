import type React from 'react';
import { useRef, useEffect, useState } from 'react';

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  type: string;
  controls?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
}

export function LazyVideo({
  src,
  type,
  controls = false,
  muted = true,
  playsInline = true,
  autoPlay = true,
  loop = true,
  ...props
}: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    });

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <video
      ref={videoRef}
      controls={controls}
      muted={muted}
      playsInline={playsInline}
      autoPlay={autoPlay}
      loop={loop}
      {...props}
    >
      {isVisible && (
        <source
          src={src}
          type={type}
        />
      )}
      Your browser does not support the video tag.
    </video>
  );
}
