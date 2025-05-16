"use client";

import React from "react";
import { teamMembers } from "../data";
import TeamCard from "./TeamCard";

const TeamCardCarousel = () => {
  return (
    <div className="overflow-hidden">
      <div className="animate-scroll hover:animate-none whitespace-nowrap w-max flex">
        {[...teamMembers, ...teamMembers].map((member, index) => (
          <div key={index} className="inline-block">
            <TeamCard {...member} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamCardCarousel;
