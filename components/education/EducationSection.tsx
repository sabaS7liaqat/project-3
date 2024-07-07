import React from 'react'
import Card from '../card/Card'
import { MdCircle } from 'react-icons/md'

export default function EducationSection() {
  return (
    <div className='bg-[rgb(8,28,41)] h-screen text-center px-24'>
      <div className='text-4xl font-semibold py-8 '>
            <h1 className='text-white'>My <span className='text-blue-500'>Journey</span></h1>
        </div>
      {/* Education card */}
      <div className=' flex flex-wrap justify-between'>

    <div className='w-full md:w-1/2 text-start'>
      <h1 className='text-white pl-5 font-bold text-2xl'> Education</h1>
      <div className='flex flex-col'>
        <span className='text-blue-500 flex-grow'>
        <MdCircle /></span> 
        <div  className=' border-l-2 border-l-[rgb(74,149,210)] flex-grow pl-4 space-y-4'>
          <Card  label={"2020 - 2022"} heading={"Masters"} paragraph={"I chose Applied psychology to connect with peoples and developed a deep understanding of human behavior, mental processes, and research principle."}/>
          <Card  label={"2018 - 2020"} heading={"Bachelor"} paragraph={"I took a combination of Psychology, Computer Science, and Geography help me to explore how technology and environment impact on human behavior."}/>
       </div>

        <span className='text-blue-500 flex-grow '>
        <MdCircle /></span> 
        <div  className=' border-l-2 border-[rgb(74,149,210)] flex-grow pl-4 space-y-4'>
          <Card  label={"2015 - 2017"} heading={"Intermediate"} paragraph={" Because of strong foundation and passion Continued me with Pysics, Chemisry and Biology to deepen my understanding and exciting career oppertunities."}/>
          <Card  label={"2013 - 2015"} heading={"Matriculation"} paragraph={"I choose Physics, Chemistry, and Biology in matriculation because i was curious saw these subjects as challenging and rewarding."}/>
        </div>
      
        <span className='text-blue-500'>
        <MdCircle /></span>
      </div>
    </div>

  
{/* Experience card */}
<div className='w-full md:w-1/2 text-start'>
      <h1 className='text-white pl-5 font-bold text-2xl'> Experience</h1>
      <div className='flex flex-col'>
        <span className='text-blue-500 flex-grow'>
        <MdCircle /></span> 
        <div  className=' border-l-2 border-[rgb(74,149,210)] flex-grow pl-4 space-y-4'>
          <Card  label={"Course Work"} heading={"Assignments"} paragraph={"I have designed login page, an Amazon Website using HTML, CSS, and JavaScript, submit coursework assignment and notes and practised it online. "}/>
          <Card  label={"Project-1"} heading={"HTML and CSS"} paragraph={"I successfully transform a figma file to a visually appealing website having different secion and learned valuable lessons and excitted to continue refining it."}/>
       </div>

        <span className='text-blue-500 flex-grow'>
        <MdCircle /></span> 
        <div  className=' border-l-2 border-[rgb(74,149,210)] flex-grow pl-4 space-y-4'>
          <Card  label={"Project-2"} heading={"JavaScript"} paragraph={"I have applied logics to given conditions and  bring my website to life with JS, adding dynamic and interactive elements that enhance the user experience."}/>
          <Card  label={"Project-3"} heading={"Portfolio on NEXT.JS"} paragraph={"Building portfolio with Next.js was a fantastic experience,It allowed me to reflect on my progress,showcase my accomplishments by using its powerful features."}/>
        </div>
        <span className='text-blue-500'>
        <MdCircle /></span>
      </div>
    </div>

    </div>
  </div>

  )
}
