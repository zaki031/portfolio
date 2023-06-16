import React from 'react'
import { useRef } from 'react';

import Image from 'next/image'
import  {FaInstagram,FaGithub,FaLinkedin,FaTwitter} from 'react-icons/fa'
import emailjs from '@emailjs/browser';

const contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_22iprxm', 'template_d5zpeof', form.current, 'FF57SXaLLS0bpfMdi')
        .then((result) => {
            console.log(result.text);
            alert("Mail sent!")
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };
  return (
    <div className='mt-[50px] bg-[#231F1D] py-5 z-[1]'>
        <div className="justify-between lg:flex">
            <div className="my-auto lg:p-4">
                        <h1 className='text-4xl text-center text-[#E9E6D5] font-bold mb-[50px]'>Contact me</h1>


                <h1 className='text-3xl p-4 text-[#E9E6D5] text-center font-bold'>Let's build your desired website !</h1>
              <br />
                <hr />
                <br />
                <div className="justify-between text-center lg:flex lg:p-4">
                <p className=' text-[#E9E6D5]'>m.zakariahamoudi@gmail.com</p>
<div className="flex justify-center gap-5 text-center my-[30px] lg:my-0 ">
                    <a href="https://www.linkedin.com/in/zakaria-hamoudi-270306243/"><FaLinkedin className='text-[#E9E6D5] hover:scale-[1.10] duration-300  text-2xl'/></a>
                    <a href="https://github.com/zaki031"><FaGithub className='text-[#E9E6D5] hover:scale-[1.10] duration-300  text-2xl'/></a>
                    <a href="https://twitter.com/hamoudi_zaki31"><FaTwitter className='text-[#E9E6D5] hover:scale-[1.10] duration-300  text-2xl'/></a>
                    <a href="https://www.instagram.com/zaki.owo1/"><FaInstagram className='text-[#E9E6D5] hover:scale-[1.10] duration-300  text-2xl'/></a>
                </div>
                </div>
                
            </div>
            <form ref={form} onSubmit={sendEmail} className='text-center'>
                <input type="text" className='bg-transparent border-2 focus:border-0 text-[#E9E6D5] rounded-md lg:w-[400px] w-[300px] border-[#E9E6D5] p-3' name="from_name" placeholder='Your Name' /><br />
                <input type="email" className='bg-transparent border-2 text-[#E9E6D5] rounded-md lg:w-[400px] w-[300px] border-[#E9E6D5] mt-[20px] p-3' placeholder='Your Email' name="from_email" /><br />
                <textarea  className='bg-transparent border-2 text-[#E9E6D5] rounded-md lg:w-[400px] w-[300px] border-[#E9E6D5] p-3 mt-[20px]' id="" cols="35" rows="10" name="message" placeholder="How can i help you ?" required></textarea><br />
                <button type='submit' name="send" className='bg-[#E9E6D5] p-2 lg:w-[400px] w-[300px] text-black px-4 rounded-md '>Send!</button>
            </form>
        </div>
    </div>
  )
}

export default contact