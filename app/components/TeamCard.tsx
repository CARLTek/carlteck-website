"use client";
import React from "react";
import Image from "next/image";

interface TeamCardProps {
  name: string;
  title: string;
  imageSrc: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, title, imageSrc }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white text-black rounded-lg w-72 m-4">
      <div className="overflow-hidden mb-4">
        <Image src={imageSrc} alt={name} width={160} height={160} className="object-cover w-full h-full" />
      </div>
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-sm">{title}</p>
    </div>
  );
};

export default TeamCard;
