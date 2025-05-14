import React from "react";
import Image from "next/image";
import AnimatedButton from "../AnimatedButton";
import BigImage from "../BigImage";

const LandingSection: React.FC = () => {
  return (
    <section className="max-w-[90%] lg:max-w-[calc(100%-2in)] mx-auto flex flex-col-reverse lg:flex-row  items-center justify-between md:px-0 md:-mt-15 py-20 lg:py-12 overflow-hidden min-h-[600px]">
      {/* Foreground Content */}
      <div className="relative z-10 w-full lg:w-1/2 text-center lg:text-left">
        <h5 className="text-lg font-medium text-gray-600 mb-2 pt-20 lg:pt-0">
          We are the pioneers of
        </h5>
        <h1 className="text-4xl text-black-700 sm:text-5xl font-bold leading-tight mb-4">
          Futuristic Advertisement Robots
        </h1>
        <div className="text-black-700 text-lg mb-6">
          Innovating the future with smart, autonomous machines for real-world
          solutions.
        </div>
        <AnimatedButton label="Explore Projects" href="/projects" />
      </div>

      {/* Robot Image */}
      <BigImage link="/robot.png" />
    </section>
  );
};

export default LandingSection;
