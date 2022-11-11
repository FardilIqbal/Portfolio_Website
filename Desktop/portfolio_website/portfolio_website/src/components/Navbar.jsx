import React from 'react'
import {logo, cross, menu} from '../assets'
import {navLinks} from '../constants'
import {useState} from 'react';
const Navbar = () => {
const [toggle,setToggle]= useState(false);
  return (
    
    <nav className="mx-auto w-full flex items-center justify-between relative container p-6 bg-gray-100 navbar">
        <img src={logo} alt="" className="pt-2 w-[124px] -translate-x-10" />

        <ul className = "list-none sm:flex hidden justify-end items-center flex-1 space-x-20 text-deepBlue">
            {navLinks.map((nav,index)=>(
                <li key={nav.id}>
                    <a href={`#${nav.id}`} className="hover:text-deepBlueTransparent">
                        {nav.title}
                    </a>
                </li>
            ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
            <img src={toggle?cross:menu} alt="menu" className = "w-[28px] h-[28px] translate-x-10 object-contain" onClick = {()=>setToggle((prev)=>!prev)}/>
            <div className={`${toggle?'flex':'hidden'} p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] bg-blue-gradient rounded-xl sidebar`}>
                <ul className="list-none flex justify-end items-start flex-1 flex-col">
                    {navLinks.map((nav,index)=>(
                        <li 
                            key={nav.id}
                            className = {`font-lato font-bold cursor-pointer text-[17px] ${index==navLinks.length-1?'mb-0':'mb-5'} text-white`}
                        >
                            <a href={`#${nav.id}`}>
                                {nav.title}
                            </a>
                        </li>
                    ))}
                </ul>

                
            </div>

        </div>
    </nav>
  )
}

export default Navbar