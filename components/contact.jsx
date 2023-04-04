import React from 'react'
import Image from 'next/image'
import  {FaInstagram,FaGithub,FaLinkedin,FaTwitter} from 'react-icons/fa'
import mail from '../public/mail.png'
const contact = () => {
  return (
    <div className='mt-[50px] py-5'>
        <Image src={mail} alt="mail" className='relative hidden lg:block top-[180px] left-[310px] rotate-[25deg] z-[10]' width={100} height={300}></Image>
        <div className="justify-between lg:flex">
            <div className="my-auto lg:p-4">
                        <h1 className='text-5xl text-[#E9E6D5] font-bold mb-[50px]'>Contact me</h1>


                <h1 className='text-3xl p-4 text-[#E9E6D5] text-center font-bold'>Let's build your desired website !</h1>
              <br />
                <hr />
                <br />
                <div className="justify-between text-center lg:flex lg:p-4">
                <p className=' text-[#E9E6D5]'>m.zakariahamoudi@gmail.com</p>
<div className="flex justify-center gap-5 text-center my-[30px] lg:my-0 ">
                    <a href="https://www.linkedin.com/in/zakaria-hamoudi-270306243/"><FaLinkedin className='text-[#E9E6D5] text-2xl'/></a>
                    <a href="https://github.com/zaki031"><FaGithub className='text-[#E9E6D5] text-2xl'/></a>
                    <a href="https://twitter.com/hamoudi_zaki31"><FaTwitter className='text-[#E9E6D5] text-2xl'/></a>
                    <a href="https://www.instagram.com/zaki.owo1/"><FaInstagram className='text-[#E9E6D5] text-2xl'/></a>
                </div>
                </div>
                
            </div>
            <form action="" className='text-center'>
                <input type="text" className='bg-transparent border-2 text-[#E9E6D5] rounded-md lg:w-[400px] w-[300px] border-[#E9E6D5] p-3' placeholder='Your Name' /><br />
                <input type="email" className='bg-transparent border-2 text-[#E9E6D5] rounded-md lg:w-[400px] w-[300px] border-[#E9E6D5] mt-[20px] p-3' placeholder='Your Email' /><br />
                <textarea name="" className='bg-transparent border-2 text-[#E9E6D5] rounded-md lg:w-[400px] w-[300px] border-[#E9E6D5] p-3 mt-[20px]' id="" cols="35" rows="10" placeholder="How can i help you ?" required></textarea><br />
                <button type='submit' className='bg-[#E9E6D5] p-2 lg:w-[400px] w-[300px] px-4 rounded-md '>Send!</button>
            </form>
        </div>
    </div>
  )
}

export default contact