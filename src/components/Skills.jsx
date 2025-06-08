import React from 'react';
import '../styles/skills.css'
import {
  FaHtml5, FaCss3, FaReact, FaNode, FaGit,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiPostgresql, SiPostman } from "react-icons/si";
import { DiMongodb } from "react-icons/di";

const Skills = () => {
  return (
    <div className="overflow-hidden py-10 bg-[#0a192f] ml-10 mr-10">
      <div className="whitespace-nowrap animate-scroll flex gap-16 text-4xl w-max">
        <FaHtml5 />
        <FaCss3 />
        <RiTailwindCssFill />
        <FaReact />
        <IoLogoJavascript />
        <FaNode />
        <SiExpress />
        <SiPostgresql />
        <DiMongodb />
        <SiPostman />
        <FaGit />
        {/* Duplicate icons for smooth loop */}
        <FaHtml5 />
        <FaCss3 />
        <RiTailwindCssFill />
        <FaReact />
        <IoLogoJavascript />
        <FaNode />
        <SiExpress />
        <SiPostgresql />
        <DiMongodb />
        <SiPostman />
        <FaGit />
      </div>
    </div>
  );
};

export default Skills;
