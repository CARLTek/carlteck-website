"use client";
import React from "react";
import IconCard from "../IconCard";
import { missionVisionData } from "../../data";

const MissionVisionSection = () => {
  return (
    <section className="bg-[url(/mvbackground.png)] dark:bg-[url(/mvbackgrounddark.png)] bg-contain bg-no-repeat  py-16 px-10 lg:px-20">
      {/* Main Heading */}
      <h2 className="text-4xl font-bold text-center mb-10 md:mb-25">Mission & Vision</h2>

      {/* Cards Container */}
      <div className="flex flex-col lg:flex-row gap-10 justify-center items-center">
        {missionVisionData.map((item, index) => (
          <IconCard
            key={index}
            head={item.head}
            desc={item.desc}
            icon={item.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default MissionVisionSection;
