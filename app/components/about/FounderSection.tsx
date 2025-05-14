"use client";
import React from "react";
import Image from "next/image"; // Required for Next.js optimized images
import BigImage from "../BigImage";

const FounderSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-10  py-16">
      {/* Left Side Content */}
      <div className="md:w-1/2 space-y-4">
        <h5 className="text-cyan-500 text-sm uppercase tracking-widest">Our Founder & CEO</h5>
        <h2 className="text-3xl md:text-4xl font-bold">Dr. Anayat Ullah</h2>
        <p className="text-gray-300 text-base leading-relaxed">
          With over 15 years of experience in telecommunications, artificial intelligence, and academia, Dr. Anayat Ullah is a visionary leader
          committed to transforming how technology serves society. His leadership drives the lab’s focus on real-world innovation,
          smart automation, and research excellence.
        </p>
      </div>

      {/* Right Side Image */}
      <BigImage link="/anayatullah.png" />

    </section>
  );
};

export default FounderSection;
