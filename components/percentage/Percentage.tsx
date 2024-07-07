import React from 'react'

export default function Percentage({heading, label}) {
  return (
    <div className='w-[100%]  p-2'>
    <span className='flex h-10 justify-between items-center pb-4 font-bold text-lg'>
      <h1 className='text-white'>{heading}</h1>
      <p className='text-white'>{label}</p>
      </span>
      <div className='border-2 border-[rgb(74,149,210)] h-5 w-[100%] rounded-md'>
      <div className='h-4 w-[90%] bg-blue-500 border border-[rgb(33,66,103)] rounded-md' style={{ width: `${label}`}}></div>
      </div>
    </div>
  )
}
