"use client";

import Link from "next/link";
import Image from "next/image";
import XLogo from "@/public/icons/x.svg";
import Logo from "@/public/icons/logo.svg";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Instagram from "@/public/icons/instagram.svg";
import LinkedIn from "@/public/icons/linkedIn.svg";
import Youtube from "@/public/icons/youtube.svg";
import Subscribe from "@/app/components/subscribe";
import styles from "@/app/style/contact.module.css";

export default function HomePage() {
  const pathname = usePathname();

  const goInstagram = () => {
    window.open("https://www.instagram.com/joliesbeautyhavend/", "_blank");
  };

  const goX = () => {
    window.open("https://joliesbeautyhavend.com/", "_blank");
  };

  const goLinkedIn = () => {
    window.open(
      "https://www.linkedin.com/company/jolie-s-beauty-haven/",
      "_blank"
    );
  };

  const scheduleData = [
    { day: "Monday", time: "9:00 AM - 12:00 PM" },
    { day: "Tuesday", time: "9:00 AM - 2:00 PM" },
    { day: "Wednesday", time: "Not available" },
    { day: "Thursday", time: "9:00 AM - 12:00 PM" },
    { day: "Friday", time: "Not available" },
    { day: "Saturday", time: "Not available" },
  ];

  const goYoutube = () => {
    window.open("https://www.youtube.com/@joliesbeautyhavend", "_blank");
  };

  return (
    <>
      <Subscribe />
      <div className={styles.contactContainer}>
        <div className={styles.contactWrapper}>
          <div className={styles.contactContent}>
          <Image
            src={Logo}
            alt="logo"
            width={140}
            height={140}
            className={styles.logo}
          />
            <p>your beauty, your choice</p>
            <div className={styles.socialLinks}>
              <Image
                src={Instagram}
                width={24}
                height={24}
                onClick={goInstagram}
                alt="instagram"
              />
              <Image
                src={XLogo}
                width={24}
                height={24}
                onClick={goX}
                alt="X"
              />
              <Image
                src={LinkedIn}
                width={24}
                height={24}
                onClick={goLinkedIn}
                alt="linkedIn"
              />
              <Image
                src={Youtube}
                width={24}
                height={24}
                onClick={goYoutube}
                alt="youtube"
              />
            </div>
          </div>
          <div className={styles.contactContent}>
            <div className={styles.navLinks}>
              <h1>Page</h1>
              {/* Home Link */}
              <Link
                href="/"
                className={`${styles.links} ${
                  pathname === "/" || pathname === "/page/home"
                    ? styles.activeLink
                    : ""
                }`}
              >
                Home
              </Link>
              {/* About Link */}
              <Link
                href="/page/about"
                className={`${styles.links} ${
                  pathname === "/page/about" ? styles.activeLink : ""
                }`}
              >
                About
              </Link>
              {/* Service Link */}
              <Link
                href="/page/service"
                className={`${styles.links} ${
                  pathname === "/page/service" ? styles.activeLink : ""
                }`}
              >
                Service
              </Link>
              {/* Portfolio Link */}
              <Link
                href="/page/portfolio"
                className={`${styles.links} ${
                  pathname === "/page/portfolio" ? styles.activeLink : ""
                }`}
              >
                Portfolio
              </Link>
              {/* Contact Link */}
              <Link
                href="/page/contact"
                className={`${styles.links} ${
                  pathname === "/page/contact" ? styles.activeLink : ""
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
          <div className={styles.contactContent}>
            <h1>Contact</h1>
            <p>+1 (484) 744-0421</p>
            <p>joliebeautyhaven@gmail.com</p>
            <p>United state, California</p>
          </div>
          <div className={styles.contactContent}>
            <h1>Program</h1>
            {scheduleData.map((row, index) => (
              <div className={styles.contactLink} key={index}>
                <p>{row.day}</p>
                <span>({row.time})</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.footer}>
          <h4>Terms and conditions © jolie’s beauty haven</h4>
        </div>
      </div>
    </>
  );
}
