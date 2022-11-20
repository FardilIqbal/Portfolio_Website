import React from 'react'
import ProjectCard from './ProjectCard'
import {projs} from '../constants'
const Projects = () => {
  return (
    <section id="projects" className = "flex-col relative">
      <h1 className="font-lato text-center text-deepBlue text-[30px] font-bold underline my-[9px]"> Projects </h1>
      <div className="flex flex-wrap sm:justify-start justify-center w-full relative">
          {projs.map((card)=>(
              <ProjectCard key = {card.id}{...card} />
          ))}
      </div>
      
    </section>
  )
}

export default Projects