"use client";


import "next-cloudinary/dist/cld-video-player.css";
import { CldVideoPlayer, getCldImageUrl } from "next-cloudinary";


export default function Vido({Height, Width, Src}) {

  return (
    <CldVideoPlayer
      width={Width}
      height={Height}
      src={Src}
      pictureInPictureToggle
      colors={{
        accent: "#ECD8BD",
        base: "#ECD8BD",
        text: "#ffffff",
      }}
      logo={{
        imageUrl: getCldImageUrl({
          src: "srbod1adfazosfv0pg23",
        }),
        onClickUrl: "https://jolie-beauty-haven.vercel.app/",
      }}
    />
  );
}
