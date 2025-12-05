"use client";
import { useState } from "react";
import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

// Define the team with only the 4 specified members
const ourTeam = [
  {
    name: "Mohammad Aqib Jamal",
    role: "ML Engineer",
    image: "/Aqib.png",
    description:
      "Aqib Jamal is a Machine Learning Engineer at CARL TECK. He has worked on numerous ML projects and holds a BSCS degree from BUITEMS.",
    socials: {
      linkedin: "https://www.linkedin.com/in/aqib-jamal-252802289/",
    },
  },
  {
    name: "Ehtisham Ahmed",
    role: "Sr. Full-Stack Engineer",
    image: "/Ehtisham.png",
    description:
      "Ehtisham Ahmed is a Senior Full-Stack Developer at CARL TECK with 5 years of industry experience. He holds a BS in Computer Science from BUITEMS.",
    socials: {
      linkedin: "https://www.linkedin.com/in/ehtishamahmed/",
    },
  },
  {
    name: "Osama Ahmed",
    role: "Sr. Robotics Engineer",
    image: "/usama ahmed.png",
    description:
      "Osama Ahmed is a Senior Robotics Engineer at CARL TECK. He has worked with PTCL, VIVO, and Elektro Control Industries with 10 years of experience. He holds an MS in Electronics Engineering from BUITEMS.",
    socials: {
      linkedin: "https://www.linkedin.com/in/osama-ahmed-1163821a5/",
    },
  },
  {
    name: "Hamza Anwar",
    role: "Robotics and AI Engineer",
    image: "/hamza.png",
    description:
      "Hamza Anwar is a Senior Robotics and AI Engineer at CARL TECK with 10 years of industry experience. He holds an MS in Electronics Engineering from BUITEMS",
    socials: {
      linkedin: "https://www.linkedin.com/in/hamza-anwar-32454a22b/",
    },
  },
];

export default function TeamSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const member = ourTeam[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % ourTeam.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + ourTeam.length) % ourTeam.length
    );
  };

  return (
    <section className=" flex flex-col lg:flex-row justify-between items-center gap-5 px-10 lg:px-20 py-10">
      <div className="w-full lg:w-1/2 text-center lg:text-left ">
        <h2 className="text-4xl font-bold mb-4">Our Team</h2>
        <p className="text-sm mb-15">
          We're a group of passionate engineers, developers, and researchers
          working together to build the future of robotics.
        </p>
      </div>

      <div className="w-full lg:w-2/3 flex flex-col lg:flex-row items-center justify-end gap-6 relative">
        <div className="flex flex-row lg:flex-col items-center gap-4">
          <button onClick={handlePrev}>
            <ChevronUp className="hidden lg:block" />
            <ChevronLeft className="lg:hidden" />
          </button>
          <div className="flex flex-row lg:flex-col gap-2">
            {ourTeam.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${i === activeIndex ? "bg-cyan-500" : "bg-gray-500 dark:bg-white"
                  }`}
              ></div>
            ))}
          </div>
          <button onClick={handleNext}>
            <ChevronDown className="hidden lg:block" />
            <ChevronRight className="lg:hidden" />
          </button>
        </div>

        <div
          key={member.name}
          className="relative group overflow-hidden rounded-xl w-auto h-auto md:w-[600px] md:h-[600px] bg-gray-800 border-2 border-cyan-500 shadow-lg"
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover group-hover:opacity-30 transition"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent"></div>

          <div className="absolute top-3 left-3 bg-cyan-600 text-white px-3 py-1 rounded-md text-sm">
            {member.role}
          </div>
          <div className="absolute bottom-3 left-3 text-white">
            <h3 className="text-xl font-bold">{member.name}</h3>
          </div>
          <div className="absolute bottom-3 right-3 flex gap-2">
            <a
              href={member.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="bg-cyan-600/50 text-white w-10 h-10 flex justify-center z-100 items-center rounded-sm"
            >
              in
            </a>
          </div>
          <div className="absolute inset-0 flex items-center justify-center px-4 text-center text-sm opacity-0 group-hover:opacity-100 transition text-white">
            {member.description}
          </div>
        </div>
      </div>
    </section>
  );
}
