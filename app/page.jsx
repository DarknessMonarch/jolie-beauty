"use client";

import Home from "@/app/page/home/page";
import Book from "@/app/components/book";
import About from "@/app/page/about/page";
import Navbar from "@/app/components/navbar";
import Service from "@/app/page/service/page";
import Contact from "@/app/page/contact/page";
import styles from "@/app/style/app.module.css";
import Portfolio from "@/app/page/portfolio/page";

export default function App() {
  return (
    <main className={styles.mainApp}>
      <Navbar />
      <Home />
      <Book />
      <About />
      <Service />
      <Portfolio />
      <Contact />
    </main>
  );
}
