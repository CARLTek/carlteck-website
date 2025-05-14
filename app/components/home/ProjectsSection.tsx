// app/components/ProjectSection.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "ad-rover",
    title: "AD ROVER",
    image: "/ad-rover.jpg",
  },
  {
    id: "smart-bot",
    title: "SMART BOT",
    image: "/smart-bot.jpg",
  },
  {
    id: "waiter-bot",
    title: "WAITER BOT",
    image: "/waiter-bot.jpg",
  },
  {
    id: "snake-bot",
    title: "SNAKEBOT",
    image: "/snake-bot.jpg",
  },
];

const ProjectSection = () => {
  const [active, setActive] = useState("ad-rover");

  return (
    <section className="max-w-[calc(100%-2in)] mx-auto flex flex-col lg:flex-row items-center justify-between  py-10">
      {/* Left Text Side */}
      <div>
        <h2 className="text-3xl font-bold mb-4 ">Explore Our Projects</h2>
        <p className=" mb-6">
          From smart rovers to modular bots, we bring cutting-edge ideas to
          life.
        </p>

        <div className="flex flex-wrap gap-5">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setActive(project.id)}
              className={`px-4 py-1 rounded-full text-white text-sm font-semibold transition ${
                active === project.id
                  ? "bg-cyan-900"
                  : "bg-cyan-600 hover:bg-cyan-800"
              }`}
            >
              {project.title}
            </button>
          ))}
        </div>
      </div>

      {/* Right Cards Side */}
      <div className="flex items-end gap-3 h-[400px] w-full lg:w-[800px]">
        {projects.map((project) => {
          const isActive = active === project.id;

          return (
            <div
              key={project.id}
              onClick={() => setActive(project.id)}
              className={`relative transition-all duration-600 rounded-xl overflow-hidden cursor-pointer ${
                isActive ? "flex-[8]" : "flex-[1]"
              } h-full group`}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/60 z-10" />

              {/* Title */}
              <div
                className={`absolute z-20 text-white left-4 bottom-4 font-bold whitespace-nowrap ${
                  isActive
                    ? "text-lg"
                    : "text-lg left-15 rotate-[-90deg] origin-bottom-left"
                } transition-all`}
              >
                {project.title}
              </div>

              {/* Icon */}
              {isActive && (
                <div className="absolute bottom-4 right-4 z-20">
                  <div className="bg-white/70 text-black p-2 rounded-full hover:scale-110 transition">
                    <ArrowUpRight size={30} />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectSection;
