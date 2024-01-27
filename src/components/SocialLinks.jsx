import React from 'react'
import { FaLinkedin,FaGithub  } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { BsFillPersonLinesFill } from "react-icons/bs";


function SocialLinks() {
    const socialLinks = [
        {
            id: 1,
            child:(
                <>
                Linkedin <FaLinkedin size={25}/>
                </>
            ),
            href: "https://www.linkedin.com/in/mohammad-uvaiz-57353620b/"
        },
        {
            id: 2,
            child:(
                <>
                Github  <FaGithub size={25}/>
                </>
            ),
            href: "https://github.com/gr8uvaiz"
        },
        {
            id: 3,
            child:(
                <>
                Mail  <IoMdMail size={25}/>
                </>
            ),
            href: "mailto:mohammeduvaiz0786@gmail.com"
        },
        {
            id: 4,
            child:(
                <>
                Resume  <BsFillPersonLinesFill size={25}/>
                </>
            ),
            href: "/resume.pdf",
            download: true
        },
    ]
  return (
    <div className='hidden fixed top-[32%] left-0 lg:flex flex-col'>
        <ul>
        {socialLinks.map(({id,child,href,download})=>(
            <li key={id}  className='w-32 px-2 bg-opacity-65 bg-gray-500 flex ml-[-85px] justify-between  items-center h-14 hover:ml-[0px] hover:rounded-r-md duration-300'>
                <a download={download} href={href} className='flex justify-between w-full items-center text-white' target='blank' >
                    <>
                 {child}
                    </>
                </a>
            </li>
        ))}
        </ul>
    </div>
  )
}

export default SocialLinks
