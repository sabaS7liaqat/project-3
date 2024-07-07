import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='flex px-24 items-center bg-[rgb(8,28,41)] w-screen'>
        <h1 className='text-white '>Saba.</h1>
        <div className="h-12 flex gap-5  w-screen text-white justify-end items-center ">
      <Link href="/HeroSection" className='hover: text-blue-500'>Home</Link>
      <Link href="/AboutSection">About</Link>
      <Link href="/EducationSection">Education</Link>
      <Link href="/SkillsSection">Skills</Link>
      <Link href="/ContactSection">Contact</Link>

      </div>
    </div>
  )
}
