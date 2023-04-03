import React from 'react'
import {BsGlobe} from 'react-icons/bs'
import {ImLocation} from 'react-icons/im'
import {MdSchool} from 'react-icons/md'
const bar = () => {
  return (
    <div className='border-t-2 mt-[50px] border-b-2 py-5  flex justify-between px-4 mx-[250px] text-[#E9E6D5] border-[#747373]'>
        <p className='flex gap-3 text-xl'><BsGlobe className='text-3xl font-bold'/> Front-end developer</p>
        <p className='flex gap-3 text-xl'> <ImLocation className='text-3xl font-bold'/>Oran,Algeria</p>
        <p className='flex gap-3 text-xl'><MdSchool className='text-3xl font-bold'/>High school student</p>


    </div>
  )
}

export default bar