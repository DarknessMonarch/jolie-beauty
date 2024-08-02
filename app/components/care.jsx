"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import CareIcon from "@/public/icons/care.svg";
import styles from "@/app/style/care.module.css";
import Background from "@/public/icons/background.svg";
import PersonalizedIcon from "@/public/icons/personalized.svg";
import ProfessionalIcon from "@/public/icons/proffessional.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.careMain}>
      <Image
        src={Background}
        alt="Background Image"
        layout="fill"
        quality="100"
        objectFit="cover"
        className={styles.careBackground}
        priority
      />
      <div className={styles.careContainer}>
        <Image
          className={styles.careIcon}
          src={PersonalizedIcon}
          height={100}
          width={100}
          alt="Personalized icon"
          priority
        />
        <h1>PERSONALIZED EXPERIENCE</h1>
        <p>
          Every salon care is specifically tailored to each client
          independently.
        </p>
      </div>
      <div className={styles.careContainer}>
        <Image
          className={styles.careIcon}
          src={ProfessionalIcon}
          height={100}
          width={100}
          alt="Professional icon"
          priority
        />
        <h1>PROFESSIONAL CARE</h1>
        <p>
          All products we use are professional and have proven efficiency. No
          compromises.
        </p>
      </div>
      <div className={styles.careContainer}>
        <Image
          className={styles.careIcon}
          src={CareIcon}
          height={100}
          width={100}
          alt="Care icon"
          priority
        />
        <h1>WE CARE ABOUT WHAT WE DO</h1>
        <p>People that you'll meet in our studio are doing jobs they love.</p>
      </div>
    </div>
  );
}
