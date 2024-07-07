import React from 'react'
import Field from '../field/Field'

export default function ContactSection() {
  return (
    <div className='bg-[rgb(8,28,41)] h-screen w-screen text-center space-y-[62px] '>
      <div className='space-y-2'>
        <div className='text-4xl font-semibold py-12 '>
            <h1 className='text-white'>Contact <span className='text-blue-500'>Me!</span></h1>
        </div>

      <div className='w-[50%] mx-auto space-y-2 '>
        <div className='w-full flex gap-1 justify-between'>
        <Field type='text' placeholder={"Full Name"} maxInputLength={30}/>
        <Field type='Email' placeholder={"Email Address"} maxInputLength={20} />
        </div>

        <div className='w-full flex justify-between gap-1'>
        <Field type='text' placeholder={"Mobile Number"} maxInputLength={11} />
        <Field type='text' placeholder={"Email Subject"} maxInputLength={30}/>
        </div>
      </div>

      <div className='flex flex-col w-[50%] mx-auto space-y-4 mb-7 justify-start'>
        <textarea placeholder="Your Message" rows="4"
          className="text-white bg-transparent border-[rgb(33,66,103)] border-4 rounded-sm  w-[800px] h-72 font-semibold align-text-top p-3"
        ></textarea>
      
        <button className='  bg-[rgb(8,28,41)] text-blue-500 py-2 px-7 border-blue-500 border-2 rounded w-32 mx-auto hover:text-[rgb(8,28,41)] hover:bg-blue-500'>Submit</button>
        </div>
      </div>

      <div className='bg-[rgb(19,46,67)] text-white p-4 text-start pl-16 '>
          <p>Copyright 2024 by BRMKL | All rights Reserved
          </p>
      </div>
</div>
        
  )
}
