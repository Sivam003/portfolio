import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { IoMdDownload } from "react-icons/io";

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("about");

  const sections = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="p-20 ml-20 w-2/5">
      <div className="flex flex-col items-start justify-center">
        <h1 className="text-5xl mb-5 font-bold">
          SIVAM <span className="text-white">VISNU</span>
        </h1>
        <h2 className="text-2xl mb-4">Full Stack Developer | ML Enthusiast</h2>
        <p className="text-lg mb-20">
          I craft accessible, pixel-perfect interfaces with clean code and
          thoughtful design
        </p>
      </div>

      <div className="mb-20 text-xl">
        <ul className="space-y-4">
          {sections.map(({ id, label }) => (
            <li key={id} className="flex items-center group">
              <a
                href={`#${id}`}
                className={`flex items-center transition cursor-pointer ${
                  activeSection === id
                    ? "text-[#64ffda]"
                    : "text-gray-400 group-hover:text-[#64ffda]"
                }`}
              >
                <div
                  className={`h-[2px] mr-4 transition-all duration-300 ${
                    activeSection === id
                      ? "w-10 bg-[#64ffda]"
                      : "w-[5px] bg-gray-500 group-hover:w-10 group-hover:bg-[#64ffda]"
                  }`}
                />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 flex space-x-4 justify-start text-2xl gap-5">
        <a
          href="https://github.com/Sivam003"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#64ffda] transition hover:-translate-y-1"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/sivam-visnu/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#64ffda] transition hover:-translate-y-1"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/funtastic.zone/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#64ffda] transition hover:-translate-y-1"
        >
          <FaInstagram />
        </a>
        <a
          href="https://leetcode.com/u/sivamvisnu/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#64ffda] transition hover:-translate-y-1"
        >
          <SiLeetcode />
        </a>
        <a
          href="https://drive.google.com/file/d/1hLWz-g-1YSdf1ZnV-QlrrV5go0KSi8S2/view?usp=drive_link"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-lg border rounded-xl hover:bg-gray-700 px-3 hover:text-white transition"
        >
          Resume <IoMdDownload />
        </a>
      </div>

      <div className="text-start text-gray-600 text-sm mt-8">
        © {new Date().getFullYear()} Sivam Visnu
      </div>
    </div>
  );
};

export default Sidebar;
