import React, { useState } from 'react'
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { Link } from 'react-scroll';


function Navbar() {
    const [nav, setNav] = useState(false)
    const links = [
        {
            id: 1,
            link: "home",
        },
        {
            id: 2,
            link: "about",
        },
        {
            id: 3,
            link: "portfolio",
        },
        {
            id: 4,
            link: "skills",
        },
        {
            id: 5,
            link: "contact",
        }
    ]
    return (
        <div className=' flex justify-between items-center w-full px-4 h-16 bg-[#0b1120] fixed text-white'>
            <div>
                <Link smooth duration={500} to={"home"}>
                <span className='font-signature text-5xl ml-2 cursor-pointer'>Uvaiz</span>
                </Link>
                </div>
            <ul className='hidden md:flex gap-6 '>
                {links.map(({ id, link }) => (
                    <Link key={id} to={link} smooth duration={500}>
                        <li className='capitalize text-gray-500 hover:scale-105 font-medium duration-200 cursor-pointer'>{link}</li>
                    </Link>
                ))}
            </ul>

            <div className='text-gray-500 cursor-pointer z-10 md:hidden' onClick={() => setNav(!nav)}>
                {nav ? <RxCross2 size={30} /> : <RxHamburgerMenu size={30} />}
            </div>


            {nav && <ul className='absolute flex flex-col justify-center items-center top-0 left-0 w-full h-screen bg-gradient-to-b from-[#0b1120] to-[#0b243a] '>
                {links.map(({ id, link }) => (
                    <Link onClick={() => setNav(!nav)} key={id} to={link} smooth duration={500}>
                        <li className='capitalize text-gray-500 text-2xl py-4 cursor-pointer hover:scale-105 duration-200'>{link}</li>
                    </Link>
                ))}
            </ul>


            }


        </div>
    )
}

export default Navbar
