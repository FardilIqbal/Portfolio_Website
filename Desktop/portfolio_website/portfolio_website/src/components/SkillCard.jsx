import React from 'react'
import {skills} from '../constants'
const SkillCard = ({id, logo, title, content}) => {
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[380px] md:mr-10 sm:mr-5 mr-0 my-5 bg-gray-200 hover:bg-brightGreenTransparent">
        <img src={logo} alt="logo" className = "w-[150px] h-[210px] mx-auto my-auto object-contain "/>
        <p className = "font-lato font-normal text-[18px] leading-[32px] text-brightBlue my-10">{content}</p>
    </div>
    
  )
}

export default SkillCard