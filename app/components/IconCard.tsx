"use client";
import React from "react";

interface IconCardProps {
  head: string;
  desc: string;
  icon: string;
}

const IconCard: React.FC<IconCardProps> = ({ head, desc, icon }) => {
  return (
    <div className="relative border border-cyan-500 rounded-lg p-15 md:p-20 w-full lg:w-1/2 bg-black shadow-md">
      {/* Icon */}
      <div className="absolute -top-10 md:-top-20 right-3 md:right-12 ">
        <img src={icon} alt={`${head} Icon`} className="w-30 md:w-full h-30 md:h-full" />
      </div>

      <h3 className="text-2xl font-semibold mb-4">{head}</h3>
      <p className="text-gray-300">{desc}</p>
    </div>
  );
};

export default IconCard;
