import React from 'react'
import Image from 'next/image'
import  {FaInstagram,FaGithub,FaLinkedin} from 'react-icons/fa'
import mail from '../public/mail.png'
const contact = () => {
  return (
    <div className='mt-[50px] py-5'>
        <Image src={mail} className='relative top-[180px] left-[310px] rotate-[25deg] z-[10]' width={100} height={300}></Image>
        <div className="flex justify-between">
            <div className="p-4 my-auto">
                        <h1 className='text-5xl text-[#E9E6D5] font-bold mb-[50px]'>Contact me</h1>


                <h1 className='text-3xl p-4 text-[#E9E6D5] font-bold'>Let's build your desired website !</h1>
              <br />
                <hr />
                <br />
                <div className="flex justify-between p-4">
                <p className=' text-[#E9E6D5]'>m.zakariahamoudi@gmail.com</p>
<div className="flex gap-5">
                    <FaLinkedin className='text-[#E9E6D5] text-2xl'/>
                    <FaGithub className='text-[#E9E6D5] text-2xl'/>
                    <FaInstagram className='text-[#E9E6D5] text-2xl'/>
                </div>
                </div>
                
            </div>
            <form action="" className=''>
                <input type="text" className='bg-transparent border-2 rounded-md w-[400px] border-[#E9E6D5] p-3' placeholder='Your Name' /><br />
                <input type="email" className='bg-transparent border-2 rounded-md w-[400px] border-[#E9E6D5] mt-[20px] p-3' placeholder='Your Email' /><br />
                <textarea name="" className='bg-transparent border-2 rounded-md w-[400px] border-[#E9E6D5] p-3 mt-[20px]' id="" cols="35" rows="10" placeholder="How can i help you ?" required></textarea><br />
                <button type='submit' className='bg-[#E9E6D5] p-2 px-4 rounded-md '>Send!</button>
            </form>
        </div>
    </div>
  )
}

export default contact