"use client";

import Link from "next/link";
import Image from "next/image";
import Care from "@/app/components/care";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "@/app/style/about.module.css";
import SpinnerIcon from "@/public/icons/spinner.svg";
import { ClockIcon } from "@heroicons/react/24/outline";
import BackroundImg from "@/public/icons/background.svg";

export default function About() {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  const scheduleData = [
    { day: "Monday", time: "9:00 AM - 12:00 PM" },
    { day: "Tuesday", time: "9:00 AM - 2:00 PM" },
    { day: "Wednesday", time: "Not available" },
    { day: "Thursday", time: "9:00 AM - 12:00 PM" },
    { day: "Friday", time: "Not available" },
    { day: "Saturday", time: "Not available" },
  ];

  const rows = [];
  for (let i = 0; i < scheduleData.length; i += 2) {
    rows.push([scheduleData[i], scheduleData[i + 1]]);
  }

  return (
    <>
      <div className={styles.aboutMain}>
        <div className={styles.sideVideo}>
          <video controls muted className={styles.video} preload="none">
            <source src="/videos/VID-20240727-WA0005.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className={styles.aboutContent}>
          <div className={styles.aboutInfo}>
            <h2>About us</h2>
            <h1>
              We are the leading salon agency around, specializing in nails,
              hair, and skincare
            </h1>
            <p>
              Our expert nail technicians offer a wide range of manicures and
              pedicures, while our skilled hairstylists provide chic cuts,
              vibrant coloring, and luxurious treatments. Our experienced
              aestheticians use premium products and advanced techniques to give
              your skin a radiant glow with refreshing facials and custom
              skincare regimens.
            </p>
            <p>
              Step into our salon for personalized services tailored to your
              unique style and preferences, and experience the ultimate in
              pampering and rejuvenation.
            </p>
            <button className={styles.aboutbutton}>
              <ClockIcon className={styles.clockIcon} height={24} width={24} />
              start now
            </button>
          </div>
          <Image
            className={styles.spinnerIcon}
            src={SpinnerIcon}
            height={100}
            width={100}
            alt="spinner icon"
            priority
          />
          <div className={styles.bottomImage}>
            <video controls className={styles.video} preload="none">
              <source src="/videos/VID-20240727-WA0008.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <div className={styles.aboutSchedule}>
        <h2>Our schedule</h2>
        <h1>We are available on</h1>

        <div className={styles.scheduleTable}>
          <table>
            <tbody>
              {rows.length === 0 ? (
                <tr>
                  <td colSpan="2">
                    <span>No schedule available</span>
                  </td>
                </tr>
              ) : (
                rows.map((row, index) => (
                  <tr key={index}>
                    <td>
                      {row[0] && (
                        <div className={styles.columnData}>
                          {row[0].day}
                          <span>({row[0].time})</span>
                        </div>
                      )}
                    </td>
                    <td>
                      {row[1] && (
                        <div className={styles.columnData}>
                          {row[1].day}
                          <span>({row[1].time})</span>
                        </div>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      <Care />
    </>
  );
}
