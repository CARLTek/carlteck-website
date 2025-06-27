"use client";
import { useState } from "react";
import { ChevronUp, ChevronDown, Megaphone, Code2, Cpu, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const teams = {
  marketing: [
    {
      name: "Usama Nazeer",
      role: "Team Lead",
      image: "/usama nazeer.png",
      description:
        "Usama Nazeer holds an MBA in Marketing and has studied at BUITEMS. With strong expertise in digital marketing, he currently leads the Marketing Team at CARL TECK.",
      socials: {
        linkedin: "https://www.linkedin.com/in/usama-nazeer-146733167/",
      },
    },
    {
      name: "Afnan Nadeem",
      role: "Business Development Manager",
      image: "/Afnan.png",
      description:
        "",
      socials: {
        linkedin: "#",
      },
    },
    {
      name: "Bawar Khan",
      role: "Field Assistant",
      image: "/Bawar.png",
      description:
        "",
      socials: {
        linkedin: "#",
      },
    },
  ],
  software: [
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
      name: "Ibrar Ali",
      role: "Full-Stack Developer",
      image: "/Ibrar.png",
      description:
        "Ibrar Ali is a full-stack developer at CARL TECK. He has experience working with startups and has also contributed to projects at DHA Quetta. He completed his BSCS from BUITEMS.",
      socials: {
        linkedin: "https://www.linkedin.com/in/ibrarli/",
      },
    },
    {
      name: "Aqib Jamal",
      role: "ML Engineer",
      image: "/Aqib.png",
      description:
        "Aqib Jamal is a Machine Learning Engineer at CARL TECK. He has worked on numerous ML projects and holds a BSCS degree from BUITEMS.",
      socials: {
        linkedin: "https://www.linkedin.com/in/aqib-jamal-252802289/",
      },
    },
  ],
  hardware: [
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
      name: "Shahrukh Hussain",
      role: "Robotics Engineer",
      image: "/shahrukh.png",
      description:
        "Shahrukh Hussain is a Robotics Engineer at CARL TECK. He holds a BS in Electronics Engineering from BUITEMS.",
      socials: {
        linkedin: "https://www.linkedin.com/in/shahrukhh442/",
      },
    },
  ],
};

export default function TeamSection() {
  const [activeTeam, setActiveTeam] = useState<
    "marketing" | "software" | "hardware"
  >("marketing");
  const [activeIndex, setActiveIndex] = useState(0);
  const currentTeam = teams[activeTeam];
  const member = currentTeam[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % currentTeam.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + currentTeam.length) % currentTeam.length
    );
  };

  const teamIcons = {
    marketing: <Megaphone className="w-5 h-5" />,
    software: <Code2 className="w-5 h-5" />,
    hardware: <Cpu className="w-5 h-5" />,
  };

  return (
    <section className=" flex flex-col lg:flex-row justify-between items-center gap-5 px-10 lg:px-20 py-10">
      <div className="w-full lg:w-1/2 text-center lg:text-left ">
        <h2 className="text-4xl font-bold mb-4">Our Team</h2>
        <p className="text-sm mb-15">
          We’re a group of passionate engineers, developers, and researchers
          working together to build the future of robotics.
        </p>
        <div className="flex flex-col gap-4">
          {(
            ["marketing", "software", "hardware"] as Array<
              "marketing" | "software" | "hardware"
            >
          ).map((team) => (
            <button
              key={team}
              onClick={() => {
                setActiveTeam(team);
                setActiveIndex(0);
              }}
              className={`flex items-center gap-10 px-4 py-5 rounded-md border ${
                activeTeam === team ? "bg-cyan-600" : "border-cyan-600"
              }`}
            >
              <span className="text-black dark:text-white">{teamIcons[team]}</span>
              <span className="text-left  capitalize ">{team} Team</span>
            </button>
          ))}
        </div>
      </div>

      <div className="w-full lg:w-2/3 flex flex-col lg:flex-row items-center justify-end gap-6 relative">
        <div className="flex flex-row lg:flex-col items-center gap-4">
          <button onClick={handlePrev}>
            <ChevronUp className="hidden lg:block"/>
            <ChevronLeft className="lg:hidden" />
          </button>
          <div className="flex flex-row lg:flex-col gap-2">
            {currentTeam.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i === activeIndex ? "bg-cyan-500" : "bg-gray-500 dark:bg-white"
                }`}
              ></div>
            ))}
          </div>
          <button onClick={handleNext}>
            <ChevronDown className="hidden lg:block"/>
            <ChevronRight className="lg:hidden" />
          </button>
        </div>

        <motion.div
          key={member.name}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
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
        </motion.div>
      </div>
    </section>
  );
}
