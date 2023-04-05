import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
const about = () => {
  return (
    <div className='mt-[70px]'>
<h1 className='text-4xl text-[#E9E6D5]'>About me</h1>
  <p className='p-3 text-[#C4C4C4] text-xl'>
  I’m obsessed with making cool things  on the net,
interested in machine learning and web development and I’m starving to learn new stuff! <br />
I'm confident in my ability to create high-quality 
web applications. <br />

  </p>
  <h1 className='text-4xl duration-300 ease-out   hover:-translate-y-1  font-bold text-[#E9E6D5] flex justify-end'><a href="/about" className='flex gap-3'> More about me <AiOutlineArrowRight/></a></h1>
    </div>
  )
}

export default about