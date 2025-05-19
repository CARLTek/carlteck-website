"use client";
import EmbededVideo from "../EmbededVideo";
import AnimatedButton from "../AnimatedButton";
import React from "react";
import PageHeading from "../PageHeading";

const OverviewSection = () => {
  return (
    <section className="bg-[url(/overview.png)] dark:bg-[url(/overviewblack.png)] bg-cover bg-no-repeat px-10 lg:px-20 ">
      <PageHeading title="About Us" />

      <div className="flex flex-col lg:flex-row items-center justify-between gap-15  py-12">
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <h2 className="text-3xl font-bold">Overview</h2>
          <p >
            At CARL TECK (Control Automotive & Robotics Laboratory), we design
            intelligent robots that solve real-world problems. Our focus is on
            creating smart, AI-powered machines that make life easier,
            businesses more efficient, and technology more human.
          </p>
          <div className="flex justify-center lg:justify-start">
            <AnimatedButton label="Contact Now" href="/contact" />
          </div>
        </div>

        <div className="w-full lg:w-1/2 aspect-video">
          <EmbededVideo link="https://www.youtube.com/embed/84whkdGvxoI?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0" />
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
