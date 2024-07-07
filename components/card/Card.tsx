import React from 'react'
import { BiSolidCheckbox } from 'react-icons/bi'

export default function Card({label, heading, paragraph}) {
  return (
    <div className=' text-white h-28 w-[93%] p-2 rounded-lg border border-[rgb(74,149,210)]' >
      <h3 className='text-blue-500 flex items-center gap-1' > <BiSolidCheckbox /> {label}</h3>
      <h1>{heading}</h1>
      <p>{paragraph}</p>
    </div>
  )
}
