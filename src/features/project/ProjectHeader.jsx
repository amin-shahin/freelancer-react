import React from "react";
import { HiArrowRight } from "react-icons/hi";
import useBack from "../../hooks/useBack";

function ProjectHeader({ project }) {
  const moveBack = useBack();
  return (
    <div className="flex items-center gap-x-5">
      <HiArrowRight onClick={moveBack} className="w-5 h-5 text-primary-700 cursor-pointer" />
      <h1 className="text-black text-xl text-secondary-700">لیست درخواست های پروژه {project.title}</h1>
    </div>
  );
}

export default ProjectHeader;
