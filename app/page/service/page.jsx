"use client";

import Link from "next/link";
import Image from "next/image";
import Video from "@/app/components/video";
import Price from "@/app/components/price";
import { useRouter } from "next/navigation";
import styles from "@/app/style/service.module.css";
import ServiceBackground from "@/public/icons/serviceBackground.svg";

export default function ServicePage() {
  const router = useRouter();

  const getAppointment = () => {
    router.push("page/portfolio/page");
  };

  const serviceData = [
    {
      title: "Nail care",
      button: "Book appointment",
      video: "wzrrriiytydjzucoez7m",
      description:
        "Our expert nail technicians offer a comprehensive range of services, including classic manicures and pedicures, intricate nail art, and the latest trends in nail extensions and treatments. We use top-quality products and advanced techniques to ensure your nails are healthy, strong, and beautiful. Whether you're looking for a simple, elegant look or a bold, creative design, our personalized services cater to your unique style and preferences.",
    },
    {
      title: "Hair care",
      button: "Book appointment",
      video: "vmkk4hrgt3s5lnrthfqu",
      description:
        "Our skilled hairstylists offer a wide array of services, from chic cuts and vibrant coloring to luxurious treatments and styling. We use premium products and the latest techniques to ensure your hair looks and feels its best. Whether you're seeking a simple trim, a complete makeover, or a special occasion style, our personalized services cater to your unique hair care needs and preferences.",
    },
    {
      title: "Skin care",
      button: "Coming soon",
      video: "y4bgglutb7ss232fflxb",
      description:
        "Our experienced aestheticians offer a comprehensive range of services designed to enhance and rejuvenate your skin. From refreshing facials and anti-aging treatments to personalized skincare regimens and advanced techniques, we use only premium products to ensure your skin looks and feels its best. Whether you're dealing with acne, sensitivity, or just looking to maintain a healthy glow, our services are tailored to meet your unique skincare needs.",
    },
  ];

  return (
    <>
      <div className={styles.serviceMain}>
        <Image
          src={ServiceBackground}
          alt="Service background Image"
          layout="fill"
          quality="100"
          objectFit="contain"
          priority
        />
        <h2>Our services</h2>
        <h1>We offer the following services</h1>
        <div className={styles.serviceContainer}>
          {serviceData.map((service, index) => (
            <div
              className={`${styles.serviceCard} ${
                index % 2 === 0 ? styles.evenCard : styles.oddCard
              }`}
              key={index}
            >
              <Video  Height="200" Width="500" Src={service.video} />

              <div className={styles.serviceInfo}>
                <h1>{service.title}</h1>
                <p>{service.description}</p>
                {service.button === "Coming soon" ? (
                  <button className={styles.serviceButton}>
                    {service.button}
                  </button>
                ) : (
                  <button
                    className={styles.serviceButton}
                    onClick={getAppointment}
                  >
                    {service.button}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Price />
    </>
  );
}
