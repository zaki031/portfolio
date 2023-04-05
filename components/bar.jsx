import React from 'react'
import {BsGlobe} from 'react-icons/bs'
import {ImLocation} from 'react-icons/im'
import {MdSchool} from 'react-icons/md'

const bar = () => {
  return (
    <div className='border-t-[1px] bg-[#231F1D] z-[1]  border-b-[1px] py-3 mt-[70px]  lg:flex justify-between px-4  text-[#E9E6D5] border-[#747373]'>
        <p className='flex justify-center gap-3 text-sm lg:text-xl '><BsGlobe className='text-2xl lg:text-3xl font-bold text-[#747373]'/> Front-end developer</p>
        <p className='flex justify-center gap-3 text-sm lg:text-xl'> <ImLocation className='text-2xl lg:text-3xl font-bold text-[#747373] '/>Oran,Algeria</p>
        <p className='flex justify-center gap-3 text-sm lg:text-xl '><MdSchool className='text-2xl lg:text-3xl font-bold text-[#747373] '/>High school student</p>


    </div>
  )
}

export default bar