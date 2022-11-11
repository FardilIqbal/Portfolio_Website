import React from 'react'
import SkillCard from './SkillCard'
import {skills} from '../constants'
const Skills = () => {
  return (
    <section id="skills" className = "flex-col relative">
        <h1 className = "font-lato text-center text-deepBlue text-[30px] font-bold underline my-[9px]"> Skills </h1>
        <div className="flex flex-wrap sm:justify-start justify-center w-full relative">
            {skills.map((card)=>(
                <SkillCard key = {card.id}{...card} />
            ))}
        </div>
    </section>
  )
}

export default Skills