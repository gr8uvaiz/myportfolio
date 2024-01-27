import React from 'react'
import html from '../assets/skills/HTML.png'
import css from '../assets/skills/CSS.png'
import js from '../assets/skills/JS.png'
import tailwind from '../assets/skills/TAILWIND.png'
import react from '../assets/skills/REACT.png'
import node from '../assets/skills/NODE.png'
import express from '../assets/skills/EXPRESS.png'
import mongo from '../assets/skills/MONGO.png'
function Skills() {
  const skillsItems = [
    {
      src: html,
      style: "shadow-orange-400"
    },
    {
      src: css,
      style: "shadow-blue-400"
    },
    {
      src: js,
      style: "shadow-yellow-400"
    },
    {
      src: tailwind,
      style: "shadow-cyan-400 py-12"
    },
    {
      src: react,
      style: "shadow-cyan-400"
    },
    {
      src: node,
      style: "shadow-green-400 py-12"
    },
    {
      src: express,
      style: "shadow-gray-400 py-12"
    },
    {
      src: mongo,
      style: "shadow-green-400"
    },
  ]
  return (
    <div name="skills" className='pt-32 text-white w-full bg-gradient-to-b flex justify-center  from-[#0b243a] to-[#0b1120]'>
      <div className='w-3/4 '>
        <div>
          <p className="text-3xl w-fit border-b-4 text-white border-gray-400 font-bold">Skills</p>
          <p className='text-gray-400 my-4 text-xl'>"Here are the skills I am worked with"</p>
        </div>
        <div className='py-8 grid sm:grid-cols-2 md:grid-cols-3 gap-12 place-items-center'>
          {skillsItems.map(({src,style}) => (
          <div>
            <img width={"200px"} className={`${style} cursor-pointer shadow-xl rounded-2xl hover:scale-105 duration-300`} src={src} alt="" />
          </div>
          ))}
          
        </div>
      
      </div>
    </div>
  )
}

export default Skills
