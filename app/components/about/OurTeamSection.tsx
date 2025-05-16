"use client";
import React from "react";
import TeamCardCarousel from "../TeamCardCarousel";

const OurTeamSection = () => {
  return (
    <section className="py-16 ">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
        <p className="text-gray-300 text-base max-w-xl mx-auto">
          We’re a group of passionate engineers, developers, and researchers
          working together to build the future of robotics.
        </p>
      </div>

      {/* Scrolling container */}
      <TeamCardCarousel />
    </section>
  );
};

export default OurTeamSection;
