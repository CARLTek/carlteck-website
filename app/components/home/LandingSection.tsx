import React from "react";
import AnimatedButton from "../AnimatedButton";
import BigImage from "../BigImage";

const LandingSection: React.FC = () => {
  return (
    <section className="bg-[url(/landingline.png)] dark:bg-[url(/landinglinedark.png)] bg-auto bg-no-repeat mx-auto flex flex-col lg:flex-row items-center justify-between px-10 lg:px-20 py-20 lg:py-10 overflow-hidden">
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
        <div className="flex justify-center lg:justify-start">
          <AnimatedButton label="Explore Products" href="/products" />
        </div>
      </div>

      {/* Robot Image */}
      <BigImage link="/robot.png" width={600} height={600} />
    </section>
  );
};

export default LandingSection;
