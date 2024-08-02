"use client";

import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";
import Loading from "@/app/components/Loading";
import styles from "@/app/style/subscribe.module.css";
import SubscribeImg from "@/public/assets/subscribe.png";
import BudUp from "@/public/icons/budUp.svg";
import BudDown from "@/public/icons/budDown.svg";

export default function Subscribe() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
  });

  const SERVER_API = process.env.NEXT_PUBLIC_SERVER_API;

  async function onSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(`${SERVER_API}/subscribe`, {
        method: "POST",
        body: JSON.stringify({
          email: formData.email,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      toast.success(
        `your ${email} has successfully subscribed to our newsletter `
      );
      setFormData({
        email: "",
      });
    } catch (error) {
      if (error.response === 400) {
        toast.error(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.subscribeMain}>
          <Image
          className={styles.budUp}
          src={BudUp}
          height={100}
          width={100}
          alt="bud image"
          priority
        />
      <div className={styles.subscribeComponent}>

        <Image
          className={styles.subscribeImg}
          src={SubscribeImg}
          alt="Subscribe image"
          priority
        />
        <form onSubmit={onSubmit} className={styles.formContainer}>
          <div className={styles.subscribeInfo}>
            <h1>Subscribe to newsletter</h1>
            <p>
            Subscribe for our newsletter to stay up-to-date on the latest promotions, discounts, and new features releases.
            </p>
          </div>
          {/* Email */}
          <div className={styles.subscribeInput}>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter your email"
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              disabled={isLoading}
              className={styles.subscribeButton}
            >
              {isLoading ? <Loading /> : "Subscribe"}
            </button>
          </div>
        </form>
      </div>
      <Image
          className={styles.budDown}
          src={BudDown}
          height={100}
          width={100}
          alt="bud image"
          priority
        />
    </div>
  );
}
