"use client";
import EmbededVideo from "../EmbededVideo";
import AnimatedButton from "../AnimatedButton"; // Make sure this path matches your actual file
import React from "react";

const OverviewSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between gap-15  py-12 ">
      {/* Left Side Content */}
      <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
        <h2 className="text-3xl font-bold">Overview</h2>
        <p className="text-gray-300">
          At CARL TECK (Control Automotive & Robotics Laboratory), we design intelligent robots that solve real-world problems.
          Our focus is on creating smart, AI-powered machines that make life easier, businesses more efficient, and technology more human.
        </p>
         <div className="flex justify-center lg:justify-start">
          <AnimatedButton label="Contact Now" href="/contact" />
        </div>
      </div>

      {/* Right Side Video */}
      <div className="w-full lg:w-1/2 aspect-video">
        <EmbededVideo link="https://www.youtube.com/embed/84whkdGvxoI?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0" />
      </div>
    </section>
  );
};

export default OverviewSection;
