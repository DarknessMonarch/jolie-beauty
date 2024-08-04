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
    phonenumber: "",
    date: "",
    email: "",
  });

  const SERVER_API = process.env.NEXT_PUBLIC_SERVER_API; 

  async function onSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(`${SERVER_API}/appointment/create`, {
        method: "POST",
        body: JSON.stringify({
          phonenumber: formData.phonenumber,
          date: formData.date,
          email: formData.email,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "An error occurred");
      }

      toast.success(`Appointment booked for ${formData.email}`);
      setFormData({
        phonenumber: "",
        date: "",
        email: "",
      });
    } catch (error) {
      toast.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phonenumber: value });
  };

  return (
    <div className={styles.bookComponent}>
      <h1>Book your appointment now</h1>
      <form onSubmit={onSubmit} className={styles.formContainer}>
        {/* Phone Number */}
        <div className={styles.bookInput}>
          <label htmlFor="phonenumber">Phone Number</label>
          <div className={styles.phoneInput}>
            <PhoneInput
              value={formData.phonenumber}
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
            value={formData.email}
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
            value={formData.date}
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
