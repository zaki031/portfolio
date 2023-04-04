import React from 'react'
import {BsGlobe} from 'react-icons/bs'
import {ImLocation} from 'react-icons/im'
import {MdSchool} from 'react-icons/md'

const bar = () => {
  return (
    <div className='border-t-[1px]  border-b-[1px] py-3 mt-[70px]  flex justify-between px-4  text-[#E9E6D5] border-[#747373]'>
        <p className='flex gap-3 text-xl '><BsGlobe className='text-3xl font-bold text-[#747373]'/> Front-end developer</p>
        <p className='flex gap-3 text-xl'> <ImLocation className='text-3xl font-bold text-[#747373] '/>Oran,Algeria</p>
        <p className='flex gap-3 text-xl'><MdSchool className='text-3xl font-bold text-[#747373] '/>High school student</p>


    </div>
  )
}

export default bar