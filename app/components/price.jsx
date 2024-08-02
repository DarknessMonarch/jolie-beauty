"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import styles from "@/app/style/price.module.css";
import PriceBackground from "@/public/icons/priceBackground.svg";

export default function Price() {
  const priceData = [
    {
      title: "Nail care",
      price: "100",
    },

    {
      title: "Hair care",
      price: "200",
    },

    {
      title: "Skin care",
      price: "120",
    },
  ];

  return (
    <div className={styles.priceMain}>
      <Image
        src={PriceBackground}
        alt="Price Image"
        layout="fill"
        quality="100"
        objectFit="contain"
        className={styles.priceBackground}
        priority
      />
      <div className={styles.mainContainer}>
        <h1>Pricing List</h1>
        <div className={styles.priceContainer}>
          {priceData.map((data) => (
            <div className={styles.priceList}>
              <h2>{data.title}</h2>
              <hr className={styles.line} />
              <h2> ${data.price}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
