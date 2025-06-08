import React from "react";
import experienceData from "../data/experience";

const Experience = () => {
  return (
    <section id="experience" className="py-20 ml-10 mr-5">
      <div className="space-y-8">
        {experienceData.map((exp, index) => (
          <div key={index} className="border-l-4 border-[#64ffda] pl-6 hover:bg-[#112240] transition-colors duration-300 p-4 rounded">
            <div className="text-sm text-gray-500 mb-1">{exp.duration}</div>
            <h3 className="text-xl font-semibold mb-2 text-[#64ffda]">
              {exp.role} <span className="text-[#64ffda]">- {exp.company}</span>
            </h3>
            <p className="text-base text-justify">{exp.description}</p>
            {/* You can show tech stacks here later */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
