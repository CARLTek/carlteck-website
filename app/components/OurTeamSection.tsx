"use client";
import React from "react";
import TeamCard from "./TeamCard";

const teamMembers = [
  { name: "Afnan Nadeem", title: "Business Development Manager", imageSrc: "/afnan.png" },
  { name: "Hamza Anwar", title: "Robotics and AI Engineer", imageSrc: "/hamza.png" },
  { name: "Ehtisham Ahmed", title: "Full-Stack Engineer", imageSrc: "/ehtisham.png" },
  { name: "Ibrar Ali", title: "Frontend Developer", imageSrc: "/ibrar.png" },
  { name: "Aqib Jamal", title: "Full-Stack Developer", imageSrc: "/aqib.png" },
  { name: "Bawar Khan", title: "Field Assistant", imageSrc: "/Bawar.png" },
  { name: "Usama Ahmed", title: "Sr. Robotics Engineer", imageSrc: "/Usama ahmed.png" },
  { name: "Shahrukh Hussain", title: "Robotics Engineer", imageSrc: "/shahrukh.png" },
];

const OurTeamSection = () => {
  return (
    <section className="py-16 ">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
        <p className="text-gray-300 text-base max-w-xl mx-auto">
          We’re a group of passionate engineers, developers, and researchers working together to build the future of robotics.
        </p>
      </div>

      {/* Scrolling container */}
      <div className="overflow-hidden">
        <div className="animate-scroll whitespace-nowrap w-max flex">
          {[...teamMembers, ...teamMembers].map((member, index) => (
            <div key={index} className="inline-block">
              <TeamCard {...member} />
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default OurTeamSection;
