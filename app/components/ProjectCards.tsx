// app/components/ProjectCards.tsx
import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Project } from "../types";

type Props = {
  projects: Project[];
  active: string;
  setActive: (id: string) => void;
};

const ProjectCards: React.FC<Props> = ({ projects, active, setActive }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-3 w-full h-auto lg:h-[400px]">
      {projects.map((project) => {
        const isActive = active === project.id;

        return (
          <div
            key={project.id}
            onClick={() => setActive(project.id)}
            className={`relative transition-all duration-500 rounded-xl overflow-hidden cursor-pointer group 
              w-full 
              ${isActive ? "h-[500px] lg:flex-[8]" : "h-[100px] lg:flex-[1]"} 
              lg:h-full`}
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
              className={`absolute z-20 text-white font-bold transition-all
                ${isActive ? "text-lg" : "text-lg"}
                bottom-4 left-4
                lg:bottom-4 lg:left-4
                ${
                  isActive
                    ? ""
                    : "lg:rotate-[-90deg] lg:origin-bottom-left lg:left-15"
                }`}
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
  );
};

export default ProjectCards;
