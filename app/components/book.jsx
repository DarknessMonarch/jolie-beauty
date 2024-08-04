"use client";

import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";
import Loading from "@/app/components/Loading";
import styles from "@/app/style/book.module.css";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    phoneNumber: "",
    date: "",
    email: "",
  });

  const SERVER_API = process.env.SERVER_API;

  async function onSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(`${SERVER_API}/${role}/login`, {
        method: "POST",
        body: JSON.stringify({
          phoneNumber: formData.phoneNumber,
          date: formData.date,
          email: formData.email,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      toast.success(`Appointed book ${email}`);
      setFormData({
        phoneNumber: "",
        date: "",
        email: "",
      });
    } catch (error) {
      if (error.response === 400) {
        toast.error(error.message);
      } else if (error.response === 404) {
        toast.error("User not found");
      } else {
        toast.error("Invalid credentials");
      }
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phoneNumber: value });
  };

  return (
    <div className={styles.bookComponent}>
      <h1>Book your appointment now</h1>
      <form onSubmit={onSubmit} className={styles.formContainer}>
        {/* Phone Number */}
        <div className={styles.bookInput}>
          <label htmlFor="phoneNumber">Phone Number</label>
          <div className={styles.phoneInput}>
            <PhoneInput
              value={formData.phoneNumber}
              onChange={handlePhoneChange}
              defaultCountry="US"
              international
              countryCallingCodeEditable={false}
              placeholder="Enter phone number"
              required
            />
          </div>
        </div>
        {/* Email */}
        <div className={styles.bookInput}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="eg: jolie@email.com"
            onChange={handleChange}
            required
          />
        </div>
        {/* Date */}
        <div className={styles.bookInput}>
          <label htmlFor="date">Booking Date</label>
          <input
            type="date"
            name="date"
            id="date"
            placeholder="date"
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className={styles.bookButton}
        >
          {isLoading ? <Loading /> : "Book Now"}
        </button>
      </form>
    </div>
  );
}
