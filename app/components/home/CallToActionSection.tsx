"use client";
import React from "react";
import BigImage from "../BigImage";
import AnimatedButton from "../AnimatedButton";

const CallToActionSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-gray-200 dark:bg-gray-900 rounded-xl my-20 mx-10 lg:mx-20 overflow-visible gap-10">
      <BigImage
        link="/robot.png"
        width={320}
        height={320}
        className="-mt-20 md:-mt-28"
      />

      <div className="w-full md:w-full px-5 pb-20 lg:pb-0 text-center lg:text-left">
        <h2 className="text-3xl font-bold mb-4">
          Want to Collaborate or Learn More?
        </h2>
        <p className="mb-6">
          We're always open to new ideas, research and partnerships.
        </p>
        <div className="flex justify-center lg:justify-start">
          <AnimatedButton label="Contact Us" href="/contact" />
        </div>
      </div>
    </div>
  );
};

export default CallToActionSection;
