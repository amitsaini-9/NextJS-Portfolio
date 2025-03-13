import { workExperience } from "@/Data";
import React from "react";
import { Button } from "./ui/moving-border";

const Experience = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        My <span className="text-purple"> Work Experience</span>
      </h1>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map(({ id, title, desc, className, thumbnail }) => (
          <Button
            key={id}
            borderRadius="1.75rem"
            className="flex-1 border-neutral-200 dark:border-slate-800 text-white"
          >
            <div className="flex flex-col lg:flex-row lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={thumbnail}
                alt={thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {title}
                </h1>
                <p className="text-start text-white-100 font-semibold mt-3">
                  {desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
