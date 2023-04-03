import React from 'react'
import Image from 'next/image'
import pic from '../public/pic.png'
import code from '../public/code.png'
import laptop from '../public/laptop.png'
import vs from '../public/vs.png'


const home = () => {
  return (
    <div className=' mx-[250px] mt-[100px]   '>
        <div className="flex justify-evenly">
             <Image src={pic} className='rounded-md ' width={300} height={(500)}></Image>
        <div className="txt my-auto text-[#E9E6D5]">
            <h3 className='relative left-3'>Hi I'm</h3>
            <h1 className='font-bold text-8xl z-[2]'>Hamoudi <br /> mohammed <br />Zakaria</h1>
        </div>
        <Image src={code} className='absolute right-2 rotate-[20deg]  z-[-11]' width={200} height={200}></Image>
        <Image src={laptop} className='absolute left-2 rotate-[20deg]  z-[-11]' width={200} height={200}></Image>

        </div>
        <p className='text-[#E9E6D5] relative p-4 top-10  text-3xl'>I’m obsessed with making cool things  on the net,
interested in machine learning and web development and I’m starving to learn new stuff!</p>
       
    </div>
  )
}
export default home