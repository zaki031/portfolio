import React from 'react'
import {SiTypescript,SiFirebase,SiTailwindcss,SiJavascript,SiNextdotjs,SiGit,SiReact,SiDocker,SiPython} from 'react-icons/si'
import {TbBrandGolang} from "react-icons/tb"
const tech = () => {
  return (
    <div className=''>
        <h1 className='text-4xl text-[#E9E6D5]'>Tech I use</h1>
        <div class="grid grid-cols-4 grid-rows-2 gap-4 p-3">
  <div class="bg-[#58555491] text-white text-center py-4 rounded-md">
    <SiTypescript className='mx-auto text-3xl text-[#E9E6D5]'/>
    <br />
    <p>Typescript</p>
  </div>
  <div class="bg-[#58555491] text-white text-center py-4 rounded-md">
  <SiJavascript className='mx-auto text-3xl text-[#E9E6D5]'/>
  <br />
    <p>Javascript</p>
  </div>
  <div class="bg-[#58555491] text-white text-center py-4 rounded-md">
    <SiNextdotjs className='mx-auto text-3xl text-[#E9E6D5]'/>
    <br />
    <p>Next Js</p>
  </div>
  <div class="bg-[#58555491] text-white text-center py-4 rounded-md">
    <SiReact className='mx-auto text-3xl text-[#E9E6D5]'/>
    <br />
    <p>React Js</p>
  </div>
  <div class="bg-[#58555491] text-white text-center py-4 rounded-md">
    <SiGit className='mx-auto text-3xl text-[#E9E6D5]'/>
    <br />
    <p>Git</p>
  </div>
  <div class="bg-[#58555491] text-white text-center py-4 rounded-md">
    <SiDocker className='mx-auto text-3xl text-[#E9E6D5]'/>
    <br />
    <p>Docker</p>
  </div>
  
  <div class="bg-[#58555491] text-white text-center py-4 rounded-md">
    <SiFirebase className='mx-auto text-3xl text-[#E9E6D5]'/>
    <br />
    <p>Firebase</p>
  </div>
  <div class="bg-[#58555491] text-white text-center py-4 rounded-md">
    <SiTailwindcss className='mx-auto text-3xl text-[#E9E6D5]'/>
    <br />
    <p>Tailwind css</p>
  </div>
</div>
    </div>
  )
}

export default tech