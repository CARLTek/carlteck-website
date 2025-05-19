"use client";
import React from "react";

interface IconCardProps {
  head: string;
  desc: string;
  icon: string;
  className?: string;
}

const IconCard: React.FC<IconCardProps> = ({ head, desc, icon, className }) => {
  return (
    <div className="relative border-2 border-cyan-500 rounded-lg p-15 md:p-20 w-full lg:w-1/2 bg-gray-200 dark:bg-black shadow-md">
      {/* Icon */}
      <div className="absolute -top-10 md:-top-20 right-3 md:right-12 ">
        <img src={icon} alt={`${head} Icon`} className={` ${className} w-30 md:w-Full h-30 md:h-full `} />
      </div>

      <h3 className="text-2xl font-semibold mb-4 text-black dark:text-gray-300">{head}</h3>
      <p className="text-black dark:text-gray-300">{desc}</p>
    </div>
  );
};

export default IconCard;
