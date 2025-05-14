// app/components/ProjectButtons.tsx
import React from "react";
import { Project } from "../types";

type Props = {
  projects: Project[];
  active: string;
  setActive: (id: string) => void;
};

const ProjectButtons: React.FC<Props> = ({ projects, active, setActive }) => {
  return (
    <div className="flex flex-wrap gap-5 justify-center lg:justify-start ">
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
  );
};

export default ProjectButtons;
