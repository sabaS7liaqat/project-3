import React from 'react'
import Image from 'next/image'
import { GrFacebookOption } from "react-icons/gr";
import { PiTwitterLogoFill } from 'react-icons/pi';
import { RiLinkedinLine } from 'react-icons/ri';
import Navbar from '../navbar/Navbar';
import NavbarII from '../navbarII/NavbarII';

export default function HeroSection() {
  return (
    <div>
    <div className=' bg-[rgb(8,28,41)] h-screen w-[100%] px-24 flex justify-between  '>
    <div className=' w-[55%] flex flex-col justify-center gap-24 pt-32'>
      <div className=''>
      <div className=' flex flex-col justify-center'>
        <h1 className='text-6xl text-white font-bold'>Hi, I'm Saba Shahzadi</h1>
        <h2 className='text-blue-500 text-4xl pt-3 font-bold' >Frontend Developer<span className='font-normal'>|</span></h2>
        <p className='text-white py-7'>An aspiring web developer with a passion for creating dynamic and user-friendly websites. I believe that combining functionality and good design is key to creating amazing websites and every step you take is a valuable part of your unique path towards self-discovery and personal growth,Stay curious, be open to new possibilities, and embrace the learning opportunities that come your way as you progress on your journey so come along with me as I explore the world of web development and strive to be creative and innovative with every line of code I write.</p>
        
        <div className='flex gap-8 pt-2 font-semibold'>
          <button className='  bg-[rgb(8,28,41)] text-blue-500 py-2 px-7 border-blue-500 border-2 rounded hover:text-[rgb(8,28,41)] hover:bg-blue-500'>Hire Me</button>
          <button className='  bg-[rgb(8,28,41)] text-blue-500 py-2 px-5 border-blue-500 border-2 rounded hover:text-[rgb(8,28,41)] hover:bg-blue-500'>Let's Talk</button>
        </div>
      </div>
    </div>
    <div>
        <div className='flex gap-4 justify-items-end'>
        <span className='text-blue-500 border border-blue-500 rounded-full w-9 p-2 mt-8'><GrFacebookOption /></span>
        <span className='text-blue-500 border border-blue-500 rounded-full w-9 p-2  mt-8'><PiTwitterLogoFill /></span>
        <span className='text-blue-500 border border-blue-500 rounded-full w-9 p-2  mt-8'><RiLinkedinLine /></span>
      </div>
    </div>
    </div >

    
      
      <div className='w-[40%]  py-5'>
          <Image  src='/images/Profile pic2.png' width={950} height={950}  alt='profile picture' className='w-[900%] h-[97%] '/>
      </div>

  </div>
  </div>
  )
} 
