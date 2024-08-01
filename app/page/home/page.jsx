"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "@/app/style/home.module.css";
import {
  Bars3BottomLeftIcon as MenuIcon,
} from "@heroicons/react/24/outline";

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={styles.homeMain}>
      </div>
  
    </>
  );
}
