import React from 'react'

const ProjectCard = ({name,pict,link}) => {
  return (
    <div className="flex justify-between flex-col px-8 py-10 rounded-[6px] max-w-[340px] md:mr-20 sm:mr-5 mr-0 bg-gray-100 hover:bg-brightRedTransparent">
      <a href={link}>
        <img src={pict} alt="Website Logo" className="w-[300px] h-[300px] mx-auto my-auto object-contain"/>
      </a>
        <p className = "font-lato font-normal text-[20px] leading-[32px] text-brightBlue my-10 text-center">{name}</p>

    </div>
  )
}

export default ProjectCard