import React from 'react'
import { IoIosArrowDropright } from "react-icons/io";
import homeImg from '../assets/portfolio-img.png'
import { Link } from 'react-scroll';

function Home() {
  return (
    <div name="home" className='pt-32 md:pt-0 h-screen w-full bg-gradient-to-b from-[#0b1120] to-[#0b243a] '>
      <div className='max-w-screen-lg flex h-full flex-col md:flex-row gap-3 justify-center items-center mx-auto px-4'>
        <div className='mt-20 md:mt-0 gap-4 flex flex-col h-full justify-center items-center md:items-start'>
        <h2 className='text-white md:max-w-80 w-full text-4xl font-extrabold sm:text-5xl sm:text-left text-center'>I'm a Full Stack Developer</h2>
        <p className='text-gray-500 max-w-md'>
            I am a Computer Science Engg. Student and a tech geek
            I love to building web applications with technologies like ReactJS , Tailwind CSS , NodeJS, ExpressJS,
            MongoDB
        </p>
     
        <div>
          <Link duration={500} smooth to={"portfolio"}>
            <button className='group  bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold px-4 py-2 rounded-lg flex'>
              Portfolio <IoIosArrowDropright size={25} className='ml-2 group-hover:rotate-90 duration-300'/>
            </button>
          </Link>
        </div>
        </div>


        <div>
            <img className='rounded-2xl mt-12 w-64 md:ml-4 md:w-72 mx-auto hover:scale-105 duration-300 cursor-pointer' src={homeImg}  alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home
