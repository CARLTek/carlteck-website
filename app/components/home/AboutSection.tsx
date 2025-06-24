"use client";

import React from "react";
import EmbededVideo from "../EmbededVideo";
import AnimatedButton from "../AnimatedButton";

const AboutSection: React.FC = () => {
  return (
    <section className="bg-[url(/aboutbackground.png)] dark:bg-[url(/aboutbackgroundblack.png)] bg-no-repeat bg-contain lg:bg-cover mx-auto  flex flex-col lg:flex-col items-center justify-center px-10 lg:px-20">
      <div className="flex flex-col lg:flex-row items-center justify-between text-center lg:text-left gap-y-5 mb-12 mt-0 lg:mt-15">
        <h2 className="w-full lg:w-1/5 text-3xl font-bold ">About CARL</h2>

        <p className="w-full lg:w-3/5 ">
          CARL (Control Automotive & Robotics Laboratory) is focused on
          developing cutting-edge robotic and automation technologies that push
          the boundaries of innovation and real-world application.
        </p>

        <AnimatedButton label="Learn More" href="/about" />
      </div>

      <video
        controls
        preload="metadata"
        className="w-full h-full object-cover rounded-lg"
        poster="/video-background-100.jpg"
      >
        <source src="/gallery/main-video.MP4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default AboutSection;
