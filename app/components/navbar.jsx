"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/icons/logo.svg";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "@/app/style/navbar.module.css";
import {
  Bars3BottomLeftIcon as MenuIcon,
  XMarkIcon as CloseIcon,
} from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={styles.navbarMain}>
        <div className={styles.navLogo}>
          <Image
            src={Logo}
            alt="logo"
            width={50}
            height={50}
            className={styles.logo}
          />
        </div>
        <MenuIcon
          className={styles.menuIcon}
          alt="back icon"
          onClick={toggleSideBar}
          width={50}
          height={50}
        />
        <div className={styles.navLinks}>
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
        <button className={styles.navBtn}>Book now</button>
      </div>
      {/* mobile link  */}
      <div className={`${styles.mobileLink} ${isOpen ? styles.slideIn : ""}`}>
        <div className={styles.mobileTop}>
          <div className={styles.mobileLogo}>
          <Image
            src={Logo}
            alt="logo"
            width={50}
            height={50}
            className={styles.logo}
          />
          </div>
          <div className={styles.navClose}>
            <CloseIcon
              className={styles.closeIcon}
              alt="close icon"
              onClick={toggleSideBar}
              width={20}
              height={20}
            />
          </div>
        </div>

        {/* Home Link */}
        <Link
          href="/page/home"
          className={`${styles.links} ${
            pathname === "/page/home" ? styles.activeLink : ""
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
        <button className={styles.mobileBtn}>Book now</button>
      </div>
    </>
  );
}
