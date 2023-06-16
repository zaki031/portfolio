import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
const about = () => {
  return (
    <div className='mt-[70px] bg-[#231F1D]'>
<h1 className='text-4xl font-bold text-[#E9E6D5]'>About me</h1>
  <p className='p-3 text-[#C4C4C4] text-xl'>
  I have a strong passion for creating amazing things on the internet. My interests lie in machine learning and web development, and I am constantly eager to expand my knowledge. I take pride in my ability to build high-quality web applications and write clean code.<br />

  </p>
  <h1 className='text-4xl duration-300 ease-out   hover:-translate-y-1  font-bold text-[#E9E6D5] flex justify-end'><a href="/about" className='flex gap-3'> More about me <AiOutlineArrowRight/></a></h1>
    </div>
  )
}

export default about