"use client";

import { useState } from "react";
import AnimatedButton from "./AnimatedButton";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic (e.g., API call or toast)
    console.log(form);
  };

  return (
    <form onSubmit={handleSubmit} className="w-1/2 mx-auto border-1 border-cyan-400 p-6 rounded-lg shadow space-y-4">
      <input
        name="name"
        type="text"
        placeholder="Full Name"
        value={form.name}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 rounded  border-1 dark:border-white"
      />
      <input
        name="email"
        type="email"
        placeholder="Email Address"
        value={form.email}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 rounded border border-1 dark:border-white"
      />
       <input
        name="subject"
        type="text"
        placeholder="Subject"
        value={form.email}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 rounded border border-1 dark: border-white"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={form.message}
        onChange={handleChange}
        required
        rows={5}
        className="w-full px-4 py-2 rounded border border-1 dark: border-white"
      />
      <AnimatedButton label="Send Message" href="#" />
    </form>
  );
};

export default ContactForm;
