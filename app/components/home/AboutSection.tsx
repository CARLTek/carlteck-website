"use client";

import React from "react";
import EmbededVideo from "../EmbededVideo";
import AnimatedButton from "../AnimatedButton";

const AboutSection: React.FC = () => {
  return (
    <section className="max-w-[90%] lg:max-w-[calc(100%-2in)] mx-auto  flex flex-col-reverse lg:flex-col items-center justify-center text-center">
      <div className=" mb-12 flex flex-col lg:flex-row items-center justify-between text-center gap-y-5 lg:text-left mt-15">
        <h2 className="md:text-3xl font-bold ">About CARL</h2>

        <p className="w-full lg:w-[70%] ">
          CARL (Control Automotive & Robotics Laboratory) is focused on
          developing cutting-edge robotic and automation technologies that push
          the boundaries of innovation and real-world application.
        </p>

        <AnimatedButton label="Learn More" href="http://localhost:3000/about" />
      </div>

      <EmbededVideo link="https://www.youtube.com/embed/84whkdGvxoI?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0" />
    </section>
  );
};

export default AboutSection;
