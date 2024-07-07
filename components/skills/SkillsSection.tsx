import React from 'react'
import Percentage from '../percentage/Percentage'


export default function SkillsSection() {
  return (
    <div className='bg-[rgb(19,46,67)] h-screen text-center px-24'>
       <div className='text-4xl font-semibold py-12 '>
            <h1 className='text-white'>My <span className='text-blue-500'>Journey</span></h1>
        </div>

        
       <div className='flex flex-wrap  items-center justify-between  py-2'>
        <div className='w-full md:w-1/2'>
        <h1 className='text-white text-start font-bold text-2xl py-4'>Coding Skills</h1>
          <div className=' border-2 border-[rgb(74,149,210)] p-4 space-y-8 w-[95%] py'>
          <Percentage  heading={"HTML"} label={" 85%"}  />
          <Percentage  heading={"CSS"} label={" 80%"} />
          <Percentage  heading={"JavaScript"} label={" 40%"}  />
          <Percentage  heading={"Next.js"} label={" 30%"}  />
            </div>
        </div>

        
        <div className='w-full md:w-1/2'>
        <h1 className='text-white text-start font-bold text-2xl py-4'>Professional Skills</h1>
          <div className=' border-2 border-[rgb(74,149,210)] p-4 space-y-8 w-[95%]'>
          <Percentage  heading={"Assignments"} label={" 95%"}  />
          <Percentage  heading={"Project-1"} label={" 90%"} />
          <Percentage  heading={"Project-2"} label={" 60%"} />
          <Percentage  heading={"Project-3"} label={" 90%"} />
          </div>
        </div>
       </div>
       
    </div>
  )
}
