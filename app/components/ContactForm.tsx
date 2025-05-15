"use client";

import { useState } from "react";
import AnimatedButton from "./AnimatedButton";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      "YOUR_SERVICE_ID",    // Replace with your EmailJS service ID
      "YOUR_TEMPLATE_ID",   // Replace with your EmailJS template ID
      {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject,
        message: form.message,
      },
      "YOUR_PUBLIC_KEY"      // Replace with your EmailJS public key
    ).then(
      (result) => {
        console.log("Email sent", result.text);
        alert("Message sent successfully!");
        setForm({ name: "", email: "", subject: "", message: "" });
      },
      (error) => {
        console.error("Email sending failed", error.text);
        alert("Something went wrong. Please try again later.");
      }
    );
  };

  return (
    <form onSubmit={handleSubmit} className="w-full lg:w-1/2 mx-auto border-1 border-cyan-400 p-6 rounded-lg shadow space-y-4">
      <input
        name="name"
        type="text"
        placeholder="Full Name"
        value={form.name}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 rounded border dark:border-white"
      />
      <input
        name="email"
        type="email"
        placeholder="Email Address"
        value={form.email}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 rounded border dark:border-white"
      />
      <input
        name="subject"
        type="text"
        placeholder="Subject"
        value={form.subject}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 rounded border dark:border-white"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={form.message}
        onChange={handleChange}
        required
        rows={5}
        className="w-full px-4 py-2 rounded border dark:border-white"
      />
      <AnimatedButton label="Send Message" href="#" />
    </form>
  );
};

export default ContactForm;
