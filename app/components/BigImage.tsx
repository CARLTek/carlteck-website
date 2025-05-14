"use client";
import React from "react";
import Image from "next/image";

interface BigImageProps {
  link: string;
  width: number;
  height: number;
  className?: string; // optional class
}

const BigImage: React.FC<BigImageProps> = ({ link, width, height, className }) => {
  return (
    <div className={`relative w-full md:w-1/2 flex justify-end ${className}`}>
      <Image
        src={link}
        alt={`${link} Image`}
        width={width}
        height={height}
        className="rounded-xl"
        priority
      />
    </div>
  );
};

export default BigImage;
