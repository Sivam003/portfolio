import React from 'react'
import projectData from '../data/projects'
import { GoLinkExternal } from "react-icons/go";

const Projects = () => {
  return (
    <section id='projects' className='py-20 px-5'>
      <h2 className="xl:hidden text-white font-mono text-2xl text-center mb-5">My Projects</h2>

      <div className='flex flex-col gap-5'>
        {projectData.map((card, index) => (
          <a key={index} href={card.website} target='_blank' rel='noreferrer'
            className='flex gap-5 items-center hover:cursor-pointer hover:bg-[#112240] py-8 px-5 hover:rounded-xl'>
            <div className='w-48 h-32 flex-shrink-0 overflo-hidden rounded-xl'>
              <img className='object-cover h-full w-full rounded-xl border-2 border-cyan-500' src={projectData[index].img_src} alt="" />
            </div>
            <div className='flex flex-col gap-2'>
              <h2 className='flex gap-5 items-center text-white'>{card.title} <GoLinkExternal /></h2>
              <p className='text-sm'>{card.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Projects