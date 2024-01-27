import React from 'react'
import portfolio1 from '../assets/portfolio-img/1.png'
import portfolio2 from '../assets/portfolio-img/2.png'
import portfolio3 from '../assets/portfolio-img/3.png'
import portfolio4 from '../assets/portfolio-img/4.png'
import portfolio5 from '../assets/portfolio-img/5.png'
import portfolio6 from '../assets/portfolio-img/6.png'

function Portfolio() {
    const portfolioList = [
        {
            id: 1,
            title: "BlogApp using Node.JS",
            src: portfolio1,
            demo: "",
            code: "https://github.com/gr8uvaiz/iblog"
        },
        {
            id: 2,
            title: "Url Shortner using Node.JS",
            src: portfolio2,
            demo: "",
            code: "https://github.com/gr8uvaiz/url-shortner"
        },
        {
            id: 3,
            title: "Portfolio using React.JS",
            src: portfolio3,
            demo: "",
            code: ""
        },
        {
            id: 4,
            title: "NewsApp using HTML,CSS,JS",
            src: portfolio4,
            demo: "",
            code: "https://github.com/gr8uvaiz/NewsHub-Timely_News_Updates"
        },
        {
            id: 5,
            title: "WeatherApp using HTML,CSS,JS",
            src: portfolio5,
            demo: "",
            code: "https://github.com/gr8uvaiz/new-weather-app"
        },
        {
            id: 6,
            title: "Bubble Game using HTML,CSS,JS",
            src: portfolio6,
            demo: "",
            code: ""
        },
    ]
    return (
        <div name="portfolio" className='pt-32  bg-gradient-to-b flex justify-center from-[#0b1120] to-[#0b243a] w-full h-full'>
            <div className='w-3/4 py-4'>
                <div>
                    <p className="text-3xl w-fit border-b-4 text-white border-gray-400 font-bold">Portfolio</p>
                    <p className='text-gray-400 my-4 text-xl'>"Let's go through my projects."</p>
                </div>
                <div className='py-12 grid md:grid-cols-3 sm:grid-cols-2 gap-12'>
                    {portfolioList.map(({ id, title, src, demo, code }) => (
                        <a key={id} href={code} target='_blank'>
                            <div  className='rounded-xl cursor-pointer hover:scale-105 duration-200  text-gray-400 shadow-gray-600 shadow-md'>
                                <img className='rounded-xl' src={src} alt="" />
                                <p className='text-center font-bold py-4 '><span className='capitalize border-b-4 text-white w-fit  border-gray-400'>{title}</span></p>
                                {/* <div className='flex my-4 justify-center gap-28'>
                                    <a href={demo} target='_blank'>
                                        <p>Demo</p>
                                    </a>
                                    <a href={code} target='_blank'>
                                        <p> Code</p>
                                    </a>
                                </div> */}
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
        
    )
}

export default Portfolio
