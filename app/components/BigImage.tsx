"use client";
import React from "react";
import Image from "next/image";

interface BigImageProps {
  link: string;
}

const BigImage: React.FC<BigImageProps> = ({ link }) => {
  return (
    <div className="relative w-full md:w-1/2 flex justify-end">
      <Image
        src={link}
        alt={`${link} Image`}
        width={800}
        height={800}
        className="w-full max-w-2xl"
        priority
      />
    </div>
  );
};

export default BigImage;
