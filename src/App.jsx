import React from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';

const App = () => {
  return (
    <div className="bg-[#0a192f] text-gray-400 w-full min-h-screen overflow-hidden">
      <div className="flex flex-col xl:flex-row">
        
        <div className="xl:w-2/5 xl:fixed xl:h-screen xl:overflow-y-auto xl:ml-10">
          <Sidebar />
        </div>

        <div className="flex flex-col xl:ml-[40%]  xl:px-16 xl:w-3/5">
          <Hero />
          <Skills />
          <Experience />
          <Projects />
        </div>
        
      </div>
    </div>
  );
};

export default App;
