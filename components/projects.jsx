import React from 'react'
import {SiGithub} from "react-icons/si"
import {AiOutlineArrowRight} from 'react-icons/ai'
import {BsBoxArrowUpRight} from "react-icons/bs"
import {SiTypescript,SiFirebase,SiTailwindcss,SiJavascript,SiNextdotjs,SiGit,SiReact,SiDocker,SiPython} from 'react-icons/si'

const projects = () => {
  return (
    <div className='mt-[50px]'>

        <h1 className='text-4xl text-[#E9E6D5]'>Things I made</h1>

        <div className="grid grid-cols-1 gap-4 p-3 grid-cols-rows-3">
            <div className="bg-[#58555491] duration-300 ease-out  shadow-md hover:-translate-y-1   p-4 rounded-md">
                <div className="flex text-[#E9E6D5] text-3xl justify-between">
                <h1 className='font-bold '>SkillUp </h1>
                <div className="flex gap-5">
                                    <a href="https://github.com/zaki031/skillUp"><SiGithub className='' /></a><a href="skill-up2.vercel.app"><BsBoxArrowUpRight /></a>

                </div>
                </div>
                <p className='text-[#C4C4C4] text-xl p-3'>A website for an unreal online school which provide various courses like programing and design...</p>
                <div className="flex gap-3 techs ">
                    <div className="bg-[#E9E6D5]  px-2 rounded-md ">JavaScript</div>
                    <div className="bg-[#E9E6D5] px-2 rounded-md">Tailwind css</div>
                    <div className="bg-[#E9E6D5] px-2 rounded-md ">Next Js</div>
                </div>
            </div>
            <div className="bg-[#58555491]  duration-300 ease-out  shadow-md hover:-translate-y-1 p-4 rounded-md">
                <div className="flex text-[#E9E6D5] text-3xl justify-between">
                <h1 className='font-bold '>7sky's restaurant </h1>
                <div className="flex gap-5">
                                    <a href="https://github.com/zaki031/7sky-s-restaurent"><SiGithub className='' /></a><a href="7sky-s-restaurant.vercel.app"><BsBoxArrowUpRight /></a>

                </div>
                </div>
                <p className='text-[#C4C4C4] text-xl p-3'>7sky's is a restaurent situated in Oran,Algeria which offers a various menu  pizzas, burgers, sandwichs , plats</p>
                <div className="flex gap-3 techs ">
                    <div className="bg-[#E9E6D5]  px-2 rounded-md ">JavaScript</div>
                    <div className="bg-[#E9E6D5] px-2 rounded-md">Tailwind css</div>
                    <div className="bg-[#E9E6D5] px-2 rounded-md ">Next Js</div>
                    <div className="bg-[#E9E6D5] px-2 rounded-md ">Sanity</div>

                </div>
            </div>
            <div className="bg-[#58555491]  duration-300 ease-out  shadow-md hover:-translate-y-1  p-4 rounded-md">
                <div className="flex text-[#E9E6D5] text-3xl justify-between">
                <h1 className='font-bold '>Cryptito </h1>
                <div className="flex gap-5">
                                    <a href="https://github.com/zaki031/Cryptito"><SiGithub className='' /></a><a href="cryptito.vercel.app"><BsBoxArrowUpRight /></a>

                </div>
                </div>
                <p className='text-[#C4C4C4] text-xl p-3'>Cryptito was the project where I got familiar with APIs and Tailwind css, It gives you crypto-currencies information powered by the <a href="https://www.coingecko.com/fr/api" className='underline'>Coingecko API</a></p>
                <div className="flex gap-3 techs ">
                    <div className="bg-[#E9E6D5]  px-2 rounded-md ">JavaScript</div>
                    <div className="bg-[#E9E6D5] px-2 rounded-md">Tailwind css</div>
                    <div className="bg-[#E9E6D5] px-2 rounded-md ">Next Js</div>
                    <div className="bg-[#E9E6D5] px-2 rounded-md ">Coingecko Api</div>

                </div>
            </div>

        </div>
        <h1 className='text-4xl duration-300 ease-out   hover:-translate-y-1  font-bold text-[#E9E6D5] flex justify-end'><a className='flex gap-3' href="/projects">More projects <AiOutlineArrowRight/></a> </h1>

    </div>
  )
}

export default projects