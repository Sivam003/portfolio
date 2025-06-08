import React from 'react'
import Sidebar from './components/sidebar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'

const App = () => {
  return (
    <div className='bg-[#0a192f] text-gray-400 min-h-screen flex justify-end'>
      <div className='fixed top-0 left-0 w-full h-full'>
        <Sidebar />
      </div>
      <div className='mr-20 ml-[40%] w-[60%] pl-30 z-100'>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
      </div>
    </div>
  )
}

export default App