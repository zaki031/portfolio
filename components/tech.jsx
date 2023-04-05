import React from 'react'
import {SiTypescript,SiFirebase,SiTailwindcss,SiJavascript,SiNextdotjs,SiGit,SiReact,SiDocker,SiPython} from 'react-icons/si'
const tech = () => {
  return (
    <div className='mt-[50px] bg-[#231F1D] z-[1]'>
        <h1 className='text-4xl text-[#E9E6D5]'>Tech I use</h1>
        <div className="grid grid-cols-3 grid-rows-3 gap-4 p-3 lg:grid-rows-2 lg:grid-cols-4">
  <div className="bg-[#58555491] duration-300 ease-out  shadow-md hover:-translate-y-1  text-white text-center py-4 rounded-md">
    <SiTypescript className='mx-auto text-3xl text-[#E9E6D5]'/>
    <br />
    <p>Typescript</p>
  </div>
  <div className="bg-[#58555491] duration-300 ease-out  shadow-md hover:-translate-y-1  text-white text-center py-4 rounded-md">
  <SiJavascript className='mx-auto text-3xl text-[#E9E6D5]'/>
  <br />
    <p>Javascript</p>
  </div>
  <div className="bg-[#58555491] duration-300 ease-out  shadow-md hover:-translate-y-1  text-white text-center py-4 rounded-md">
    <SiNextdotjs className='mx-auto text-3xl text-[#E9E6D5]'/>
    <br />
    <p>Next Js</p>
  </div>
  <div className="bg-[#58555491] duration-300 ease-out  shadow-md hover:-translate-y-1  text-white text-center py-4 rounded-md">
    <SiReact className='mx-auto text-3xl text-[#E9E6D5]'/>
    <br />
    <p>React Js</p>
  </div>
  <div className="bg-[#58555491] duration-300 ease-out  shadow-md hover:-translate-y-1  text-white text-center py-4 rounded-md">
    <SiGit className='mx-auto text-3xl text-[#E9E6D5]'/>
    <br />
    <p>Git</p>
  </div>
  <div className="bg-[#58555491] duration-300 ease-out  shadow-md hover:-translate-y-1  text-white text-center py-4 rounded-md">
    <SiDocker className='mx-auto text-3xl text-[#E9E6D5]'/>
    <br />
    <p>Docker</p>
  </div>
  
  <div className="bg-[#58555491] duration-300 ease-out  shadow-md hover:-translate-y-1  text-white text-center py-4 rounded-md">
    <SiFirebase className='mx-auto text-3xl text-[#E9E6D5]'/>
    <br />
    <p>Firebase</p>
  </div>
  <div className="bg-[#58555491] duration-300 ease-out  shadow-md hover:-translate-y-1  text-white text-center py-4 rounded-md">
    <SiTailwindcss className='mx-auto text-3xl text-[#E9E6D5]'/>
    <br />
    <p>Tailwind css</p>
  </div>
</div>
    </div>
  )
}

export default tech