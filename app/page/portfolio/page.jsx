"use client";

import { useEffect, useState } from "react";
import styles from "@/app/style/portfolio.module.css";

export default function HomePage() {
  const [currentVideoIndices, setCurrentVideoIndices] = useState([0, 1, 2, 3, 4]);

  const portfolioData = [
    { id: 1, video: "/public/videos/VID-20240727-WA0003.mp4" },
    { id: 2, video: "/public/videos/VID-20240727-WA0004.mp4" },
    { id: 3, video: "/public/videos/VID-20240727-WA0005.mp4" },
    { id: 4, video: "/public/videos/VID-20240727-WA0006.mp4" },
    { id: 5, video: "/public/videos/VID-20240727-WA0007.mp4" },
    { id: 6, video: "/public/videos/VID-20240727-WA0008.mp4" },
    { id: 7, video: "/public/videos/VID-20240727-WA0009.mp4" },
    { id: 8, video: "/public/videos/VID-20240727-WA0010.mp4" },
    { id: 9, video: "/public/videos/VID-20240727-WA0011.mp4" },
    { id: 10, video: "/public/videos/VID-20240727-WA0012.mp4" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndices((prevIndices) => {
        const newIndices = [...prevIndices];
        const nextIndex = (prevIndices[0] + 5) % portfolioData.length;
        newIndices.shift();
        newIndices.push(nextIndex);
        return newIndices;
      });
    }, 20000); 
    return () => clearInterval(interval);
  }, [portfolioData.length]);

  return (
    <div className={styles.portfolioMain}>
      {currentVideoIndices.map((videoIndex, i) => (
        <video
          key={i}
          className={styles.videoPlayer}
          src={portfolioData[videoIndex].video}
          autoPlay
          loop
          controls
        />
      ))}
    </div>
  );
}
