import React from 'react'
import Image from 'next/image'
import pic from '../public/pic.png'
import code from '../public/code.png'
import laptop from '../public/laptop.png'


const hero = () => {
  return (
    <div className=' mt-[100px]   '>
        <div className="flex justify-between">
             <Image src={pic} alt='me' className='rounded-md ' width={300} height={(500)}></Image>
        <div className="txt my-auto text-[#E9E6D5]">
            <h3 className='relative left-3'>Hi I'm</h3>
            <h1 className='font-bold text-8xl z-[2]'>Hamoudi <br /> mohammed <br />Zakaria</h1>
        </div>
        <Image src={code} alt='code' className='absolute right-2 rotate-[20deg]  z-[-11]' width={200} height={200}></Image>
        <Image src={laptop} alt='laptop' className='absolute top-[400px] left-2 rotate-[20deg]  z-[-11]' width={200} height={200}></Image>

        </div>
       
    </div>
  )
}
export default hero