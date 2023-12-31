"use client";

import { useEffect, useRef, useState } from "react";

export default function PorgressBar({
  name,
  color = "bg-white",
  progress = 0,
  delay = 1,
}: {
  name: string;
  color?: string;
  progress?: number;
  delay?: number;
}) {
  const progressRef = useRef<HTMLDivElement | null>(null);
  const [showProgess, setShowProgress] = useState<number>(0);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShowProgress(progress);
          observer.unobserve(entry.target);
        }
      });
    });
    if (progressRef.current) {
      observer.observe(progressRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div>
      <h2 className="text-sm mb-1">{name}</h2>
      <div className="border border-white border-opacity-10 h-[16px] relative">
        <span className="absolute right-0 top-0 text-xs">{progress}%</span>
        <div
          ref={progressRef}
          style={{
            width: `${showProgess}%`,
            transition: `width ${delay}s`,
          }}
          className={`h-full w-0 ${color} opacity-90  text-center text-xs flex items-center justify-center`}
        ></div>
      </div>
    </div>
  );
}
