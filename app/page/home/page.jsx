"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "@/app/style/home.module.css";
import auth1Image from "@/public/assets/background.png";
import auth2Image from "@/public/assets/background.png";
import auth3Image from "@/public/assets/background.png";
import auth4Image from "@/public/assets/background.png";

import {
  ChevronLeftIcon as LeftIcon,
  ChevronRightIcon as RightIcon,
  PlayIcon,
} from "@heroicons/react/24/solid";

export default function Home() {
  const [bannerImages, setBannerImages] = useState([
    auth1Image,
    auth2Image,
    auth3Image,
    auth4Image,
  ]);

  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex(
        (prevIndex) => (prevIndex + 1) % bannerImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [bannerImages]);

  const nextImage = () => {
    setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
  };

  const backImage = () => {
    setCurrentBannerIndex(
      (prevIndex) => (prevIndex - 1 + bannerImages.length) % bannerImages.length
    );
  };

  return (
    <div className={styles.homeMain}>
      <div className={styles.bgImage}>
        <Image
          src={bannerImages[currentBannerIndex]}
          alt="Banner Image"
          layout="fill"
          quality="100"
          objectFit="cover"
        />
      </div>
      <div className={styles.homeContents}>
        <LeftIcon
          height={40}
          width={40}
          className={styles.leftIcon}
          onClick={backImage}
        />
        <div className={styles.homeHero}>
          <h1>
            Your <span>beauty</span> your choice
          </h1>
          <div
            className={styles.homePlayBtn}
            onClick={() => router.push("/page/portfolio")}
          >
            <PlayIcon height={30} width={30} className={styles.playIcon} />
          </div>
        </div>
        <RightIcon
          height={40}
          width={40}
          className={styles.rightIcon}
          onClick={nextImage}
        />
      </div>
    </div>
  );
}
