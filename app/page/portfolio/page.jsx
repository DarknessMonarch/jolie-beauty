"use client";

import Video from "@/app/components/video";
import styles from "@/app/style/portfolio.module.css";

export default function HomePage() {
  const portfolioData = [
    { id: 1, video: "iifgymtssxkqbxh8btuk", height: 600, width: 400 },
    { id: 2, video: "atpuipn4pcyv4fzsboo8", height: 600, width: 400 },
    { id: 4, video: "in5tn42nrvwckoxticyu", height: 600, width: 400 },
    { id: 3, video: "hybjocurh8hryjpfoqsh", height: 600, width: 400 },
    { id: 5, video: "bsrbzftrjimpvhnaiocv", height: 600, width: 400 },
    { id: 6, video: "n0sljjt5fnhrwghh7isz", height: 600, width: 400 },
    { id: 7, video: "rojgmfkokaubeymk9nr8", height: 600, width: 400 },
  ];

  return (
    <div className={styles.gallery}>
      {portfolioData.map((item) => (
        <div
          key={item.id}
          className={styles.videoWrapper}
          style={{ width: `${item.width}px` }}
        >
          <Video
            className={styles.videoPlayer}
            Height={item.height}
            Width={item.width}
            Src={item.video}
          />
        </div>
      ))}
    </div>
  );
}
