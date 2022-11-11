import React from 'react'
import {useState} from 'react';
import {logo,photo} from '../assets';
const Hero = () => {
  return (
    <section id="hero" className = "sm:py-16 py-6">
        <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
            <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
                <h1 className=" flex-1 font-lato text-deepBlue font-semibold text-center ss:text-[72px] text-[52px] leading-[75px] md:text-left my-[10px]">
                    I am Fardil Iqbal!
                </h1>
                <p className = " text-center ss:text-[18px] text-deepBlueTransparent md:text-left">
                    Hello! I am a 19 year old 3rd year software engineering student, currently studying at the University of Alberta.
                    Currently, I am proficient in a wide variety of programming languages and am always striving to learn more about
                    the field of programming! When I'm not studying/programming, I am most likely playing video games with my friends! 
                </p>
            </div>
            <div className="md:w-1/2">
                <img src={photo} alt="" className = "rounded-full border-8 border-brightYellowTransparent hover:border-brightYellow"/>
            </div>
        </div>
    </section>
  )
}

export default Hero