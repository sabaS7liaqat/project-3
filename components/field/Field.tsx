import React from 'react'

export default function Field({placeholder, type, maxInputLength }) {
  return (

      <input type={type} placeholder={placeholder} maxLength={maxInputLength} className=' text-white bg-transparent border-[rgb(33,66,103)] border-4 rounded-sm p-3 w-[400px] font-semibold '/>

  )
}