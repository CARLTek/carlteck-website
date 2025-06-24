"use client";

import React, { useState } from "react";
import { projects } from "../../data";
import ProjectButtons from "../ProjectButtons";
import ProjectCards from "../ProjectCards";

const ProjectSection = () => {
  const [active, setActive] = useState("ad-rover");

  return (
    <section className="bg-[url(/productsbackground.png)] dark:bg-[url(/productsbackgrounddark.png)]  bg-no-repeat bg-contain dr-screen-bg dr-screen bg-opacity-10 mx-auto flex flex-col lg:flex-row items-center justify-between py-10 px-10 lg:px-20 gap-20">
      {/* Left Side */}
      <div className="text-center lg:text-left lg:w-1/2 pt-20 lg:pt-0">
        <h2 className="text-3xl font-bold mb-4">Explore Our Projects</h2>
        <p className="mb-6">
          From smart rovers to modular bots, we bring cutting-edge ideas to
          life.
        </p>
        <ProjectButtons
          projects={projects}
          active={active}
          setActive={setActive}
        />
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-2/3">
        <ProjectCards
          projects={projects}
          active={active}
          setActive={setActive}
        />
      </div>
    </section>
  );
};

export default ProjectSection;
